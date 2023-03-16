!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports["style/home-redesign/minimal"]=n():e["style/home-redesign/minimal"]=n()}(globalThis,(()=>(()=>{var e,n,t={90:(e,n,t)=>{"use strict";t.d(n,{t:()=>i});var o=t(986);const i=(0,o.getComponentSettings)("minimalHome").options},100:(e,n,t)=>{"use strict";let o;t.d(n,{F:()=>o}),function(e){e.Feeds="动态",e.Trending="热门 / 推荐"}(o||(o={}))},89:(e,n,t)=>{var o=t(355)((function(e){return e[1]}));o.push([e.id,"html {\n  scroll-behavior: smooth;\n  min-height: 100vh;\n}\nbody {\n  display: flex;\n  align-items: stretch;\n  flex-direction: column;\n  gap: 0;\n  min-height: 100vh;\n}\n#i_cecream {\n  width: 100%;\n}\n.home-redesign-base {\n  --home-base-color: #fff;\n  --home-background-color: #fff;\n  --home-color: #000;\n  --home-max-width: var(--home-max-width-override, 1440px);\n  --home-content-height: 250px;\n  --home-card-radius: 12px;\n  --home-card-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05);\n  --home-card-border: 1px solid #8882;\n  background-color: var(--home-base-color);\n  color: var(--home-color);\n  font-size: 12px;\n  flex-grow: 1;\n  line-height: normal;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  gap: 0;\n}\nbody.dark .home-redesign-base {\n  --home-base-color: #181818;\n  --home-background-color: #282828;\n  --home-color: #eee;\n  --home-card-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.2);\n}\nbody.home-redesign-off .home-redesign-base {\n  display: none;\n}",""]),e.exports=o},115:(e,n,t)=>{var o=t(355)((function(e){return e[1]}));o.push([e.id,".minimal-home {\n  --minimal-home-auto-card-column: 1;\n  --card-width: 600px;\n  --card-height: 122px;\n  --minimal-home-grid-gap: 12px;\n  --minimal-home-grid-padding: 8px;\n  --minimal-home-card-column: var(\n    --minimal-home-column-count-override,\n    var(--minimal-home-auto-card-column)\n  );\n  padding: 24px 32px 0 32px;\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n}\n@media screen and (min-width: 1440px) {\n.minimal-home {\n    --minimal-home-auto-card-column: 2;\n}\n}\n@media screen and (min-width: 2160px) {\n.minimal-home {\n    --minimal-home-auto-card-column: 3;\n}\n}\n.minimal-home-tabs {\n  flex-grow: 1;\n  min-width: calc(var(--card-width) * var(--minimal-home-card-column) + var(--minimal-home-grid-gap) * (var(--minimal-home-card-column) - 1) + 2 * var(--minimal-home-grid-padding));\n}\n.minimal-home-tabs .minimal-home-tab-cards {\n  display: grid;\n  grid-template-columns: repeat(var(--minimal-home-card-column), var(--card-width));\n  gap: var(--minimal-home-grid-gap);\n  padding: 0 var(--minimal-home-grid-padding);\n  margin-bottom: 16px;\n}\n.minimal-home-tabs .minimal-home-tab-cards .video-card * {\n  transition: 0.2s ease-out;\n}",""]),e.exports=o},620:(e,n,t)=>{var o=t(355)((function(e){return e[1]}));o.push([e.id,".minimal-home-operations {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  gap: 12px;\n  position: fixed;\n  bottom: 48px;\n  right: 48px;\n}\n.minimal-home-operations .be-button {\n  padding: 8px !important;\n  opacity: 0.5;\n}\n.minimal-home-operations .be-button:hover {\n  opacity: 1;\n}\n.minimal-home-operations-refresh .mdi {\n  transition-duration: 0.5s;\n}\n.minimal-home-operations-refresh .mdi:hover {\n  transform: rotate(1turn);\n}\n.minimal-home-operations-top .mdi:hover {\n  animation: bounce-y--2 0.4s ease-out;\n}\n@keyframes bounce-y--2 {\n0%, 100% {\n    transform: translateY(0);\n}\n50% {\n    transform: translateY(-2px);\n}\n}",""]),e.exports=o},865:(e,n,t)=>{var o=t(355)((function(e){return e[1]}));o.push([e.id,".international-home > :not(.international-header),\n.international-header .b-wrap,\n.international-footer,\n#app > .bili-wrapper,\n#app > .elevator-module,\n#app > .bili-header-m.stardust-common > .bili-wrapper,\n.bili-header-m .head-banner .head-content .head-logo,\n#i_cecream .bili-header__channel,\n#i_cecream > .bili-feed4 > :not(.bili-header),\n.palette-button-wrap {\n  position: fixed;\n  visibility: hidden;\n  top: 200vh;\n  left: 0;\n  height: 0 !important;\n  padding: 0 !important;\n  margin: 0 !important;\n  overflow: hidden !important;\n}",""]),e.exports=o},355:e=>{"use strict";
// eslint-disable-next-line func-names
e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},
// eslint-disable-next-line func-names
n.i=function(e,t,o){"string"==typeof e&&(
// eslint-disable-next-line no-param-reassign
e=[[null,e,""]]);var i={};if(o)for(var r=0;r<this.length;r++){
// eslint-disable-next-line prefer-destructuring
var a=this[r][0];null!=a&&(i[a]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);o&&i[l[0]]||(t&&(l[2]?l[2]="".concat(t," and ").concat(l[2]):l[2]=t),n.push(l))}},n}},662:(e,n,t)=>{"use strict";var o,i=function(){return void 0===o&&(
// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
// @see https://github.com/webpack-contrib/style-loader/issues/177
o=Boolean(window&&document&&document.all&&!window.atob)),o},r=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),a=[];function s(e){for(var n=-1,t=0;t<a.length;t++)if(a[t].identifier===e){n=t;break}return n}function l(e,n){for(var t={},o=[],i=0;i<e.length;i++){var r=e[i],l=n.base?r[0]+n.base:r[0],d=t[l]||0,c="".concat(l," ").concat(d);t[l]=d+1;var m=s(c),u={css:r[1],media:r[2],sourceMap:r[3]};-1!==m?(a[m].references++,a[m].updater(u)):a.push({identifier:c,updater:v(u,n),references:1}),o.push(c)}return o}function d(e){var n=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var i=t.nc;i&&(o.nonce=i)}if(Object.keys(o).forEach((function(e){n.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(n);else{var a=r(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var c,m=(c=[],function(e,n){return c[e]=n,c.filter(Boolean).join("\n")});function u(e,n,t,o){var i=t?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=m(n,i);else{var r=document.createTextNode(i),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(r,a[n]):e.appendChild(r)}}function p(e,n,t){var o=t.css,i=t.media,r=t.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var h=null,f=0;function v(e,n){var t,o,i;if(n.singleton){var r=f++;t=h||(h=d(n)),o=u.bind(null,t,r,!1),i=u.bind(null,t,r,!0)}else t=d(n),o=p.bind(null,t,n),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return o(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;o(e=n)}else i()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=i());var t=l(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<t.length;o++){var i=s(t[o]);a[i].references--}for(var r=l(e,n),d=0;d<t.length;d++){var c=s(t[d]);0===a[c].references&&(a[c].updater(),a.splice(c,1))}t=r}}}},792:(e,n,t)=>{var o=t(865);o&&o.__esModule&&(o=o.default),e.exports="string"==typeof o?o:o.toString()},26:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>T});var o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("HomeRedesignBase",[t("div",{staticClass:"minimal-home"},[t("TabControl",{staticClass:"minimal-home-tabs",attrs:{"default-tab":e.defaultTab,tabs:e.tabs}})],1)])};o._withStripped=!0;var i=t(986),r=t(648),a=function(){var e=this,n=e.$createElement;return(e._self._c||n)("div",{staticClass:"home-redesign-base"},[e._t("default")],2)};a._withStripped=!0;const s=Vue.extend({});var l=t(662),d=t.n(l),c=t(89),m=t.n(c),u={insert:"head",singleton:!1};d()(m(),u);m().locals;var p=t(769),h=(0,p.Z)(s,a,[],!1,null,null,null);h.options.__file="registry/lib/components/style/home-redesign/HomeRedesignBase.vue";const f=h.exports;var v=t(90),g=t(100);const b=[{name:g.F.Feeds,displayName:"动态",component:()=>Promise.resolve().then(t.bind(t,433)).then((e=>e.default)),activeLink:"https://t.bilibili.com/?tab=video"},{name:g.F.Trending,displayName:v.t.personalized?"推荐":"热门",component:()=>Promise.resolve().then(t.bind(t,990)).then((e=>e.default)),activeLink:"https://www.bilibili.com/v/popular/all"}],y=Vue.extend({components:{HomeRedesignBase:f,TabControl:r.TabControl},data:()=>({tabs:b,defaultTab:v.t.defaultTab}),mounted(){const e="--minimal-home-column-count-override";(0,i.addComponentListener)("minimalHome.columnCount",(n=>{n>0?this.$el.style.setProperty(e,n.toString()):this.$el.style.removeProperty(e)}),!0)}});var x=t(115),_=t.n(x),w={insert:"head",singleton:!1};d()(_(),w);_().locals;var C=(0,p.Z)(y,o,[],!1,null,null,null);C.options.__file="registry/lib/components/style/home-redesign/minimal/MinimalHome.vue";const T=C.exports},658:(e,n,t)=>{"use strict";t.d(n,{Z:()=>u});var o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"minimal-home-operations"},[t("VButton",{staticClass:"minimal-home-operations-refresh",attrs:{round:"",icon:"",title:"刷新"},on:{click:function(n){e.backToTop(),e.$emit("refresh")}}},[t("VIcon",{attrs:{icon:"mdi-refresh",size:e.size}})],1),e._v(" "),t("VButton",{staticClass:"minimal-home-operations-top",attrs:{round:"",icon:"",title:"返回顶部"},on:{click:e.backToTop}},[t("VIcon",{attrs:{icon:"mdi-arrow-up",size:e.size}})],1)],1)};o._withStripped=!0;var i=t(648);const r=Vue.extend({components:{VButton:i.VButton,VIcon:i.VIcon},data:()=>({size:28}),methods:{backToTop(){window.scrollTo(0,0)}}});var a=t(662),s=t.n(a),l=t(620),d=t.n(l),c={insert:"head",singleton:!1};s()(d(),c);d().locals;var m=(0,t(769).Z)(r,o,[],!1,null,null,null);m.options.__file="registry/lib/components/style/home-redesign/minimal/MinimalHomeOperations.vue";const u=m.exports},433:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>p});var o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"minimal-home-tab",class:{loading:e.loading,loaded:e.loaded,error:e.error}},[t("div",{staticClass:"minimal-home-tab-cards"},e._l(e.cards,(function(e){return t("VideoCard",{key:e.id,attrs:{data:e}})})),1),e._v(" "),e.loading||0!==e.cards.length?e._e():t("VEmpty"),e._v(" "),e.error?e._e():t("ScrollTrigger",{on:{trigger:e.loadCards}}),e._v(" "),e.cards.length>0?t("MinimalHomeOperations",{on:{refresh:e.refresh}}):e._e()],1)};o._withStripped=!0;var i=t(799),r=t(783),a=t.n(r),s=t(414),l=t(577),d=t(648),c=t(658);const m=Vue.extend({components:{ScrollTrigger:d.ScrollTrigger,VEmpty:d.VEmpty,VideoCard:a(),MinimalHomeOperations:c.Z},data:()=>({loading:!0,cards:[],error:!1}),computed:{loaded(){return!this.loading&&!this.error},lastID(){if(!this.cards.length)return null;return[...this.cards].sort((0,l.ascendingStringSort)((e=>e.id)))[0].id}},methods:{async loadCards(){try{this.error=!1,this.loading=!0,this.cards=lodash.uniqBy([...this.cards,...await(0,i.getVideoFeeds)("video",this.lastID)],(e=>e.id))}catch(e){(0,s.logError)(e),this.error=!0}finally{this.loading=!1}},async refresh(){this.cards=[]}}});var u=(0,t(769).Z)(m,o,[],!1,null,null,null);u.options.__file="registry/lib/components/style/home-redesign/minimal/tabs/Feeds.vue";const p=u.exports},990:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>g});var o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"minimal-home-tab",class:{loading:e.loading,loaded:e.loaded,error:e.error}},[t("div",{staticClass:"minimal-home-tab-cards"},e._l(e.cards,(function(e){return t("VideoCard",{key:e.id,attrs:{data:e}})})),1),e._v(" "),e.loading||0!==e.cards.length?e._e():t("VEmpty"),e._v(" "),e.loading&&0===e.cards.length?t("VLoading"):e._e(),e._v(" "),e.cards.length>0?t("MinimalHomeOperations",{on:{refresh:e.loadCards}}):e._e()],1)};o._withStripped=!0;var i=t(783),r=t.n(i),a=t(414),s=t(577),l=t(648),d=t(799);const c=coreApis.ajax;var m=t(605);const u=coreApis.utils.formatters;var p=t(658),h=t(90);const f=Vue.extend({components:{VLoading:l.VLoading,VEmpty:l.VEmpty,VideoCard:r(),MinimalHomeOperations:p.Z},data:()=>({loading:!0,cards:[],error:!1}),computed:{loaded(){return!this.loading&&!this.error},lastID(){if(!this.cards.length)return null;return[...this.cards].sort((0,s.ascendingStringSort)((e=>e.id)))[0].id}},async mounted(){this.loadCards()},methods:{async loadCards(){try{this.cards=[],this.error=!1,this.loading=!0,this.cards=await(async e=>{const n=Boolean((0,m.getUID)())&&e,t=n?c.getJsonWithCredentials:c.getJson,{code:o,message:i,data:r}=await t("https://api.bilibili.com/x/web-interface/index/top/feed/rcmd");if(0!==o)throw new Error(`获取${n?"推荐":"热门"}视频失败: ${i}`);const a=r.item.map((e=>({id:e.id,aid:e.id,bvid:e.bvid,coverUrl:e.pic.replace("http:","https:"),title:e.title,description:"",dynamic:"",duration:e.duration,durationText:(0,u.formatDuration)(e.duration),timestamp:1e3*e.pubdate,time:new Date(1e3*e.pubdate),upName:e.owner.name,upID:e.owner.mid,upFaceUrl:e.owner.face.replace("http:","https:"),like:(0,u.formatCount)(e.stat.like),playCount:(0,u.formatCount)(e.stat.view),danmakuCount:(0,u.formatCount)(e.stat.danmaku)})));return(0,d.applyContentFilter)(a)})(h.t.personalized)}catch(e){(0,a.logError)(e),this.error=!0}finally{this.loading=!1}}}});var v=(0,t(769).Z)(f,o,[],!1,null,null,null);v.options.__file="registry/lib/components/style/home-redesign/minimal/tabs/Trending.vue";const g=v.exports},769:(e,n,t)=>{"use strict";function o(e,n,t,o,i,r,a,s){var l,d="function"==typeof e?e.options:e;if(n&&(d.render=n,d.staticRenderFns=t,d._compiled=!0),o&&(d.functional=!0),r&&(d._scopeId="data-v-"+r),a?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},d._ssrRegister=l):i&&(l=s?function(){i.call(this,(d.functional?this.parent:this).$root.$options.shadowRoot)}:i),l)if(d.functional){d._injectStyles=l;var c=d.render;d.render=function(e,n){return l.call(n),c(e,n)}}else{var m=d.beforeCreate;d.beforeCreate=m?[].concat(m,l):[l]}return{exports:e,options:d}}t.d(n,{Z:()=>o})},96:e=>{function n(e){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}n.keys=()=>[],n.resolve=n,n.id=96,e.exports=n},431:e=>{"use strict";e.exports="使用重新设计的极简首页替换原本的首页.\n\n请注意, 此功能与 `清爽首页` 互斥, 请勿同时使用.\n\n- 个性化推荐: 启用时展示推荐视频, 禁用时展示热门视频\n- 自定义列数: 为 `0` 时根据视图宽度推断, 大于 `0` 的值将作为固定的列数"},783:e=>{"use strict";e.exports=coreApis.componentApis.feeds.VideoCard},799:e=>{"use strict";e.exports=coreApis.componentApis.feeds.api},986:e=>{"use strict";e.exports=coreApis.settings},648:e=>{"use strict";e.exports=coreApis.ui},414:e=>{"use strict";e.exports=coreApis.utils.log},577:e=>{"use strict";e.exports=coreApis.utils.sort},605:e=>{"use strict";e.exports=coreApis.utils}},o={};function i(e){var n=o[e];if(void 0!==n)return n.exports;var r=o[e]={id:e,exports:{}};return t[e](r,r.exports,i),r.exports}i.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return i.d(n,{a:n}),n},n=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,i.t=function(t,o){if(1&o&&(t=this(t)),8&o)return t;if("object"==typeof t&&t){if(4&o&&t.__esModule)return t;if(16&o&&"function"==typeof t.then)return t}var r=Object.create(null);i.r(r);var a={};e=e||[null,n({}),n([]),n(n)];for(var s=2&o&&t;"object"==typeof s&&!~e.indexOf(s);s=n(s))Object.getOwnPropertyNames(s).forEach((e=>a[e]=()=>t[e]));return a.default=()=>t,i.d(r,a),r},i.d=(e,n)=>{for(var t in n)i.o(n,t)&&!i.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},i.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};return(()=>{"use strict";i.d(r,{component:()=>l});const e=coreApis.componentApis.define,n=coreApis.lifeCycle;var t=i(986),o=i(605);var a=i(100);const s=(0,e.defineOptionsMetadata)({personalized:{displayName:"个性化推荐",defaultValue:!1},columnCount:{displayName:"自定义列数",defaultValue:0,validator:(0,o.getNumberValidator)(0,10)},defaultTab:{displayName:"默认标签页",defaultValue:a.F.Feeds,dropdownEnum:a.F}}),l=(0,e.defineComponentMetadata)({name:"minimalHome",displayName:"极简首页",urlInclude:[/^https:\/\/www\.bilibili\.com\/$/,/^https:\/\/www\.bilibili\.com\/index\.html$/],tags:[componentsTags.style],entry:()=>{(0,t.addComponentListener)("minimalHome.columnCount",(e=>{document.documentElement.style.setProperty("--home-column-count-override",e.toString())}),!0),(0,n.contentLoaded)((async()=>{const e=await Promise.resolve().then(i.bind(i,26)),n=(0,o.mountVueComponent)(e);document.body.appendChild(n.$el)}))},options:s,unload:()=>document.body.classList.add("home-redesign-off"),reload:()=>document.body.classList.remove("home-redesign-off"),instantStyles:[{name:"minimal-home-hide-original",style:()=>Promise.resolve().then(i.t.bind(i,792,23))}],commitHash:"9581897e44a2a9ffca6a3f25876cc215d655b056",coreVersion:"2.6.3",description:(()=>{const e=i(96);return{...Object.fromEntries(e.keys().map((n=>[n.match(/index\.(.+)\.md$/)[1],e(n)]))),"zh-CN":()=>Promise.resolve().then(i.t.bind(i,431,17)).then((e=>e.default))}})()})})(),r=r.component})()));
