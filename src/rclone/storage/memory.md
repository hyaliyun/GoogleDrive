---
title: "Memory"
description: "Rclone docs for Memory backend"
versionIntroduced: "v1.51"
---

#  "fas fa-memory Memory

The memory backend is an in RAM backend. It does not persist its
data - use the local backend for that.

The memory backend behaves like a bucket-based remote (e.g. like
s3). Because it has no parameters you can just use it with the
`:memory:` remote name.

## Configuration

You can configure it as a remote like this with `rclone config` too if
you want to:

```
No remotes found, make a new one?
n) New remote
s) Set configuration password
q) Quit config
n/s/q> n
name> remote
Type of storage to configure.
Enter a string value. Press Enter for the default ("").
Choose a number from below, or type in your own value
[snip]
XX / Memory
   \ "memory"
[snip]
Storage> memory
** See help for memory backend at: https://rclone.org/memory/ **

Remote config

Configuration complete.
Options:
- type: memory
Keep this "remote" remote?
y) Yes this is OK (default)
e) Edit this remote
d) Delete this remote
y/e/d> y
```

Because the memory backend isn't persistent it is most useful for
testing or with an rclone server or rclone mount, e.g.

    rclone mount :memory: /mnt/tmp
    rclone serve webdav :memory:
    rclone serve sftp :memory:

### Modification times and hashes

The memory backend supports MD5 hashes and modification times accurate to 1 nS.

### Restricted filename characters

The memory backend replaces the [default restricted characters
set](/overview/#restricted-characters).

 start" - DO NOT EDIT - instead edit fs.RegInfo in backend/memory/memory.go then run 
### Advanced options

Here are the Advanced options specific to memory (In memory object storage system.).

#### --memory-description

Description of the remote.

Properties:

- Config:      description
- Env Var:     RCLONE_MEMORY_DESCRIPTION
- Type:        string
- Required:    false


