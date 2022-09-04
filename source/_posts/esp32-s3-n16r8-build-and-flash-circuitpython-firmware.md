---
title: ESP32-S3-N16R8 build and flash CircuitPython firmware
date: 2022-09-04 15:00:00
tags:
  - Hardware
---

CircuitPython is maintained by Adafruit mainly, but only support the boards they listed, and Adafruit doesn't selling any ESP32-S3-N16R8 boards as of this writing.

If you don't set up the correct ESP-IDF configuration, you will see the board won't boot successful and keep throw exceptions like this:

```
ESP-ROM:esp32s3-20210327
Build:Mar 27 2021
rst:0xc (RTC_SW_CPU_RST),boot:0x2b (SPI_FAST_FLASH_BOOT)
Saved PC:0x40378514
SPIWP:0xee
mode:DIO, clock div:2
load:0x3fcd0108,len:0x132c
load:0x403b6000,len:0xb80
load:0x403ba000,len:0x2ea8
entry 0x403b6238
```

# Setting board build args

1. `cp -r espressif_esp32s3_devkitc_1_n8r2 espressif_esp32s3_devkitc_1_n16r8` (Adafruit doesn't support `N16R8`, so choose a ESP32-S3 board with PSRAM is more easier to modification)
2. modify `mpconfigboard.h`
   - change `MICROPY_HW_BOARD_NAME`: `ESP32-S3-DevKitC-1-N8R2` to `ESP32-S3-DevKitC-1-N16R8`
3. modify `mpconfigboard.mk`
   - change `USB_PRODUCT`: `ESP32-S3-DevKitC-1-N8R2` to `ESP32-S3-DevKitC-1-N16R8`
   - change `CIRCUITPY_ESP_FLASH_MODE`: `dio` to `qio` (DIO to QIO for Flash)
   - change `CIRCUITPY_ESP_FLASH_SIZE`: `8MB` to `16MB` (8MB to 16MB for Flash)
4. modify `sdkconfig`
   - change `CONFIG_SPIRAM_MODE_QUAD=y` to `CONFIG_SPIRAM_MODE_OCT=y` (QUAD to OCTAL for PSRAM)
   - change `CONFIG_SPIRAM_SIZE`: `2097152` to `8388608` (2MB to 8MB for PSRAM)

The above configurations is based on the ESP32-S3 documentation, modify flash size and flash mode mainly.

![ESP32-S3 documentation](documentation.png)

I made a docker file to compile the CircuitPython firmware.

```dockerfile
# https://learn.adafruit.com/building-circuitpython/build-circuitpython
# https://docs.circuitpython.org/en/latest/BUILDING.html
# https://learn.adafruit.com/building-circuitpython/espressif-build
FROM python:3

USER root

RUN apt-get update && apt-get -y install \
    git \
    ninja-build cmake libusb-1.0-0 gettext

WORKDIR /root
# it's taking a long time
RUN git clone https://github.com/adafruit/circuitpython.git && \
    cd circuitpython && \
    git checkout 7.3.3 && \
    make fetch-submodules

WORKDIR /root/circuitpython/ports/espressif
RUN esp-idf/install.sh

WORKDIR /root/circuitpython/ports/espressif/boards
# https://github.com/adafruit/circuitpython/tree/main/ports/espressif/boards/espressif_esp32s3_devkitc_1_n8r2
RUN cp -r espressif_esp32s3_devkitc_1_n8r2 espressif_esp32s3_devkitc_1_n16r8 && \
    sed -i 's/ESP32-S3-DevKitC-1-N8R2/ESP32-S3-DevKitC-1-N16R8/g' espressif_esp32s3_devkitc_1_n16r8/mpconfigboard.h && \
    sed -i 's/ESP32-S3-DevKitC-1-N8R2/ESP32-S3-DevKitC-1-N16R8/g' espressif_esp32s3_devkitc_1_n16r8/mpconfigboard.mk && \
    # CIRCUITPY_ESP_FLASH_MODE DIO -> QIO
    sed -i 's/dio/qio/g' espressif_esp32s3_devkitc_1_n16r8/mpconfigboard.mk && \
    # CIRCUITPY_ESP_FLASH_SIZE 8MB -> 16MB
    sed -i 's/8MB/16MB/g' espressif_esp32s3_devkitc_1_n16r8/mpconfigboard.mk && \
    echo 'CIRCUITPY_ESP32_CAMERA = 0' >> espressif_esp32s3_devkitc_1_n16r8/mpconfigboard.mk && \
    #  QUAD -> OCTAL
    sed -i 's/CONFIG_SPIRAM_MODE_QUAD/CONFIG_SPIRAM_MODE_OCT/g' espressif_esp32s3_devkitc_1_n16r8/sdkconfig && \
    # 2MB -> 8MB
    sed -i 's/2097152/8388608/g' espressif_esp32s3_devkitc_1_n16r8/sdkconfig

WORKDIR /root/circuitpython/ports/espressif

VOLUME ["/root/build"]

CMD ["/bin/bash", "-c", "source esp-idf/export.sh && make -j$(getconf _NPROCESSORS_ONLN) BOARD=espressif_esp32s3_devkitc_1_n16r8 && cp -r build-espressif_esp32s3_devkitc_1_n16r8/* /root/build"]
```

Usage:

```
docker build . -t circuitpython
docker run -it --rm -v $(PWD)/build:/root/build circuitpython
```

# Flash firmware

```makefile
esptool.py --port /dev/cu.SLAB_USBtoUART --chip esp32s3 --baud 921600 \
    erase_flash && \
esptool.py --port /dev/cu.SLAB_USBtoUART --chip esp32s3 --baud 921600 \
    --before=default_reset --after=hard_reset \
    write_flash --flash_mode qio --flash_freq 80m --flash_size 16MB \
    0x0 build/firmware.bin
```

You will see the storage is already connected via USB then, and the REPL also working fine.

![USB storage](storage.png)

![REPL](repl.png)
