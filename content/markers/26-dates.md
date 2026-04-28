---
title: "dates"
number: "26"
position:
  left: "84%"
  top: "46%"
description: "Displaying and setting the system clock"
---

[`date`](https://man7.org/linux/man-pages/man1/date.1.html) prints or
sets the system time. Under the hood, Unix stores time as a single
count — seconds since 00:00:00 UTC on 1 January 1970, the "Unix epoch".
The epoch was picked because it was close enough to when these systems
were built and round enough to be easy to reason about.

The earliest versions counted at 60 Hz in a 32-bit integer, which wrapped
after roughly two and a quarter years. Switching to one-second ticks
pushed the problem out a long way but didn't remove it: a signed 32-bit
seconds counter overflows at 03:14:07 UTC on **19 January 2038**. That's
the Y2038 problem, and it's real — a lot of embedded systems and
filesystems still use 32-bit `time_t`. Modern Unixes use 64-bit `time_t`,
which buys around 292 billion years of headroom, which is probably enough.
