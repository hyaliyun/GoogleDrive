#  Google Drive Alfred Workflow

List File Stream contents from Google Drive

[⤓ Install on the Alfred Gallery](https://alfred.app/workflows/alfredapp/google-drive)

## Setup

Set your Google Drive’s location in the [Workflow’s Configuration](https://www.alfredapp.com/help/workflows/user-configuration/).

## Usage

Search the contents of your Google Drive via the `gd` keyword. Filter for folders only with `gdf`. [Fallback Searches](https://www.alfredapp.com/help/features/default-results/fallback-searches/) are included.


* <kbd>↩&#xFE0E;</kbd> Open.
* <kbd>⌥</kbd><kbd>↩&#xFE0E;</kbd> Reveal in Finder.
* <kbd>⇧</kbd><kbd>↩&#xFE0E;</kbd> Search on Google Drive’s website.

You’ll be asked to build the cache on the first run. A notification will show when it’s ready. The more files you have, the longer the wait. A macOS launchd agent will be loaded to do it daily. An immediate cache rebuild can be forced with <kbd>⌘</kbd><kbd>⌥</kbd><kbd>⌃</kbd><kbd>↩&#xFE0E;</kbd>.

The [Universal Actions](https://www.alfredapp.com/help/features/universal-actions/) make it straightforward to copy and move files to a Google Drive folder.



To report a problem, run `!gddiagnostic`.
