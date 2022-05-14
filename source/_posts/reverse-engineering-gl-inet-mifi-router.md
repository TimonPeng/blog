---
title: Reverse engineering GL iNet MiFi router
date: 2019-07-25 15:00:00
tags:
  - Hardware
  - Reverse Engineering
  - Router
---

A few days ago, my friend from Beijing sent me a [GL-MiFi 4G router](https://www.gl-inet.com/products/gl-mifi/). It uses custom developed firmware(based on OpenWrt, of course) to implement some functions. So we want to view its code and how it implements some functions.

<!--more-->

# Scan ports

I used nmap to scan its ports and found that 53, 80 and some custom service ports(I confirmed that they are some http services) were opened.

# Web interface

SSH and telnet have not been opened, so I decided to check the web interface.

However, only some basic state and networking setting operation pages here.

# Sniffing upgrade host url

At that time, the online upgrade function caught my attention. So I decided to sniffing the upgrade url to get the firmware file.

I connected GL-MiFi to another RT-AC86U router: `Internet <-> RT-AC86U <-> GL-MiFi` and run `tcpdump` on RT-AC86U, then use Wireshark, I got the upgrade host ip.

Then I forwarded all the original traffic to my ip on RT-AC86U.

```
iptables -A PREROUTING -p tcp -m tcp -j DNAT -d ORIGINAL-IP --match multiport --dports 80,443 --to-destination MY-IP nat
```

I can see the request urls now. So I wrote a small Flask app to handle all url and response fake data of upgrade request.

```
version=10.0
date=2019-7-25
filename=upgrade_10.0.bin
md5=xxxxxx
```

Now I have the url path of the firmware files and downloaded them.

# View firmware

I used `binwalk upgrade.bin | head` to check firmware file but got nothing.

Then I converted it into HEX string `xxd < upgrade.bin | more`, after viewing, I think it is an encrypted file.

Usually unencrypted firmware files have some features:

1. The first 64 bytes of the file header is `2705 1956`, a U-Boot header
2. An operating system string after the U-Boot image header
3. Part of the blank blocks(0xFF) is at the end

You can view the U-Boot image header code on [GitHub](https://github.com/u-boot/u-boot/blob/master/include/image.h#L319)

```c++
typedef struct image_header {
        uint32_t        ih_magic;       /* Image Header Magic Number    */
        uint32_t        ih_hcrc;        /* Image Header CRC Checksum    */
        uint32_t        ih_time;        /* Image Creation Timestamp     */
        uint32_t        ih_size;        /* Image Data Size              */
        uint32_t        ih_load;        /* Data  Load  Address          */
        uint32_t        ih_ep;          /* Entry Point Address          */
        uint32_t        ih_dcrc;        /* Image Data CRC Checksum      */
        uint8_t         ih_os;          /* Operating System             */
        uint8_t         ih_arch;        /* CPU architecture             */
        uint8_t         ih_type;        /* Image Type                   */
        uint8_t         ih_comp;        /* Compression Type             */
        uint8_t         ih_name[IH_NMLEN];      /* Image Name           */
} image_header_t;
```

```
$ xxd < upgrade_decrypto.bin | more
00000000: 2705 1956|d2fc 9955|5b20 b51a|0012 c3a7|   '..V...U[ ......
00000010: 8006 0000|8006 0000|d695 0fbf|05|05|02|03| ................
00000020: 4d49 5053 204f 7065 6e57 7274 204c 696e    MIPS OpenWrt Lin
00000030: 7578 2d33 2e31 382e 3233 0000 0000 0000    ux-3.18.23......
```

At the same time, I found an [article](https://www.right.com.cn/forum/thread-147608-1-1.html) about firmware encryption, so I think the decryption function maybe inside firmware.

Now I am in trouble.

# Hardware debug

I decided to tear down it and start with the hardware.

Connect to UART port via USB TTL adapter.

| Adapter | Router |
| ------- | ------ |
| GND     | GND    |
| TXD     | RXD    |
| RXD     | TXD    |

According the [doc](https://docs.gl-inet.com/en/3/dev/serial/) set speed `115200`.

## Run U-Boot mode

1. Press and hold the reset button
2. Power on the unit (keep holding down the reset button)
3. The 3G/4G led will flash
4. Press reset button for at least:
   - 5 sec. to run web failsafe mode
   - 8 sec. to run U-Boot console
   - 10 sec. to run U-Boot netconsole
5. Release the reset button
6. The 3G/4G led will faintly flash twice
7. Then you are in U-Boot mode

![U-Boot](uboot.gif)

Now you can read the data in memory.

## Busybox

Or we can try to use shell in normal mode.

![BusyBox](busybox.png)

# Decrypt firmware

After viewing at the Lua web files, I found the shell script for the call.

Now I can get decrypt firmware file and duplicate it in a new router of the same model!
