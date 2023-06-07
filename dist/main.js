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
___CSS_LOADER_EXPORT___.push([module.id, "/*\n! tailwindcss v3.3.2 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n5. Use the user's configured `sans` font-feature-settings by default.\n6. Use the user's configured `sans` font-variation-settings by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 4 */\n  font-feature-settings: normal; /* 5 */\n  font-variation-settings: normal; /* 6 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  font-weight: inherit; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/* Make elements with the HTML hidden attribute stay hidden by default */\n[hidden] {\n  display: none;\n}\n\n*, ::before, ::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\r\n.absolute {\n  position: absolute;\n}\r\n.relative {\n  position: relative;\n}\r\n.sticky {\n  position: sticky;\n}\r\n.top-0 {\n  top: 0px;\n}\r\n.top-3 {\n  top: 0.75rem;\n}\r\n.-z-10 {\n  z-index: -10;\n}\r\n.z-0 {\n  z-index: 0;\n}\r\n.z-10 {\n  z-index: 10;\n}\r\n.m-0 {\n  margin: 0px;\n}\r\n.m-2 {\n  margin: 0.5rem;\n}\r\n.m-3 {\n  margin: 0.75rem;\n}\r\n.m-5 {\n  margin: 1.25rem;\n}\r\n.m-auto {\n  margin: auto;\n}\r\n.mx-3 {\n  margin-left: 0.75rem;\n  margin-right: 0.75rem;\n}\r\n.mx-4 {\n  margin-left: 1rem;\n  margin-right: 1rem;\n}\r\n.mb-2 {\n  margin-bottom: 0.5rem;\n}\r\n.mb-6 {\n  margin-bottom: 1.5rem;\n}\r\n.ml-0 {\n  margin-left: 0px;\n}\r\n.ml-\\[20vw\\] {\n  margin-left: 20vw;\n}\r\n.mr-10 {\n  margin-right: 2.5rem;\n}\r\n.mt-2 {\n  margin-top: 0.5rem;\n}\r\n.mt-4 {\n  margin-top: 1rem;\n}\r\n.mt-5 {\n  margin-top: 1.25rem;\n}\r\n.mt-8 {\n  margin-top: 2rem;\n}\r\n.block {\n  display: block;\n}\r\n.flex {\n  display: flex;\n}\r\n.grid {\n  display: grid;\n}\r\n.h-8 {\n  height: 2rem;\n}\r\n.w-16 {\n  width: 4rem;\n}\r\n.w-7 {\n  width: 1.75rem;\n}\r\n.w-8 {\n  width: 2rem;\n}\r\n.w-fit {\n  width: -moz-fit-content;\n  width: fit-content;\n}\r\n.w-full {\n  width: 100%;\n}\r\n.max-w-5xl {\n  max-width: 64rem;\n}\r\n.max-w-full {\n  max-width: 100%;\n}\r\n.flex-1 {\n  flex: 1 1 0%;\n}\r\n.grow {\n  flex-grow: 1;\n}\r\n.grow-0 {\n  flex-grow: 0;\n}\r\n.origin-\\[0\\] {\n  transform-origin: 0;\n}\r\n.-translate-y-6 {\n  --tw-translate-y: -1.5rem;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\r\n.scale-75 {\n  --tw-scale-x: .75;\n  --tw-scale-y: .75;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\r\n.transform {\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\r\n.cursor-pointer {\n  cursor: pointer;\n}\r\n.resize-none {\n  resize: none;\n}\r\n.appearance-none {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n}\r\n.grid-cols-auto-fit {\n  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));\n}\r\n.flex-col {\n  flex-direction: column;\n}\r\n.items-center {\n  align-items: center;\n}\r\n.items-stretch {\n  align-items: stretch;\n}\r\n.justify-center {\n  justify-content: center;\n}\r\n.justify-items-center {\n  justify-items: center;\n}\r\n.gap-4 {\n  gap: 1rem;\n}\r\n.gap-x-4 {\n  -moz-column-gap: 1rem;\n       column-gap: 1rem;\n}\r\n.self-end {\n  align-self: flex-end;\n}\r\n.rounded {\n  border-radius: 0.25rem;\n}\r\n.rounded-lg {\n  border-radius: 0.5rem;\n}\r\n.border {\n  border-width: 1px;\n}\r\n.border-0 {\n  border-width: 0px;\n}\r\n.border-b-2 {\n  border-bottom-width: 2px;\n}\r\n.border-black {\n  --tw-border-opacity: 1;\n  border-color: rgb(0 0 0 / var(--tw-border-opacity));\n}\r\n.border-orange-300 {\n  --tw-border-opacity: 1;\n  border-color: rgb(253 186 116 / var(--tw-border-opacity));\n}\r\n.bg-orange-200 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(254 215 170 / var(--tw-bg-opacity));\n}\r\n.bg-slate-100 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(241 245 249 / var(--tw-bg-opacity));\n}\r\n.bg-transparent {\n  background-color: transparent;\n}\r\n.bg-gradient-to-br {\n  background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));\n}\r\n.bg-gradient-to-r {\n  background-image: linear-gradient(to right, var(--tw-gradient-stops));\n}\r\n.from-pink-500 {\n  --tw-gradient-from: #ec4899 var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(236 72 153 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\r\n.from-red-500 {\n  --tw-gradient-from: #ef4444 var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(239 68 68 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\r\n.to-orange-400 {\n  --tw-gradient-to: #fb923c var(--tw-gradient-to-position);\n}\r\n.to-purple-500 {\n  --tw-gradient-to: #a855f7 var(--tw-gradient-to-position);\n}\r\n.bg-clip-text {\n  -webkit-background-clip: text;\n          background-clip: text;\n}\r\n.object-contain {\n  -o-object-fit: contain;\n     object-fit: contain;\n}\r\n.p-3 {\n  padding: 0.75rem;\n}\r\n.p-4 {\n  padding: 1rem;\n}\r\n.px-0 {\n  padding-left: 0px;\n  padding-right: 0px;\n}\r\n.px-1 {\n  padding-left: 0.25rem;\n  padding-right: 0.25rem;\n}\r\n.px-2 {\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n}\r\n.px-5 {\n  padding-left: 1.25rem;\n  padding-right: 1.25rem;\n}\r\n.px-8 {\n  padding-left: 2rem;\n  padding-right: 2rem;\n}\r\n.py-1 {\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n}\r\n.py-2 {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\r\n.py-2\\.5 {\n  padding-top: 0.625rem;\n  padding-bottom: 0.625rem;\n}\r\n.py-5 {\n  padding-top: 1.25rem;\n  padding-bottom: 1.25rem;\n}\r\n.pb-10 {\n  padding-bottom: 2.5rem;\n}\r\n.pb-2 {\n  padding-bottom: 0.5rem;\n}\r\n.pl-3 {\n  padding-left: 0.75rem;\n}\r\n.pt-5 {\n  padding-top: 1.25rem;\n}\r\n.text-center {\n  text-align: center;\n}\r\n.text-2xl {\n  font-size: 1.5rem;\n  line-height: 2rem;\n}\r\n.text-5xl {\n  font-size: 3rem;\n  line-height: 1;\n}\r\n.text-sm {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\r\n.text-xl {\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n}\r\n.text-xs {\n  font-size: 0.75rem;\n  line-height: 1rem;\n}\r\n.font-black {\n  font-weight: 900;\n}\r\n.font-bold {\n  font-weight: 700;\n}\r\n.font-medium {\n  font-weight: 500;\n}\r\n.font-semibold {\n  font-weight: 600;\n}\r\n.uppercase {\n  text-transform: uppercase;\n}\r\n.text-black {\n  --tw-text-opacity: 1;\n  color: rgb(0 0 0 / var(--tw-text-opacity));\n}\r\n.text-gray-600 {\n  --tw-text-opacity: 1;\n  color: rgb(75 85 99 / var(--tw-text-opacity));\n}\r\n.text-gray-900 {\n  --tw-text-opacity: 1;\n  color: rgb(17 24 39 / var(--tw-text-opacity));\n}\r\n.text-orange-600 {\n  --tw-text-opacity: 1;\n  color: rgb(234 88 12 / var(--tw-text-opacity));\n}\r\n.text-transparent {\n  color: transparent;\n}\r\n.text-white {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\r\n.opacity-100 {\n  opacity: 1;\n}\r\n.opacity-50 {\n  opacity: 0.5;\n}\r\n.transition {\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\r\n.transition-opacity {\n  transition-property: opacity;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\r\n.duration-300 {\n  transition-duration: 300ms;\n}\r\n.ease-in-out {\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}\r\n\r\n.bg-image {\r\n  /* background-color: aqua; */\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  background-attachment: fixed;\r\n  background-position: top left;\r\n  transition: background-position 0.5s ease-in-out;\r\n}\r\n\r\n@media all and (max-width: 1024px) {\r\n  .bg-image {\r\n    background-position: top right;\r\n  }\r\n}\r\n\r\n.hover\\:-translate-y-px:hover {\n  --tw-translate-y: -1px;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\r\n\r\n.hover\\:scale-105:hover {\n  --tw-scale-x: 1.05;\n  --tw-scale-y: 1.05;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\r\n\r\n.hover\\:scale-110:hover {\n  --tw-scale-x: 1.1;\n  --tw-scale-y: 1.1;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\r\n\r\n.hover\\:border-transparent:hover {\n  border-color: transparent;\n}\r\n\r\n.hover\\:bg-orange-200:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(254 215 170 / var(--tw-bg-opacity));\n}\r\n\r\n.hover\\:bg-orange-400:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(251 146 60 / var(--tw-bg-opacity));\n}\r\n\r\n.hover\\:bg-gradient-to-bl:hover {\n  background-image: linear-gradient(to bottom left, var(--tw-gradient-stops));\n}\r\n\r\n.hover\\:text-orange-600:hover {\n  --tw-text-opacity: 1;\n  color: rgb(234 88 12 / var(--tw-text-opacity));\n}\r\n\r\n.hover\\:text-white:hover {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\r\n\r\n.focus\\:border-orange-600:focus {\n  --tw-border-opacity: 1;\n  border-color: rgb(234 88 12 / var(--tw-border-opacity));\n}\r\n\r\n.focus\\:outline-none:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\r\n\r\n.focus\\:ring-0:focus {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\r\n\r\n.focus\\:ring-4:focus {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\r\n\r\n.focus\\:ring-pink-200:focus {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(251 207 232 / var(--tw-ring-opacity));\n}\r\n\r\n.peer:-moz-placeholder-shown ~ .peer-placeholder-shown\\:translate-y-0 {\n  --tw-translate-y: 0px;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\r\n\r\n.peer:placeholder-shown ~ .peer-placeholder-shown\\:translate-y-0 {\n  --tw-translate-y: 0px;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\r\n\r\n.peer:-moz-placeholder-shown ~ .peer-placeholder-shown\\:scale-100 {\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\r\n\r\n.peer:placeholder-shown ~ .peer-placeholder-shown\\:scale-100 {\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\r\n\r\n.peer:focus ~ .peer-focus\\:left-0 {\n  left: 0px;\n}\r\n\r\n.peer:focus ~ .peer-focus\\:-translate-y-6 {\n  --tw-translate-y: -1.5rem;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\r\n\r\n.peer:focus ~ .peer-focus\\:scale-75 {\n  --tw-scale-x: .75;\n  --tw-scale-y: .75;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\r\n\r\n.peer:focus ~ .peer-focus\\:font-medium {\n  font-weight: 500;\n}\r\n\r\n.peer:focus ~ .peer-focus\\:text-orange-600 {\n  --tw-text-opacity: 1;\n  color: rgb(234 88 12 / var(--tw-text-opacity));\n}\r\n\r\n@media (max-width: 425px) {\n\n  .max-\\[425px\\]\\:m-auto {\n    margin: auto;\n  }\n}\r\n\r\n@media (min-width: 640px) {\n\n  .sm\\:ml-2 {\n    margin-left: 0.5rem;\n  }\n\n  .sm\\:flex-row {\n    flex-direction: row;\n  }\n\n  .sm\\:gap-4 {\n    gap: 1rem;\n  }\n\n  .sm\\:text-base {\n    font-size: 1rem;\n    line-height: 1.5rem;\n  }\n}\r\n\r\n@media (min-width: 768px) {\n\n  .md\\:m-0 {\n    margin: 0px;\n  }\n\n  .md\\:ml-\\[40vw\\] {\n    margin-left: 40vw;\n  }\n\n  .md\\:mr-10 {\n    margin-right: 2.5rem;\n  }\n\n  .md\\:max-w-4xl {\n    max-width: 56rem;\n  }\n\n  .md\\:p-5 {\n    padding: 1.25rem;\n  }\n\n  .md\\:text-6xl {\n    font-size: 3.75rem;\n    line-height: 1;\n  }\n}\r\n\r\n@media (min-width: 1024px) {\n\n  .lg\\:m-auto {\n    margin: auto;\n  }\n\n  .lg\\:mt-32 {\n    margin-top: 8rem;\n  }\n\n  .lg\\:grid {\n    display: grid;\n  }\n\n  .lg\\:w-full {\n    width: 100%;\n  }\n\n  .lg\\:grid-cols-auto-fit-contact {\n    grid-template-columns: repeat(auto-fit, minmax(430px, 1fr));\n  }\n\n  .lg\\:gap-10 {\n    gap: 2.5rem;\n  }\n\n  .lg\\:text-2xl {\n    font-size: 1.5rem;\n    line-height: 2rem;\n  }\n}\r\n\r\n@media (min-width: 1536px) {\n\n  .\\32xl\\:ml-\\[40vw\\] {\n    margin-left: 40vw;\n  }\n}\r\n", "",{"version":3,"sources":["webpack://./src/style/index.css","<no source>"],"names":[],"mappings":"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AA,0GCAA;EDAA;CCAA;;ADAA;EAAA,4GCAA;EDAA,0GCAA;EDAA;CCAA;;ADAA;EAAA,qBCAA;EDAA;CCAA;;ADAA;EAAA,sBCAA;EDAA;CCAA;;ADAA;EAAA,sBCAA;EDAA;CCAA;;ADAA;EAAA,gBCAA;EDAA,gBCAA;EDAA;CCAA;;ADAA;EAAA,gBCAA;EDAA,gBCAA;EDAA;CCAA;;ADAA;EAAA;CCAA;;ADAA;EAAA,0BCAA;EDAA;CCAA;;ADAA;EAAA,kBCAA;EDAA,kBCAA;EDAA;CCAA;;ADAA;EAAA;CCAA;;ADAA;EAAA,qBCAA;EDAA;CCAA;;ADAA;;EAAA;IAAA;GCAA;CAAA;;ADAA;;EAAA;IAAA;GCAA;;EDAA;IAAA;GCAA;;EDAA;IAAA;GCAA;;EDAA;IAAA,gBCAA;IDAA;GCAA;CAAA;;ADAA;;EAAA;IAAA;GCAA;;EDAA;IAAA;GCAA;;EDAA;IAAA;GCAA;;EDAA;IAAA;GCAA;;EDAA;IAAA;GCAA;;EDAA;IAAA,mBCAA;IDAA;GCAA;CAAA;;ADAA;;EAAA;IAAA;GCAA;;EDAA;IAAA;GCAA;;EDAA;IAAA;GCAA;;EDAA;IAAA;GCAA;;EDAA;IAAA;GCAA;;EDAA;IAAA;GCAA;;EDAA;IAAA,kBCAA;IDAA;GCAA;CAAA;;ADAA;;EAAA;IAAA;GCAA;CAAA","sourcesContent":["@tailwind base;\r\n@tailwind components;\r\n@tailwind utilities;\r\n\r\n.bg-image {\r\n  /* background-color: aqua; */\r\n  background-image: url(\"../pics/brooke.jpg\");\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  background-attachment: fixed;\r\n  background-position: top left;\r\n  transition: background-position 0.5s ease-in-out;\r\n}\r\n\r\n@media all and (max-width: 1024px) {\r\n  .bg-image {\r\n    background-position: top right;\r\n  }\r\n}\r\n",null],"sourceRoot":""}]);
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
    "lg:grid",
    "lg:grid-cols-auto-fit-contact",
    "justify-items-center",
    "gap-4",
    "2xl:ml-[40vw]",
    "lg:m-auto",
    "m-5",
    "lg:mt-32",
    "md:p-5",
    "pt-5",
    "rounded-lg",
    "bg-orange-200",
    "m-2",
    "max-w-5xl",
  ]);
  const contactsPartDiv = (0,_functions_makeChild__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "contactsPartDiv", [
    "flex",
    "flex-col",
    "md:m-0",
    "mx-3",
    "grow-0",
  ]);
  const mapDiv = (0,_functions_makeChild__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "mapDiv", [
    "p-4",
    "flex",
    "lg:w-full",
    "justify-center",
    "m-auto",
  ]);
  const picElementCreate = (src, alt, param) => {
    const element = document.createElement("img");
    element.src = src;
    element.alt = alt;
    element.classList.add(...param);
    return element;
  };

  const divCreation = (pic, description, classes) => {
    const divItem = (0,_functions_makeChild__WEBPACK_IMPORTED_MODULE_0__["default"])("div", undefined, ["flex", "pb-2"]);
    divItem.appendChild(pic);
    divItem.appendChild(description);
    if (classes) {
      divItem.classList.add(...classes);
    }
    return divItem;
  };
  //place div
  const contactPlace = (0,_functions_makeChild__WEBPACK_IMPORTED_MODULE_0__["default"])(
    "p",
    undefined,
    ["text-xl", "pl-3"],
    "Parc de la fonderie, Sint-Jans-Molenbeek"
  );
  const placePic = picElementCreate(_pics_contacts_locationMark_png__WEBPACK_IMPORTED_MODULE_3__, "location", [
    "w-7",
    "object-contain",
  ]);
  contactsPartDiv.appendChild(divCreation(placePic, contactPlace));

  const contactClock = (0,_functions_makeChild__WEBPACK_IMPORTED_MODULE_0__["default"])(
    "p",
    undefined,
    ["text-xl", "pl-3"],
    `Mon-Sun: 9am-9pm;`
  );
  const clockPic = picElementCreate(_pics_contacts_clock_png__WEBPACK_IMPORTED_MODULE_1__, "clock", ["w-7", "object-contain"]);
  contactsPartDiv.appendChild(divCreation(clockPic, contactClock));

  const contactPhone = (0,_functions_makeChild__WEBPACK_IMPORTED_MODULE_0__["default"])(
    "p",
    undefined,
    ["text-xl", "pl-3"],
    `(333)-888-3333`
  );
  const callPic = picElementCreate(_pics_contacts_call_png__WEBPACK_IMPORTED_MODULE_4__, "call", ["w-7", "object-contain"]);
  contactsPartDiv.appendChild(divCreation(callPic, contactPhone));

  const contactEmail = (0,_functions_makeChild__WEBPACK_IMPORTED_MODULE_0__["default"])(
    "p",
    undefined,
    ["pl-3", "text-orange-600", "text-2xl"],
    "Message us"
  );
  const emailPic = picElementCreate(_pics_contacts_email_png__WEBPACK_IMPORTED_MODULE_2__, "email", ["w-7", "object-contain"]);
  contactsPartDiv.appendChild(divCreation(emailPic, contactEmail));

  const form = (0,_functions_makeChild__WEBPACK_IMPORTED_MODULE_0__["default"])("form", "contactForm", [
    "flex",
    "flex-col",
    "items-center",
    "items-stretch",
    "mt-4",
  ]);
  const html = `
  <div class="relative z-0 w-full mb-6 group">
      <input type="floating_name" name="floating_name" id="floating_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-orange-300 appearance-none focus:outline-none focus:ring-0 focus:border-orange-600 peer" placeholder=" " required />
      <label for="floating_name" class="peer-focus:font-medium absolute text-sm text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your name</label>
  </div>
  <div class="relative z-0 w-full mb-6 group">
      <input type="email" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-orange-300 appearance-none focus:outline-none focus:ring-0 focus:border-orange-600 peer" placeholder=" " required />
      <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
  </div> 
  `;
  form.setHTML(html);

  const makeTextArea = () => {
    const textAreaDiv = document.createElement("div");
    const textareaInput = document.createElement("textarea");
    const textareaLabel = document.createElement("label");
    textareaLabel.textContent = "Type your message:";
    textareaLabel.classList.add(
      "peer-focus:font-medium",
      "absolute",
      "text-sm",
      "text-gray-600",
      "duration-300",
      "transform",
      "-translate-y-6",
      "scale-75",
      "top-3",
      "-z-10",
      "origin-[0]",
      "peer-focus:left-0",
      "peer-focus:text-orange-600",
      "peer-placeholder-shown:scale-100",
      "peer-placeholder-shown:translate-y-0",
      "peer-focus:scale-75",
      "peer-focus:-translate-y-6"
    );
    textareaLabel.setAttribute("for", "textArea");
    textareaInput.setAttribute("placeholder", " ");
    textareaInput.id = "textArea";
    textareaInput.classList.add(
      "block",
      "py-2.5",
      "px-0",
      "w-full",
      "text-sm",
      "text-gray-900",
      "bg-transparent",
      "border-0",
      "border-b-2",
      "border-orange-300",
      "appearance-none",
      "focus:outline-none",
      "focus:ring-0",
      "focus:border-orange-600",
      "peer",
      "resize-none"
    );
    textAreaDiv.classList.add("relative", "z-0", "w-full", "mb-6", "group");
    textAreaDiv.appendChild(textareaInput);
    textAreaDiv.appendChild(textareaLabel);
    return textAreaDiv;
  };
  const submitBtn = () => {
    const btn = document.createElement("button");
    btn.setAttribute("type", "button");
    btn.classList.add(
      "bg-transparent",
      "hover:bg-orange-400",
      "text-black",
      "font-semibold",
      "hover:text-white",
      "py-1",
      "px-2",
      "mt-2",
      "border",
      "border-black",
      "hover:border-transparent",
      "rounded",
      "w-16"
    );
    btn.textContent = "Send";
    return btn;
  };
  mapDiv.innerHTML = `<iframe 
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2518.885874697071!2d4.3288058629517385!3d50.85179759885247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c31b81f69653%3A0xb5757d8e4973a0a!2sFonderiepark!5e0!3m2!1sen!2sbe!4v1685713979505!5m2!1sen!2sbe" 

  height="400px" 
  width="100%"
  style="border:0; border-radius: 10px; object-fit: cover;" 
  allowfullscreen="" 
  loading="lazy" 
  referrerpolicy="no-referrer-when-downgrade">
  </iframe>`;
  form.appendChild(makeTextArea());
  form.appendChild(submitBtn());
  contactsPartDiv.appendChild(form);
  // divWithTextarea.appendChild(textarea);
  mainDiv.appendChild(contactsPartDiv);
  mainDiv.appendChild(mapDiv);
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
/* harmony import */ var _pics_donut_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pics/donut.png */ "./src/pics/donut.png");
/* harmony import */ var _functions_makeChild__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions/makeChild */ "./src/functions/makeChild.js");


