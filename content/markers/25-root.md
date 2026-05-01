---
title: "root"
number: "25"
position:
  left: "89%"
  top: "39%"
description: "The all-powerful administrative account"
---

`root` is the superuser — uid 0 in the kernel's eyes. Most permission
checks in Unix short-circuit for uid 0, which is why root can read any
file, kill any process, mount any filesystem, and bind to ports below
1024 (the "privileged" range reserved for services like SSH and HTTP).

For a long time, administering a Unix box meant logging in as root and
hoping you typed carefully. `sudo` changed that in the 80s by letting
named users run specific commands with elevated privileges, leaving an
audit trail and making "full root shell" a deliberate choice rather than
the default workflow. Most modern systems discourage direct root
logins entirely.
