---
title: "Overflows"
number: "36"
position:
  left: "50%"
  top: "62%"
description: "Buffer overflows"
---

The overflowing liquid from the shell looks like a visual nod to buffer
overflows. A buffer overflow happens when a program writes past the end of a
fixed-size memory buffer, spilling data into adjacent memory. This can
overwrite return addresses or other critical data, leading to crashes or
exploitable security holes.

Buffer overflows have been a persistent problem in C programs on UNIX systems,
from the 1988 Morris worm (which exploited one in `fingerd`) to modern CVEs.
C's lack of bounds checking on arrays makes this easy to get wrong, and UNIX
systems have been a primary target because of how widely deployed they are.

For more, see
[Buffer overflow – Wikipedia](https://en.wikipedia.org/wiki/Buffer_overflow).
