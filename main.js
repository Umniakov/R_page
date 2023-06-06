/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/style/index.css":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/style/index.css ***!
  \*************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../pics/brooke.jpg */ "./src/pics/brooke.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*\n! tailwindcss v3.3.2 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n5. Use the user's configured `sans` font-feature-settings by default.\n6. Use the user's configured `sans` font-variation-settings by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 4 */\n  font-feature-settings: normal; /* 5 */\n  font-variation-settings: normal; /* 6 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  font-weight: inherit; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/* Make elements with the HTML hidden attribute stay hidden by default */\n[hidden] {\n  display: none;\n}\n\n*, ::before, ::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\r\n.sticky {\n  position: sticky;\n}\r\n.top-3 {\n  top: 0.75rem;\n}\r\n.m-3 {\n  margin: 0.75rem;\n}\r\n.m-auto {\n  margin: auto;\n}\r\n.mx-4 {\n  margin-left: 1rem;\n  margin-right: 1rem;\n}\r\n.mb-2 {\n  margin-bottom: 0.5rem;\n}\r\n.ml-0 {\n  margin-left: 0px;\n}\r\n.ml-\\[20vw\\] {\n  margin-left: 20vw;\n}\r\n.mr-10 {\n  margin-right: 2.5rem;\n}\r\n.mt-5 {\n  margin-top: 1.25rem;\n}\r\n.mt-8 {\n  margin-top: 2rem;\n}\r\n.block {\n  display: block;\n}\r\n.flex {\n  display: flex;\n}\r\n.grid {\n  display: grid;\n}\r\n.h-8 {\n  height: 2rem;\n}\r\n.w-7 {\n  width: 1.75rem;\n}\r\n.w-8 {\n  width: 2rem;\n}\r\n.w-fit {\n  width: -moz-fit-content;\n  width: fit-content;\n}\r\n.max-w-full {\n  max-width: 100%;\n}\r\n.flex-1 {\n  flex: 1 1 0%;\n}\r\n.grow {\n  flex-grow: 1;\n}\r\n.cursor-pointer {\n  cursor: pointer;\n}\r\n.grid-cols-auto-fit {\n  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));\n}\r\n.flex-col {\n  flex-direction: column;\n}\r\n.items-center {\n  align-items: center;\n}\r\n.justify-center {\n  justify-content: center;\n}\r\n.gap-4 {\n  gap: 1rem;\n}\r\n.gap-x-4 {\n  -moz-column-gap: 1rem;\n       column-gap: 1rem;\n}\r\n.self-end {\n  align-self: flex-end;\n}\r\n.rounded-lg {\n  border-radius: 0.5rem;\n}\r\n.bg-slate-100 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(241 245 249 / var(--tw-bg-opacity));\n}\r\n.bg-slate-200 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(226 232 240 / var(--tw-bg-opacity));\n}\r\n.bg-slate-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(100 116 139 / var(--tw-bg-opacity));\n}\r\n.bg-gradient-to-br {\n  background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));\n}\r\n.bg-gradient-to-r {\n  background-image: linear-gradient(to right, var(--tw-gradient-stops));\n}\r\n.from-pink-500 {\n  --tw-gradient-from: #ec4899 var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(236 72 153 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\r\n.from-red-500 {\n  --tw-gradient-from: #ef4444 var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(239 68 68 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\r\n.to-orange-400 {\n  --tw-gradient-to: #fb923c var(--tw-gradient-to-position);\n}\r\n.to-purple-500 {\n  --tw-gradient-to: #a855f7 var(--tw-gradient-to-position);\n}\r\n.bg-clip-text {\n  -webkit-background-clip: text;\n          background-clip: text;\n}\r\n.object-contain {\n  -o-object-fit: contain;\n     object-fit: contain;\n}\r\n.px-1 {\n  padding-left: 0.25rem;\n  padding-right: 0.25rem;\n}\r\n.px-5 {\n  padding-left: 1.25rem;\n  padding-right: 1.25rem;\n}\r\n.px-8 {\n  padding-left: 2rem;\n  padding-right: 2rem;\n}\r\n.py-2 {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\r\n.py-2\\.5 {\n  padding-top: 0.625rem;\n  padding-bottom: 0.625rem;\n}\r\n.py-5 {\n  padding-top: 1.25rem;\n  padding-bottom: 1.25rem;\n}\r\n.pb-10 {\n  padding-bottom: 2.5rem;\n}\r\n.text-center {\n  text-align: center;\n}\r\n.text-2xl {\n  font-size: 1.5rem;\n  line-height: 2rem;\n}\r\n.text-5xl {\n  font-size: 3rem;\n  line-height: 1;\n}\r\n.text-sm {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\r\n.text-xs {\n  font-size: 0.75rem;\n  line-height: 1rem;\n}\r\n.font-black {\n  font-weight: 900;\n}\r\n.font-bold {\n  font-weight: 700;\n}\r\n.font-medium {\n  font-weight: 500;\n}\r\n.uppercase {\n  text-transform: uppercase;\n}\r\n.text-transparent {\n  color: transparent;\n}\r\n.text-white {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\r\n.transition {\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\r\n.ease-in-out {\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}\r\n\r\n.bg-image {\r\n  /* background-color: aqua; */\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  background-attachment: fixed;\r\n  background-position: top left;\r\n  transition: background-position 0.5s ease-in-out;\r\n}\r\n\r\n@media all and (max-width: 1024px) {\r\n  .bg-image {\r\n    background-position: top right;\r\n  }\r\n}\r\n\r\n.hover\\:-translate-y-px:hover {\n  --tw-translate-y: -1px;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\r\n\r\n.hover\\:scale-105:hover {\n  --tw-scale-x: 1.05;\n  --tw-scale-y: 1.05;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\r\n\r\n.hover\\:scale-110:hover {\n  --tw-scale-x: 1.1;\n  --tw-scale-y: 1.1;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\r\n\r\n.hover\\:bg-slate-200:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(226 232 240 / var(--tw-bg-opacity));\n}\r\n\r\n.hover\\:bg-gradient-to-bl:hover {\n  background-image: linear-gradient(to bottom left, var(--tw-gradient-stops));\n}\r\n\r\n.hover\\:text-orange-600:hover {\n  --tw-text-opacity: 1;\n  color: rgb(234 88 12 / var(--tw-text-opacity));\n}\r\n\r\n.focus\\:outline-none:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\r\n\r\n.focus\\:ring-4:focus {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\r\n\r\n.focus\\:ring-pink-200:focus {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(251 207 232 / var(--tw-ring-opacity));\n}\r\n\r\n@media (max-width: 425px) {\n\n  .max-\\[425px\\]\\:m-auto {\n    margin: auto;\n  }\n}\r\n\r\n@media (min-width: 640px) {\n\n  .sm\\:ml-2 {\n    margin-left: 0.5rem;\n  }\n\n  .sm\\:flex-row {\n    flex-direction: row;\n  }\n\n  .sm\\:gap-4 {\n    gap: 1rem;\n  }\n\n  .sm\\:text-base {\n    font-size: 1rem;\n    line-height: 1.5rem;\n  }\n}\r\n\r\n@media (min-width: 768px) {\n\n  .md\\:ml-\\[40vw\\] {\n    margin-left: 40vw;\n  }\n\n  .md\\:mr-10 {\n    margin-right: 2.5rem;\n  }\n\n  .md\\:max-w-4xl {\n    max-width: 56rem;\n  }\n\n  .md\\:text-6xl {\n    font-size: 3.75rem;\n    line-height: 1;\n  }\n}\r\n\r\n@media (min-width: 1024px) {\n\n  .lg\\:gap-10 {\n    gap: 2.5rem;\n  }\n\n  .lg\\:text-2xl {\n    font-size: 1.5rem;\n    line-height: 2rem;\n  }\n}\r\n", "",{"version":3,"sources":["webpack://./src/style/index.css","<no source>"],"names":[],"mappings":"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","sourcesContent":["@tailwind base;\r\n@tailwind components;\r\n@tailwind utilities;\r\n\r\n.bg-image {\r\n  /* background-color: aqua; */\r\n  background-image: url(\"../pics/brooke.jpg\");\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  background-attachment: fixed;\r\n  background-position: top left;\r\n  transition: background-position 0.5s ease-in-out;\r\n}\r\n\r\n@media all and (max-width: 1024px) {\r\n  .bg-image {\r\n    background-position: top right;\r\n  }\r\n}\r\n",null],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style/index.css":
/*!*****************************!*\
  !*** ./src/style/index.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/style/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/functions/makeChild.js":
/*!************************************!*\
  !*** ./src/functions/makeChild.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const makeChild = (type, id = null, classes = null, text = "") => {
  const instance = document.createElement(type);
  if (id !== null) {
    instance.id = id;
  }
  if (classes !== null) {
    instance.classList.add(...classes);
  }
  instance.textContent = text;
  return instance;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makeChild);


/***/ }),

/***/ "./src/pages/contactPage.js":
/*!**********************************!*\
  !*** ./src/pages/contactPage.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _functions_makeChild__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/makeChild */ "./src/functions/makeChild.js");
/* harmony import */ var _pics_contacts_clock_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pics/contacts/clock.png */ "./src/pics/contacts/clock.png");
/* harmony import */ var _pics_contacts_email_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pics/contacts/email.png */ "./src/pics/contacts/email.png");
/* harmony import */ var _pics_contacts_locationMark_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pics/contacts/locationMark.png */ "./src/pics/contacts/locationMark.png");
/* harmony import */ var _pics_contacts_call_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pics/contacts/call.png */ "./src/pics/contacts/call.png");





const contactPage = () => {
  //main div
  const mainDiv = (0,_functions_makeChild__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "menuContainer", [
    "flex",
    "gap-4",
    "md:max-w-4xl",
    "md:ml-[40vw]",
    "md:mr-10",
    "py-5",
    "rounded-lg",
    "bg-slate-200",
  ]);

  const picElementCreate = (src, alt, param) => {
    const element = document.createElement("img");
    element.src = src;
    element.alt = alt;
    element.classList.add(...param);
    return element;
  };

  const divCreation = (pic, description) => {
    const divItem = (0,_functions_makeChild__WEBPACK_IMPORTED_MODULE_0__["default"])("div", undefined, ["flex"]);
    divItem.appendChild(pic);
    divItem.appendChild(description);
    return divItem;
  };
  //place div
  const contactPlace = (0,_functions_makeChild__WEBPACK_IMPORTED_MODULE_0__["default"])(
    "p",
    undefined,
    undefined,
    "Parc de la fonderie, Sint-Jans-Molenbeek"
  );
  const placePic = picElementCreate(_pics_contacts_locationMark_png__WEBPACK_IMPORTED_MODULE_3__, "location", [
    "w-8",
    "object-contain",
  ]);
  mainDiv.appendChild(divCreation(placePic, contactPlace));

  const contactClock = (0,_functions_makeChild__WEBPACK_IMPORTED_MODULE_0__["default"])(
    "p",
    undefined,
    undefined,
    `Mon-Thurs:8am-8pm
    Fri-Sun:8am-11pm`
  );
  const clockPic = picElementCreate(_pics_contacts_clock_png__WEBPACK_IMPORTED_MODULE_1__, "clock", ["w-8", "object-contain"]);
  mainDiv.appendChild(divCreation(clockPic, contactClock));

  const contactPhone = (0,_functions_makeChild__WEBPACK_IMPORTED_MODULE_0__["default"])("p", undefined, undefined, `(333)-888-3333`);
  const callPic = picElementCreate(_pics_contacts_call_png__WEBPACK_IMPORTED_MODULE_4__, "call", ["w-7", "object-contain"]);
  mainDiv.appendChild(divCreation(callPic, contactPhone));

  const contactEmail = (0,_functions_makeChild__WEBPACK_IMPORTED_MODULE_0__["default"])(
    "p",
    undefined,
    ["bg-slate-100"],
    "Message us"
  );
  const emailPic = picElementCreate(_pics_contacts_email_png__WEBPACK_IMPORTED_MODULE_2__, "email", ["w-8"]);

  const form = (0,_functions_makeChild__WEBPACK_IMPORTED_MODULE_0__["default"])("form", "contactForm", undefined);
  const textarea = `<textarea id="myTextarea" rows="4" cols="50"></textarea>`;
  const html = `
  <div class='bg-slate-500'>
    <label for="name">Full Name</label>
    <input id="name">
  </div>
  <div>
    <label for="email">Email</label>
    <input type="email" id="email">
  </div>
  <div>
    <label for="message">Type the message</label>
    ${textarea}
    <textarea id="132" name="message" required>dfdsfds</textarea>
    <span>Type your message...</span>
  </div>
  `;
  form.setHTML(html);
  mainDiv.appendChild(form);
  return mainDiv;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactPage);


/***/ }),

/***/ "./src/pages/header.js":
/*!*****************************!*\
  !*** ./src/pages/header.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pics_pepper_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pics/pepper.png */ "./src/pics/pepper.png");
/* harmony import */ var _functions_makeChild__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions/makeChild */ "./src/functions/makeChild.js");


const content = document.querySelector("#content");

const makeHeader = () => {
  const divHeader = (0,_functions_makeChild__WEBPACK_IMPORTED_MODULE_1__["default"])("header", "header", [
    "flex",
    "items-center",
    "m-3",
    "sticky",
    "top-3",
  ]);
  const logoDiv = (0,_functions_makeChild__WEBPACK_IMPORTED_MODULE_1__["default"])("div", "logoDiv", [
    "flex",
    "items-center",
    "flex-col",
    "sm:flex-row",
    "cursor-pointer",
  ]);
  const logoImg = (0,_functions_makeChild__WEBPACK_IMPORTED_MODULE_1__["default"])("img", "img", ["w-8", "h-8"]);
  const brandName = (0,_functions_makeChild__WEBPACK_IMPORTED_MODULE_1__["default"])(
    "h1",
    "brandName",
    ["font-bold", "uppercase", "ml-0", "sm:ml-2", "text-xs", "sm:text-base"],
    "Savory Delights"
  );
  logoImg.src = _pics_pepper_png__WEBPACK_IMPORTED_MODULE_0__;
  const buttonDiv = (0,_functions_makeChild__WEBPACK_IMPORTED_MODULE_1__["default"])("div", "btnDiv", [
    "flex",
    "justify-center",
    "grow",
    "lg:gap-10",
    "sm:gap-4",
    "gap-4",
    "lg:text-2xl",
  ]);
  const buttons = () => {
    const btns = ["Home", "Menu", "Contacts"];
    btns.forEach((e) => {
      buttonDiv.appendChild(
        (0,_functions_makeChild__WEBPACK_IMPORTED_MODULE_1__["default"])(
          "button",
          e,
          [
            "hover:text-orange-600",
            "transition",
            "ease-in-out",
            "delay-50",
            "hover:-translate-y-px",
            "hover:scale-110",
          ],
          e
        )
      );
    });
  };
  buttons();

  logoDiv.appendChild(logoImg);
  logoDiv.appendChild(brandName);
  divHeader.appendChild(logoDiv);
  divHeader.appendChild(buttonDiv);
  content.appendChild(divHeader);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makeHeader);


