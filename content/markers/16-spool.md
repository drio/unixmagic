---
title: "spool"
number: "16"
position:
  left: "67%"
  top: "85.5%"
description: "/usr/spool"
---

This references `/usr/spool`, a directory used for temporary storage of data
waiting to be processed. Print jobs, outgoing mail, and UUCP transfers all
queued here. The name comes from "Simultaneous Peripheral Operations On-Line"
- a way to let slow devices (like printers) work through a backlog without
blocking the rest of the system. On modern systems, this directory has moved to
`/var/spool`.

Thanks to Andrew Tanenbaum for pointing out that threads were not available in
early UNIX. He also shared [Rob Pike's UNIX
quiz](https://commandcenter.blogspot.com/2020/01/unix-quiz.html).
