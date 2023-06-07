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
___CSS_LOADER_EXPORT___.push([module.id, "/*\n! tailwindcss v3.3.2 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n5. Use the user's configured `sans` font-feature-settings by default.\n6. Use the user's configured `sans` font-variation-settings by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 4 */\n  font-feature-settings: normal; /* 5 */\n  font-variation-settings: normal; /* 6 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  font-weight: inherit; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/* Make elements with the HTML hidden attribute stay hidden by default */\n[hidden] {\n  display: none;\n}\n\n*, ::before, ::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\r\n.absolute {\n  position: absolute;\n}\r\n.relative {\n  position: relative;\n}\r\n.sticky {\n  position: sticky;\n}\r\n.top-0 {\n  top: 0px;\n}\r\n.top-3 {\n  top: 0.75rem;\n}\r\n.-z-10 {\n  z-index: -10;\n}\r\n.z-0 {\n  z-index: 0;\n}\r\n.z-10 {\n  z-index: 10;\n}\r\n.m-2 {\n  margin: 0.5rem;\n}\r\n.m-3 {\n  margin: 0.75rem;\n}\r\n.m-5 {\n  margin: 1.25rem;\n}\r\n.m-auto {\n  margin: auto;\n}\r\n.mx-3 {\n  margin-left: 0.75rem;\n  margin-right: 0.75rem;\n}\r\n.mx-4 {\n  margin-left: 1rem;\n  margin-right: 1rem;\n}\r\n.mb-2 {\n  margin-bottom: 0.5rem;\n}\r\n.mb-6 {\n  margin-bottom: 1.5rem;\n}\r\n.ml-0 {\n  margin-left: 0px;\n}\r\n.ml-\\[20vw\\] {\n  margin-left: 20vw;\n}\r\n.mr-10 {\n  margin-right: 2.5rem;\n}\r\n.mt-2 {\n  margin-top: 0.5rem;\n}\r\n.mt-4 {\n  margin-top: 1rem;\n}\r\n.mt-5 {\n  margin-top: 1.25rem;\n}\r\n.mt-8 {\n  margin-top: 2rem;\n}\r\n.block {\n  display: block;\n}\r\n.flex {\n  display: flex;\n}\r\n.grid {\n  display: grid;\n}\r\n.h-8 {\n  height: 2rem;\n}\r\n.w-16 {\n  width: 4rem;\n}\r\n.w-7 {\n  width: 1.75rem;\n}\r\n.w-8 {\n  width: 2rem;\n}\r\n.w-fit {\n  width: -moz-fit-content;\n  width: fit-content;\n}\r\n.w-full {\n  width: 100%;\n}\r\n.max-w-5xl {\n  max-width: 64rem;\n}\r\n.max-w-full {\n  max-width: 100%;\n}\r\n.flex-1 {\n  flex: 1 1 0%;\n}\r\n.grow {\n  flex-grow: 1;\n}\r\n.grow-0 {\n  flex-grow: 0;\n}\r\n.origin-\\[0\\] {\n  transform-origin: 0;\n}\r\n.-translate-y-6 {\n  --tw-translate-y: -1.5rem;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\r\n.scale-75 {\n  --tw-scale-x: .75;\n  --tw-scale-y: .75;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\r\n.transform {\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\r\n.cursor-pointer {\n  cursor: pointer;\n}\r\n.resize-none {\n  resize: none;\n}\r\n.appearance-none {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n}\r\n.grid-cols-auto-fit {\n  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));\n}\r\n.flex-col {\n  flex-direction: column;\n}\r\n.items-center {\n  align-items: center;\n}\r\n.items-stretch {\n  align-items: stretch;\n}\r\n.justify-center {\n  justify-content: center;\n}\r\n.justify-items-center {\n  justify-items: center;\n}\r\n.gap-4 {\n  gap: 1rem;\n}\r\n.gap-x-4 {\n  -moz-column-gap: 1rem;\n       column-gap: 1rem;\n}\r\n.self-end {\n  align-self: flex-end;\n}\r\n.rounded {\n  border-radius: 0.25rem;\n}\r\n.rounded-lg {\n  border-radius: 0.5rem;\n}\r\n.border {\n  border-width: 1px;\n}\r\n.border-0 {\n  border-width: 0px;\n}\r\n.border-b-2 {\n  border-bottom-width: 2px;\n}\r\n.border-black {\n  --tw-border-opacity: 1;\n  border-color: rgb(0 0 0 / var(--tw-border-opacity));\n}\r\n.border-orange-300 {\n  --tw-border-opacity: 1;\n  border-color: rgb(253 186 116 / var(--tw-border-opacity));\n}\r\n.bg-orange-200 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(254 215 170 / var(--tw-bg-opacity));\n}\r\n.bg-slate-100 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(241 245 249 / var(--tw-bg-opacity));\n}\r\n.bg-transparent {\n  background-color: transparent;\n}\r\n.bg-gradient-to-br {\n  background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));\n}\r\n.bg-gradient-to-r {\n  background-image: linear-gradient(to right, var(--tw-gradient-stops));\n}\r\n.from-pink-500 {\n  --tw-gradient-from: #ec4899 var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(236 72 153 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\r\n.from-red-500 {\n  --tw-gradient-from: #ef4444 var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(239 68 68 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\r\n.to-orange-400 {\n  --tw-gradient-to: #fb923c var(--tw-gradient-to-position);\n}\r\n.to-purple-500 {\n  --tw-gradient-to: #a855f7 var(--tw-gradient-to-position);\n}\r\n.bg-clip-text {\n  -webkit-background-clip: text;\n          background-clip: text;\n}\r\n.object-contain {\n  -o-object-fit: contain;\n     object-fit: contain;\n}\r\n.p-3 {\n  padding: 0.75rem;\n}\r\n.p-4 {\n  padding: 1rem;\n}\r\n.px-0 {\n  padding-left: 0px;\n  padding-right: 0px;\n}\r\n.px-1 {\n  padding-left: 0.25rem;\n  padding-right: 0.25rem;\n}\r\n.px-2 {\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n}\r\n.px-5 {\n  padding-left: 1.25rem;\n  padding-right: 1.25rem;\n}\r\n.px-8 {\n  padding-left: 2rem;\n  padding-right: 2rem;\n}\r\n.py-1 {\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n}\r\n.py-2 {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\r\n.py-2\\.5 {\n  padding-top: 0.625rem;\n  padding-bottom: 0.625rem;\n}\r\n.py-5 {\n  padding-top: 1.25rem;\n  padding-bottom: 1.25rem;\n}\r\n.pb-10 {\n  padding-bottom: 2.5rem;\n}\r\n.pb-2 {\n  padding-bottom: 0.5rem;\n}\r\n.pl-3 {\n  padding-left: 0.75rem;\n}\r\n.pt-5 {\n  padding-top: 1.25rem;\n}\r\n.text-center {\n  text-align: center;\n}\r\n.text-2xl {\n  font-size: 1.5rem;\n  line-height: 2rem;\n}\r\n.text-5xl {\n  font-size: 3rem;\n  line-height: 1;\n}\r\n.text-sm {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\r\n.text-xl {\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n}\r\n.text-xs {\n  font-size: 0.75rem;\n  line-height: 1rem;\n}\r\n.font-black {\n  font-weight: 900;\n}\r\n.font-bold {\n  font-weight: 700;\n}\r\n.font-medium {\n  font-weight: 500;\n}\r\n.font-semibold {\n  font-weight: 600;\n}\r\n.uppercase {\n  text-transform: uppercase;\n}\r\n.text-black {\n  --tw-text-opacity: 1;\n  color: rgb(0 0 0 / var(--tw-text-opacity));\n}\r\n.text-gray-600 {\n  --tw-text-opacity: 1;\n  color: rgb(75 85 99 / var(--tw-text-opacity));\n}\r\n.text-gray-900 {\n  --tw-text-opacity: 1;\n  color: rgb(17 24 39 / var(--tw-text-opacity));\n}\r\n.text-orange-600 {\n  --tw-text-opacity: 1;\n  color: rgb(234 88 12 / var(--tw-text-opacity));\n}\r\n.text-transparent {\n  color: transparent;\n}\r\n.text-white {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\r\n.opacity-100 {\n  opacity: 1;\n}\r\n.opacity-50 {\n  opacity: 0.5;\n}\r\n.transition {\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\r\n.transition-opacity {\n  transition-property: opacity;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\r\n.duration-300 {\n  transition-duration: 300ms;\n}\r\n.ease-in-out {\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}\r\n\r\n.bg-image {\r\n  /* background-color: aqua; */\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  background-attachment: fixed;\r\n  background-position: top left;\r\n  transition: background-position 0.5s ease-in-out;\r\n}\r\n\r\n@media all and (max-width: 1024px) {\r\n  .bg-image {\r\n    background-position: top right;\r\n  }\r\n}\r\n\r\n.hover\\:-translate-y-px:hover {\n  --tw-translate-y: -1px;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\r\n\r\n.hover\\:scale-105:hover {\n  --tw-scale-x: 1.05;\n  --tw-scale-y: 1.05;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\r\n\r\n.hover\\:scale-110:hover {\n  --tw-scale-x: 1.1;\n  --tw-scale-y: 1.1;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\r\n\r\n.hover\\:border-transparent:hover {\n  border-color: transparent;\n}\r\n\r\n.hover\\:bg-orange-200:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(254 215 170 / var(--tw-bg-opacity));\n}\r\n\r\n.hover\\:bg-orange-400:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(251 146 60 / var(--tw-bg-opacity));\n}\r\n\r\n.hover\\:bg-gradient-to-bl:hover {\n  background-image: linear-gradient(to bottom left, var(--tw-gradient-stops));\n}\r\n\r\n.hover\\:text-orange-600:hover {\n  --tw-text-opacity: 1;\n  color: rgb(234 88 12 / var(--tw-text-opacity));\n}\r\n\r\n.hover\\:text-white:hover {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\r\n\r\n.focus\\:border-orange-600:focus {\n  --tw-border-opacity: 1;\n  border-color: rgb(234 88 12 / var(--tw-border-opacity));\n}\r\n\r\n.focus\\:outline-none:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\r\n\r\n.focus\\:ring-0:focus {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\r\n\r\n.focus\\:ring-4:focus {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\r\n\r\n.focus\\:ring-pink-200:focus {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(251 207 232 / var(--tw-ring-opacity));\n}\r\n\r\n.peer:-moz-placeholder-shown ~ .peer-placeholder-shown\\:translate-y-0 {\n  --tw-translate-y: 0px;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\r\n\r\n.peer:placeholder-shown ~ .peer-placeholder-shown\\:translate-y-0 {\n  --tw-translate-y: 0px;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\r\n\r\n.peer:-moz-placeholder-shown ~ .peer-placeholder-shown\\:scale-100 {\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\r\n\r\n.peer:placeholder-shown ~ .peer-placeholder-shown\\:scale-100 {\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\r\n\r\n.peer:focus ~ .peer-focus\\:left-0 {\n  left: 0px;\n}\r\n\r\n.peer:focus ~ .peer-focus\\:-translate-y-6 {\n  --tw-translate-y: -1.5rem;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\r\n\r\n.peer:focus ~ .peer-focus\\:scale-75 {\n  --tw-scale-x: .75;\n  --tw-scale-y: .75;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\r\n\r\n.peer:focus ~ .peer-focus\\:font-medium {\n  font-weight: 500;\n}\r\n\r\n.peer:focus ~ .peer-focus\\:text-orange-600 {\n  --tw-text-opacity: 1;\n  color: rgb(234 88 12 / var(--tw-text-opacity));\n}\r\n\r\n@media (max-width: 425px) {\n\n  .max-\\[425px\\]\\:m-auto {\n    margin: auto;\n  }\n}\r\n\r\n@media (min-width: 640px) {\n\n  .sm\\:ml-2 {\n    margin-left: 0.5rem;\n  }\n\n  .sm\\:flex-row {\n    flex-direction: row;\n  }\n\n  .sm\\:gap-4 {\n    gap: 1rem;\n  }\n\n  .sm\\:text-base {\n    font-size: 1rem;\n    line-height: 1.5rem;\n  }\n}\r\n\r\n@media (min-width: 768px) {\n\n  .md\\:m-0 {\n    margin: 0px;\n  }\n\n  .md\\:ml-\\[40vw\\] {\n    margin-left: 40vw;\n  }\n\n  .md\\:mr-10 {\n    margin-right: 2.5rem;\n  }\n\n  .md\\:max-w-4xl {\n    max-width: 56rem;\n  }\n\n  .md\\:p-5 {\n    padding: 1.25rem;\n  }\n\n  .md\\:text-6xl {\n    font-size: 3.75rem;\n    line-height: 1;\n  }\n}\r\n\r\n@media (min-width: 1024px) {\n\n  .lg\\:m-auto {\n    margin: auto;\n  }\n\n  .lg\\:mt-32 {\n    margin-top: 8rem;\n  }\n\n  .lg\\:grid {\n    display: grid;\n  }\n\n  .lg\\:w-full {\n    width: 100%;\n  }\n\n  .lg\\:grid-cols-auto-fit-contact {\n    grid-template-columns: repeat(auto-fit, minmax(430px, 1fr));\n  }\n\n  .lg\\:gap-10 {\n    gap: 2.5rem;\n  }\n\n  .lg\\:text-2xl {\n    font-size: 1.5rem;\n    line-height: 2rem;\n  }\n}\r\n\r\n@media (min-width: 1536px) {\n\n  .\\32xl\\:ml-\\[40vw\\] {\n    margin-left: 40vw;\n  }\n}\r\n", "",{"version":3,"sources":["webpack://./src/style/index.css","<no source>"],"names":[],"mappings":"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A;;ADAA;EAAA,4GCAA;EDAA,0GCAA;EDAA;CCAA;;ADAA;EAAA,qBCAA;EDAA;CCAA;;ADAA;EAAA,sBCAA;EDAA;CCAA;;ADAA;EAAA,sBCAA;EDAA;CCAA;;ADAA;EAAA,gBCAA;EDAA,gBCAA;EDAA;CCAA;;ADAA;EAAA,gBCAA;EDAA,gBCAA;EDAA;CCAA;;ADAA;EAAA;CCAA;;ADAA;EAAA,0BCAA;EDAA;CCAA;;ADAA;EAAA,kBCAA;EDAA,kBCAA;EDAA;CCAA;;ADAA;EAAA;CCAA;;ADAA;EAAA,qBCAA;EDAA;CCAA;;ADAA;;EAAA;IAAA;GCAA;CAAA;;ADAA;;EAAA;IAAA;GCAA;;EDAA;IAAA;GCAA;;EDAA;IAAA;GCAA;;EDAA;IAAA,gBCAA;IDAA;GCAA;CAAA;;ADAA;;EAAA;IAAA;GCAA;;EDAA;IAAA;GCAA;;EDAA;IAAA;GCAA;;EDAA;IAAA;GCAA;;EDAA;IAAA;GCAA;;EDAA;IAAA,mBCAA;IDAA;GCAA;CAAA;;ADAA;;EAAA;IAAA;GCAA;;EDAA;IAAA;GCAA;;EDAA;IAAA;GCAA;;EDAA;IAAA;GCAA;;EDAA;IAAA;GCAA;;EDAA;IAAA;GCAA;;EDAA;IAAA,kBCAA;IDAA;GCAA;CAAA;;ADAA;;EAAA;IAAA;GCAA;CAAA","sourcesContent":["@tailwind base;\r\n@tailwind components;\r\n@tailwind utilities;\r\n\r\n.bg-image {\r\n  /* background-color: aqua; */\r\n  background-image: url(\"../pics/brooke.jpg\");\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  background-attachment: fixed;\r\n  background-position: top left;\r\n  transition: background-position 0.5s ease-in-out;\r\n}\r\n\r\n@media all and (max-width: 1024px) {\r\n  .bg-image {\r\n    background-position: top right;\r\n  }\r\n}\r\n",null],"sourceRoot":""}]);
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
    "top-0",
    "sticky",
    "p-3",
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
    navbar.classList.remove("bg-slate-100");
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
      navbar.classList.add("bg-slate-100");
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
      navbar.classList.add("bg-slate-100");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFFBQVEsTUFBTSxLQUFLLG9CQUFvQixvQkFBb0IscUJBQXFCLE1BQU0sTUFBTSxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sTUFBTSxNQUFNLE1BQU0sV0FBVyxNQUFNLE9BQU8sTUFBTSxRQUFRLHFCQUFxQixvQkFBb0IsTUFBTSxNQUFNLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLFFBQVEsTUFBTSxLQUFLLG9CQUFvQixxQkFBcUIscUJBQXFCLE1BQU0sUUFBUSxNQUFNLFNBQVMscUJBQXFCLG9CQUFvQixxQkFBcUIscUJBQXFCLG9CQUFvQixvQkFBb0Isb0JBQW9CLE1BQU0sTUFBTSxNQUFNLE1BQU0sV0FBVyxNQUFNLE9BQU8sTUFBTSxRQUFRLHFCQUFxQixxQkFBcUIscUJBQXFCLE1BQU0sTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxNQUFNLE1BQU0sVUFBVSxNQUFNLE9BQU8sTUFBTSxLQUFLLHFCQUFxQixxQkFBcUIsTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sT0FBTyxNQUFNLEtBQUsscUJBQXFCLG9CQUFvQixNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLE1BQU0saUJBQWlCLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLE9BQU8sV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sT0FBTyxNQUFNLEtBQUssb0JBQW9CLG9CQUFvQixNQUFNLE1BQU0sb0JBQW9CLG9CQUFvQixNQUFNLE1BQU0sTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLEtBQUssS0FBSyxVQUFVLE1BQU0sUUFBUSxNQUFNLFlBQVksb0JBQW9CLHFCQUFxQixNQUFNLE1BQU0sTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLFdBQVcsS0FBSyxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLEtBQUssS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLEtBQUssWUFBWSxNQUFNLE1BQU0sTUFBTSxXQUFXLEtBQUssTUFBTSxLQUFLLFdBQVcsV0FBVyxLQUFLLE1BQU0sS0FBSyxXQUFXLFdBQVcsS0FBSyxNQUFNLEtBQUssS0FBSyxNQUFNLEtBQUssV0FBVyxLQUFLLE1BQU0sS0FBSyxXQUFXLEtBQUssTUFBTSxLQUFLLEtBQUssTUFBTSxLQUFLLFdBQVcsS0FBSyxNQUFNLEtBQUssV0FBVyxLQUFLLE1BQU0sS0FBSyxXQUFXLEtBQUssTUFBTSxLQUFLLFdBQVcsS0FBSyxNQUFNLEtBQUssV0FBVyxXQUFXLEtBQUssTUFBTSxLQUFLLFdBQVcsV0FBVyxLQUFLLE1BQU0sS0FBSyxXQUFXLEtBQUssTUFBTSxLQUFLLFdBQVcsS0FBSyxNQUFNLEtBQUssV0FBVyxLQUFLLE1BQU0sS0FBSyxXQUFXLFdBQVcsS0FBSyxNQUFNLEtBQUssV0FBVyxXQUFXLEtBQUssTUFBTSxLQUFLLEtBQUssTUFBTSxLQUFLLFdBQVcsS0FBSyxNQUFNLEtBQUssV0FBVyxXQUFXLEtBQUssTUFBTSxLQUFLLEtBQUssTUFBTSxLQUFLLFdBQVcsS0FBSyxNQUFNLE1BQU0sS0FBSyxLQUFLLEtBQUssTUFBTSxNQUFNLEtBQUssS0FBSyxNQUFNLEtBQUssS0FBSyxNQUFNLEtBQUssS0FBSyxNQUFNLEtBQUssV0FBVyxLQUFLLEtBQUssTUFBTSxNQUFNLEtBQUssS0FBSyxNQUFNLEtBQUssS0FBSyxNQUFNLEtBQUssS0FBSyxNQUFNLEtBQUssS0FBSyxNQUFNLEtBQUssS0FBSyxNQUFNLEtBQUssV0FBVyxLQUFLLEtBQUssTUFBTSxNQUFNLEtBQUssS0FBSyxNQUFNLEtBQUssS0FBSyxNQUFNLEtBQUssS0FBSyxNQUFNLEtBQUssS0FBSyxNQUFNLEtBQUssS0FBSyxNQUFNLEtBQUssS0FBSyxNQUFNLEtBQUssV0FBVyxLQUFLLEtBQUssTUFBTSxNQUFNLEtBQUssS0FBSyxLQUFLLHdDQUF3Qyx5QkFBeUIsd0JBQXdCLG1CQUFtQixpQ0FBaUMsc0RBQXNELDZCQUE2QixtQ0FBbUMsbUNBQW1DLG9DQUFvQyx1REFBdUQsS0FBSyw0Q0FBNEMsaUJBQWlCLHVDQUF1QyxPQUFPLEtBQUssNEJBQTRCO0FBQzFtOUI7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNWMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDekJhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBa0c7QUFDbEcsTUFBd0Y7QUFDeEYsTUFBK0Y7QUFDL0YsTUFBa0g7QUFDbEgsTUFBMkc7QUFDM0csTUFBMkc7QUFDM0csTUFBb0o7QUFDcEo7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyw4SEFBTzs7OztBQUk4RjtBQUN0SCxPQUFPLGlFQUFlLDhIQUFPLElBQUkscUlBQWMsR0FBRyxxSUFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsU0FBUyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1pzQjtBQUNBO0FBQ0E7QUFDYztBQUNoQjtBQUM3QztBQUNBO0FBQ0Esa0JBQWtCLGdFQUFTO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixnRUFBUztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsZ0VBQVM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGdFQUFTO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsZ0VBQVM7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyw0REFBWTtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGdFQUFTO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBLG9DQUFvQyxxREFBSztBQUN6QztBQUNBO0FBQ0EsdUJBQXVCLGdFQUFTO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsb0RBQUk7QUFDdkM7QUFDQTtBQUNBLHVCQUF1QixnRUFBUztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLHFEQUFLO0FBQ3pDO0FBQ0E7QUFDQSxlQUFlLGdFQUFTO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHFCQUFxQixrQkFBa0I7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxXQUFXLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM01XO0FBQ1M7QUFDL0M7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGdFQUFTO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsZ0VBQVM7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGdFQUFTO0FBQzNCLG9CQUFvQixnRUFBUztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDRDQUFLO0FBQ3JCLG9CQUFvQixnRUFBUztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGdFQUFTO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsVUFBVSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ25FcUI7QUFDVjtBQUNyQztBQUNBLDZCQUFlLHNDQUFZO0FBQzNCLDBCQUEwQixnRUFBUztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixnRUFBUztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGdFQUFTO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsZ0VBQVM7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0Isd0RBQVE7QUFDOUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkVtRDtBQUNOO0FBQ0o7QUFDTTtBQUNRO0FBQ1Y7QUFDRTtBQUNKO0FBQ007QUFDUjtBQUN6QztBQUMrQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxpRUFBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxxREFBUztBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxrREFBTTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxnREFBSTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxtREFBTztBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSx1REFBVztBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sa0RBQU07QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sbURBQU87QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0saURBQUs7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sb0RBQVE7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sZ0RBQUk7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsUUFBUSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQy9JeEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQzRCO0FBQ1M7QUFDQTtBQUNBO0FBQ007QUFDM0Msc0RBQVU7QUFDVjtBQUNBO0FBQ0Esd0JBQXdCLHdEQUFRO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQix3REFBUTtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTiwrQkFBK0Isd0RBQVE7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUCxNQUFNO0FBQ04sK0JBQStCLDJEQUFXO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcl9wYWdlLy4vc3JjL3N0eWxlL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9yX3BhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3JfcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcl9wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcl9wYWdlLy4vc3JjL3N0eWxlL2luZGV4LmNzcz8xZTE3Iiwid2VicGFjazovL3JfcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yX3BhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3JfcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yX3BhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcl9wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcl9wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcl9wYWdlLy4vc3JjL2Z1bmN0aW9ucy9tYWtlQ2hpbGQuanMiLCJ3ZWJwYWNrOi8vcl9wYWdlLy4vc3JjL3BhZ2VzL2NvbnRhY3RQYWdlLmpzIiwid2VicGFjazovL3JfcGFnZS8uL3NyYy9wYWdlcy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vcl9wYWdlLy4vc3JjL3BhZ2VzL21haW5QYWdlLmpzIiwid2VicGFjazovL3JfcGFnZS8uL3NyYy9wYWdlcy9tZW51UGFnZS5qcyIsIndlYnBhY2s6Ly9yX3BhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcl9wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3JfcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcl9wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcl9wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcl9wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcl9wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3JfcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yX3BhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3JfcGFnZS8uL3NyYy9wYWdlcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vcGljcy9icm9va2UuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLypcXG4hIHRhaWx3aW5kY3NzIHYzLjMuMiB8IE1JVCBMaWNlbnNlIHwgaHR0cHM6Ly90YWlsd2luZGNzcy5jb21cXG4qLy8qXFxuMS4gUHJldmVudCBwYWRkaW5nIGFuZCBib3JkZXIgZnJvbSBhZmZlY3RpbmcgZWxlbWVudCB3aWR0aC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3pkZXZzL2Nzc3JlbWVkeS9pc3N1ZXMvNClcXG4yLiBBbGxvdyBhZGRpbmcgYSBib3JkZXIgdG8gYW4gZWxlbWVudCBieSBqdXN0IGFkZGluZyBhIGJvcmRlci13aWR0aC4gKGh0dHBzOi8vZ2l0aHViLmNvbS90YWlsd2luZGNzcy90YWlsd2luZGNzcy9wdWxsLzExNilcXG4qL1xcblxcbiosXFxuOjpiZWZvcmUsXFxuOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICBib3JkZXItd2lkdGg6IDA7IC8qIDIgKi9cXG4gIGJvcmRlci1zdHlsZTogc29saWQ7IC8qIDIgKi9cXG4gIGJvcmRlci1jb2xvcjogI2U1ZTdlYjsgLyogMiAqL1xcbn1cXG5cXG46OmJlZm9yZSxcXG46OmFmdGVyIHtcXG4gIC0tdHctY29udGVudDogJyc7XFxufVxcblxcbi8qXFxuMS4gVXNlIGEgY29uc2lzdGVudCBzZW5zaWJsZSBsaW5lLWhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxuMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXFxuMy4gVXNlIGEgbW9yZSByZWFkYWJsZSB0YWIgc2l6ZS5cXG40LiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIGBzYW5zYCBmb250LWZhbWlseSBieSBkZWZhdWx0LlxcbjUuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgYHNhbnNgIGZvbnQtZmVhdHVyZS1zZXR0aW5ncyBieSBkZWZhdWx0LlxcbjYuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgYHNhbnNgIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzIGJ5IGRlZmF1bHQuXFxuKi9cXG5cXG5odG1sIHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7IC8qIDEgKi9cXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xcbiAgLW1vei10YWItc2l6ZTogNDsgLyogMyAqL1xcbiAgLW8tdGFiLXNpemU6IDQ7XFxuICAgICB0YWItc2l6ZTogNDsgLyogMyAqL1xcbiAgZm9udC1mYW1pbHk6IHVpLXNhbnMtc2VyaWYsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEFyaWFsLCBcXFwiTm90byBTYW5zXFxcIiwgc2Fucy1zZXJpZiwgXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCIsIFxcXCJOb3RvIENvbG9yIEVtb2ppXFxcIjsgLyogNCAqL1xcbiAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiBub3JtYWw7IC8qIDUgKi9cXG4gIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOiBub3JtYWw7IC8qIDYgKi9cXG59XFxuXFxuLypcXG4xLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXFxuMi4gSW5oZXJpdCBsaW5lLWhlaWdodCBmcm9tIGBodG1sYCBzbyB1c2VycyBjYW4gc2V0IHRoZW0gYXMgYSBjbGFzcyBkaXJlY3RseSBvbiB0aGUgYGh0bWxgIGVsZW1lbnQuXFxuKi9cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDsgLyogMSAqL1xcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLypcXG4xLiBBZGQgdGhlIGNvcnJlY3QgaGVpZ2h0IGluIEZpcmVmb3guXFxuMi4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2Ugb2YgYm9yZGVyIGNvbG9yIGluIEZpcmVmb3guIChodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xOTA2NTUpXFxuMy4gRW5zdXJlIGhvcml6b250YWwgcnVsZXMgYXJlIHZpc2libGUgYnkgZGVmYXVsdC5cXG4qL1xcblxcbmhyIHtcXG4gIGhlaWdodDogMDsgLyogMSAqL1xcbiAgY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXG4gIGJvcmRlci10b3Atd2lkdGg6IDFweDsgLyogMyAqL1xcbn1cXG5cXG4vKlxcbkFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiovXFxuXFxuYWJicjp3aGVyZShbdGl0bGVdKSB7XFxuICAtd2Via2l0LXRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDtcXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xcbn1cXG5cXG4vKlxcblJlbW92ZSB0aGUgZGVmYXVsdCBmb250IHNpemUgYW5kIHdlaWdodCBmb3IgaGVhZGluZ3MuXFxuKi9cXG5cXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNiB7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBmb250LXdlaWdodDogaW5oZXJpdDtcXG59XFxuXFxuLypcXG5SZXNldCBsaW5rcyB0byBvcHRpbWl6ZSBmb3Igb3B0LWluIHN0eWxpbmcgaW5zdGVhZCBvZiBvcHQtb3V0LlxcbiovXFxuXFxuYSB7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIHRleHQtZGVjb3JhdGlvbjogaW5oZXJpdDtcXG59XFxuXFxuLypcXG5BZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gRWRnZSBhbmQgU2FmYXJpLlxcbiovXFxuXFxuYixcXG5zdHJvbmcge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLypcXG4xLiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIGBtb25vYCBmb250IGZhbWlseSBieSBkZWZhdWx0LlxcbjIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4qL1xcblxcbmNvZGUsXFxua2JkLFxcbnNhbXAsXFxucHJlIHtcXG4gIGZvbnQtZmFtaWx5OiB1aS1tb25vc3BhY2UsIFNGTW9uby1SZWd1bGFyLCBNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgXFxcIkxpYmVyYXRpb24gTW9ub1xcXCIsIFxcXCJDb3VyaWVyIE5ld1xcXCIsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuLypcXG5BZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4qL1xcblxcbnNtYWxsIHtcXG4gIGZvbnQtc2l6ZTogODAlO1xcbn1cXG5cXG4vKlxcblByZXZlbnQgYHN1YmAgYW5kIGBzdXBgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5cXG5zdWIsXFxuc3VwIHtcXG4gIGZvbnQtc2l6ZTogNzUlO1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbnN1YiB7XFxuICBib3R0b206IC0wLjI1ZW07XFxufVxcblxcbnN1cCB7XFxuICB0b3A6IC0wLjVlbTtcXG59XFxuXFxuLypcXG4xLiBSZW1vdmUgdGV4dCBpbmRlbnRhdGlvbiBmcm9tIHRhYmxlIGNvbnRlbnRzIGluIENocm9tZSBhbmQgU2FmYXJpLiAoaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9OTk5MDg4LCBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MjAxMjk3KVxcbjIuIENvcnJlY3QgdGFibGUgYm9yZGVyIGNvbG9yIGluaGVyaXRhbmNlIGluIGFsbCBDaHJvbWUgYW5kIFNhZmFyaS4gKGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTkzNTcyOSwgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE5NTAxNilcXG4zLiBSZW1vdmUgZ2FwcyBiZXR3ZWVuIHRhYmxlIGJvcmRlcnMgYnkgZGVmYXVsdC5cXG4qL1xcblxcbnRhYmxlIHtcXG4gIHRleHQtaW5kZW50OiAwOyAvKiAxICovXFxuICBib3JkZXItY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7IC8qIDMgKi9cXG59XFxuXFxuLypcXG4xLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cXG4yLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxuMy4gUmVtb3ZlIGRlZmF1bHQgcGFkZGluZyBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXFxuICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cXG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0OyAvKiAxICovXFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDsgLyogMSAqL1xcbiAgY29sb3I6IGluaGVyaXQ7IC8qIDEgKi9cXG4gIG1hcmdpbjogMDsgLyogMiAqL1xcbiAgcGFkZGluZzogMDsgLyogMyAqL1xcbn1cXG5cXG4vKlxcblJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSBhbmQgRmlyZWZveC5cXG4qL1xcblxcbmJ1dHRvbixcXG5zZWxlY3Qge1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi8qXFxuMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4yLiBSZW1vdmUgZGVmYXVsdCBidXR0b24gc3R5bGVzLlxcbiovXFxuXFxuYnV0dG9uLFxcblt0eXBlPSdidXR0b24nXSxcXG5bdHlwZT0ncmVzZXQnXSxcXG5bdHlwZT0nc3VibWl0J10ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyAvKiAyICovXFxuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lOyAvKiAyICovXFxufVxcblxcbi8qXFxuVXNlIHRoZSBtb2Rlcm4gRmlyZWZveCBmb2N1cyBzdHlsZSBmb3IgYWxsIGZvY3VzYWJsZSBlbGVtZW50cy5cXG4qL1xcblxcbjotbW96LWZvY3VzcmluZyB7XFxuICBvdXRsaW5lOiBhdXRvO1xcbn1cXG5cXG4vKlxcblJlbW92ZSB0aGUgYWRkaXRpb25hbCBgOmludmFsaWRgIHN0eWxlcyBpbiBGaXJlZm94LiAoaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvZ2Vja28tZGV2L2Jsb2IvMmY5ZWFjZDlkM2Q5OTVjOTM3YjQyNTFhNTU1N2Q5NWQ0OTRjOWJlMS9sYXlvdXQvc3R5bGUvcmVzL2Zvcm1zLmNzcyNMNzI4LUw3MzcpXFxuKi9cXG5cXG46LW1vei11aS1pbnZhbGlkIHtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbi8qXFxuQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUgYW5kIEZpcmVmb3guXFxuKi9cXG5cXG5wcm9ncmVzcyB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qXFxuQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gU2FmYXJpLlxcbiovXFxuXFxuOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcbjo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qXFxuMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxuMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXFxuKi9cXG5cXG5bdHlwZT0nc2VhcmNoJ10ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvKiAyICovXFxufVxcblxcbi8qXFxuUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxcbiovXFxuXFxuOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLypcXG4xLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbjIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gYGluaGVyaXRgIGluIFNhZmFyaS5cXG4qL1xcblxcbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cXG4gIGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5BZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4qL1xcblxcbnN1bW1hcnkge1xcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xcbn1cXG5cXG4vKlxcblJlbW92ZXMgdGhlIGRlZmF1bHQgc3BhY2luZyBhbmQgYm9yZGVyIGZvciBhcHByb3ByaWF0ZSBlbGVtZW50cy5cXG4qL1xcblxcbmJsb2NrcXVvdGUsXFxuZGwsXFxuZGQsXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYsXFxuaHIsXFxuZmlndXJlLFxcbnAsXFxucHJlIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuZmllbGRzZXQge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxubGVnZW5kIHtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbm9sLFxcbnVsLFxcbm1lbnUge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qXFxuUHJldmVudCByZXNpemluZyB0ZXh0YXJlYXMgaG9yaXpvbnRhbGx5IGJ5IGRlZmF1bHQuXFxuKi9cXG5cXG50ZXh0YXJlYSB7XFxuICByZXNpemU6IHZlcnRpY2FsO1xcbn1cXG5cXG4vKlxcbjEuIFJlc2V0IHRoZSBkZWZhdWx0IHBsYWNlaG9sZGVyIG9wYWNpdHkgaW4gRmlyZWZveC4gKGh0dHBzOi8vZ2l0aHViLmNvbS90YWlsd2luZGxhYnMvdGFpbHdpbmRjc3MvaXNzdWVzLzMzMDApXFxuMi4gU2V0IHRoZSBkZWZhdWx0IHBsYWNlaG9sZGVyIGNvbG9yIHRvIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBncmF5IDQwMCBjb2xvci5cXG4qL1xcblxcbmlucHV0OjotbW96LXBsYWNlaG9sZGVyLCB0ZXh0YXJlYTo6LW1vei1wbGFjZWhvbGRlciB7XFxuICBvcGFjaXR5OiAxOyAvKiAxICovXFxuICBjb2xvcjogIzljYTNhZjsgLyogMiAqL1xcbn1cXG5cXG5pbnB1dDo6cGxhY2Vob2xkZXIsXFxudGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcXG4gIG9wYWNpdHk6IDE7IC8qIDEgKi9cXG4gIGNvbG9yOiAjOWNhM2FmOyAvKiAyICovXFxufVxcblxcbi8qXFxuU2V0IHRoZSBkZWZhdWx0IGN1cnNvciBmb3IgYnV0dG9ucy5cXG4qL1xcblxcbmJ1dHRvbixcXG5bcm9sZT1cXFwiYnV0dG9uXFxcIl0ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKlxcbk1ha2Ugc3VyZSBkaXNhYmxlZCBidXR0b25zIGRvbid0IGdldCB0aGUgcG9pbnRlciBjdXJzb3IuXFxuKi9cXG46ZGlzYWJsZWQge1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG4vKlxcbjEuIE1ha2UgcmVwbGFjZWQgZWxlbWVudHMgYGRpc3BsYXk6IGJsb2NrYCBieSBkZWZhdWx0LiAoaHR0cHM6Ly9naXRodWIuY29tL21vemRldnMvY3NzcmVtZWR5L2lzc3Vlcy8xNClcXG4yLiBBZGQgYHZlcnRpY2FsLWFsaWduOiBtaWRkbGVgIHRvIGFsaWduIHJlcGxhY2VkIGVsZW1lbnRzIG1vcmUgc2Vuc2libHkgYnkgZGVmYXVsdC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9qZW5zaW1tb25zL2Nzc3JlbWVkeS9pc3N1ZXMvMTQjaXNzdWVjb21tZW50LTYzNDkzNDIxMClcXG4gICBUaGlzIGNhbiB0cmlnZ2VyIGEgcG9vcmx5IGNvbnNpZGVyZWQgbGludCBlcnJvciBpbiBzb21lIHRvb2xzIGJ1dCBpcyBpbmNsdWRlZCBieSBkZXNpZ24uXFxuKi9cXG5cXG5pbWcsXFxuc3ZnLFxcbnZpZGVvLFxcbmNhbnZhcyxcXG5hdWRpbyxcXG5pZnJhbWUsXFxuZW1iZWQsXFxub2JqZWN0IHtcXG4gIGRpc3BsYXk6IGJsb2NrOyAvKiAxICovXFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyAvKiAyICovXFxufVxcblxcbi8qXFxuQ29uc3RyYWluIGltYWdlcyBhbmQgdmlkZW9zIHRvIHRoZSBwYXJlbnQgd2lkdGggYW5kIHByZXNlcnZlIHRoZWlyIGludHJpbnNpYyBhc3BlY3QgcmF0aW8uIChodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzE0KVxcbiovXFxuXFxuaW1nLFxcbnZpZGVvIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLyogTWFrZSBlbGVtZW50cyB3aXRoIHRoZSBIVE1MIGhpZGRlbiBhdHRyaWJ1dGUgc3RheSBoaWRkZW4gYnkgZGVmYXVsdCAqL1xcbltoaWRkZW5dIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiosIDo6YmVmb3JlLCA6OmFmdGVyIHtcXG4gIC0tdHctYm9yZGVyLXNwYWNpbmcteDogMDtcXG4gIC0tdHctYm9yZGVyLXNwYWNpbmcteTogMDtcXG4gIC0tdHctdHJhbnNsYXRlLXg6IDA7XFxuICAtLXR3LXRyYW5zbGF0ZS15OiAwO1xcbiAgLS10dy1yb3RhdGU6IDA7XFxuICAtLXR3LXNrZXcteDogMDtcXG4gIC0tdHctc2tldy15OiAwO1xcbiAgLS10dy1zY2FsZS14OiAxO1xcbiAgLS10dy1zY2FsZS15OiAxO1xcbiAgLS10dy1wYW4teDogIDtcXG4gIC0tdHctcGFuLXk6ICA7XFxuICAtLXR3LXBpbmNoLXpvb206ICA7XFxuICAtLXR3LXNjcm9sbC1zbmFwLXN0cmljdG5lc3M6IHByb3hpbWl0eTtcXG4gIC0tdHctZ3JhZGllbnQtZnJvbS1wb3NpdGlvbjogIDtcXG4gIC0tdHctZ3JhZGllbnQtdmlhLXBvc2l0aW9uOiAgO1xcbiAgLS10dy1ncmFkaWVudC10by1wb3NpdGlvbjogIDtcXG4gIC0tdHctb3JkaW5hbDogIDtcXG4gIC0tdHctc2xhc2hlZC16ZXJvOiAgO1xcbiAgLS10dy1udW1lcmljLWZpZ3VyZTogIDtcXG4gIC0tdHctbnVtZXJpYy1zcGFjaW5nOiAgO1xcbiAgLS10dy1udW1lcmljLWZyYWN0aW9uOiAgO1xcbiAgLS10dy1yaW5nLWluc2V0OiAgO1xcbiAgLS10dy1yaW5nLW9mZnNldC13aWR0aDogMHB4O1xcbiAgLS10dy1yaW5nLW9mZnNldC1jb2xvcjogI2ZmZjtcXG4gIC0tdHctcmluZy1jb2xvcjogcmdiKDU5IDEzMCAyNDYgLyAwLjUpO1xcbiAgLS10dy1yaW5nLW9mZnNldC1zaGFkb3c6IDAgMCAjMDAwMDtcXG4gIC0tdHctcmluZy1zaGFkb3c6IDAgMCAjMDAwMDtcXG4gIC0tdHctc2hhZG93OiAwIDAgIzAwMDA7XFxuICAtLXR3LXNoYWRvdy1jb2xvcmVkOiAwIDAgIzAwMDA7XFxuICAtLXR3LWJsdXI6ICA7XFxuICAtLXR3LWJyaWdodG5lc3M6ICA7XFxuICAtLXR3LWNvbnRyYXN0OiAgO1xcbiAgLS10dy1ncmF5c2NhbGU6ICA7XFxuICAtLXR3LWh1ZS1yb3RhdGU6ICA7XFxuICAtLXR3LWludmVydDogIDtcXG4gIC0tdHctc2F0dXJhdGU6ICA7XFxuICAtLXR3LXNlcGlhOiAgO1xcbiAgLS10dy1kcm9wLXNoYWRvdzogIDtcXG4gIC0tdHctYmFja2Ryb3AtYmx1cjogIDtcXG4gIC0tdHctYmFja2Ryb3AtYnJpZ2h0bmVzczogIDtcXG4gIC0tdHctYmFja2Ryb3AtY29udHJhc3Q6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWdyYXlzY2FsZTogIDtcXG4gIC0tdHctYmFja2Ryb3AtaHVlLXJvdGF0ZTogIDtcXG4gIC0tdHctYmFja2Ryb3AtaW52ZXJ0OiAgO1xcbiAgLS10dy1iYWNrZHJvcC1vcGFjaXR5OiAgO1xcbiAgLS10dy1iYWNrZHJvcC1zYXR1cmF0ZTogIDtcXG4gIC0tdHctYmFja2Ryb3Atc2VwaWE6ICA7XFxufVxcblxcbjo6YmFja2Ryb3Age1xcbiAgLS10dy1ib3JkZXItc3BhY2luZy14OiAwO1xcbiAgLS10dy1ib3JkZXItc3BhY2luZy15OiAwO1xcbiAgLS10dy10cmFuc2xhdGUteDogMDtcXG4gIC0tdHctdHJhbnNsYXRlLXk6IDA7XFxuICAtLXR3LXJvdGF0ZTogMDtcXG4gIC0tdHctc2tldy14OiAwO1xcbiAgLS10dy1za2V3LXk6IDA7XFxuICAtLXR3LXNjYWxlLXg6IDE7XFxuICAtLXR3LXNjYWxlLXk6IDE7XFxuICAtLXR3LXBhbi14OiAgO1xcbiAgLS10dy1wYW4teTogIDtcXG4gIC0tdHctcGluY2gtem9vbTogIDtcXG4gIC0tdHctc2Nyb2xsLXNuYXAtc3RyaWN0bmVzczogcHJveGltaXR5O1xcbiAgLS10dy1ncmFkaWVudC1mcm9tLXBvc2l0aW9uOiAgO1xcbiAgLS10dy1ncmFkaWVudC12aWEtcG9zaXRpb246ICA7XFxuICAtLXR3LWdyYWRpZW50LXRvLXBvc2l0aW9uOiAgO1xcbiAgLS10dy1vcmRpbmFsOiAgO1xcbiAgLS10dy1zbGFzaGVkLXplcm86ICA7XFxuICAtLXR3LW51bWVyaWMtZmlndXJlOiAgO1xcbiAgLS10dy1udW1lcmljLXNwYWNpbmc6ICA7XFxuICAtLXR3LW51bWVyaWMtZnJhY3Rpb246ICA7XFxuICAtLXR3LXJpbmctaW5zZXQ6ICA7XFxuICAtLXR3LXJpbmctb2Zmc2V0LXdpZHRoOiAwcHg7XFxuICAtLXR3LXJpbmctb2Zmc2V0LWNvbG9yOiAjZmZmO1xcbiAgLS10dy1yaW5nLWNvbG9yOiByZ2IoNTkgMTMwIDI0NiAvIDAuNSk7XFxuICAtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdzogMCAwICMwMDAwO1xcbiAgLS10dy1yaW5nLXNoYWRvdzogMCAwICMwMDAwO1xcbiAgLS10dy1zaGFkb3c6IDAgMCAjMDAwMDtcXG4gIC0tdHctc2hhZG93LWNvbG9yZWQ6IDAgMCAjMDAwMDtcXG4gIC0tdHctYmx1cjogIDtcXG4gIC0tdHctYnJpZ2h0bmVzczogIDtcXG4gIC0tdHctY29udHJhc3Q6ICA7XFxuICAtLXR3LWdyYXlzY2FsZTogIDtcXG4gIC0tdHctaHVlLXJvdGF0ZTogIDtcXG4gIC0tdHctaW52ZXJ0OiAgO1xcbiAgLS10dy1zYXR1cmF0ZTogIDtcXG4gIC0tdHctc2VwaWE6ICA7XFxuICAtLXR3LWRyb3Atc2hhZG93OiAgO1xcbiAgLS10dy1iYWNrZHJvcC1ibHVyOiAgO1xcbiAgLS10dy1iYWNrZHJvcC1icmlnaHRuZXNzOiAgO1xcbiAgLS10dy1iYWNrZHJvcC1jb250cmFzdDogIDtcXG4gIC0tdHctYmFja2Ryb3AtZ3JheXNjYWxlOiAgO1xcbiAgLS10dy1iYWNrZHJvcC1odWUtcm90YXRlOiAgO1xcbiAgLS10dy1iYWNrZHJvcC1pbnZlcnQ6ICA7XFxuICAtLXR3LWJhY2tkcm9wLW9wYWNpdHk6ICA7XFxuICAtLXR3LWJhY2tkcm9wLXNhdHVyYXRlOiAgO1xcbiAgLS10dy1iYWNrZHJvcC1zZXBpYTogIDtcXG59XFxyXFxuLmFic29sdXRlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxyXFxuLnJlbGF0aXZlIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxyXFxuLnN0aWNreSB7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbn1cXHJcXG4udG9wLTAge1xcbiAgdG9wOiAwcHg7XFxufVxcclxcbi50b3AtMyB7XFxuICB0b3A6IDAuNzVyZW07XFxufVxcclxcbi4tei0xMCB7XFxuICB6LWluZGV4OiAtMTA7XFxufVxcclxcbi56LTAge1xcbiAgei1pbmRleDogMDtcXG59XFxyXFxuLnotMTAge1xcbiAgei1pbmRleDogMTA7XFxufVxcclxcbi5tLTIge1xcbiAgbWFyZ2luOiAwLjVyZW07XFxufVxcclxcbi5tLTMge1xcbiAgbWFyZ2luOiAwLjc1cmVtO1xcbn1cXHJcXG4ubS01IHtcXG4gIG1hcmdpbjogMS4yNXJlbTtcXG59XFxyXFxuLm0tYXV0byB7XFxuICBtYXJnaW46IGF1dG87XFxufVxcclxcbi5teC0zIHtcXG4gIG1hcmdpbi1sZWZ0OiAwLjc1cmVtO1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjc1cmVtO1xcbn1cXHJcXG4ubXgtNCB7XFxuICBtYXJnaW4tbGVmdDogMXJlbTtcXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcXG59XFxyXFxuLm1iLTIge1xcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbn1cXHJcXG4ubWItNiB7XFxuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XFxufVxcclxcbi5tbC0wIHtcXG4gIG1hcmdpbi1sZWZ0OiAwcHg7XFxufVxcclxcbi5tbC1cXFxcWzIwdndcXFxcXSB7XFxuICBtYXJnaW4tbGVmdDogMjB2dztcXG59XFxyXFxuLm1yLTEwIHtcXG4gIG1hcmdpbi1yaWdodDogMi41cmVtO1xcbn1cXHJcXG4ubXQtMiB7XFxuICBtYXJnaW4tdG9wOiAwLjVyZW07XFxufVxcclxcbi5tdC00IHtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxufVxcclxcbi5tdC01IHtcXG4gIG1hcmdpbi10b3A6IDEuMjVyZW07XFxufVxcclxcbi5tdC04IHtcXG4gIG1hcmdpbi10b3A6IDJyZW07XFxufVxcclxcbi5ibG9jayB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxyXFxuLmZsZXgge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxyXFxuLmdyaWQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG59XFxyXFxuLmgtOCB7XFxuICBoZWlnaHQ6IDJyZW07XFxufVxcclxcbi53LTE2IHtcXG4gIHdpZHRoOiA0cmVtO1xcbn1cXHJcXG4udy03IHtcXG4gIHdpZHRoOiAxLjc1cmVtO1xcbn1cXHJcXG4udy04IHtcXG4gIHdpZHRoOiAycmVtO1xcbn1cXHJcXG4udy1maXQge1xcbiAgd2lkdGg6IC1tb3otZml0LWNvbnRlbnQ7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxufVxcclxcbi53LWZ1bGwge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcclxcbi5tYXgtdy01eGwge1xcbiAgbWF4LXdpZHRoOiA2NHJlbTtcXG59XFxyXFxuLm1heC13LWZ1bGwge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXHJcXG4uZmxleC0xIHtcXG4gIGZsZXg6IDEgMSAwJTtcXG59XFxyXFxuLmdyb3cge1xcbiAgZmxleC1ncm93OiAxO1xcbn1cXHJcXG4uZ3Jvdy0wIHtcXG4gIGZsZXgtZ3JvdzogMDtcXG59XFxyXFxuLm9yaWdpbi1cXFxcWzBcXFxcXSB7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiAwO1xcbn1cXHJcXG4uLXRyYW5zbGF0ZS15LTYge1xcbiAgLS10dy10cmFuc2xhdGUteTogLTEuNXJlbTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xcbn1cXHJcXG4uc2NhbGUtNzUge1xcbiAgLS10dy1zY2FsZS14OiAuNzU7XFxuICAtLXR3LXNjYWxlLXk6IC43NTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xcbn1cXHJcXG4udHJhbnNmb3JtIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xcbn1cXHJcXG4uY3Vyc29yLXBvaW50ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXHJcXG4ucmVzaXplLW5vbmUge1xcbiAgcmVzaXplOiBub25lO1xcbn1cXHJcXG4uYXBwZWFyYW5jZS1ub25lIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgICAgICAgYXBwZWFyYW5jZTogbm9uZTtcXG59XFxyXFxuLmdyaWQtY29scy1hdXRvLWZpdCB7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDM4MHB4LCAxZnIpKTtcXG59XFxyXFxuLmZsZXgtY29sIHtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcclxcbi5pdGVtcy1jZW50ZXIge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxyXFxuLml0ZW1zLXN0cmV0Y2gge1xcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxufVxcclxcbi5qdXN0aWZ5LWNlbnRlciB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxyXFxuLmp1c3RpZnktaXRlbXMtY2VudGVyIHtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxyXFxuLmdhcC00IHtcXG4gIGdhcDogMXJlbTtcXG59XFxyXFxuLmdhcC14LTQge1xcbiAgLW1vei1jb2x1bW4tZ2FwOiAxcmVtO1xcbiAgICAgICBjb2x1bW4tZ2FwOiAxcmVtO1xcbn1cXHJcXG4uc2VsZi1lbmQge1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxufVxcclxcbi5yb3VuZGVkIHtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxufVxcclxcbi5yb3VuZGVkLWxnIHtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG59XFxyXFxuLmJvcmRlciB7XFxuICBib3JkZXItd2lkdGg6IDFweDtcXG59XFxyXFxuLmJvcmRlci0wIHtcXG4gIGJvcmRlci13aWR0aDogMHB4O1xcbn1cXHJcXG4uYm9yZGVyLWItMiB7XFxuICBib3JkZXItYm90dG9tLXdpZHRoOiAycHg7XFxufVxcclxcbi5ib3JkZXItYmxhY2sge1xcbiAgLS10dy1ib3JkZXItb3BhY2l0eTogMTtcXG4gIGJvcmRlci1jb2xvcjogcmdiKDAgMCAwIC8gdmFyKC0tdHctYm9yZGVyLW9wYWNpdHkpKTtcXG59XFxyXFxuLmJvcmRlci1vcmFuZ2UtMzAwIHtcXG4gIC0tdHctYm9yZGVyLW9wYWNpdHk6IDE7XFxuICBib3JkZXItY29sb3I6IHJnYigyNTMgMTg2IDExNiAvIHZhcigtLXR3LWJvcmRlci1vcGFjaXR5KSk7XFxufVxcclxcbi5iZy1vcmFuZ2UtMjAwIHtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTQgMjE1IDE3MCAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XFxyXFxuLmJnLXNsYXRlLTEwMCB7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQxIDI0NSAyNDkgLyB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcclxcbi5iZy10cmFuc3BhcmVudCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxyXFxuLmJnLWdyYWRpZW50LXRvLWJyIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsIHZhcigtLXR3LWdyYWRpZW50LXN0b3BzKSk7XFxufVxcclxcbi5iZy1ncmFkaWVudC10by1yIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdHctZ3JhZGllbnQtc3RvcHMpKTtcXG59XFxyXFxuLmZyb20tcGluay01MDAge1xcbiAgLS10dy1ncmFkaWVudC1mcm9tOiAjZWM0ODk5IHZhcigtLXR3LWdyYWRpZW50LWZyb20tcG9zaXRpb24pO1xcbiAgLS10dy1ncmFkaWVudC10bzogcmdiKDIzNiA3MiAxNTMgLyAwKSB2YXIoLS10dy1ncmFkaWVudC10by1wb3NpdGlvbik7XFxuICAtLXR3LWdyYWRpZW50LXN0b3BzOiB2YXIoLS10dy1ncmFkaWVudC1mcm9tKSwgdmFyKC0tdHctZ3JhZGllbnQtdG8pO1xcbn1cXHJcXG4uZnJvbS1yZWQtNTAwIHtcXG4gIC0tdHctZ3JhZGllbnQtZnJvbTogI2VmNDQ0NCB2YXIoLS10dy1ncmFkaWVudC1mcm9tLXBvc2l0aW9uKTtcXG4gIC0tdHctZ3JhZGllbnQtdG86IHJnYigyMzkgNjggNjggLyAwKSB2YXIoLS10dy1ncmFkaWVudC10by1wb3NpdGlvbik7XFxuICAtLXR3LWdyYWRpZW50LXN0b3BzOiB2YXIoLS10dy1ncmFkaWVudC1mcm9tKSwgdmFyKC0tdHctZ3JhZGllbnQtdG8pO1xcbn1cXHJcXG4udG8tb3JhbmdlLTQwMCB7XFxuICAtLXR3LWdyYWRpZW50LXRvOiAjZmI5MjNjIHZhcigtLXR3LWdyYWRpZW50LXRvLXBvc2l0aW9uKTtcXG59XFxyXFxuLnRvLXB1cnBsZS01MDAge1xcbiAgLS10dy1ncmFkaWVudC10bzogI2E4NTVmNyB2YXIoLS10dy1ncmFkaWVudC10by1wb3NpdGlvbik7XFxufVxcclxcbi5iZy1jbGlwLXRleHQge1xcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAgICAgICAgIGJhY2tncm91bmQtY2xpcDogdGV4dDtcXG59XFxyXFxuLm9iamVjdC1jb250YWluIHtcXG4gIC1vLW9iamVjdC1maXQ6IGNvbnRhaW47XFxuICAgICBvYmplY3QtZml0OiBjb250YWluO1xcbn1cXHJcXG4ucC0zIHtcXG4gIHBhZGRpbmc6IDAuNzVyZW07XFxufVxcclxcbi5wLTQge1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxyXFxuLnB4LTAge1xcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XFxufVxcclxcbi5weC0xIHtcXG4gIHBhZGRpbmctbGVmdDogMC4yNXJlbTtcXG4gIHBhZGRpbmctcmlnaHQ6IDAuMjVyZW07XFxufVxcclxcbi5weC0yIHtcXG4gIHBhZGRpbmctbGVmdDogMC41cmVtO1xcbiAgcGFkZGluZy1yaWdodDogMC41cmVtO1xcbn1cXHJcXG4ucHgtNSB7XFxuICBwYWRkaW5nLWxlZnQ6IDEuMjVyZW07XFxuICBwYWRkaW5nLXJpZ2h0OiAxLjI1cmVtO1xcbn1cXHJcXG4ucHgtOCB7XFxuICBwYWRkaW5nLWxlZnQ6IDJyZW07XFxuICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xcbn1cXHJcXG4ucHktMSB7XFxuICBwYWRkaW5nLXRvcDogMC4yNXJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAwLjI1cmVtO1xcbn1cXHJcXG4ucHktMiB7XFxuICBwYWRkaW5nLXRvcDogMC41cmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcXG59XFxyXFxuLnB5LTJcXFxcLjUge1xcbiAgcGFkZGluZy10b3A6IDAuNjI1cmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDAuNjI1cmVtO1xcbn1cXHJcXG4ucHktNSB7XFxuICBwYWRkaW5nLXRvcDogMS4yNXJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAxLjI1cmVtO1xcbn1cXHJcXG4ucGItMTAge1xcbiAgcGFkZGluZy1ib3R0b206IDIuNXJlbTtcXG59XFxyXFxuLnBiLTIge1xcbiAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcXG59XFxyXFxuLnBsLTMge1xcbiAgcGFkZGluZy1sZWZ0OiAwLjc1cmVtO1xcbn1cXHJcXG4ucHQtNSB7XFxuICBwYWRkaW5nLXRvcDogMS4yNXJlbTtcXG59XFxyXFxuLnRleHQtY2VudGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxyXFxuLnRleHQtMnhsIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDJyZW07XFxufVxcclxcbi50ZXh0LTV4bCB7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBsaW5lLWhlaWdodDogMTtcXG59XFxyXFxuLnRleHQtc20ge1xcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjI1cmVtO1xcbn1cXHJcXG4udGV4dC14bCB7XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxuICBsaW5lLWhlaWdodDogMS43NXJlbTtcXG59XFxyXFxuLnRleHQteHMge1xcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDFyZW07XFxufVxcclxcbi5mb250LWJsYWNrIHtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxufVxcclxcbi5mb250LWJvbGQge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxyXFxuLmZvbnQtbWVkaXVtIHtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcclxcbi5mb250LXNlbWlib2xkIHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcclxcbi51cHBlcmNhc2Uge1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG59XFxyXFxuLnRleHQtYmxhY2sge1xcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuICBjb2xvcjogcmdiKDAgMCAwIC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxufVxcclxcbi50ZXh0LWdyYXktNjAwIHtcXG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcbiAgY29sb3I6IHJnYig3NSA4NSA5OSAvIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xcbn1cXHJcXG4udGV4dC1ncmF5LTkwMCB7XFxuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcXG4gIGNvbG9yOiByZ2IoMTcgMjQgMzkgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XFxyXFxuLnRleHQtb3JhbmdlLTYwMCB7XFxuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcXG4gIGNvbG9yOiByZ2IoMjM0IDg4IDEyIC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxufVxcclxcbi50ZXh0LXRyYW5zcGFyZW50IHtcXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxyXFxuLnRleHQtd2hpdGUge1xcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuICBjb2xvcjogcmdiKDI1NSAyNTUgMjU1IC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxufVxcclxcbi5vcGFjaXR5LTEwMCB7XFxuICBvcGFjaXR5OiAxO1xcbn1cXHJcXG4ub3BhY2l0eS01MCB7XFxuICBvcGFjaXR5OiAwLjU7XFxufVxcclxcbi50cmFuc2l0aW9uIHtcXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGNvbG9yLCBiYWNrZ3JvdW5kLWNvbG9yLCBib3JkZXItY29sb3IsIHRleHQtZGVjb3JhdGlvbi1jb2xvciwgZmlsbCwgc3Ryb2tlLCBvcGFjaXR5LCBib3gtc2hhZG93LCB0cmFuc2Zvcm0sIGZpbHRlciwgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI7XFxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBjb2xvciwgYmFja2dyb3VuZC1jb2xvciwgYm9yZGVyLWNvbG9yLCB0ZXh0LWRlY29yYXRpb24tY29sb3IsIGZpbGwsIHN0cm9rZSwgb3BhY2l0eSwgYm94LXNoYWRvdywgdHJhbnNmb3JtLCBmaWx0ZXIsIGJhY2tkcm9wLWZpbHRlcjtcXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGNvbG9yLCBiYWNrZ3JvdW5kLWNvbG9yLCBib3JkZXItY29sb3IsIHRleHQtZGVjb3JhdGlvbi1jb2xvciwgZmlsbCwgc3Ryb2tlLCBvcGFjaXR5LCBib3gtc2hhZG93LCB0cmFuc2Zvcm0sIGZpbHRlciwgYmFja2Ryb3AtZmlsdGVyLCAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjtcXG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMTUwbXM7XFxufVxcclxcbi50cmFuc2l0aW9uLW9wYWNpdHkge1xcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogb3BhY2l0eTtcXG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMTUwbXM7XFxufVxcclxcbi5kdXJhdGlvbi0zMDAge1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMzAwbXM7XFxufVxcclxcbi5lYXNlLWluLW91dCB7XFxuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcXG59XFxyXFxuXFxyXFxuLmJnLWltYWdlIHtcXHJcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IGFxdWE7ICovXFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIGxlZnQ7XFxyXFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLXBvc2l0aW9uIDAuNXMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xcclxcbiAgLmJnLWltYWdlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIHJpZ2h0O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uaG92ZXJcXFxcOi10cmFuc2xhdGUteS1weDpob3ZlciB7XFxuICAtLXR3LXRyYW5zbGF0ZS15OiAtMXB4O1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XFxufVxcclxcblxcclxcbi5ob3ZlclxcXFw6c2NhbGUtMTA1OmhvdmVyIHtcXG4gIC0tdHctc2NhbGUteDogMS4wNTtcXG4gIC0tdHctc2NhbGUteTogMS4wNTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xcbn1cXHJcXG5cXHJcXG4uaG92ZXJcXFxcOnNjYWxlLTExMDpob3ZlciB7XFxuICAtLXR3LXNjYWxlLXg6IDEuMTtcXG4gIC0tdHctc2NhbGUteTogMS4xO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XFxufVxcclxcblxcclxcbi5ob3ZlclxcXFw6Ym9yZGVyLXRyYW5zcGFyZW50OmhvdmVyIHtcXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcclxcblxcclxcbi5ob3ZlclxcXFw6Ymctb3JhbmdlLTIwMDpob3ZlciB7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU0IDIxNSAxNzAgLyB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcclxcblxcclxcbi5ob3ZlclxcXFw6Ymctb3JhbmdlLTQwMDpob3ZlciB7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUxIDE0NiA2MCAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XFxyXFxuXFxyXFxuLmhvdmVyXFxcXDpiZy1ncmFkaWVudC10by1ibDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIGxlZnQsIHZhcigtLXR3LWdyYWRpZW50LXN0b3BzKSk7XFxufVxcclxcblxcclxcbi5ob3ZlclxcXFw6dGV4dC1vcmFuZ2UtNjAwOmhvdmVyIHtcXG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcbiAgY29sb3I6IHJnYigyMzQgODggMTIgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XFxyXFxuXFxyXFxuLmhvdmVyXFxcXDp0ZXh0LXdoaXRlOmhvdmVyIHtcXG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcbiAgY29sb3I6IHJnYigyNTUgMjU1IDI1NSAvIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xcbn1cXHJcXG5cXHJcXG4uZm9jdXNcXFxcOmJvcmRlci1vcmFuZ2UtNjAwOmZvY3VzIHtcXG4gIC0tdHctYm9yZGVyLW9wYWNpdHk6IDE7XFxuICBib3JkZXItY29sb3I6IHJnYigyMzQgODggMTIgLyB2YXIoLS10dy1ib3JkZXItb3BhY2l0eSkpO1xcbn1cXHJcXG5cXHJcXG4uZm9jdXNcXFxcOm91dGxpbmUtbm9uZTpmb2N1cyB7XFxuICBvdXRsaW5lOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBvdXRsaW5lLW9mZnNldDogMnB4O1xcbn1cXHJcXG5cXHJcXG4uZm9jdXNcXFxcOnJpbmctMDpmb2N1cyB7XFxuICAtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdzogdmFyKC0tdHctcmluZy1pbnNldCkgMCAwIDAgdmFyKC0tdHctcmluZy1vZmZzZXQtd2lkdGgpIHZhcigtLXR3LXJpbmctb2Zmc2V0LWNvbG9yKTtcXG4gIC0tdHctcmluZy1zaGFkb3c6IHZhcigtLXR3LXJpbmctaW5zZXQpIDAgMCAwIGNhbGMoMHB4ICsgdmFyKC0tdHctcmluZy1vZmZzZXQtd2lkdGgpKSB2YXIoLS10dy1yaW5nLWNvbG9yKTtcXG4gIGJveC1zaGFkb3c6IHZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdyksIHZhcigtLXR3LXJpbmctc2hhZG93KSwgdmFyKC0tdHctc2hhZG93LCAwIDAgIzAwMDApO1xcbn1cXHJcXG5cXHJcXG4uZm9jdXNcXFxcOnJpbmctNDpmb2N1cyB7XFxuICAtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdzogdmFyKC0tdHctcmluZy1pbnNldCkgMCAwIDAgdmFyKC0tdHctcmluZy1vZmZzZXQtd2lkdGgpIHZhcigtLXR3LXJpbmctb2Zmc2V0LWNvbG9yKTtcXG4gIC0tdHctcmluZy1zaGFkb3c6IHZhcigtLXR3LXJpbmctaW5zZXQpIDAgMCAwIGNhbGMoNHB4ICsgdmFyKC0tdHctcmluZy1vZmZzZXQtd2lkdGgpKSB2YXIoLS10dy1yaW5nLWNvbG9yKTtcXG4gIGJveC1zaGFkb3c6IHZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdyksIHZhcigtLXR3LXJpbmctc2hhZG93KSwgdmFyKC0tdHctc2hhZG93LCAwIDAgIzAwMDApO1xcbn1cXHJcXG5cXHJcXG4uZm9jdXNcXFxcOnJpbmctcGluay0yMDA6Zm9jdXMge1xcbiAgLS10dy1yaW5nLW9wYWNpdHk6IDE7XFxuICAtLXR3LXJpbmctY29sb3I6IHJnYigyNTEgMjA3IDIzMiAvIHZhcigtLXR3LXJpbmctb3BhY2l0eSkpO1xcbn1cXHJcXG5cXHJcXG4ucGVlcjotbW96LXBsYWNlaG9sZGVyLXNob3duIH4gLnBlZXItcGxhY2Vob2xkZXItc2hvd25cXFxcOnRyYW5zbGF0ZS15LTAge1xcbiAgLS10dy10cmFuc2xhdGUteTogMHB4O1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XFxufVxcclxcblxcclxcbi5wZWVyOnBsYWNlaG9sZGVyLXNob3duIH4gLnBlZXItcGxhY2Vob2xkZXItc2hvd25cXFxcOnRyYW5zbGF0ZS15LTAge1xcbiAgLS10dy10cmFuc2xhdGUteTogMHB4O1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XFxufVxcclxcblxcclxcbi5wZWVyOi1tb3otcGxhY2Vob2xkZXItc2hvd24gfiAucGVlci1wbGFjZWhvbGRlci1zaG93blxcXFw6c2NhbGUtMTAwIHtcXG4gIC0tdHctc2NhbGUteDogMTtcXG4gIC0tdHctc2NhbGUteTogMTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xcbn1cXHJcXG5cXHJcXG4ucGVlcjpwbGFjZWhvbGRlci1zaG93biB+IC5wZWVyLXBsYWNlaG9sZGVyLXNob3duXFxcXDpzY2FsZS0xMDAge1xcbiAgLS10dy1zY2FsZS14OiAxO1xcbiAgLS10dy1zY2FsZS15OiAxO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XFxufVxcclxcblxcclxcbi5wZWVyOmZvY3VzIH4gLnBlZXItZm9jdXNcXFxcOmxlZnQtMCB7XFxuICBsZWZ0OiAwcHg7XFxufVxcclxcblxcclxcbi5wZWVyOmZvY3VzIH4gLnBlZXItZm9jdXNcXFxcOi10cmFuc2xhdGUteS02IHtcXG4gIC0tdHctdHJhbnNsYXRlLXk6IC0xLjVyZW07XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcXG59XFxyXFxuXFxyXFxuLnBlZXI6Zm9jdXMgfiAucGVlci1mb2N1c1xcXFw6c2NhbGUtNzUge1xcbiAgLS10dy1zY2FsZS14OiAuNzU7XFxuICAtLXR3LXNjYWxlLXk6IC43NTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xcbn1cXHJcXG5cXHJcXG4ucGVlcjpmb2N1cyB+IC5wZWVyLWZvY3VzXFxcXDpmb250LW1lZGl1bSB7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXHJcXG5cXHJcXG4ucGVlcjpmb2N1cyB+IC5wZWVyLWZvY3VzXFxcXDp0ZXh0LW9yYW5nZS02MDAge1xcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuICBjb2xvcjogcmdiKDIzNCA4OCAxMiAvIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNDI1cHgpIHtcXG5cXG4gIC5tYXgtXFxcXFs0MjVweFxcXFxdXFxcXDptLWF1dG8ge1xcbiAgICBtYXJnaW46IGF1dG87XFxuICB9XFxufVxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiA2NDBweCkge1xcblxcbiAgLnNtXFxcXDptbC0yIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcXG4gIH1cXG5cXG4gIC5zbVxcXFw6ZmxleC1yb3cge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgfVxcblxcbiAgLnNtXFxcXDpnYXAtNCB7XFxuICAgIGdhcDogMXJlbTtcXG4gIH1cXG5cXG4gIC5zbVxcXFw6dGV4dC1iYXNlIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBsaW5lLWhlaWdodDogMS41cmVtO1xcbiAgfVxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG5cXG4gIC5tZFxcXFw6bS0wIHtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICB9XFxuXFxuICAubWRcXFxcOm1sLVxcXFxbNDB2d1xcXFxdIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDQwdnc7XFxuICB9XFxuXFxuICAubWRcXFxcOm1yLTEwIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyLjVyZW07XFxuICB9XFxuXFxuICAubWRcXFxcOm1heC13LTR4bCB7XFxuICAgIG1heC13aWR0aDogNTZyZW07XFxuICB9XFxuXFxuICAubWRcXFxcOnAtNSB7XFxuICAgIHBhZGRpbmc6IDEuMjVyZW07XFxuICB9XFxuXFxuICAubWRcXFxcOnRleHQtNnhsIHtcXG4gICAgZm9udC1zaXplOiAzLjc1cmVtO1xcbiAgICBsaW5lLWhlaWdodDogMTtcXG4gIH1cXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xcblxcbiAgLmxnXFxcXDptLWF1dG8ge1xcbiAgICBtYXJnaW46IGF1dG87XFxuICB9XFxuXFxuICAubGdcXFxcOm10LTMyIHtcXG4gICAgbWFyZ2luLXRvcDogOHJlbTtcXG4gIH1cXG5cXG4gIC5sZ1xcXFw6Z3JpZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICB9XFxuXFxuICAubGdcXFxcOnctZnVsbCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcblxcbiAgLmxnXFxcXDpncmlkLWNvbHMtYXV0by1maXQtY29udGFjdCB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoNDMwcHgsIDFmcikpO1xcbiAgfVxcblxcbiAgLmxnXFxcXDpnYXAtMTAge1xcbiAgICBnYXA6IDIuNXJlbTtcXG4gIH1cXG5cXG4gIC5sZ1xcXFw6dGV4dC0yeGwge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgbGluZS1oZWlnaHQ6IDJyZW07XFxuICB9XFxufVxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiAxNTM2cHgpIHtcXG5cXG4gIC5cXFxcMzJ4bFxcXFw6bWwtXFxcXFs0MHZ3XFxcXF0ge1xcbiAgICBtYXJnaW4tbGVmdDogNDB2dztcXG4gIH1cXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlL2luZGV4LmNzc1wiLFwiPG5vIHNvdXJjZT5cIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0NBQWMsQ0FBZDs7O0NBQWM7O0FBQWQ7OztFQUFBLHNCQUFjLEVBQWQsTUFBYztFQUFkLGVBQWMsRUFBZCxNQUFjO0VBQWQsbUJBQWMsRUFBZCxNQUFjO0VBQWQscUJBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0VBQUEsZ0JBQWM7QUFBQTs7QUFBZDs7Ozs7OztDQUFjOztBQUFkO0VBQUEsZ0JBQWMsRUFBZCxNQUFjO0VBQWQsOEJBQWMsRUFBZCxNQUFjO0VBQWQsZ0JBQWMsRUFBZCxNQUFjO0VBQWQsY0FBYztLQUFkLFdBQWMsRUFBZCxNQUFjO0VBQWQsNE5BQWMsRUFBZCxNQUFjO0VBQWQsNkJBQWMsRUFBZCxNQUFjO0VBQWQsK0JBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7OztDQUFjOztBQUFkO0VBQUEsU0FBYyxFQUFkLE1BQWM7RUFBZCxvQkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7OztDQUFjOztBQUFkO0VBQUEsU0FBYyxFQUFkLE1BQWM7RUFBZCxjQUFjLEVBQWQsTUFBYztFQUFkLHFCQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEseUNBQWM7VUFBZCxpQ0FBYztBQUFBOztBQUFkOztDQUFjOztBQUFkOzs7Ozs7RUFBQSxrQkFBYztFQUFkLG9CQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSxjQUFjO0VBQWQsd0JBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDs7RUFBQSxtQkFBYztBQUFBOztBQUFkOzs7Q0FBYzs7QUFBZDs7OztFQUFBLCtHQUFjLEVBQWQsTUFBYztFQUFkLGNBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSxjQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7O0VBQUEsY0FBYztFQUFkLGNBQWM7RUFB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RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQSx1QkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBLHlCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLGlCQUFtQjtFQUFuQixpQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQSx3QkFBbUI7S0FBbkIscUJBQW1CO1VBQW5CO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQSxxQkFBbUI7T0FBbkI7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQSxzQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxzQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxrQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxrQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQSw0REFBbUI7RUFBbkIsb0VBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsNERBQW1CO0VBQW5CLG1FQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQSw2QkFBbUI7VUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxzQkFBbUI7S0FBbkI7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUEsaUJBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEscUJBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsb0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEscUJBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsa0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsb0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsbUJBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEscUJBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsb0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBLGlCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLGVBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsbUJBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsa0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsa0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBLG9CQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLG9CQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLG9CQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLG9CQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUEsb0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBLGdLQUFtQjtFQUFuQix3SkFBbUI7RUFBbkIsaUxBQW1CO0VBQW5CLHdEQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLDRCQUFtQjtFQUFuQix3REFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1COztBQUVuQjtFQUNFLDRCQUE0QjtFQUM1Qix5REFBMkM7RUFDM0Msc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1Qiw0QkFBNEI7RUFDNUIsNkJBQTZCO0VBQzdCLGdEQUFnRDtBQUNsRDs7QUFFQTtFQUNFO0lBQ0UsOEJBQThCO0VBQ2hDO0FBQ0Y7O0FBbEJBO0VBQUEsdUJDQUE7RURBQTtDQ0FBOztBREFBO0VBQUEsbUJDQUE7RURBQSxtQkNBQTtFREFBO0NDQUE7O0FEQUE7RUFBQSxrQkNBQTtFREFBLGtCQ0FBO0VEQUE7Q0NBQTs7QURBQTtFQUFBO0NDQUE7O0FEQUE7RUFBQSxtQkNBQTtFREFBO0NDQUE7O0FEQUE7RUFBQSxtQkNBQTtFREFBO0NDQUE7O0FEQUE7RUFBQTtDQ0FBOztBREFBO0VBQUEscUJDQUE7RURBQTtDQ0FBOztBREFBO0VBQUEscUJDQUE7RURBQTtDQ0FBOztBREFBO0VBQUEsdUJDQUE7RURBQTtDQ0FBOztBREFBO0VBQUEsK0JDQUE7RURBQTtDQ0FBOztBREFBO0VBQUEsNEdDQUE7RURBQSwwR0NBQTtFREFBO0NDQUE7O0FEQUE7RUFBQSw0R0NBQTtFREFBLDBHQ0FBO0VEQUE7Q0NBQTs7QURBQTtFQUFBLHFCQ0FBO0VEQUE7Q0NBQTs7QURBQTtFQUFBLHNCQ0FBO0VEQUE7Q0NBQTs7QURBQTtFQUFBLHNCQ0FBO0VEQUE7Q0NBQTs7QURBQTtFQUFBLGdCQ0FBO0VEQUEsZ0JDQUE7RURBQTtDQ0FBOztBREFBO0VBQUEsZ0JDQUE7RURBQSxnQkNBQTtFREFBO0NDQUE7O0FEQUE7RUFBQTtDQ0FBOztBREFBO0VBQUEsMEJDQUE7RURBQTtDQ0FBOztBREFBO0VBQUEsa0JDQUE7RURBQSxrQkNBQTtFREFBO0NDQUE7O0FEQUE7RUFBQTtDQ0FBOztBREFBO0VBQUEscUJDQUE7RURBQTtDQ0FBOztBREFBOztFQUFBO0lBQUE7R0NBQTtDQUFBOztBREFBOztFQUFBO0lBQUE7R0NBQTs7RURBQTtJQUFBO0dDQUE7O0VEQUE7SUFBQTtHQ0FBOztFREFBO0lBQUEsZ0JDQUE7SURBQTtHQ0FBO0NBQUE7O0FEQUE7O0VBQUE7SUFBQTtHQ0FBOztFREFBO0lBQUE7R0NBQTs7RURBQTtJQUFBO0dDQUE7O0VEQUE7SUFBQTtHQ0FBOztFREFBO0lBQUE7R0NBQTs7RURBQTtJQUFBLG1CQ0FBO0lEQUE7R0NBQTtDQUFBOztBREFBOztFQUFBO0lBQUE7R0NBQTs7RURBQTtJQUFBO0dDQUE7O0VEQUE7SUFBQTtHQ0FBOztFREFBO0lBQUE7R0NBQTs7RURBQTtJQUFBO0dDQUE7O0VEQUE7SUFBQTtHQ0FBOztFREFBO0lBQUEsa0JDQUE7SURBQTtHQ0FBO0NBQUE7O0FEQUE7O0VBQUE7SUFBQTtHQ0FBO0NBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQHRhaWx3aW5kIGJhc2U7XFxyXFxuQHRhaWx3aW5kIGNvbXBvbmVudHM7XFxyXFxuQHRhaWx3aW5kIHV0aWxpdGllcztcXHJcXG5cXHJcXG4uYmctaW1hZ2Uge1xcclxcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogYXF1YTsgKi9cXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vcGljcy9icm9va2UuanBnXFxcIik7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgbGVmdDtcXHJcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtcG9zaXRpb24gMC41cyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XFxyXFxuICAuYmctaW1hZ2Uge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgcmlnaHQ7XFxyXFxuICB9XFxyXFxufVxcclxcblwiLG51bGxdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IG1ha2VDaGlsZCA9ICh0eXBlLCBpZCA9IG51bGwsIGNsYXNzZXMgPSBudWxsLCB0ZXh0ID0gXCJcIikgPT4ge1xyXG4gIGNvbnN0IGluc3RhbmNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcclxuICBpZiAoaWQgIT09IG51bGwpIHtcclxuICAgIGluc3RhbmNlLmlkID0gaWQ7XHJcbiAgfVxyXG4gIGlmIChjbGFzc2VzICE9PSBudWxsKSB7XHJcbiAgICBpbnN0YW5jZS5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzZXMpO1xyXG4gIH1cclxuICBpbnN0YW5jZS50ZXh0Q29udGVudCA9IHRleHQ7XHJcbiAgcmV0dXJuIGluc3RhbmNlO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWFrZUNoaWxkO1xyXG4iLCJpbXBvcnQgbWFrZUNoaWxkIGZyb20gXCIuLi9mdW5jdGlvbnMvbWFrZUNoaWxkXCI7XHJcbmltcG9ydCBjbG9jayBmcm9tIFwiLi4vcGljcy9jb250YWN0cy9jbG9jay5wbmdcIjtcclxuaW1wb3J0IGVtYWlsIGZyb20gXCIuLi9waWNzL2NvbnRhY3RzL2VtYWlsLnBuZ1wiO1xyXG5pbXBvcnQgbG9jYXRpb25NYXJrIGZyb20gXCIuLi9waWNzL2NvbnRhY3RzL2xvY2F0aW9uTWFyay5wbmdcIjtcclxuaW1wb3J0IGNhbGwgZnJvbSBcIi4uL3BpY3MvY29udGFjdHMvY2FsbC5wbmdcIjtcclxuY29uc3QgY29udGFjdFBhZ2UgPSAoKSA9PiB7XHJcbiAgLy9tYWluIGRpdlxyXG4gIGNvbnN0IG1haW5EaXYgPSBtYWtlQ2hpbGQoXCJkaXZcIiwgXCJtZW51Q29udGFpbmVyXCIsIFtcclxuICAgIFwibGc6Z3JpZFwiLFxyXG4gICAgXCJsZzpncmlkLWNvbHMtYXV0by1maXQtY29udGFjdFwiLFxyXG4gICAgXCJqdXN0aWZ5LWl0ZW1zLWNlbnRlclwiLFxyXG4gICAgXCJnYXAtNFwiLFxyXG4gICAgXCIyeGw6bWwtWzQwdnddXCIsXHJcbiAgICBcImxnOm0tYXV0b1wiLFxyXG4gICAgXCJtLTVcIixcclxuICAgIFwibGc6bXQtMzJcIixcclxuICAgIFwibWQ6cC01XCIsXHJcbiAgICBcInB0LTVcIixcclxuICAgIFwicm91bmRlZC1sZ1wiLFxyXG4gICAgXCJiZy1vcmFuZ2UtMjAwXCIsXHJcbiAgICBcIm0tMlwiLFxyXG4gICAgXCJtYXgtdy01eGxcIixcclxuICBdKTtcclxuICBjb25zdCBjb250YWN0c1BhcnREaXYgPSBtYWtlQ2hpbGQoXCJkaXZcIiwgXCJjb250YWN0c1BhcnREaXZcIiwgW1xyXG4gICAgXCJmbGV4XCIsXHJcbiAgICBcImZsZXgtY29sXCIsXHJcbiAgICBcIm1kOm0tMFwiLFxyXG4gICAgXCJteC0zXCIsXHJcbiAgICBcImdyb3ctMFwiLFxyXG4gIF0pO1xyXG4gIGNvbnN0IG1hcERpdiA9IG1ha2VDaGlsZChcImRpdlwiLCBcIm1hcERpdlwiLCBbXHJcbiAgICBcInAtNFwiLFxyXG4gICAgXCJmbGV4XCIsXHJcbiAgICBcImxnOnctZnVsbFwiLFxyXG4gICAgXCJqdXN0aWZ5LWNlbnRlclwiLFxyXG4gICAgXCJtLWF1dG9cIixcclxuICBdKTtcclxuICBjb25zdCBwaWNFbGVtZW50Q3JlYXRlID0gKHNyYywgYWx0LCBwYXJhbSkgPT4ge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICBlbGVtZW50LnNyYyA9IHNyYztcclxuICAgIGVsZW1lbnQuYWx0ID0gYWx0O1xyXG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKC4uLnBhcmFtKTtcclxuICAgIHJldHVybiBlbGVtZW50O1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGRpdkNyZWF0aW9uID0gKHBpYywgZGVzY3JpcHRpb24sIGNsYXNzZXMpID0+IHtcclxuICAgIGNvbnN0IGRpdkl0ZW0gPSBtYWtlQ2hpbGQoXCJkaXZcIiwgdW5kZWZpbmVkLCBbXCJmbGV4XCIsIFwicGItMlwiXSk7XHJcbiAgICBkaXZJdGVtLmFwcGVuZENoaWxkKHBpYyk7XHJcbiAgICBkaXZJdGVtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcclxuICAgIGlmIChjbGFzc2VzKSB7XHJcbiAgICAgIGRpdkl0ZW0uY2xhc3NMaXN0LmFkZCguLi5jbGFzc2VzKTtcclxuICAgIH1cclxuICAgIHJldHVybiBkaXZJdGVtO1xyXG4gIH07XHJcbiAgLy9wbGFjZSBkaXZcclxuICBjb25zdCBjb250YWN0UGxhY2UgPSBtYWtlQ2hpbGQoXHJcbiAgICBcInBcIixcclxuICAgIHVuZGVmaW5lZCxcclxuICAgIFtcInRleHQteGxcIiwgXCJwbC0zXCJdLFxyXG4gICAgXCJQYXJjIGRlIGxhIGZvbmRlcmllLCBTaW50LUphbnMtTW9sZW5iZWVrXCJcclxuICApO1xyXG4gIGNvbnN0IHBsYWNlUGljID0gcGljRWxlbWVudENyZWF0ZShsb2NhdGlvbk1hcmssIFwibG9jYXRpb25cIiwgW1xyXG4gICAgXCJ3LTdcIixcclxuICAgIFwib2JqZWN0LWNvbnRhaW5cIixcclxuICBdKTtcclxuICBjb250YWN0c1BhcnREaXYuYXBwZW5kQ2hpbGQoZGl2Q3JlYXRpb24ocGxhY2VQaWMsIGNvbnRhY3RQbGFjZSkpO1xyXG5cclxuICBjb25zdCBjb250YWN0Q2xvY2sgPSBtYWtlQ2hpbGQoXHJcbiAgICBcInBcIixcclxuICAgIHVuZGVmaW5lZCxcclxuICAgIFtcInRleHQteGxcIiwgXCJwbC0zXCJdLFxyXG4gICAgYE1vbi1TdW46IDlhbS05cG07YFxyXG4gICk7XHJcbiAgY29uc3QgY2xvY2tQaWMgPSBwaWNFbGVtZW50Q3JlYXRlKGNsb2NrLCBcImNsb2NrXCIsIFtcInctN1wiLCBcIm9iamVjdC1jb250YWluXCJdKTtcclxuICBjb250YWN0c1BhcnREaXYuYXBwZW5kQ2hpbGQoZGl2Q3JlYXRpb24oY2xvY2tQaWMsIGNvbnRhY3RDbG9jaykpO1xyXG5cclxuICBjb25zdCBjb250YWN0UGhvbmUgPSBtYWtlQ2hpbGQoXHJcbiAgICBcInBcIixcclxuICAgIHVuZGVmaW5lZCxcclxuICAgIFtcInRleHQteGxcIiwgXCJwbC0zXCJdLFxyXG4gICAgYCgzMzMpLTg4OC0zMzMzYFxyXG4gICk7XHJcbiAgY29uc3QgY2FsbFBpYyA9IHBpY0VsZW1lbnRDcmVhdGUoY2FsbCwgXCJjYWxsXCIsIFtcInctN1wiLCBcIm9iamVjdC1jb250YWluXCJdKTtcclxuICBjb250YWN0c1BhcnREaXYuYXBwZW5kQ2hpbGQoZGl2Q3JlYXRpb24oY2FsbFBpYywgY29udGFjdFBob25lKSk7XHJcblxyXG4gIGNvbnN0IGNvbnRhY3RFbWFpbCA9IG1ha2VDaGlsZChcclxuICAgIFwicFwiLFxyXG4gICAgdW5kZWZpbmVkLFxyXG4gICAgW1wicGwtM1wiLCBcInRleHQtb3JhbmdlLTYwMFwiLCBcInRleHQtMnhsXCJdLFxyXG4gICAgXCJNZXNzYWdlIHVzXCJcclxuICApO1xyXG4gIGNvbnN0IGVtYWlsUGljID0gcGljRWxlbWVudENyZWF0ZShlbWFpbCwgXCJlbWFpbFwiLCBbXCJ3LTdcIiwgXCJvYmplY3QtY29udGFpblwiXSk7XHJcbiAgY29udGFjdHNQYXJ0RGl2LmFwcGVuZENoaWxkKGRpdkNyZWF0aW9uKGVtYWlsUGljLCBjb250YWN0RW1haWwpKTtcclxuXHJcbiAgY29uc3QgZm9ybSA9IG1ha2VDaGlsZChcImZvcm1cIiwgXCJjb250YWN0Rm9ybVwiLCBbXHJcbiAgICBcImZsZXhcIixcclxuICAgIFwiZmxleC1jb2xcIixcclxuICAgIFwiaXRlbXMtY2VudGVyXCIsXHJcbiAgICBcIml0ZW1zLXN0cmV0Y2hcIixcclxuICAgIFwibXQtNFwiLFxyXG4gIF0pO1xyXG4gIGNvbnN0IGh0bWwgPSBgXHJcbiAgPGRpdiBjbGFzcz1cInJlbGF0aXZlIHotMCB3LWZ1bGwgbWItNiBncm91cFwiPlxyXG4gICAgICA8aW5wdXQgdHlwZT1cImZsb2F0aW5nX25hbWVcIiBuYW1lPVwiZmxvYXRpbmdfbmFtZVwiIGlkPVwiZmxvYXRpbmdfbmFtZVwiIGNsYXNzPVwiYmxvY2sgcHktMi41IHB4LTAgdy1mdWxsIHRleHQtc20gdGV4dC1ncmF5LTkwMCBiZy10cmFuc3BhcmVudCBib3JkZXItMCBib3JkZXItYi0yIGJvcmRlci1vcmFuZ2UtMzAwIGFwcGVhcmFuY2Utbm9uZSBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0wIGZvY3VzOmJvcmRlci1vcmFuZ2UtNjAwIHBlZXJcIiBwbGFjZWhvbGRlcj1cIiBcIiByZXF1aXJlZCAvPlxyXG4gICAgICA8bGFiZWwgZm9yPVwiZmxvYXRpbmdfbmFtZVwiIGNsYXNzPVwicGVlci1mb2N1czpmb250LW1lZGl1bSBhYnNvbHV0ZSB0ZXh0LXNtIHRleHQtZ3JheS02MDAgZHVyYXRpb24tMzAwIHRyYW5zZm9ybSAtdHJhbnNsYXRlLXktNiBzY2FsZS03NSB0b3AtMyAtei0xMCBvcmlnaW4tWzBdIHBlZXItZm9jdXM6bGVmdC0wIHBlZXItZm9jdXM6dGV4dC1vcmFuZ2UtNjAwIHBlZXItcGxhY2Vob2xkZXItc2hvd246c2NhbGUtMTAwIHBlZXItcGxhY2Vob2xkZXItc2hvd246dHJhbnNsYXRlLXktMCBwZWVyLWZvY3VzOnNjYWxlLTc1IHBlZXItZm9jdXM6LXRyYW5zbGF0ZS15LTZcIj5Zb3VyIG5hbWU8L2xhYmVsPlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJyZWxhdGl2ZSB6LTAgdy1mdWxsIG1iLTYgZ3JvdXBcIj5cclxuICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJmbG9hdGluZ19lbWFpbFwiIGlkPVwiZmxvYXRpbmdfZW1haWxcIiBjbGFzcz1cImJsb2NrIHB5LTIuNSBweC0wIHctZnVsbCB0ZXh0LXNtIHRleHQtZ3JheS05MDAgYmctdHJhbnNwYXJlbnQgYm9yZGVyLTAgYm9yZGVyLWItMiBib3JkZXItb3JhbmdlLTMwMCBhcHBlYXJhbmNlLW5vbmUgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMCBmb2N1czpib3JkZXItb3JhbmdlLTYwMCBwZWVyXCIgcGxhY2Vob2xkZXI9XCIgXCIgcmVxdWlyZWQgLz5cclxuICAgICAgPGxhYmVsIGZvcj1cImZsb2F0aW5nX2VtYWlsXCIgY2xhc3M9XCJwZWVyLWZvY3VzOmZvbnQtbWVkaXVtIGFic29sdXRlIHRleHQtc20gdGV4dC1ncmF5LTYwMCBkdXJhdGlvbi0zMDAgdHJhbnNmb3JtIC10cmFuc2xhdGUteS02IHNjYWxlLTc1IHRvcC0zIC16LTEwIG9yaWdpbi1bMF0gcGVlci1mb2N1czpsZWZ0LTAgcGVlci1mb2N1czp0ZXh0LW9yYW5nZS02MDAgcGVlci1wbGFjZWhvbGRlci1zaG93bjpzY2FsZS0xMDAgcGVlci1wbGFjZWhvbGRlci1zaG93bjp0cmFuc2xhdGUteS0wIHBlZXItZm9jdXM6c2NhbGUtNzUgcGVlci1mb2N1czotdHJhbnNsYXRlLXktNlwiPkVtYWlsIGFkZHJlc3M8L2xhYmVsPlxyXG4gIDwvZGl2PiBcclxuICBgO1xyXG4gIGZvcm0uc2V0SFRNTChodG1sKTtcclxuXHJcbiAgY29uc3QgbWFrZVRleHRBcmVhID0gKCkgPT4ge1xyXG4gICAgY29uc3QgdGV4dEFyZWFEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29uc3QgdGV4dGFyZWFJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcclxuICAgIGNvbnN0IHRleHRhcmVhTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICB0ZXh0YXJlYUxhYmVsLnRleHRDb250ZW50ID0gXCJUeXBlIHlvdXIgbWVzc2FnZTpcIjtcclxuICAgIHRleHRhcmVhTGFiZWwuY2xhc3NMaXN0LmFkZChcclxuICAgICAgXCJwZWVyLWZvY3VzOmZvbnQtbWVkaXVtXCIsXHJcbiAgICAgIFwiYWJzb2x1dGVcIixcclxuICAgICAgXCJ0ZXh0LXNtXCIsXHJcbiAgICAgIFwidGV4dC1ncmF5LTYwMFwiLFxyXG4gICAgICBcImR1cmF0aW9uLTMwMFwiLFxyXG4gICAgICBcInRyYW5zZm9ybVwiLFxyXG4gICAgICBcIi10cmFuc2xhdGUteS02XCIsXHJcbiAgICAgIFwic2NhbGUtNzVcIixcclxuICAgICAgXCJ0b3AtM1wiLFxyXG4gICAgICBcIi16LTEwXCIsXHJcbiAgICAgIFwib3JpZ2luLVswXVwiLFxyXG4gICAgICBcInBlZXItZm9jdXM6bGVmdC0wXCIsXHJcbiAgICAgIFwicGVlci1mb2N1czp0ZXh0LW9yYW5nZS02MDBcIixcclxuICAgICAgXCJwZWVyLXBsYWNlaG9sZGVyLXNob3duOnNjYWxlLTEwMFwiLFxyXG4gICAgICBcInBlZXItcGxhY2Vob2xkZXItc2hvd246dHJhbnNsYXRlLXktMFwiLFxyXG4gICAgICBcInBlZXItZm9jdXM6c2NhbGUtNzVcIixcclxuICAgICAgXCJwZWVyLWZvY3VzOi10cmFuc2xhdGUteS02XCJcclxuICAgICk7XHJcbiAgICB0ZXh0YXJlYUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRleHRBcmVhXCIpO1xyXG4gICAgdGV4dGFyZWFJbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIiBcIik7XHJcbiAgICB0ZXh0YXJlYUlucHV0LmlkID0gXCJ0ZXh0QXJlYVwiO1xyXG4gICAgdGV4dGFyZWFJbnB1dC5jbGFzc0xpc3QuYWRkKFxyXG4gICAgICBcImJsb2NrXCIsXHJcbiAgICAgIFwicHktMi41XCIsXHJcbiAgICAgIFwicHgtMFwiLFxyXG4gICAgICBcInctZnVsbFwiLFxyXG4gICAgICBcInRleHQtc21cIixcclxuICAgICAgXCJ0ZXh0LWdyYXktOTAwXCIsXHJcbiAgICAgIFwiYmctdHJhbnNwYXJlbnRcIixcclxuICAgICAgXCJib3JkZXItMFwiLFxyXG4gICAgICBcImJvcmRlci1iLTJcIixcclxuICAgICAgXCJib3JkZXItb3JhbmdlLTMwMFwiLFxyXG4gICAgICBcImFwcGVhcmFuY2Utbm9uZVwiLFxyXG4gICAgICBcImZvY3VzOm91dGxpbmUtbm9uZVwiLFxyXG4gICAgICBcImZvY3VzOnJpbmctMFwiLFxyXG4gICAgICBcImZvY3VzOmJvcmRlci1vcmFuZ2UtNjAwXCIsXHJcbiAgICAgIFwicGVlclwiLFxyXG4gICAgICBcInJlc2l6ZS1ub25lXCJcclxuICAgICk7XHJcbiAgICB0ZXh0QXJlYURpdi5jbGFzc0xpc3QuYWRkKFwicmVsYXRpdmVcIiwgXCJ6LTBcIiwgXCJ3LWZ1bGxcIiwgXCJtYi02XCIsIFwiZ3JvdXBcIik7XHJcbiAgICB0ZXh0QXJlYURpdi5hcHBlbmRDaGlsZCh0ZXh0YXJlYUlucHV0KTtcclxuICAgIHRleHRBcmVhRGl2LmFwcGVuZENoaWxkKHRleHRhcmVhTGFiZWwpO1xyXG4gICAgcmV0dXJuIHRleHRBcmVhRGl2O1xyXG4gIH07XHJcbiAgY29uc3Qgc3VibWl0QnRuID0gKCkgPT4ge1xyXG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIGJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xyXG4gICAgYnRuLmNsYXNzTGlzdC5hZGQoXHJcbiAgICAgIFwiYmctdHJhbnNwYXJlbnRcIixcclxuICAgICAgXCJob3ZlcjpiZy1vcmFuZ2UtNDAwXCIsXHJcbiAgICAgIFwidGV4dC1ibGFja1wiLFxyXG4gICAgICBcImZvbnQtc2VtaWJvbGRcIixcclxuICAgICAgXCJob3Zlcjp0ZXh0LXdoaXRlXCIsXHJcbiAgICAgIFwicHktMVwiLFxyXG4gICAgICBcInB4LTJcIixcclxuICAgICAgXCJtdC0yXCIsXHJcbiAgICAgIFwiYm9yZGVyXCIsXHJcbiAgICAgIFwiYm9yZGVyLWJsYWNrXCIsXHJcbiAgICAgIFwiaG92ZXI6Ym9yZGVyLXRyYW5zcGFyZW50XCIsXHJcbiAgICAgIFwicm91bmRlZFwiLFxyXG4gICAgICBcInctMTZcIlxyXG4gICAgKTtcclxuICAgIGJ0bi50ZXh0Q29udGVudCA9IFwiU2VuZFwiO1xyXG4gICAgcmV0dXJuIGJ0bjtcclxuICB9O1xyXG4gIG1hcERpdi5pbm5lckhUTUwgPSBgPGlmcmFtZSBcclxuICBzcmM9XCJodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvZW1iZWQ/cGI9ITFtMTghMW0xMiExbTMhMWQyNTE4Ljg4NTg3NDY5NzA3MSEyZDQuMzI4ODA1ODYyOTUxNzM4NSEzZDUwLjg1MTc5NzU5ODg1MjQ3ITJtMyExZjAhMmYwITNmMCEzbTIhMWkxMDI0ITJpNzY4ITRmMTMuMSEzbTMhMW0yITFzMHg0N2MzYzMxYjgxZjY5NjUzJTNBMHhiNTc1N2Q4ZTQ5NzNhMGEhMnNGb25kZXJpZXBhcmshNWUwITNtMiExc2VuITJzYmUhNHYxNjg1NzEzOTc5NTA1ITVtMiExc2VuITJzYmVcIiBcclxuXHJcbiAgaGVpZ2h0PVwiNDAwcHhcIiBcclxuICB3aWR0aD1cIjEwMCVcIlxyXG4gIHN0eWxlPVwiYm9yZGVyOjA7IGJvcmRlci1yYWRpdXM6IDEwcHg7IG9iamVjdC1maXQ6IGNvdmVyO1wiIFxyXG4gIGFsbG93ZnVsbHNjcmVlbj1cIlwiIFxyXG4gIGxvYWRpbmc9XCJsYXp5XCIgXHJcbiAgcmVmZXJyZXJwb2xpY3k9XCJuby1yZWZlcnJlci13aGVuLWRvd25ncmFkZVwiPlxyXG4gIDwvaWZyYW1lPmA7XHJcbiAgZm9ybS5hcHBlbmRDaGlsZChtYWtlVGV4dEFyZWEoKSk7XHJcbiAgZm9ybS5hcHBlbmRDaGlsZChzdWJtaXRCdG4oKSk7XHJcbiAgY29udGFjdHNQYXJ0RGl2LmFwcGVuZENoaWxkKGZvcm0pO1xyXG4gIC8vIGRpdldpdGhUZXh0YXJlYS5hcHBlbmRDaGlsZCh0ZXh0YXJlYSk7XHJcbiAgbWFpbkRpdi5hcHBlbmRDaGlsZChjb250YWN0c1BhcnREaXYpO1xyXG4gIG1haW5EaXYuYXBwZW5kQ2hpbGQobWFwRGl2KTtcclxuICByZXR1cm4gbWFpbkRpdjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbnRhY3RQYWdlO1xyXG4iLCJpbXBvcnQgZG9udXQgZnJvbSBcIi4uL3BpY3MvZG9udXQucG5nXCI7XHJcbmltcG9ydCBtYWtlQ2hpbGQgZnJvbSBcIi4uL2Z1bmN0aW9ucy9tYWtlQ2hpbGRcIjtcclxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcclxuXHJcbmNvbnN0IG1ha2VIZWFkZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgZGl2SGVhZGVyID0gbWFrZUNoaWxkKFwiaGVhZGVyXCIsIFwiaGVhZGVyXCIsIFtcclxuICAgIFwiZmxleFwiLFxyXG4gICAgXCJpdGVtcy1jZW50ZXJcIixcclxuICAgIFwibS0zXCIsXHJcbiAgICBcInRvcC0wXCIsXHJcbiAgICBcInN0aWNreVwiLFxyXG4gICAgXCJwLTNcIixcclxuICAgIFwiei0xMFwiLFxyXG4gIF0pO1xyXG4gIGNvbnN0IGxvZ29EaXYgPSBtYWtlQ2hpbGQoXCJkaXZcIiwgXCJsb2dvRGl2XCIsIFtcclxuICAgIFwiZmxleFwiLFxyXG4gICAgXCJpdGVtcy1jZW50ZXJcIixcclxuICAgIFwiZmxleC1jb2xcIixcclxuICAgIFwic206ZmxleC1yb3dcIixcclxuICAgIFwiY3Vyc29yLXBvaW50ZXJcIixcclxuICBdKTtcclxuICBjb25zdCBsb2dvSW1nID0gbWFrZUNoaWxkKFwiaW1nXCIsIFwiaW1nXCIsIFtcInctOFwiLCBcImgtOFwiXSk7XHJcbiAgY29uc3QgYnJhbmROYW1lID0gbWFrZUNoaWxkKFxyXG4gICAgXCJoMVwiLFxyXG4gICAgXCJicmFuZE5hbWVcIixcclxuICAgIFtcImZvbnQtYm9sZFwiLCBcInVwcGVyY2FzZVwiLCBcIm1sLTBcIiwgXCJzbTptbC0yXCIsIFwidGV4dC14c1wiLCBcInNtOnRleHQtYmFzZVwiXSxcclxuICAgIFwiU2F2b3J5IERlbGlnaHRzXCJcclxuICApO1xyXG4gIGxvZ29JbWcuc3JjID0gZG9udXQ7XHJcbiAgY29uc3QgYnV0dG9uRGl2ID0gbWFrZUNoaWxkKFwiZGl2XCIsIFwiYnRuRGl2XCIsIFtcclxuICAgIFwiZmxleFwiLFxyXG4gICAgXCJqdXN0aWZ5LWNlbnRlclwiLFxyXG4gICAgXCJncm93XCIsXHJcbiAgICBcImxnOmdhcC0xMFwiLFxyXG4gICAgXCJzbTpnYXAtNFwiLFxyXG4gICAgXCJnYXAtNFwiLFxyXG4gICAgXCJsZzp0ZXh0LTJ4bFwiLFxyXG4gIF0pO1xyXG4gIGNvbnN0IGJ1dHRvbnMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBidG5zID0gW1wiSG9tZVwiLCBcIk1lbnVcIiwgXCJDb250YWN0c1wiXTtcclxuICAgIGJ0bnMuZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICBidXR0b25EaXYuYXBwZW5kQ2hpbGQoXHJcbiAgICAgICAgbWFrZUNoaWxkKFxyXG4gICAgICAgICAgXCJidXR0b25cIixcclxuICAgICAgICAgIGUsXHJcbiAgICAgICAgICBbXHJcbiAgICAgICAgICAgIFwiaG92ZXI6dGV4dC1vcmFuZ2UtNjAwXCIsXHJcbiAgICAgICAgICAgIFwidHJhbnNpdGlvblwiLFxyXG4gICAgICAgICAgICBcImVhc2UtaW4tb3V0XCIsXHJcbiAgICAgICAgICAgIFwiZGVsYXktNTBcIixcclxuICAgICAgICAgICAgXCJob3ZlcjotdHJhbnNsYXRlLXktcHhcIixcclxuICAgICAgICAgICAgXCJob3ZlcjpzY2FsZS0xMTBcIixcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgICBlXHJcbiAgICAgICAgKVxyXG4gICAgICApO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuICBidXR0b25zKCk7XHJcblxyXG4gIGxvZ29EaXYuYXBwZW5kQ2hpbGQobG9nb0ltZyk7XHJcbiAgbG9nb0Rpdi5hcHBlbmRDaGlsZChicmFuZE5hbWUpO1xyXG4gIGRpdkhlYWRlci5hcHBlbmRDaGlsZChsb2dvRGl2KTtcclxuICBkaXZIZWFkZXIuYXBwZW5kQ2hpbGQoYnV0dG9uRGl2KTtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKGRpdkhlYWRlcik7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtYWtlSGVhZGVyO1xyXG4iLCJpbXBvcnQgbWFrZUNoaWxkIGZyb20gXCIuLi9mdW5jdGlvbnMvbWFrZUNoaWxkXCI7XHJcbmltcG9ydCBtZW51UGFnZSBmcm9tIFwiLi9tZW51UGFnZS5qc1wiO1xyXG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XHJcbiAgY29uc3QgaG9tZU1haW5Db250ZW50ID0gbWFrZUNoaWxkKFwiZGl2XCIsIFwiaG9tZU1haW5Db250ZW50XCIsIFtcclxuICAgIFwibS1hdXRvXCIsXHJcbiAgICBcIm1kOm1sLVs0MHZ3XVwiLFxyXG4gICAgXCJtbC1bMjB2d11cIixcclxuICAgIFwibXItMTBcIixcclxuICAgIFwibWF4LVs0MjVweF06bS1hdXRvXCIsXHJcbiAgICBcInB4LTFcIixcclxuICAgIFwiZmxleFwiLFxyXG4gICAgXCJmbGV4LWNvbFwiLFxyXG4gICAgXCJpdGVtcy1jZW50ZXJcIixcclxuICBdKTtcclxuICBjb25zdCBoZWFkZXJJbk1haW5Db250ZW50ID0gbWFrZUNoaWxkKFxyXG4gICAgXCJoMVwiLFxyXG4gICAgXCJoZWFkZXJJbk1haW5Db250ZW50XCIsXHJcbiAgICBbXHJcbiAgICAgIFwibWQ6dGV4dC02eGxcIixcclxuICAgICAgXCJ0ZXh0LTV4bFwiLFxyXG4gICAgICBcImZvbnQtYmxhY2tcIixcclxuICAgICAgXCJ0ZXh0LWNlbnRlclwiLFxyXG4gICAgICBcImJnLWdyYWRpZW50LXRvLXJcIixcclxuICAgICAgXCJmcm9tLXJlZC01MDBcIixcclxuICAgICAgXCJ0by1wdXJwbGUtNTAwXCIsXHJcbiAgICAgIFwidGV4dC10cmFuc3BhcmVudFwiLFxyXG4gICAgICBcImJnLWNsaXAtdGV4dFwiLFxyXG4gICAgICBcIm10LThcIixcclxuICAgICAgXCJwYi0xMFwiLFxyXG4gICAgXSxcclxuICAgIFwiV2hlcmUgZXZlcnkgYml0ZSBpcyBhIGRlbGlnaHRcIlxyXG4gICk7XHJcbiAgY29uc3Qgd2VsY29tZVBhciA9IG1ha2VDaGlsZChcclxuICAgIFwicFwiLFxyXG4gICAgXCJ3ZWxjb21lUGFyXCIsXHJcbiAgICBbXCJ0ZXh0LTJ4bFwiLCBcInRleHQtY2VudGVyXCIsIFwicHgtOFwiXSxcclxuICAgIGBUaGFuayB5b3UgZm9yIGNob29zaW5nIFNhdm9yeSBEZWxpZ2h0cy4gV2UncmUgZXhjaXRlZCB0byBzaGFyZSBvdXIgcGFzc2lvbiBmb3IgZGVsaWNpb3VzIGZvb2Qgd2l0aCB5b3UuYFxyXG4gICk7XHJcbiAgY29uc3QgYnRuT3JkZXIgPSBtYWtlQ2hpbGQoXHJcbiAgICBcImJ1dHRvblwiLFxyXG4gICAgXCJidG5PcmRlclwiLFxyXG4gICAgW1xyXG4gICAgICBcInRleHQtd2hpdGVcIixcclxuICAgICAgXCJiZy1ncmFkaWVudC10by1iclwiLFxyXG4gICAgICBcImZyb20tcGluay01MDBcIixcclxuICAgICAgXCJ0by1vcmFuZ2UtNDAwXCIsXHJcbiAgICAgIFwiaG92ZXI6YmctZ3JhZGllbnQtdG8tYmxcIixcclxuICAgICAgXCJmb2N1czpyaW5nLTRcIixcclxuICAgICAgXCJmb2N1czpvdXRsaW5lLW5vbmVcIixcclxuICAgICAgXCJmb2N1czpyaW5nLXBpbmstMjAwXCIsXHJcbiAgICAgIFwiZm9udC1tZWRpdW1cIixcclxuICAgICAgXCJyb3VuZGVkLWxnXCIsXHJcbiAgICAgIFwidGV4dC1zbVwiLFxyXG4gICAgICBcInB4LTVcIixcclxuICAgICAgXCJweS0yLjVcIixcclxuICAgICAgXCJ0ZXh0LWNlbnRlclwiLFxyXG4gICAgICBcImJsb2NrXCIsXHJcbiAgICAgIFwidy1maXRcIixcclxuICAgICAgXCJtdC01XCIsXHJcbiAgICBdLFxyXG4gICAgXCJPcmRlciBOb3dcIlxyXG4gICk7XHJcbiAgYnRuT3JkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICBsZXQgb2xkQ2hpbGQgPSBtYWluLmNoaWxkTm9kZXNbMV07XHJcbiAgICBtYWluLnJlcGxhY2VDaGlsZChtZW51UGFnZSgpLCBvbGRDaGlsZCk7XHJcbiAgfSk7XHJcbiAgaG9tZU1haW5Db250ZW50LmFwcGVuZENoaWxkKGhlYWRlckluTWFpbkNvbnRlbnQpO1xyXG4gIGhvbWVNYWluQ29udGVudC5hcHBlbmRDaGlsZCh3ZWxjb21lUGFyKTtcclxuICBob21lTWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQoYnRuT3JkZXIpO1xyXG4gIHJldHVybiBob21lTWFpbkNvbnRlbnQ7XHJcbn1cclxuIiwiaW1wb3J0IGJyZWFrZmFzdCBmcm9tIFwiLi4vcGljcy9tZW51L2JyZWFrZmFzdC5wbmdcIjtcclxuaW1wb3J0IGJ1cmdlciBmcm9tIFwiLi4vcGljcy9tZW51L2J1cmdlci5wbmdcIjtcclxuaW1wb3J0IGNha2UgZnJvbSBcIi4uL3BpY3MvbWVudS9jYWtlLnBuZ1wiO1xyXG5pbXBvcnQgY2hpY2tlbiBmcm9tIFwiLi4vcGljcy9tZW51L2NoaWNrZW4ucG5nXCI7XHJcbmltcG9ydCBmcmVuY2hGcmllcyBmcm9tIFwiLi4vcGljcy9tZW51L2ZyZW5jaEZyaWVzLnBuZ1wiO1xyXG5pbXBvcnQgaG90RG9nIGZyb20gXCIuLi9waWNzL21lbnUvaG90RG9nLnBuZ1wiO1xyXG5pbXBvcnQgbm9vZGxlcyBmcm9tIFwiLi4vcGljcy9tZW51L25vb2RsZXMucG5nXCI7XHJcbmltcG9ydCBwaXp6YSBmcm9tIFwiLi4vcGljcy9tZW51L3BpenphLnBuZ1wiO1xyXG5pbXBvcnQgc2FuZHdpY2ggZnJvbSBcIi4uL3BpY3MvbWVudS9zYW5kd2ljaC5wbmdcIjtcclxuaW1wb3J0IHRhY28gZnJvbSBcIi4uL3BpY3MvbWVudS90YWNvLnBuZ1wiO1xyXG5cclxuaW1wb3J0IG1ha2VDaGlsZCBmcm9tIFwiLi4vZnVuY3Rpb25zL21ha2VDaGlsZFwiO1xyXG5cclxuY29uc3QgbWVudUl0ZW1NYWtlciA9IChkaXNoTmFtZSwgZGlzaERlc2NyaXB0aW9uLCBwcmljZSwgc3JjKSA9PiB7XHJcbiAgbGV0IG1lbnVJdGVtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBtZW51SXRlbURpdi5jbGFzc0xpc3QuYWRkKFxyXG4gICAgXCJmbGV4XCIsXHJcbiAgICBcImdhcC14LTRcIixcclxuICAgIFwibXgtNFwiLFxyXG4gICAgXCJiZy1zbGF0ZS0xMDBcIixcclxuICAgIFwicm91bmRlZC1sZ1wiLFxyXG4gICAgXCJweC01XCIsXHJcbiAgICBcInB5LTJcIixcclxuICAgIFwiaG92ZXI6Ymctb3JhbmdlLTIwMFwiLFxyXG4gICAgXCJob3ZlcjpzY2FsZS0xMDVcIlxyXG4gICk7XHJcbiAgbGV0IG1lbnVJdGVtUGljID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICBtZW51SXRlbVBpYy5jbGFzc0xpc3QuYWRkKFwib2JqZWN0LWNvbnRhaW5cIiwgXCJtYXgtdy1mdWxsXCIpO1xyXG4gIGxldCBtZW51SXRlbURlc2NEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIG1lbnVJdGVtRGVzY0Rpdi5jbGFzc0xpc3QuYWRkKFwiZmxleFwiLCBcImZsZXgtY29sXCIpO1xyXG4gIGxldCBtZW51SXRlbURlc2NIZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xyXG4gIG1lbnVJdGVtRGVzY0hlYWQuY2xhc3NMaXN0LmFkZChcIjN4bFwiLCBcImZvbnQtYm9sZFwiLCBcIm1iLTJcIik7XHJcbiAgbGV0IG1lbnVJdGVtRGVzY0luZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBtZW51SXRlbURlc2NJbmZvLmNsYXNzTGlzdC5hZGQoXCJmbGV4LTFcIik7XHJcbiAgbGV0IG1lbnVJdGVtRGVzY1ByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgbWVudUl0ZW1EZXNjUHJpY2UuY2xhc3NMaXN0LmFkZChcInNlbGYtZW5kXCIsIFwiMnhsXCIsIFwiZm9udC1ib2xkXCIpO1xyXG4gIG1lbnVJdGVtRGVzY0hlYWQudGV4dENvbnRlbnQgPSBkaXNoTmFtZTtcclxuICBtZW51SXRlbURlc2NJbmZvLnRleHRDb250ZW50ID0gZGlzaERlc2NyaXB0aW9uO1xyXG4gIG1lbnVJdGVtRGVzY1ByaWNlLnRleHRDb250ZW50ID0gcHJpY2U7XHJcbiAgbWVudUl0ZW1QaWMuc3JjID0gc3JjO1xyXG4gIG1lbnVJdGVtRGVzY0Rpdi5hcHBlbmRDaGlsZChtZW51SXRlbURlc2NIZWFkKTtcclxuICBtZW51SXRlbURlc2NEaXYuYXBwZW5kQ2hpbGQobWVudUl0ZW1EZXNjSW5mbyk7XHJcbiAgbWVudUl0ZW1EZXNjRGl2LmFwcGVuZENoaWxkKG1lbnVJdGVtRGVzY1ByaWNlKTtcclxuICBtZW51SXRlbURpdi5hcHBlbmRDaGlsZChtZW51SXRlbVBpYyk7XHJcbiAgbWVudUl0ZW1EaXYuYXBwZW5kQ2hpbGQobWVudUl0ZW1EZXNjRGl2KTtcclxuICBtZW51SXRlbURpdi5zZXRBdHRyaWJ1dGUoXCJkYXRhLWNlbGxcIiwgXCJncmlkLWl0ZW1cIik7XHJcbiAgcmV0dXJuIG1lbnVJdGVtRGl2O1xyXG59O1xyXG5cclxuY29uc3QgbWVudVBhZ2UgPSAoKSA9PiB7XHJcbiAgbGV0IG1lbnUgPSBtYWtlQ2hpbGQoXCJkaXZcIiwgXCJtZW51Q29udGFpbmVyXCIsIFtcclxuICAgIFwiZ3JpZFwiLFxyXG4gICAgXCJnYXAtNFwiLFxyXG4gICAgXCJncmlkLWNvbHMtYXV0by1maXRcIixcclxuICAgIFwibWQ6bWF4LXctNHhsXCIsXHJcbiAgICBcIm1kOm1sLVs0MHZ3XVwiLFxyXG4gICAgXCJtZDptci0xMFwiLFxyXG4gICAgXCJweS01XCIsXHJcbiAgICBcInJvdW5kZWQtbGdcIixcclxuICBdKTtcclxuICBtZW51LmFwcGVuZENoaWxkKFxyXG4gICAgbWVudUl0ZW1NYWtlcihcclxuICAgICAgXCJNb3JuaW5nIFN1bnJpc2UgRGVsaWdodFwiLFxyXG4gICAgICBcIldha2UgdXAgdG8gYSBwbGF0ZSBvZiBmbHVmZnkgc2NyYW1ibGVkIGVnZ3MsIHNpenpsaW5nIGJhY29uLCBnb2xkZW4gaGFzaCBicm93bnMsIGFuZCBhIHNpZGUgb2YgdG9hc3RlZCBicmVhZCwgdGhlIHBlcmZlY3Qgc3RhcnQgdG8geW91ciBkYXkuXCIsXHJcbiAgICAgIFwiJDhcIixcclxuICAgICAgYnJlYWtmYXN0XHJcbiAgICApXHJcbiAgKTtcclxuICBtZW51LmFwcGVuZENoaWxkKFxyXG4gICAgbWVudUl0ZW1NYWtlcihcclxuICAgICAgXCJGbGFtZS1HcmlsbGVkIERlbGlnaHRcIixcclxuICAgICAgXCJTYXZvciB0aGUgcGVyZmVjdCBiaXRlOiBKdWljeSBiZWVmLCBtZWx0ZWQgY2hlZXNlLCBjcmlzcCBsZXR0dWNlLCByaXBlIHRvbWF0b2VzLCBhbmQgdGFuZ3kgcGlja2xlcywgYWxsIGluIGEgdG9hc3RlZCBidW4uXCIsXHJcbiAgICAgIFwiJDEyXCIsXHJcbiAgICAgIGJ1cmdlclxyXG4gICAgKVxyXG4gICk7XHJcbiAgbWVudS5hcHBlbmRDaGlsZChcclxuICAgIG1lbnVJdGVtTWFrZXIoXHJcbiAgICAgIFwiVmVsdmV0IERyZWFtIERlbGlnaHRcIixcclxuICAgICAgXCIgRXhwZXJpZW5jZSBwdXJlIGJsaXNzIHdpdGggdGhpcyBsdXNjaW91cywgbW9pc3QgcmVkIHZlbHZldCBjYWtlLCBsYXllcmVkIHdpdGggY3JlYW15IGZyb3N0aW5nIGFuZCBoaW50cyBvZiBjaG9jb2xhdGUsIGNyZWF0aW5nIGFuIGlycmVzaXN0aWJsZSBzeW1waG9ueSBvZiBmbGF2b3JzLlwiLFxyXG4gICAgICBcIiQ2XCIsXHJcbiAgICAgIGNha2VcclxuICAgIClcclxuICApO1xyXG4gIG1lbnUuYXBwZW5kQ2hpbGQoXHJcbiAgICBtZW51SXRlbU1ha2VyKFxyXG4gICAgICBcIlplc3R5IENoaWNrZW4gSW5mdXNpb25cIixcclxuICAgICAgXCJTYXRpc2Z5IHlvdXIgY3JhdmluZ3Mgd2l0aCB0ZW5kZXIsIGZsYXZvcmZ1bCBjaGlja2VuLCBzZXJ2ZWQgd2l0aCB5b3VyIGNob2ljZSBvZiBzaWRlcyBmb3IgYSBtb3V0aHdhdGVyaW5nIGFuZCBjb21wbGV0ZSBtZWFsLlwiLFxyXG4gICAgICBcIiQxMVwiLFxyXG4gICAgICBjaGlja2VuXHJcbiAgICApXHJcbiAgKTtcclxuICBtZW51LmFwcGVuZENoaWxkKFxyXG4gICAgbWVudUl0ZW1NYWtlcihcclxuICAgICAgXCJHb2xkZW4gQ3J1bmNoIFNlbnNhdGlvblwiLFxyXG4gICAgICBcIkRlbGlnaHQgaW4gY3Jpc3B5LCBnb2xkZW4gZnJpZXMsIHBlcmZlY3RseSBzZWFzb25lZCBhbmQgaXJyZXNpc3RpYmx5IGFkZGljdGl2ZSwgcHJvdmlkaW5nIGEgc2F0aXNmeWluZyBjcnVuY2ggd2l0aCBldmVyeSBiaXRlLlwiLFxyXG4gICAgICBcIiQ1XCIsXHJcbiAgICAgIGZyZW5jaEZyaWVzXHJcbiAgICApXHJcbiAgKTtcclxuICBtZW51LmFwcGVuZENoaWxkKFxyXG4gICAgbWVudUl0ZW1NYWtlcihcclxuICAgICAgXCJTaXp6bGluJyBGcmFua2Z1cnRlciBGZWFzdFwiLFxyXG4gICAgICBcIkEgZ3JpbGxlZCBob3QgZG9nIG5lc3RsZWQgaW4gYSBzb2Z0IGJ1biwgdG9wcGVkIHdpdGggc2F2b3J5IGNvbmRpbWVudHMgZm9yIGEgYnVyc3Qgb2YgZmxhdm9yIHRoYXQgd2lsbCBzYXRpc2Z5IHlvdXIgY3JhdmluZ3Mgd2l0aCBldmVyeSBqdWljeSBiaXRlLlwiLFxyXG4gICAgICBcIiQ0XCIsXHJcbiAgICAgIGhvdERvZ1xyXG4gICAgKVxyXG4gICk7XHJcbiAgbWVudS5hcHBlbmRDaGlsZChcclxuICAgIG1lbnVJdGVtTWFrZXIoXHJcbiAgICAgIFwiU2F2b3J5IE5vb2RsZSBTeW1waG9ueVwiLFxyXG4gICAgICBcIkEgdGFudGFsaXppbmcgY29tYmluYXRpb24gb2YgY29va2VkIG5vb2RsZXMsIGFyb21hdGljIHNhdWNlLCBhbmQgdmlicmFudCB2ZWdldGFibGVzIHRoYXQgY3JlYXRlIGFuIGV4cGxvc2lvbiBvZiBmbGF2b3JzIGluIGV2ZXJ5IGZvcmtmdWwuXCIsXHJcbiAgICAgIFwiJDEwXCIsXHJcbiAgICAgIG5vb2RsZXNcclxuICAgIClcclxuICApO1xyXG4gIG1lbnUuYXBwZW5kQ2hpbGQoXHJcbiAgICBtZW51SXRlbU1ha2VyKFxyXG4gICAgICBcIkZpZXJ5IFBlcHBlcm9uaSBFeHBsb3Npb25cIixcclxuICAgICAgXCJJbmR1bGdlIGluIGEgdGFudGFsaXppbmcgYmxlbmQgb2YgZ29vZXkgbWVsdGVkIGNoZWVzZSwgc2F2b3J5IHBlcHBlcm9uaSwgYW5kIGEgbWVkbGV5IG9mIHZpYnJhbnQgdmVnZ2llcyBhdG9wIGEgY3Jpc3B5IGNydXN0LCBkZWxpdmVyaW5nIGEgYnVyc3Qgb2YgZmxhdm9ycyBpbiBldmVyeSBiaXRlLlwiLFxyXG4gICAgICBcIiQ5XCIsXHJcbiAgICAgIHBpenphXHJcbiAgICApXHJcbiAgKTtcclxuICBtZW51LmFwcGVuZENoaWxkKFxyXG4gICAgbWVudUl0ZW1NYWtlcihcclxuICAgICAgXCJIZWFydHkgU3RhY2sgU3VwcmVtZVwiLFxyXG4gICAgICBcIkEgZGVsaWNpb3VzIGNvbWJpbmF0aW9uIG9mIHByZW1pdW0gbWVhdHMsIG1lbHRlZCBjaGVlc2UsIGZyZXNoIHZlZ2dpZXMsIGFuZCB6ZXN0eSBjb25kaW1lbnRzLCBjcmVhdGluZyBhIG1vdXRod2F0ZXJpbmcgc2FuZHdpY2ggdGhhdCdzIHN1cmUgdG8gc2F0aXNmeS5cIixcclxuICAgICAgXCIkNlwiLFxyXG4gICAgICBzYW5kd2ljaFxyXG4gICAgKVxyXG4gICk7XHJcbiAgbWVudS5hcHBlbmRDaGlsZChcclxuICAgIG1lbnVJdGVtTWFrZXIoXHJcbiAgICAgIFwiWmVzdHkgRmllc3RhIFRhY29cIixcclxuICAgICAgXCJCaXRlIGludG8gYSBmaWVzdGEgb2YgZmxhdm9ycyB3aXRoIHRlbmRlciwgc2Vhc29uZWQgbWVhdCwgdmlicmFudCB0b3BwaW5ncywgYW5kIHplc3R5IHNhdWNlcywgYWxsIHdyYXBwZWQgaW4gYSB3YXJtIHRvcnRpbGxhIGZvciBhIG1vdXRod2F0ZXJpbmcgdGFjbyBleHBlcmllbmNlLlwiLFxyXG4gICAgICBcIiQ5XCIsXHJcbiAgICAgIHRhY29cclxuICAgIClcclxuICApO1xyXG4gIHJldHVybiBtZW51O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWVudVBhZ2U7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLy8gaW1wb3J0IGYgZnJvbSBcIi4vbWFpblBhZ2VcIjtcclxuaW1wb3J0IFwiLi4vc3R5bGUvaW5kZXguY3NzXCI7XHJcbmltcG9ydCBtYWtlSGVhZGVyIGZyb20gXCIuL2hlYWRlci5qc1wiO1xyXG5pbXBvcnQgbWFpblBhZ2UgZnJvbSBcIi4vbWFpblBhZ2UuanNcIjtcclxuaW1wb3J0IG1lbnVQYWdlIGZyb20gXCIuL21lbnVQYWdlLmpzXCI7XHJcbmltcG9ydCBjb250YWN0UGFnZSBmcm9tIFwiLi9jb250YWN0UGFnZS5qc1wiO1xyXG5tYWtlSGVhZGVyKCk7XHJcbmRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcImJnLWltYWdlXCIpO1xyXG5jb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcclxubWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpblBhZ2UoKSk7XHJcblxyXG5jb25zdCBuYXZCdG5MaXN0ZW5lciA9ICgpID0+IHtcclxuICBjb25zdCBidG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNidG5EaXYgPiBidXR0b25cIik7XHJcbiAgYnRuc1swXS5jbGFzc0xpc3QuYWRkKFwidGV4dC1vcmFuZ2UtNjAwXCIpO1xyXG4gIGxldCBidG5NYWluID0gZG9jdW1lbnRcclxuICAgIC5xdWVyeVNlbGVjdG9yKFwiI2J0bk9yZGVyXCIpXHJcbiAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGJ1aWxkUGFnZSk7XHJcbiAgYnRucy5mb3JFYWNoKChlKSA9PiBlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBidWlsZFBhZ2UpKTtcclxuXHJcbiAgZnVuY3Rpb24gYnVpbGRQYWdlKGUpIHtcclxuICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LmlkKTtcclxuICAgIGNvbnN0IG5hdmJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaGVhZGVyXCIpO1xyXG4gICAgbmF2YmFyLmNsYXNzTGlzdC5yZW1vdmUoXCJiZy1zbGF0ZS0xMDBcIik7XHJcbiAgICBidG5zLmZvckVhY2goKGUpID0+IGUuY2xhc3NMaXN0LnJlbW92ZShcInRleHQtb3JhbmdlLTYwMFwiKSk7XHJcbiAgICBsZXQgb2xkQ2hpbGQgPSBtYWluQ29udGVudC5jaGlsZE5vZGVzWzFdO1xyXG4gICAgY29uc29sZS5sb2cob2xkQ2hpbGQpO1xyXG4gICAgaWYgKFxyXG4gICAgICBlLnRhcmdldC5pZCA9PT0gXCJIb21lXCIgfHxcclxuICAgICAgZS50YXJnZXQuaWQgPT09IFwiYnJhbmROYW1lXCIgfHxcclxuICAgICAgZS50YXJnZXQuaWQgPT09IFwiaW1nXCJcclxuICAgICkge1xyXG4gICAgICBtYWluQ29udGVudC5yZXBsYWNlQ2hpbGQobWFpblBhZ2UoKSwgb2xkQ2hpbGQpO1xyXG4gICAgICBidG5NYWluID0gZG9jdW1lbnRcclxuICAgICAgICAucXVlcnlTZWxlY3RvcihcIiNidG5PcmRlclwiKVxyXG4gICAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYnVpbGRQYWdlKTtcclxuICAgICAgYnRuc1swXS5jbGFzc0xpc3QuYWRkKFwidGV4dC1vcmFuZ2UtNjAwXCIpO1xyXG4gICAgfSBlbHNlIGlmIChlLnRhcmdldC5pZCA9PT0gXCJNZW51XCIgfHwgZS50YXJnZXQuaWQgPT09IFwiYnRuT3JkZXJcIikge1xyXG4gICAgICBtYWluQ29udGVudC5yZXBsYWNlQ2hpbGQobWVudVBhZ2UoKSwgb2xkQ2hpbGQpO1xyXG4gICAgICBidG5zWzFdLmNsYXNzTGlzdC5hZGQoXCJ0ZXh0LW9yYW5nZS02MDBcIik7XHJcbiAgICAgIGNvbnN0IGdyaWRSb3dzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgZGl2W2RhdGEtY2VsbF49XCJncmlkLWl0ZW1cIl1gKTtcclxuICAgICAgbmF2YmFyLmNsYXNzTGlzdC5hZGQoXCJiZy1zbGF0ZS0xMDBcIik7XHJcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBncmlkUm93cy5mb3JFYWNoKChib3gsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBib3hUb3AgPSBib3guZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xyXG4gICAgICAgICAgYm94LmNsYXNzTGlzdC5hZGQoXCJ0cmFuc2l0aW9uLW9wYWNpdHlcIik7XHJcbiAgICAgICAgICBpZiAoYm94VG9wIDwgNTApIHtcclxuICAgICAgICAgICAgYm94LmNsYXNzTGlzdC5yZW1vdmUoXCJvcGFjaXR5LTEwMFwiKTtcclxuICAgICAgICAgICAgYm94LmNsYXNzTGlzdC5hZGQoXCJvcGFjaXR5LTUwXCIpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYm94LmNsYXNzTGlzdC5yZW1vdmUoXCJvcGFjaXR5LTUwXCIpO1xyXG4gICAgICAgICAgICBib3guY2xhc3NMaXN0LmFkZChcIm9wYWNpdHktMTAwXCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuaWQgPT09IFwiQ29udGFjdHNcIikge1xyXG4gICAgICBtYWluQ29udGVudC5yZXBsYWNlQ2hpbGQoY29udGFjdFBhZ2UoKSwgb2xkQ2hpbGQpO1xyXG4gICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKFwidGV4dC1vcmFuZ2UtNjAwXCIpO1xyXG4gICAgICBuYXZiYXIuY2xhc3NMaXN0LmFkZChcImJnLXNsYXRlLTEwMFwiKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHtcclxuICAgIGJ1aWxkUGFnZSxcclxuICB9O1xyXG59O1xyXG5jb25zdCBsb2dvRGl2ID0gZG9jdW1lbnRcclxuICAucXVlcnlTZWxlY3RvcihcIiNsb2dvRGl2XCIpXHJcbiAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBuYXZCdG5MaXN0ZW5lcigpLmJ1aWxkUGFnZSk7XHJcblxyXG5uYXZCdG5MaXN0ZW5lcigpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=