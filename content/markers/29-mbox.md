---
title: "mbox"
number: "29"
position:
  left: "89%"
  top: "32%"
description: "The mail system format"
---

`mbox` is early Unix's mail format: all of a user's messages in one plain-text
file, each starting with a line that begins `From `, each new one appended to
the end. Because a mailbox was just a file, any tool could read it. `grep`
searched your mail, and system programs could notify you by appending one more
message.

Incoming mail lived in `/usr/spool/mail/<username>` on Version 7 (`/usr/mail` on
System III and V). The name `mbox` came from a second file: when you saved a
message you had read, `mail` put it in `mbox` in your home directory.

The simple format has one well-known cost. A body line that begins with `From `
looks like the start of a new message, so V7's `mail` wrote it as `>From `
instead. Many mail programs still do this, which is why old archives are full
of stray `>` characters.
