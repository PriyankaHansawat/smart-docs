!function(e){var t={};function n(o){if(t[o])return t[o].exports;var a=t[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(o,a,function(t){return e[t]}.bind(null,a));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=13)}([function(e,t){!function(){e.exports=this.wp.element}()},function(e,t){!function(){e.exports=this.wp.components}()},function(e,t){!function(){e.exports=this.wp.i18n}()},function(e,t,n){var o=n(8),a=n(9),r=n(10),l=n(12);e.exports=function(e,t){return o(e)||a(e,t)||r(e,t)||l()}},function(e,t){!function(){e.exports=this.wp.data}()},function(e,t){!function(){e.exports=this.wp.coreData}()},function(e,t){!function(){e.exports=this.lodash}()},function(e,t,n){},function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},function(e,t){e.exports=function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],o=!0,a=!1,r=void 0;try{for(var l,c=e[Symbol.iterator]();!(o=(l=c.next()).done)&&(n.push(l.value),!t||n.length!==t);o=!0);}catch(e){a=!0,r=e}finally{try{o||null==c.return||c.return()}finally{if(a)throw r}}return n}}},function(e,t,n){var o=n(11);e.exports=function(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}},function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(e,t,n){"use strict";n.r(t);var o=n(0),a=(n(7),n(2));function r(){return Object(o.createElement)(o.Fragment,null,Object(o.createElement)("div",{id:"sd-setting-header",class:"container mx-auto flex justify-center justify-items-center p-10 mb-8 shadow bg-white "},Object(o.createElement)("h2",{class:"text-5xl"},"Smart Docs"),Object(o.createElement)("sup",{class:"text-sm text-gray-500"},"v ",sd_vars.version)))}var l=n(1),c=n(3),i=n.n(c),s=n(5),u=n(4);function m(){var e=Object(u.useDispatch)("core/notices"),t=e.createSuccessNotice,n=e.createErrorNotice,r=Object(s.useEntityProp)("root","site","sd_archive_page_title"),c=i()(r,2),m=c[0],b=c[1],d=Object(s.useEntityProp)("root","site","sd_archive_page_slug"),g=i()(d,2),p=g[0],f=g[1],h=Object(s.useEntityProp)("root","site","sd_category_slug"),j=i()(h,2),O=j[0],E=j[1],_=Object(s.useEntityProp)("root","site","sd_tag_slug"),v=i()(_,2),y=v[0],S=v[1],x=Object(o.useState)(!1),C=i()(x,2),w=C[0],N=C[1];return Object(o.createElement)(o.Fragment,null,Object(o.createElement)(l.BaseControl,{id:"textarea-1",label:"Documentation Page Title",help:"Edit to change the default title for the documentation page.",className:"mb-3"},Object(o.createElement)(l.TextControl,{id:"sd_option-doc_homepage_title",className:"mt-3 block mb-3",value:m,placeholder:Object(a.__)("Documentation"),onChange:b})),Object(o.createElement)(l.BaseControl,{id:"textarea-2",label:"Documentation Archive Slug",help:"Edit to change the default slug for the documentation page.",className:"mb-3"},Object(o.createElement)(l.TextControl,{id:"sd_option-doc_homepage_slug",className:"mt-3 block mb-3",value:p,placeholder:Object(a.__)("Add documentation archive/home page slug"),onChange:f})),Object(o.createElement)(l.BaseControl,{id:"textarea-3",label:"Documentation Category Slug",help:"Edit to change the default slug for the documentation category.",className:"mb-3"},Object(o.createElement)(l.TextControl,{id:"sd_option-doc_category_slug",className:"mt-3 block mb-3",value:O,placeholder:Object(a.__)("Add custom category slug"),onChange:E})),Object(o.createElement)(l.BaseControl,{id:"textarea-3",label:"Documentation Tag Slug",help:"Edit to change the default slug for the documentation tag."},Object(o.createElement)(l.TextControl,{id:"sd_option-doc_tag_slug",className:"mt-3 block mb-3",value:y,placeholder:Object(a.__)("Add custom tag slug"),onChange:S})),Object(o.createElement)(l.Button,{isPrimary:"true",isBusy:w,onClick:function(){N(!0),wp.data.dispatch("core").saveSite({sd_archive_page_title:m,sd_archive_page_slug:p,sd_category_slug:O,sd_tag_slug:y}).then((function(){t("Settings Saved!",{type:"snackbar"})})).catch((function(e){n("There was some error saving settings! \nCheck console for more information on error.",{type:"snackbar"}),console.log(e)})),N(!1)}},"Save Changes"))}function b(){return Object(o.createElement)(o.Fragment,null,Object(o.createElement)(l.BaseControl,{label:"Documentation Page Layout"},Object(o.createElement)(l.__experimentalRadioGroup,{label:"Width",defaultchecked:"50",className:"block"},Object(o.createElement)(l.__experimentalRadio,{value:"list"},"List"),Object(o.createElement)(l.__experimentalRadio,{value:"grid"},"Grid"))),Object(o.createElement)(l.ToggleControl,{label:"Show or Hide Docs Count"}),Object(o.createElement)(l.ToggleControl,{label:"Show or Hide Docs Authors"}),Object(o.createElement)(l.ToggleControl,{label:"Show or Hide Docs Authors"}))}function d(){return Object(o.createElement)(o.Fragment,null,Object(o.createElement)(l.ToggleControl,{label:"Show or Hide Sidebar"}),Object(o.createElement)(l.ToggleControl,{label:"Show or Hide Doc Title Permalink Copy Icon"}),Object(o.createElement)(l.ToggleControl,{label:"Show or Hide Breadcrumbs"}),Object(o.createElement)(l.ToggleControl,{label:"Show or Hide Comments"}),Object(o.createElement)(l.ToggleControl,{label:"Show or Hide Social Share options"}),Object(o.createElement)(l.ToggleControl,{label:"Show or Hide Ratings Buttons"}))}function g(){return Object(o.createElement)(o.Fragment,null,Object(o.createElement)(l.BaseControl,{label:"Number of docs to show per page"},Object(o.createElement)(l.__experimentalNumberControl,null)),Object(o.createElement)(l.ToggleControl,{label:"Show or Hide Sidebar"}),Object(o.createElement)(l.ToggleControl,{label:"Show or Hide Search Bar"}),Object(o.createElement)(l.ToggleControl,{label:"Show or Hide Suggested Articles"}))}function p(){var e="py-3 px-4 text-sl duration-200";return Object(o.createElement)(l.TabPanel,{className:"sd-layout-settings-tabs flex",activeClass:"is-active",orientation:"vertical",tabs:[{name:"documentation_page",title:"Doc Page",className:e},{name:"single_page",title:"Single Page",className:e},{name:"archive_page",title:"Archive Page",className:e}]},(function(e){return"documentation_page"===e.name?Object(o.createElement)(b,null):"single_page"===e.name?Object(o.createElement)(d,null):"archive_page"===e.name?Object(o.createElement)(g,null):void 0}))}function f(){return Object(o.createElement)(o.Fragment,null,Object(o.createElement)(l.BaseControl,{label:"Documentation Page Layout"},Object(o.createElement)(l.__experimentalRadioGroup,{label:"Width",defaultchecked:"50",className:"block"},Object(o.createElement)(l.__experimentalRadio,{value:"list"},"List"),Object(o.createElement)(l.__experimentalRadio,{value:"grid"},"Grid"))),Object(o.createElement)(l.ToggleControl,{label:"Show or Hide Docs Count"}),Object(o.createElement)(l.ToggleControl,{label:"Show or Hide Docs Authors"}),Object(o.createElement)(l.ToggleControl,{label:"Show or Hide Docs Authors"}))}var h=function(e){return"general"===e?Object(o.createElement)(m,null):"layout"===e?Object(o.createElement)(p,null):void 0};function j(){var e="py-3 px-4 text-base duration-200";return Object(o.createElement)(l.TabPanel,{className:"sd-settings-tabs m-5 col-span-2",activeClass:"is-active",onSelect:h,tabs:[{name:"general",title:"General",className:e},{name:"layout",title:"Layout",className:e},{name:"search",title:"Search",className:e}]},(function(e){return"general"===e.name?Object(o.createElement)(m,null):"layout"===e.name?Object(o.createElement)(p,null):"search"===e.name?Object(o.createElement)(f,null):void 0}))}function O(){return Object(o.createElement)(l.Card,{isElevated:"true",className:"col-span-1 m-5 h-64"},Object(o.createElement)(l.CardHeader,{className:"font-bold text-xl"},"Help/Support"),Object(o.createElement)(l.CardBody,null,"Found a issue? or Have a suggestion? ",Object(o.createElement)("br",null),Object(o.createElement)("br",null),"We use Github to track issues and suggestions. Click the link below to go to our Github Page and post issue/suggestion."),Object(o.createElement)(l.CardFooter,null,Object(o.createElement)(l.ExternalLink,{href:"https://github.com/helloideabox/smart-docs/issues"},"Raise a Ticket")))}var E=n(6);function _(){var e=Object(u.useDispatch)("core/notices").removeNotice,t=Object(u.useSelect)((function(e){return e("core/notices").getNotices()}),[]),n=Object(E.filter)(t,{isDismissible:!0,type:"default"}),a=Object(E.filter)(t,{isDismissible:!1,type:"default"}),r=Object(E.filter)(t,{type:"snackbar"});return Object(o.createElement)(o.Fragment,null,Object(o.createElement)(l.NoticeList,{notices:a,className:"components-notice-list components-editor-notices__pinned"}),Object(o.createElement)(l.NoticeList,{notices:n,className:"components-notice-list components-editor-notices__dismissible",onRemove:e}),Object(o.createElement)(l.SnackbarList,{notices:r,className:"components-snackbar-list components-editor-notices__snackbar",onRemove:e}))}var v=document.querySelector(".loader"),y=function(){return v.classList.remove("loader--hide")},S=function(){return v.classList.add("loader--hide")},x=function(e){var t=e.hideLoader;return Object(o.useEffect)(t,[]),Object(o.createElement)(o.Fragment,null,Object(o.createElement)(r,null),Object(o.createElement)("div",{className:"grid grid-cols-3"},Object(o.createElement)(j,null),Object(o.createElement)(O,null)),Object(o.createElement)(_,null))};setTimeout((function(){Object(o.render)(Object(o.createElement)(x,{hideLoader:S,showLoader:y}),document.getElementById("sd-setting-root"))}),0)}]);