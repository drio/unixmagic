---
title: "Memory leaks"
number: "4"
position:
  left: "25%"
  top: "29%"
description: "Memory that a program allocates and forgets to give back"
---

A memory leak is memory a program allocates and then forgets to release.
Each leak on its own is harmless; the damage comes from accumulation.
Long-running processes — daemons, editors, shells open for weeks — slowly
eat the machine until something swaps, slows, or dies.

This mattered a lot on early Unix. C had no garbage collector, `malloc` and
`free` were entirely the programmer's responsibility, and the machines of
the 1970s and 80s had megabytes of RAM, not gigabytes. A leaky `inetd` or
print spooler could bring a timesharing system to its knees overnight.
Tools like `valgrind` didn't exist yet; you found leaks by reading code
and watching `ps`.
