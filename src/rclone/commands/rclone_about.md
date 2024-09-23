

# rclone about

Get quota information from the remote.

## Synopsis

Prints quota information about a remote to standard
output. The output is typically used, free, quota and trash contents.

E.g. Typical output from `rclone about remote:` is:

    Total:   17 GiB
    Used:    7.444 GiB
    Free:    1.315 GiB
    Trashed: 100.000 MiB
    Other:   8.241 GiB

Where the fields are:

* Total: Total size available.
* Used: Total size used.
* Free: Total space available to this user.
* Trashed: Total space used by trash.
* Other: Total amount in other storage (e.g. Gmail, Google Photos).
* Objects: Total number of objects in the storage.

All sizes are in number of bytes.

Applying a `--full` flag to the command prints the bytes in full, e.g.

    Total:   18253611008
    Used:    7993453766
    Free:    1411001220
    Trashed: 104857602
    Other:   8849156022

A `--json` flag generates conveniently machine-readable output, e.g.

    {
        "total": 18253611008,
        "used": 7993453766,
        "trashed": 104857602,
        "other": 8849156022,
        "free": 1411001220
    }

Not all backends print all fields. Information is not included if it is not
provided by a backend. Where the value is unlimited it is omitted.

Some backends does not support the `rclone about` command at all,
see complete list in [documentation](https://rclone.org/overview/#optional-features).

```
rclone about remote: [flags]
```

## Options

```
      --full   Full numbers instead of human-readable
  -h, --help   help for about
      --json   Format output as JSON
```

See the [global flags page](/flags/) for global options not listed here.

## See Also

* [rclone](/commands/rclone/)	 - Show help for rclone commands, flags and backends.