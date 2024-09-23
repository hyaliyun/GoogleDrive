(This wiki page applies to people migrating code written before February 2017. It is unlikely to still be relevant. The `flutter` tool directs people to this page when a non-Gradle project is detected.)

## Introduction

Prior to [Pull Request 7902](https://github.com/flutter/flutter/pull/7902) -- which was merged to master on February 6th 2017 -- we used a custom build process when building for Android. We now build for Android using the same standard 'gradle-based' build process that Android Studio project uses. This makes it easier to edit the native Android code; after the upgrade you can open the `android` folder in Android Studio, and it will know how to build the project, and will allow you to add java code.

If you have a project that was created prior to this date, please follow these steps to switch to building with gradle. This is required as we will be removing the custom build support shortly.

*Note*: These steps apply to projects created with `flutter create` prior to February 6th 2017. If your project was based on a copy of `/examples/hello_services/`, then you just need to synchronize the contents of [`/android/build.gradle`](../../../packages/flutter_tools/templates/create/android.tmpl/build.gradle) and [`/android/app/build.gradle`](../../../packages/flutter_tools/templates/create/android.tmpl/app/build.gradle).

## Upgrading an existing project

The steps below use `<existing-app-dir>` as a placeholder for the directory containing your existing app, e.g. `~/dev/flutter/awesomeapp`.

### Step 0: Ensure flutter is up to date

Make sure you flutter SDK is up to date. You need a recent (March 1st, 2017 later) SDK from the master branch of https://github.com/flutter/flutter.

You can upgrade by running `flutter upgrade` in a terminal.

### Step 1: Create a new project with the new template

```
flutter create <appname>
mv <appname>/lib <appname>/lib.template
```

### Step 2: Merge over your Flutter UI code

Main Dart UI code:
```
cp -r <existing-app-dir>/lib <appname>/
```

If `<existing-app-dir>/assets` exists:
```
cp -r <existing-app-dir>/assets <appname>/
```
```
cp -r <existing-app-dir>/android/res <appname>android/app/src/main/
```
