jqm-cordova-template-project
============================
A cordova project using jQuery Mobile suitable for starting a new app. Learn how this template works on https://app-o-mat.com/video-series/jquery-mobile-cordova-template

Pre-requisites
==============
A working cordova toolchain with your platforms set up. See http://cordova.apache.org for installation instructions

Dependencies
============
This template includes all dependencies in `www/lib`. They are:
* jQuery from http://jquery.com
* jQuery Mobile from http://jquerymobile.com
* jQuery Mobile Router from https://github.com/azicchetti/jquerymobile-router
* Handlebars from http://handlebarsjs.com
* FastClick from https://github.com/ftlabs/fastclick

Instructions
============
1. Create your cordova app normally

    ```bash
    cordova create yourapp com.example.yourapp 'Your App'
    cd yourapp
    
    # recommended minimal plugins
    cordova plugin add org.apache.cordova.console
    cordova plugin add org.apache.cordova.dialogs
    cordova plugin add org.apache.cordova.splashscreen
    cordova plugin add org.apache.cordova.statusbar
    
    # add platforms 
    cordova platform add ios
    cordova platform add android
    ```

2. Copy the `www` subdirectory from this project, overwriting the default one

3. Edit `config.xml` (follow the comments).

4. Run the app

    ```bash
    # In a browser
    cordova run browser
    
    # In an emulator (replace `ios` with an installed platform)

    # Get a list of iOS simulators and devices
    cordova run ios --list

    # Run it using one of the choices in the above list
    cordova run ios --target='iPhone-8, 11.2'
    ```

