"use strict";(self.webpackChunktailslide_documentation=self.webpackChunktailslide_documentation||[]).push([[871],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>p});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var g=n.createContext({}),c=function(e){var t=n.useContext(g),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(g.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,g=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),f=c(a),p=i,u=f["".concat(g,".").concat(p)]||f[p]||d[p]||r;return a?n.createElement(u,l(l({ref:t},s),{},{components:a})):n.createElement(u,l({ref:t},s))}));function p(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=f;var o={};for(var g in t)hasOwnProperty.call(t,g)&&(o[g]=t[g]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var c=2;c<r;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},1540:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var n=a(7462),i=(a(7294),a(3905));const r={sidebar_position:3},l="Working with Flags",o={unversionedId:"Getting Started/Working-with-flags",id:"Getting Started/Working-with-flags",title:"Working with Flags",description:"The creating, updating, and deleting of feature flags occurs via the application running at http3001",source:"@site/docs/2 - Getting Started/Working-with-flags.md",sourceDirName:"2 - Getting Started",slug:"/Getting Started/Working-with-flags",permalink:"/documentation/Getting Started/Working-with-flags",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Creating an App",permalink:"/documentation/Getting Started/Creating-an-app"},next:{title:"Whitelisted Users",permalink:"/documentation/Getting Started/Whitelisted-Users"}},g={},c=[{value:"Create a new flag",id:"create-a-new-flag",level:2},{value:"Toggling a flag",id:"toggling-a-flag",level:2},{value:"Edit a flag",id:"edit-a-flag",level:2},{value:"Deleting a flag",id:"deleting-a-flag",level:2}],s={toc:c};function d(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"working-with-flags"},"Working with Flags"),(0,i.kt)("p",null,"The creating, updating, and deleting of feature flags occurs via the application running at http://localhost:3001"),(0,i.kt)("h2",{id:"create-a-new-flag"},"Create a new flag"),(0,i.kt)("p",null,"To add a flag, first click into the app that the flag will should belong to. This brings up a screen showing all of the feature flags related to that particular app. Click on the orange addition icon to bring up the add and edit flag modal. Enter a name and description for the new flag and click create."),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:a(7802).Z,alt:"Gif of Tailslide UI creating new flag"})),(0,i.kt)("h2",{id:"toggling-a-flag"},"Toggling a flag"),(0,i.kt)("p",null,"Click on the toggle icon on the right of the flag to activate and deactivate it."),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:a(2563).Z,alt:"Gif of Tailslide UI toggling a flag"})),(0,i.kt)("h2",{id:"edit-a-flag"},"Edit a flag"),(0,i.kt)("p",null,"Click on a flag to bring up information about that flag. Click the edit button to bring up the add and edit flag modal. Make any desired changes and click save."),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:a(366).Z,alt:"Gif of Tailslide UI editing a flag"})),(0,i.kt)("h2",{id:"deleting-a-flag"},"Deleting a flag"),(0,i.kt)("p",null,"Click on a flag to bring up the information screen. Use the delete button to remove that flag."),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:a(324).Z,alt:"Gif of Tailslide UI deleting a flag"})))}d.isMDXComponent=!0},7802:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/createFlag-b80497e5714215e8434c63cc6822b132.gif"},324:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/deleteFlag-6152e9fb25d8ee711e676c1a1f3c897c.gif"},366:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/editFlag-e3f4ad0b9618cac0ac4415fa934db182.gif"},2563:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/toggleFlag-d145c7b0266ecbf2ac76b438a549700f.gif"}}]);