/***/ }),

/***/ "./src/pages/mainPage.js":
/*!*******************************!*\
  !*** ./src/pages/mainPage.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _functions_makeChild__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/makeChild */ "./src/functions/makeChild.js");
/* harmony import */ var _menuPage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuPage.js */ "./src/pages/menuPage.js");


const main = document.querySelector("#content");
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  const homeMainContent = (0,_functions_makeChild__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "homeMainContent", [
    "m-auto",
    "md:ml-[40vw]",
    "ml-[20vw]",
    "mr-10",
    "max-[425px]:m-auto",
    "px-1",
    "flex",
    "flex-col",
    "items-center",
  ]);
  const headerInMainContent = (0,_functions_makeChild__WEBPACK_IMPORTED_MODULE_0__["default"])(
    "h1",
    "headerInMainContent",
    [
      "md:text-6xl",
      "text-5xl",
      "font-black",
      "text-center",
      "bg-gradient-to-r",
      "from-red-500",
      "to-purple-500",
      "text-transparent",
      "bg-clip-text",
      "mt-8",
      "pb-10",
    ],
    "Where every bite is a delight"
  );
  const welcomePar = (0,_functions_makeChild__WEBPACK_IMPORTED_MODULE_0__["default"])(
    "p",
    "welcomePar",
    ["text-2xl", "text-center", "px-8"],
    `Thank you for choosing Savory Delights. We're excited to share our passion for delicious food with you.`
  );
  const btnOrder = (0,_functions_makeChild__WEBPACK_IMPORTED_MODULE_0__["default"])(
    "button",
    "btnOrder",
    [
      "text-white",
      "bg-gradient-to-br",
      "from-pink-500",
      "to-orange-400",
      "hover:bg-gradient-to-bl",
      "focus:ring-4",
      "focus:outline-none",
      "focus:ring-pink-200",
      "font-medium",
      "rounded-lg",
      "text-sm",
      "px-5",
      "py-2.5",
      "text-center",
      "block",
      "w-fit",
      "mt-5",
    ],
    "Order Now"
  );
  btnOrder.addEventListener("click", (e) => {
    let oldChild = main.childNodes[1];
    main.replaceChild((0,_menuPage_js__WEBPACK_IMPORTED_MODULE_1__["default"])(), oldChild);
  });
  homeMainContent.appendChild(headerInMainContent);
  homeMainContent.appendChild(welcomePar);
  homeMainContent.appendChild(btnOrder);
  return homeMainContent;
}


/***/ }),

/***/ "./src/pages/menuPage.js":
/*!*******************************!*\
  !*** ./src/pages/menuPage.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pics_menu_breakfast_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pics/menu/breakfast.png */ "./src/pics/menu/breakfast.png");
/* harmony import */ var _pics_menu_burger_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pics/menu/burger.png */ "./src/pics/menu/burger.png");
/* harmony import */ var _pics_menu_cake_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pics/menu/cake.png */ "./src/pics/menu/cake.png");
/* harmony import */ var _pics_menu_chicken_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pics/menu/chicken.png */ "./src/pics/menu/chicken.png");
/* harmony import */ var _pics_menu_frenchFries_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pics/menu/frenchFries.png */ "./src/pics/menu/frenchFries.png");
/* harmony import */ var _pics_menu_hotDog_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pics/menu/hotDog.png */ "./src/pics/menu/hotDog.png");
/* harmony import */ var _pics_menu_noodles_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pics/menu/noodles.png */ "./src/pics/menu/noodles.png");
/* harmony import */ var _pics_menu_pizza_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pics/menu/pizza.png */ "./src/pics/menu/pizza.png");
/* harmony import */ var _pics_menu_sandwich_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pics/menu/sandwich.png */ "./src/pics/menu/sandwich.png");
/* harmony import */ var _pics_menu_taco_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../pics/menu/taco.png */ "./src/pics/menu/taco.png");
/* harmony import */ var _functions_makeChild__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../functions/makeChild */ "./src/functions/makeChild.js");













const menuItemMaker = (dishName, dishDescription, price, src) => {
  let menuItemDiv = document.createElement("div");
  menuItemDiv.classList.add(
    "flex",
    "gap-x-4",
    "mx-4",
    "bg-slate-100",
    "rounded-lg",
    "px-5",
    "py-2",
    "hover:bg-slate-200",
    "hover:scale-105"
  );
  let menuItemPic = document.createElement("img");
  menuItemPic.classList.add("object-contain", "max-w-full");
  let menuItemDescDiv = document.createElement("div");
  menuItemDescDiv.classList.add("flex", "flex-col");
  let menuItemDescHead = document.createElement("h3");
  menuItemDescHead.classList.add("3xl", "font-bold", "mb-2");
  let menuItemDescInfo = document.createElement("p");
  menuItemDescInfo.classList.add("flex-1");
  let menuItemDescPrice = document.createElement("p");
  menuItemDescPrice.classList.add("self-end", "2xl", "font-bold");
  menuItemDescHead.textContent = dishName;
  menuItemDescInfo.textContent = dishDescription;
  menuItemDescPrice.textContent = price;
  menuItemPic.src = src;
  menuItemDescDiv.appendChild(menuItemDescHead);
  menuItemDescDiv.appendChild(menuItemDescInfo);
  menuItemDescDiv.appendChild(menuItemDescPrice);
  menuItemDiv.appendChild(menuItemPic);
  menuItemDiv.appendChild(menuItemDescDiv);
  return menuItemDiv;
};

const menuPage = () => {
  let menu = (0,_functions_makeChild__WEBPACK_IMPORTED_MODULE_10__["default"])("div", "menuContainer", [
    "grid",
    "gap-4",
    "grid-cols-auto-fit",
    "md:max-w-4xl",
    "md:ml-[40vw]",
    "md:mr-10",
    "py-5",
    "rounded-lg",
  ]);
  menu.appendChild(
    menuItemMaker(
      "Morning Sunrise Delight",
      "Wake up to a plate of fluffy scrambled eggs, sizzling bacon, golden hash browns, and a side of toasted bread, the perfect start to your day.",
      "$8",
      _pics_menu_breakfast_png__WEBPACK_IMPORTED_MODULE_0__
    )
  );
  menu.appendChild(
    menuItemMaker(
      "Flame-Grilled Delight",
      "Savor the perfect bite: Juicy beef, melted cheese, crisp lettuce, ripe tomatoes, and tangy pickles, all in a toasted bun.",
      "$12",
      _pics_menu_burger_png__WEBPACK_IMPORTED_MODULE_1__
    )
  );
  menu.appendChild(
    menuItemMaker(
      "Velvet Dream Delight",
      " Experience pure bliss with this luscious, moist red velvet cake, layered with creamy frosting and hints of chocolate, creating an irresistible symphony of flavors.",
      "$6",
      _pics_menu_cake_png__WEBPACK_IMPORTED_MODULE_2__
    )
  );
  menu.appendChild(
    menuItemMaker(
      "Zesty Chicken Infusion",
      "Satisfy your cravings with tender, flavorful chicken, served with your choice of sides for a mouthwatering and complete meal.",
      "$11",
      _pics_menu_chicken_png__WEBPACK_IMPORTED_MODULE_3__
    )
  );
  menu.appendChild(
    menuItemMaker(
      "Golden Crunch Sensation",
      "Delight in crispy, golden fries, perfectly seasoned and irresistibly addictive, providing a satisfying crunch with every bite.",
      "$5",
      _pics_menu_frenchFries_png__WEBPACK_IMPORTED_MODULE_4__
    )
  );
  menu.appendChild(
    menuItemMaker(
      "Sizzlin' Frankfurter Feast",
      "A grilled hot dog nestled in a soft bun, topped with savory condiments for a burst of flavor that will satisfy your cravings with every juicy bite.",
      "$4",
      _pics_menu_hotDog_png__WEBPACK_IMPORTED_MODULE_5__
    )
  );
  menu.appendChild(
    menuItemMaker(
      "Savory Noodle Symphony",
      "A tantalizing combination of cooked noodles, aromatic sauce, and vibrant vegetables that create an explosion of flavors in every forkful.",
      "$10",
      _pics_menu_noodles_png__WEBPACK_IMPORTED_MODULE_6__
    )
  );
  menu.appendChild(
    menuItemMaker(
      "Fiery Pepperoni Explosion",
      "Indulge in a tantalizing blend of gooey melted cheese, savory pepperoni, and a medley of vibrant veggies atop a crispy crust, delivering a burst of flavors in every bite.",
      "$9",
      _pics_menu_pizza_png__WEBPACK_IMPORTED_MODULE_7__
    )
  );
  menu.appendChild(
    menuItemMaker(
      "Hearty Stack Supreme",
      "A delicious combination of premium meats, melted cheese, fresh veggies, and zesty condiments, creating a mouthwatering sandwich that's sure to satisfy.",
      "$6",
      _pics_menu_sandwich_png__WEBPACK_IMPORTED_MODULE_8__
    )
  );
  menu.appendChild(
    menuItemMaker(
      "Zesty Fiesta Taco",
      "Bite into a fiesta of flavors with tender, seasoned meat, vibrant toppings, and zesty sauces, all wrapped in a warm tortilla for a mouthwatering taco experience.",
      "$9",
      _pics_menu_taco_png__WEBPACK_IMPORTED_MODULE_9__
    )
  );
  return menu;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuPage);


/***/ }),

/***/ "./src/pics/brooke.jpg":
/*!*****************************!*\
  !*** ./src/pics/brooke.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3ec5183719fa3e1eadeb.jpg";

/***/ }),

/***/ "./src/pics/contacts/call.png":
/*!************************************!*\
  !*** ./src/pics/contacts/call.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fc8a7afe615a11928fe3.png";

/***/ }),

/***/ "./src/pics/contacts/clock.png":
/*!*************************************!*\
  !*** ./src/pics/contacts/clock.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "587cdd5801964805e25c.png";

/***/ }),

/***/ "./src/pics/contacts/email.png":
/*!*************************************!*\
  !*** ./src/pics/contacts/email.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a68ade5caafe56480b48.png";

/***/ }),

/***/ "./src/pics/contacts/locationMark.png":
/*!********************************************!*\
  !*** ./src/pics/contacts/locationMark.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d0a5a977170c45407eb3.png";

/***/ }),

/***/ "./src/pics/menu/breakfast.png":
/*!*************************************!*\
  !*** ./src/pics/menu/breakfast.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "36f72558254cc1901c14.png";

/***/ }),

/***/ "./src/pics/menu/burger.png":
/*!**********************************!*\
  !*** ./src/pics/menu/burger.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4ae1d8e08ce2e6dcf2bd.png";

/***/ }),

/***/ "./src/pics/menu/cake.png":
/*!********************************!*\
  !*** ./src/pics/menu/cake.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f56d773aaac324643a1e.png";

/***/ }),

/***/ "./src/pics/menu/chicken.png":
/*!***********************************!*\
  !*** ./src/pics/menu/chicken.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6894d126da79f2f7a397.png";

/***/ }),

/***/ "./src/pics/menu/frenchFries.png":
/*!***************************************!*\
  !*** ./src/pics/menu/frenchFries.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "47abf0322079be839940.png";

/***/ }),

/***/ "./src/pics/menu/hotDog.png":
/*!**********************************!*\
  !*** ./src/pics/menu/hotDog.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bc73ff1ffbc9c9d8724d.png";

/***/ }),

/***/ "./src/pics/menu/noodles.png":
/*!***********************************!*\
  !*** ./src/pics/menu/noodles.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ee402bec8a17ef91f525.png";

/***/ }),

/***/ "./src/pics/menu/pizza.png":
/*!*********************************!*\
  !*** ./src/pics/menu/pizza.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f16d47d481154099ec48.png";

/***/ }),

/***/ "./src/pics/menu/sandwich.png":
/*!************************************!*\
  !*** ./src/pics/menu/sandwich.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "11e9241ad43b26ff77ce.png";

/***/ }),

/***/ "./src/pics/menu/taco.png":
/*!********************************!*\
  !*** ./src/pics/menu/taco.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6bf5559bf964ebb1b3d9.png";

/***/ }),

/***/ "./src/pics/pepper.png":
/*!*****************************!*\
  !*** ./src/pics/pepper.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0a0a951ad925c723a94f.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style/index.css */ "./src/style/index.css");
/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.js */ "./src/pages/header.js");
/* harmony import */ var _mainPage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mainPage.js */ "./src/pages/mainPage.js");
/* harmony import */ var _menuPage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menuPage.js */ "./src/pages/menuPage.js");
/* harmony import */ var _contactPage_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contactPage.js */ "./src/pages/contactPage.js");
// import f from "./mainPage";





