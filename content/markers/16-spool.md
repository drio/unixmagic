---
title: "spool"
number: "16"
position:
  left: "67%"
  top: "85.5%"
description: "/usr/spool — where jobs waited their turn"
---

`/usr/spool` was the staging ground for anything a slow device had to
work through at its own pace: print jobs queued for the line printer,
outgoing mail waiting for delivery, UUCP transfers held until the next
dial-up. On modern systems this directory has moved to `/var/spool`, but
the pattern hasn't changed.

"Spool" is often said to be a backronym for *Simultaneous Peripheral
Operations On-Line*, which has the ring of something invented after the
fact to justify a word everyone was already using. The underlying idea
is older than Unix: buffer work to disk so the slow device doesn't hold
up the fast one.
