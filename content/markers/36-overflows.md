---
title: "Overflows"
number: "36"
position:
  left: "50%"
  top: "62%"
description: "Buffer overflows — writing past the end of memory"
---

The liquid sloshing out of the shell looks like a visual pun on buffer
overflows. A buffer overflow happens when a program writes past the end
of a fixed-size memory region, spilling data into whatever sits next
door.

There are two flavors that matter in practice. **Stack overflows** hit
local variables and, critically, the saved return address of the
current function. Overwrite that, and when the function returns control
jumps wherever the attacker wants — that's the classic 1988 Morris worm
trick against `fingerd`, and the basis of decades of exploits. **Heap
overflows** hit `malloc`'d memory and corrupt allocator metadata or
adjacent objects; harder to weaponize but just as damaging.

C's lack of automatic bounds checking is what makes this easy to get
wrong, and Unix systems have been a primary target because they're
everywhere. Modern mitigations — stack canaries, ASLR, non-executable
stacks, safer string functions — make exploitation harder but don't
eliminate the class. See
[Buffer overflow](https://en.wikipedia.org/wiki/Buffer_overflow) on
Wikipedia for the long version.
