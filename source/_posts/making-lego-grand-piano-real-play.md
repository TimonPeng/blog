---
title: Making LEGO Grand Piano real play
date: 2022-05-17 15:00:00
tags:
  - Hardware
---

The [LEGO Grand Piano 21323](https://www.lego.com/en-gb/product/grand-piano-21323) is a great model, full of clever details and impressive engineering.

<!--more-->

[Gianni had already done a excellent job before](https://www.thenautilus.net/modelli/lego-piano/), I just continued to improve and reduce the size of the whole module, with some minor adjustments.

# Optical Reflective Object Sensor

You can use QRE1113/QRE1114 with [analog](https://www.sparkfun.com/products/9453) or [digital](https://www.sparkfun.com/products/9454) methods and [Arduino codes here](http://adam-meyer.com/arduino/QRE1113).

Normally we use the following connections, but the number of ESP's GPIO is limited, if we have 25 keys need to drive, we need 25 GPIOs to read the analog then.

![Analog Connection](analog.png)

Gianni used the matrix method to make the number of GPIOs needed lesser, only need 15 GPIOs. And only one sensor is being powered at the same time, which will save more battery power.

- 15 for sensors
- 1 for DAC (Digital To Analog Converter)
- 1 for amplifier enable (because some noise here when we set I2S)

# Why choose ESP32-PICO-D4

We need at least 17 GPIO, but `ESP8266` only 8 are available. Although we don't need to use the BLE for now (of course you can also make it as a Bluetooth speaker!).

We could also use the very popular MCU `RP2040` but it has more peripheral than the `ESP32-PICO-D4` and I'm not familiar enough with it.

# Other combination options

You can also use sensor (QRE1113) + analogue switch (TS3V330) + matrix scanning IC ([SX1509](https://learn.sparkfun.com/tutorials/sx1509-io-expander-breakout-hookup-guide), has a powerful keypad engine and use I2C communication), however, this requires long periods of power supply to all sensors.

## Reference

- https://www.thenautilus.net/modelli/lego-piano/
- https://www.newelementary.com/2021/01/lego-ideas-review-21323-grand-piano.html
- https://www.xtronical.com/introduction-to-dac-audio/
- https://www.amobbs.com/forum.php?mod=viewthread&tid=3670170
- https://www.youtube.com/watch?v=Accf54fJn6U
- https://musescore.org/en/handbook/3/soundfonts-and-sfz-files
- https://www.kvraudio.com/forum/viewtopic.php?t=567807
