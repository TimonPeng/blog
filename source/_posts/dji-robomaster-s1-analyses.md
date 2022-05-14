---
title: DJI RoboMaster S1 analyses
date: 2019-09-08 15:00:00
tags:
  - Hardware
  - Reverse Engineering
---

<!--more-->

# Network

## TCP Ports

- 21 Anonymous login FTP
- 8905 Unknown
- 8906 Unknown
- 8907 Unknown
- 8910 Unknown
- 8909 Unknown
- 8912 Unknown
- 8913 Unknown
- 8916 States logger

### FTP

Some .DAT files in the directorys.

![FTP Dirs](ftp-dirs.png)

### TCP/8916

![TCP 8916](8916.png)

## UDP Ports

- 10607 Heartbeat?

### UDP/10607

request

`308088630000005b401c64006400c005140000640064006400c005140000640014006400c00514000064000101040102`

response

`09801624000000bb01`

# Firmware

## Version File

xw607_0000_v00.05.0028_20190726.pro.cfg.sig

```xml
<dji>
    <device id="xw607">
        <firmware formal="00.05.0028">
            <release version="00.05.0028" antirollback="0" antirollback_ext="cn:0" enforce="0" enforce_ext="cn:0" enforce_time="2019-07-26T04:02:40+00:00" from="2019/07/26" expire="2020/07/26">
                <module id="0801" version="00.11.06.02" type="" group="" size="118774688" md5="69fc57d22e4e45da705511eb120239ac">xw607_0801_v00.11.06.02_20190726.pro.fw.sig</module>
                <module id="0805" version="01.01.01.90" type="" group="" size="2785760" md5="4ddd99570a2be009614f01e3ddf7edb2">xw607_0805_v01.01.01.90_20190624.pro.fw.sig</module>
                <module id="1100" version="03.74.05.07" type="" group="" size="89984" md5="f5ce50d2ccdf61f1acd84c3048be514c">xw607_1100_v03.74.05.07_20181024.pro.fw.sig</module>
                <module id="0902" version="00.18.11.29" type="" group="" size="16256" md5="dcba41f344a82ebf145f8cd278d02b67">xw607_0902_v00.18.11.29_20181129.pro.fw.sig</module>
                <module id="0306" version="01.03.22.03" type="hw02" group="" size="480288" md5="7d7bc2941a6e045c8e18b518d155942e">xw607_0306_v01.03.22.03_20190724_hw02.pro.fw.sig</module>
                <module id="1200" version="01.02.01.12" type="hw02" group="" size="31264" md5="13d734493c59105109c723fcaa27582e">xw607_1200_v01.02.01.12_20190512_hw02.pro.fw.sig</module>
                <module id="1201" version="01.02.01.12" type="hw02" group="" size="31264" md5="e27f0bd66db04d11ee4c5a7e5e53545d">xw607_1201_v01.02.01.12_20190512_hw02.pro.fw.sig</module>
                <module id="1202" version="01.02.01.12" type="hw02" group="" size="31264" md5="ced740fbbb352ef137a92438ce444e63">xw607_1202_v01.02.01.12_20190512_hw02.pro.fw.sig</module>
                <module id="1203" version="01.02.01.12" type="hw02" group="" size="31264" md5="e77f5d4481fa8719fa1309290996ef54">xw607_1203_v01.02.01.12_20190512_hw02.pro.fw.sig</module>
                <module id="2401" version="00.05.11.00" type="hw02" group="" size="20000" md5="4160895a80b82142c5f676e8263526d0">xw607_2401_v00.05.11.00_20190505_hw02.pro.fw.sig</module>
                <module id="2402" version="00.05.11.00" type="hw02" group="" size="20000" md5="a51c35e9ff686adcbc563da6968ce35a">xw607_2402_v00.05.11.00_20190505_hw02.pro.fw.sig</module>
                <module id="2403" version="00.05.11.00" type="hw02" group="" size="20000" md5="fc85ff20ff4a6575288cf0c1a146d5f3">xw607_2403_v00.05.11.00_20190505_hw02.pro.fw.sig</module>
                <module id="2404" version="00.05.11.00" type="hw02" group="" size="20000" md5="8219e9b49503002d88a81815d1f2a706">xw607_2404_v00.05.11.00_20190505_hw02.pro.fw.sig</module>
                <module id="2405" version="00.05.11.00" type="hw02" group="" size="20000" md5="aea323ef23b3abd30f95a6fab33e653a">xw607_2405_v00.05.11.00_20190505_hw02.pro.fw.sig</module>
                <module id="2406" version="00.05.11.00" type="hw02" group="" size="20000" md5="d3853f1d02cb327a52d524b297c5b208">xw607_2406_v00.05.11.00_20190505_hw02.pro.fw.sig</module>
                <module id="2300" version="00.01.04.44" type="hw03" group="" size="21024" md5="22a9d5c54de7fc30d502fd96358408dd">xw607_2300_v00.01.04.44_20190712_hw03.pro.fw.sig</module>
                <module id="0401" version="17.33.00.24" type="hw01" group="" size="30752" md5="9a01df66a01883e8f0200b37e8c03412">xw607_0401_v17.33.00.24_20190104_hw01.pro.fw.sig</module>
                <module id="0400" version="00.02.12.66" type="" group="" size="378912" md5="4592ad30d086187c9915f5aa42b9a6c1">xw607_0400_v00.02.12.66_20190716.pro.fw.sig</module>
                <module id="0600" version="00.19.03.19" type="" group="rc" size="76832" md5="a0c199d147e4af928bc367c518698471">xw607_0600_v00.19.03.19_20190319.pro.fw.sig</module>
            </release>
        </firmware>
    </device>
</dji>
```
