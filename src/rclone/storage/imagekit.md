---
title: "ImageKit"
description: "Rclone docs for ImageKit backend."
versionIntroduced: "v1.63"

---
#  ImageKit
This is a backend for the [ImageKit.io](https://imagekit.io/) storage service.

#### About ImageKit
[ImageKit.io](https://imagekit.io/)  provides real-time image and video optimizations, transformations, and CDN delivery. Over 1,000 businesses and 70,000 developers trust ImageKit with their images and videos on the web.


#### Accounts & Pricing

To use this backend, you need to [create an account](https://imagekit.io/registration/) on ImageKit. Start with a free plan with generous usage limits. Then, as your requirements grow, upgrade to a plan that best fits your needs. See [the pricing details](https://imagekit.io/plans).

## Configuration

Here is an example of making an imagekit configuration.

Firstly create a [ImageKit.io](https://imagekit.io/) account and choose a plan.

You will need to log in and get the `publicKey` and `privateKey` for your account from the developer section.

Now run
```
rclone config
```

This will guide you through an interactive setup process:

```
No remotes found, make a new one?
n) New remote
s) Set configuration password
q) Quit config
n/s/q> n

Enter the name for the new remote.
name> imagekit-media-library

Option Storage.
Type of storage to configure.
Choose a number from below, or type in your own value.
[snip]
XX / ImageKit.io
\ (imagekit)
[snip]
Storage> imagekit
  
Option endpoint.
You can find your ImageKit.io URL endpoint in your [dashboard](https://imagekit.io/dashboard/developer/api-keys)
Enter a value.
endpoint> https://ik.imagekit.io/imagekit_id  

Option public_key.
You can find your ImageKit.io public key in your [dashboard](https://imagekit.io/dashboard/developer/api-keys)
Enter a value.
public_key> public_****************************

Option private_key.
You can find your ImageKit.io private key in your [dashboard](https://imagekit.io/dashboard/developer/api-keys)
Enter a value.
private_key> private_****************************

Edit advanced config?
y) Yes
n) No (default)
y/n> n

Configuration complete.
Options:
- type: imagekit
- endpoint: https://ik.imagekit.io/imagekit_id
- public_key: public_****************************
- private_key: private_****************************

Keep this "imagekit-media-library" remote?
y) Yes this is OK (default)
e) Edit this remote
d) Delete this remote
y/e/d> y
```
List directories in the top level of your Media Library
```
rclone lsd imagekit-media-library:
```
Make a new directory.
```
rclone mkdir imagekit-media-library:directory
```
List the contents of a directory.
```
rclone ls imagekit-media-library:directory
```

###   Modified time and hashes

ImageKit does not support modification times or hashes yet.

### Checksums

No checksums are supported.

 start" - DO NOT EDIT - instead edit fs.RegInfo in backend/imagekit/imagekit.go then run 
### Standard options

Here are the Standard options specific to imagekit (ImageKit.io).

#### --imagekit-endpoint

You can find your ImageKit.io URL endpoint in your [dashboard](https://imagekit.io/dashboard/developer/api-keys)

Properties:

- Config:      endpoint
- Env Var:     RCLONE_IMAGEKIT_ENDPOINT
- Type:        string
- Required:    true

#### --imagekit-public-key

You can find your ImageKit.io public key in your [dashboard](https://imagekit.io/dashboard/developer/api-keys)

Properties:

- Config:      public_key
- Env Var:     RCLONE_IMAGEKIT_PUBLIC_KEY
- Type:        string
- Required:    true

#### --imagekit-private-key

You can find your ImageKit.io private key in your [dashboard](https://imagekit.io/dashboard/developer/api-keys)

Properties:

- Config:      private_key
- Env Var:     RCLONE_IMAGEKIT_PRIVATE_KEY
- Type:        string
- Required:    true

### Advanced options

Here are the Advanced options specific to imagekit (ImageKit.io).

#### --imagekit-only-signed

If you have configured `Restrict unsigned image URLs` in your dashboard settings, set this to true.

Properties:

- Config:      only_signed
- Env Var:     RCLONE_IMAGEKIT_ONLY_SIGNED
- Type:        bool
- Default:     false

#### --imagekit-versions

Include old versions in directory listings.

Properties:

- Config:      versions
- Env Var:     RCLONE_IMAGEKIT_VERSIONS
- Type:        bool
- Default:     false

#### --imagekit-upload-tags

Tags to add to the uploaded files, e.g. "tag1,tag2".

Properties:

- Config:      upload_tags
- Env Var:     RCLONE_IMAGEKIT_UPLOAD_TAGS
- Type:        string
- Required:    false

#### --imagekit-encoding

The encoding for the backend.

See the [encoding section in the overview](/overview/#encoding) for more info.

Properties:

- Config:      encoding
- Env Var:     RCLONE_IMAGEKIT_ENCODING
- Type:        Encoding
- Default:     Slash,LtGt,DoubleQuote,Dollar,Question,Hash,Percent,BackSlash,Del,Ctl,InvalidUtf8,Dot,SquareBracket

#### --imagekit-description

Description of the remote.

Properties:

- Config:      description
- Env Var:     RCLONE_IMAGEKIT_DESCRIPTION
- Type:        string
- Required:    false

### Metadata

Any metadata supported by the underlying remote is read and written.

Here are the possible system metadata items for the imagekit backend.

| Name | Help | Type | Example | Read Only |
|------|------|------|---------|-----------|
| aws-tags | AI generated tags by AWS Rekognition associated with the image | string | tag1,tag2 | **Y** |
| btime | Time of file birth (creation) read from Last-Modified header | RFC 3339 | 2006-01-02T15:04:05.999999999Z07:00 | **Y** |
| custom-coordinates | Custom coordinates of the file | string | 0,0,100,100 | **Y** |
| file-type | Type of the file | string | image | **Y** |
| google-tags | AI generated tags by Google Cloud Vision associated with the image | string | tag1,tag2 | **Y** |
| has-alpha | Whether the image has alpha channel or not | bool |  | **Y** |
| height | Height of the image or video in pixels | int |  | **Y** |
| is-private-file | Whether the file is private or not | bool |  | **Y** |
| size | Size of the object in bytes | int64 |  | **Y** |
| tags | Tags associated with the file | string | tag1,tag2 | **Y** |
| width | Width of the image or video in pixels | int |  | **Y** |

See the [metadata](/docs/#metadata) docs for more info.


