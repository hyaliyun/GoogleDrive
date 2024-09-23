
<!-- README.md is generated from README.Rmd. Please edit that file -->

# googledrive <a href="https://googledrive.tidyverse.org"></a>

<!-- badges: start -->


## Overview

googledrive allows you to interact with files on Google Drive from R.

## Installation

Install the CRAN version:

``` r
install.packages("googledrive")
```

Or install the development version from GitHub:

``` r
# install.packages("pak")
pak::pak("tidyverse/googledrive")
```

## Usage

Please see the package website: <https://googledrive.tidyverse.org>

Here’s a teaser that uses googledrive to view some of the files you see
on <https://drive.google.com> (up to `n_max = 25`, in this case):

``` r
library("googledrive")
drive_find(n_max = 25)
#> # A dribble: 25 × 3
#>    name                       id                                drive_resource
#>    <chr>                      <drv_id>                          <list>        
#>  1 2021-09-16_r_logo.jpg      1dandXB0QZpjeGQq_56wTXKNwaqgsOa9D <named list>  
#>  2 2021-09-16_r_about.html    1XfCI_orH4oNUZh06C4w6vXtno-BT_zmZ <named list>  
#>  3 2021-09-16_imdb_latin1.csv 163YPvqYmGuqQiEwEFLg2s1URq4EnpkBw <named list>  
#>  4 2021-09-16_chicken.txt     1axJz8GSmecSnaYBx0Sb3Gb-SXVaTzKw7 <named list>  
#>  5 2021-09-16_chicken.pdf     14Hd6_VQAeEgcwBBJamc-FUlnXhp117T2 <named list>  
#>  6 2021-09-16_chicken.jpg     1aslW1T-B8UKzAEotDWpmRFaMyMux5-it <named list>  
#>  7 2021-09-16_chicken.csv     1Mj--zJYZJSMKsNVjk2tYFef5LnCsNoDT <named list>  
#>  8 pqr                        143iq-CswFTwJTjVfKkcFMDW0jYqDeUj2 <named list>  
#>  9 mno                        1gcUTnFbsF6uioJrLCsVQ78_F1wEzyNtI <named list>  
#> 10 jkl                        17T40phn99w0hY-B_Ev0deTvVg9fmUSnt <named list>  
#> # ℹ 15 more rows
```

## Contributing

If you’d like to contribute to the development of googledrive, please
read [these
guidelines](https://googledrive.tidyverse.org/CONTRIBUTING.html).

Please note that the googledrive project is released with a [Contributor
Code of
Conduct](https://googledrive.tidyverse.org/CODE_OF_CONDUCT.html). By
contributing to this project, you agree to abide by its terms.

## Privacy

[Privacy policy](https://www.tidyverse.org/google_privacy_policy)
