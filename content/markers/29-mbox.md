---
title: "mbox"
number: "29"
position:
  left: "89%"
  top: "32%"
description: "The mail system format"
---

`mbox` is a reference to the mail format from the early days of UNIX. In the
`mbox` format, all email messages for a user are stored in a single file, with
new messages appended to the end. User mailboxes lived in
`/usr/mail/<username>`. It's a good example of the "everything is a file"
principle. You could read your mail with standard text tools, and system
notifications were just more messages appended to the same file.
