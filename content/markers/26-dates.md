---
title: "dates"
number: "26"
position:
  left: "84%"
  top: "46%"
description: "Seconds since 1970, and the 2038 problem"
---

[`date`](https://man7.org/linux/man-pages/man1/date.1.html) prints or
sets the system time. Under the hood, Unix stores time as a single
count — seconds since 00:00:00 UTC on 1 January 1970, the "Unix epoch".
The developers picked it because it was recent and round, which made it
easy to reason about.

A signed 32-bit seconds counter overflows at 03:14:07 UTC on
**19 January 2038**. That's the Y2038 problem, and it's still live: many
embedded systems and filesystems store 32-bit `time_t`. Modern Unixes use a
64-bit `time_t`. It buys around 292 billion years of headroom, which is
probably enough.
