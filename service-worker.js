if(!self.define){let s,e={};const n=(n,l)=>(n=new URL(n+".js",l).href,e[n]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=n,s.onload=e,document.head.appendChild(s)}else s=n,importScripts(n),e()})).then((()=>{let s=e[n];if(!s)throw new Error(`Module ${n} didn’t register its module`);return s})));self.define=(l,u)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let i={};const a=s=>n(s,r),t={module:{uri:r},exports:i,require:a};e[r]=Promise.all(l.map((s=>t[s]||a(s)))).then((s=>(u(...s),i)))}}define(["./workbox-65796995"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"./assets/../index.html",revision:"a1f22d1c307f787951c70e754b09e9ec"},{url:"./assets/10.1319ab7.bundle.js",revision:null},{url:"./assets/11.1319ab7.bundle.js",revision:null},{url:"./assets/12.1319ab7.bundle.js",revision:null},{url:"./assets/13.1319ab7.bundle.js",revision:null},{url:"./assets/14.1319ab7.bundle.js",revision:null},{url:"./assets/15.1319ab7.bundle.js",revision:null},{url:"./assets/16.1319ab7.bundle.js",revision:null},{url:"./assets/17.1319ab7.bundle.js",revision:null},{url:"./assets/18.1319ab7.bundle.js",revision:null},{url:"./assets/19.1319ab7.bundle.js",revision:null},{url:"./assets/20.1319ab7.bundle.js",revision:null},{url:"./assets/21.1319ab7.bundle.js",revision:null},{url:"./assets/3.1319ab7.bundle.js",revision:null},{url:"./assets/4.1319ab7.bundle.js",revision:null},{url:"./assets/5.1319ab7.bundle.js",revision:null},{url:"./assets/6.1319ab7.bundle.js",revision:null},{url:"./assets/7.1319ab7.bundle.js",revision:null},{url:"./assets/8.1319ab7.bundle.js",revision:null},{url:"./assets/9.1319ab7.bundle.js",revision:null},{url:"./assets/lib.1319ab7.bundle.js",revision:null},{url:"./assets/main.1319ab7.bundle.js",revision:null},{url:"./assets/vendor.1319ab7.bundle.js",revision:null},{url:"./assets/worker.38116c8.bundle.worker.js",revision:null}],{ignoreURLParametersMatching:[/.*/]}),s.cleanupOutdatedCaches(),s.registerRoute(/^(http)(s)?(\:\/\/).*\.(?:css)$/,new s.CacheFirst({cacheName:"css",plugins:[new s.ExpirationPlugin({maxEntries:10})]}),"GET"),s.registerRoute(/^(http)(s)?(\:\/\/).*\.(?:env|md|json|adoc)/,new s.CacheFirst({cacheName:"data",plugins:[new s.ExpirationPlugin({maxEntries:5})]}),"GET"),s.registerRoute(/^(http)(s)?(\:\/\/).*\/(?:env)/,new s.CacheFirst({cacheName:"env",plugins:[new s.ExpirationPlugin({maxEntries:5})]}),"GET")}));
