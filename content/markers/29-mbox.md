---
title: "mbox"
number: "29"
position:
  left: "89%"
  top: "32%"
description: "The mail system format"
---

`mbox` is a reference to the mail format from the early days of Unix. In the
`mbox` format, all email messages for a user are stored in a single file, with
new messages appended to the end. User mailboxes lived in
`/usr/mail/<username>`. It fits the Unix habit of using plain text as the
universal format: you could read your mail with the same tools you used on any
other file, and system notifications were just more messages appended to it.
