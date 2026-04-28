---
title: "null"
number: "10"
position:
  left: "42.5%"
  top: "83%"
description: "The device file that throws everything away"
---

`/dev/null` is a [special device](https://en.wikipedia.org/wiki/Null_device)
that accepts any data written to it and returns success without storing
a byte. Reading from it returns end-of-file immediately. It's the bit
bucket.

It's a perfect illustration of Unix's "everything is a file" idea: the
same `write(2)` call you'd use on a regular file works here, so every
tool that can produce output can also discard it without special-casing
anything. The `2>/dev/null` idiom — "throw the error messages away" — is
one of the shortest useful incantations in the shell, and it predates
the "quiet mode" flags that most programs eventually grew.
