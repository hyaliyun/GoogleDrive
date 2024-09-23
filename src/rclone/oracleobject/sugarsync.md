---
title: "SugarSync"
description: "Rclone docs for SugarSync"
versionIntroduced: "v1.51"
---

#  "fas fa-dove SugarSync

[SugarSync](https://sugarsync.com) is a cloud service that enables
active synchronization of files across computers and other devices for
file backup, access, syncing, and sharing.

## Configuration

The initial setup for SugarSync involves getting a token from SugarSync which you
can do with rclone. `rclone config` walks you through it.

Here is an example of how to make a remote called `remote`.  First run:

     rclone config

This will guide you through an interactive setup process:

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
XX / Sugarsync
   \ "sugarsync"
[snip]
Storage> sugarsync
** See help for sugarsync backend at: https://rclone.org/sugarsync/ **

Sugarsync App ID.
Leave blank to use rclone's.
Enter a string value. Press Enter for the default ("").
app_id> 
Sugarsync Access Key ID.
Leave blank to use rclone's.
Enter a string value. Press Enter for the default ("").
access_key_id> 
Sugarsync Private Access Key
Leave blank to use rclone's.
Enter a string value. Press Enter for the default ("").
private_access_key> 
Permanently delete files if true
otherwise put them in the deleted files.
Enter a boolean value (true or false). Press Enter for the default ("false").
hard_delete> 
Edit advanced config? (y/n)
y) Yes
n) No (default)
y/n> n
Remote config
Username (email address)> nick@craig-wood.com
Your Sugarsync password is only required during setup and will not be stored.
password:
Configuration complete.
Options:
- type: sugarsync
- refresh_token: https://api.sugarsync.com/app-authorization/XXXXXXXXXXXXXXXXXX
Keep this "remote" remote?
y) Yes this is OK (default)
e) Edit this remote
d) Delete this remote
y/e/d> y
```

Note that the config asks for your email and password but doesn't
store them, it only uses them to get the initial token.

Once configured you can then use `rclone` like this,

List directories (sync folders) in top level of your SugarSync

    rclone lsd remote:

List all the files in your SugarSync folder "Test"

    rclone ls remote:Test

To copy a local directory to an SugarSync folder called backup

    rclone copy /home/source remote:backup

Paths are specified as `remote:path`

Paths may be as deep as required, e.g. `remote:directory/subdirectory`.

**NB** you can't create files in the top level folder you have to
create a folder, which rclone will create as a "Sync Folder" with
SugarSync.

### Modification times and hashes

SugarSync does not support modification times or hashes, therefore
syncing will default to `--size-only` checking.  Note that using
`--update` will work as rclone can read the time files were uploaded.

### Restricted filename characters

SugarSync replaces the [default restricted characters set](/overview/#restricted-characters)
except for DEL.

Invalid UTF-8 bytes will also be [replaced](/overview/#invalid-utf8),
as they can't be used in XML strings.

### Deleting files

Deleted files will be moved to the "Deleted items" folder by default.

However you can supply the flag `--sugarsync-hard-delete` or set the
config parameter `hard_delete = true` if you would like files to be
deleted straight away.


 start" - DO NOT EDIT - instead edit fs.RegInfo in backend/sugarsync/sugarsync.go then run 
### Standard options

Here are the Standard options specific to sugarsync (Sugarsync).

#### --sugarsync-app-id

Sugarsync App ID.

Leave blank to use rclone's.

Properties:

- Config:      app_id
- Env Var:     RCLONE_SUGARSYNC_APP_ID
- Type:        string
- Required:    false

#### --sugarsync-access-key-id

Sugarsync Access Key ID.

Leave blank to use rclone's.

Properties:

- Config:      access_key_id
- Env Var:     RCLONE_SUGARSYNC_ACCESS_KEY_ID
- Type:        string
- Required:    false

#### --sugarsync-private-access-key

Sugarsync Private Access Key.

Leave blank to use rclone's.

Properties:

- Config:      private_access_key
- Env Var:     RCLONE_SUGARSYNC_PRIVATE_ACCESS_KEY
- Type:        string
- Required:    false

#### --sugarsync-hard-delete

Permanently delete files if true
otherwise put them in the deleted files.

Properties:

- Config:      hard_delete
- Env Var:     RCLONE_SUGARSYNC_HARD_DELETE
- Type:        bool
- Default:     false

### Advanced options

Here are the Advanced options specific to sugarsync (Sugarsync).

#### --sugarsync-refresh-token

Sugarsync refresh token.

Leave blank normally, will be auto configured by rclone.

Properties:

- Config:      refresh_token
- Env Var:     RCLONE_SUGARSYNC_REFRESH_TOKEN
- Type:        string
- Required:    false

#### --sugarsync-authorization

Sugarsync authorization.

Leave blank normally, will be auto configured by rclone.

Properties:

- Config:      authorization
- Env Var:     RCLONE_SUGARSYNC_AUTHORIZATION
- Type:        string
- Required:    false

#### --sugarsync-authorization-expiry

Sugarsync authorization expiry.

Leave blank normally, will be auto configured by rclone.

Properties:

- Config:      authorization_expiry
- Env Var:     RCLONE_SUGARSYNC_AUTHORIZATION_EXPIRY
- Type:        string
- Required:    false

#### --sugarsync-user

Sugarsync user.

Leave blank normally, will be auto configured by rclone.

Properties:

- Config:      user
- Env Var:     RCLONE_SUGARSYNC_USER
- Type:        string
- Required:    false

#### --sugarsync-root-id

Sugarsync root id.

Leave blank normally, will be auto configured by rclone.

Properties:

- Config:      root_id
- Env Var:     RCLONE_SUGARSYNC_ROOT_ID
- Type:        string
- Required:    false

#### --sugarsync-deleted-id

Sugarsync deleted folder id.

Leave blank normally, will be auto configured by rclone.

Properties:

- Config:      deleted_id
- Env Var:     RCLONE_SUGARSYNC_DELETED_ID
- Type:        string
- Required:    false

#### --sugarsync-encoding

The encoding for the backend.

See the [encoding section in the overview](/overview/#encoding) for more info.

Properties:

- Config:      encoding
- Env Var:     RCLONE_SUGARSYNC_ENCODING
- Type:        Encoding
- Default:     Slash,Ctl,InvalidUtf8,Dot

#### --sugarsync-description

Description of the remote.

Properties:

- Config:      description
- Env Var:     RCLONE_SUGARSYNC_DESCRIPTION
- Type:        string
- Required:    false



## Limitations

`rclone about` is not supported by the SugarSync backend. Backends without
this capability cannot determine free space for an rclone mount or
use policy `mfs` (most free space) as a member of an rclone union
remote.

See [List of backends that do not support rclone about](https://rclone.org/overview/#optional-features) and [rclone about](https://rclone.org/commands/rclone_about/)
