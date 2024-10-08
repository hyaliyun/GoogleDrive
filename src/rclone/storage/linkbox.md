---
title: "Linkbox"
description: "Rclone docs for Linkbox"
versionIntroduced: "v1.65"
---

#  "fa fa-infinity Linkbox

Linkbox is [a private cloud drive](https://linkbox.to/).

## Configuration

Here is an example of making a remote for Linkbox.

First run:

     rclone config

This will guide you through an interactive setup process:

```
No remotes found, make a new one?
n) New remote
s) Set configuration password
q) Quit config
n/s/q> n

Enter name for new remote.
name> remote

Option Storage.
Type of storage to configure.
Choose a number from below, or type in your own value.
XX / Linkbox
   \ (linkbox)
Storage> XX

Option token.
Token from https://www.linkbox.to/admin/account
Enter a value.
token> testFromCLToken

Configuration complete.
Options:
- type: linkbox
- token: XXXXXXXXXXX
Keep this "linkbox" remote?
y) Yes this is OK (default)
e) Edit this remote
d) Delete this remote
y/e/d> y

```

 start" - DO NOT EDIT - instead edit fs.RegInfo in backend/linkbox/linkbox.go then run 
### Standard options

Here are the Standard options specific to linkbox (Linkbox).

#### --linkbox-token

Token from https://www.linkbox.to/admin/account

Properties:

- Config:      token
- Env Var:     RCLONE_LINKBOX_TOKEN
- Type:        string
- Required:    true

### Advanced options

Here are the Advanced options specific to linkbox (Linkbox).

#### --linkbox-description

Description of the remote.

Properties:

- Config:      description
- Env Var:     RCLONE_LINKBOX_DESCRIPTION
- Type:        string
- Required:    false



## Limitations

Invalid UTF-8 bytes will also be [replaced](https://rclone.org/overview/#invalid-utf8),
as they can't be used in JSON strings.
