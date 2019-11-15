# pnpjs-on-prem-bundle
Use this project to bundle the latest [PnPjs](https://pnp.github.io/pnpjs/) into a single JavaScript file. Use that in an on-premises SharePoint environment where you have no SharePoint Framework.

## Use Cases
* maintain light-weight JavaScript solutions in SharePoint on-premises (Script Editor, Content Editor, Add-ins, Master Page customizations etc.) while using a modern API wrapper
* use PnPjs instead of handwoven REST calls to the SharePoint API
* use the latest [PnPjs](https://pnp.github.io/pnpjs/) in SharePoint on-premises (note: **not** the deprecated [PnP-JS-Core](https://github.com/SharePoint/PnP-JS-Core))

## How Does it Work?

PnPjs comes as a collection of modules to be used e.g. in a SharePoint Framework project. I bundle those together using [browserify](http://browserify.org/) to get a single JavaScript file that can easily be used in SharePoint on-prem.

## Challenges of Internet Explorer 11
IE 11 needs polyfills for:
* `Map`
* `Array.prototype.iterator`
* `Promise.prototype.finally`
* `fetch` (the in-built one is lacking and needs to be replaced) ([polyfill](https://github.com/github/fetch))

All but the last are provided by polyfill.io, have a look at _sample-script-editor-content.html_. The last one needs to be applied in code and is thus put into the bundle, see _pnpjs-on-prem.ts_. You don't have to do anything in addition - unless you start playing with even lower IE versions or new PnPjs APIs I didn't test.

## Tested Environment
This has been tested in the following environment:
* SharePoint Server 2013
* Internet Explorer 11 on Windows 7 (IE 11.0.9600.19431)
* Chrome
* Firefox
* in a Script Editor web part
* using the SharePoint Search API

Lower versions of IE were not tested. Other PnPjs APIs were not tested, but the code should be easily adaptable.

## Minimal Path to Awesome
* `git clone`
* `npm install`
* `npm run bundle`

Take _pnpjs-on-prem.js_ from the _dist_ folder. Look at _sample-script-editor-content.html_ to get started (shows how to load _require_ and _polyfill_ dependencies).
