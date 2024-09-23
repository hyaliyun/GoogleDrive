---
title: "rclone ncdu"
description: "Explore a remote with a text based user interface."
versionIntroduced: v1.37
# autogenerated - DO NOT EDIT, instead edit the source code in cmd/ncdu/ and as part of making a release run "make commanddocs"
---
# rclone ncdu

Explore a remote with a text based user interface.

## Synopsis

This displays a text based user interface allowing the navigation of a
remote. It is most useful for answering the question - "What is using
all my disk space?".



To make the user interface it first scans the entire remote given and
builds an in memory representation.  rclone ncdu can be used during
this scanning phase and you will see it building up the directory
structure as it goes along.

You can interact with the user interface using key presses,
press '?' to toggle the help on and off. The supported keys are:

     ↑,↓ or k,j to Move
     →,l to enter
     ←,h to return
     g toggle graph
     c toggle counts
     a toggle average size in directory
     m toggle modified time
     u toggle human-readable format
     n,s,C,A,M sort by name,size,count,asize,mtime
     d delete file/directory
     v select file/directory
     V enter visual select mode
     D delete selected files/directories
     y copy current path to clipboard
     Y display current path
     ^L refresh screen (fix screen corruption)
     r recalculate file sizes
     ? to toggle help on and off
     ESC to close the menu box
     q/^c to quit

Listed files/directories may be prefixed by a one-character flag,
some of them combined with a description in brackets at end of line.
These flags have the following meaning:

    e means this is an empty directory, i.e. contains no files (but
      may contain empty subdirectories)
    ~ means this is a directory where some of the files (possibly in
      subdirectories) have unknown size, and therefore the directory
      size may be underestimated (and average size inaccurate, as it
      is average of the files with known sizes).
    . means an error occurred while reading a subdirectory, and
      therefore the directory size may be underestimated (and average
      size inaccurate)
    ! means an error occurred while reading this directory

This an homage to the [ncdu tool](https://dev.yorhel.nl/ncdu) but for
rclone remotes.  It is missing lots of features at the moment
but is useful as it stands. Unlike ncdu it does not show excluded files.

Note that it might take some time to delete big files/directories. The
UI won't respond in the meantime since the deletion is done synchronously.

For a non-interactive listing of the remote, see the
[tree](/commands/rclone_tree/) command. To just get the total size of
the remote you can also use the [size](/commands/rclone_size/) command.


```
rclone ncdu remote:path [flags]
```

## Options

```
  -h, --help   help for ncdu
```

Options shared with other commands are described next.
See the [global flags page](/flags/) for global options not listed here.

### Filter Options

Flags for filtering directory listings

```
      --delete-excluded                     Delete files on dest excluded from sync
      --exclude stringArray                 Exclude files matching pattern
      --exclude-from stringArray            Read file exclude patterns from file (use - to read from stdin)
      --exclude-if-present stringArray      Exclude directories if filename is present
      --files-from stringArray              Read list of source-file names from file (use - to read from stdin)
      --files-from-raw stringArray          Read list of source-file names from file without any processing of lines (use - to read from stdin)
  -f, --filter stringArray                  Add a file filtering rule
      --filter-from stringArray             Read file filtering patterns from a file (use - to read from stdin)
      --ignore-case                         Ignore case in filters (case insensitive)
      --include stringArray                 Include files matching pattern
      --include-from stringArray            Read file include patterns from file (use - to read from stdin)
      --max-age Duration                    Only transfer files younger than this in s or suffix ms|s|m|h|d|w|M|y (default off)
      --max-depth int                       If set limits the recursion depth to this (default -1)
      --max-size SizeSuffix                 Only transfer files smaller than this in KiB or suffix B|K|M|G|T|P (default off)
      --metadata-exclude stringArray        Exclude metadatas matching pattern
      --metadata-exclude-from stringArray   Read metadata exclude patterns from file (use - to read from stdin)
      --metadata-filter stringArray         Add a metadata filtering rule
      --metadata-filter-from stringArray    Read metadata filtering patterns from a file (use - to read from stdin)
      --metadata-include stringArray        Include metadatas matching pattern
      --metadata-include-from stringArray   Read metadata include patterns from file (use - to read from stdin)
      --min-age Duration                    Only transfer files older than this in s or suffix ms|s|m|h|d|w|M|y (default off)
      --min-size SizeSuffix                 Only transfer files bigger than this in KiB or suffix B|K|M|G|T|P (default off)
```

### Listing Options

Flags for listing directories

```
      --default-time Time   Time to show if modtime is unknown for files and directories (default 2000-01-01T00:00:00Z)
      --fast-list           Use recursive list if available; uses more memory but fewer transactions
```

## See Also

* [rclone](/commands/rclone/)	 - Show help for rclone commands, flags and backends.
