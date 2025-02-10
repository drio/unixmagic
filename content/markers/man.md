---
title: "man"
number: "2"
position:
  left: "24%"
  top: "47%"
description: "The man page"
---

<pre>

MAN(1)

NAME
       man - an interface to the system reference manuals

SYNOPSIS
       man [man options] [[section] page ...] ...
       man -k [apropos options] regexp ...
       man -K [man options] [section] term ...
       man -f [whatis options] page ...
       man -l [man options] file ...
       man -w|-W [man options] page ...

DESCRIPTION 
  man is the system's manual pager.  Each page argument given to man
  is normally the name of a program, utility or function.  The manual page
  associated with each of these arguments is then found and displayed.  A
  section,  if provided, will direct man to look only in that section of the
  manual.  The default action is to search in all of the available sections
  following a pre-defined order (see DEFAULTS), and to show only the first page
  found, even if page exists in several sections.

</pre>