(0,_header_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
document.body.classList.add("bg-image");
const mainContent = document.querySelector("#content");
mainContent.appendChild((0,_mainPage_js__WEBPACK_IMPORTED_MODULE_2__["default"])());

const navBtnListener = () => {
  const btns = document.querySelectorAll("#btnDiv > button");
  const btnMain = document.querySelector("#btnOrder");
  btns.forEach((e) => e.addEventListener("click", buildPage));
  // btnOrder.addEventListener("click", buildPage);

  function buildPage(e) {
    let oldChild = mainContent.childNodes[1];
    console.log(oldChild);
    if (e.target.id === "Home") {
      mainContent.replaceChild((0,_mainPage_js__WEBPACK_IMPORTED_MODULE_2__["default"])(), oldChild);
    } else if (e.target.id === "Menu" || e.target.id === "btnOrder") {
      mainContent.replaceChild((0,_menuPage_js__WEBPACK_IMPORTED_MODULE_3__["default"])(), oldChild);
    } else if (e.target.id === "Contacts") {
      mainContent.replaceChild((0,_contactPage_js__WEBPACK_IMPORTED_MODULE_4__["default"])(), oldChild);
    }
  }
};

navBtnListener();

const pageLoader = () => {};

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFNLEtBQUssV0FBVyxNQUFNLE9BQU8sTUFBTSxLQUFLLHFCQUFxQixvQkFBb0IsTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxNQUFNLGlCQUFpQixVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxPQUFPLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLE9BQU8sTUFBTSxLQUFLLG9CQUFvQixvQkFBb0IsTUFBTSxNQUFNLG9CQUFvQixvQkFBb0IsTUFBTSxNQUFNLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxLQUFLLEtBQUssVUFBVSxNQUFNLFFBQVEsTUFBTSxZQUFZLG9CQUFvQixxQkFBcUIsTUFBTSxNQUFNLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxXQUFXLEtBQUssVUFBVSxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxLQUFLLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FB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Q0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDNEI7QUFDUztBQUNBO0FBQ0E7QUFDTTtBQUMzQyxzREFBVTtBQUNWO0FBQ0E7QUFDQSx3QkFBd0Isd0RBQVE7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQix3REFBUTtBQUN2QyxNQUFNO0FBQ04sK0JBQStCLHdEQUFRO0FBQ3ZDLE1BQU07QUFDTiwrQkFBK0IsMkRBQVc7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yX3BhZ2UvLi9zcmMvc3R5bGUvaW5kZXguY3NzIiwid2VicGFjazovL3JfcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcl9wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yX3BhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yX3BhZ2UvLi9zcmMvc3R5bGUvaW5kZXguY3NzPzFlMTciLCJ3ZWJwYWNrOi8vcl9wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3JfcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcl9wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3JfcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yX3BhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yX3BhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yX3BhZ2UvLi9zcmMvZnVuY3Rpb25zL21ha2VDaGlsZC5qcyIsIndlYnBhY2s6Ly9yX3BhZ2UvLi9zcmMvcGFnZXMvY29udGFjdFBhZ2UuanMiLCJ3ZWJwYWNrOi8vcl9wYWdlLy4vc3JjL3BhZ2VzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9yX3BhZ2UvLi9zcmMvcGFnZXMvbWFpblBhZ2UuanMiLCJ3ZWJwYWNrOi8vcl9wYWdlLy4vc3JjL3BhZ2VzL21lbnVQYWdlLmpzIiwid2VicGFjazovL3JfcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yX3BhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcl9wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yX3BhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yX3BhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yX3BhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yX3BhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcl9wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3JfcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcl9wYWdlLy4vc3JjL3BhZ2VzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9waWNzL2Jyb29rZS5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKlxcbiEgdGFpbHdpbmRjc3MgdjMuMy4yIHwgTUlUIExpY2Vuc2UgfCBodHRwczovL3RhaWx3aW5kY3NzLmNvbVxcbiovLypcXG4xLiBQcmV2ZW50IHBhZGRpbmcgYW5kIGJvcmRlciBmcm9tIGFmZmVjdGluZyBlbGVtZW50IHdpZHRoLiAoaHR0cHM6Ly9naXRodWIuY29tL21vemRldnMvY3NzcmVtZWR5L2lzc3Vlcy80KVxcbjIuIEFsbG93IGFkZGluZyBhIGJvcmRlciB0byBhbiBlbGVtZW50IGJ5IGp1c3QgYWRkaW5nIGEgYm9yZGVyLXdpZHRoLiAoaHR0cHM6Ly9naXRodWIuY29tL3RhaWx3aW5kY3NzL3RhaWx3aW5kY3NzL3B1bGwvMTE2KVxcbiovXFxuXFxuKixcXG46OmJlZm9yZSxcXG46OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG4gIGJvcmRlci13aWR0aDogMDsgLyogMiAqL1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDsgLyogMiAqL1xcbiAgYm9yZGVyLWNvbG9yOiAjZTVlN2ViOyAvKiAyICovXFxufVxcblxcbjo6YmVmb3JlLFxcbjo6YWZ0ZXIge1xcbiAgLS10dy1jb250ZW50OiAnJztcXG59XFxuXFxuLypcXG4xLiBVc2UgYSBjb25zaXN0ZW50IHNlbnNpYmxlIGxpbmUtaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cXG4yLiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluIGlPUy5cXG4zLiBVc2UgYSBtb3JlIHJlYWRhYmxlIHRhYiBzaXplLlxcbjQuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgYHNhbnNgIGZvbnQtZmFtaWx5IGJ5IGRlZmF1bHQuXFxuNS4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBgc2Fuc2AgZm9udC1mZWF0dXJlLXNldHRpbmdzIGJ5IGRlZmF1bHQuXFxuNi4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBgc2Fuc2AgZm9udC12YXJpYXRpb24tc2V0dGluZ3MgYnkgZGVmYXVsdC5cXG4qL1xcblxcbmh0bWwge1xcbiAgbGluZS1oZWlnaHQ6IDEuNTsgLyogMSAqL1xcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXFxuICAtbW96LXRhYi1zaXplOiA0OyAvKiAzICovXFxuICAtby10YWItc2l6ZTogNDtcXG4gICAgIHRhYi1zaXplOiA0OyAvKiAzICovXFxuICBmb250LWZhbWlseTogdWktc2Fucy1zZXJpZiwgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90bywgXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgQXJpYWwsIFxcXCJOb3RvIFNhbnNcXFwiLCBzYW5zLXNlcmlmLCBcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIiwgXFxcIk5vdG8gQ29sb3IgRW1vamlcXFwiOyAvKiA0ICovXFxuICBmb250LWZlYXR1cmUtc2V0dGluZ3M6IG5vcm1hbDsgLyogNSAqL1xcbiAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6IG5vcm1hbDsgLyogNiAqL1xcbn1cXG5cXG4vKlxcbjEuIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cXG4yLiBJbmhlcml0IGxpbmUtaGVpZ2h0IGZyb20gYGh0bWxgIHNvIHVzZXJzIGNhbiBzZXQgdGhlbSBhcyBhIGNsYXNzIGRpcmVjdGx5IG9uIHRoZSBgaHRtbGAgZWxlbWVudC5cXG4qL1xcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwOyAvKiAxICovXFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDsgLyogMiAqL1xcbn1cXG5cXG4vKlxcbjEuIEFkZCB0aGUgY29ycmVjdCBoZWlnaHQgaW4gRmlyZWZveC5cXG4yLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBvZiBib3JkZXIgY29sb3IgaW4gRmlyZWZveC4gKGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTE5MDY1NSlcXG4zLiBFbnN1cmUgaG9yaXpvbnRhbCBydWxlcyBhcmUgdmlzaWJsZSBieSBkZWZhdWx0LlxcbiovXFxuXFxuaHIge1xcbiAgaGVpZ2h0OiAwOyAvKiAxICovXFxuICBjb2xvcjogaW5oZXJpdDsgLyogMiAqL1xcbiAgYm9yZGVyLXRvcC13aWR0aDogMXB4OyAvKiAzICovXFxufVxcblxcbi8qXFxuQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxuKi9cXG5cXG5hYmJyOndoZXJlKFt0aXRsZV0pIHtcXG4gIC13ZWJraXQtdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7XFxufVxcblxcbi8qXFxuUmVtb3ZlIHRoZSBkZWZhdWx0IGZvbnQgc2l6ZSBhbmQgd2VpZ2h0IGZvciBoZWFkaW5ncy5cXG4qL1xcblxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2IHtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xcbn1cXG5cXG4vKlxcblJlc2V0IGxpbmtzIHRvIG9wdGltaXplIGZvciBvcHQtaW4gc3R5bGluZyBpbnN0ZWFkIG9mIG9wdC1vdXQuXFxuKi9cXG5cXG5hIHtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0O1xcbn1cXG5cXG4vKlxcbkFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBFZGdlIGFuZCBTYWZhcmkuXFxuKi9cXG5cXG5iLFxcbnN0cm9uZyB7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4vKlxcbjEuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgYG1vbm9gIGZvbnQgZmFtaWx5IGJ5IGRlZmF1bHQuXFxuMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiovXFxuXFxuY29kZSxcXG5rYmQsXFxuc2FtcCxcXG5wcmUge1xcbiAgZm9udC1mYW1pbHk6IHVpLW1vbm9zcGFjZSwgU0ZNb25vLVJlZ3VsYXIsIE1lbmxvLCBNb25hY28sIENvbnNvbGFzLCBcXFwiTGliZXJhdGlvbiBNb25vXFxcIiwgXFxcIkNvdXJpZXIgTmV3XFxcIiwgbW9ub3NwYWNlOyAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKlxcbkFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiovXFxuXFxuc21hbGwge1xcbiAgZm9udC1zaXplOiA4MCU7XFxufVxcblxcbi8qXFxuUHJldmVudCBgc3ViYCBhbmQgYHN1cGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cXG4qL1xcblxcbnN1YixcXG5zdXAge1xcbiAgZm9udC1zaXplOiA3NSU7XFxuICBsaW5lLWhlaWdodDogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuc3ViIHtcXG4gIGJvdHRvbTogLTAuMjVlbTtcXG59XFxuXFxuc3VwIHtcXG4gIHRvcDogLTAuNWVtO1xcbn1cXG5cXG4vKlxcbjEuIFJlbW92ZSB0ZXh0IGluZGVudGF0aW9uIGZyb20gdGFibGUgY29udGVudHMgaW4gQ2hyb21lIGFuZCBTYWZhcmkuIChodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD05OTkwODgsIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0yMDEyOTcpXFxuMi4gQ29ycmVjdCB0YWJsZSBib3JkZXIgY29sb3IgaW5oZXJpdGFuY2UgaW4gYWxsIENocm9tZSBhbmQgU2FmYXJpLiAoaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9OTM1NzI5LCBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTk1MDE2KVxcbjMuIFJlbW92ZSBnYXBzIGJldHdlZW4gdGFibGUgYm9yZGVycyBieSBkZWZhdWx0LlxcbiovXFxuXFxudGFibGUge1xcbiAgdGV4dC1pbmRlbnQ6IDA7IC8qIDEgKi9cXG4gIGJvcmRlci1jb2xvcjogaW5oZXJpdDsgLyogMiAqL1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsgLyogMyAqL1xcbn1cXG5cXG4vKlxcbjEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzLlxcbjIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cXG4zLiBSZW1vdmUgZGVmYXVsdCBwYWRkaW5nIGluIGFsbCBicm93c2Vycy5cXG4qL1xcblxcbmJ1dHRvbixcXG5pbnB1dCxcXG5vcHRncm91cCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7IC8qIDEgKi9cXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyAvKiAxICovXFxuICBjb2xvcjogaW5oZXJpdDsgLyogMSAqL1xcbiAgbWFyZ2luOiAwOyAvKiAyICovXFxuICBwYWRkaW5nOiAwOyAvKiAzICovXFxufVxcblxcbi8qXFxuUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlIGFuZCBGaXJlZm94LlxcbiovXFxuXFxuYnV0dG9uLFxcbnNlbGVjdCB7XFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuLypcXG4xLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbjIuIFJlbW92ZSBkZWZhdWx0IGJ1dHRvbiBzdHlsZXMuXFxuKi9cXG5cXG5idXR0b24sXFxuW3R5cGU9J2J1dHRvbiddLFxcblt0eXBlPSdyZXNldCddLFxcblt0eXBlPSdzdWJtaXQnXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IC8qIDIgKi9cXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5Vc2UgdGhlIG1vZGVybiBGaXJlZm94IGZvY3VzIHN0eWxlIGZvciBhbGwgZm9jdXNhYmxlIGVsZW1lbnRzLlxcbiovXFxuXFxuOi1tb3otZm9jdXNyaW5nIHtcXG4gIG91dGxpbmU6IGF1dG87XFxufVxcblxcbi8qXFxuUmVtb3ZlIHRoZSBhZGRpdGlvbmFsIGA6aW52YWxpZGAgc3R5bGVzIGluIEZpcmVmb3guIChodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9nZWNrby1kZXYvYmxvYi8yZjllYWNkOWQzZDk5NWM5MzdiNDI1MWE1NTU3ZDk1ZDQ5NGM5YmUxL2xheW91dC9zdHlsZS9yZXMvZm9ybXMuY3NzI0w3MjgtTDczNylcXG4qL1xcblxcbjotbW96LXVpLWludmFsaWQge1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuLypcXG5BZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSBhbmQgRmlyZWZveC5cXG4qL1xcblxcbnByb2dyZXNzIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLypcXG5Db3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBTYWZhcmkuXFxuKi9cXG5cXG46Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLypcXG4xLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4yLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cXG4qL1xcblxcblt0eXBlPSdzZWFyY2gnXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xcbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5SZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxuKi9cXG5cXG46Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4vKlxcbjEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBgaW5oZXJpdGAgaW4gU2FmYXJpLlxcbiovXFxuXFxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcbiAgZm9udDogaW5oZXJpdDsgLyogMiAqL1xcbn1cXG5cXG4vKlxcbkFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIENocm9tZSBhbmQgU2FmYXJpLlxcbiovXFxuXFxuc3VtbWFyeSB7XFxuICBkaXNwbGF5OiBsaXN0LWl0ZW07XFxufVxcblxcbi8qXFxuUmVtb3ZlcyB0aGUgZGVmYXVsdCBzcGFjaW5nIGFuZCBib3JkZXIgZm9yIGFwcHJvcHJpYXRlIGVsZW1lbnRzLlxcbiovXFxuXFxuYmxvY2txdW90ZSxcXG5kbCxcXG5kZCxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNixcXG5ocixcXG5maWd1cmUsXFxucCxcXG5wcmUge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5maWVsZHNldCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5sZWdlbmQge1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxub2wsXFxudWwsXFxubWVudSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLypcXG5QcmV2ZW50IHJlc2l6aW5nIHRleHRhcmVhcyBob3Jpem9udGFsbHkgYnkgZGVmYXVsdC5cXG4qL1xcblxcbnRleHRhcmVhIHtcXG4gIHJlc2l6ZTogdmVydGljYWw7XFxufVxcblxcbi8qXFxuMS4gUmVzZXQgdGhlIGRlZmF1bHQgcGxhY2Vob2xkZXIgb3BhY2l0eSBpbiBGaXJlZm94LiAoaHR0cHM6Ly9naXRodWIuY29tL3RhaWx3aW5kbGFicy90YWlsd2luZGNzcy9pc3N1ZXMvMzMwMClcXG4yLiBTZXQgdGhlIGRlZmF1bHQgcGxhY2Vob2xkZXIgY29sb3IgdG8gdGhlIHVzZXIncyBjb25maWd1cmVkIGdyYXkgNDAwIGNvbG9yLlxcbiovXFxuXFxuaW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXIsIHRleHRhcmVhOjotbW96LXBsYWNlaG9sZGVyIHtcXG4gIG9wYWNpdHk6IDE7IC8qIDEgKi9cXG4gIGNvbG9yOiAjOWNhM2FmOyAvKiAyICovXFxufVxcblxcbmlucHV0OjpwbGFjZWhvbGRlcixcXG50ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xcbiAgb3BhY2l0eTogMTsgLyogMSAqL1xcbiAgY29sb3I6ICM5Y2EzYWY7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5TZXQgdGhlIGRlZmF1bHQgY3Vyc29yIGZvciBidXR0b25zLlxcbiovXFxuXFxuYnV0dG9uLFxcbltyb2xlPVxcXCJidXR0b25cXFwiXSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qXFxuTWFrZSBzdXJlIGRpc2FibGVkIGJ1dHRvbnMgZG9uJ3QgZ2V0IHRoZSBwb2ludGVyIGN1cnNvci5cXG4qL1xcbjpkaXNhYmxlZCB7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcblxcbi8qXFxuMS4gTWFrZSByZXBsYWNlZCBlbGVtZW50cyBgZGlzcGxheTogYmxvY2tgIGJ5IGRlZmF1bHQuIChodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzE0KVxcbjIuIEFkZCBgdmVydGljYWwtYWxpZ246IG1pZGRsZWAgdG8gYWxpZ24gcmVwbGFjZWQgZWxlbWVudHMgbW9yZSBzZW5zaWJseSBieSBkZWZhdWx0LiAoaHR0cHM6Ly9naXRodWIuY29tL2plbnNpbW1vbnMvY3NzcmVtZWR5L2lzc3Vlcy8xNCNpc3N1ZWNvbW1lbnQtNjM0OTM0MjEwKVxcbiAgIFRoaXMgY2FuIHRyaWdnZXIgYSBwb29ybHkgY29uc2lkZXJlZCBsaW50IGVycm9yIGluIHNvbWUgdG9vbHMgYnV0IGlzIGluY2x1ZGVkIGJ5IGRlc2lnbi5cXG4qL1xcblxcbmltZyxcXG5zdmcsXFxudmlkZW8sXFxuY2FudmFzLFxcbmF1ZGlvLFxcbmlmcmFtZSxcXG5lbWJlZCxcXG5vYmplY3Qge1xcbiAgZGlzcGxheTogYmxvY2s7IC8qIDEgKi9cXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5Db25zdHJhaW4gaW1hZ2VzIGFuZCB2aWRlb3MgdG8gdGhlIHBhcmVudCB3aWR0aCBhbmQgcHJlc2VydmUgdGhlaXIgaW50cmluc2ljIGFzcGVjdCByYXRpby4gKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3pkZXZzL2Nzc3JlbWVkeS9pc3N1ZXMvMTQpXFxuKi9cXG5cXG5pbWcsXFxudmlkZW8ge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKiBNYWtlIGVsZW1lbnRzIHdpdGggdGhlIEhUTUwgaGlkZGVuIGF0dHJpYnV0ZSBzdGF5IGhpZGRlbiBieSBkZWZhdWx0ICovXFxuW2hpZGRlbl0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuKiwgOjpiZWZvcmUsIDo6YWZ0ZXIge1xcbiAgLS10dy1ib3JkZXItc3BhY2luZy14OiAwO1xcbiAgLS10dy1ib3JkZXItc3BhY2luZy15OiAwO1xcbiAgLS10dy10cmFuc2xhdGUteDogMDtcXG4gIC0tdHctdHJhbnNsYXRlLXk6IDA7XFxuICAtLXR3LXJvdGF0ZTogMDtcXG4gIC0tdHctc2tldy14OiAwO1xcbiAgLS10dy1za2V3LXk6IDA7XFxuICAtLXR3LXNjYWxlLXg6IDE7XFxuICAtLXR3LXNjYWxlLXk6IDE7XFxuICAtLXR3LXBhbi14OiAgO1xcbiAgLS10dy1wYW4teTogIDtcXG4gIC0tdHctcGluY2gtem9vbTogIDtcXG4gIC0tdHctc2Nyb2xsLXNuYXAtc3RyaWN0bmVzczogcHJveGltaXR5O1xcbiAgLS10dy1ncmFkaWVudC1mcm9tLXBvc2l0aW9uOiAgO1xcbiAgLS10dy1ncmFkaWVudC12aWEtcG9zaXRpb246ICA7XFxuICAtLXR3LWdyYWRpZW50LXRvLXBvc2l0aW9uOiAgO1xcbiAgLS10dy1vcmRpbmFsOiAgO1xcbiAgLS10dy1zbGFzaGVkLXplcm86ICA7XFxuICAtLXR3LW51bWVyaWMtZmlndXJlOiAgO1xcbiAgLS10dy1udW1lcmljLXNwYWNpbmc6ICA7XFxuICAtLXR3LW51bWVyaWMtZnJhY3Rpb246ICA7XFxuICAtLXR3LXJpbmctaW5zZXQ6ICA7XFxuICAtLXR3LXJpbmctb2Zmc2V0LXdpZHRoOiAwcHg7XFxuICAtLXR3LXJpbmctb2Zmc2V0LWNvbG9yOiAjZmZmO1xcbiAgLS10dy1yaW5nLWNvbG9yOiByZ2IoNTkgMTMwIDI0NiAvIDAuNSk7XFxuICAtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdzogMCAwICMwMDAwO1xcbiAgLS10dy1yaW5nLXNoYWRvdzogMCAwICMwMDAwO1xcbiAgLS10dy1zaGFkb3c6IDAgMCAjMDAwMDtcXG4gIC0tdHctc2hhZG93LWNvbG9yZWQ6IDAgMCAjMDAwMDtcXG4gIC0tdHctYmx1cjogIDtcXG4gIC0tdHctYnJpZ2h0bmVzczogIDtcXG4gIC0tdHctY29udHJhc3Q6ICA7XFxuICAtLXR3LWdyYXlzY2FsZTogIDtcXG4gIC0tdHctaHVlLXJvdGF0ZTogIDtcXG4gIC0tdHctaW52ZXJ0OiAgO1xcbiAgLS10dy1zYXR1cmF0ZTogIDtcXG4gIC0tdHctc2VwaWE6ICA7XFxuICAtLXR3LWRyb3Atc2hhZG93OiAgO1xcbiAgLS10dy1iYWNrZHJvcC1ibHVyOiAgO1xcbiAgLS10dy1iYWNrZHJvcC1icmlnaHRuZXNzOiAgO1xcbiAgLS10dy1iYWNrZHJvcC1jb250cmFzdDogIDtcXG4gIC0tdHctYmFja2Ryb3AtZ3JheXNjYWxlOiAgO1xcbiAgLS10dy1iYWNrZHJvcC1odWUtcm90YXRlOiAgO1xcbiAgLS10dy1iYWNrZHJvcC1pbnZlcnQ6ICA7XFxuICAtLXR3LWJhY2tkcm9wLW9wYWNpdHk6ICA7XFxuICAtLXR3LWJhY2tkcm9wLXNhdHVyYXRlOiAgO1xcbiAgLS10dy1iYWNrZHJvcC1zZXBpYTogIDtcXG59XFxuXFxuOjpiYWNrZHJvcCB7XFxuICAtLXR3LWJvcmRlci1zcGFjaW5nLXg6IDA7XFxuICAtLXR3LWJvcmRlci1zcGFjaW5nLXk6IDA7XFxuICAtLXR3LXRyYW5zbGF0ZS14OiAwO1xcbiAgLS10dy10cmFuc2xhdGUteTogMDtcXG4gIC0tdHctcm90YXRlOiAwO1xcbiAgLS10dy1za2V3LXg6IDA7XFxuICAtLXR3LXNrZXcteTogMDtcXG4gIC0tdHctc2NhbGUteDogMTtcXG4gIC0tdHctc2NhbGUteTogMTtcXG4gIC0tdHctcGFuLXg6ICA7XFxuICAtLXR3LXBhbi15OiAgO1xcbiAgLS10dy1waW5jaC16b29tOiAgO1xcbiAgLS10dy1zY3JvbGwtc25hcC1zdHJpY3RuZXNzOiBwcm94aW1pdHk7XFxuICAtLXR3LWdyYWRpZW50LWZyb20tcG9zaXRpb246ICA7XFxuICAtLXR3LWdyYWRpZW50LXZpYS1wb3NpdGlvbjogIDtcXG4gIC0tdHctZ3JhZGllbnQtdG8tcG9zaXRpb246ICA7XFxuICAtLXR3LW9yZGluYWw6ICA7XFxuICAtLXR3LXNsYXNoZWQtemVybzogIDtcXG4gIC0tdHctbnVtZXJpYy1maWd1cmU6ICA7XFxuICAtLXR3LW51bWVyaWMtc3BhY2luZzogIDtcXG4gIC0tdHctbnVtZXJpYy1mcmFjdGlvbjogIDtcXG4gIC0tdHctcmluZy1pbnNldDogIDtcXG4gIC0tdHctcmluZy1vZmZzZXQtd2lkdGg6IDBweDtcXG4gIC0tdHctcmluZy1vZmZzZXQtY29sb3I6ICNmZmY7XFxuICAtLXR3LXJpbmctY29sb3I6IHJnYig1OSAxMzAgMjQ2IC8gMC41KTtcXG4gIC0tdHctcmluZy1vZmZzZXQtc2hhZG93OiAwIDAgIzAwMDA7XFxuICAtLXR3LXJpbmctc2hhZG93OiAwIDAgIzAwMDA7XFxuICAtLXR3LXNoYWRvdzogMCAwICMwMDAwO1xcbiAgLS10dy1zaGFkb3ctY29sb3JlZDogMCAwICMwMDAwO1xcbiAgLS10dy1ibHVyOiAgO1xcbiAgLS10dy1icmlnaHRuZXNzOiAgO1xcbiAgLS10dy1jb250cmFzdDogIDtcXG4gIC0tdHctZ3JheXNjYWxlOiAgO1xcbiAgLS10dy1odWUtcm90YXRlOiAgO1xcbiAgLS10dy1pbnZlcnQ6ICA7XFxuICAtLXR3LXNhdHVyYXRlOiAgO1xcbiAgLS10dy1zZXBpYTogIDtcXG4gIC0tdHctZHJvcC1zaGFkb3c6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWJsdXI6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWJyaWdodG5lc3M6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWNvbnRyYXN0OiAgO1xcbiAgLS10dy1iYWNrZHJvcC1ncmF5c2NhbGU6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWh1ZS1yb3RhdGU6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWludmVydDogIDtcXG4gIC0tdHctYmFja2Ryb3Atb3BhY2l0eTogIDtcXG4gIC0tdHctYmFja2Ryb3Atc2F0dXJhdGU6ICA7XFxuICAtLXR3LWJhY2tkcm9wLXNlcGlhOiAgO1xcbn1cXHJcXG4uc3RpY2t5IHtcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxufVxcclxcbi50b3AtMyB7XFxuICB0b3A6IDAuNzVyZW07XFxufVxcclxcbi5tLTMge1xcbiAgbWFyZ2luOiAwLjc1cmVtO1xcbn1cXHJcXG4ubS1hdXRvIHtcXG4gIG1hcmdpbjogYXV0bztcXG59XFxyXFxuLm14LTQge1xcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XFxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxufVxcclxcbi5tYi0yIHtcXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG59XFxyXFxuLm1sLTAge1xcbiAgbWFyZ2luLWxlZnQ6IDBweDtcXG59XFxyXFxuLm1sLVxcXFxbMjB2d1xcXFxdIHtcXG4gIG1hcmdpbi1sZWZ0OiAyMHZ3O1xcbn1cXHJcXG4ubXItMTAge1xcbiAgbWFyZ2luLXJpZ2h0OiAyLjVyZW07XFxufVxcclxcbi5tdC01IHtcXG4gIG1hcmdpbi10b3A6IDEuMjVyZW07XFxufVxcclxcbi5tdC04IHtcXG4gIG1hcmdpbi10b3A6IDJyZW07XFxufVxcclxcbi5ibG9jayB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxyXFxuLmZsZXgge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxyXFxuLmdyaWQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG59XFxyXFxuLmgtOCB7XFxuICBoZWlnaHQ6IDJyZW07XFxufVxcclxcbi53LTcge1xcbiAgd2lkdGg6IDEuNzVyZW07XFxufVxcclxcbi53LTgge1xcbiAgd2lkdGg6IDJyZW07XFxufVxcclxcbi53LWZpdCB7XFxuICB3aWR0aDogLW1vei1maXQtY29udGVudDtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG59XFxyXFxuLm1heC13LWZ1bGwge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXHJcXG4uZmxleC0xIHtcXG4gIGZsZXg6IDEgMSAwJTtcXG59XFxyXFxuLmdyb3cge1xcbiAgZmxleC1ncm93OiAxO1xcbn1cXHJcXG4uY3Vyc29yLXBvaW50ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXHJcXG4uZ3JpZC1jb2xzLWF1dG8tZml0IHtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzgwcHgsIDFmcikpO1xcbn1cXHJcXG4uZmxleC1jb2wge1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxyXFxuLml0ZW1zLWNlbnRlciB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXHJcXG4uanVzdGlmeS1jZW50ZXIge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcclxcbi5nYXAtNCB7XFxuICBnYXA6IDFyZW07XFxufVxcclxcbi5nYXAteC00IHtcXG4gIC1tb3otY29sdW1uLWdhcDogMXJlbTtcXG4gICAgICAgY29sdW1uLWdhcDogMXJlbTtcXG59XFxyXFxuLnNlbGYtZW5kIHtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbn1cXHJcXG4ucm91bmRlZC1sZyB7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxufVxcclxcbi5iZy1zbGF0ZS0xMDAge1xcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MSAyNDUgMjQ5IC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXHJcXG4uYmctc2xhdGUtMjAwIHtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjYgMjMyIDI0MCAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XFxyXFxuLmJnLXNsYXRlLTUwMCB7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAwIDExNiAxMzkgLyB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcclxcbi5iZy1ncmFkaWVudC10by1iciB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCB2YXIoLS10dy1ncmFkaWVudC1zdG9wcykpO1xcbn1cXHJcXG4uYmctZ3JhZGllbnQtdG8tciB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXR3LWdyYWRpZW50LXN0b3BzKSk7XFxufVxcclxcbi5mcm9tLXBpbmstNTAwIHtcXG4gIC0tdHctZ3JhZGllbnQtZnJvbTogI2VjNDg5OSB2YXIoLS10dy1ncmFkaWVudC1mcm9tLXBvc2l0aW9uKTtcXG4gIC0tdHctZ3JhZGllbnQtdG86IHJnYigyMzYgNzIgMTUzIC8gMCkgdmFyKC0tdHctZ3JhZGllbnQtdG8tcG9zaXRpb24pO1xcbiAgLS10dy1ncmFkaWVudC1zdG9wczogdmFyKC0tdHctZ3JhZGllbnQtZnJvbSksIHZhcigtLXR3LWdyYWRpZW50LXRvKTtcXG59XFxyXFxuLmZyb20tcmVkLTUwMCB7XFxuICAtLXR3LWdyYWRpZW50LWZyb206ICNlZjQ0NDQgdmFyKC0tdHctZ3JhZGllbnQtZnJvbS1wb3NpdGlvbik7XFxuICAtLXR3LWdyYWRpZW50LXRvOiByZ2IoMjM5IDY4IDY4IC8gMCkgdmFyKC0tdHctZ3JhZGllbnQtdG8tcG9zaXRpb24pO1xcbiAgLS10dy1ncmFkaWVudC1zdG9wczogdmFyKC0tdHctZ3JhZGllbnQtZnJvbSksIHZhcigtLXR3LWdyYWRpZW50LXRvKTtcXG59XFxyXFxuLnRvLW9yYW5nZS00MDAge1xcbiAgLS10dy1ncmFkaWVudC10bzogI2ZiOTIzYyB2YXIoLS10dy1ncmFkaWVudC10by1wb3NpdGlvbik7XFxufVxcclxcbi50by1wdXJwbGUtNTAwIHtcXG4gIC0tdHctZ3JhZGllbnQtdG86ICNhODU1ZjcgdmFyKC0tdHctZ3JhZGllbnQtdG8tcG9zaXRpb24pO1xcbn1cXHJcXG4uYmctY2xpcC10ZXh0IHtcXG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxufVxcclxcbi5vYmplY3QtY29udGFpbiB7XFxuICAtby1vYmplY3QtZml0OiBjb250YWluO1xcbiAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcXG59XFxyXFxuLnB4LTEge1xcbiAgcGFkZGluZy1sZWZ0OiAwLjI1cmVtO1xcbiAgcGFkZGluZy1yaWdodDogMC4yNXJlbTtcXG59XFxyXFxuLnB4LTUge1xcbiAgcGFkZGluZy1sZWZ0OiAxLjI1cmVtO1xcbiAgcGFkZGluZy1yaWdodDogMS4yNXJlbTtcXG59XFxyXFxuLnB4LTgge1xcbiAgcGFkZGluZy1sZWZ0OiAycmVtO1xcbiAgcGFkZGluZy1yaWdodDogMnJlbTtcXG59XFxyXFxuLnB5LTIge1xcbiAgcGFkZGluZy10b3A6IDAuNXJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XFxufVxcclxcbi5weS0yXFxcXC41IHtcXG4gIHBhZGRpbmctdG9wOiAwLjYyNXJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAwLjYyNXJlbTtcXG59XFxyXFxuLnB5LTUge1xcbiAgcGFkZGluZy10b3A6IDEuMjVyZW07XFxuICBwYWRkaW5nLWJvdHRvbTogMS4yNXJlbTtcXG59XFxyXFxuLnBiLTEwIHtcXG4gIHBhZGRpbmctYm90dG9tOiAyLjVyZW07XFxufVxcclxcbi50ZXh0LWNlbnRlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcclxcbi50ZXh0LTJ4bCB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xcbn1cXHJcXG4udGV4dC01eGwge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxufVxcclxcbi50ZXh0LXNtIHtcXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XFxuICBsaW5lLWhlaWdodDogMS4yNXJlbTtcXG59XFxyXFxuLnRleHQteHMge1xcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDFyZW07XFxufVxcclxcbi5mb250LWJsYWNrIHtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxufVxcclxcbi5mb250LWJvbGQge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxyXFxuLmZvbnQtbWVkaXVtIHtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcclxcbi51cHBlcmNhc2Uge1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG59XFxyXFxuLnRleHQtdHJhbnNwYXJlbnQge1xcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXHJcXG4udGV4dC13aGl0ZSB7XFxuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcXG4gIGNvbG9yOiByZ2IoMjU1IDI1NSAyNTUgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XFxyXFxuLnRyYW5zaXRpb24ge1xcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogY29sb3IsIGJhY2tncm91bmQtY29sb3IsIGJvcmRlci1jb2xvciwgdGV4dC1kZWNvcmF0aW9uLWNvbG9yLCBmaWxsLCBzdHJva2UsIG9wYWNpdHksIGJveC1zaGFkb3csIHRyYW5zZm9ybSwgZmlsdGVyLCAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjtcXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGNvbG9yLCBiYWNrZ3JvdW5kLWNvbG9yLCBib3JkZXItY29sb3IsIHRleHQtZGVjb3JhdGlvbi1jb2xvciwgZmlsbCwgc3Ryb2tlLCBvcGFjaXR5LCBib3gtc2hhZG93LCB0cmFuc2Zvcm0sIGZpbHRlciwgYmFja2Ryb3AtZmlsdGVyO1xcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogY29sb3IsIGJhY2tncm91bmQtY29sb3IsIGJvcmRlci1jb2xvciwgdGV4dC1kZWNvcmF0aW9uLWNvbG9yLCBmaWxsLCBzdHJva2UsIG9wYWNpdHksIGJveC1zaGFkb3csIHRyYW5zZm9ybSwgZmlsdGVyLCBiYWNrZHJvcC1maWx0ZXIsIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyO1xcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxNTBtcztcXG59XFxyXFxuLmVhc2UtaW4tb3V0IHtcXG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xcbn1cXHJcXG5cXHJcXG4uYmctaW1hZ2Uge1xcclxcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogYXF1YTsgKi9cXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgbGVmdDtcXHJcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtcG9zaXRpb24gMC41cyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XFxyXFxuICAuYmctaW1hZ2Uge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgcmlnaHQ7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5ob3ZlclxcXFw6LXRyYW5zbGF0ZS15LXB4OmhvdmVyIHtcXG4gIC0tdHctdHJhbnNsYXRlLXk6IC0xcHg7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcXG59XFxyXFxuXFxyXFxuLmhvdmVyXFxcXDpzY2FsZS0xMDU6aG92ZXIge1xcbiAgLS10dy1zY2FsZS14OiAxLjA1O1xcbiAgLS10dy1zY2FsZS15OiAxLjA1O1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XFxufVxcclxcblxcclxcbi5ob3ZlclxcXFw6c2NhbGUtMTEwOmhvdmVyIHtcXG4gIC0tdHctc2NhbGUteDogMS4xO1xcbiAgLS10dy1zY2FsZS15OiAxLjE7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcXG59XFxyXFxuXFxyXFxuLmhvdmVyXFxcXDpiZy1zbGF0ZS0yMDA6aG92ZXIge1xcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNiAyMzIgMjQwIC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXHJcXG5cXHJcXG4uaG92ZXJcXFxcOmJnLWdyYWRpZW50LXRvLWJsOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gbGVmdCwgdmFyKC0tdHctZ3JhZGllbnQtc3RvcHMpKTtcXG59XFxyXFxuXFxyXFxuLmhvdmVyXFxcXDp0ZXh0LW9yYW5nZS02MDA6aG92ZXIge1xcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuICBjb2xvcjogcmdiKDIzNCA4OCAxMiAvIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xcbn1cXHJcXG5cXHJcXG4uZm9jdXNcXFxcOm91dGxpbmUtbm9uZTpmb2N1cyB7XFxuICBvdXRsaW5lOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBvdXRsaW5lLW9mZnNldDogMnB4O1xcbn1cXHJcXG5cXHJcXG4uZm9jdXNcXFxcOnJpbmctNDpmb2N1cyB7XFxuICAtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdzogdmFyKC0tdHctcmluZy1pbnNldCkgMCAwIDAgdmFyKC0tdHctcmluZy1vZmZzZXQtd2lkdGgpIHZhcigtLXR3LXJpbmctb2Zmc2V0LWNvbG9yKTtcXG4gIC0tdHctcmluZy1zaGFkb3c6IHZhcigtLXR3LXJpbmctaW5zZXQpIDAgMCAwIGNhbGMoNHB4ICsgdmFyKC0tdHctcmluZy1vZmZzZXQtd2lkdGgpKSB2YXIoLS10dy1yaW5nLWNvbG9yKTtcXG4gIGJveC1zaGFkb3c6IHZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdyksIHZhcigtLXR3LXJpbmctc2hhZG93KSwgdmFyKC0tdHctc2hhZG93LCAwIDAgIzAwMDApO1xcbn1cXHJcXG5cXHJcXG4uZm9jdXNcXFxcOnJpbmctcGluay0yMDA6Zm9jdXMge1xcbiAgLS10dy1yaW5nLW9wYWNpdHk6IDE7XFxuICAtLXR3LXJpbmctY29sb3I6IHJnYigyNTEgMjA3IDIzMiAvIHZhcigtLXR3LXJpbmctb3BhY2l0eSkpO1xcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNDI1cHgpIHtcXG5cXG4gIC5tYXgtXFxcXFs0MjVweFxcXFxdXFxcXDptLWF1dG8ge1xcbiAgICBtYXJnaW46IGF1dG87XFxuICB9XFxufVxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiA2NDBweCkge1xcblxcbiAgLnNtXFxcXDptbC0yIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcXG4gIH1cXG5cXG4gIC5zbVxcXFw6ZmxleC1yb3cge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgfVxcblxcbiAgLnNtXFxcXDpnYXAtNCB7XFxuICAgIGdhcDogMXJlbTtcXG4gIH1cXG5cXG4gIC5zbVxcXFw6dGV4dC1iYXNlIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBsaW5lLWhlaWdodDogMS41cmVtO1xcbiAgfVxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG5cXG4gIC5tZFxcXFw6bWwtXFxcXFs0MHZ3XFxcXF0ge1xcbiAgICBtYXJnaW4tbGVmdDogNDB2dztcXG4gIH1cXG5cXG4gIC5tZFxcXFw6bXItMTAge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDIuNXJlbTtcXG4gIH1cXG5cXG4gIC5tZFxcXFw6bWF4LXctNHhsIHtcXG4gICAgbWF4LXdpZHRoOiA1NnJlbTtcXG4gIH1cXG5cXG4gIC5tZFxcXFw6dGV4dC02eGwge1xcbiAgICBmb250LXNpemU6IDMuNzVyZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcbiAgfVxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XFxuXFxuICAubGdcXFxcOmdhcC0xMCB7XFxuICAgIGdhcDogMi41cmVtO1xcbiAgfVxcblxcbiAgLmxnXFxcXDp0ZXh0LTJ4bCB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBsaW5lLWhlaWdodDogMnJlbTtcXG4gIH1cXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlL2luZGV4LmNzc1wiLFwiPG5vIHNvdXJjZT5cIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0NBQWMsQ0FBZDs7O0NBQWM7O0FBQWQ7OztFQUFBLHNCQUFjLEVBQWQsTUFBYztFQUFkLGVBQWMsRUFBZCxNQUFjO0VBQWQsbUJBQWMsRUFBZCxNQUFjO0VBQWQscUJBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0VBQUEsZ0JBQWM7QUFBQTs7QUFBZDs7Ozs7OztDQUFjOztBQUFkO0VBQUEsZ0JBQWMsRUFBZCxNQUFjO0VBQWQsOEJBQWMsRUFBZCxNQUFjO0VBQWQsZ0JBQWMsRUFBZCxNQUFjO0VBQWQsY0FBYztLQUFkLFdBQWMsRUFBZCxNQUFjO0VBQWQsNE5BQWMsRUFBZCxNQUFjO0VBQWQsNkJBQWMsRUFBZCxNQUFjO0VBQWQsK0JBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7OztDQUFjOztBQUFkO0VBQUEsU0FBYyxFQUFkLE1BQWM7RUFBZCxvQkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7OztDQUFjOztBQUFkO0VBQUEsU0FBYyxFQUFkLE1BQWM7RUFBZCxjQUFjLEVBQWQsTUFBYztFQUFkLHFCQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEseUNBQWM7VUFBZCxpQ0FBYztBQUFBOztBQUFkOztDQUFjOztBQUFkOzs7Ozs7RUFBQSxrQkFBYztFQUFkLG9CQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSxjQUFjO0VBQWQsd0JBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDs7RUFBQSxtQkFBYztBQUFBOztBQUFkOzs7Q0FBYzs7QUFBZDs7OztFQUFBLCtHQUFjLEVBQWQsTUFBYztFQUFkLGNBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSxjQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7O0VBQUEsY0FBYztFQUFkLGNBQWM7RUFBZCxrQkFBYztFQUFkLHdCQUFjO0FBQUE7O0FBQWQ7RUFBQSxlQUFjO0FBQUE7O0FBQWQ7RUFBQSxXQUFjO0FBQUE7O0FBQWQ7Ozs7Q0FBYzs7QUFBZDtFQUFBLGNBQWMsRUFBZCxNQUFjO0VBQWQscUJBQWMsRUFBZCxNQUFjO0VBQWQseUJBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7Ozs7Q0FBYzs7QUFBZDs7Ozs7RUFBQSxvQkFBYyxFQUFkLE1BQWM7RUFBZCxlQUFjLEVBQWQsTUFBYztFQUFkLG9CQUFjLEVBQWQsTUFBYztFQUFkLG9CQUFjLEVBQWQsTUFBYztFQUFkLGNBQWMsRUFBZCxNQUFjO0VBQWQsU0FBYyxFQUFkLE1BQWM7RUFBZCxVQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkOztFQUFBLG9CQUFjO0FBQUE7O0FBQWQ7OztDQUFjOztBQUFkOzs7O0VBQUEsMEJBQWMsRUFBZCxNQUFjO0VBQWQsNkJBQWMsRUFBZCxNQUFjO0VBQWQsc0JBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSxhQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSxnQkFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsd0JBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDs7RUFBQSxZQUFjO0FBQUE7O0FBQWQ7OztDQUFjOztBQUFkO0VBQUEsNkJBQWMsRUFBZCxNQUFjO0VBQWQsb0JBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSx3QkFBYztBQUFBOztBQUFkOzs7Q0FBYzs7QUFBZDtFQUFBLDBCQUFjLEVBQWQsTUFBYztFQUFkLGFBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSxrQkFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkOzs7Ozs7Ozs7Ozs7O0VBQUEsU0FBYztBQUFBOztBQUFkO0VBQUEsU0FBYztFQUFkLFVBQWM7QUFBQTs7QUFBZDtFQUFBLFVBQWM7QUFBQTs7QUFBZDs7O0VBQUEsZ0JBQWM7RUFBZCxTQUFjO0VBQWQsVUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsZ0JBQWM7QUFBQTs7QUFBZDs7O0NBQWM7O0FBQWQ7RUFBQSxVQUFjLEVBQWQsTUFBYztFQUFkLGNBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0VBQUEsVUFBYyxFQUFkLE1BQWM7RUFBZCxjQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkOztFQUFBLGVBQWM7QUFBQTs7QUFBZDs7Q0FBYztBQUFkO0VBQUEsZUFBYztBQUFBOztBQUFkOzs7O0NBQWM7O0FBQWQ7Ozs7Ozs7O0VBQUEsY0FBYyxFQUFkLE1BQWM7RUFBZCxzQkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDs7RUFBQSxlQUFjO0VBQWQsWUFBYztBQUFBOztBQUFkLHdFQUFjO0FBQWQ7RUFBQSxhQUFjO0FBQUE7O0FBQWQ7RUFBQSx3QkFBYztFQUFkLHdCQUFjO0VBQWQsbUJBQWM7RUFBZCxtQkFBYztFQUFkLGNBQWM7RUFBZCxjQUFjO0VBQWQsY0FBYztFQUFkLGVBQWM7RUFBZCxlQUFjO0VBQWQsYUFBYztFQUFkLGFBQWM7RUFBZCxrQkFBYztFQUFkLHNDQUFjO0VBQWQsOEJBQWM7RUFBZCw2QkFBYztFQUFkLDRCQUFjO0VBQWQsZUFBYztFQUFkLG9CQUFjO0VBQWQsc0JBQWM7RUFBZCx1QkFBYztFQUFkLHdCQUFjO0VBQWQsa0JBQWM7RUFBZCwyQkFBYztFQUFkLDRCQUFjO0VBQWQsc0NBQWM7RUFBZCxrQ0FBYztFQUFkLDJCQUFjO0VBQWQsc0JBQWM7RUFBZCw4QkFBYztFQUFkLFlBQWM7RUFBZCxrQkFBYztFQUFkLGdCQUFjO0VBQWQsaUJBQWM7RUFBZCxrQkFBYztFQUFkLGNBQWM7RUFBZCxnQkFBYztFQUFkLGFBQWM7RUFBZCxtQkFBYztFQUFkLHFCQUFjO0VBQWQsMkJBQWM7RUFBZCx5QkFBYztFQUFkLDBCQUFjO0VBQWQsMkJBQWM7RUFBZCx1QkFBYztFQUFkLHdCQUFjO0VBQWQseUJBQWM7RUFBZDtBQUFjOztBQUFkO0VBQUEsd0JBQWM7RUFBZCx3QkFBYztFQUFkLG1CQUFjO0VBQWQsbUJBQWM7RUFBZCxjQUFjO0VBQWQsY0FBYztFQUFkLGNBQWM7RUFBZCxlQUFjO0VBQWQsZUFBYztFQUFkLGFBQWM7RUFBZCxhQUFjO0VBQWQsa0JBQWM7RUFBZCxzQ0FBYztFQUFkLDhCQUFjO0VBQWQsNkJBQWM7RUFBZCw0QkFBYztFQUFkLGVBQWM7RUFBZCxvQkFBYztFQUFkLHNCQUFjO0VBQWQsdUJBQWM7RUFBZCx3QkFBYztFQUFkLGtCQUFjO0VBQWQsMkJBQWM7RUFBZCw0QkFBYztFQUFkLHNDQUFjO0VBQWQsa0NBQWM7RUFBZCwyQkFBYztFQUFkLHNCQUFjO0VBQWQsOEJBQWM7RUFBZCxZQUFjO0VBQWQsa0JBQWM7RUFBZCxnQkFBYztFQUFkLGlCQUFjO0VBQWQsa0JBQWM7RUFBZCxjQUFjO0VBQWQsZ0JBQWM7RUFBZCxhQUFjO0VBQWQsbUJBQWM7RUFBZCxxQkFBYztFQUFkLDJCQUFjO0VBQWQseUJBQWM7RUFBZCwwQkFBYztFQUFkLDJCQUFjO0VBQWQsdUJBQWM7RUFBZCx3QkFBYztFQUFkLHlCQUFjO0VBQWQ7QUFBYztBQUVkO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQSxpQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQSx1QkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQSxxQkFBbUI7T0FBbkI7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUEsa0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsa0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsa0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBLDREQUFtQjtFQUFuQixvRUFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSw0REFBbUI7RUFBbkIsbUVBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBLDZCQUFtQjtVQUFuQjtBQUFtQjtBQUFuQjtFQUFBLHNCQUFtQjtLQUFuQjtBQUFtQjtBQUFuQjtFQUFBLHFCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLHFCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLGtCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLG1CQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLHFCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLG9CQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQSxpQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxlQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLG1CQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLGtCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQSxvQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxnS0FBbUI7RUFBbkIsd0pBQW1CO0VBQW5CLGlMQUFtQjtFQUFuQix3REFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjs7QUFFbkI7RUFDRSw0QkFBNEI7RUFDNUIseURBQTJDO0VBQzNDLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsNEJBQTRCO0VBQzVCLDZCQUE2QjtFQUM3QixnREFBZ0Q7QUFDbEQ7O0FBRUE7RUFDRTtJQUNFLDhCQUE4QjtFQUNoQztBQUNGOztBQWxCQTtFQUFBLHVCQ0FBO0VEQUE7Q0NBQTs7QURBQTtFQUFBLG1CQ0FBO0VEQUEsbUJDQUE7RURBQTtDQ0FBOztBREFBO0VBQUEsa0JDQUE7RURBQSxrQkNBQTtFREFBO0NDQUE7O0FEQUE7RUFBQSxtQkNBQTtFREFBO0NDQUE7O0FEQUE7RUFBQTtDQ0FBOztBREFBO0VBQUEscUJDQUE7RURBQTtDQ0FBOztBREFBO0VBQUEsK0JDQUE7RURBQTtDQ0FBOztBREFBO0VBQUEsNEdDQUE7RURBQSwwR0NBQTtFREFBO0NDQUE7O0FEQUE7RUFBQSxxQkNBQTtFREFBO0NDQUE7O0FEQUE7O0VBQUE7SUFBQTtHQ0FBO0NBQUE7O0FEQUE7O0VBQUE7SUFBQTtHQ0FBOztFREFBO0lBQUE7R0NBQTs7RURBQTtJQUFBO0dDQUE7O0VEQUE7SUFBQSxnQkNBQTtJREFBO0dDQUE7Q0FBQTs7QURBQTs7RUFBQTtJQUFBO0dDQUE7O0VEQUE7SUFBQTtHQ0FBOztFREFBO0lBQUE7R0NBQTs7RURBQTtJQUFBLG1CQ0FBO0lEQUE7R0NBQTtDQUFBOztBREFBOztFQUFBO0lBQUE7R0NBQTs7RURBQTtJQUFBLGtCQ0FBO0lEQUE7R0NBQTtDQUFBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkB0YWlsd2luZCBiYXNlO1xcclxcbkB0YWlsd2luZCBjb21wb25lbnRzO1xcclxcbkB0YWlsd2luZCB1dGlsaXRpZXM7XFxyXFxuXFxyXFxuLmJnLWltYWdlIHtcXHJcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IGFxdWE7ICovXFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4uL3BpY3MvYnJvb2tlLmpwZ1xcXCIpO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIGxlZnQ7XFxyXFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLXBvc2l0aW9uIDAuNXMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xcclxcbiAgLmJnLWltYWdlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIHJpZ2h0O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIixudWxsXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBtYWtlQ2hpbGQgPSAodHlwZSwgaWQgPSBudWxsLCBjbGFzc2VzID0gbnVsbCwgdGV4dCA9IFwiXCIpID0+IHtcclxuICBjb25zdCBpbnN0YW5jZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XHJcbiAgaWYgKGlkICE9PSBudWxsKSB7XHJcbiAgICBpbnN0YW5jZS5pZCA9IGlkO1xyXG4gIH1cclxuICBpZiAoY2xhc3NlcyAhPT0gbnVsbCkge1xyXG4gICAgaW5zdGFuY2UuY2xhc3NMaXN0LmFkZCguLi5jbGFzc2VzKTtcclxuICB9XHJcbiAgaW5zdGFuY2UudGV4dENvbnRlbnQgPSB0ZXh0O1xyXG4gIHJldHVybiBpbnN0YW5jZTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1ha2VDaGlsZDtcclxuIiwiaW1wb3J0IG1ha2VDaGlsZCBmcm9tIFwiLi4vZnVuY3Rpb25zL21ha2VDaGlsZFwiO1xyXG5pbXBvcnQgY2xvY2sgZnJvbSBcIi4uL3BpY3MvY29udGFjdHMvY2xvY2sucG5nXCI7XHJcbmltcG9ydCBlbWFpbCBmcm9tIFwiLi4vcGljcy9jb250YWN0cy9lbWFpbC5wbmdcIjtcclxuaW1wb3J0IGxvY2F0aW9uTWFyayBmcm9tIFwiLi4vcGljcy9jb250YWN0cy9sb2NhdGlvbk1hcmsucG5nXCI7XHJcbmltcG9ydCBjYWxsIGZyb20gXCIuLi9waWNzL2NvbnRhY3RzL2NhbGwucG5nXCI7XHJcbmNvbnN0IGNvbnRhY3RQYWdlID0gKCkgPT4ge1xyXG4gIC8vbWFpbiBkaXZcclxuICBjb25zdCBtYWluRGl2ID0gbWFrZUNoaWxkKFwiZGl2XCIsIFwibWVudUNvbnRhaW5lclwiLCBbXHJcbiAgICBcImZsZXhcIixcclxuICAgIFwiZ2FwLTRcIixcclxuICAgIFwibWQ6bWF4LXctNHhsXCIsXHJcbiAgICBcIm1kOm1sLVs0MHZ3XVwiLFxyXG4gICAgXCJtZDptci0xMFwiLFxyXG4gICAgXCJweS01XCIsXHJcbiAgICBcInJvdW5kZWQtbGdcIixcclxuICAgIFwiYmctc2xhdGUtMjAwXCIsXHJcbiAgXSk7XHJcblxyXG4gIGNvbnN0IHBpY0VsZW1lbnRDcmVhdGUgPSAoc3JjLCBhbHQsIHBhcmFtKSA9PiB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgIGVsZW1lbnQuc3JjID0gc3JjO1xyXG4gICAgZWxlbWVudC5hbHQgPSBhbHQ7XHJcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoLi4ucGFyYW0pO1xyXG4gICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZGl2Q3JlYXRpb24gPSAocGljLCBkZXNjcmlwdGlvbikgPT4ge1xyXG4gICAgY29uc3QgZGl2SXRlbSA9IG1ha2VDaGlsZChcImRpdlwiLCB1bmRlZmluZWQsIFtcImZsZXhcIl0pO1xyXG4gICAgZGl2SXRlbS5hcHBlbmRDaGlsZChwaWMpO1xyXG4gICAgZGl2SXRlbS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XHJcbiAgICByZXR1cm4gZGl2SXRlbTtcclxuICB9O1xyXG4gIC8vcGxhY2UgZGl2XHJcbiAgY29uc3QgY29udGFjdFBsYWNlID0gbWFrZUNoaWxkKFxyXG4gICAgXCJwXCIsXHJcbiAgICB1bmRlZmluZWQsXHJcbiAgICB1bmRlZmluZWQsXHJcbiAgICBcIlBhcmMgZGUgbGEgZm9uZGVyaWUsIFNpbnQtSmFucy1Nb2xlbmJlZWtcIlxyXG4gICk7XHJcbiAgY29uc3QgcGxhY2VQaWMgPSBwaWNFbGVtZW50Q3JlYXRlKGxvY2F0aW9uTWFyaywgXCJsb2NhdGlvblwiLCBbXHJcbiAgICBcInctOFwiLFxyXG4gICAgXCJvYmplY3QtY29udGFpblwiLFxyXG4gIF0pO1xyXG4gIG1haW5EaXYuYXBwZW5kQ2hpbGQoZGl2Q3JlYXRpb24ocGxhY2VQaWMsIGNvbnRhY3RQbGFjZSkpO1xyXG5cclxuICBjb25zdCBjb250YWN0Q2xvY2sgPSBtYWtlQ2hpbGQoXHJcbiAgICBcInBcIixcclxuICAgIHVuZGVmaW5lZCxcclxuICAgIHVuZGVmaW5lZCxcclxuICAgIGBNb24tVGh1cnM6OGFtLThwbVxyXG4gICAgRnJpLVN1bjo4YW0tMTFwbWBcclxuICApO1xyXG4gIGNvbnN0IGNsb2NrUGljID0gcGljRWxlbWVudENyZWF0ZShjbG9jaywgXCJjbG9ja1wiLCBbXCJ3LThcIiwgXCJvYmplY3QtY29udGFpblwiXSk7XHJcbiAgbWFpbkRpdi5hcHBlbmRDaGlsZChkaXZDcmVhdGlvbihjbG9ja1BpYywgY29udGFjdENsb2NrKSk7XHJcblxyXG4gIGNvbnN0IGNvbnRhY3RQaG9uZSA9IG1ha2VDaGlsZChcInBcIiwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIGAoMzMzKS04ODgtMzMzM2ApO1xyXG4gIGNvbnN0IGNhbGxQaWMgPSBwaWNFbGVtZW50Q3JlYXRlKGNhbGwsIFwiY2FsbFwiLCBbXCJ3LTdcIiwgXCJvYmplY3QtY29udGFpblwiXSk7XHJcbiAgbWFpbkRpdi5hcHBlbmRDaGlsZChkaXZDcmVhdGlvbihjYWxsUGljLCBjb250YWN0UGhvbmUpKTtcclxuXHJcbiAgY29uc3QgY29udGFjdEVtYWlsID0gbWFrZUNoaWxkKFxyXG4gICAgXCJwXCIsXHJcbiAgICB1bmRlZmluZWQsXHJcbiAgICBbXCJiZy1zbGF0ZS0xMDBcIl0sXHJcbiAgICBcIk1lc3NhZ2UgdXNcIlxyXG4gICk7XHJcbiAgY29uc3QgZW1haWxQaWMgPSBwaWNFbGVtZW50Q3JlYXRlKGVtYWlsLCBcImVtYWlsXCIsIFtcInctOFwiXSk7XHJcblxyXG4gIGNvbnN0IGZvcm0gPSBtYWtlQ2hpbGQoXCJmb3JtXCIsIFwiY29udGFjdEZvcm1cIiwgdW5kZWZpbmVkKTtcclxuICBjb25zdCB0ZXh0YXJlYSA9IGA8dGV4dGFyZWEgaWQ9XCJteVRleHRhcmVhXCIgcm93cz1cIjRcIiBjb2xzPVwiNTBcIj48L3RleHRhcmVhPmA7XHJcbiAgY29uc3QgaHRtbCA9IGBcclxuICA8ZGl2IGNsYXNzPSdiZy1zbGF0ZS01MDAnPlxyXG4gICAgPGxhYmVsIGZvcj1cIm5hbWVcIj5GdWxsIE5hbWU8L2xhYmVsPlxyXG4gICAgPGlucHV0IGlkPVwibmFtZVwiPlxyXG4gIDwvZGl2PlxyXG4gIDxkaXY+XHJcbiAgICA8bGFiZWwgZm9yPVwiZW1haWxcIj5FbWFpbDwvbGFiZWw+XHJcbiAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgaWQ9XCJlbWFpbFwiPlxyXG4gIDwvZGl2PlxyXG4gIDxkaXY+XHJcbiAgICA8bGFiZWwgZm9yPVwibWVzc2FnZVwiPlR5cGUgdGhlIG1lc3NhZ2U8L2xhYmVsPlxyXG4gICAgJHt0ZXh0YXJlYX1cclxuICAgIDx0ZXh0YXJlYSBpZD1cIjEzMlwiIG5hbWU9XCJtZXNzYWdlXCIgcmVxdWlyZWQ+ZGZkc2ZkczwvdGV4dGFyZWE+XHJcbiAgICA8c3Bhbj5UeXBlIHlvdXIgbWVzc2FnZS4uLjwvc3Bhbj5cclxuICA8L2Rpdj5cclxuICBgO1xyXG4gIGZvcm0uc2V0SFRNTChodG1sKTtcclxuICBtYWluRGl2LmFwcGVuZENoaWxkKGZvcm0pO1xyXG4gIHJldHVybiBtYWluRGl2O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29udGFjdFBhZ2U7XHJcbiIsImltcG9ydCBwZXBwZXIgZnJvbSBcIi4uL3BpY3MvcGVwcGVyLnBuZ1wiO1xyXG5pbXBvcnQgbWFrZUNoaWxkIGZyb20gXCIuLi9mdW5jdGlvbnMvbWFrZUNoaWxkXCI7XHJcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XHJcblxyXG5jb25zdCBtYWtlSGVhZGVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IGRpdkhlYWRlciA9IG1ha2VDaGlsZChcImhlYWRlclwiLCBcImhlYWRlclwiLCBbXHJcbiAgICBcImZsZXhcIixcclxuICAgIFwiaXRlbXMtY2VudGVyXCIsXHJcbiAgICBcIm0tM1wiLFxyXG4gICAgXCJzdGlja3lcIixcclxuICAgIFwidG9wLTNcIixcclxuICBdKTtcclxuICBjb25zdCBsb2dvRGl2ID0gbWFrZUNoaWxkKFwiZGl2XCIsIFwibG9nb0RpdlwiLCBbXHJcbiAgICBcImZsZXhcIixcclxuICAgIFwiaXRlbXMtY2VudGVyXCIsXHJcbiAgICBcImZsZXgtY29sXCIsXHJcbiAgICBcInNtOmZsZXgtcm93XCIsXHJcbiAgICBcImN1cnNvci1wb2ludGVyXCIsXHJcbiAgXSk7XHJcbiAgY29uc3QgbG9nb0ltZyA9IG1ha2VDaGlsZChcImltZ1wiLCBcImltZ1wiLCBbXCJ3LThcIiwgXCJoLThcIl0pO1xyXG4gIGNvbnN0IGJyYW5kTmFtZSA9IG1ha2VDaGlsZChcclxuICAgIFwiaDFcIixcclxuICAgIFwiYnJhbmROYW1lXCIsXHJcbiAgICBbXCJmb250LWJvbGRcIiwgXCJ1cHBlcmNhc2VcIiwgXCJtbC0wXCIsIFwic206bWwtMlwiLCBcInRleHQteHNcIiwgXCJzbTp0ZXh0LWJhc2VcIl0sXHJcbiAgICBcIlNhdm9yeSBEZWxpZ2h0c1wiXHJcbiAgKTtcclxuICBsb2dvSW1nLnNyYyA9IHBlcHBlcjtcclxuICBjb25zdCBidXR0b25EaXYgPSBtYWtlQ2hpbGQoXCJkaXZcIiwgXCJidG5EaXZcIiwgW1xyXG4gICAgXCJmbGV4XCIsXHJcbiAgICBcImp1c3RpZnktY2VudGVyXCIsXHJcbiAgICBcImdyb3dcIixcclxuICAgIFwibGc6Z2FwLTEwXCIsXHJcbiAgICBcInNtOmdhcC00XCIsXHJcbiAgICBcImdhcC00XCIsXHJcbiAgICBcImxnOnRleHQtMnhsXCIsXHJcbiAgXSk7XHJcbiAgY29uc3QgYnV0dG9ucyA9ICgpID0+IHtcclxuICAgIGNvbnN0IGJ0bnMgPSBbXCJIb21lXCIsIFwiTWVudVwiLCBcIkNvbnRhY3RzXCJdO1xyXG4gICAgYnRucy5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICAgIGJ1dHRvbkRpdi5hcHBlbmRDaGlsZChcclxuICAgICAgICBtYWtlQ2hpbGQoXHJcbiAgICAgICAgICBcImJ1dHRvblwiLFxyXG4gICAgICAgICAgZSxcclxuICAgICAgICAgIFtcclxuICAgICAgICAgICAgXCJob3Zlcjp0ZXh0LW9yYW5nZS02MDBcIixcclxuICAgICAgICAgICAgXCJ0cmFuc2l0aW9uXCIsXHJcbiAgICAgICAgICAgIFwiZWFzZS1pbi1vdXRcIixcclxuICAgICAgICAgICAgXCJkZWxheS01MFwiLFxyXG4gICAgICAgICAgICBcImhvdmVyOi10cmFuc2xhdGUteS1weFwiLFxyXG4gICAgICAgICAgICBcImhvdmVyOnNjYWxlLTExMFwiLFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICAgIGVcclxuICAgICAgICApXHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICB9O1xyXG4gIGJ1dHRvbnMoKTtcclxuXHJcbiAgbG9nb0Rpdi5hcHBlbmRDaGlsZChsb2dvSW1nKTtcclxuICBsb2dvRGl2LmFwcGVuZENoaWxkKGJyYW5kTmFtZSk7XHJcbiAgZGl2SGVhZGVyLmFwcGVuZENoaWxkKGxvZ29EaXYpO1xyXG4gIGRpdkhlYWRlci5hcHBlbmRDaGlsZChidXR0b25EaXYpO1xyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZGl2SGVhZGVyKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1ha2VIZWFkZXI7XHJcbiIsImltcG9ydCBtYWtlQ2hpbGQgZnJvbSBcIi4uL2Z1bmN0aW9ucy9tYWtlQ2hpbGRcIjtcclxuaW1wb3J0IG1lbnVQYWdlIGZyb20gXCIuL21lbnVQYWdlLmpzXCI7XHJcbmNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcclxuICBjb25zdCBob21lTWFpbkNvbnRlbnQgPSBtYWtlQ2hpbGQoXCJkaXZcIiwgXCJob21lTWFpbkNvbnRlbnRcIiwgW1xyXG4gICAgXCJtLWF1dG9cIixcclxuICAgIFwibWQ6bWwtWzQwdnddXCIsXHJcbiAgICBcIm1sLVsyMHZ3XVwiLFxyXG4gICAgXCJtci0xMFwiLFxyXG4gICAgXCJtYXgtWzQyNXB4XTptLWF1dG9cIixcclxuICAgIFwicHgtMVwiLFxyXG4gICAgXCJmbGV4XCIsXHJcbiAgICBcImZsZXgtY29sXCIsXHJcbiAgICBcIml0ZW1zLWNlbnRlclwiLFxyXG4gIF0pO1xyXG4gIGNvbnN0IGhlYWRlckluTWFpbkNvbnRlbnQgPSBtYWtlQ2hpbGQoXHJcbiAgICBcImgxXCIsXHJcbiAgICBcImhlYWRlckluTWFpbkNvbnRlbnRcIixcclxuICAgIFtcclxuICAgICAgXCJtZDp0ZXh0LTZ4bFwiLFxyXG4gICAgICBcInRleHQtNXhsXCIsXHJcbiAgICAgIFwiZm9udC1ibGFja1wiLFxyXG4gICAgICBcInRleHQtY2VudGVyXCIsXHJcbiAgICAgIFwiYmctZ3JhZGllbnQtdG8tclwiLFxyXG4gICAgICBcImZyb20tcmVkLTUwMFwiLFxyXG4gICAgICBcInRvLXB1cnBsZS01MDBcIixcclxuICAgICAgXCJ0ZXh0LXRyYW5zcGFyZW50XCIsXHJcbiAgICAgIFwiYmctY2xpcC10ZXh0XCIsXHJcbiAgICAgIFwibXQtOFwiLFxyXG4gICAgICBcInBiLTEwXCIsXHJcbiAgICBdLFxyXG4gICAgXCJXaGVyZSBldmVyeSBiaXRlIGlzIGEgZGVsaWdodFwiXHJcbiAgKTtcclxuICBjb25zdCB3ZWxjb21lUGFyID0gbWFrZUNoaWxkKFxyXG4gICAgXCJwXCIsXHJcbiAgICBcIndlbGNvbWVQYXJcIixcclxuICAgIFtcInRleHQtMnhsXCIsIFwidGV4dC1jZW50ZXJcIiwgXCJweC04XCJdLFxyXG4gICAgYFRoYW5rIHlvdSBmb3IgY2hvb3NpbmcgU2F2b3J5IERlbGlnaHRzLiBXZSdyZSBleGNpdGVkIHRvIHNoYXJlIG91ciBwYXNzaW9uIGZvciBkZWxpY2lvdXMgZm9vZCB3aXRoIHlvdS5gXHJcbiAgKTtcclxuICBjb25zdCBidG5PcmRlciA9IG1ha2VDaGlsZChcclxuICAgIFwiYnV0dG9uXCIsXHJcbiAgICBcImJ0bk9yZGVyXCIsXHJcbiAgICBbXHJcbiAgICAgIFwidGV4dC13aGl0ZVwiLFxyXG4gICAgICBcImJnLWdyYWRpZW50LXRvLWJyXCIsXHJcbiAgICAgIFwiZnJvbS1waW5rLTUwMFwiLFxyXG4gICAgICBcInRvLW9yYW5nZS00MDBcIixcclxuICAgICAgXCJob3ZlcjpiZy1ncmFkaWVudC10by1ibFwiLFxyXG4gICAgICBcImZvY3VzOnJpbmctNFwiLFxyXG4gICAgICBcImZvY3VzOm91dGxpbmUtbm9uZVwiLFxyXG4gICAgICBcImZvY3VzOnJpbmctcGluay0yMDBcIixcclxuICAgICAgXCJmb250LW1lZGl1bVwiLFxyXG4gICAgICBcInJvdW5kZWQtbGdcIixcclxuICAgICAgXCJ0ZXh0LXNtXCIsXHJcbiAgICAgIFwicHgtNVwiLFxyXG4gICAgICBcInB5LTIuNVwiLFxyXG4gICAgICBcInRleHQtY2VudGVyXCIsXHJcbiAgICAgIFwiYmxvY2tcIixcclxuICAgICAgXCJ3LWZpdFwiLFxyXG4gICAgICBcIm10LTVcIixcclxuICAgIF0sXHJcbiAgICBcIk9yZGVyIE5vd1wiXHJcbiAgKTtcclxuICBidG5PcmRlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgIGxldCBvbGRDaGlsZCA9IG1haW4uY2hpbGROb2Rlc1sxXTtcclxuICAgIG1haW4ucmVwbGFjZUNoaWxkKG1lbnVQYWdlKCksIG9sZENoaWxkKTtcclxuICB9KTtcclxuICBob21lTWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVySW5NYWluQ29udGVudCk7XHJcbiAgaG9tZU1haW5Db250ZW50LmFwcGVuZENoaWxkKHdlbGNvbWVQYXIpO1xyXG4gIGhvbWVNYWluQ29udGVudC5hcHBlbmRDaGlsZChidG5PcmRlcik7XHJcbiAgcmV0dXJuIGhvbWVNYWluQ29udGVudDtcclxufVxyXG4iLCJpbXBvcnQgYnJlYWtmYXN0IGZyb20gXCIuLi9waWNzL21lbnUvYnJlYWtmYXN0LnBuZ1wiO1xyXG5pbXBvcnQgYnVyZ2VyIGZyb20gXCIuLi9waWNzL21lbnUvYnVyZ2VyLnBuZ1wiO1xyXG5pbXBvcnQgY2FrZSBmcm9tIFwiLi4vcGljcy9tZW51L2Nha2UucG5nXCI7XHJcbmltcG9ydCBjaGlja2VuIGZyb20gXCIuLi9waWNzL21lbnUvY2hpY2tlbi5wbmdcIjtcclxuaW1wb3J0IGZyZW5jaEZyaWVzIGZyb20gXCIuLi9waWNzL21lbnUvZnJlbmNoRnJpZXMucG5nXCI7XHJcbmltcG9ydCBob3REb2cgZnJvbSBcIi4uL3BpY3MvbWVudS9ob3REb2cucG5nXCI7XHJcbmltcG9ydCBub29kbGVzIGZyb20gXCIuLi9waWNzL21lbnUvbm9vZGxlcy5wbmdcIjtcclxuaW1wb3J0IHBpenphIGZyb20gXCIuLi9waWNzL21lbnUvcGl6emEucG5nXCI7XHJcbmltcG9ydCBzYW5kd2ljaCBmcm9tIFwiLi4vcGljcy9tZW51L3NhbmR3aWNoLnBuZ1wiO1xyXG5pbXBvcnQgdGFjbyBmcm9tIFwiLi4vcGljcy9tZW51L3RhY28ucG5nXCI7XHJcblxyXG5pbXBvcnQgbWFrZUNoaWxkIGZyb20gXCIuLi9mdW5jdGlvbnMvbWFrZUNoaWxkXCI7XHJcblxyXG5jb25zdCBtZW51SXRlbU1ha2VyID0gKGRpc2hOYW1lLCBkaXNoRGVzY3JpcHRpb24sIHByaWNlLCBzcmMpID0+IHtcclxuICBsZXQgbWVudUl0ZW1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIG1lbnVJdGVtRGl2LmNsYXNzTGlzdC5hZGQoXHJcbiAgICBcImZsZXhcIixcclxuICAgIFwiZ2FwLXgtNFwiLFxyXG4gICAgXCJteC00XCIsXHJcbiAgICBcImJnLXNsYXRlLTEwMFwiLFxyXG4gICAgXCJyb3VuZGVkLWxnXCIsXHJcbiAgICBcInB4LTVcIixcclxuICAgIFwicHktMlwiLFxyXG4gICAgXCJob3ZlcjpiZy1zbGF0ZS0yMDBcIixcclxuICAgIFwiaG92ZXI6c2NhbGUtMTA1XCJcclxuICApO1xyXG4gIGxldCBtZW51SXRlbVBpYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgbWVudUl0ZW1QaWMuY2xhc3NMaXN0LmFkZChcIm9iamVjdC1jb250YWluXCIsIFwibWF4LXctZnVsbFwiKTtcclxuICBsZXQgbWVudUl0ZW1EZXNjRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBtZW51SXRlbURlc2NEaXYuY2xhc3NMaXN0LmFkZChcImZsZXhcIiwgXCJmbGV4LWNvbFwiKTtcclxuICBsZXQgbWVudUl0ZW1EZXNjSGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcclxuICBtZW51SXRlbURlc2NIZWFkLmNsYXNzTGlzdC5hZGQoXCIzeGxcIiwgXCJmb250LWJvbGRcIiwgXCJtYi0yXCIpO1xyXG4gIGxldCBtZW51SXRlbURlc2NJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgbWVudUl0ZW1EZXNjSW5mby5jbGFzc0xpc3QuYWRkKFwiZmxleC0xXCIpO1xyXG4gIGxldCBtZW51SXRlbURlc2NQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIG1lbnVJdGVtRGVzY1ByaWNlLmNsYXNzTGlzdC5hZGQoXCJzZWxmLWVuZFwiLCBcIjJ4bFwiLCBcImZvbnQtYm9sZFwiKTtcclxuICBtZW51SXRlbURlc2NIZWFkLnRleHRDb250ZW50ID0gZGlzaE5hbWU7XHJcbiAgbWVudUl0ZW1EZXNjSW5mby50ZXh0Q29udGVudCA9IGRpc2hEZXNjcmlwdGlvbjtcclxuICBtZW51SXRlbURlc2NQcmljZS50ZXh0Q29udGVudCA9IHByaWNlO1xyXG4gIG1lbnVJdGVtUGljLnNyYyA9IHNyYztcclxuICBtZW51SXRlbURlc2NEaXYuYXBwZW5kQ2hpbGQobWVudUl0ZW1EZXNjSGVhZCk7XHJcbiAgbWVudUl0ZW1EZXNjRGl2LmFwcGVuZENoaWxkKG1lbnVJdGVtRGVzY0luZm8pO1xyXG4gIG1lbnVJdGVtRGVzY0Rpdi5hcHBlbmRDaGlsZChtZW51SXRlbURlc2NQcmljZSk7XHJcbiAgbWVudUl0ZW1EaXYuYXBwZW5kQ2hpbGQobWVudUl0ZW1QaWMpO1xyXG4gIG1lbnVJdGVtRGl2LmFwcGVuZENoaWxkKG1lbnVJdGVtRGVzY0Rpdik7XHJcbiAgcmV0dXJuIG1lbnVJdGVtRGl2O1xyXG59O1xyXG5cclxuY29uc3QgbWVudVBhZ2UgPSAoKSA9PiB7XHJcbiAgbGV0IG1lbnUgPSBtYWtlQ2hpbGQoXCJkaXZcIiwgXCJtZW51Q29udGFpbmVyXCIsIFtcclxuICAgIFwiZ3JpZFwiLFxyXG4gICAgXCJnYXAtNFwiLFxyXG4gICAgXCJncmlkLWNvbHMtYXV0by1maXRcIixcclxuICAgIFwibWQ6bWF4LXctNHhsXCIsXHJcbiAgICBcIm1kOm1sLVs0MHZ3XVwiLFxyXG4gICAgXCJtZDptci0xMFwiLFxyXG4gICAgXCJweS01XCIsXHJcbiAgICBcInJvdW5kZWQtbGdcIixcclxuICBdKTtcclxuICBtZW51LmFwcGVuZENoaWxkKFxyXG4gICAgbWVudUl0ZW1NYWtlcihcclxuICAgICAgXCJNb3JuaW5nIFN1bnJpc2UgRGVsaWdodFwiLFxyXG4gICAgICBcIldha2UgdXAgdG8gYSBwbGF0ZSBvZiBmbHVmZnkgc2NyYW1ibGVkIGVnZ3MsIHNpenpsaW5nIGJhY29uLCBnb2xkZW4gaGFzaCBicm93bnMsIGFuZCBhIHNpZGUgb2YgdG9hc3RlZCBicmVhZCwgdGhlIHBlcmZlY3Qgc3RhcnQgdG8geW91ciBkYXkuXCIsXHJcbiAgICAgIFwiJDhcIixcclxuICAgICAgYnJlYWtmYXN0XHJcbiAgICApXHJcbiAgKTtcclxuICBtZW51LmFwcGVuZENoaWxkKFxyXG4gICAgbWVudUl0ZW1NYWtlcihcclxuICAgICAgXCJGbGFtZS1HcmlsbGVkIERlbGlnaHRcIixcclxuICAgICAgXCJTYXZvciB0aGUgcGVyZmVjdCBiaXRlOiBKdWljeSBiZWVmLCBtZWx0ZWQgY2hlZXNlLCBjcmlzcCBsZXR0dWNlLCByaXBlIHRvbWF0b2VzLCBhbmQgdGFuZ3kgcGlja2xlcywgYWxsIGluIGEgdG9hc3RlZCBidW4uXCIsXHJcbiAgICAgIFwiJDEyXCIsXHJcbiAgICAgIGJ1cmdlclxyXG4gICAgKVxyXG4gICk7XHJcbiAgbWVudS5hcHBlbmRDaGlsZChcclxuICAgIG1lbnVJdGVtTWFrZXIoXHJcbiAgICAgIFwiVmVsdmV0IERyZWFtIERlbGlnaHRcIixcclxuICAgICAgXCIgRXhwZXJpZW5jZSBwdXJlIGJsaXNzIHdpdGggdGhpcyBsdXNjaW91cywgbW9pc3QgcmVkIHZlbHZldCBjYWtlLCBsYXllcmVkIHdpdGggY3JlYW15IGZyb3N0aW5nIGFuZCBoaW50cyBvZiBjaG9jb2xhdGUsIGNyZWF0aW5nIGFuIGlycmVzaXN0aWJsZSBzeW1waG9ueSBvZiBmbGF2b3JzLlwiLFxyXG4gICAgICBcIiQ2XCIsXHJcbiAgICAgIGNha2VcclxuICAgIClcclxuICApO1xyXG4gIG1lbnUuYXBwZW5kQ2hpbGQoXHJcbiAgICBtZW51SXRlbU1ha2VyKFxyXG4gICAgICBcIlplc3R5IENoaWNrZW4gSW5mdXNpb25cIixcclxuICAgICAgXCJTYXRpc2Z5IHlvdXIgY3JhdmluZ3Mgd2l0aCB0ZW5kZXIsIGZsYXZvcmZ1bCBjaGlja2VuLCBzZXJ2ZWQgd2l0aCB5b3VyIGNob2ljZSBvZiBzaWRlcyBmb3IgYSBtb3V0aHdhdGVyaW5nIGFuZCBjb21wbGV0ZSBtZWFsLlwiLFxyXG4gICAgICBcIiQxMVwiLFxyXG4gICAgICBjaGlja2VuXHJcbiAgICApXHJcbiAgKTtcclxuICBtZW51LmFwcGVuZENoaWxkKFxyXG4gICAgbWVudUl0ZW1NYWtlcihcclxuICAgICAgXCJHb2xkZW4gQ3J1bmNoIFNlbnNhdGlvblwiLFxyXG4gICAgICBcIkRlbGlnaHQgaW4gY3Jpc3B5LCBnb2xkZW4gZnJpZXMsIHBlcmZlY3RseSBzZWFzb25lZCBhbmQgaXJyZXNpc3RpYmx5IGFkZGljdGl2ZSwgcHJvdmlkaW5nIGEgc2F0aXNmeWluZyBjcnVuY2ggd2l0aCBldmVyeSBiaXRlLlwiLFxyXG4gICAgICBcIiQ1XCIsXHJcbiAgICAgIGZyZW5jaEZyaWVzXHJcbiAgICApXHJcbiAgKTtcclxuICBtZW51LmFwcGVuZENoaWxkKFxyXG4gICAgbWVudUl0ZW1NYWtlcihcclxuICAgICAgXCJTaXp6bGluJyBGcmFua2Z1cnRlciBGZWFzdFwiLFxyXG4gICAgICBcIkEgZ3JpbGxlZCBob3QgZG9nIG5lc3RsZWQgaW4gYSBzb2Z0IGJ1biwgdG9wcGVkIHdpdGggc2F2b3J5IGNvbmRpbWVudHMgZm9yIGEgYnVyc3Qgb2YgZmxhdm9yIHRoYXQgd2lsbCBzYXRpc2Z5IHlvdXIgY3JhdmluZ3Mgd2l0aCBldmVyeSBqdWljeSBiaXRlLlwiLFxyXG4gICAgICBcIiQ0XCIsXHJcbiAgICAgIGhvdERvZ1xyXG4gICAgKVxyXG4gICk7XHJcbiAgbWVudS5hcHBlbmRDaGlsZChcclxuICAgIG1lbnVJdGVtTWFrZXIoXHJcbiAgICAgIFwiU2F2b3J5IE5vb2RsZSBTeW1waG9ueVwiLFxyXG4gICAgICBcIkEgdGFudGFsaXppbmcgY29tYmluYXRpb24gb2YgY29va2VkIG5vb2RsZXMsIGFyb21hdGljIHNhdWNlLCBhbmQgdmlicmFudCB2ZWdldGFibGVzIHRoYXQgY3JlYXRlIGFuIGV4cGxvc2lvbiBvZiBmbGF2b3JzIGluIGV2ZXJ5IGZvcmtmdWwuXCIsXHJcbiAgICAgIFwiJDEwXCIsXHJcbiAgICAgIG5vb2RsZXNcclxuICAgIClcclxuICApO1xyXG4gIG1lbnUuYXBwZW5kQ2hpbGQoXHJcbiAgICBtZW51SXRlbU1ha2VyKFxyXG4gICAgICBcIkZpZXJ5IFBlcHBlcm9uaSBFeHBsb3Npb25cIixcclxuICAgICAgXCJJbmR1bGdlIGluIGEgdGFudGFsaXppbmcgYmxlbmQgb2YgZ29vZXkgbWVsdGVkIGNoZWVzZSwgc2F2b3J5IHBlcHBlcm9uaSwgYW5kIGEgbWVkbGV5IG9mIHZpYnJhbnQgdmVnZ2llcyBhdG9wIGEgY3Jpc3B5IGNydXN0LCBkZWxpdmVyaW5nIGEgYnVyc3Qgb2YgZmxhdm9ycyBpbiBldmVyeSBiaXRlLlwiLFxyXG4gICAgICBcIiQ5XCIsXHJcbiAgICAgIHBpenphXHJcbiAgICApXHJcbiAgKTtcclxuICBtZW51LmFwcGVuZENoaWxkKFxyXG4gICAgbWVudUl0ZW1NYWtlcihcclxuICAgICAgXCJIZWFydHkgU3RhY2sgU3VwcmVtZVwiLFxyXG4gICAgICBcIkEgZGVsaWNpb3VzIGNvbWJpbmF0aW9uIG9mIHByZW1pdW0gbWVhdHMsIG1lbHRlZCBjaGVlc2UsIGZyZXNoIHZlZ2dpZXMsIGFuZCB6ZXN0eSBjb25kaW1lbnRzLCBjcmVhdGluZyBhIG1vdXRod2F0ZXJpbmcgc2FuZHdpY2ggdGhhdCdzIHN1cmUgdG8gc2F0aXNmeS5cIixcclxuICAgICAgXCIkNlwiLFxyXG4gICAgICBzYW5kd2ljaFxyXG4gICAgKVxyXG4gICk7XHJcbiAgbWVudS5hcHBlbmRDaGlsZChcclxuICAgIG1lbnVJdGVtTWFrZXIoXHJcbiAgICAgIFwiWmVzdHkgRmllc3RhIFRhY29cIixcclxuICAgICAgXCJCaXRlIGludG8gYSBmaWVzdGEgb2YgZmxhdm9ycyB3aXRoIHRlbmRlciwgc2Vhc29uZWQgbWVhdCwgdmlicmFudCB0b3BwaW5ncywgYW5kIHplc3R5IHNhdWNlcywgYWxsIHdyYXBwZWQgaW4gYSB3YXJtIHRvcnRpbGxhIGZvciBhIG1vdXRod2F0ZXJpbmcgdGFjbyBleHBlcmllbmNlLlwiLFxyXG4gICAgICBcIiQ5XCIsXHJcbiAgICAgIHRhY29cclxuICAgIClcclxuICApO1xyXG4gIHJldHVybiBtZW51O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWVudVBhZ2U7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLy8gaW1wb3J0IGYgZnJvbSBcIi4vbWFpblBhZ2VcIjtcclxuaW1wb3J0IFwiLi4vc3R5bGUvaW5kZXguY3NzXCI7XHJcbmltcG9ydCBtYWtlSGVhZGVyIGZyb20gXCIuL2hlYWRlci5qc1wiO1xyXG5pbXBvcnQgbWFpblBhZ2UgZnJvbSBcIi4vbWFpblBhZ2UuanNcIjtcclxuaW1wb3J0IG1lbnVQYWdlIGZyb20gXCIuL21lbnVQYWdlLmpzXCI7XHJcbmltcG9ydCBjb250YWN0UGFnZSBmcm9tIFwiLi9jb250YWN0UGFnZS5qc1wiO1xyXG5tYWtlSGVhZGVyKCk7XHJcbmRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcImJnLWltYWdlXCIpO1xyXG5jb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcclxubWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpblBhZ2UoKSk7XHJcblxyXG5jb25zdCBuYXZCdG5MaXN0ZW5lciA9ICgpID0+IHtcclxuICBjb25zdCBidG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNidG5EaXYgPiBidXR0b25cIik7XHJcbiAgY29uc3QgYnRuTWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuT3JkZXJcIik7XHJcbiAgYnRucy5mb3JFYWNoKChlKSA9PiBlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBidWlsZFBhZ2UpKTtcclxuICAvLyBidG5PcmRlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYnVpbGRQYWdlKTtcclxuXHJcbiAgZnVuY3Rpb24gYnVpbGRQYWdlKGUpIHtcclxuICAgIGxldCBvbGRDaGlsZCA9IG1haW5Db250ZW50LmNoaWxkTm9kZXNbMV07XHJcbiAgICBjb25zb2xlLmxvZyhvbGRDaGlsZCk7XHJcbiAgICBpZiAoZS50YXJnZXQuaWQgPT09IFwiSG9tZVwiKSB7XHJcbiAgICAgIG1haW5Db250ZW50LnJlcGxhY2VDaGlsZChtYWluUGFnZSgpLCBvbGRDaGlsZCk7XHJcbiAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LmlkID09PSBcIk1lbnVcIiB8fCBlLnRhcmdldC5pZCA9PT0gXCJidG5PcmRlclwiKSB7XHJcbiAgICAgIG1haW5Db250ZW50LnJlcGxhY2VDaGlsZChtZW51UGFnZSgpLCBvbGRDaGlsZCk7XHJcbiAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LmlkID09PSBcIkNvbnRhY3RzXCIpIHtcclxuICAgICAgbWFpbkNvbnRlbnQucmVwbGFjZUNoaWxkKGNvbnRhY3RQYWdlKCksIG9sZENoaWxkKTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG5uYXZCdG5MaXN0ZW5lcigpO1xyXG5cclxuY29uc3QgcGFnZUxvYWRlciA9ICgpID0+IHt9O1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=