---
title: Shanghai telecom home users replace SDN gateway
date: 2018-10-01 15:00:00
tags:
  - Hardware
  - Reverse Engineering
---

Replaced HG2821T-U with ZTE F401.

ZTE F401 is the equipment of Shanghai Telecom enterprise users, we can also use it.

<!--more-->

# Get LOID from HG2821T-U

Connect to HG2821T-U and request `http://192.168.1.1/appapi/getstat/000000`, you can get loid from response json data.

{% asset_img get-loid.png Get LOID %}

# Configure ZTE F401

Connect to ZTE F401 and configure network manually:

- IPv4 Address: 192.168.1.2
- Subnet Mask: 255.255.255.0
- Router: 192.168.1.1

Login web anagement interface `http://192.168.1.1`, username and password both `admin`.

Then configure SN, LOID and password as HG2821T-U's LOID.

{% asset_img set-onu.png Set ONU %}

{% asset_img set-ctc.png Set CTC %}

If some random codes in the input box, don't delete and keep them at the end.
