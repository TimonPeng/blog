---
title: Tips of pyinstaller executable file decompilation
date: 2020-03-11 15:00:00
tags:
  - Reverse Engineering
  - Python
---

The articles on the Internet are all relatively old.

Tips should be noted here:

1. Python2.x and Python3.x have different length magic number.
2. Use `struct file` contents to modify main program file, not fixed magic number.

# Extract .pyc file

```bash
# download
git clone https://github.com/pyinstaller/pyinstaller.git
cd pyinstaller/

# unnecessary
pyenv local 3.6.9
virtualenv venv
source ./venv/bin/activate

# install
python setup.py develop
# run
python PyInstaller/utils/cliutils/archive_viewer.py /path/your-executable-file
```

4 commands available:

```
U: go Up one level
O <name>: open embedded archive name
X <name>: extract name
Q: quit
```

Extract `main program file` and `struct file`.

# Fix main file header

You can see the Python version through `struct file` also:

```
$ xxd < struct.pyc

00000000: 160d 0d0a 7079 6930 0101 0000 e300 0000  ....pyi0........
00000010: 0000 0000 0000 0000 0008 0000 0040 0000  .............@..
00000020: 0073 4c00 0000 6400 0064 0100 6402 0064  .sL...d..d..d..d
00000030: 0300 6404 0064 0500 6406 0064 0700 6708  ..d..d..d..d..g.
00000040: 005a 0000 6408 0064 0900 6c01 0054 6408  .Z..d..d..l..Td.
00000050: 0064 0a00 6c01 006d 0200 5a02 0001 6408  .d..l..m..Z...d.
00000060: 0064 0b00 6c01 006d 0300 5a03 0001 640c  .d..l..m..Z...d.
00000070: 0053 290d da08 6361 6c63 7369 7a65 da04  .S)...calcsize..
00000080: 7061 636b da09 7061 636b 5f69 6e74 6fda  pack..pack_into.
00000090: 0675 6e70 6163 6bda 0b75 6e70 6163 6b5f  .unpack..unpack_
000000a0: 6672 6f6d da0b 6974 6572 5f75 6e70 6163  from..iter_unpac
000000b0: 6bda 0653 7472 7563 74da 0565 7272 6f72  k..Struct..error
000000c0: e900 0000 0029 01da 012a 2901 da0b 5f63  .....)...*)..._c
000000d0: 6c65 6172 6361 6368 6529 01da 075f 5f64  learcache)...__d
000000e0: 6f63 5f5f 4e29 04da 075f 5f61 6c6c 5f5f  oc__N)...__all__
000000f0: da07 5f73 7472 7563 7472 0b00 0000 720c  .._structr....r.
00000100: 0000 00a9 0072 0f00 0000 720f 0000 00fa  .....r....r.....
00000110: 1c2f 7573 722f 6c69 622f 7079 7468 6f6e  ./usr/lib/python
00000120: 332e 352f 7374 7275 6374 2e70 79da 083c  3.5/struct.py..<
00000130: 6d6f 6475 6c65 3e03 0000 0073 0c00 0000  module>....s....
00000140: 0f01 0303 0303 0903 0a01 1001            ............
```

View main program file head:

```
$ xxd < t.pyc

00000000: e300 0000 0000 0000 0000 0000 0009 0000  ................
00000010: 0040 0000 0073 6502 0000 6400 0064 0100  .@...se...d..d..
00000020: 6c00 006d 0100 5a01 0001 6400 0064 0200  l..m..Z...d..d..
00000030: 6c02 005a 0200 6400 0064 0200 6c03 005a  l..Z..d..d..l..Z
```

You can find that the first byte of the main program is `e3`, therefore, the contents before `e3` in the `struct file` are filled to the front of the main program file.

**It is 12 bytes(160d 0d0a 7079 6930 0101 0000) in the example, not 8 bytes on many old articles. So don't use fixed length!!! View your struct file header!!!**

# Uncompyle .pyc file

```bash
pip install uncompyle6
uncompyle6 main.pyc > main.py
```

Well done!
