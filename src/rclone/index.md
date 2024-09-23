---
title: "Rclone"
description: "Rclone syncs your files to cloud storage: Google Drive, S3, Swift, Dropbox, Google Cloud Storage, Azure, Box and many more."
---
# Rclone syncs


- [About rclone](#about)
- [What can rclone do for you?](#what)
- [What features does rclone have?](#features)
- [What providers does rclone support?](#providers)
- [Download](/downloads/)
- [Install](/install/)
  {{< rem MAINPAGELINK >}}

## About rclone

Rclone is a command-line program to manage files on cloud storage. It
is a feature-rich alternative to cloud vendors' web storage
interfaces. [Over 70 cloud storage products](#providers) support
rclone including S3 object stores, business & consumer file storage
services, as well as standard transfer protocols.

Rclone has powerful cloud equivalents to the unix commands rsync, cp,
mv, mount, ls, ncdu, tree, rm, and cat. Rclone's familiar syntax
includes shell pipeline support, and `--dry-run` protection. It is
used at the command line, in scripts or via its [API](/rc).

Users call rclone *"The Swiss army knife of cloud storage"*, and
*"Technology indistinguishable from magic"*.

Rclone really looks after your data. It preserves timestamps and
verifies checksums at all times. Transfers over limited bandwidth;
intermittent connections, or subject to quota can be restarted, from
the last good file transferred. You can
[check](/commands/rclone_check/) the integrity of your files. Where
possible, rclone employs server-side transfers to minimise local
bandwidth use and transfers from one provider to another without
using local disk.

Virtual backends wrap local and cloud file systems to apply
[encryption](/crypt/),
[compression](/compress/),
[chunking](/chunker/),
[hashing](/hasher/) and
[joining](/union/).

Rclone [mounts](/commands/rclone_mount/) any local, cloud or
virtual filesystem as a disk on Windows,
macOS, linux and FreeBSD, and also serves these over
[SFTP](/commands/rclone_serve_sftp/),
[HTTP](/commands/rclone_serve_http/),
[WebDAV](/commands/rclone_serve_webdav/),
[FTP](/commands/rclone_serve_ftp/) and
[DLNA](/commands/rclone_serve_dlna/).

Rclone is mature, open-source software originally inspired by rsync
and written in [Go](https://golang.org). The friendly support
community is familiar with varied use cases. Official Ubuntu, Debian,
Fedora, Brew and Chocolatey repos. include rclone. For the latest
version [downloading from rclone.org](/downloads/) is recommended.

Rclone is widely used on Linux, Windows and Mac. Third-party
developers create innovative backup, restore, GUI and business
process solutions using the rclone command line or API.

Rclone does the heavy lifting of communicating with cloud storage.

## What can rclone do for you?

Rclone helps you:

- Backup (and encrypt) files to cloud storage
- Restore (and decrypt) files from cloud storage
- Mirror cloud data to other cloud services or locally
- Migrate data to the cloud, or between cloud storage vendors
- Mount multiple, encrypted, cached or diverse cloud storage as a disk
- Analyse and account for data held on cloud storage using [lsf](/commands/rclone_lsf/), [ljson](/commands/rclone_lsjson/), [size](/commands/rclone_size/), [ncdu](/commands/rclone_ncdu/)
- [Union](/union/) file systems together to present multiple local and/or cloud file systems as one

## Features

- Transfers
  - MD5, SHA1 hashes are checked at all times for file integrity
  - Timestamps are preserved on files
  - Operations can be restarted at any time
  - Can be to and from network, e.g. two different cloud providers
  - Can use multi-threaded downloads to local disk
- [Copy](/commands/rclone_copy/) new or changed files to cloud storage
- [Sync](/commands/rclone_sync/) to make a directory identical
- [Bisync](/bisync/) (two way) to keep two directories in sync bidirectionally
- [Move](/commands/rclone_move/) files to cloud storage deleting the local after verification
- [Check](/commands/rclone_check/) hashes and for missing/extra files
- [Mount](/commands/rclone_mount/) your cloud storage as a network disk
- [Serve](/commands/rclone_serve/) local or remote files over [HTTP](/commands/rclone_serve_http/)/[WebDav](/commands/rclone_serve_webdav/)/[FTP](/commands/rclone_serve_ftp/)/[SFTP](/commands/rclone_serve_sftp/)/[DLNA](/commands/rclone_serve_dlna/)
- Experimental [Web based GUI](/gui/)

## Supported providers

(There are many others, built on standard protocols such as
WebDAV or S3, that work out of the box.)

