---
title: The Comparison of KNX Protocol Bridges
date: 2023-03-08 15:00:00
tags:
  - Hardware
  - Smart Home
---

Building automation (BAS), also known as building management system (BMS) or building energy management system (BEMS). Previous generation protocol e.g. KNX, Loxone and Z-Wave.

The bridge is designed to integrate previous generation protocol with Apple HomeKit, Google Home and Amazon Alexa.

<!--more-->

# The Comparison

<style>
#bridges-table {
  text-align: center;
}

#bridges-table tr td:first-child {
  font-weight: bold;
}

#bridges-table .yes {
  color: #22c55e;
}

#bridges-table .no {
  color: #ef4444;
}

#bridges-table .not-available {
  background-color: #d4d4d4;
}

#bridges-table .badge {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

#bridges-table .badge img {
  max-height: 20px;
}
</style>

<table id="bridges-table">
  <tr>
    <th>Manufacturer</th>
    <th colspan="2"><a href="https://thinka.eu">Thinka</a></th>
    <th><a href="https://1home.io">1Home<a/></th>
    <th><a href="https://freedompro.eu">Freedompro</a></th>
    <th><a href="https://www.xxter.com/pairot/en">Pairot</a></th>
    <th><a href="http://tseem.com">TSEEM</a></th>
    <th colspan="2"><a href="https://home-assistant.io">Home Assistant</a></th>
  </tr>
  <tr>
    <td>Device</td>
    <td>Thinka for KNX</td>
    <td>Thinka for KNX - Pro</td>
    <td>1Home Bridge for KNX</td>
    <td>Easykon for KNX</td>
    <td>Pairot KNX Bridge for Voice control</td>
    <td>TSE300</td>
    <td>Home Assistant Yellow</td>
    <td>Home Assistant Yellow with PoE</td>
  </tr>
  <tr>
    <td>Price</td>
    <td>€ 739.00</td>
    <td>€ 789.00</td>
    <td>€ 799.00</td>
    <td>€ 730,78</td>
    <td>€ 495.00</td>
    <td>€ ?</td>
    <td>€ 157.49</td>
    <td>€ 171.20</td>
  </tr>
  <tr>
    <td>As router</td>
    <td class="no">NO</td>
    <td class="yes">YES</td>
    <td class="yes">YES</td>
    <td>?</td>
    <td>?</td>
    <td>?</td>
    <td class="no">NO</td>
    <td class="no">NO</td>
  </tr>
  <tr>
    <td>The Next Generation Protocol</td>
    <td>
      <div class="badge">
        <img src="apple-homekit.svg"/>
        <img src="google-assistant.svg"/>
        <img src="amazon-alexa.svg"/>
      </div>
    </td>
    <td>
      <div class="badge">
        <img src="apple-homekit.svg"/>
        <img src="google-assistant.svg"/>
        <img src="amazon-alexa.svg"/>
      </div>
    </td>
    <td>
      <div class="badge">
        <img src="apple-homekit.svg"/>
        <img src="google-assistant.svg"/>
        <img src="amazon-alexa.svg"/>
      </div>
    </td>
    <td>
      <div class="badge">
        <img src="apple-homekit.svg"/>
        <img src="google-assistant.svg"/>
        <img src="amazon-alexa.svg"/>
      </div>
    </td>
    <td>
      <div class="badge">
        <img src="apple-homekit.svg"/>
        <img src="google-assistant.svg"/>
        <img src="amazon-alexa.svg"/>
      </div>
    </td>
    <td>
      <div class="badge">
        <img src="apple-homekit.svg"/>
      </div>
    </td>
    <td>
      <div class="badge">
        <img src="apple-homekit.svg"/>
        <img src="google-assistant.svg"/>
        <img src="amazon-alexa.svg"/>
      </div>
    </td>
    <td>
      <div class="badge">
        <img src="apple-homekit.svg"/>
        <img src="google-assistant.svg"/>
        <img src="amazon-alexa.svg"/>
      </div>
    </td>
  </tr>
  <tr>
    <td>Additions</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td colspan="2">Requires KNXnet/IP router e.g. Weinzierl KNX IP Interface 731 or transceiver e.g. NCN5120, NCN5121, NCN5130, <a href="https://www.opternus.com/de/siemens/knx-chipset">Transceiver from Opternus</a> to communicate with KNX BUS via UDP.</td>
  </tr>
</table>

# KNX IP Interface/Router Online Shop

- https://www.robbshop.nl/en/knx-ip-interface
- https://theblueknx.store
