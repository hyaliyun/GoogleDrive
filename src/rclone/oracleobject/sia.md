---
title: "Sia"
description: "Remote for Sia Decentralized Cloud"
versionIntroduced: "v1.57"
date: "2019-10-02"
---

#  "fa fa-globe Sia

Sia ([sia.tech](https://sia.tech/)) is a decentralized cloud storage platform
based on the [blockchain](https://wikipedia.org/wiki/Blockchain) technology.
With rclone you can use it like any other remote filesystem or mount Sia folders
locally. The technology behind it involves a number of new concepts such as
Siacoins and Wallet, Blockchain and Consensus, Renting and Hosting, and so on.
If you are new to it, you'd better first familiarize yourself using their
excellent [support documentation](https://support.sia.tech/).

## Introduction

Before you can use rclone with Sia, you will need to have a running copy of
`Sia-UI` or `siad` (the Sia daemon) locally on your computer or on local
network (e.g. a NAS). Please follow the [Get started](https://sia.tech/get-started)
guide and install one.

rclone interacts with Sia network by talking to the Sia daemon via [HTTP API](https://sia.tech/docs/)
which is usually available on port _9980_. By default you will run the daemon
locally on the same computer so it's safe to leave the API password blank
(the API URL will be `http://127.0.0.1:9980` making external access impossible).

However, if you want to access Sia daemon running on another node, for example
due to memory constraints or because you want to share single daemon between
several rclone and Sia-UI instances, you'll need to make a few more provisions:
- Ensure you have _Sia daemon_ installed directly or in
  a [docker container](https://github.com/SiaFoundation/siad/pkgs/container/siad)
  because Sia-UI does not support this mode natively.
- Run it on externally accessible port, for example provide `--api-addr :9980`
  and `--disable-api-security` arguments on the daemon command line.
- Enforce API password for the `siad` daemon via environment variable
  `SIA_API_PASSWORD` or text file named `apipassword` in the daemon directory.
- Set rclone backend option `api_password` taking it from above locations.


Notes:
1. If your wallet is locked, rclone cannot unlock it automatically.
   You should either unlock it in advance by using Sia-UI or via command line
   `siac wallet unlock`.
   Alternatively you can make `siad` unlock your wallet automatically upon
   startup by running it with environment variable `SIA_WALLET_PASSWORD`.
2. If `siad` cannot find the `SIA_API_PASSWORD` variable or the `apipassword` file
   in the `SIA_DIR` directory, it will generate a random password and store in the
   text file named `apipassword` under `YOUR_HOME/.sia/` directory on Unix
   or `C:\Users\YOUR_HOME\AppData\Local\Sia\apipassword` on Windows.
   Remember this when you configure password in rclone.
3. The only way to use `siad` without API password is to run it **on localhost**
   with command line argument `--authorize-api=false`, but this is insecure and
   **strongly discouraged**.

## Configuration

Here is an example of how to make a `sia` remote called `mySia`.
First, run:

     rclone config

This will guide you through an interactive setup process:

```
No remotes found, make a new one?
n) New remote
s) Set configuration password
q) Quit config
n/s/q> n
name> mySia
Type of storage to configure.
Enter a string value. Press Enter for the default ("").
Choose a number from below, or type in your own value
...
29 / Sia Decentralized Cloud
   \ "sia"
...
Storage> sia
Sia daemon API URL, like http://sia.daemon.host:9980.
Note that siad must run with --disable-api-security to open API port for other hosts (not recommended).
Keep default if Sia daemon runs on localhost.
Enter a string value. Press Enter for the default ("http://127.0.0.1:9980").
api_url> http://127.0.0.1:9980
Sia Daemon API Password.
Can be found in the apipassword file located in HOME/.sia/ or in the daemon directory.
y) Yes type in my own password
g) Generate random password
n) No leave this optional password blank (default)
y/g/n> y
Enter the password:
password:
Confirm the password:
password:
Edit advanced config?
y) Yes
n) No (default)
y/n> n
--------------------
[mySia]
type = sia
api_url = http://127.0.0.1:9980
api_password = *** ENCRYPTED ***
--------------------
y) Yes this is OK (default)
e) Edit this remote
d) Delete this remote
y/e/d> y
```

Once configured, you can then use `rclone` like this:

- List directories in top level of your Sia storage

```
rclone lsd mySia:
```

- List all the files in your Sia storage

```
rclone ls mySia:
```

- Upload a local directory to the Sia directory called _backup_

```
rclone copy /home/source mySia:backup
```

 start" - DO NOT EDIT - instead edit fs.RegInfo in backend/sia/sia.go then run 
### Standard options

Here are the Standard options specific to sia (Sia Decentralized Cloud).

#### --sia-api-url

Sia daemon API URL, like http://sia.daemon.host:9980.

Note that siad must run with --disable-api-security to open API port for other hosts (not recommended).
Keep default if Sia daemon runs on localhost.

Properties:

- Config:      api_url
- Env Var:     RCLONE_SIA_API_URL
- Type:        string
- Default:     "http://127.0.0.1:9980"

#### --sia-api-password

Sia Daemon API Password.

Can be found in the apipassword file located in HOME/.sia/ or in the daemon directory.

**NB** Input to this must be obscured - see [rclone obscure](/commands/rclone_obscure/).

Properties:

- Config:      api_password
- Env Var:     RCLONE_SIA_API_PASSWORD
- Type:        string
- Required:    false

### Advanced options

Here are the Advanced options specific to sia (Sia Decentralized Cloud).

#### --sia-user-agent

Siad User Agent

Sia daemon requires the 'Sia-Agent' user agent by default for security

Properties:

- Config:      user_agent
- Env Var:     RCLONE_SIA_USER_AGENT
- Type:        string
- Default:     "Sia-Agent"

#### --sia-encoding

The encoding for the backend.

See the [encoding section in the overview](/overview/#encoding) for more info.

Properties:

- Config:      encoding
- Env Var:     RCLONE_SIA_ENCODING
- Type:        Encoding
- Default:     Slash,Question,Hash,Percent,Del,Ctl,InvalidUtf8,Dot

#### --sia-description

Description of the remote.

Properties:

- Config:      description
- Env Var:     RCLONE_SIA_DESCRIPTION
- Type:        string
- Required:    false



## Limitations

- Modification times not supported
- Checksums not supported
- `rclone about` not supported
- rclone can work only with _Siad_ or _Sia-UI_ at the moment,
  the **SkyNet daemon is not supported yet.**
- Sia does not allow control characters or symbols like question and pound
  signs in file names. rclone will transparently [encode](/overview/#encoding)
  them for you, but you'd better be aware