---
title: "tar"
number: "12"
position:
  left: "16%"
  top: "85%"
description: "Pack files onto tape -- and still everywhere 45 years later"
---

[`tar`](https://en.wikipedia.org/wiki/Tar_(computing)) -- tape archive -- was built
for magnetic tape drives, which are strictly sequential: you write from one end to
the other with no random access. That constraint shaped the format permanently. tar
concatenates files one after another with a small header in front of each, and
that's essentially all it does. There's no index, no directory at the front. To
list the contents of a `.tar.gz` you have to read the whole thing from the
beginning.

It shipped with Version 7 Unix in 1979, replacing `tp` (which had replaced `tap`).
The format is almost unchanged since then, which is why people still reach
for it today.

The command `tar xvzf archive.tar.gz` is one of those things Unix users type
from muscle memory without thinking about what the flags mean: e**x**tract,
**v**erbose, g**z**ip, **f**ile. 
