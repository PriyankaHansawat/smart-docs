!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);n(1);function r(t){var e=wp.customize,n=null,r={smartdocs_homepage_settings:"smart-docs",smartdocs_test_settings:"smart-docs",smartdocs_search_settings:"smart-docs",smartdocs_single_doc_settings:"smart-docs/how-to-update-smart-docs-2/"};e.section(t,(function(o){var s,i,c;_.each(r,(function(e,r){t===r&&(n=e)})),c=e.previewer.previewUrl,i=function(){s=null},o.expanded.bind((function(t){var r;t?(r=e.settings.url.home+n,s=c.get(),c.set(r),c.bind(i)):(c.unbind(i),s&&c.set(s))}))}))}wp.customize.bind("ready",(function(){r("smartdocs_homepage_settings"),r("smartdocs_test_settings"),r("smartdocs_search_settings"),r("smartdocs_single_doc_settings")}))},function(t,e){!function(){t.exports=this.wp.i18n}()}]);