const content = document.querySelector("#content");

const makeHeader = () => {
  const divHeader = (0,_functions_makeChild__WEBPACK_IMPORTED_MODULE_1__["default"])("header", "header", [
    "flex",
    "items-center",
    "m-3",
    "sticky",
    "top-3",
    "z-10",
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
  logoImg.src = _pics_donut_png__WEBPACK_IMPORTED_MODULE_0__;
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
    "hover:bg-orange-200",
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
  menuItemDiv.setAttribute("data-cell", "grid-item");
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

module.exports = __webpack_require__.p + "7f2262cef85d3a256885.png";

/***/ }),

/***/ "./src/pics/contacts/clock.png":
/*!*************************************!*\
  !*** ./src/pics/contacts/clock.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "de5fddadf0b981e74275.png";

/***/ }),

/***/ "./src/pics/contacts/email.png":
/*!*************************************!*\
  !*** ./src/pics/contacts/email.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5889ac89422d6f3cdc26.png";

/***/ }),

/***/ "./src/pics/contacts/locationMark.png":
/*!********************************************!*\
  !*** ./src/pics/contacts/locationMark.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9dc979e220a82890ee37.png";

/***/ }),

/***/ "./src/pics/donut.png":
/*!****************************!*\
  !*** ./src/pics/donut.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "47027ceb3d6df949052f.png";

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
  btns[0].classList.add("text-orange-600");
  let btnMain = document
    .querySelector("#btnOrder")
    .addEventListener("click", buildPage);
  btns.forEach((e) => e.addEventListener("click", buildPage));

  function buildPage(e) {
    console.log(e.target.id);
    const navbar = document.querySelector("#header");
    navbar.classList.remove("bg-slate-100", "m-0", "top-0", "p-3");
    btns.forEach((e) => e.classList.remove("text-orange-600"));
    let oldChild = mainContent.childNodes[1];
    console.log(oldChild);
    if (
      e.target.id === "Home" ||
      e.target.id === "brandName" ||
      e.target.id === "img"
    ) {
      mainContent.replaceChild((0,_mainPage_js__WEBPACK_IMPORTED_MODULE_2__["default"])(), oldChild);
      btnMain = document
        .querySelector("#btnOrder")
        .addEventListener("click", buildPage);
      btns[0].classList.add("text-orange-600");
    } else if (e.target.id === "Menu" || e.target.id === "btnOrder") {
      mainContent.replaceChild((0,_menuPage_js__WEBPACK_IMPORTED_MODULE_3__["default"])(), oldChild);
      btns[1].classList.add("text-orange-600");
      const gridRows = document.querySelectorAll(`div[data-cell^="grid-item"]`);
      navbar.classList.add("bg-slate-100", "m-0", "top-0", "p-3");
      window.addEventListener("scroll", function () {
        gridRows.forEach((box, index) => {
          const boxTop = box.getBoundingClientRect().top;
          box.classList.add("transition-opacity");
          if (boxTop < 50) {
            box.classList.remove("opacity-100");
            box.classList.add("opacity-50");
          } else {
            box.classList.remove("opacity-50");
            box.classList.add("opacity-100");
          }
        });
      });
    } else if (e.target.id === "Contacts") {
      mainContent.replaceChild((0,_contactPage_js__WEBPACK_IMPORTED_MODULE_4__["default"])(), oldChild);
      e.target.classList.add("text-orange-600");
      navbar.classList.add("bg-slate-100", "m-0", "top-0", "p-3");
    }
  }
  return {
    buildPage,
  };
};
const logoDiv = document
  .querySelector("#logoDiv")
  .addEventListener("click", navBtnListener().buildPage);

navBtnListener();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBb0IscUJBQXFCLE1BQU0sUUFBUSxNQUFNLEtBQUssb0JBQW9CLG9CQUFvQixxQkFBcUIsTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxNQUFNLE1BQU0sTUFBTSxXQUFXLE1BQU0sT0FBTyxNQUFNLFFBQVEscUJBQXFCLG9CQUFvQixNQUFNLE1BQU0sTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sUUFBUSxNQUFNLEtBQUssb0JBQW9CLHFCQUFxQixxQkFBcUIsTUFBTSxRQUFRLE1BQU0sU0FBUyxxQkFBcUIsb0JBQW9CLHFCQUFxQixxQkFBcUIsb0JBQW9CLG9CQUFvQixvQkFBb0IsTUFBTSxNQUFNLE1BQU0sTUFBTSxXQUFXLE1BQU0sT0FBTyxNQUFNLFFBQVEscUJBQXFCLHFCQUFxQixxQkFBcUIsTUFBTSxNQUFNLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLE1BQU0sTUFBTSxVQUFVLE1BQU0sT0FBTyxNQUFNLEtBQUsscUJBQXFCLHFCQUFxQixNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxPQUFPLE1BQU0sS0FBSyxxQkFBcUIsb0JBQW9CLE1BQU0sTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sTUFBTSxpQkFBaUIsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sT0FBTyxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxPQUFPLE1BQU0sS0FBSyxvQkFBb0Isb0JBQW9CLE1BQU0sTUFBTSxvQkFBb0Isb0JBQW9CLE1BQU0sTUFBTSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sS0FBSyxLQUFLLFVBQVUsTUFBTSxRQUFRLE1BQU0sWUFBWSxvQkFBb0IscUJBQXFCLE1BQU0sTUFBTSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sV0FBVyxLQUFLLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssS0FBSyxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssS0FBSyxZQUFZLE1BQU0sTUFBTSxNQUFNLFdBQVcsS0FBSyxNQUFNLEtBQUssV0FBVyxXQUFXLEtBQUssTUFBTSxLQUFLLFdBQVcsV0FBVyxLQUFLLE1BQU0sS0FBSyxLQUFLLE1BQU0sS0FBSyxXQUFXLEtBQUssTUFBTSxLQUFLLFdBQVcsS0FBSyxNQUFNLEtBQUssS0FBSyxNQUFNLEtBQUssV0FBVyxLQUFLLE1BQU0sS0FBSyxXQUFX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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQix3REFBUTtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTiwrQkFBK0Isd0RBQVE7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUCxNQUFNO0FBQ04sK0JBQStCLDJEQUFXO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcl9wYWdlLy4vc3JjL3N0eWxlL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9yX3BhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3JfcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcl9wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcl9wYWdlLy4vc3JjL3N0eWxlL2luZGV4LmNzcz8xZTE3Iiwid2VicGFjazovL3JfcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yX3BhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3JfcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yX3BhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcl9wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcl9wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcl9wYWdlLy4vc3JjL2Z1bmN0aW9ucy9tYWtlQ2hpbGQuanMiLCJ3ZWJwYWNrOi8vcl9wYWdlLy4vc3JjL3BhZ2VzL2NvbnRhY3RQYWdlLmpzIiwid2VicGFjazovL3JfcGFnZS8uL3NyYy9wYWdlcy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vcl9wYWdlLy4vc3JjL3BhZ2VzL21haW5QYWdlLmpzIiwid2VicGFjazovL3JfcGFnZS8uL3NyYy9wYWdlcy9tZW51UGFnZS5qcyIsIndlYnBhY2s6Ly9yX3BhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcl9wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3JfcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcl9wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcl9wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcl9wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcl9wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3JfcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yX3BhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3JfcGFnZS8uL3NyYy9wYWdlcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vcGljcy9icm9va2UuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLypcXG4hIHRhaWx3aW5kY3NzIHYzLjMuMiB8IE1JVCBMaWNlbnNlIHwgaHR0cHM6Ly90YWlsd2luZGNzcy5jb21cXG4qLy8qXFxuMS4gUHJldmVudCBwYWRkaW5nIGFuZCBib3JkZXIgZnJvbSBhZmZlY3RpbmcgZWxlbWVudCB3aWR0aC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3pkZXZzL2Nzc3JlbWVkeS9pc3N1ZXMvNClcXG4yLiBBbGxvdyBhZGRpbmcgYSBib3JkZXIgdG8gYW4gZWxlbWVudCBieSBqdXN0IGFkZGluZyBhIGJvcmRlci13aWR0aC4gKGh0dHBzOi8vZ2l0aHViLmNvbS90YWlsd2luZGNzcy90YWlsd2luZGNzcy9wdWxsLzExNilcXG4qL1xcblxcbiosXFxuOjpiZWZvcmUsXFxuOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICBib3JkZXItd2lkdGg6IDA7IC8qIDIgKi9cXG4gIGJvcmRlci1zdHlsZTogc29saWQ7IC8qIDIgKi9cXG4gIGJvcmRlci1jb2xvcjogI2U1ZTdlYjsgLyogMiAqL1xcbn1cXG5cXG46OmJlZm9yZSxcXG46OmFmdGVyIHtcXG4gIC0tdHctY29udGVudDogJyc7XFxufVxcblxcbi8qXFxuMS4gVXNlIGEgY29uc2lzdGVudCBzZW5zaWJsZSBsaW5lLWhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxuMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXFxuMy4gVXNlIGEgbW9yZSByZWFkYWJsZSB0YWIgc2l6ZS5cXG40LiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIGBzYW5zYCBmb250LWZhbWlseSBieSBkZWZhdWx0LlxcbjUuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgYHNhbnNgIGZvbnQtZmVhdHVyZS1zZXR0aW5ncyBieSBkZWZhdWx0LlxcbjYuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgYHNhbnNgIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzIGJ5IGRlZmF1bHQuXFxuKi9cXG5cXG5odG1sIHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7IC8qIDEgKi9cXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xcbiAgLW1vei10YWItc2l6ZTogNDsgLyogMyAqL1xcbiAgLW8tdGFiLXNpemU6IDQ7XFxuICAgICB0YWItc2l6ZTogNDsgLyogMyAqL1xcbiAgZm9udC1mYW1pbHk6IHVpLXNhbnMtc2VyaWYsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEFyaWFsLCBcXFwiTm90byBTYW5zXFxcIiwgc2Fucy1zZXJpZiwgXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCIsIFxcXCJOb3RvIENvbG9yIEVtb2ppXFxcIjsgLyogNCAqL1xcbiAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiBub3JtYWw7IC8qIDUgKi9cXG4gIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOiBub3JtYWw7IC8qIDYgKi9cXG59XFxuXFxuLypcXG4xLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXFxuMi4gSW5oZXJpdCBsaW5lLWhlaWdodCBmcm9tIGBodG1sYCBzbyB1c2VycyBjYW4gc2V0IHRoZW0gYXMgYSBjbGFzcyBkaXJlY3RseSBvbiB0aGUgYGh0bWxgIGVsZW1lbnQuXFxuKi9cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDsgLyogMSAqL1xcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLypcXG4xLiBBZGQgdGhlIGNvcnJlY3QgaGVpZ2h0IGluIEZpcmVmb3guXFxuMi4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2Ugb2YgYm9yZGVyIGNvbG9yIGluIEZpcmVmb3guIChodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xOTA2NTUpXFxuMy4gRW5zdXJlIGhvcml6b250YWwgcnVsZXMgYXJlIHZpc2libGUgYnkgZGVmYXVsdC5cXG4qL1xcblxcbmhyIHtcXG4gIGhlaWdodDogMDsgLyogMSAqL1xcbiAgY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXG4gIGJvcmRlci10b3Atd2lkdGg6IDFweDsgLyogMyAqL1xcbn1cXG5cXG4vKlxcbkFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiovXFxuXFxuYWJicjp3aGVyZShbdGl0bGVdKSB7XFxuICAtd2Via2l0LXRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDtcXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xcbn1cXG5cXG4vKlxcblJlbW92ZSB0aGUgZGVmYXVsdCBmb250IHNpemUgYW5kIHdlaWdodCBmb3IgaGVhZGluZ3MuXFxuKi9cXG5cXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNiB7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBmb250LXdlaWdodDogaW5oZXJpdDtcXG59XFxuXFxuLypcXG5SZXNldCBsaW5rcyB0byBvcHRpbWl6ZSBmb3Igb3B0LWluIHN0eWxpbmcgaW5zdGVhZCBvZiBvcHQtb3V0LlxcbiovXFxuXFxuYSB7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIHRleHQtZGVjb3JhdGlvbjogaW5oZXJpdDtcXG59XFxuXFxuLypcXG5BZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gRWRnZSBhbmQgU2FmYXJpLlxcbiovXFxuXFxuYixcXG5zdHJvbmcge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLypcXG4xLiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIGBtb25vYCBmb250IGZhbWlseSBieSBkZWZhdWx0LlxcbjIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4qL1xcblxcbmNvZGUsXFxua2JkLFxcbnNhbXAsXFxucHJlIHtcXG4gIGZvbnQtZmFtaWx5OiB1aS1tb25vc3BhY2UsIFNGTW9uby1SZWd1bGFyLCBNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgXFxcIkxpYmVyYXRpb24gTW9ub1xcXCIsIFxcXCJDb3VyaWVyIE5ld1xcXCIsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuLypcXG5BZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4qL1xcblxcbnNtYWxsIHtcXG4gIGZvbnQtc2l6ZTogODAlO1xcbn1cXG5cXG4vKlxcblByZXZlbnQgYHN1YmAgYW5kIGBzdXBgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5cXG5zdWIsXFxuc3VwIHtcXG4gIGZvbnQtc2l6ZTogNzUlO1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbnN1YiB7XFxuICBib3R0b206IC0wLjI1ZW07XFxufVxcblxcbnN1cCB7XFxuICB0b3A6IC0wLjVlbTtcXG59XFxuXFxuLypcXG4xLiBSZW1vdmUgdGV4dCBpbmRlbnRhdGlvbiBmcm9tIHRhYmxlIGNvbnRlbnRzIGluIENocm9tZSBhbmQgU2FmYXJpLiAoaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9OTk5MDg4LCBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MjAxMjk3KVxcbjIuIENvcnJlY3QgdGFibGUgYm9yZGVyIGNvbG9yIGluaGVyaXRhbmNlIGluIGFsbCBDaHJvbWUgYW5kIFNhZmFyaS4gKGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTkzNTcyOSwgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE5NTAxNilcXG4zLiBSZW1vdmUgZ2FwcyBiZXR3ZWVuIHRhYmxlIGJvcmRlcnMgYnkgZGVmYXVsdC5cXG4qL1xcblxcbnRhYmxlIHtcXG4gIHRleHQtaW5kZW50OiAwOyAvKiAxICovXFxuICBib3JkZXItY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7IC8qIDMgKi9cXG59XFxuXFxuLypcXG4xLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cXG4yLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxuMy4gUmVtb3ZlIGRlZmF1bHQgcGFkZGluZyBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXFxuICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cXG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0OyAvKiAxICovXFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDsgLyogMSAqL1xcbiAgY29sb3I6IGluaGVyaXQ7IC8qIDEgKi9cXG4gIG1hcmdpbjogMDsgLyogMiAqL1xcbiAgcGFkZGluZzogMDsgLyogMyAqL1xcbn1cXG5cXG4vKlxcblJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSBhbmQgRmlyZWZveC5cXG4qL1xcblxcbmJ1dHRvbixcXG5zZWxlY3Qge1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi8qXFxuMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4yLiBSZW1vdmUgZGVmYXVsdCBidXR0b24gc3R5bGVzLlxcbiovXFxuXFxuYnV0dG9uLFxcblt0eXBlPSdidXR0b24nXSxcXG5bdHlwZT0ncmVzZXQnXSxcXG5bdHlwZT0nc3VibWl0J10ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyAvKiAyICovXFxuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lOyAvKiAyICovXFxufVxcblxcbi8qXFxuVXNlIHRoZSBtb2Rlcm4gRmlyZWZveCBmb2N1cyBzdHlsZSBmb3IgYWxsIGZvY3VzYWJsZSBlbGVtZW50cy5cXG4qL1xcblxcbjotbW96LWZvY3VzcmluZyB7XFxuICBvdXRsaW5lOiBhdXRvO1xcbn1cXG5cXG4vKlxcblJlbW92ZSB0aGUgYWRkaXRpb25hbCBgOmludmFsaWRgIHN0eWxlcyBpbiBGaXJlZm94LiAoaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvZ2Vja28tZGV2L2Jsb2IvMmY5ZWFjZDlkM2Q5OTVjOTM3YjQyNTFhNTU1N2Q5NWQ0OTRjOWJlMS9sYXlvdXQvc3R5bGUvcmVzL2Zvcm1zLmNzcyNMNzI4LUw3MzcpXFxuKi9cXG5cXG46LW1vei11aS1pbnZhbGlkIHtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbi8qXFxuQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUgYW5kIEZpcmVmb3guXFxuKi9cXG5cXG5wcm9ncmVzcyB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qXFxuQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gU2FmYXJpLlxcbiovXFxuXFxuOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcbjo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qXFxuMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxuMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXFxuKi9cXG5cXG5bdHlwZT0nc2VhcmNoJ10ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvKiAyICovXFxufVxcblxcbi8qXFxuUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxcbiovXFxuXFxuOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLypcXG4xLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbjIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gYGluaGVyaXRgIGluIFNhZmFyaS5cXG4qL1xcblxcbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cXG4gIGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5BZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4qL1xcblxcbnN1bW1hcnkge1xcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xcbn1cXG5cXG4vKlxcblJlbW92ZXMgdGhlIGRlZmF1bHQgc3BhY2luZyBhbmQgYm9yZGVyIGZvciBhcHByb3ByaWF0ZSBlbGVtZW50cy5cXG4qL1xcblxcbmJsb2NrcXVvdGUsXFxuZGwsXFxuZGQsXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYsXFxuaHIsXFxuZmlndXJlLFxcbnAsXFxucHJlIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuZmllbGRzZXQge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxubGVnZW5kIHtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbm9sLFxcbnVsLFxcbm1lbnUge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qXFxuUHJldmVudCByZXNpemluZyB0ZXh0YXJlYXMgaG9yaXpvbnRhbGx5IGJ5IGRlZmF1bHQuXFxuKi9cXG5cXG50ZXh0YXJlYSB7XFxuICByZXNpemU6IHZlcnRpY2FsO1xcbn1cXG5cXG4vKlxcbjEuIFJlc2V0IHRoZSBkZWZhdWx0IHBsYWNlaG9sZGVyIG9wYWNpdHkgaW4gRmlyZWZveC4gKGh0dHBzOi8vZ2l0aHViLmNvbS90YWlsd2luZGxhYnMvdGFpbHdpbmRjc3MvaXNzdWVzLzMzMDApXFxuMi4gU2V0IHRoZSBkZWZhdWx0IHBsYWNlaG9sZGVyIGNvbG9yIHRvIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBncmF5IDQwMCBjb2xvci5cXG4qL1xcblxcbmlucHV0OjotbW96LXBsYWNlaG9sZGVyLCB0ZXh0YXJlYTo6LW1vei1wbGFjZWhvbGRlciB7XFxuICBvcGFjaXR5OiAxOyAvKiAxICovXFxuICBjb2xvcjogIzljYTNhZjsgLyogMiAqL1xcbn1cXG5cXG5pbnB1dDo6cGxhY2Vob2xkZXIsXFxudGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcXG4gIG9wYWNpdHk6IDE7IC8qIDEgKi9cXG4gIGNvbG9yOiAjOWNhM2FmOyAvKiAyICovXFxufVxcblxcbi8qXFxuU2V0IHRoZSBkZWZhdWx0IGN1cnNvciBmb3IgYnV0dG9ucy5cXG4qL1xcblxcbmJ1dHRvbixcXG5bcm9sZT1cXFwiYnV0dG9uXFxcIl0ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKlxcbk1ha2Ugc3VyZSBkaXNhYmxlZCBidXR0b25zIGRvbid0IGdldCB0aGUgcG9pbnRlciBjdXJzb3IuXFxuKi9cXG46ZGlzYWJsZWQge1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG4vKlxcbjEuIE1ha2UgcmVwbGFjZWQgZWxlbWVudHMgYGRpc3BsYXk6IGJsb2NrYCBieSBkZWZhdWx0LiAoaHR0cHM6Ly9naXRodWIuY29tL21vemRldnMvY3NzcmVtZWR5L2lzc3Vlcy8xNClcXG4yLiBBZGQgYHZlcnRpY2FsLWFsaWduOiBtaWRkbGVgIHRvIGFsaWduIHJlcGxhY2VkIGVsZW1lbnRzIG1vcmUgc2Vuc2libHkgYnkgZGVmYXVsdC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9qZW5zaW1tb25zL2Nzc3JlbWVkeS9pc3N1ZXMvMTQjaXNzdWVjb21tZW50LTYzNDkzNDIxMClcXG4gICBUaGlzIGNhbiB0cmlnZ2VyIGEgcG9vcmx5IGNvbnNpZGVyZWQgbGludCBlcnJvciBpbiBzb21lIHRvb2xzIGJ1dCBpcyBpbmNsdWRlZCBieSBkZXNpZ24uXFxuKi9cXG5cXG5pbWcsXFxuc3ZnLFxcbnZpZGVvLFxcbmNhbnZhcyxcXG5hdWRpbyxcXG5pZnJhbWUsXFxuZW1iZWQsXFxub2JqZWN0IHtcXG4gIGRpc3BsYXk6IGJsb2NrOyAvKiAxICovXFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyAvKiAyICovXFxufVxcblxcbi8qXFxuQ29uc3RyYWluIGltYWdlcyBhbmQgdmlkZW9zIHRvIHRoZSBwYXJlbnQgd2lkdGggYW5kIHByZXNlcnZlIHRoZWlyIGludHJpbnNpYyBhc3BlY3QgcmF0aW8uIChodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzE0KVxcbiovXFxuXFxuaW1nLFxcbnZpZGVvIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLyogTWFrZSBlbGVtZW50cyB3aXRoIHRoZSBIVE1MIGhpZGRlbiBhdHRyaWJ1dGUgc3RheSBoaWRkZW4gYnkgZGVmYXVsdCAqL1xcbltoaWRkZW5dIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiosIDo6YmVmb3JlLCA6OmFmdGVyIHtcXG4gIC0tdHctYm9yZGVyLXNwYWNpbmcteDogMDtcXG4gIC0tdHctYm9yZGVyLXNwYWNpbmcteTogMDtcXG4gIC0tdHctdHJhbnNsYXRlLXg6IDA7XFxuICAtLXR3LXRyYW5zbGF0ZS15OiAwO1xcbiAgLS10dy1yb3RhdGU6IDA7XFxuICAtLXR3LXNrZXcteDogMDtcXG4gIC0tdHctc2tldy15OiAwO1xcbiAgLS10dy1zY2FsZS14OiAxO1xcbiAgLS10dy1zY2FsZS15OiAxO1xcbiAgLS10dy1wYW4teDogIDtcXG4gIC0tdHctcGFuLXk6ICA7XFxuICAtLXR3LXBpbmNoLXpvb206ICA7XFxuICAtLXR3LXNjcm9sbC1zbmFwLXN0cmljdG5lc3M6IHByb3hpbWl0eTtcXG4gIC0tdHctZ3JhZGllbnQtZnJvbS1wb3NpdGlvbjogIDtcXG4gIC0tdHctZ3JhZGllbnQtdmlhLXBvc2l0aW9uOiAgO1xcbiAgLS10dy1ncmFkaWVudC10by1wb3NpdGlvbjogIDtcXG4gIC0tdHctb3JkaW5hbDogIDtcXG4gIC0tdHctc2xhc2hlZC16ZXJvOiAgO1xcbiAgLS10dy1udW1lcmljLWZpZ3VyZTogIDtcXG4gIC0tdHctbnVtZXJpYy1zcGFjaW5nOiAgO1xcbiAgLS10dy1udW1lcmljLWZyYWN0aW9uOiAgO1xcbiAgLS10dy1yaW5nLWluc2V0OiAgO1xcbiAgLS10dy1yaW5nLW9mZnNldC13aWR0aDogMHB4O1xcbiAgLS10dy1yaW5nLW9mZnNldC1jb2xvcjogI2ZmZjtcXG4gIC0tdHctcmluZy1jb2xvcjogcmdiKDU5IDEzMCAyNDYgLyAwLjUpO1xcbiAgLS10dy1yaW5nLW9mZnNldC1zaGFkb3c6IDAgMCAjMDAwMDtcXG4gIC0tdHctcmluZy1zaGFkb3c6IDAgMCAjMDAwMDtcXG4gIC0tdHctc2hhZG93OiAwIDAgIzAwMDA7XFxuICAtLXR3LXNoYWRvdy1jb2xvcmVkOiAwIDAgIzAwMDA7XFxuICAtLXR3LWJsdXI6ICA7XFxuICAtLXR3LWJyaWdodG5lc3M6ICA7XFxuICAtLXR3LWNvbnRyYXN0OiAgO1xcbiAgLS10dy1ncmF5c2NhbGU6ICA7XFxuICAtLXR3LWh1ZS1yb3RhdGU6ICA7XFxuICAtLXR3LWludmVydDogIDtcXG4gIC0tdHctc2F0dXJhdGU6ICA7XFxuICAtLXR3LXNlcGlhOiAgO1xcbiAgLS10dy1kcm9wLXNoYWRvdzogIDtcXG4gIC0tdHctYmFja2Ryb3AtYmx1cjogIDtcXG4gIC0tdHctYmFja2Ryb3AtYnJpZ2h0bmVzczogIDtcXG4gIC0tdHctYmFja2Ryb3AtY29udHJhc3Q6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWdyYXlzY2FsZTogIDtcXG4gIC0tdHctYmFja2Ryb3AtaHVlLXJvdGF0ZTogIDtcXG4gIC0tdHctYmFja2Ryb3AtaW52ZXJ0OiAgO1xcbiAgLS10dy1iYWNrZHJvcC1vcGFjaXR5OiAgO1xcbiAgLS10dy1iYWNrZHJvcC1zYXR1cmF0ZTogIDtcXG4gIC0tdHctYmFja2Ryb3Atc2VwaWE6ICA7XFxufVxcblxcbjo6YmFja2Ryb3Age1xcbiAgLS10dy1ib3JkZXItc3BhY2luZy14OiAwO1xcbiAgLS10dy1ib3JkZXItc3BhY2luZy15OiAwO1xcbiAgLS10dy10cmFuc2xhdGUteDogMDtcXG4gIC0tdHctdHJhbnNsYXRlLXk6IDA7XFxuICAtLXR3LXJvdGF0ZTogMDtcXG4gIC0tdHctc2tldy14OiAwO1xcbiAgLS10dy1za2V3LXk6IDA7XFxuICAtLXR3LXNjYWxlLXg6IDE7XFxuICAtLXR3LXNjYWxlLXk6IDE7XFxuICAtLXR3LXBhbi14OiAgO1xcbiAgLS10dy1wYW4teTogIDtcXG4gIC0tdHctcGluY2gtem9vbTogIDtcXG4gIC0tdHctc2Nyb2xsLXNuYXAtc3RyaWN0bmVzczogcHJveGltaXR5O1xcbiAgLS10dy1ncmFkaWVudC1mcm9tLXBvc2l0aW9uOiAgO1xcbiAgLS10dy1ncmFkaWVudC12aWEtcG9zaXRpb246ICA7XFxuICAtLXR3LWdyYWRpZW50LXRvLXBvc2l0aW9uOiAgO1xcbiAgLS10dy1vcmRpbmFsOiAgO1xcbiAgLS10dy1zbGFzaGVkLXplcm86ICA7XFxuICAtLXR3LW51bWVyaWMtZmlndXJlOiAgO1xcbiAgLS10dy1udW1lcmljLXNwYWNpbmc6ICA7XFxuICAtLXR3LW51bWVyaWMtZnJhY3Rpb246ICA7XFxuICAtLXR3LXJpbmctaW5zZXQ6ICA7XFxuICAtLXR3LXJpbmctb2Zmc2V0LXdpZHRoOiAwcHg7XFxuICAtLXR3LXJpbmctb2Zmc2V0LWNvbG9yOiAjZmZmO1xcbiAgLS10dy1yaW5nLWNvbG9yOiByZ2IoNTkgMTMwIDI0NiAvIDAuNSk7XFxuICAtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdzogMCAwICMwMDAwO1xcbiAgLS10dy1yaW5nLXNoYWRvdzogMCAwICMwMDAwO1xcbiAgLS10dy1zaGFkb3c6IDAgMCAjMDAwMDtcXG4gIC0tdHctc2hhZG93LWNvbG9yZWQ6IDAgMCAjMDAwMDtcXG4gIC0tdHctYmx1cjogIDtcXG4gIC0tdHctYnJpZ2h0bmVzczogIDtcXG4gIC0tdHctY29udHJhc3Q6ICA7XFxuICAtLXR3LWdyYXlzY2FsZTogIDtcXG4gIC0tdHctaHVlLXJvdGF0ZTogIDtcXG4gIC0tdHctaW52ZXJ0OiAgO1xcbiAgLS10dy1zYXR1cmF0ZTogIDtcXG4gIC0tdHctc2VwaWE6ICA7XFxuICAtLXR3LWRyb3Atc2hhZG93OiAgO1xcbiAgLS10dy1iYWNrZHJvcC1ibHVyOiAgO1xcbiAgLS10dy1iYWNrZHJvcC1icmlnaHRuZXNzOiAgO1xcbiAgLS10dy1iYWNrZHJvcC1jb250cmFzdDogIDtcXG4gIC0tdHctYmFja2Ryb3AtZ3JheXNjYWxlOiAgO1xcbiAgLS10dy1iYWNrZHJvcC1odWUtcm90YXRlOiAgO1xcbiAgLS10dy1iYWNrZHJvcC1pbnZlcnQ6ICA7XFxuICAtLXR3LWJhY2tkcm9wLW9wYWNpdHk6ICA7XFxuICAtLXR3LWJhY2tkcm9wLXNhdHVyYXRlOiAgO1xcbiAgLS10dy1iYWNrZHJvcC1zZXBpYTogIDtcXG59XFxyXFxuLmFic29sdXRlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxyXFxuLnJlbGF0aXZlIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxyXFxuLnN0aWNreSB7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbn1cXHJcXG4udG9wLTAge1xcbiAgdG9wOiAwcHg7XFxufVxcclxcbi50b3AtMyB7XFxuICB0b3A6IDAuNzVyZW07XFxufVxcclxcbi4tei0xMCB7XFxuICB6LWluZGV4OiAtMTA7XFxufVxcclxcbi56LTAge1xcbiAgei1pbmRleDogMDtcXG59XFxyXFxuLnotMTAge1xcbiAgei1pbmRleDogMTA7XFxufVxcclxcbi5tLTAge1xcbiAgbWFyZ2luOiAwcHg7XFxufVxcclxcbi5tLTIge1xcbiAgbWFyZ2luOiAwLjVyZW07XFxufVxcclxcbi5tLTMge1xcbiAgbWFyZ2luOiAwLjc1cmVtO1xcbn1cXHJcXG4ubS01IHtcXG4gIG1hcmdpbjogMS4yNXJlbTtcXG59XFxyXFxuLm0tYXV0byB7XFxuICBtYXJnaW46IGF1dG87XFxufVxcclxcbi5teC0zIHtcXG4gIG1hcmdpbi1sZWZ0OiAwLjc1cmVtO1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjc1cmVtO1xcbn1cXHJcXG4ubXgtNCB7XFxuICBtYXJnaW4tbGVmdDogMXJlbTtcXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcXG59XFxyXFxuLm1iLTIge1xcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbn1cXHJcXG4ubWItNiB7XFxuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XFxufVxcclxcbi5tbC0wIHtcXG4gIG1hcmdpbi1sZWZ0OiAwcHg7XFxufVxcclxcbi5tbC1cXFxcWzIwdndcXFxcXSB7XFxuICBtYXJnaW4tbGVmdDogMjB2dztcXG59XFxyXFxuLm1yLTEwIHtcXG4gIG1hcmdpbi1yaWdodDogMi41cmVtO1xcbn1cXHJcXG4ubXQtMiB7XFxuICBtYXJnaW4tdG9wOiAwLjVyZW07XFxufVxcclxcbi5tdC00IHtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxufVxcclxcbi5tdC01IHtcXG4gIG1hcmdpbi10b3A6IDEuMjVyZW07XFxufVxcclxcbi5tdC04IHtcXG4gIG1hcmdpbi10b3A6IDJyZW07XFxufVxcclxcbi5ibG9jayB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxyXFxuLmZsZXgge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxyXFxuLmdyaWQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG59XFxyXFxuLmgtOCB7XFxuICBoZWlnaHQ6IDJyZW07XFxufVxcclxcbi53LTE2IHtcXG4gIHdpZHRoOiA0cmVtO1xcbn1cXHJcXG4udy03IHtcXG4gIHdpZHRoOiAxLjc1cmVtO1xcbn1cXHJcXG4udy04IHtcXG4gIHdpZHRoOiAycmVtO1xcbn1cXHJcXG4udy1maXQge1xcbiAgd2lkdGg6IC1tb3otZml0LWNvbnRlbnQ7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxufVxcclxcbi53LWZ1bGwge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcclxcbi5tYXgtdy01eGwge1xcbiAgbWF4LXdpZHRoOiA2NHJlbTtcXG59XFxyXFxuLm1heC13LWZ1bGwge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXHJcXG4uZmxleC0xIHtcXG4gIGZsZXg6IDEgMSAwJTtcXG59XFxyXFxuLmdyb3cge1xcbiAgZmxleC1ncm93OiAxO1xcbn1cXHJcXG4uZ3Jvdy0wIHtcXG4gIGZsZXgtZ3JvdzogMDtcXG59XFxyXFxuLm9yaWdpbi1cXFxcWzBcXFxcXSB7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiAwO1xcbn1cXHJcXG4uLXRyYW5zbGF0ZS15LTYge1xcbiAgLS10dy10cmFuc2xhdGUteTogLTEuNXJlbTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xcbn1cXHJcXG4uc2NhbGUtNzUge1xcbiAgLS10dy1zY2FsZS14OiAuNzU7XFxuICAtLXR3LXNjYWxlLXk6IC43NTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xcbn1cXHJcXG4udHJhbnNmb3JtIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xcbn1cXHJcXG4uY3Vyc29yLXBvaW50ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXHJcXG4ucmVzaXplLW5vbmUge1xcbiAgcmVzaXplOiBub25lO1xcbn1cXHJcXG4uYXBwZWFyYW5jZS1ub25lIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgICAgICAgYXBwZWFyYW5jZTogbm9uZTtcXG59XFxyXFxuLmdyaWQtY29scy1hdXRvLWZpdCB7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDM4MHB4LCAxZnIpKTtcXG59XFxyXFxuLmZsZXgtY29sIHtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcclxcbi5pdGVtcy1jZW50ZXIge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxyXFxuLml0ZW1zLXN0cmV0Y2gge1xcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxufVxcclxcbi5qdXN0aWZ5LWNlbnRlciB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxyXFxuLmp1c3RpZnktaXRlbXMtY2VudGVyIHtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxyXFxuLmdhcC00IHtcXG4gIGdhcDogMXJlbTtcXG59XFxyXFxuLmdhcC14LTQge1xcbiAgLW1vei1jb2x1bW4tZ2FwOiAxcmVtO1xcbiAgICAgICBjb2x1bW4tZ2FwOiAxcmVtO1xcbn1cXHJcXG4uc2VsZi1lbmQge1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxufVxcclxcbi5yb3VuZGVkIHtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxufVxcclxcbi5yb3VuZGVkLWxnIHtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG59XFxyXFxuLmJvcmRlciB7XFxuICBib3JkZXItd2lkdGg6IDFweDtcXG59XFxyXFxuLmJvcmRlci0wIHtcXG4gIGJvcmRlci13aWR0aDogMHB4O1xcbn1cXHJcXG4uYm9yZGVyLWItMiB7XFxuICBib3JkZXItYm90dG9tLXdpZHRoOiAycHg7XFxufVxcclxcbi5ib3JkZXItYmxhY2sge1xcbiAgLS10dy1ib3JkZXItb3BhY2l0eTogMTtcXG4gIGJvcmRlci1jb2xvcjogcmdiKDAgMCAwIC8gdmFyKC0tdHctYm9yZGVyLW9wYWNpdHkpKTtcXG59XFxyXFxuLmJvcmRlci1vcmFuZ2UtMzAwIHtcXG4gIC0tdHctYm9yZGVyLW9wYWNpdHk6IDE7XFxuICBib3JkZXItY29sb3I6IHJnYigyNTMgMTg2IDExNiAvIHZhcigtLXR3LWJvcmRlci1vcGFjaXR5KSk7XFxufVxcclxcbi5iZy1vcmFuZ2UtMjAwIHtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTQgMjE1IDE3MCAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XFxyXFxuLmJnLXNsYXRlLTEwMCB7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQxIDI0NSAyNDkgLyB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcclxcbi5iZy10cmFuc3BhcmVudCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxyXFxuLmJnLWdyYWRpZW50LXRvLWJyIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsIHZhcigtLXR3LWdyYWRpZW50LXN0b3BzKSk7XFxufVxcclxcbi5iZy1ncmFkaWVudC10by1yIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdHctZ3JhZGllbnQtc3RvcHMpKTtcXG59XFxyXFxuLmZyb20tcGluay01MDAge1xcbiAgLS10dy1ncmFkaWVudC1mcm9tOiAjZWM0ODk5IHZhcigtLXR3LWdyYWRpZW50LWZyb20tcG9zaXRpb24pO1xcbiAgLS10dy1ncmFkaWVudC10bzogcmdiKDIzNiA3MiAxNTMgLyAwKSB2YXIoLS10dy1ncmFkaWVudC10by1wb3NpdGlvbik7XFxuICAtLXR3LWdyYWRpZW50LXN0b3BzOiB2YXIoLS10dy1ncmFkaWVudC1mcm9tKSwgdmFyKC0tdHctZ3JhZGllbnQtdG8pO1xcbn1cXHJcXG4uZnJvbS1yZWQtNTAwIHtcXG4gIC0tdHctZ3JhZGllbnQtZnJvbTogI2VmNDQ0NCB2YXIoLS10dy1ncmFkaWVudC1mcm9tLXBvc2l0aW9uKTtcXG4gIC0tdHctZ3JhZGllbnQtdG86IHJnYigyMzkgNjggNjggLyAwKSB2YXIoLS10dy1ncmFkaWVudC10by1wb3NpdGlvbik7XFxuICAtLXR3LWdyYWRpZW50LXN0b3BzOiB2YXIoLS10dy1ncmFkaWVudC1mcm9tKSwgdmFyKC0tdHctZ3JhZGllbnQtdG8pO1xcbn1cXHJcXG4udG8tb3JhbmdlLTQwMCB7XFxuICAtLXR3LWdyYWRpZW50LXRvOiAjZmI5MjNjIHZhcigtLXR3LWdyYWRpZW50LXRvLXBvc2l0aW9uKTtcXG59XFxyXFxuLnRvLXB1cnBsZS01MDAge1xcbiAgLS10dy1ncmFkaWVudC10bzogI2E4NTVmNyB2YXIoLS10dy1ncmFkaWVudC10by1wb3NpdGlvbik7XFxufVxcclxcbi5iZy1jbGlwLXRleHQge1xcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAgICAgICAgIGJhY2tncm91bmQtY2xpcDogdGV4dDtcXG59XFxyXFxuLm9iamVjdC1jb250YWluIHtcXG4gIC1vLW9iamVjdC1maXQ6IGNvbnRhaW47XFxuICAgICBvYmplY3QtZml0OiBjb250YWluO1xcbn1cXHJcXG4ucC0zIHtcXG4gIHBhZGRpbmc6IDAuNzVyZW07XFxufVxcclxcbi5wLTQge1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxyXFxuLnB4LTAge1xcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XFxufVxcclxcbi5weC0xIHtcXG4gIHBhZGRpbmctbGVmdDogMC4yNXJlbTtcXG4gIHBhZGRpbmctcmlnaHQ6IDAuMjVyZW07XFxufVxcclxcbi5weC0yIHtcXG4gIHBhZGRpbmctbGVmdDogMC41cmVtO1xcbiAgcGFkZGluZy1yaWdodDogMC41cmVtO1xcbn1cXHJcXG4ucHgtNSB7XFxuICBwYWRkaW5nLWxlZnQ6IDEuMjVyZW07XFxuICBwYWRkaW5nLXJpZ2h0OiAxLjI1cmVtO1xcbn1cXHJcXG4ucHgtOCB7XFxuICBwYWRkaW5nLWxlZnQ6IDJyZW07XFxuICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xcbn1cXHJcXG4ucHktMSB7XFxuICBwYWRkaW5nLXRvcDogMC4yNXJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAwLjI1cmVtO1xcbn1cXHJcXG4ucHktMiB7XFxuICBwYWRkaW5nLXRvcDogMC41cmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcXG59XFxyXFxuLnB5LTJcXFxcLjUge1xcbiAgcGFkZGluZy10b3A6IDAuNjI1cmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDAuNjI1cmVtO1xcbn1cXHJcXG4ucHktNSB7XFxuICBwYWRkaW5nLXRvcDogMS4yNXJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAxLjI1cmVtO1xcbn1cXHJcXG4ucGItMTAge1xcbiAgcGFkZGluZy1ib3R0b206IDIuNXJlbTtcXG59XFxyXFxuLnBiLTIge1xcbiAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcXG59XFxyXFxuLnBsLTMge1xcbiAgcGFkZGluZy1sZWZ0OiAwLjc1cmVtO1xcbn1cXHJcXG4ucHQtNSB7XFxuICBwYWRkaW5nLXRvcDogMS4yNXJlbTtcXG59XFxyXFxuLnRleHQtY2VudGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxyXFxuLnRleHQtMnhsIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDJyZW07XFxufVxcclxcbi50ZXh0LTV4bCB7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBsaW5lLWhlaWdodDogMTtcXG59XFxyXFxuLnRleHQtc20ge1xcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjI1cmVtO1xcbn1cXHJcXG4udGV4dC14bCB7XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxuICBsaW5lLWhlaWdodDogMS43NXJlbTtcXG59XFxyXFxuLnRleHQteHMge1xcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDFyZW07XFxufVxcclxcbi5mb250LWJsYWNrIHtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxufVxcclxcbi5mb250LWJvbGQge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxyXFxuLmZvbnQtbWVkaXVtIHtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcclxcbi5mb250LXNlbWlib2xkIHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcclxcbi51cHBlcmNhc2Uge1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG59XFxyXFxuLnRleHQtYmxhY2sge1xcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuICBjb2xvcjogcmdiKDAgMCAwIC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxufVxcclxcbi50ZXh0LWdyYXktNjAwIHtcXG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcbiAgY29sb3I6IHJnYig3NSA4NSA5OSAvIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xcbn1cXHJcXG4udGV4dC1ncmF5LTkwMCB7XFxuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcXG4gIGNvbG9yOiByZ2IoMTcgMjQgMzkgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XFxyXFxuLnRleHQtb3JhbmdlLTYwMCB7XFxuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcXG4gIGNvbG9yOiByZ2IoMjM0IDg4IDEyIC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxufVxcclxcbi50ZXh0LXRyYW5zcGFyZW50IHtcXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxyXFxuLnRleHQtd2hpdGUge1xcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuICBjb2xvcjogcmdiKDI1NSAyNTUgMjU1IC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxufVxcclxcbi5vcGFjaXR5LTEwMCB7XFxuICBvcGFjaXR5OiAxO1xcbn1cXHJcXG4ub3BhY2l0eS01MCB7XFxuICBvcGFjaXR5OiAwLjU7XFxufVxcclxcbi50cmFuc2l0aW9uIHtcXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGNvbG9yLCBiYWNrZ3JvdW5kLWNvbG9yLCBib3JkZXItY29sb3IsIHRleHQtZGVjb3JhdGlvbi1jb2xvciwgZmlsbCwgc3Ryb2tlLCBvcGFjaXR5LCBib3gtc2hhZG93LCB0cmFuc2Zvcm0sIGZpbHRlciwgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI7XFxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBjb2xvciwgYmFja2dyb3VuZC1jb2xvciwgYm9yZGVyLWNvbG9yLCB0ZXh0LWRlY29yYXRpb24tY29sb3IsIGZpbGwsIHN0cm9rZSwgb3BhY2l0eSwgYm94LXNoYWRvdywgdHJhbnNmb3JtLCBmaWx0ZXIsIGJhY2tkcm9wLWZpbHRlcjtcXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGNvbG9yLCBiYWNrZ3JvdW5kLWNvbG9yLCBib3JkZXItY29sb3IsIHRleHQtZGVjb3JhdGlvbi1jb2xvciwgZmlsbCwgc3Ryb2tlLCBvcGFjaXR5LCBib3gtc2hhZG93LCB0cmFuc2Zvcm0sIGZpbHRlciwgYmFja2Ryb3AtZmlsdGVyLCAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjtcXG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMTUwbXM7XFxufVxcclxcbi50cmFuc2l0aW9uLW9wYWNpdHkge1xcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogb3BhY2l0eTtcXG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMTUwbXM7XFxufVxcclxcbi5kdXJhdGlvbi0zMDAge1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMzAwbXM7XFxufVxcclxcbi5lYXNlLWluLW91dCB7XFxuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcXG59XFxyXFxuXFxyXFxuLmJnLWltYWdlIHtcXHJcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IGFxdWE7ICovXFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIGxlZnQ7XFxyXFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLXBvc2l0aW9uIDAuNXMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xcclxcbiAgLmJnLWltYWdlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIHJpZ2h0O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uaG92ZXJcXFxcOi10cmFuc2xhdGUteS1weDpob3ZlciB7XFxuICAtLXR3LXRyYW5zbGF0ZS15OiAtMXB4O1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XFxufVxcclxcblxcclxcbi5ob3ZlclxcXFw6c2NhbGUtMTA1OmhvdmVyIHtcXG4gIC0tdHctc2NhbGUteDogMS4wNTtcXG4gIC0tdHctc2NhbGUteTogMS4wNTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xcbn1cXHJcXG5cXHJcXG4uaG92ZXJcXFxcOnNjYWxlLTExMDpob3ZlciB7XFxuICAtLXR3LXNjYWxlLXg6IDEuMTtcXG4gIC0tdHctc2NhbGUteTogMS4xO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XFxufVxcclxcblxcclxcbi5ob3ZlclxcXFw6Ym9yZGVyLXRyYW5zcGFyZW50OmhvdmVyIHtcXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcclxcblxcclxcbi5ob3ZlclxcXFw6Ymctb3JhbmdlLTIwMDpob3ZlciB7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU0IDIxNSAxNzAgLyB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcclxcblxcclxcbi5ob3ZlclxcXFw6Ymctb3JhbmdlLTQwMDpob3ZlciB7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUxIDE0NiA2MCAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XFxyXFxuXFxyXFxuLmhvdmVyXFxcXDpiZy1ncmFkaWVudC10by1ibDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIGxlZnQsIHZhcigtLXR3LWdyYWRpZW50LXN0b3BzKSk7XFxufVxcclxcblxcclxcbi5ob3ZlclxcXFw6dGV4dC1vcmFuZ2UtNjAwOmhvdmVyIHtcXG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcbiAgY29sb3I6IHJnYigyMzQgODggMTIgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XFxyXFxuXFxyXFxuLmhvdmVyXFxcXDp0ZXh0LXdoaXRlOmhvdmVyIHtcXG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcbiAgY29sb3I6IHJnYigyNTUgMjU1IDI1NSAvIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xcbn1cXHJcXG5cXHJcXG4uZm9jdXNcXFxcOmJvcmRlci1vcmFuZ2UtNjAwOmZvY3VzIHtcXG4gIC0tdHctYm9yZGVyLW9wYWNpdHk6IDE7XFxuICBib3JkZXItY29sb3I6IHJnYigyMzQgODggMTIgLyB2YXIoLS10dy1ib3JkZXItb3BhY2l0eSkpO1xcbn1cXHJcXG5cXHJcXG4uZm9jdXNcXFxcOm91dGxpbmUtbm9uZTpmb2N1cyB7XFxuICBvdXRsaW5lOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBvdXRsaW5lLW9mZnNldDogMnB4O1xcbn1cXHJcXG5cXHJcXG4uZm9jdXNcXFxcOnJpbmctMDpmb2N1cyB7XFxuICAtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdzogdmFyKC0tdHctcmluZy1pbnNldCkgMCAwIDAgdmFyKC0tdHctcmluZy1vZmZzZXQtd2lkdGgpIHZhcigtLXR3LXJpbmctb2Zmc2V0LWNvbG9yKTtcXG4gIC0tdHctcmluZy1zaGFkb3c6IHZhcigtLXR3LXJpbmctaW5zZXQpIDAgMCAwIGNhbGMoMHB4ICsgdmFyKC0tdHctcmluZy1vZmZzZXQtd2lkdGgpKSB2YXIoLS10dy1yaW5nLWNvbG9yKTtcXG4gIGJveC1zaGFkb3c6IHZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdyksIHZhcigtLXR3LXJpbmctc2hhZG93KSwgdmFyKC0tdHctc2hhZG93LCAwIDAgIzAwMDApO1xcbn1cXHJcXG5cXHJcXG4uZm9jdXNcXFxcOnJpbmctNDpmb2N1cyB7XFxuICAtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdzogdmFyKC0tdHctcmluZy1pbnNldCkgMCAwIDAgdmFyKC0tdHctcmluZy1vZmZzZXQtd2lkdGgpIHZhcigtLXR3LXJpbmctb2Zmc2V0LWNvbG9yKTtcXG4gIC0tdHctcmluZy1zaGFkb3c6IHZhcigtLXR3LXJpbmctaW5zZXQpIDAgMCAwIGNhbGMoNHB4ICsgdmFyKC0tdHctcmluZy1vZmZzZXQtd2lkdGgpKSB2YXIoLS10dy1yaW5nLWNvbG9yKTtcXG4gIGJveC1zaGFkb3c6IHZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdyksIHZhcigtLXR3LXJpbmctc2hhZG93KSwgdmFyKC0tdHctc2hhZG93LCAwIDAgIzAwMDApO1xcbn1cXHJcXG5cXHJcXG4uZm9jdXNcXFxcOnJpbmctcGluay0yMDA6Zm9jdXMge1xcbiAgLS10dy1yaW5nLW9wYWNpdHk6IDE7XFxuICAtLXR3LXJpbmctY29sb3I6IHJnYigyNTEgMjA3IDIzMiAvIHZhcigtLXR3LXJpbmctb3BhY2l0eSkpO1xcbn1cXHJcXG5cXHJcXG4ucGVlcjotbW96LXBsYWNlaG9sZGVyLXNob3duIH4gLnBlZXItcGxhY2Vob2xkZXItc2hvd25cXFxcOnRyYW5zbGF0ZS15LTAge1xcbiAgLS10dy10cmFuc2xhdGUteTogMHB4O1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XFxufVxcclxcblxcclxcbi5wZWVyOnBsYWNlaG9sZGVyLXNob3duIH4gLnBlZXItcGxhY2Vob2xkZXItc2hvd25cXFxcOnRyYW5zbGF0ZS15LTAge1xcbiAgLS10dy10cmFuc2xhdGUteTogMHB4O1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XFxufVxcclxcblxcclxcbi5wZWVyOi1tb3otcGxhY2Vob2xkZXItc2hvd24gfiAucGVlci1wbGFjZWhvbGRlci1zaG93blxcXFw6c2NhbGUtMTAwIHtcXG4gIC0tdHctc2NhbGUteDogMTtcXG4gIC0tdHctc2NhbGUteTogMTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xcbn1cXHJcXG5cXHJcXG4ucGVlcjpwbGFjZWhvbGRlci1zaG93biB+IC5wZWVyLXBsYWNlaG9sZGVyLXNob3duXFxcXDpzY2FsZS0xMDAge1xcbiAgLS10dy1zY2FsZS14OiAxO1xcbiAgLS10dy1zY2FsZS15OiAxO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XFxufVxcclxcblxcclxcbi5wZWVyOmZvY3VzIH4gLnBlZXItZm9jdXNcXFxcOmxlZnQtMCB7XFxuICBsZWZ0OiAwcHg7XFxufVxcclxcblxcclxcbi5wZWVyOmZvY3VzIH4gLnBlZXItZm9jdXNcXFxcOi10cmFuc2xhdGUteS02IHtcXG4gIC0tdHctdHJhbnNsYXRlLXk6IC0xLjVyZW07XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcXG59XFxyXFxuXFxyXFxuLnBlZXI6Zm9jdXMgfiAucGVlci1mb2N1c1xcXFw6c2NhbGUtNzUge1xcbiAgLS10dy1zY2FsZS14OiAuNzU7XFxuICAtLXR3LXNjYWxlLXk6IC43NTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xcbn1cXHJcXG5cXHJcXG4ucGVlcjpmb2N1cyB+IC5wZWVyLWZvY3VzXFxcXDpmb250LW1lZGl1bSB7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXHJcXG5cXHJcXG4ucGVlcjpmb2N1cyB+IC5wZWVyLWZvY3VzXFxcXDp0ZXh0LW9yYW5nZS02MDAge1xcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuICBjb2xvcjogcmdiKDIzNCA4OCAxMiAvIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNDI1cHgpIHtcXG5cXG4gIC5tYXgtXFxcXFs0MjVweFxcXFxdXFxcXDptLWF1dG8ge1xcbiAgICBtYXJnaW46IGF1dG87XFxuICB9XFxufVxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiA2NDBweCkge1xcblxcbiAgLnNtXFxcXDptbC0yIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcXG4gIH1cXG5cXG4gIC5zbVxcXFw6ZmxleC1yb3cge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgfVxcblxcbiAgLnNtXFxcXDpnYXAtNCB7XFxuICAgIGdhcDogMXJlbTtcXG4gIH1cXG5cXG4gIC5zbVxcXFw6dGV4dC1iYXNlIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBsaW5lLWhlaWdodDogMS41cmVtO1xcbiAgfVxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG5cXG4gIC5tZFxcXFw6bS0wIHtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICB9XFxuXFxuICAubWRcXFxcOm1sLVxcXFxbNDB2d1xcXFxdIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDQwdnc7XFxuICB9XFxuXFxuICAubWRcXFxcOm1yLTEwIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyLjVyZW07XFxuICB9XFxuXFxuICAubWRcXFxcOm1heC13LTR4bCB7XFxuICAgIG1heC13aWR0aDogNTZyZW07XFxuICB9XFxuXFxuICAubWRcXFxcOnAtNSB7XFxuICAgIHBhZGRpbmc6IDEuMjVyZW07XFxuICB9XFxuXFxuICAubWRcXFxcOnRleHQtNnhsIHtcXG4gICAgZm9udC1zaXplOiAzLjc1cmVtO1xcbiAgICBsaW5lLWhlaWdodDogMTtcXG4gIH1cXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xcblxcbiAgLmxnXFxcXDptLWF1dG8ge1xcbiAgICBtYXJnaW46IGF1dG87XFxuICB9XFxuXFxuICAubGdcXFxcOm10LTMyIHtcXG4gICAgbWFyZ2luLXRvcDogOHJlbTtcXG4gIH1cXG5cXG4gIC5sZ1xcXFw6Z3JpZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICB9XFxuXFxuICAubGdcXFxcOnctZnVsbCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcblxcbiAgLmxnXFxcXDpncmlkLWNvbHMtYXV0by1maXQtY29udGFjdCB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoNDMwcHgsIDFmcikpO1xcbiAgfVxcblxcbiAgLmxnXFxcXDpnYXAtMTAge1xcbiAgICBnYXA6IDIuNXJlbTtcXG4gIH1cXG5cXG4gIC5sZ1xcXFw6dGV4dC0yeGwge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgbGluZS1oZWlnaHQ6IDJyZW07XFxuICB9XFxufVxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiAxNTM2cHgpIHtcXG5cXG4gIC5cXFxcMzJ4bFxcXFw6bWwtXFxcXFs0MHZ3XFxcXF0ge1xcbiAgICBtYXJnaW4tbGVmdDogNDB2dztcXG4gIH1cXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlL2luZGV4LmNzc1wiLFwiPG5vIHNvdXJjZT5cIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0NBQWMsQ0FBZDs7O0NBQWM7O0FBQWQ7OztFQUFBLHNCQUFjLEVBQWQsTUFBYztFQUFkLGVBQWMsRUFBZCxNQUFjO0VBQWQsbUJBQWMsRUFBZCxNQUFjO0VBQWQscUJBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0VBQUEsZ0JBQWM7QUFBQTs7QUFBZDs7Ozs7OztDQUFjOztBQUFkO0VBQUEsZ0JBQWMsRUFBZCxNQUFjO0VBQWQsOEJBQWMsRUFBZCxNQUFjO0VBQWQsZ0JBQWMsRUFBZCxNQUFjO0VBQWQsY0FBYztLQUFkLFdBQWMsRUFBZCxNQUFjO0VBQWQsNE5BQWMsRUFBZCxNQUFjO0VBQWQsNkJBQWMsRUFBZCxNQUFjO0VBQWQsK0JBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7OztDQUFjOztBQUFkO0VBQUEsU0FBYyxFQUFkLE1BQWM7RUFBZCxvQkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7OztDQUFjOztBQUFkO0VBQUEsU0FBYyxFQUFkLE1BQWM7RUFBZCxjQUFjLEVBQWQsTUFBYztFQUFkLHFCQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEseUNBQWM7VUFBZCxpQ0FBYztBQUFBOztBQUFkOztDQUFjOztBQUFkOzs7Ozs7RUFBQSxrQkFBYztFQUFkLG9CQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSxjQUFjO0VBQWQsd0JBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDs7RUFBQSxtQkFBYztBQUFBOztBQUFkOzs7Q0FBYzs7QUFBZDs7OztFQUFBLCtHQUFjLEVBQWQsTUFBYztFQUFkLGNBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FB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bUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBLHVCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUEseUJBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsaUJBQW1CO0VBQW5CLGlCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBLHdCQUFtQjtLQUFuQixxQkFBbUI7VUFBbkI7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBLHFCQUFtQjtPQUFuQjtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBLHNCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLHNCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLGtCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLGtCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBLDREQUFtQjtFQUFuQixvRUFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSw0REFBbUI7RUFBbkIsbUVBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBLDZCQUFtQjtVQUFuQjtBQUFtQjtBQUFuQjtFQUFBLHNCQUFtQjtLQUFuQjtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQSxpQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxxQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxvQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxxQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxrQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxvQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxtQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxxQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxvQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUEsaUJBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsZUFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxtQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxrQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxrQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUEsb0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsb0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsb0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsb0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQSxvQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUEsZ0tBQW1CO0VBQW5CLHdKQUFtQjtFQUFuQixpTEFBbUI7RUFBbkIsd0RBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsNEJBQW1CO0VBQW5CLHdEQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7O0FBRW5CO0VBQ0UsNEJBQTRCO0VBQzVCLHlEQUEyQztFQUMzQyxzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLDRCQUE0QjtFQUM1Qiw2QkFBNkI7RUFDN0IsZ0RBQWdEO0FBQ2xEOztBQUVBO0VBQ0U7SUFDRSw4QkFBOEI7RUFDaEM7QUFDRjs7QUFsQkE7RUFBQSx1QkNBQTtFREFBO0NDQUE7O0FEQUE7RUFBQSxtQkNBQTtFREFBLG1CQ0FBO0VEQUE7Q0NBQTs7QURBQTtFQUFBLGtCQ0FBO0VEQUEsa0JDQUE7RURBQTtDQ0FBOztBREFBO0VBQUE7Q0NBQTs7QURBQTtFQUFBLG1CQ0FBO0VEQUE7Q0NBQTs7QURBQTtFQUFBLG1CQ0FBO0VEQUE7Q0NBQTs7QURBQTtFQUFBO0NDQUE7O0FEQUE7RUFBQSxxQkNBQTtFREFBO0NDQUE7O0FEQUE7RUFBQSxxQkNBQTtFREFBO0NDQUE7O0FEQUE7RUFBQSx1QkNBQTtFREFBO0NDQUE7O0FEQUE7RUFBQSwrQkNBQTtFREFBO0NDQUE7O0FEQUE7RUFBQSw0R0NBQTtFREFBLDBHQ0FBO0VEQUE7Q0NBQTs7QURBQTtFQUFBLDRHQ0FBO0VEQUEsMEdDQUE7RURBQTtDQ0FBOztBREFBO0VBQUEscUJDQUE7RURBQTtDQ0FBOztBREFBO0VBQUEsc0JDQUE7RURBQTtDQ0FBOztBREFBO0VBQUEsc0JDQUE7RURBQTtDQ0FBOztBREFBO0VBQUEsZ0JDQUE7RURBQSxnQkNBQTtFREFBO0NDQUE7O0FEQUE7RUFBQSxnQkNBQTtFREFBLGdCQ0FBO0VEQUE7Q0NBQTs7QURBQTtFQUFBO0NDQUE7O0FEQUE7RUFBQSwwQkNBQTtFREFBO0NDQUE7O0FEQUE7RUFBQSxrQkNBQTtFREFBLGtCQ0FBO0VEQUE7Q0NBQTs7QURBQTtFQUFBO0NDQUE7O0FEQUE7RUFBQSxxQkNBQTtFREFBO0NDQUE7O0FEQUE7O0VBQUE7SUFBQTtHQ0FBO0NBQUE7O0FEQUE7O0VBQUE7SUFBQTtHQ0FBOztFREFBO0lBQUE7R0NBQTs7RURBQTtJQUFBO0dDQUE7O0VEQUE7SUFBQSxnQkNBQTtJREFBO0dDQUE7Q0FBQTs7QURBQTs7RUFBQTtJQUFBO0dDQUE7O0VEQUE7SUFBQTtHQ0FBOztFREFBO0lBQUE7R0NBQTs7RURBQTtJQUFBO0dDQUE7O0VEQUE7SUFBQTtHQ0FBOztFREFBO0lBQUEsbUJDQUE7SURBQTtHQ0FBO0NBQUE7O0FEQUE7O0VBQUE7SUFBQTtHQ0FBOztFREFBO0lBQUE7R0NBQTs7RURBQTtJQUFBO0dDQUE7O0VEQUE7SUFBQTtHQ0FBOztFREFBO0lBQUE7R0NBQTs7RURBQTtJQUFBO0dDQUE7O0VEQUE7SUFBQSxrQkNBQTtJREFBO0dDQUE7Q0FBQTs7QURBQTs7RUFBQTtJQUFBO0dDQUE7Q0FBQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAdGFpbHdpbmQgYmFzZTtcXHJcXG5AdGFpbHdpbmQgY29tcG9uZW50cztcXHJcXG5AdGFpbHdpbmQgdXRpbGl0aWVzO1xcclxcblxcclxcbi5iZy1pbWFnZSB7XFxyXFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhOyAqL1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuLi9waWNzL2Jyb29rZS5qcGdcXFwiKTtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCBsZWZ0O1xcclxcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1wb3NpdGlvbiAwLjVzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcXHJcXG4gIC5iZy1pbWFnZSB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCByaWdodDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsbnVsbF0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgbWFrZUNoaWxkID0gKHR5cGUsIGlkID0gbnVsbCwgY2xhc3NlcyA9IG51bGwsIHRleHQgPSBcIlwiKSA9PiB7XHJcbiAgY29uc3QgaW5zdGFuY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xyXG4gIGlmIChpZCAhPT0gbnVsbCkge1xyXG4gICAgaW5zdGFuY2UuaWQgPSBpZDtcclxuICB9XHJcbiAgaWYgKGNsYXNzZXMgIT09IG51bGwpIHtcclxuICAgIGluc3RhbmNlLmNsYXNzTGlzdC5hZGQoLi4uY2xhc3Nlcyk7XHJcbiAgfVxyXG4gIGluc3RhbmNlLnRleHRDb250ZW50ID0gdGV4dDtcclxuICByZXR1cm4gaW5zdGFuY2U7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtYWtlQ2hpbGQ7XHJcbiIsImltcG9ydCBtYWtlQ2hpbGQgZnJvbSBcIi4uL2Z1bmN0aW9ucy9tYWtlQ2hpbGRcIjtcclxuaW1wb3J0IGNsb2NrIGZyb20gXCIuLi9waWNzL2NvbnRhY3RzL2Nsb2NrLnBuZ1wiO1xyXG5pbXBvcnQgZW1haWwgZnJvbSBcIi4uL3BpY3MvY29udGFjdHMvZW1haWwucG5nXCI7XHJcbmltcG9ydCBsb2NhdGlvbk1hcmsgZnJvbSBcIi4uL3BpY3MvY29udGFjdHMvbG9jYXRpb25NYXJrLnBuZ1wiO1xyXG5pbXBvcnQgY2FsbCBmcm9tIFwiLi4vcGljcy9jb250YWN0cy9jYWxsLnBuZ1wiO1xyXG5jb25zdCBjb250YWN0UGFnZSA9ICgpID0+IHtcclxuICAvL21haW4gZGl2XHJcbiAgY29uc3QgbWFpbkRpdiA9IG1ha2VDaGlsZChcImRpdlwiLCBcIm1lbnVDb250YWluZXJcIiwgW1xyXG4gICAgXCJsZzpncmlkXCIsXHJcbiAgICBcImxnOmdyaWQtY29scy1hdXRvLWZpdC1jb250YWN0XCIsXHJcbiAgICBcImp1c3RpZnktaXRlbXMtY2VudGVyXCIsXHJcbiAgICBcImdhcC00XCIsXHJcbiAgICBcIjJ4bDptbC1bNDB2d11cIixcclxuICAgIFwibGc6bS1hdXRvXCIsXHJcbiAgICBcIm0tNVwiLFxyXG4gICAgXCJsZzptdC0zMlwiLFxyXG4gICAgXCJtZDpwLTVcIixcclxuICAgIFwicHQtNVwiLFxyXG4gICAgXCJyb3VuZGVkLWxnXCIsXHJcbiAgICBcImJnLW9yYW5nZS0yMDBcIixcclxuICAgIFwibS0yXCIsXHJcbiAgICBcIm1heC13LTV4bFwiLFxyXG4gIF0pO1xyXG4gIGNvbnN0IGNvbnRhY3RzUGFydERpdiA9IG1ha2VDaGlsZChcImRpdlwiLCBcImNvbnRhY3RzUGFydERpdlwiLCBbXHJcbiAgICBcImZsZXhcIixcclxuICAgIFwiZmxleC1jb2xcIixcclxuICAgIFwibWQ6bS0wXCIsXHJcbiAgICBcIm14LTNcIixcclxuICAgIFwiZ3Jvdy0wXCIsXHJcbiAgXSk7XHJcbiAgY29uc3QgbWFwRGl2ID0gbWFrZUNoaWxkKFwiZGl2XCIsIFwibWFwRGl2XCIsIFtcclxuICAgIFwicC00XCIsXHJcbiAgICBcImZsZXhcIixcclxuICAgIFwibGc6dy1mdWxsXCIsXHJcbiAgICBcImp1c3RpZnktY2VudGVyXCIsXHJcbiAgICBcIm0tYXV0b1wiLFxyXG4gIF0pO1xyXG4gIGNvbnN0IHBpY0VsZW1lbnRDcmVhdGUgPSAoc3JjLCBhbHQsIHBhcmFtKSA9PiB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgIGVsZW1lbnQuc3JjID0gc3JjO1xyXG4gICAgZWxlbWVudC5hbHQgPSBhbHQ7XHJcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoLi4ucGFyYW0pO1xyXG4gICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZGl2Q3JlYXRpb24gPSAocGljLCBkZXNjcmlwdGlvbiwgY2xhc3NlcykgPT4ge1xyXG4gICAgY29uc3QgZGl2SXRlbSA9IG1ha2VDaGlsZChcImRpdlwiLCB1bmRlZmluZWQsIFtcImZsZXhcIiwgXCJwYi0yXCJdKTtcclxuICAgIGRpdkl0ZW0uYXBwZW5kQ2hpbGQocGljKTtcclxuICAgIGRpdkl0ZW0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xyXG4gICAgaWYgKGNsYXNzZXMpIHtcclxuICAgICAgZGl2SXRlbS5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzZXMpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRpdkl0ZW07XHJcbiAgfTtcclxuICAvL3BsYWNlIGRpdlxyXG4gIGNvbnN0IGNvbnRhY3RQbGFjZSA9IG1ha2VDaGlsZChcclxuICAgIFwicFwiLFxyXG4gICAgdW5kZWZpbmVkLFxyXG4gICAgW1widGV4dC14bFwiLCBcInBsLTNcIl0sXHJcbiAgICBcIlBhcmMgZGUgbGEgZm9uZGVyaWUsIFNpbnQtSmFucy1Nb2xlbmJlZWtcIlxyXG4gICk7XHJcbiAgY29uc3QgcGxhY2VQaWMgPSBwaWNFbGVtZW50Q3JlYXRlKGxvY2F0aW9uTWFyaywgXCJsb2NhdGlvblwiLCBbXHJcbiAgICBcInctN1wiLFxyXG4gICAgXCJvYmplY3QtY29udGFpblwiLFxyXG4gIF0pO1xyXG4gIGNvbnRhY3RzUGFydERpdi5hcHBlbmRDaGlsZChkaXZDcmVhdGlvbihwbGFjZVBpYywgY29udGFjdFBsYWNlKSk7XHJcblxyXG4gIGNvbnN0IGNvbnRhY3RDbG9jayA9IG1ha2VDaGlsZChcclxuICAgIFwicFwiLFxyXG4gICAgdW5kZWZpbmVkLFxyXG4gICAgW1widGV4dC14bFwiLCBcInBsLTNcIl0sXHJcbiAgICBgTW9uLVN1bjogOWFtLTlwbTtgXHJcbiAgKTtcclxuICBjb25zdCBjbG9ja1BpYyA9IHBpY0VsZW1lbnRDcmVhdGUoY2xvY2ssIFwiY2xvY2tcIiwgW1widy03XCIsIFwib2JqZWN0LWNvbnRhaW5cIl0pO1xyXG4gIGNvbnRhY3RzUGFydERpdi5hcHBlbmRDaGlsZChkaXZDcmVhdGlvbihjbG9ja1BpYywgY29udGFjdENsb2NrKSk7XHJcblxyXG4gIGNvbnN0IGNvbnRhY3RQaG9uZSA9IG1ha2VDaGlsZChcclxuICAgIFwicFwiLFxyXG4gICAgdW5kZWZpbmVkLFxyXG4gICAgW1widGV4dC14bFwiLCBcInBsLTNcIl0sXHJcbiAgICBgKDMzMyktODg4LTMzMzNgXHJcbiAgKTtcclxuICBjb25zdCBjYWxsUGljID0gcGljRWxlbWVudENyZWF0ZShjYWxsLCBcImNhbGxcIiwgW1widy03XCIsIFwib2JqZWN0LWNvbnRhaW5cIl0pO1xyXG4gIGNvbnRhY3RzUGFydERpdi5hcHBlbmRDaGlsZChkaXZDcmVhdGlvbihjYWxsUGljLCBjb250YWN0UGhvbmUpKTtcclxuXHJcbiAgY29uc3QgY29udGFjdEVtYWlsID0gbWFrZUNoaWxkKFxyXG4gICAgXCJwXCIsXHJcbiAgICB1bmRlZmluZWQsXHJcbiAgICBbXCJwbC0zXCIsIFwidGV4dC1vcmFuZ2UtNjAwXCIsIFwidGV4dC0yeGxcIl0sXHJcbiAgICBcIk1lc3NhZ2UgdXNcIlxyXG4gICk7XHJcbiAgY29uc3QgZW1haWxQaWMgPSBwaWNFbGVtZW50Q3JlYXRlKGVtYWlsLCBcImVtYWlsXCIsIFtcInctN1wiLCBcIm9iamVjdC1jb250YWluXCJdKTtcclxuICBjb250YWN0c1BhcnREaXYuYXBwZW5kQ2hpbGQoZGl2Q3JlYXRpb24oZW1haWxQaWMsIGNvbnRhY3RFbWFpbCkpO1xyXG5cclxuICBjb25zdCBmb3JtID0gbWFrZUNoaWxkKFwiZm9ybVwiLCBcImNvbnRhY3RGb3JtXCIsIFtcclxuICAgIFwiZmxleFwiLFxyXG4gICAgXCJmbGV4LWNvbFwiLFxyXG4gICAgXCJpdGVtcy1jZW50ZXJcIixcclxuICAgIFwiaXRlbXMtc3RyZXRjaFwiLFxyXG4gICAgXCJtdC00XCIsXHJcbiAgXSk7XHJcbiAgY29uc3QgaHRtbCA9IGBcclxuICA8ZGl2IGNsYXNzPVwicmVsYXRpdmUgei0wIHctZnVsbCBtYi02IGdyb3VwXCI+XHJcbiAgICAgIDxpbnB1dCB0eXBlPVwiZmxvYXRpbmdfbmFtZVwiIG5hbWU9XCJmbG9hdGluZ19uYW1lXCIgaWQ9XCJmbG9hdGluZ19uYW1lXCIgY2xhc3M9XCJibG9jayBweS0yLjUgcHgtMCB3LWZ1bGwgdGV4dC1zbSB0ZXh0LWdyYXktOTAwIGJnLXRyYW5zcGFyZW50IGJvcmRlci0wIGJvcmRlci1iLTIgYm9yZGVyLW9yYW5nZS0zMDAgYXBwZWFyYW5jZS1ub25lIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTAgZm9jdXM6Ym9yZGVyLW9yYW5nZS02MDAgcGVlclwiIHBsYWNlaG9sZGVyPVwiIFwiIHJlcXVpcmVkIC8+XHJcbiAgICAgIDxsYWJlbCBmb3I9XCJmbG9hdGluZ19uYW1lXCIgY2xhc3M9XCJwZWVyLWZvY3VzOmZvbnQtbWVkaXVtIGFic29sdXRlIHRleHQtc20gdGV4dC1ncmF5LTYwMCBkdXJhdGlvbi0zMDAgdHJhbnNmb3JtIC10cmFuc2xhdGUteS02IHNjYWxlLTc1IHRvcC0zIC16LTEwIG9yaWdpbi1bMF0gcGVlci1mb2N1czpsZWZ0LTAgcGVlci1mb2N1czp0ZXh0LW9yYW5nZS02MDAgcGVlci1wbGFjZWhvbGRlci1zaG93bjpzY2FsZS0xMDAgcGVlci1wbGFjZWhvbGRlci1zaG93bjp0cmFuc2xhdGUteS0wIHBlZXItZm9jdXM6c2NhbGUtNzUgcGVlci1mb2N1czotdHJhbnNsYXRlLXktNlwiPllvdXIgbmFtZTwvbGFiZWw+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cInJlbGF0aXZlIHotMCB3LWZ1bGwgbWItNiBncm91cFwiPlxyXG4gICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgbmFtZT1cImZsb2F0aW5nX2VtYWlsXCIgaWQ9XCJmbG9hdGluZ19lbWFpbFwiIGNsYXNzPVwiYmxvY2sgcHktMi41IHB4LTAgdy1mdWxsIHRleHQtc20gdGV4dC1ncmF5LTkwMCBiZy10cmFuc3BhcmVudCBib3JkZXItMCBib3JkZXItYi0yIGJvcmRlci1vcmFuZ2UtMzAwIGFwcGVhcmFuY2Utbm9uZSBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0wIGZvY3VzOmJvcmRlci1vcmFuZ2UtNjAwIHBlZXJcIiBwbGFjZWhvbGRlcj1cIiBcIiByZXF1aXJlZCAvPlxyXG4gICAgICA8bGFiZWwgZm9yPVwiZmxvYXRpbmdfZW1haWxcIiBjbGFzcz1cInBlZXItZm9jdXM6Zm9udC1tZWRpdW0gYWJzb2x1dGUgdGV4dC1zbSB0ZXh0LWdyYXktNjAwIGR1cmF0aW9uLTMwMCB0cmFuc2Zvcm0gLXRyYW5zbGF0ZS15LTYgc2NhbGUtNzUgdG9wLTMgLXotMTAgb3JpZ2luLVswXSBwZWVyLWZvY3VzOmxlZnQtMCBwZWVyLWZvY3VzOnRleHQtb3JhbmdlLTYwMCBwZWVyLXBsYWNlaG9sZGVyLXNob3duOnNjYWxlLTEwMCBwZWVyLXBsYWNlaG9sZGVyLXNob3duOnRyYW5zbGF0ZS15LTAgcGVlci1mb2N1czpzY2FsZS03NSBwZWVyLWZvY3VzOi10cmFuc2xhdGUteS02XCI+RW1haWwgYWRkcmVzczwvbGFiZWw+XHJcbiAgPC9kaXY+IFxyXG4gIGA7XHJcbiAgZm9ybS5zZXRIVE1MKGh0bWwpO1xyXG5cclxuICBjb25zdCBtYWtlVGV4dEFyZWEgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB0ZXh0QXJlYURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb25zdCB0ZXh0YXJlYUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xyXG4gICAgY29uc3QgdGV4dGFyZWFMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgIHRleHRhcmVhTGFiZWwudGV4dENvbnRlbnQgPSBcIlR5cGUgeW91ciBtZXNzYWdlOlwiO1xyXG4gICAgdGV4dGFyZWFMYWJlbC5jbGFzc0xpc3QuYWRkKFxyXG4gICAgICBcInBlZXItZm9jdXM6Zm9udC1tZWRpdW1cIixcclxuICAgICAgXCJhYnNvbHV0ZVwiLFxyXG4gICAgICBcInRleHQtc21cIixcclxuICAgICAgXCJ0ZXh0LWdyYXktNjAwXCIsXHJcbiAgICAgIFwiZHVyYXRpb24tMzAwXCIsXHJcbiAgICAgIFwidHJhbnNmb3JtXCIsXHJcbiAgICAgIFwiLXRyYW5zbGF0ZS15LTZcIixcclxuICAgICAgXCJzY2FsZS03NVwiLFxyXG4gICAgICBcInRvcC0zXCIsXHJcbiAgICAgIFwiLXotMTBcIixcclxuICAgICAgXCJvcmlnaW4tWzBdXCIsXHJcbiAgICAgIFwicGVlci1mb2N1czpsZWZ0LTBcIixcclxuICAgICAgXCJwZWVyLWZvY3VzOnRleHQtb3JhbmdlLTYwMFwiLFxyXG4gICAgICBcInBlZXItcGxhY2Vob2xkZXItc2hvd246c2NhbGUtMTAwXCIsXHJcbiAgICAgIFwicGVlci1wbGFjZWhvbGRlci1zaG93bjp0cmFuc2xhdGUteS0wXCIsXHJcbiAgICAgIFwicGVlci1mb2N1czpzY2FsZS03NVwiLFxyXG4gICAgICBcInBlZXItZm9jdXM6LXRyYW5zbGF0ZS15LTZcIlxyXG4gICAgKTtcclxuICAgIHRleHRhcmVhTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidGV4dEFyZWFcIik7XHJcbiAgICB0ZXh0YXJlYUlucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiIFwiKTtcclxuICAgIHRleHRhcmVhSW5wdXQuaWQgPSBcInRleHRBcmVhXCI7XHJcbiAgICB0ZXh0YXJlYUlucHV0LmNsYXNzTGlzdC5hZGQoXHJcbiAgICAgIFwiYmxvY2tcIixcclxuICAgICAgXCJweS0yLjVcIixcclxuICAgICAgXCJweC0wXCIsXHJcbiAgICAgIFwidy1mdWxsXCIsXHJcbiAgICAgIFwidGV4dC1zbVwiLFxyXG4gICAgICBcInRleHQtZ3JheS05MDBcIixcclxuICAgICAgXCJiZy10cmFuc3BhcmVudFwiLFxyXG4gICAgICBcImJvcmRlci0wXCIsXHJcbiAgICAgIFwiYm9yZGVyLWItMlwiLFxyXG4gICAgICBcImJvcmRlci1vcmFuZ2UtMzAwXCIsXHJcbiAgICAgIFwiYXBwZWFyYW5jZS1ub25lXCIsXHJcbiAgICAgIFwiZm9jdXM6b3V0bGluZS1ub25lXCIsXHJcbiAgICAgIFwiZm9jdXM6cmluZy0wXCIsXHJcbiAgICAgIFwiZm9jdXM6Ym9yZGVyLW9yYW5nZS02MDBcIixcclxuICAgICAgXCJwZWVyXCIsXHJcbiAgICAgIFwicmVzaXplLW5vbmVcIlxyXG4gICAgKTtcclxuICAgIHRleHRBcmVhRGl2LmNsYXNzTGlzdC5hZGQoXCJyZWxhdGl2ZVwiLCBcInotMFwiLCBcInctZnVsbFwiLCBcIm1iLTZcIiwgXCJncm91cFwiKTtcclxuICAgIHRleHRBcmVhRGl2LmFwcGVuZENoaWxkKHRleHRhcmVhSW5wdXQpO1xyXG4gICAgdGV4dEFyZWFEaXYuYXBwZW5kQ2hpbGQodGV4dGFyZWFMYWJlbCk7XHJcbiAgICByZXR1cm4gdGV4dEFyZWFEaXY7XHJcbiAgfTtcclxuICBjb25zdCBzdWJtaXRCdG4gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgYnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XHJcbiAgICBidG4uY2xhc3NMaXN0LmFkZChcclxuICAgICAgXCJiZy10cmFuc3BhcmVudFwiLFxyXG4gICAgICBcImhvdmVyOmJnLW9yYW5nZS00MDBcIixcclxuICAgICAgXCJ0ZXh0LWJsYWNrXCIsXHJcbiAgICAgIFwiZm9udC1zZW1pYm9sZFwiLFxyXG4gICAgICBcImhvdmVyOnRleHQtd2hpdGVcIixcclxuICAgICAgXCJweS0xXCIsXHJcbiAgICAgIFwicHgtMlwiLFxyXG4gICAgICBcIm10LTJcIixcclxuICAgICAgXCJib3JkZXJcIixcclxuICAgICAgXCJib3JkZXItYmxhY2tcIixcclxuICAgICAgXCJob3Zlcjpib3JkZXItdHJhbnNwYXJlbnRcIixcclxuICAgICAgXCJyb3VuZGVkXCIsXHJcbiAgICAgIFwidy0xNlwiXHJcbiAgICApO1xyXG4gICAgYnRuLnRleHRDb250ZW50ID0gXCJTZW5kXCI7XHJcbiAgICByZXR1cm4gYnRuO1xyXG4gIH07XHJcbiAgbWFwRGl2LmlubmVySFRNTCA9IGA8aWZyYW1lIFxyXG4gIHNyYz1cImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9lbWJlZD9wYj0hMW0xOCExbTEyITFtMyExZDI1MTguODg1ODc0Njk3MDcxITJkNC4zMjg4MDU4NjI5NTE3Mzg1ITNkNTAuODUxNzk3NTk4ODUyNDchMm0zITFmMCEyZjAhM2YwITNtMiExaTEwMjQhMmk3NjghNGYxMy4xITNtMyExbTIhMXMweDQ3YzNjMzFiODFmNjk2NTMlM0EweGI1NzU3ZDhlNDk3M2EwYSEyc0ZvbmRlcmllcGFyayE1ZTAhM20yITFzZW4hMnNiZSE0djE2ODU3MTM5Nzk1MDUhNW0yITFzZW4hMnNiZVwiIFxyXG5cclxuICBoZWlnaHQ9XCI0MDBweFwiIFxyXG4gIHdpZHRoPVwiMTAwJVwiXHJcbiAgc3R5bGU9XCJib3JkZXI6MDsgYm9yZGVyLXJhZGl1czogMTBweDsgb2JqZWN0LWZpdDogY292ZXI7XCIgXHJcbiAgYWxsb3dmdWxsc2NyZWVuPVwiXCIgXHJcbiAgbG9hZGluZz1cImxhenlcIiBcclxuICByZWZlcnJlcnBvbGljeT1cIm5vLXJlZmVycmVyLXdoZW4tZG93bmdyYWRlXCI+XHJcbiAgPC9pZnJhbWU+YDtcclxuICBmb3JtLmFwcGVuZENoaWxkKG1ha2VUZXh0QXJlYSgpKTtcclxuICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdEJ0bigpKTtcclxuICBjb250YWN0c1BhcnREaXYuYXBwZW5kQ2hpbGQoZm9ybSk7XHJcbiAgLy8gZGl2V2l0aFRleHRhcmVhLmFwcGVuZENoaWxkKHRleHRhcmVhKTtcclxuICBtYWluRGl2LmFwcGVuZENoaWxkKGNvbnRhY3RzUGFydERpdik7XHJcbiAgbWFpbkRpdi5hcHBlbmRDaGlsZChtYXBEaXYpO1xyXG4gIHJldHVybiBtYWluRGl2O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29udGFjdFBhZ2U7XHJcbiIsImltcG9ydCBkb251dCBmcm9tIFwiLi4vcGljcy9kb251dC5wbmdcIjtcclxuaW1wb3J0IG1ha2VDaGlsZCBmcm9tIFwiLi4vZnVuY3Rpb25zL21ha2VDaGlsZFwiO1xyXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xyXG5cclxuY29uc3QgbWFrZUhlYWRlciA9ICgpID0+IHtcclxuICBjb25zdCBkaXZIZWFkZXIgPSBtYWtlQ2hpbGQoXCJoZWFkZXJcIiwgXCJoZWFkZXJcIiwgW1xyXG4gICAgXCJmbGV4XCIsXHJcbiAgICBcIml0ZW1zLWNlbnRlclwiLFxyXG4gICAgXCJtLTNcIixcclxuICAgIFwic3RpY2t5XCIsXHJcbiAgICBcInRvcC0zXCIsXHJcbiAgICBcInotMTBcIixcclxuICBdKTtcclxuICBjb25zdCBsb2dvRGl2ID0gbWFrZUNoaWxkKFwiZGl2XCIsIFwibG9nb0RpdlwiLCBbXHJcbiAgICBcImZsZXhcIixcclxuICAgIFwiaXRlbXMtY2VudGVyXCIsXHJcbiAgICBcImZsZXgtY29sXCIsXHJcbiAgICBcInNtOmZsZXgtcm93XCIsXHJcbiAgICBcImN1cnNvci1wb2ludGVyXCIsXHJcbiAgXSk7XHJcbiAgY29uc3QgbG9nb0ltZyA9IG1ha2VDaGlsZChcImltZ1wiLCBcImltZ1wiLCBbXCJ3LThcIiwgXCJoLThcIl0pO1xyXG4gIGNvbnN0IGJyYW5kTmFtZSA9IG1ha2VDaGlsZChcclxuICAgIFwiaDFcIixcclxuICAgIFwiYnJhbmROYW1lXCIsXHJcbiAgICBbXCJmb250LWJvbGRcIiwgXCJ1cHBlcmNhc2VcIiwgXCJtbC0wXCIsIFwic206bWwtMlwiLCBcInRleHQteHNcIiwgXCJzbTp0ZXh0LWJhc2VcIl0sXHJcbiAgICBcIlNhdm9yeSBEZWxpZ2h0c1wiXHJcbiAgKTtcclxuICBsb2dvSW1nLnNyYyA9IGRvbnV0O1xyXG4gIGNvbnN0IGJ1dHRvbkRpdiA9IG1ha2VDaGlsZChcImRpdlwiLCBcImJ0bkRpdlwiLCBbXHJcbiAgICBcImZsZXhcIixcclxuICAgIFwianVzdGlmeS1jZW50ZXJcIixcclxuICAgIFwiZ3Jvd1wiLFxyXG4gICAgXCJsZzpnYXAtMTBcIixcclxuICAgIFwic206Z2FwLTRcIixcclxuICAgIFwiZ2FwLTRcIixcclxuICAgIFwibGc6dGV4dC0yeGxcIixcclxuICBdKTtcclxuICBjb25zdCBidXR0b25zID0gKCkgPT4ge1xyXG4gICAgY29uc3QgYnRucyA9IFtcIkhvbWVcIiwgXCJNZW51XCIsIFwiQ29udGFjdHNcIl07XHJcbiAgICBidG5zLmZvckVhY2goKGUpID0+IHtcclxuICAgICAgYnV0dG9uRGl2LmFwcGVuZENoaWxkKFxyXG4gICAgICAgIG1ha2VDaGlsZChcclxuICAgICAgICAgIFwiYnV0dG9uXCIsXHJcbiAgICAgICAgICBlLFxyXG4gICAgICAgICAgW1xyXG4gICAgICAgICAgICBcImhvdmVyOnRleHQtb3JhbmdlLTYwMFwiLFxyXG4gICAgICAgICAgICBcInRyYW5zaXRpb25cIixcclxuICAgICAgICAgICAgXCJlYXNlLWluLW91dFwiLFxyXG4gICAgICAgICAgICBcImRlbGF5LTUwXCIsXHJcbiAgICAgICAgICAgIFwiaG92ZXI6LXRyYW5zbGF0ZS15LXB4XCIsXHJcbiAgICAgICAgICAgIFwiaG92ZXI6c2NhbGUtMTEwXCIsXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgICAgZVxyXG4gICAgICAgIClcclxuICAgICAgKTtcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgYnV0dG9ucygpO1xyXG5cclxuICBsb2dvRGl2LmFwcGVuZENoaWxkKGxvZ29JbWcpO1xyXG4gIGxvZ29EaXYuYXBwZW5kQ2hpbGQoYnJhbmROYW1lKTtcclxuICBkaXZIZWFkZXIuYXBwZW5kQ2hpbGQobG9nb0Rpdik7XHJcbiAgZGl2SGVhZGVyLmFwcGVuZENoaWxkKGJ1dHRvbkRpdik7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChkaXZIZWFkZXIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWFrZUhlYWRlcjtcclxuIiwiaW1wb3J0IG1ha2VDaGlsZCBmcm9tIFwiLi4vZnVuY3Rpb25zL21ha2VDaGlsZFwiO1xyXG5pbXBvcnQgbWVudVBhZ2UgZnJvbSBcIi4vbWVudVBhZ2UuanNcIjtcclxuY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xyXG4gIGNvbnN0IGhvbWVNYWluQ29udGVudCA9IG1ha2VDaGlsZChcImRpdlwiLCBcImhvbWVNYWluQ29udGVudFwiLCBbXHJcbiAgICBcIm0tYXV0b1wiLFxyXG4gICAgXCJtZDptbC1bNDB2d11cIixcclxuICAgIFwibWwtWzIwdnddXCIsXHJcbiAgICBcIm1yLTEwXCIsXHJcbiAgICBcIm1heC1bNDI1cHhdOm0tYXV0b1wiLFxyXG4gICAgXCJweC0xXCIsXHJcbiAgICBcImZsZXhcIixcclxuICAgIFwiZmxleC1jb2xcIixcclxuICAgIFwiaXRlbXMtY2VudGVyXCIsXHJcbiAgXSk7XHJcbiAgY29uc3QgaGVhZGVySW5NYWluQ29udGVudCA9IG1ha2VDaGlsZChcclxuICAgIFwiaDFcIixcclxuICAgIFwiaGVhZGVySW5NYWluQ29udGVudFwiLFxyXG4gICAgW1xyXG4gICAgICBcIm1kOnRleHQtNnhsXCIsXHJcbiAgICAgIFwidGV4dC01eGxcIixcclxuICAgICAgXCJmb250LWJsYWNrXCIsXHJcbiAgICAgIFwidGV4dC1jZW50ZXJcIixcclxuICAgICAgXCJiZy1ncmFkaWVudC10by1yXCIsXHJcbiAgICAgIFwiZnJvbS1yZWQtNTAwXCIsXHJcbiAgICAgIFwidG8tcHVycGxlLTUwMFwiLFxyXG4gICAgICBcInRleHQtdHJhbnNwYXJlbnRcIixcclxuICAgICAgXCJiZy1jbGlwLXRleHRcIixcclxuICAgICAgXCJtdC04XCIsXHJcbiAgICAgIFwicGItMTBcIixcclxuICAgIF0sXHJcbiAgICBcIldoZXJlIGV2ZXJ5IGJpdGUgaXMgYSBkZWxpZ2h0XCJcclxuICApO1xyXG4gIGNvbnN0IHdlbGNvbWVQYXIgPSBtYWtlQ2hpbGQoXHJcbiAgICBcInBcIixcclxuICAgIFwid2VsY29tZVBhclwiLFxyXG4gICAgW1widGV4dC0yeGxcIiwgXCJ0ZXh0LWNlbnRlclwiLCBcInB4LThcIl0sXHJcbiAgICBgVGhhbmsgeW91IGZvciBjaG9vc2luZyBTYXZvcnkgRGVsaWdodHMuIFdlJ3JlIGV4Y2l0ZWQgdG8gc2hhcmUgb3VyIHBhc3Npb24gZm9yIGRlbGljaW91cyBmb29kIHdpdGggeW91LmBcclxuICApO1xyXG4gIGNvbnN0IGJ0bk9yZGVyID0gbWFrZUNoaWxkKFxyXG4gICAgXCJidXR0b25cIixcclxuICAgIFwiYnRuT3JkZXJcIixcclxuICAgIFtcclxuICAgICAgXCJ0ZXh0LXdoaXRlXCIsXHJcbiAgICAgIFwiYmctZ3JhZGllbnQtdG8tYnJcIixcclxuICAgICAgXCJmcm9tLXBpbmstNTAwXCIsXHJcbiAgICAgIFwidG8tb3JhbmdlLTQwMFwiLFxyXG4gICAgICBcImhvdmVyOmJnLWdyYWRpZW50LXRvLWJsXCIsXHJcbiAgICAgIFwiZm9jdXM6cmluZy00XCIsXHJcbiAgICAgIFwiZm9jdXM6b3V0bGluZS1ub25lXCIsXHJcbiAgICAgIFwiZm9jdXM6cmluZy1waW5rLTIwMFwiLFxyXG4gICAgICBcImZvbnQtbWVkaXVtXCIsXHJcbiAgICAgIFwicm91bmRlZC1sZ1wiLFxyXG4gICAgICBcInRleHQtc21cIixcclxuICAgICAgXCJweC01XCIsXHJcbiAgICAgIFwicHktMi41XCIsXHJcbiAgICAgIFwidGV4dC1jZW50ZXJcIixcclxuICAgICAgXCJibG9ja1wiLFxyXG4gICAgICBcInctZml0XCIsXHJcbiAgICAgIFwibXQtNVwiLFxyXG4gICAgXSxcclxuICAgIFwiT3JkZXIgTm93XCJcclxuICApO1xyXG4gIGJ0bk9yZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgbGV0IG9sZENoaWxkID0gbWFpbi5jaGlsZE5vZGVzWzFdO1xyXG4gICAgbWFpbi5yZXBsYWNlQ2hpbGQobWVudVBhZ2UoKSwgb2xkQ2hpbGQpO1xyXG4gIH0pO1xyXG4gIGhvbWVNYWluQ29udGVudC5hcHBlbmRDaGlsZChoZWFkZXJJbk1haW5Db250ZW50KTtcclxuICBob21lTWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQod2VsY29tZVBhcik7XHJcbiAgaG9tZU1haW5Db250ZW50LmFwcGVuZENoaWxkKGJ0bk9yZGVyKTtcclxuICByZXR1cm4gaG9tZU1haW5Db250ZW50O1xyXG59XHJcbiIsImltcG9ydCBicmVha2Zhc3QgZnJvbSBcIi4uL3BpY3MvbWVudS9icmVha2Zhc3QucG5nXCI7XHJcbmltcG9ydCBidXJnZXIgZnJvbSBcIi4uL3BpY3MvbWVudS9idXJnZXIucG5nXCI7XHJcbmltcG9ydCBjYWtlIGZyb20gXCIuLi9waWNzL21lbnUvY2FrZS5wbmdcIjtcclxuaW1wb3J0IGNoaWNrZW4gZnJvbSBcIi4uL3BpY3MvbWVudS9jaGlja2VuLnBuZ1wiO1xyXG5pbXBvcnQgZnJlbmNoRnJpZXMgZnJvbSBcIi4uL3BpY3MvbWVudS9mcmVuY2hGcmllcy5wbmdcIjtcclxuaW1wb3J0IGhvdERvZyBmcm9tIFwiLi4vcGljcy9tZW51L2hvdERvZy5wbmdcIjtcclxuaW1wb3J0IG5vb2RsZXMgZnJvbSBcIi4uL3BpY3MvbWVudS9ub29kbGVzLnBuZ1wiO1xyXG5pbXBvcnQgcGl6emEgZnJvbSBcIi4uL3BpY3MvbWVudS9waXp6YS5wbmdcIjtcclxuaW1wb3J0IHNhbmR3aWNoIGZyb20gXCIuLi9waWNzL21lbnUvc2FuZHdpY2gucG5nXCI7XHJcbmltcG9ydCB0YWNvIGZyb20gXCIuLi9waWNzL21lbnUvdGFjby5wbmdcIjtcclxuXHJcbmltcG9ydCBtYWtlQ2hpbGQgZnJvbSBcIi4uL2Z1bmN0aW9ucy9tYWtlQ2hpbGRcIjtcclxuXHJcbmNvbnN0IG1lbnVJdGVtTWFrZXIgPSAoZGlzaE5hbWUsIGRpc2hEZXNjcmlwdGlvbiwgcHJpY2UsIHNyYykgPT4ge1xyXG4gIGxldCBtZW51SXRlbURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgbWVudUl0ZW1EaXYuY2xhc3NMaXN0LmFkZChcclxuICAgIFwiZmxleFwiLFxyXG4gICAgXCJnYXAteC00XCIsXHJcbiAgICBcIm14LTRcIixcclxuICAgIFwiYmctc2xhdGUtMTAwXCIsXHJcbiAgICBcInJvdW5kZWQtbGdcIixcclxuICAgIFwicHgtNVwiLFxyXG4gICAgXCJweS0yXCIsXHJcbiAgICBcImhvdmVyOmJnLW9yYW5nZS0yMDBcIixcclxuICAgIFwiaG92ZXI6c2NhbGUtMTA1XCJcclxuICApO1xyXG4gIGxldCBtZW51SXRlbVBpYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgbWVudUl0ZW1QaWMuY2xhc3NMaXN0LmFkZChcIm9iamVjdC1jb250YWluXCIsIFwibWF4LXctZnVsbFwiKTtcclxuICBsZXQgbWVudUl0ZW1EZXNjRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBtZW51SXRlbURlc2NEaXYuY2xhc3NMaXN0LmFkZChcImZsZXhcIiwgXCJmbGV4LWNvbFwiKTtcclxuICBsZXQgbWVudUl0ZW1EZXNjSGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcclxuICBtZW51SXRlbURlc2NIZWFkLmNsYXNzTGlzdC5hZGQoXCIzeGxcIiwgXCJmb250LWJvbGRcIiwgXCJtYi0yXCIpO1xyXG4gIGxldCBtZW51SXRlbURlc2NJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgbWVudUl0ZW1EZXNjSW5mby5jbGFzc0xpc3QuYWRkKFwiZmxleC0xXCIpO1xyXG4gIGxldCBtZW51SXRlbURlc2NQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIG1lbnVJdGVtRGVzY1ByaWNlLmNsYXNzTGlzdC5hZGQoXCJzZWxmLWVuZFwiLCBcIjJ4bFwiLCBcImZvbnQtYm9sZFwiKTtcclxuICBtZW51SXRlbURlc2NIZWFkLnRleHRDb250ZW50ID0gZGlzaE5hbWU7XHJcbiAgbWVudUl0ZW1EZXNjSW5mby50ZXh0Q29udGVudCA9IGRpc2hEZXNjcmlwdGlvbjtcclxuICBtZW51SXRlbURlc2NQcmljZS50ZXh0Q29udGVudCA9IHByaWNlO1xyXG4gIG1lbnVJdGVtUGljLnNyYyA9IHNyYztcclxuICBtZW51SXRlbURlc2NEaXYuYXBwZW5kQ2hpbGQobWVudUl0ZW1EZXNjSGVhZCk7XHJcbiAgbWVudUl0ZW1EZXNjRGl2LmFwcGVuZENoaWxkKG1lbnVJdGVtRGVzY0luZm8pO1xyXG4gIG1lbnVJdGVtRGVzY0Rpdi5hcHBlbmRDaGlsZChtZW51SXRlbURlc2NQcmljZSk7XHJcbiAgbWVudUl0ZW1EaXYuYXBwZW5kQ2hpbGQobWVudUl0ZW1QaWMpO1xyXG4gIG1lbnVJdGVtRGl2LmFwcGVuZENoaWxkKG1lbnVJdGVtRGVzY0Rpdik7XHJcbiAgbWVudUl0ZW1EaXYuc2V0QXR0cmlidXRlKFwiZGF0YS1jZWxsXCIsIFwiZ3JpZC1pdGVtXCIpO1xyXG4gIHJldHVybiBtZW51SXRlbURpdjtcclxufTtcclxuXHJcbmNvbnN0IG1lbnVQYWdlID0gKCkgPT4ge1xyXG4gIGxldCBtZW51ID0gbWFrZUNoaWxkKFwiZGl2XCIsIFwibWVudUNvbnRhaW5lclwiLCBbXHJcbiAgICBcImdyaWRcIixcclxuICAgIFwiZ2FwLTRcIixcclxuICAgIFwiZ3JpZC1jb2xzLWF1dG8tZml0XCIsXHJcbiAgICBcIm1kOm1heC13LTR4bFwiLFxyXG4gICAgXCJtZDptbC1bNDB2d11cIixcclxuICAgIFwibWQ6bXItMTBcIixcclxuICAgIFwicHktNVwiLFxyXG4gICAgXCJyb3VuZGVkLWxnXCIsXHJcbiAgXSk7XHJcbiAgbWVudS5hcHBlbmRDaGlsZChcclxuICAgIG1lbnVJdGVtTWFrZXIoXHJcbiAgICAgIFwiTW9ybmluZyBTdW5yaXNlIERlbGlnaHRcIixcclxuICAgICAgXCJXYWtlIHVwIHRvIGEgcGxhdGUgb2YgZmx1ZmZ5IHNjcmFtYmxlZCBlZ2dzLCBzaXp6bGluZyBiYWNvbiwgZ29sZGVuIGhhc2ggYnJvd25zLCBhbmQgYSBzaWRlIG9mIHRvYXN0ZWQgYnJlYWQsIHRoZSBwZXJmZWN0IHN0YXJ0IHRvIHlvdXIgZGF5LlwiLFxyXG4gICAgICBcIiQ4XCIsXHJcbiAgICAgIGJyZWFrZmFzdFxyXG4gICAgKVxyXG4gICk7XHJcbiAgbWVudS5hcHBlbmRDaGlsZChcclxuICAgIG1lbnVJdGVtTWFrZXIoXHJcbiAgICAgIFwiRmxhbWUtR3JpbGxlZCBEZWxpZ2h0XCIsXHJcbiAgICAgIFwiU2F2b3IgdGhlIHBlcmZlY3QgYml0ZTogSnVpY3kgYmVlZiwgbWVsdGVkIGNoZWVzZSwgY3Jpc3AgbGV0dHVjZSwgcmlwZSB0b21hdG9lcywgYW5kIHRhbmd5IHBpY2tsZXMsIGFsbCBpbiBhIHRvYXN0ZWQgYnVuLlwiLFxyXG4gICAgICBcIiQxMlwiLFxyXG4gICAgICBidXJnZXJcclxuICAgIClcclxuICApO1xyXG4gIG1lbnUuYXBwZW5kQ2hpbGQoXHJcbiAgICBtZW51SXRlbU1ha2VyKFxyXG4gICAgICBcIlZlbHZldCBEcmVhbSBEZWxpZ2h0XCIsXHJcbiAgICAgIFwiIEV4cGVyaWVuY2UgcHVyZSBibGlzcyB3aXRoIHRoaXMgbHVzY2lvdXMsIG1vaXN0IHJlZCB2ZWx2ZXQgY2FrZSwgbGF5ZXJlZCB3aXRoIGNyZWFteSBmcm9zdGluZyBhbmQgaGludHMgb2YgY2hvY29sYXRlLCBjcmVhdGluZyBhbiBpcnJlc2lzdGlibGUgc3ltcGhvbnkgb2YgZmxhdm9ycy5cIixcclxuICAgICAgXCIkNlwiLFxyXG4gICAgICBjYWtlXHJcbiAgICApXHJcbiAgKTtcclxuICBtZW51LmFwcGVuZENoaWxkKFxyXG4gICAgbWVudUl0ZW1NYWtlcihcclxuICAgICAgXCJaZXN0eSBDaGlja2VuIEluZnVzaW9uXCIsXHJcbiAgICAgIFwiU2F0aXNmeSB5b3VyIGNyYXZpbmdzIHdpdGggdGVuZGVyLCBmbGF2b3JmdWwgY2hpY2tlbiwgc2VydmVkIHdpdGggeW91ciBjaG9pY2Ugb2Ygc2lkZXMgZm9yIGEgbW91dGh3YXRlcmluZyBhbmQgY29tcGxldGUgbWVhbC5cIixcclxuICAgICAgXCIkMTFcIixcclxuICAgICAgY2hpY2tlblxyXG4gICAgKVxyXG4gICk7XHJcbiAgbWVudS5hcHBlbmRDaGlsZChcclxuICAgIG1lbnVJdGVtTWFrZXIoXHJcbiAgICAgIFwiR29sZGVuIENydW5jaCBTZW5zYXRpb25cIixcclxuICAgICAgXCJEZWxpZ2h0IGluIGNyaXNweSwgZ29sZGVuIGZyaWVzLCBwZXJmZWN0bHkgc2Vhc29uZWQgYW5kIGlycmVzaXN0aWJseSBhZGRpY3RpdmUsIHByb3ZpZGluZyBhIHNhdGlzZnlpbmcgY3J1bmNoIHdpdGggZXZlcnkgYml0ZS5cIixcclxuICAgICAgXCIkNVwiLFxyXG4gICAgICBmcmVuY2hGcmllc1xyXG4gICAgKVxyXG4gICk7XHJcbiAgbWVudS5hcHBlbmRDaGlsZChcclxuICAgIG1lbnVJdGVtTWFrZXIoXHJcbiAgICAgIFwiU2l6emxpbicgRnJhbmtmdXJ0ZXIgRmVhc3RcIixcclxuICAgICAgXCJBIGdyaWxsZWQgaG90IGRvZyBuZXN0bGVkIGluIGEgc29mdCBidW4sIHRvcHBlZCB3aXRoIHNhdm9yeSBjb25kaW1lbnRzIGZvciBhIGJ1cnN0IG9mIGZsYXZvciB0aGF0IHdpbGwgc2F0aXNmeSB5b3VyIGNyYXZpbmdzIHdpdGggZXZlcnkganVpY3kgYml0ZS5cIixcclxuICAgICAgXCIkNFwiLFxyXG4gICAgICBob3REb2dcclxuICAgIClcclxuICApO1xyXG4gIG1lbnUuYXBwZW5kQ2hpbGQoXHJcbiAgICBtZW51SXRlbU1ha2VyKFxyXG4gICAgICBcIlNhdm9yeSBOb29kbGUgU3ltcGhvbnlcIixcclxuICAgICAgXCJBIHRhbnRhbGl6aW5nIGNvbWJpbmF0aW9uIG9mIGNvb2tlZCBub29kbGVzLCBhcm9tYXRpYyBzYXVjZSwgYW5kIHZpYnJhbnQgdmVnZXRhYmxlcyB0aGF0IGNyZWF0ZSBhbiBleHBsb3Npb24gb2YgZmxhdm9ycyBpbiBldmVyeSBmb3JrZnVsLlwiLFxyXG4gICAgICBcIiQxMFwiLFxyXG4gICAgICBub29kbGVzXHJcbiAgICApXHJcbiAgKTtcclxuICBtZW51LmFwcGVuZENoaWxkKFxyXG4gICAgbWVudUl0ZW1NYWtlcihcclxuICAgICAgXCJGaWVyeSBQZXBwZXJvbmkgRXhwbG9zaW9uXCIsXHJcbiAgICAgIFwiSW5kdWxnZSBpbiBhIHRhbnRhbGl6aW5nIGJsZW5kIG9mIGdvb2V5IG1lbHRlZCBjaGVlc2UsIHNhdm9yeSBwZXBwZXJvbmksIGFuZCBhIG1lZGxleSBvZiB2aWJyYW50IHZlZ2dpZXMgYXRvcCBhIGNyaXNweSBjcnVzdCwgZGVsaXZlcmluZyBhIGJ1cnN0IG9mIGZsYXZvcnMgaW4gZXZlcnkgYml0ZS5cIixcclxuICAgICAgXCIkOVwiLFxyXG4gICAgICBwaXp6YVxyXG4gICAgKVxyXG4gICk7XHJcbiAgbWVudS5hcHBlbmRDaGlsZChcclxuICAgIG1lbnVJdGVtTWFrZXIoXHJcbiAgICAgIFwiSGVhcnR5IFN0YWNrIFN1cHJlbWVcIixcclxuICAgICAgXCJBIGRlbGljaW91cyBjb21iaW5hdGlvbiBvZiBwcmVtaXVtIG1lYXRzLCBtZWx0ZWQgY2hlZXNlLCBmcmVzaCB2ZWdnaWVzLCBhbmQgemVzdHkgY29uZGltZW50cywgY3JlYXRpbmcgYSBtb3V0aHdhdGVyaW5nIHNhbmR3aWNoIHRoYXQncyBzdXJlIHRvIHNhdGlzZnkuXCIsXHJcbiAgICAgIFwiJDZcIixcclxuICAgICAgc2FuZHdpY2hcclxuICAgIClcclxuICApO1xyXG4gIG1lbnUuYXBwZW5kQ2hpbGQoXHJcbiAgICBtZW51SXRlbU1ha2VyKFxyXG4gICAgICBcIlplc3R5IEZpZXN0YSBUYWNvXCIsXHJcbiAgICAgIFwiQml0ZSBpbnRvIGEgZmllc3RhIG9mIGZsYXZvcnMgd2l0aCB0ZW5kZXIsIHNlYXNvbmVkIG1lYXQsIHZpYnJhbnQgdG9wcGluZ3MsIGFuZCB6ZXN0eSBzYXVjZXMsIGFsbCB3cmFwcGVkIGluIGEgd2FybSB0b3J0aWxsYSBmb3IgYSBtb3V0aHdhdGVyaW5nIHRhY28gZXhwZXJpZW5jZS5cIixcclxuICAgICAgXCIkOVwiLFxyXG4gICAgICB0YWNvXHJcbiAgICApXHJcbiAgKTtcclxuICByZXR1cm4gbWVudTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1lbnVQYWdlO1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIi8vIGltcG9ydCBmIGZyb20gXCIuL21haW5QYWdlXCI7XHJcbmltcG9ydCBcIi4uL3N0eWxlL2luZGV4LmNzc1wiO1xyXG5pbXBvcnQgbWFrZUhlYWRlciBmcm9tIFwiLi9oZWFkZXIuanNcIjtcclxuaW1wb3J0IG1haW5QYWdlIGZyb20gXCIuL21haW5QYWdlLmpzXCI7XHJcbmltcG9ydCBtZW51UGFnZSBmcm9tIFwiLi9tZW51UGFnZS5qc1wiO1xyXG5pbXBvcnQgY29udGFjdFBhZ2UgZnJvbSBcIi4vY29udGFjdFBhZ2UuanNcIjtcclxubWFrZUhlYWRlcigpO1xyXG5kb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJiZy1pbWFnZVwiKTtcclxuY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XHJcbm1haW5Db250ZW50LmFwcGVuZENoaWxkKG1haW5QYWdlKCkpO1xyXG5cclxuY29uc3QgbmF2QnRuTGlzdGVuZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgYnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjYnRuRGl2ID4gYnV0dG9uXCIpO1xyXG4gIGJ0bnNbMF0uY2xhc3NMaXN0LmFkZChcInRleHQtb3JhbmdlLTYwMFwiKTtcclxuICBsZXQgYnRuTWFpbiA9IGRvY3VtZW50XHJcbiAgICAucXVlcnlTZWxlY3RvcihcIiNidG5PcmRlclwiKVxyXG4gICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBidWlsZFBhZ2UpO1xyXG4gIGJ0bnMuZm9yRWFjaCgoZSkgPT4gZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYnVpbGRQYWdlKSk7XHJcblxyXG4gIGZ1bmN0aW9uIGJ1aWxkUGFnZShlKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5pZCk7XHJcbiAgICBjb25zdCBuYXZiYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2hlYWRlclwiKTtcclxuICAgIG5hdmJhci5jbGFzc0xpc3QucmVtb3ZlKFwiYmctc2xhdGUtMTAwXCIsIFwibS0wXCIsIFwidG9wLTBcIiwgXCJwLTNcIik7XHJcbiAgICBidG5zLmZvckVhY2goKGUpID0+IGUuY2xhc3NMaXN0LnJlbW92ZShcInRleHQtb3JhbmdlLTYwMFwiKSk7XHJcbiAgICBsZXQgb2xkQ2hpbGQgPSBtYWluQ29udGVudC5jaGlsZE5vZGVzWzFdO1xyXG4gICAgY29uc29sZS5sb2cob2xkQ2hpbGQpO1xyXG4gICAgaWYgKFxyXG4gICAgICBlLnRhcmdldC5pZCA9PT0gXCJIb21lXCIgfHxcclxuICAgICAgZS50YXJnZXQuaWQgPT09IFwiYnJhbmROYW1lXCIgfHxcclxuICAgICAgZS50YXJnZXQuaWQgPT09IFwiaW1nXCJcclxuICAgICkge1xyXG4gICAgICBtYWluQ29udGVudC5yZXBsYWNlQ2hpbGQobWFpblBhZ2UoKSwgb2xkQ2hpbGQpO1xyXG4gICAgICBidG5NYWluID0gZG9jdW1lbnRcclxuICAgICAgICAucXVlcnlTZWxlY3RvcihcIiNidG5PcmRlclwiKVxyXG4gICAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYnVpbGRQYWdlKTtcclxuICAgICAgYnRuc1swXS5jbGFzc0xpc3QuYWRkKFwidGV4dC1vcmFuZ2UtNjAwXCIpO1xyXG4gICAgfSBlbHNlIGlmIChlLnRhcmdldC5pZCA9PT0gXCJNZW51XCIgfHwgZS50YXJnZXQuaWQgPT09IFwiYnRuT3JkZXJcIikge1xyXG4gICAgICBtYWluQ29udGVudC5yZXBsYWNlQ2hpbGQobWVudVBhZ2UoKSwgb2xkQ2hpbGQpO1xyXG4gICAgICBidG5zWzFdLmNsYXNzTGlzdC5hZGQoXCJ0ZXh0LW9yYW5nZS02MDBcIik7XHJcbiAgICAgIGNvbnN0IGdyaWRSb3dzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgZGl2W2RhdGEtY2VsbF49XCJncmlkLWl0ZW1cIl1gKTtcclxuICAgICAgbmF2YmFyLmNsYXNzTGlzdC5hZGQoXCJiZy1zbGF0ZS0xMDBcIiwgXCJtLTBcIiwgXCJ0b3AtMFwiLCBcInAtM1wiKTtcclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGdyaWRSb3dzLmZvckVhY2goKGJveCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgIGNvbnN0IGJveFRvcCA9IGJveC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XHJcbiAgICAgICAgICBib3guY2xhc3NMaXN0LmFkZChcInRyYW5zaXRpb24tb3BhY2l0eVwiKTtcclxuICAgICAgICAgIGlmIChib3hUb3AgPCA1MCkge1xyXG4gICAgICAgICAgICBib3guY2xhc3NMaXN0LnJlbW92ZShcIm9wYWNpdHktMTAwXCIpO1xyXG4gICAgICAgICAgICBib3guY2xhc3NMaXN0LmFkZChcIm9wYWNpdHktNTBcIik7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBib3guY2xhc3NMaXN0LnJlbW92ZShcIm9wYWNpdHktNTBcIik7XHJcbiAgICAgICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKFwib3BhY2l0eS0xMDBcIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIGlmIChlLnRhcmdldC5pZCA9PT0gXCJDb250YWN0c1wiKSB7XHJcbiAgICAgIG1haW5Db250ZW50LnJlcGxhY2VDaGlsZChjb250YWN0UGFnZSgpLCBvbGRDaGlsZCk7XHJcbiAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJ0ZXh0LW9yYW5nZS02MDBcIik7XHJcbiAgICAgIG5hdmJhci5jbGFzc0xpc3QuYWRkKFwiYmctc2xhdGUtMTAwXCIsIFwibS0wXCIsIFwidG9wLTBcIiwgXCJwLTNcIik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiB7XHJcbiAgICBidWlsZFBhZ2UsXHJcbiAgfTtcclxufTtcclxuY29uc3QgbG9nb0RpdiA9IGRvY3VtZW50XHJcbiAgLnF1ZXJ5U2VsZWN0b3IoXCIjbG9nb0RpdlwiKVxyXG4gIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbmF2QnRuTGlzdGVuZXIoKS5idWlsZFBhZ2UpO1xyXG5cclxubmF2QnRuTGlzdGVuZXIoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9