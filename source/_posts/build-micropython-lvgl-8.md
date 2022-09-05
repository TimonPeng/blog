---
title: Build MicroPython LVGL 8 Firmware
date: 2021-07-04 15:00:00
tags:
  - Hardware
  - LVGL
  - MicroPython
---

Build MicroPython firmware.

<!--more-->

```Dockerfile
ARG IDF_CLONE_BRANCH_OR_TAG=v4.3
ARG IDF_CHECKOUT_REF=v4.3

FROM espressif/idf:v4.3

USER root

WORKDIR /root
RUN git clone -b dev-8.0 https://github.com/lvgl/lv_micropython.git --recurse-submodules --depth=1

WORKDIR /root/lv_micropython
RUN make -j4 -C mpy-cross

WORKDIR /root/lv_micropython/ports/esp32
COPY makefile .

CMD make -j4 submodules && make -j4
```
