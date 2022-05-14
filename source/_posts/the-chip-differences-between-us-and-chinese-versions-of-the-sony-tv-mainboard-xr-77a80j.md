---
title: >-
  The chip differences between US and Chinese versions of the Sony TV mainboard
  (XR-77A80J)
date: 2022-05-14 15:00:00
tags:
  - Hardware
  - Reverse Engineering
---

The Sony TV sold in China its mainboard can't use Google Services Framework. Many users in China order the US version of the mainboard and replace it manually.

I tried to analyze the all chip/hardware differences in the same model of mainboard and find out which chips are key for these features. This should allow a hard-fixed mainboard to use the US firmware theoretically and use all features properly.

<!--more-->

First of all, the Chinese version of the heatsink is white and the US version is black. It should not be the key for can or can't to use GMS, lmao :)

# BOMs differences

| PCB Annotation | Manufacturer Part |
| -------------- | ----------------- |
| J              |                   |
| IC1609         |                   |
| J1602          |                   |
| IC3101         |                   |
