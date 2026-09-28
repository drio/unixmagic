---
title: "uucp"
number: "20"
position:
  left: "77%"
  top: "69%"
description: "How Unix machines talked before the internet"
---

[`uucp`](https://en.wikipedia.org/wiki/UUCP) (Unix-to-Unix Copy) connected Unix
machines years before most of them could reach the internet. It was a suite of
programs for copying files between systems over phone lines using modems. Mike
Lesk wrote the first version at Bell Labs in 1976, and it shipped with Version 7
Unix in 1979.

UUCP carried Usenet and early email between sites. Machines dialed each other
on a schedule, exchanged queued files and messages, then hung up. It wasn't
fast, but mail could cross the country one phone call at a time, routed by
"bang paths" like `foovax!barbox!user` that named every hop.
