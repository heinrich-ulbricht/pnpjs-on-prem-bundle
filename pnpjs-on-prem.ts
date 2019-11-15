// import additional assets as needed
import { sp } from "@pnp/sp";
// needed to make PnPjs work in IE (tested in IE 11)
import { fetch as fetchPolyfill } from 'whatwg-fetch';

// simple IE detection, courtesy of https://stackoverflow.com/a/21825207/56658
var isIE = (navigator.userAgent.indexOf('MSIE')!==-1 || navigator.appVersion.indexOf('Trident/') > -1);
if (isIE) {
  // IE does not implement fetch properly - polyfill it, or PnPjs won't work
  fetchPolyfill();
}

sp.setup({
  sp: {
    headers: {
      // seems to be necessary for older SP 2013 versions, according to PnPjs docs
      Accept: "application/json;odata=verbose",
    },
  },
});

// extend here as needed
(window as any).contoso_pnpjs_sp = sp;