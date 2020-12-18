!function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=21)}([function(e,t){e.exports=window.wp.element},function(e,t){e.exports=window.wp.i18n},function(e,t){e.exports=window.wp.components},function(e,t){e.exports=window.wp.data},function(e,t,r){var o=r(14),n=r(15),c=r(8),a=r(16);e.exports=function(e,t){return o(e)||n(e,t)||c(e,t)||a()}},function(e,t){function r(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=r=function(e){return typeof e}:e.exports=r=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(t)}e.exports=r},function(e,t){e.exports=window.wp.compose},function(e,t){e.exports=window.lodash},function(e,t,r){var o=r(9);e.exports=function(e,t){if(e){if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(e,t):void 0}}},function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}},function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},function(e,t,r){var o=r(17),n=r(18),c=r(8),a=r(19);e.exports=function(e){return o(e)||n(e)||c(e)||a()}},function(e,t){e.exports=window.wp.coreData},function(e,t,r){},function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},function(e,t){e.exports=function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],o=!0,n=!1,c=void 0;try{for(var a,s=e[Symbol.iterator]();!(o=(a=s.next()).done)&&(r.push(a.value),!t||r.length!==t);o=!0);}catch(e){n=!0,c=e}finally{try{o||null==s.return||s.return()}finally{if(n)throw c}}return r}}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(e,t,r){var o=r(9);e.exports=function(e){if(Array.isArray(e))return o(e)}},function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(e,t){e.exports=window.wp.notices},function(e,t,r){"use strict";r.r(t);var o=r(0),n=(r(13),r(1));function c(){return Object(o.createElement)(o.Fragment,null,Object(o.createElement)("div",{className:"smartdocs-settings-header mx-auto flex justify-center justify-items-center p-10 mb-8 bg-white"},Object(o.createElement)("h2",{className:"text-5xl"},"Smart Docs"),Object(o.createElement)("sup",{className:"text-sm text-gray-500"},"v",smartdocs_admin.version)))}var a=r(2),s=r(10),l=r.n(s),i=r(4),u=r.n(i),m=r(5),b=r.n(m),d=r(3),p=r(6);function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function _(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){l()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var g=Object(p.compose)(Object(d.withSelect)((function(e){var t=e("core").getEntityRecord("root","site"),r={};return t&&["smartdocs_use_built_in_doc_archive","smartdocs_custom_doc_page","smartdocs_archive_page_title","smartdocs_archive_page_slug","smartdocs_category_slug","smartdocs_tag_slug","smartdocs_enable_single_template","smartdocs_enable_category_and_tag_template"].forEach((function(e){t[e]&&(r[e]=t[e])})),{pages:e("core").getEntityRecords("postType","page"),options:r}})))((function(e){if("object"!==b()(e.options)||0===Object.keys(e.options).length)return Object(o.createElement)(o.Fragment,null);var t=Object(o.useState)(e.options),r=u()(t,2),c=r[0],s=r[1],l=[];e.pages?(l.push({label:Object(n.__)("Select a page","smart-docs"),value:null}),e.pages.forEach((function(e){l.push({value:e.id,label:e.title.rendered})}))):l.push({label:Object(n.__)("Loading...","smart-docs"),value:null});var i=Object(d.useDispatch)("core/notices"),m=i.createSuccessNotice,p=i.createErrorNotice,f=Object(o.useState)(!1),g=u()(f,2),j=g[0],O=g[1];return Object(o.createElement)(o.Fragment,null,Object(o.createElement)(a.ToggleControl,{className:"mt-2 mb-2",label:Object(n.__)("Use built-in Docs archive","smart-docs"),help:Object(n.__)("Note: If you disable built-in documentation archive, you can use shortcode or page builder widgets to design your own documentation page.","smart-docs"),checked:c.smartdocs_use_built_in_doc_archive,onChange:function(e){s(_(_({},c),{},{smartdocs_use_built_in_doc_archive:e}))}}),Object(o.createElement)(o.Fragment,null,!c.smartdocs_use_built_in_doc_archive&&Object(o.createElement)(a.SelectControl,{label:Object(n.__)("Select Custom Page","smart-docs"),labelPosition:"top",options:l,value:c.smartdocs_custom_doc_page,onChange:function(e){return s(_(_({},c),{},{smartdocs_custom_doc_page:e}))}})),Object(o.createElement)(a.BaseControl,{label:Object(n.__)("Hero Title","smart-docs"),help:Object(n.__)("Edit to change the default title for the header section.","smart-docs"),className:"mb-3"},Object(o.createElement)(a.TextControl,{className:"mt-2 block mb-2",placeholder:Object(n.__)("Documentation","smart-docs"),value:c.smartdocs_archive_page_title,onChange:function(e){return s(_(_({},c),{},{smartdocs_archive_page_title:e}))}})),Object(o.createElement)(a.BaseControl,{label:Object(n.__)("Rewrite Archive Slug","smart-docs"),help:Object(n.__)("Edit to change the default slug for the documentation archive page.","smart-docs"),className:"mb-3"},Object(o.createElement)(a.TextControl,{className:"mt-2 block mb-2",placeholder:Object(n.__)('Defaults to "smart-docs"',"smart-docs"),value:c.smartdocs_archive_page_slug,onChange:function(e){return s(_(_({},c),{},{smartdocs_archive_page_slug:e}))}})),Object(o.createElement)(a.BaseControl,{label:Object(n.__)("Rewrite Category Slug","smart-docs"),help:Object(n.__)("Edit to change the default slug for the documentation category page.","smart-docs"),className:"mb-3"},Object(o.createElement)(a.TextControl,{className:"mt-2 block mb-2",placeholder:Object(n.__)('Defaults to "smartdocs_category"',"smart-docs"),value:c.smartdocs_category_slug,onChange:function(e){return s(_(_({},c),{},{smartdocs_category_slug:e}))}})),Object(o.createElement)(a.BaseControl,{label:Object(n.__)("Rewrite Tag Slug","smart-docs"),help:Object(n.__)("Edit to change the default slug for the documentation tag.","smart-docs")},Object(o.createElement)(a.TextControl,{className:"mt-2 block mb-2",placeholder:Object(n.__)('Defaults to "smartdocs_tag"',"smart-docs"),value:c.smartdocs_tag_slug,onChange:function(e){return s(_(_({},c),{},{smartdocs_tag_slug:e}))}})),Object(o.createElement)(a.BaseControl,{className:"mt-3 mb-3",id:"smartdocs-custom-templates",label:Object(n.__)("Template","smart-docs")},Object(o.createElement)(a.ToggleControl,{className:"mt-2 mb-2",label:Object(n.__)("Use built-in template for Docs single page","smart-docs"),checked:c.smartdocs_enable_single_template,onChange:function(e){return s(_(_({},c),{},{smartdocs_enable_single_template:e}))}}),Object(o.createElement)(a.ToggleControl,{className:"mt-2 mb-2",label:Object(n.__)("Use built-in template for Docs category page","smart-docs"),checked:c.smartdocs_enable_category_and_tag_template,onChange:function(e){return s(_(_({},c),{},{smartdocs_enable_category_and_tag_template:e}))}})),Object(o.createElement)(a.Button,{className:"mt-6 mb-3",isPrimary:"true",isBusy:j,onClick:function(){O(!0),wp.data.dispatch("core").saveSite(c).then((function(){m(Object(n.__)("Settings Saved!","smart-docs"),{type:"snackbar"}),wp.ajax.post("smartdocs_on_settings_save",{})})).catch((function(e){p(Object(n.__)("There was some error saving settings! \nCheck console for more information on error.","smart-docs"),{type:"snackbar"}),console.log(e)})),O(!1)}},Object(n.__)("Save Changes","smart-docs")))})),j=r(11),O=r.n(j),h=r(12),y=Object(p.compose)(Object(d.withSelect)((function(e){return{postTypes:e("core").getPostTypes()}})))((function(e){var t=Object(d.useDispatch)("core/notices"),r=t.createSuccessNotice,c=t.createErrorNotice,s=Object(h.useEntityProp)("root","site","smartdocs_search_post_types"),l=u()(s,2),i=l[0],m=l[1],p=[];e.postTypes&&e.postTypes.forEach((function(e){e.viewable&&"attachment"!==e.slug&&p.push({value:e.slug,label:e.name})}));var f=Object(o.useState)(i||[]),_=u()(f,2),g=_[0],j=_[1];g!==i&&m(g);var y=Object(o.useState)(!1),v=u()(y,2),E=v[0],w=v[1];return Object(o.createElement)(o.Fragment,null,Object(o.createElement)(a.BaseControl,{label:Object(n.__)("Select Post Types","smart-docs"),help:Object(n.__)("Select post type(s) to include their articles in search result.","smart-docs"),className:"mb-3"},Object(o.createElement)("ul",{className:"post-types-list"},0!==p.length&&p.map((function(e){return Object(o.createElement)("li",{key:e.value},Object(o.createElement)(a.ToggleControl,{label:e.label,checked:"object"===b()(g)&&g.includes(e.value),onChange:function(t){if(t)j((function(t){return[].concat(O()(t),[e.value])}));else{var r=g.filter((function(t){return t!==e.value}));j(r)}}}))})),0===p.length&&Object(o.createElement)("li",null,Object(n.__)("Loading...","smart-docs")))),Object(o.createElement)(a.Button,{className:"mt-6 mb-3",isPrimary:"true",isBusy:E,onClick:function(){w(!0),wp.data.dispatch("core").saveSite({smartdocs_search_post_types:i}).then((function(){r(Object(n.__)("Settings Saved!","smart-docs"),{type:"snackbar"})})).catch((function(e){c(Object(n.__)("There was some error saving settings! \nCheck console for more information on error.","smart-docs"),{type:"snackbar"}),console.log(e)})),w(!1)}},Object(n.__)("Save Changes","smart-docs")))}));function v(){var e="smartdocs-setting-primary-tab px-4 text-sm";return Object(o.createElement)(a.TabPanel,{className:"smartdocs-settings-tabs m-5 col-span-2 row-span-2 bg-white",activeClass:"is-active",tabs:[{name:"general",title:"General",className:e},{name:"search",title:"Search",className:e}]},(function(e){return"general"===e.name?Object(o.createElement)(g,null):"search"===e.name?Object(o.createElement)(y,null):void 0}))}function E(){return Object(o.createElement)(a.Card,{className:"smartdocs-side-card col-span-1 m-5 h-fit-content"},Object(o.createElement)(a.CardHeader,{className:"smartdocs-card-header font-bold text-lg pl-5 pt-4 pb-3"},"Help or Support"),Object(o.createElement)(a.CardBody,null,"Found a issue? or Have a suggestion? ",Object(o.createElement)("br",null),Object(o.createElement)("br",null),"We use Github to track issues and suggestions. Click the link below to go to our Github Page and post issue/suggestion."),Object(o.createElement)(a.CardFooter,{className:"smartdocs-card-footer pt-4 pb-4"},Object(o.createElement)(a.ExternalLink,{className:"w-full inline-flex font-medium text-sm",href:"https://github.com/helloideabox/smart-docs/issues"},"Raise a Ticket")))}var w=r(7);function S(){var e=Object(d.useDispatch)("core/notices").removeNotice,t=Object(d.useSelect)((function(e){return e("core/notices").getNotices()}),[]),r=Object(w.filter)(t,{isDismissible:!0,type:"default"}),n=Object(w.filter)(t,{isDismissible:!1,type:"default"}),c=Object(w.filter)(t,{type:"snackbar"});return Object(o.createElement)(o.Fragment,null,Object(o.createElement)(a.NoticeList,{notices:n,className:"components-notice-list components-editor-notices__pinned"}),Object(o.createElement)(a.NoticeList,{notices:r,className:"components-notice-list components-editor-notices__dismissible",onRemove:e}),Object(o.createElement)(a.SnackbarList,{notices:c,className:"components-snackbar-list components-editor-notices__snackbar",onRemove:e}))}r(20);var x=document.querySelector(".loader"),C=function(){return x.classList.remove("loader--hide")},N=function(){return x.classList.add("loader--hide")},k=function(e){var t=e.hideLoader;return Object(o.useEffect)(t,[]),Object(o.createElement)(o.Fragment,null,Object(o.createElement)(c,null),Object(o.createElement)("div",{className:"grid grid-cols-3 grid-rows-2 container mx-auto"},Object(o.createElement)(v,null),Object(o.createElement)(E,null)),Object(o.createElement)(S,null))};setTimeout((function(){Object(o.render)(Object(o.createElement)(k,{hideLoader:N,showLoader:C}),document.getElementById("smartdocs-setting-root"))}),0)}]);