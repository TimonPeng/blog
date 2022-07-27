---
title: Driving BlackBerry Bold 9900/9930 LCD screen
date: 2022-05-13 15:00:00
tags:
  - Hardware
  - Reverse Engineering
---

# Disassembly / Tear Down

[iFixit](https://ifixit.com/Guide/Blackberry+Bold+9900+Screen+Replacement/122707)

# Screen module

2.8" Samsung LMS279CC01 VA13071907MP4?

- https://inforesheniya.ru/aksessuary-dla-blackberry/aksessuary-dla-blackberry-9900-9930-bold-touch/ekran-lcd-tac-skrin-touchscreen-v-sborke-dla-blackberry-9900-9930-bold-touch/en/

Back Annotation:

- LCD-34042-001/111-1
- LCD-34042-002/111-1

The interesting thing is a portable game console called `Miyoo Mini` also using this LCD too, but not including touch panel.

### Reference

- https://github.com/linux-chenxing/linux-chenxing.org/blob/master/infinity2/miyoomini/index.md
- https://github.com/TriForceX/MiyooCFW/wiki/Miyoo-Mini

## Connector PINs with Touch Panel

Touch IC `CY8CTMA301E-48LQXI`.

![Module back](module-back.jpg)

- https://inforesheniya.ru/aksessuary-dla-blackberry/aksessuary-dla-blackberry-9900-9930-bold-touch/konnektor-lcd-ekrana-lcd-connector-dla-blackberry-9900-9930-bold/en/
- https://www.etradesupply.com/oem-blackberry-bold-touch-9900-lcd-pcb-connector.html

![Module connector PINs](module-connector-pins.png)

## LCD connector

25 PINs, notched on both sides.

![LCD FPC connector](lcd-fpc-connector.jpg)

![LCD FPC](lcd-fpc.jpg)

![LCD connector](lcd-connector.jpg)

# Need MDDI to MIPI Bridge Display Controller?

- IT6616? (ITE)
- TC358760 (Toshiba)
- (Lontium?)
- CM5160 (California Micro Devices)
- HX8369? (Himax)

## Reference

- http://bbs.52rd.com
- https://github.com/linux-chenxing/linux-chenxing.org/discussions/41
