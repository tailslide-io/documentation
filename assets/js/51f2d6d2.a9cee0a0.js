"use strict";(self.webpackChunktailslide_documentation=self.webpackChunktailslide_documentation||[]).push([[318],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),s=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(r),f=n,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||i;return r?a.createElement(m,o(o({ref:t},u),{},{components:r})):a.createElement(m,o({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8755:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var a=r(7462),n=(r(7294),r(3905));const i={slug:"/architecture"},o="Architecture",c={unversionedId:"Architecture",id:"Architecture",title:"Architecture",description:"Tailslide\u2019s architecture was built to facilitate two major uses: the feature flag ruleset data transmission and automated circuit breaking.",source:"@site/docs/6 - Architecture.md",sourceDirName:".",slug:"/architecture",permalink:"/documentation/architecture",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{slug:"/architecture"},sidebar:"tutorialSidebar",previous:{title:"Aerobat",permalink:"/documentation/Additional Documentation/Aerobat"}},l={},s=[],u={toc:s};function p(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"architecture"},"Architecture"),(0,n.kt)("p",null,"Tailslide\u2019s architecture was built to facilitate two major uses: the feature flag ruleset data transmission and automated circuit breaking. "),(0,n.kt)("p",null,"There are three key pieces of Tailslide\u2019s architecture created by the team. These include: "),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Tower")," - a full-stack application that handles the CRUD functionality related to feature flag management  "),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Tailslide SDKs")," - provides user microservices with flag state to ensure appropriate logic evaluation at runtime and emission of circuit-breaking data"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Aerobat")," - a lightweight Node application responsible for all circuit-breaking logic")),(0,n.kt)("p",null,"Tailslide also utilizes the following open-source software: NATs JetStream, PostgreSQL, and Redis Timeseries Database."),(0,n.kt)("div",{style:{textAlign:"center"}},(0,n.kt)("img",{src:r(5200).Z,alt:"Tailslide Architecture Diagram"})))}p.isMDXComponent=!0},5200:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/6.1-architecture-diagram-1cf19203dfcc148ed8b6c7a8f2b6b411.png"}}]);