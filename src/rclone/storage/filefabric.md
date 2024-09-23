---
title: "Enterprise File Fabric"
description: "Rclone docs for the Enterprise File Fabric backend"
versionIntroduced: "v1.54"
---

#  Enterprise File Fabric

This backend supports [Storage Made Easy's Enterprise File
Fabric™](https://storagemadeeasy.com/about/) which provides a software
solution to integrate and unify File and Object Storage accessible
through a global file system.

## Configuration

The initial setup for the Enterprise File Fabric backend involves
getting a token from the Enterprise File Fabric which you need to
do in your browser.  `rclone config` walks you through it.

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
XX / Enterprise File Fabric
   \ "filefabric"
[snip]
Storage> filefabric
** See help for filefabric backend at: https://rclone.org/filefabric/ **

URL of the Enterprise File Fabric to connect to
Enter a string value. Press Enter for the default ("").
Choose a number from below, or type in your own value
 1 / Storage Made Easy US
   \ "https://storagemadeeasy.com"
 2 / Storage Made Easy EU
   \ "https://eu.storagemadeeasy.com"
 3 / Connect to your Enterprise File Fabric
   \ "https://yourfabric.smestorage.com"
url> https://yourfabric.smestorage.com/
ID of the root folder
Leave blank normally.

Fill in to make rclone start with directory of a given ID.

Enter a string value. Press Enter for the default ("").
root_folder_id> 
Permanent Authentication Token

A Permanent Authentication Token can be created in the Enterprise File
Fabric, on the users Dashboard under Security, there is an entry
you'll see called "My Authentication Tokens". Click the Manage button
to create one.

These tokens are normally valid for several years.

For more info see: https://docs.storagemadeeasy.com/organisationcloud/api-tokens

Enter a string value. Press Enter for the default ("").
permanent_token> xxxxxxxxxxxxxxx-xxxxxxxxxxxxxxxx
Edit advanced config? (y/n)
y) Yes
n) No (default)
y/n> n
Remote config
Configuration complete.
Options:
- type: filefabric
- url: https://yourfabric.smestorage.com/
- permanent_token: xxxxxxxxxxxxxxx-xxxxxxxxxxxxxxxx
Keep this "remote" remote?
y) Yes this is OK (default)
e) Edit this remote
d) Delete this remote
y/e/d> y
```

Once configured you can then use `rclone` like this,

List directories in top level of your Enterprise File Fabric

    rclone lsd remote:

List all the files in your Enterprise File Fabric

    rclone ls remote:

To copy a local directory to an Enterprise File Fabric directory called backup

    rclone copy /home/source remote:backup

### Modification times and hashes

The Enterprise File Fabric allows modification times to be set on
files accurate to 1 second.  These will be used to detect whether
objects need syncing or not.

The Enterprise File Fabric does not support any data hashes at this time.

### Restricted filename characters

The [default restricted characters set](/overview/#restricted-characters)
will be replaced.

Invalid UTF-8 bytes will also be [replaced](/overview/#invalid-utf8),
as they can't be used in JSON strings.

### Empty files

Empty files aren't supported by the Enterprise File Fabric. Rclone will therefore
upload an empty file as a single space with a mime type of
`application/vnd.rclone.empty.file` and files with that mime type are
treated as empty.

### Root folder ID ###

You can set the `root_folder_id` for rclone.  This is the directory
(identified by its `Folder ID`) that rclone considers to be the root
of your Enterprise File Fabric.

Normally you will leave this blank and rclone will determine the
correct root to use itself.

However you can set this to restrict rclone to a specific folder
hierarchy.

In order to do this you will have to find the `Folder ID` of the
directory you wish rclone to display.  These aren't displayed in the
web interface, but you can use `rclone lsf` to find them, for example

```
$ rclone lsf --dirs-only -Fip --csv filefabric:
120673758,Burnt PDFs/
120673759,My Quick Uploads/
120673755,My Syncs/
120673756,My backups/
120673757,My contacts/
120673761,S3 Storage/
```

The ID for "S3 Storage" would be `120673761`.

 start" - DO NOT EDIT - instead edit fs.RegInfo in backend/filefabric/filefabric.go then run 
### Standard options

Here are the Standard options specific to filefabric (Enterprise File Fabric).

#### --filefabric-url

URL of the Enterprise File Fabric to connect to.

Properties:

- Config:      url
- Env Var:     RCLONE_FILEFABRIC_URL
- Type:        string
- Required:    true
- Examples:
    - "https://storagemadeeasy.com"
        - Storage Made Easy US
    - "https://eu.storagemadeeasy.com"
        - Storage Made Easy EU
    - "https://yourfabric.smestorage.com"
        - Connect to your Enterprise File Fabric

#### --filefabric-root-folder-id

ID of the root folder.

Leave blank normally.

Fill in to make rclone start with directory of a given ID.


Properties:

- Config:      root_folder_id
- Env Var:     RCLONE_FILEFABRIC_ROOT_FOLDER_ID
- Type:        string
- Required:    false

#### --filefabric-permanent-token

Permanent Authentication Token.

A Permanent Authentication Token can be created in the Enterprise File
Fabric, on the users Dashboard under Security, there is an entry
you'll see called "My Authentication Tokens". Click the Manage button
to create one.

These tokens are normally valid for several years.

For more info see: https://docs.storagemadeeasy.com/organisationcloud/api-tokens


Properties:

- Config:      permanent_token
- Env Var:     RCLONE_FILEFABRIC_PERMANENT_TOKEN
- Type:        string
- Required:    false

### Advanced options

Here are the Advanced options specific to filefabric (Enterprise File Fabric).

#### --filefabric-token

Session Token.

This is a session token which rclone caches in the config file. It is
usually valid for 1 hour.

Don't set this value - rclone will set it automatically.


Properties:

- Config:      token
- Env Var:     RCLONE_FILEFABRIC_TOKEN
- Type:        string
- Required:    false

#### --filefabric-token-expiry

Token expiry time.

Don't set this value - rclone will set it automatically.


Properties:

- Config:      token_expiry
- Env Var:     RCLONE_FILEFABRIC_TOKEN_EXPIRY
- Type:        string
- Required:    false

#### --filefabric-version

Version read from the file fabric.

Don't set this value - rclone will set it automatically.


Properties:

- Config:      version
- Env Var:     RCLONE_FILEFABRIC_VERSION
- Type:        string
- Required:    false

#### --filefabric-encoding

The encoding for the backend.

See the [encoding section in the overview](/overview/#encoding) for more info.

Properties:

- Config:      encoding
- Env Var:     RCLONE_FILEFABRIC_ENCODING
- Type:        Encoding
- Default:     Slash,Del,Ctl,InvalidUtf8,Dot

#### --filefabric-description

Description of the remote.

Properties:

- Config:      description
- Env Var:     RCLONE_FILEFABRIC_DESCRIPTION
- Type:        string
- Required:    false

