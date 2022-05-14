---
title: Drive BlackBerry Bold 9900/9930 LCD screen
date: 2022-05-13 15:00:00
tags:
  - Hardware
  - Reverse Engineering
---

# Disassembly / Tear Down

[iFixit](https://ifixit.com/Guide/Blackberry+Bold+9900+Screen+Replacement/122707)

# Screen module

- https://inforesheniya.ru/aksessuary-dla-blackberry/aksessuary-dla-blackberry-9900-9930-bold-touch/ekran-lcd-tac-skrin-touchscreen-v-sborke-dla-blackberry-9900-9930-bold-touch/en/

## LCD

2.8" Samsung LMS279CC01 (Back Annotation: LCD-34042-001/111-1)

The interesting thing is a portable game console called `Miyoo Mini` also using this LCD panel too.

### Reference

- https://github.com/linux-chenxing/linux-chenxing.org/blob/master/infinity2/miyoomini/index.md
- https://github.com/TriForceX/MiyooCFW/wiki/Miyoo-Mini

## Connector

- https://inforesheniya.ru/aksessuary-dla-blackberry/aksessuary-dla-blackberry-9900-9930-bold-touch/konnektor-lcd-ekrana-lcd-connector-dla-blackberry-9900-9930-bold/en/
- https://www.etradesupply.com/oem-blackberry-bold-touch-9900-lcd-pcb-connector.html

### With Touch Panel PINs

![Connector PINs](connector-pins.png)

# MDDI to MIPI Bridge Display Controller

- IT6616? (ITE)
- TC358760 (Toshiba)
- (Lontium?)
- CM5160 (California Micro Devices)
- HX8369? (Himax)

## Reference

- http://bbs.52rd.com
