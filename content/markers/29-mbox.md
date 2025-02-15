---
title: "pwd"
number: "29"
position:
  left: "89%"
  top: "32%"
description: "The mail system format"
---

`mbox` is a reference to the mail format from the early days of UNIX. UNIX was
one of the first operating systems to come with built-in email capabilities,
and it did so while staying true to its mantra: "everything is a file." In the
`mbox` format, all email messages are stored in a single file, with new
messages simply appended to the end. By default, users' mail was stored in
`/usr/mail/<username>`. This design naturally enabled the integration of
system logs and notifications to be sent via email—further embedding email as
a core part of the UNIX experience.
