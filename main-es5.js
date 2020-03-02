function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-nav-bar></app-nav-bar>\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n<app-loading></app-loading>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/core/Components/loading/loading.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/Components/loading/loading.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCoreComponentsLoadingLoadingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"spinner-container modal fade show\" *ngIf=\"isLoading\">\n  <div class=\"spinner-border\" role=\"status\">\n    <span class=\"sr-only\">Loading...</span>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/core/Components/nav-bar/nav-bar.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/Components/nav-bar/nav-bar.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCoreComponentsNavBarNavBarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"navbar navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" href=\"#\">NewsPaper</a>\n\n  <button\n    class=\"navbar-toggler\"\n    type=\"button\"\n    data-toggle=\"collapse\"\n    data-target=\"#navbarNav\"\n    aria-controls=\"navbarNav\"\n    aria-expanded=\"false\"\n    aria-label=\"Toggle navigation\"\n  >\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item\">\n        <a\n          class=\"nav-link\"\n          routerLink=\"/news\"\n          routerLinkActive=\"active\"\n          [routerLinkActiveOptions]=\"{ exact: true }\"\n          >Home</a\n        >\n      </li>\n      <li class=\"nav-item\">\n        <a\n          class=\"nav-link\"\n          [routerLink]=\"['news/add', 0]\"\n          routerLinkActive=\"active\"\n          [routerLinkActiveOptions]=\"{ exact: true }\"\n          >Add News</a\n        >\n      </li>\n    </ul>\n  </div>\n</nav>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/file-uploader/file-uploader.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/file-uploader/file-uploader.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedFileUploaderFileUploaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"form-group\">\n  <label for=\"subtitle\">Image</label>\n  <div class=\"custom-file\">\n    <input\n      type=\"file\"\n      class=\"custom-file-input\"\n      id=\"newsImage\"\n      (change)=\"onFileChange($event)\"\n    />\n    <label class=\"custom-file-label\" for=\"newsImage\">Choose Image</label>\n  </div>\n  <img\n    *ngIf=\"imageSource\"\n    [src]=\"imageSource\"\n    class=\"img-fluid news-image\"\n    alt=\"Responsive image\"\n    appOnError\n  />\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/notification-modal/notification-modal.component.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/notification-modal/notification-modal.component.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedNotificationModalNotificationModalComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"modal-header\">\n  <h5 class=\"modal-title\">{{ settings?.title }}</h5>\n  <button\n    type=\"button\"\n    class=\"close pull-right\"\n    data-dismiss=\"modal\"\n    aria-label=\"Close\"\n    (click)=\"close()\"\n  >\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n\n<div class=\"modal-body\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n      {{ settings?.message }}\n    </div>\n  </div>\n\n  <div class=\"ibox-row-padding\">\n    <hr class=\"hr-line\" />\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-sm-6 m-b-xs\">\n      <button\n        type=\"button\"\n        class=\"btn btn-primary btn-block\"\n        (click)=\"confirm()\"\n      >\n        Confirm\n      </button>\n    </div>\n\n    <div class=\"col-sm-6\">\n      <button class=\"btn btn-dark btn-block\" type=\"button\" (click)=\"close()\">\n        Cancel\n      </button>\n    </div>\n  </div>\n</div>\n\n<div class=\"modal\" tabindex=\"-1\" role=\"dialog\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\">Modal title</h5>\n        <button\n          type=\"button\"\n          class=\"close\"\n          data-dismiss=\"modal\"\n          aria-label=\"Close\"\n        >\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <p>Modal body text goes here.</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">\n          Close\n        </button>\n        <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n      </div>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/radio-button/radio-button.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/radio-button/radio-button.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedRadioButtonRadioButtonComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"form-group radio-button-container\">\n  <label for=\"categories\">Categories</label>\n  <div class=\"btn-group\" btnRadioGroup>\n    <label\n      [ngClass]=\"{ selected: selectedCategory === category.value }\"\n      *ngFor=\"let category of categories\"\n      class=\"btn\"\n      uncheckable\n      tabindex=\"0\"\n      role=\"button\"\n      (click)=\"writeValue(category.value)\"\n      appSetClassColor\n      [category]=\"category.value\"\n      >{{ category.name }}</label\n    >\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];

          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;

            case 4:
              _.label++;
              return {
                value: op[1],
                done: false
              };

            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;

            case 7:
              op = _.ops.pop();

              _.trys.pop();

              continue;

            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }

              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }

              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }

              if (t && _.label < t[2]) {
                _.label = t[2];

                _.ops.push(op);

                break;
              }

              if (t[2]) _.ops.pop();

              _.trys.pop();

              continue;
          }

          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;

      for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    const routes = [{
      path: "news",
      loadChildren: () => __webpack_require__.e(
      /*! import() | news-news-module */
      "news-news-module").then(__webpack_require__.bind(null,
      /*! ./news/news.module */
      "./src/app/news/news.module.ts")).then(m => m.NewsModule)
    }, {
      path: "",
      redirectTo: "news",
      pathMatch: "full"
    }];
    let AppRoutingModule = class AppRoutingModule {};
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.less":
  /*!************************************!*\
    !*** ./src/app/app.component.less ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentLess(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* You can add global styles to this file, and also import other style files */\nhtml,\nbody {\n  height: 100%;\n}\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n::-webkit-scrollbar {\n  width: 18px;\n}\n::-webkit-scrollbar-track,\n::-webkit-scrollbar-thumb {\n  border: 5px solid rgba(0, 0, 0, 0);\n  background-clip: padding-box;\n  border-radius: 9px;\n  outline: none;\n}\n::-webkit-scrollbar-track {\n  background-color: #f5f5fa;\n}\n::-webkit-scrollbar-thumb {\n  background-color: #e3e3eb;\n}\n::-webkit-scrollbar-button {\n  width: 0;\n  height: 0;\n  display: none;\n}\n::-webkit-scrollbar-corner {\n  background-color: transparent;\n}\n.container {\n  margin-top: 30px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9DOi9TYW50aWFnby9Xb3Jrc3BhY2UvQW5ndWxhci9uZXdzcGFwZXItYXBwL3NyYy9zdHlsZXMubGVzcyIsInNyYy9hcHAvQzovU2FudGlhZ28vV29ya3NwYWNlL0FuZ3VsYXIvbmV3c3BhcGVyLWFwcC9zcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBOEU7QUNHOUU7O0VBRUUsWUFBQTtBRERGO0FDR0E7RUFDRSxTQUFBO0VBQ0EsaURBQUE7QURERjtBQ0lBO0VBQ0UsV0FBQTtBREZGO0FDS0E7O0VBRUUsa0NBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBREhGO0FDTUE7RUFDRSx5QkFBQTtBREpGO0FDT0E7RUFDRSx5QkFBQTtBRExGO0FDUUE7RUFDRSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7QURORjtBQ1FBO0VBQ0UsNkJBQUE7QURORjtBRS9CQTtFQUNFLGdCQUFBO0FGaUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuaHRtbCxcbmJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG59XG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDE4cHg7XG59XG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrLFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJvcmRlcjogNXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMCk7XG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gIGJvcmRlci1yYWRpdXM6IDlweDtcbiAgb3V0bGluZTogbm9uZTtcbn1cbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWZhO1xufVxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlM2UzZWI7XG59XG46Oi13ZWJraXQtc2Nyb2xsYmFyLWJ1dHRvbiB7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG46Oi13ZWJraXQtc2Nyb2xsYmFyLWNvcm5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuLmNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG4iLCIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5AaW1wb3J0IFwiLi9zdHlsZXMvc3R5bGVzLXZhcmlhYmxlcy5sZXNzXCI7XG5cbmh0bWwsXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDE4cHg7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2ssXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYm9yZGVyOiA1cHggc29saWQgcmdiYSgwLCAwLCAwLCAwKTtcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xuICBvdXRsaW5lOiBub25lO1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogQHNjcm9sbGJhci10cmFjay1jb2xvcjtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQtY29sb3I6IEBzY3JvbGxiYXItdGh1bWItY29sb3I7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItYnV0dG9uIHtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgZGlzcGxheTogbm9uZTtcbn1cbjo6LXdlYmtpdC1zY3JvbGxiYXItY29ybmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4iLCJAaW1wb3J0IFwiLi4vc3R5bGVzLmxlc3NcIjtcbi5jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiBAY29udGFpbmVyLW1hcmdpbi10b3A7XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let AppComponent = class AppComponent {
      constructor() {
        this.title = 'newspaper-app';
      }

    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.less */
      "./src/app/app.component.less")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _core_core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./core/core.module */
    "./src/app/core/core.module.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _core_Guards_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @core/Guards/can-deactivate.guard */
    "./src/app/core/Guards/can-deactivate.guard.ts");
    /* harmony import */


    var _core_Interceptors_http_error_interceptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @core/Interceptors/http-error.interceptor */
    "./src/app/core/Interceptors/http-error.interceptor.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _ngx_bootstrap_ngx_bootstrap_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./ngx-bootstrap/ngx-bootstrap.module */
    "./src/app/ngx-bootstrap/ngx-bootstrap.module.ts");
    /* harmony import */


    var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! angular-in-memory-web-api */
    "./node_modules/angular-in-memory-web-api/index.js");
    /* harmony import */


    var _core_Api_api_data__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @core/Api/api-data */
    "./src/app/core/Api/api-data.ts");
    /* harmony import */


    var _core_Interceptors_http_headers_interceptor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @core/Interceptors/http-headers.interceptor */
    "./src/app/core/Interceptors/http-headers.interceptor.ts");

    let AppModule = class AppModule {};
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"].entryComponents],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _ngx_bootstrap_ngx_bootstrap_module__WEBPACK_IMPORTED_MODULE_10__["NgxBootstrapModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_11__["HttpClientInMemoryWebApiModule"].forRoot(_core_Api_api_data__WEBPACK_IMPORTED_MODULE_12__["ApiData"])],
      providers: [_core_Guards_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_7__["CanDeactivateGuard"], {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"],
        useClass: _core_Interceptors_http_error_interceptor__WEBPACK_IMPORTED_MODULE_8__["HttpErrorInterceptor"],
        multi: true
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"],
        useClass: _core_Interceptors_http_headers_interceptor__WEBPACK_IMPORTED_MODULE_13__["HttpHeadersInterceptor"],
        multi: true
      }],
      entryComponents: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"].entryComponents],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/core/Api/api-data.ts":
  /*!**************************************!*\
    !*** ./src/app/core/Api/api-data.ts ***!
    \**************************************/

  /*! exports provided: ApiData */

  /***/
  function srcAppCoreApiApiDataTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiData", function () {
      return ApiData;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    class ApiData {
      createDb() {
        const news = [{
          id: 11,
          title: "This is a test news",
          subtitle: "Coronavirus is killing everyone",
          image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAeAB4AAD",
          category: "International",
          description: "The new virus is killing everybody"
        }, {
          id: 31,
          title: "This is a test news",
          subtitle: "Coronavirus is killing everyone",
          image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAeAB4AAD",
          category: "HumanRights",
          description: "The new virus is killing everybody,The new virus is killing everybody,The new virus is killing everybody,The new virus is killing everybody,The new virus is killing everybody"
        }, {
          id: 21,
          title: "This is a test news",
          subtitle: "Coronavirus is killing everyone",
          image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAeAB4AAD",
          category: "Sports",
          description: "The new virus is killing everybody"
        }, {
          id: 111,
          title: "This is a test news",
          subtitle: "Coronavirus is killing everyone",
          image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAeAB4AAD",
          category: null,
          description: "The new virus is killing everybody"
        }, {
          id: 11,
          title: "This is a test news",
          subtitle: "Coronavirus is killing everyone",
          image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAeAB4AAD",
          category: null,
          description: "The new virus is killing everybody"
        }];
        const categories = [{
          name: "Sports",
          value: "Sports"
        }, {
          name: "Politics",
          value: "Politics"
        }, {
          name: "Human Rights",
          value: "HumanRights"
        }, {
          name: "International",
          value: "International"
        }];
        return {
          news,
          categories
        };
      }

      genId(news) {
        return news.length > 0 ? Math.max(...news.map(n => n.id)) + 1 : 11;
      }

    }
    /***/

  },

  /***/
  "./src/app/core/Components/loading/loading.component.less":
  /*!****************************************************************!*\
    !*** ./src/app/core/Components/loading/loading.component.less ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCoreComponentsLoadingLoadingComponentLess(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* You can add global styles to this file, and also import other style files */\nhtml,\nbody {\n  height: 100%;\n}\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n::-webkit-scrollbar {\n  width: 18px;\n}\n::-webkit-scrollbar-track,\n::-webkit-scrollbar-thumb {\n  border: 5px solid rgba(0, 0, 0, 0);\n  background-clip: padding-box;\n  border-radius: 9px;\n  outline: none;\n}\n::-webkit-scrollbar-track {\n  background-color: #f5f5fa;\n}\n::-webkit-scrollbar-thumb {\n  background-color: #e3e3eb;\n}\n::-webkit-scrollbar-button {\n  width: 0;\n  height: 0;\n  display: none;\n}\n::-webkit-scrollbar-corner {\n  background-color: transparent;\n}\n.spinner-container {\n  background-color: rgba(0, 0, 0, 0.3);\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1040;\n  width: 100vw;\n  height: 100vh;\n}\n.spinner-container .spinner-border {\n  z-index: 4;\n  position: absolute;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9Db21wb25lbnRzL2xvYWRpbmcvbG9hZGluZy5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvY29yZS9Db21wb25lbnRzL2xvYWRpbmcvQzovU2FudGlhZ28vV29ya3NwYWNlL0FuZ3VsYXIvbmV3c3BhcGVyLWFwcC9zcmMvc3R5bGVzLmxlc3MiLCJzcmMvYXBwL2NvcmUvQ29tcG9uZW50cy9sb2FkaW5nL0M6L1NhbnRpYWdvL1dvcmtzcGFjZS9Bbmd1bGFyL25ld3NwYXBlci1hcHAvc3JjL2FwcC9jb3JlL0NvbXBvbmVudHMvbG9hZGluZy9sb2FkaW5nLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUE4RTtBQ0c5RTs7RUFFRSxZQUFBO0FEREY7QUNHQTtFQUNFLFNBQUE7RUFDQSxpREFBQTtBRERGO0FDSUE7RUFDRSxXQUFBO0FERkY7QUNLQTs7RUFFRSxrQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FESEY7QUNNQTtFQUNFLHlCQUFBO0FESkY7QUNPQTtFQUNFLHlCQUFBO0FETEY7QUNRQTtFQUNFLFFBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtBRE5GO0FDUUE7RUFDRSw2QkFBQTtBRE5GO0FFOUJBO0VBQ0Usb0NBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBRmdDRjtBRTFDQTtFQVlJLFVBQUE7RUFDQSxrQkFBQTtBRmlDSiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvQ29tcG9uZW50cy9sb2FkaW5nL2xvYWRpbmcuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5odG1sLFxuYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbn1cbmJvZHkge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbn1cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogMThweDtcbn1cbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2ssXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYm9yZGVyOiA1cHggc29saWQgcmdiYSgwLCAwLCAwLCAwKTtcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xuICBvdXRsaW5lOiBub25lO1xufVxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZmE7XG59XG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UzZTNlYjtcbn1cbjo6LXdlYmtpdC1zY3JvbGxiYXItYnV0dG9uIHtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgZGlzcGxheTogbm9uZTtcbn1cbjo6LXdlYmtpdC1zY3JvbGxiYXItY29ybmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4uc3Bpbm5lci1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMTA0MDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuLnNwaW5uZXItY29udGFpbmVyIC5zcGlubmVyLWJvcmRlciB7XG4gIHotaW5kZXg6IDQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbiIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbkBpbXBvcnQgXCIuL3N0eWxlcy9zdHlsZXMtdmFyaWFibGVzLmxlc3NcIjtcblxuaHRtbCxcbmJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogMThweDtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBib3JkZXI6IDVweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDApO1xuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICBib3JkZXItcmFkaXVzOiA5cHg7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBAc2Nyb2xsYmFyLXRyYWNrLWNvbG9yO1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogQHNjcm9sbGJhci10aHVtYi1jb2xvcjtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci1idXR0b24ge1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBkaXNwbGF5OiBub25lO1xufVxuOjotd2Via2l0LXNjcm9sbGJhci1jb3JuZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbiIsIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9zdHlsZXMubGVzc1wiO1xuXG4uc3Bpbm5lci1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBAYmFja2dyb3VuZC1vcGFjaXR5O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDEwNDA7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgLnNwaW5uZXItYm9yZGVyIHtcbiAgICB6LWluZGV4OiA0O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgfVxufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/core/Components/loading/loading.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/core/Components/loading/loading.component.ts ***!
    \**************************************************************/

  /*! exports provided: LoadingComponent */

  /***/
  function srcAppCoreComponentsLoadingLoadingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoadingComponent", function () {
      return LoadingComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _core_Services_loading_event_bus_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @core/Services/loading-event-bus.service */
    "./src/app/core/Services/loading-event-bus.service.ts");
    /* harmony import */


    var _core_Enums_events_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @core/Enums/events.enum */
    "./src/app/core/Enums/events.enum.ts");
    /* harmony import */


    var subsink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! subsink */
    "./node_modules/subsink/dist/index.js");
    /* harmony import */


    var subsink__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(subsink__WEBPACK_IMPORTED_MODULE_4__);

    let LoadingComponent = class LoadingComponent {
      constructor(eventBusService) {
        this.eventBusService = eventBusService;
        this.isLoading = false;
        this.subs = new subsink__WEBPACK_IMPORTED_MODULE_4__["SubSink"]();
        this.subs.sink = this.eventBusService.on(_core_Enums_events_enum__WEBPACK_IMPORTED_MODULE_3__["Events"].onLoading, loading => {
          return this.isLoading = loading;
        });
      }

      ngOnDestroy() {
        this.subs.unsubscribe();
      }

    };

    LoadingComponent.ctorParameters = () => [{
      type: _core_Services_loading_event_bus_service__WEBPACK_IMPORTED_MODULE_2__["EventBusService"]
    }];

    LoadingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-loading",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./loading.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/core/Components/loading/loading.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./loading.component.less */
      "./src/app/core/Components/loading/loading.component.less")).default]
    })], LoadingComponent);
    /***/
  },

  /***/
  "./src/app/core/Components/nav-bar/nav-bar.component.less":
  /*!****************************************************************!*\
    !*** ./src/app/core/Components/nav-bar/nav-bar.component.less ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCoreComponentsNavBarNavBarComponentLess(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvQ29tcG9uZW50cy9uYXYtYmFyL25hdi1iYXIuY29tcG9uZW50Lmxlc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/core/Components/nav-bar/nav-bar.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/core/Components/nav-bar/nav-bar.component.ts ***!
    \**************************************************************/

  /*! exports provided: NavBarComponent */

  /***/
  function srcAppCoreComponentsNavBarNavBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavBarComponent", function () {
      return NavBarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let NavBarComponent = class NavBarComponent {
      constructor() {}

    };
    NavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-nav-bar",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./nav-bar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/core/Components/nav-bar/nav-bar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./nav-bar.component.less */
      "./src/app/core/Components/nav-bar/nav-bar.component.less")).default]
    })], NavBarComponent);
    /***/
  },

  /***/
  "./src/app/core/Enums/events.enum.ts":
  /*!*******************************************!*\
    !*** ./src/app/core/Enums/events.enum.ts ***!
    \*******************************************/

  /*! exports provided: Events */

  /***/
  function srcAppCoreEnumsEventsEnumTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Events", function () {
      return Events;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Events;

    (function (Events) {
      Events[Events["onLoading"] = 0] = "onLoading";
    })(Events || (Events = {}));
    /***/

  },

  /***/
  "./src/app/core/Guards/can-deactivate.guard.ts":
  /*!*****************************************************!*\
    !*** ./src/app/core/Guards/can-deactivate.guard.ts ***!
    \*****************************************************/

  /*! exports provided: CanDeactivateGuard */

  /***/
  function srcAppCoreGuardsCanDeactivateGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CanDeactivateGuard", function () {
      return CanDeactivateGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let CanDeactivateGuard = class CanDeactivateGuard {
      canDeactivate(component, route, state) {
        return component.canDeactivate ? component.canDeactivate() : true;
      }

    };
    CanDeactivateGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], CanDeactivateGuard);
    /***/
  },

  /***/
  "./src/app/core/Guards/ensure-module-loaded-once.guard.ts":
  /*!****************************************************************!*\
    !*** ./src/app/core/Guards/ensure-module-loaded-once.guard.ts ***!
    \****************************************************************/

  /*! exports provided: EnsureModuleLoadedOnceGuard */

  /***/
  function srcAppCoreGuardsEnsureModuleLoadedOnceGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EnsureModuleLoadedOnceGuard", function () {
      return EnsureModuleLoadedOnceGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    class EnsureModuleLoadedOnceGuard {
      constructor(targetModule) {
        if (targetModule) {
          throw new Error("".concat(targetModule.constructor.name, " has already been loaded."));
        }
      }

    }
    /***/

  },

  /***/
  "./src/app/core/Interceptors/http-error.interceptor.ts":
  /*!*************************************************************!*\
    !*** ./src/app/core/Interceptors/http-error.interceptor.ts ***!
    \*************************************************************/

  /*! exports provided: HttpErrorInterceptor */

  /***/
  function srcAppCoreInterceptorsHttpErrorInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpErrorInterceptor", function () {
      return HttpErrorInterceptor;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _core_Services_loading_event_bus_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @core/Services/loading-event-bus.service */
    "./src/app/core/Services/loading-event-bus.service.ts");
    /* harmony import */


    var _core_Enums_events_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @core/Enums/events.enum */
    "./src/app/core/Enums/events.enum.ts");

    let HttpErrorInterceptor = class HttpErrorInterceptor {
      constructor(eventBusService) {
        this.eventBusService = eventBusService;
      }

      intercept(req, next) {
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => {
          this.eventBusService.emit(new _core_Services_loading_event_bus_service__WEBPACK_IMPORTED_MODULE_4__["EmitEvent"](_core_Enums_events_enum__WEBPACK_IMPORTED_MODULE_5__["Events"].onLoading, false));
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
      }

    };

    HttpErrorInterceptor.ctorParameters = () => [{
      type: _core_Services_loading_event_bus_service__WEBPACK_IMPORTED_MODULE_4__["EventBusService"]
    }];

    HttpErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], HttpErrorInterceptor);
    /***/
  },

  /***/
  "./src/app/core/Interceptors/http-headers.interceptor.ts":
  /*!***************************************************************!*\
    !*** ./src/app/core/Interceptors/http-headers.interceptor.ts ***!
    \***************************************************************/

  /*! exports provided: HttpHeadersInterceptor */

  /***/
  function srcAppCoreInterceptorsHttpHeadersInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpHeadersInterceptor", function () {
      return HttpHeadersInterceptor;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _core_Services_loading_event_bus_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @core/Services/loading-event-bus.service */
    "./src/app/core/Services/loading-event-bus.service.ts");
    /* harmony import */


    var _core_Enums_events_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @core/Enums/events.enum */
    "./src/app/core/Enums/events.enum.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    let HttpHeadersInterceptor = class HttpHeadersInterceptor {
      constructor(eventBusService) {
        this.eventBusService = eventBusService;
      }

      intercept(req, next) {
        this.eventBusService.emit(new _core_Services_loading_event_bus_service__WEBPACK_IMPORTED_MODULE_2__["EmitEvent"](_core_Enums_events_enum__WEBPACK_IMPORTED_MODULE_3__["Events"].onLoading, true));
        let headersReq = req;

        if (req.method === "POST" || req.method === "PUT") {
          headersReq = req.clone({
            headers: req.headers.set("Content-Type", "application/json")
          });
        }

        return next.handle(headersReq).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(evt => {
          this.eventBusService.emit(new _core_Services_loading_event_bus_service__WEBPACK_IMPORTED_MODULE_2__["EmitEvent"](_core_Enums_events_enum__WEBPACK_IMPORTED_MODULE_3__["Events"].onLoading, false));
        }));
      }

    };

    HttpHeadersInterceptor.ctorParameters = () => [{
      type: _core_Services_loading_event_bus_service__WEBPACK_IMPORTED_MODULE_2__["EventBusService"]
    }];

    HttpHeadersInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], HttpHeadersInterceptor);
    /***/
  },

  /***/
  "./src/app/core/Services/loading-event-bus.service.ts":
  /*!************************************************************!*\
    !*** ./src/app/core/Services/loading-event-bus.service.ts ***!
    \************************************************************/

  /*! exports provided: EventBusService, EmitEvent */

  /***/
  function srcAppCoreServicesLoadingEventBusServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventBusService", function () {
      return EventBusService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmitEvent", function () {
      return EmitEvent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    let EventBusService = class EventBusService {
      constructor() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
      }

      on(event, action) {
        return this.subject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(e => e.name === event), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(e => e.value)).subscribe(action);
      }

      emit(event) {
        this.subject.next(event);
      }

    };
    EventBusService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], EventBusService);

    class EmitEvent {
      constructor(name, value) {
        this.name = name;
        this.value = value;
      }

    }
    /***/

  },

  /***/
  "./src/app/core/core.module.ts":
  /*!*************************************!*\
    !*** ./src/app/core/core.module.ts ***!
    \*************************************/

  /*! exports provided: CoreModule */

  /***/
  function srcAppCoreCoreModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CoreModule", function () {
      return CoreModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _Guards_ensure_module_loaded_once_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./Guards/ensure-module-loaded-once.guard */
    "./src/app/core/Guards/ensure-module-loaded-once.guard.ts");
    /* harmony import */


    var _Components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./Components/nav-bar/nav-bar.component */
    "./src/app/core/Components/nav-bar/nav-bar.component.ts");
    /* harmony import */


    var _Components_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./Components/loading/loading.component */
    "./src/app/core/Components/loading/loading.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    let CoreModule = class CoreModule extends _Guards_ensure_module_loaded_once_guard__WEBPACK_IMPORTED_MODULE_3__["EnsureModuleLoadedOnceGuard"] {
      constructor(parentModule) {
        super(parentModule);
      }

    };

    CoreModule.ctorParameters = () => [{
      type: CoreModule,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"]
      }]
    }];

    CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_Components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_4__["NavBarComponent"], _Components_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__["LoadingComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]],
      exports: [_Components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_4__["NavBarComponent"], _Components_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__["LoadingComponent"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"])())], CoreModule);
    /***/
  },

  /***/
  "./src/app/news/Models/Colors.enum.ts":
  /*!********************************************!*\
    !*** ./src/app/news/Models/Colors.enum.ts ***!
    \********************************************/

  /*! exports provided: Colors */

  /***/
  function srcAppNewsModelsColorsEnumTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Colors", function () {
      return Colors;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Colors;

    (function (Colors) {
      Colors["Sports"] = "success";
      Colors["Politics"] = "danger";
      Colors["HumanRights"] = "info";
      Colors["International"] = "warning";
    })(Colors || (Colors = {}));
    /***/

  },

  /***/
  "./src/app/ngx-bootstrap/ngx-bootstrap.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/ngx-bootstrap/ngx-bootstrap.module.ts ***!
    \*******************************************************/

  /*! exports provided: NgxBootstrapModule */

  /***/
  function srcAppNgxBootstrapNgxBootstrapModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgxBootstrapModule", function () {
      return NgxBootstrapModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-bootstrap */
    "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");

    let NgxBootstrapModule = class NgxBootstrapModule {};
    NgxBootstrapModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ButtonsModule"].forRoot()],
      exports: [ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalModule"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ButtonsModule"]]
    })], NgxBootstrapModule);
    /***/
  },

  /***/
  "./src/app/shared/Directives/on-error.directive.ts":
  /*!*********************************************************!*\
    !*** ./src/app/shared/Directives/on-error.directive.ts ***!
    \*********************************************************/

  /*! exports provided: OnErrorDirective */

  /***/
  function srcAppSharedDirectivesOnErrorDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OnErrorDirective", function () {
      return OnErrorDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let OnErrorDirective = class OnErrorDirective {
      constructor(eRef) {
        this.eRef = eRef;
        this.defaultImage = "../../assets/default-image.jpg";
      }

      setDefaultImage() {
        const element = this.eRef.nativeElement;
        element.src = this.defaultImage;
      }

    };

    OnErrorDirective.ctorParameters = () => [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("error")], OnErrorDirective.prototype, "setDefaultImage", null);
    OnErrorDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: "[appOnError]"
    })], OnErrorDirective);
    /***/
  },

  /***/
  "./src/app/shared/Directives/set-class-color.directive.ts":
  /*!****************************************************************!*\
    !*** ./src/app/shared/Directives/set-class-color.directive.ts ***!
    \****************************************************************/

  /*! exports provided: SetClassColorDirective */

  /***/
  function srcAppSharedDirectivesSetClassColorDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SetClassColorDirective", function () {
      return SetClassColorDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _news_Models_Colors_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../news/Models/Colors.enum */
    "./src/app/news/Models/Colors.enum.ts");

    let SetClassColorDirective = class SetClassColorDirective {
      constructor(renderer, hostElement) {
        this.renderer = renderer;
        this.hostElement = hostElement;
      }

      ngOnInit() {
        this.renderer.addClass(this.hostElement.nativeElement, "btn-".concat(_news_Models_Colors_enum__WEBPACK_IMPORTED_MODULE_2__["Colors"][this.category]));
      }

    };

    SetClassColorDirective.ctorParameters = () => [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SetClassColorDirective.prototype, "category", void 0);
    SetClassColorDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: "[appSetClassColor]"
    })], SetClassColorDirective);
    /***/
  },

  /***/
  "./src/app/shared/file-uploader/file-uploader.component.less":
  /*!*******************************************************************!*\
    !*** ./src/app/shared/file-uploader/file-uploader.component.less ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedFileUploaderFileUploaderComponentLess(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".news-image {\n  margin-top: 20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2ZpbGUtdXBsb2FkZXIvQzovU2FudGlhZ28vV29ya3NwYWNlL0FuZ3VsYXIvbmV3c3BhcGVyLWFwcC9zcmMvYXBwL3NoYXJlZC9maWxlLXVwbG9hZGVyL2ZpbGUtdXBsb2FkZXIuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL3NoYXJlZC9maWxlLXVwbG9hZGVyL2ZpbGUtdXBsb2FkZXIuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2ZpbGUtdXBsb2FkZXIvZmlsZS11cGxvYWRlci5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uZXdzLWltYWdlIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbiIsIi5uZXdzLWltYWdlIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/shared/file-uploader/file-uploader.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/shared/file-uploader/file-uploader.component.ts ***!
    \*****************************************************************/

  /*! exports provided: FileUploaderComponent */

  /***/
  function srcAppSharedFileUploaderFileUploaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FileUploaderComponent", function () {
      return FileUploaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let FileUploaderComponent = class FileUploaderComponent {
      constructor() {
        this.onLoad = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      onFileChange(event) {
        const reader = new FileReader();

        if (event.target.files && event.target.files.length) {
          const _event$target$files = _slicedToArray(event.target.files, 1),
                file = _event$target$files[0];

          reader.readAsDataURL(file);

          reader.onload = () => {
            this.onLoad.emit(reader.result);
          };
        }
      }

    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], FileUploaderComponent.prototype, "imageSource", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], FileUploaderComponent.prototype, "onLoad", void 0);
    FileUploaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-file-uploader",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./file-uploader.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/file-uploader/file-uploader.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./file-uploader.component.less */
      "./src/app/shared/file-uploader/file-uploader.component.less")).default]
    })], FileUploaderComponent);
    /***/
  },

  /***/
  "./src/app/shared/notification-modal/notification-modal.component.less":
  /*!*****************************************************************************!*\
    !*** ./src/app/shared/notification-modal/notification-modal.component.less ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedNotificationModalNotificationModalComponentLess(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9ub3RpZmljYXRpb24tbW9kYWwvbm90aWZpY2F0aW9uLW1vZGFsLmNvbXBvbmVudC5sZXNzIn0= */";
    /***/
  },

  /***/
  "./src/app/shared/notification-modal/notification-modal.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/shared/notification-modal/notification-modal.component.ts ***!
    \***************************************************************************/

  /*! exports provided: NotificationModalComponent */

  /***/
  function srcAppSharedNotificationModalNotificationModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationModalComponent", function () {
      return NotificationModalComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");

    let NotificationModalComponent = class NotificationModalComponent {
      constructor(bsModalRef) {
        this.bsModalRef = bsModalRef;
        this.onConfirm = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      confirm() {
        this.onConfirm.emit();
        this.close();
      }

      close() {
        this.bsModalRef.hide();
      }

    };

    NotificationModalComponent.ctorParameters = () => [{
      type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NotificationModalComponent.prototype, "onConfirm", void 0);
    NotificationModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-notification-modal",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./notification-modal.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/notification-modal/notification-modal.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./notification-modal.component.less */
      "./src/app/shared/notification-modal/notification-modal.component.less")).default]
    })], NotificationModalComponent);
    /***/
  },

  /***/
  "./src/app/shared/radio-button/radio-button.component.less":
  /*!*****************************************************************!*\
    !*** ./src/app/shared/radio-button/radio-button.component.less ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedRadioButtonRadioButtonComponentLess(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".radio-button-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  flex-wrap: wrap;\n}\n.radio-button-container .btn {\n  margin: 10px;\n}\n.radio-button-container .selected {\n  opacity: 0.6;\n  -webkit-transform: scale(1.15);\n          transform: scale(1.15);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3JhZGlvLWJ1dHRvbi9DOi9TYW50aWFnby9Xb3Jrc3BhY2UvQW5ndWxhci9uZXdzcGFwZXItYXBwL3NyYy9hcHAvc2hhcmVkL3JhZGlvLWJ1dHRvbi9yYWRpby1idXR0b24uY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL3NoYXJlZC9yYWRpby1idXR0b24vcmFkaW8tYnV0dG9uLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EsZUFBQTtBQ0NGO0FESkE7RUFLSSxZQUFBO0FDRUo7QURQQTtFQVFJLFlBQUE7RUFDQSw4QkFBQTtVQUFBLHNCQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvcmFkaW8tYnV0dG9uL3JhZGlvLWJ1dHRvbi5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yYWRpby1idXR0b24tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICAuYnRuIHtcbiAgICBtYXJnaW46IDEwcHg7XG4gIH1cbiAgLnNlbGVjdGVkIHtcbiAgICBvcGFjaXR5OiAwLjY7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgfVxufVxuIiwiLnJhZGlvLWJ1dHRvbi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4ucmFkaW8tYnV0dG9uLWNvbnRhaW5lciAuYnRuIHtcbiAgbWFyZ2luOiAxMHB4O1xufVxuLnJhZGlvLWJ1dHRvbi1jb250YWluZXIgLnNlbGVjdGVkIHtcbiAgb3BhY2l0eTogMC42O1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/shared/radio-button/radio-button.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/shared/radio-button/radio-button.component.ts ***!
    \***************************************************************/

  /*! exports provided: RadioButtonComponent */

  /***/
  function srcAppSharedRadioButtonRadioButtonComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RadioButtonComponent", function () {
      return RadioButtonComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var RadioButtonComponent_1;
    let RadioButtonComponent = RadioButtonComponent_1 = class RadioButtonComponent {
      constructor() {
        this._value = "";

        this.onChange = () => {};

        this.onTouch = () => {};
      }

      set value(val) {
        if (val !== undefined && this._value !== val) {
          this._value = val;
          this.onChange(val);
          this.onTouch(val);
        }
      }

      writeValue(value) {
        this.value = value;
        this.selectedCategory = value;
      }

      registerOnChange(fn) {
        this.onChange = fn;
      }

      registerOnTouched(fn) {
        this.onTouch = fn;
      }

    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], RadioButtonComponent.prototype, "categories", void 0);
    RadioButtonComponent = RadioButtonComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-radio-button",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./radio-button.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/radio-button/radio-button.component.html")).default,
      providers: [{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => RadioButtonComponent_1),
        multi: true
      }],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./radio-button.component.less */
      "./src/app/shared/radio-button/radio-button.component.less")).default]
    })], RadioButtonComponent);
    /***/
  },

  /***/
  "./src/app/shared/shared.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/shared.module.ts ***!
    \*****************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _notification_modal_notification_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./notification-modal/notification-modal.component */
    "./src/app/shared/notification-modal/notification-modal.component.ts");
    /* harmony import */


    var _file_uploader_file_uploader_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./file-uploader/file-uploader.component */
    "./src/app/shared/file-uploader/file-uploader.component.ts");
    /* harmony import */


    var _radio_button_radio_button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./radio-button/radio-button.component */
    "./src/app/shared/radio-button/radio-button.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _Directives_on_error_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./Directives/on-error.directive */
    "./src/app/shared/Directives/on-error.directive.ts");
    /* harmony import */


    var _Directives_set_class_color_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./Directives/set-class-color.directive */
    "./src/app/shared/Directives/set-class-color.directive.ts");

    let SharedModule = class SharedModule {};
    SharedModule.entryComponents = [_notification_modal_notification_modal_component__WEBPACK_IMPORTED_MODULE_3__["NotificationModalComponent"]];
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_file_uploader_file_uploader_component__WEBPACK_IMPORTED_MODULE_4__["FileUploaderComponent"], _radio_button_radio_button_component__WEBPACK_IMPORTED_MODULE_5__["RadioButtonComponent"], _Directives_on_error_directive__WEBPACK_IMPORTED_MODULE_7__["OnErrorDirective"], _Directives_set_class_color_directive__WEBPACK_IMPORTED_MODULE_8__["SetClassColorDirective"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]],
      exports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _file_uploader_file_uploader_component__WEBPACK_IMPORTED_MODULE_4__["FileUploaderComponent"], _radio_button_radio_button_component__WEBPACK_IMPORTED_MODULE_5__["RadioButtonComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _Directives_on_error_directive__WEBPACK_IMPORTED_MODULE_7__["OnErrorDirective"], _Directives_set_class_color_directive__WEBPACK_IMPORTED_MODULE_8__["SetClassColorDirective"]]
    })], SharedModule);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    const environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(err => console.error(err));
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Santiago\Workspace\Angular\newspaper-app\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map