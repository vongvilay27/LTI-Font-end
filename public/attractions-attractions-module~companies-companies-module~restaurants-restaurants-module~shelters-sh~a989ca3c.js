(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["attractions-attractions-module~companies-companies-module~restaurants-restaurants-module~shelters-sh~a989ca3c"],{

/***/ "./node_modules/@angular/cdk/esm5/bidi.es5.js":
/*!****************************************************!*\
  !*** ./node_modules/@angular/cdk/esm5/bidi.es5.js ***!
  \****************************************************/
/*! exports provided: Directionality, DIR_DOCUMENT, Dir, BidiModule, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Directionality", function() { return Directionality; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DIR_DOCUMENT", function() { return DIR_DOCUMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dir", function() { return Dir; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BidiModule", function() { return BidiModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return DIR_DOCUMENT_FACTORY; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Injection token used to inject the document into Directionality.
 * This is used so that the value can be faked in tests.
 *
 * We can't use the real document in tests because changing the real `dir` causes geometry-based
 * tests in Safari to fail.
 *
 * We also can't re-provide the DOCUMENT token from platform-brower because the unit tests
 * themselves use things like `querySelector` in test code.
 *
 * This token is defined in a separate file from Directionality as a workaround for
 * https://github.com/angular/angular/issues/22559
 *
 * \@docs-private
 */
var /** @type {?} */ DIR_DOCUMENT = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('cdk-dir-doc', {
    providedIn: 'root',
    factory: DIR_DOCUMENT_FACTORY,
});
/**
 * \@docs-private
 * @return {?}
 */
function DIR_DOCUMENT_FACTORY() {
    return Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * The directionality (LTR / RTL) context for the application (or a subtree of it).
 * Exposes the current direction and a stream of direction changes.
 */
var Directionality = /** @class */ (function () {
    function Directionality(_document) {
        /**
         * The current 'ltr' or 'rtl' value.
         */
        this.value = 'ltr';
        /**
         * Stream that emits whenever the 'ltr' / 'rtl' state changes.
         */
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        if (_document) {
            // TODO: handle 'auto' value -
            // We still need to account for dir="auto".
            // It looks like HTMLElemenet.dir is also "auto" when that's set to the attribute,
            // but getComputedStyle return either "ltr" or "rtl". avoiding getComputedStyle for now
            var /** @type {?} */ bodyDir = _document.body ? _document.body.dir : null;
            var /** @type {?} */ htmlDir = _document.documentElement ? _document.documentElement.dir : null;
            this.value = /** @type {?} */ ((bodyDir || htmlDir || 'ltr'));
        }
    }
    /**
     * @return {?}
     */
    Directionality.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.change.complete();
    };
    Directionality.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    Directionality.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [DIR_DOCUMENT,] },] },
    ]; };
    /** @nocollapse */ Directionality.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["defineInjectable"])({ factory: function Directionality_Factory() { return new Directionality(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(DIR_DOCUMENT, 8)); }, token: Directionality, providedIn: "root" });
    return Directionality;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Directive to listen for changes of direction of part of the DOM.
 *
 * Provides itself as Directionality such that descendant directives only need to ever inject
 * Directionality to get the closest direction.
 */
var Dir = /** @class */ (function () {
    function Dir() {
        this._dir = 'ltr';
        /**
         * Whether the `value` has been set to its initial value.
         */
        this._isInitialized = false;
        /**
         * Event emitted when the direction changes.
         */
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    Object.defineProperty(Dir.prototype, "dir", {
        get: /**
         * \@docs-private
         * @return {?}
         */
        function () { return this._dir; },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            var /** @type {?} */ old = this._dir;
            this._dir = v;
            if (old !== this._dir && this._isInitialized) {
                this.change.emit(this._dir);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dir.prototype, "value", {
        /** Current layout direction of the element. */
        get: /**
         * Current layout direction of the element.
         * @return {?}
         */
        function () { return this.dir; },
        enumerable: true,
        configurable: true
    });
    /** Initialize once default value has been set. */
    /**
     * Initialize once default value has been set.
     * @return {?}
     */
    Dir.prototype.ngAfterContentInit = /**
     * Initialize once default value has been set.
     * @return {?}
     */
    function () {
        this._isInitialized = true;
    };
    /**
     * @return {?}
     */
    Dir.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.change.complete();
    };
    Dir.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: '[dir]',
                    providers: [{ provide: Directionality, useExisting: Dir }],
                    host: { '[dir]': 'dir' },
                    exportAs: 'dir',
                },] },
    ];
    /** @nocollapse */
    Dir.propDecorators = {
        "change": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"], args: ['dirChange',] },],
        "dir": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    };
    return Dir;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var BidiModule = /** @class */ (function () {
    function BidiModule() {
    }
    BidiModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    exports: [Dir],
                    declarations: [Dir],
                },] },
    ];
    return BidiModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */


//# sourceMappingURL=bidi.es5.js.map


/***/ }),

/***/ "./node_modules/@angular/cdk/esm5/coercion.es5.js":
/*!********************************************************!*\
  !*** ./node_modules/@angular/cdk/esm5/coercion.es5.js ***!
  \********************************************************/
/*! exports provided: coerceBooleanProperty, coerceNumberProperty, _isNumberValue, coerceArray, coerceCssPixelValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coerceBooleanProperty", function() { return coerceBooleanProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coerceNumberProperty", function() { return coerceNumberProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_isNumberValue", function() { return _isNumberValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coerceArray", function() { return coerceArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coerceCssPixelValue", function() { return coerceCssPixelValue; });
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * Coerces a data-bound value (typically a string) to a boolean.
 * @param {?} value
 * @return {?}
 */
function coerceBooleanProperty(value) {
    return value != null && "" + value !== 'false';
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @param {?} value
 * @param {?=} fallbackValue
 * @return {?}
 */
function coerceNumberProperty(value, fallbackValue) {
    if (fallbackValue === void 0) { fallbackValue = 0; }
    return _isNumberValue(value) ? Number(value) : fallbackValue;
}
/**
 * Whether the provided value is considered a number.
 * \@docs-private
 * @param {?} value
 * @return {?}
 */
function _isNumberValue(value) {
    // parseFloat(value) handles most of the cases we're interested in (it treats null, empty string,
    // and other non-number values as NaN, where Number just uses 0) but it considers the string
    // '123hello' to be a valid number. Therefore we also check if Number(value) is NaN.
    return !isNaN(parseFloat(/** @type {?} */ (value))) && !isNaN(Number(value));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * Wraps the provided value in an array, unless the provided value is an array.
 * @template T
 * @param {?} value
 * @return {?}
 */
function coerceArray(value) {
    return Array.isArray(value) ? value : [value];
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * Coerces a value to a CSS pixel value.
 * @param {?} value
 * @return {?}
 */
function coerceCssPixelValue(value) {
    if (value == null) {
        return '';
    }
    return typeof value === 'string' ? value : value + "px";
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */


//# sourceMappingURL=coercion.es5.js.map


/***/ }),

/***/ "./node_modules/@angular/cdk/esm5/keycodes.es5.js":
/*!********************************************************!*\
  !*** ./node_modules/@angular/cdk/esm5/keycodes.es5.js ***!
  \********************************************************/
/*! exports provided: MAC_ENTER, BACKSPACE, TAB, NUM_CENTER, ENTER, SHIFT, CONTROL, ALT, PAUSE, CAPS_LOCK, ESCAPE, SPACE, PAGE_UP, PAGE_DOWN, END, HOME, LEFT_ARROW, UP_ARROW, RIGHT_ARROW, DOWN_ARROW, PLUS_SIGN, PRINT_SCREEN, INSERT, DELETE, ZERO, ONE, TWO, THREE, FOUR, FIVE, SIX, SEVEN, EIGHT, NINE, FF_SEMICOLON, FF_EQUALS, QUESTION_MARK, AT_SIGN, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, META, MAC_WK_CMD_LEFT, MAC_WK_CMD_RIGHT, CONTEXT_MENU, NUMPAD_ZERO, NUMPAD_ONE, NUMPAD_TWO, NUMPAD_THREE, NUMPAD_FOUR, NUMPAD_FIVE, NUMPAD_SIX, NUMPAD_SEVEN, NUMPAD_EIGHT, NUMPAD_NINE, NUMPAD_MULTIPLY, NUMPAD_PLUS, NUMPAD_MINUS, NUMPAD_PERIOD, NUMPAD_DIVIDE, F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, F12, NUM_LOCK, SCROLL_LOCK, FIRST_MEDIA, FF_MINUS, MUTE, VOLUME_DOWN, VOLUME_UP, FF_MUTE, FF_VOLUME_DOWN, LAST_MEDIA, FF_VOLUME_UP, SEMICOLON, EQUALS, COMMA, DASH, SLASH, APOSTROPHE, TILDE, OPEN_SQUARE_BRACKET, BACKSLASH, CLOSE_SQUARE_BRACKET, SINGLE_QUOTE, MAC_META */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAC_ENTER", function() { return MAC_ENTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BACKSPACE", function() { return BACKSPACE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TAB", function() { return TAB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUM_CENTER", function() { return NUM_CENTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENTER", function() { return ENTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHIFT", function() { return SHIFT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTROL", function() { return CONTROL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALT", function() { return ALT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAUSE", function() { return PAUSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CAPS_LOCK", function() { return CAPS_LOCK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ESCAPE", function() { return ESCAPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPACE", function() { return SPACE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGE_UP", function() { return PAGE_UP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGE_DOWN", function() { return PAGE_DOWN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "END", function() { return END; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOME", function() { return HOME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LEFT_ARROW", function() { return LEFT_ARROW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UP_ARROW", function() { return UP_ARROW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RIGHT_ARROW", function() { return RIGHT_ARROW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOWN_ARROW", function() { return DOWN_ARROW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLUS_SIGN", function() { return PLUS_SIGN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRINT_SCREEN", function() { return PRINT_SCREEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INSERT", function() { return INSERT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE", function() { return DELETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZERO", function() { return ZERO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ONE", function() { return ONE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TWO", function() { return TWO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "THREE", function() { return THREE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOUR", function() { return FOUR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FIVE", function() { return FIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIX", function() { return SIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEVEN", function() { return SEVEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EIGHT", function() { return EIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NINE", function() { return NINE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FF_SEMICOLON", function() { return FF_SEMICOLON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FF_EQUALS", function() { return FF_EQUALS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUESTION_MARK", function() { return QUESTION_MARK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AT_SIGN", function() { return AT_SIGN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return B; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return C; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return E; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return F; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return G; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return H; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return I; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return J; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return K; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return L; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "M", function() { return M; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "N", function() { return N; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "O", function() { return O; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return P; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Q", function() { return Q; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "R", function() { return R; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return S; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T", function() { return T; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "U", function() { return U; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "V", function() { return V; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "W", function() { return W; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "X", function() { return X; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Y", function() { return Y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Z", function() { return Z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "META", function() { return META; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAC_WK_CMD_LEFT", function() { return MAC_WK_CMD_LEFT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAC_WK_CMD_RIGHT", function() { return MAC_WK_CMD_RIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTEXT_MENU", function() { return CONTEXT_MENU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_ZERO", function() { return NUMPAD_ZERO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_ONE", function() { return NUMPAD_ONE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_TWO", function() { return NUMPAD_TWO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_THREE", function() { return NUMPAD_THREE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_FOUR", function() { return NUMPAD_FOUR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_FIVE", function() { return NUMPAD_FIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_SIX", function() { return NUMPAD_SIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_SEVEN", function() { return NUMPAD_SEVEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_EIGHT", function() { return NUMPAD_EIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_NINE", function() { return NUMPAD_NINE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_MULTIPLY", function() { return NUMPAD_MULTIPLY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_PLUS", function() { return NUMPAD_PLUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_MINUS", function() { return NUMPAD_MINUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_PERIOD", function() { return NUMPAD_PERIOD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_DIVIDE", function() { return NUMPAD_DIVIDE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F1", function() { return F1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F2", function() { return F2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F3", function() { return F3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F4", function() { return F4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F5", function() { return F5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F6", function() { return F6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F7", function() { return F7; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F8", function() { return F8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F9", function() { return F9; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F10", function() { return F10; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F11", function() { return F11; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F12", function() { return F12; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUM_LOCK", function() { return NUM_LOCK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCROLL_LOCK", function() { return SCROLL_LOCK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FIRST_MEDIA", function() { return FIRST_MEDIA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FF_MINUS", function() { return FF_MINUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MUTE", function() { return MUTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VOLUME_DOWN", function() { return VOLUME_DOWN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VOLUME_UP", function() { return VOLUME_UP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FF_MUTE", function() { return FF_MUTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FF_VOLUME_DOWN", function() { return FF_VOLUME_DOWN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAST_MEDIA", function() { return LAST_MEDIA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FF_VOLUME_UP", function() { return FF_VOLUME_UP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEMICOLON", function() { return SEMICOLON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EQUALS", function() { return EQUALS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMMA", function() { return COMMA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DASH", function() { return DASH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SLASH", function() { return SLASH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APOSTROPHE", function() { return APOSTROPHE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TILDE", function() { return TILDE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPEN_SQUARE_BRACKET", function() { return OPEN_SQUARE_BRACKET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BACKSLASH", function() { return BACKSLASH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLOSE_SQUARE_BRACKET", function() { return CLOSE_SQUARE_BRACKET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SINGLE_QUOTE", function() { return SINGLE_QUOTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAC_META", function() { return MAC_META; });
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

var /** @type {?} */ MAC_ENTER = 3;
var /** @type {?} */ BACKSPACE = 8;
var /** @type {?} */ TAB = 9;
var /** @type {?} */ NUM_CENTER = 12;
var /** @type {?} */ ENTER = 13;
var /** @type {?} */ SHIFT = 16;
var /** @type {?} */ CONTROL = 17;
var /** @type {?} */ ALT = 18;
var /** @type {?} */ PAUSE = 19;
var /** @type {?} */ CAPS_LOCK = 20;
var /** @type {?} */ ESCAPE = 27;
var /** @type {?} */ SPACE = 32;
var /** @type {?} */ PAGE_UP = 33;
var /** @type {?} */ PAGE_DOWN = 34;
var /** @type {?} */ END = 35;
var /** @type {?} */ HOME = 36;
var /** @type {?} */ LEFT_ARROW = 37;
var /** @type {?} */ UP_ARROW = 38;
var /** @type {?} */ RIGHT_ARROW = 39;
var /** @type {?} */ DOWN_ARROW = 40;
var /** @type {?} */ PLUS_SIGN = 43;
var /** @type {?} */ PRINT_SCREEN = 44;
var /** @type {?} */ INSERT = 45;
var /** @type {?} */ DELETE = 46;
var /** @type {?} */ ZERO = 48;
var /** @type {?} */ ONE = 49;
var /** @type {?} */ TWO = 50;
var /** @type {?} */ THREE = 51;
var /** @type {?} */ FOUR = 52;
var /** @type {?} */ FIVE = 53;
var /** @type {?} */ SIX = 54;
var /** @type {?} */ SEVEN = 55;
var /** @type {?} */ EIGHT = 56;
var /** @type {?} */ NINE = 57;
var /** @type {?} */ FF_SEMICOLON = 59; // Firefox (Gecko) fires this for semicolon instead of 186
var /** @type {?} */ FF_EQUALS = 61; // Firefox (Gecko) fires this for equals instead of 187
var /** @type {?} */ QUESTION_MARK = 63;
var /** @type {?} */ AT_SIGN = 64;
var /** @type {?} */ A = 65;
var /** @type {?} */ B = 66;
var /** @type {?} */ C = 67;
var /** @type {?} */ D = 68;
var /** @type {?} */ E = 69;
var /** @type {?} */ F = 70;
var /** @type {?} */ G = 71;
var /** @type {?} */ H = 72;
var /** @type {?} */ I = 73;
var /** @type {?} */ J = 74;
var /** @type {?} */ K = 75;
var /** @type {?} */ L = 76;
var /** @type {?} */ M = 77;
var /** @type {?} */ N = 78;
var /** @type {?} */ O = 79;
var /** @type {?} */ P = 80;
var /** @type {?} */ Q = 81;
var /** @type {?} */ R = 82;
var /** @type {?} */ S = 83;
var /** @type {?} */ T = 84;
var /** @type {?} */ U = 85;
var /** @type {?} */ V = 86;
var /** @type {?} */ W = 87;
var /** @type {?} */ X = 88;
var /** @type {?} */ Y = 89;
var /** @type {?} */ Z = 90;
var /** @type {?} */ META = 91; // WIN_KEY_LEFT
var /** @type {?} */ MAC_WK_CMD_LEFT = 91;
var /** @type {?} */ MAC_WK_CMD_RIGHT = 93;
var /** @type {?} */ CONTEXT_MENU = 93;
var /** @type {?} */ NUMPAD_ZERO = 96;
var /** @type {?} */ NUMPAD_ONE = 97;
var /** @type {?} */ NUMPAD_TWO = 98;
var /** @type {?} */ NUMPAD_THREE = 99;
var /** @type {?} */ NUMPAD_FOUR = 100;
var /** @type {?} */ NUMPAD_FIVE = 101;
var /** @type {?} */ NUMPAD_SIX = 102;
var /** @type {?} */ NUMPAD_SEVEN = 103;
var /** @type {?} */ NUMPAD_EIGHT = 104;
var /** @type {?} */ NUMPAD_NINE = 105;
var /** @type {?} */ NUMPAD_MULTIPLY = 106;
var /** @type {?} */ NUMPAD_PLUS = 107;
var /** @type {?} */ NUMPAD_MINUS = 109;
var /** @type {?} */ NUMPAD_PERIOD = 110;
var /** @type {?} */ NUMPAD_DIVIDE = 111;
var /** @type {?} */ F1 = 112;
var /** @type {?} */ F2 = 113;
var /** @type {?} */ F3 = 114;
var /** @type {?} */ F4 = 115;
var /** @type {?} */ F5 = 116;
var /** @type {?} */ F6 = 117;
var /** @type {?} */ F7 = 118;
var /** @type {?} */ F8 = 119;
var /** @type {?} */ F9 = 120;
var /** @type {?} */ F10 = 121;
var /** @type {?} */ F11 = 122;
var /** @type {?} */ F12 = 123;
var /** @type {?} */ NUM_LOCK = 144;
var /** @type {?} */ SCROLL_LOCK = 145;
var /** @type {?} */ FIRST_MEDIA = 166;
var /** @type {?} */ FF_MINUS = 173;
var /** @type {?} */ MUTE = 173; // Firefox (Gecko) fires 181 for MUTE
var /** @type {?} */ VOLUME_DOWN = 174; // Firefox (Gecko) fires 182 for VOLUME_DOWN
var /** @type {?} */ VOLUME_UP = 175; // Firefox (Gecko) fires 183 for VOLUME_UP
var /** @type {?} */ FF_MUTE = 181;
var /** @type {?} */ FF_VOLUME_DOWN = 182;
var /** @type {?} */ LAST_MEDIA = 183;
var /** @type {?} */ FF_VOLUME_UP = 183;
var /** @type {?} */ SEMICOLON = 186; // Firefox (Gecko) fires 59 for SEMICOLON
var /** @type {?} */ EQUALS = 187; // Firefox (Gecko) fires 61 for EQUALS
var /** @type {?} */ COMMA = 188;
var /** @type {?} */ DASH = 189; // Firefox (Gecko) fires 173 for DASH/MINUS
var /** @type {?} */ SLASH = 191;
var /** @type {?} */ APOSTROPHE = 192;
var /** @type {?} */ TILDE = 192;
var /** @type {?} */ OPEN_SQUARE_BRACKET = 219;
var /** @type {?} */ BACKSLASH = 220;
var /** @type {?} */ CLOSE_SQUARE_BRACKET = 221;
var /** @type {?} */ SINGLE_QUOTE = 222;
var /** @type {?} */ MAC_META = 224;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */


//# sourceMappingURL=keycodes.es5.js.map


/***/ }),

/***/ "./node_modules/@angular/cdk/esm5/overlay.es5.js":
/*!*******************************************************!*\
  !*** ./node_modules/@angular/cdk/esm5/overlay.es5.js ***!
  \*******************************************************/
/*! exports provided: ViewportRuler, VIEWPORT_RULER_PROVIDER, CdkScrollable, ScrollDispatcher, Overlay, OverlayContainer, CdkOverlayOrigin, CdkConnectedOverlay, FullscreenOverlayContainer, OverlayRef, OverlayKeyboardDispatcher, OverlayPositionBuilder, GlobalPositionStrategy, ConnectedPositionStrategy, FlexibleConnectedPositionStrategy, OverlayConfig, ConnectionPositionPair, ScrollingVisibility, ConnectedOverlayPositionChange, validateVerticalPosition, validateHorizontalPosition, ScrollStrategyOptions, RepositionScrollStrategy, CloseScrollStrategy, NoopScrollStrategy, BlockScrollStrategy, OverlayModule, OVERLAY_PROVIDERS, ɵg, ɵf, ɵb, ɵa, ɵc, ɵe, ɵd */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Overlay", function() { return Overlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayContainer", function() { return OverlayContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkOverlayOrigin", function() { return CdkOverlayOrigin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkConnectedOverlay", function() { return CdkConnectedOverlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullscreenOverlayContainer", function() { return FullscreenOverlayContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayRef", function() { return OverlayRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayKeyboardDispatcher", function() { return OverlayKeyboardDispatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayPositionBuilder", function() { return OverlayPositionBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalPositionStrategy", function() { return GlobalPositionStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectedPositionStrategy", function() { return ConnectedPositionStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlexibleConnectedPositionStrategy", function() { return FlexibleConnectedPositionStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayConfig", function() { return OverlayConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectionPositionPair", function() { return ConnectionPositionPair; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollingVisibility", function() { return ScrollingVisibility; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectedOverlayPositionChange", function() { return ConnectedOverlayPositionChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateVerticalPosition", function() { return validateVerticalPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateHorizontalPosition", function() { return validateHorizontalPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollStrategyOptions", function() { return ScrollStrategyOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepositionScrollStrategy", function() { return RepositionScrollStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloseScrollStrategy", function() { return CloseScrollStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoopScrollStrategy", function() { return NoopScrollStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockScrollStrategy", function() { return BlockScrollStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayModule", function() { return OverlayModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OVERLAY_PROVIDERS", function() { return OVERLAY_PROVIDERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return OVERLAY_KEYBOARD_DISPATCHER_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return OVERLAY_KEYBOARD_DISPATCHER_PROVIDER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return OVERLAY_CONTAINER_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return OVERLAY_CONTAINER_PROVIDER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER_FACTORY; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm5/coercion.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewportRuler", function() { return _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ViewportRuler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VIEWPORT_RULER_PROVIDER", function() { return _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["VIEWPORT_RULER_PROVIDER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CdkScrollable", function() { return _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["CdkScrollable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScrollDispatcher", function() { return _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ScrollDispatcher"]; });

/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */













/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * Scroll strategy that doesn't do anything.
 */
var  /**
 * Scroll strategy that doesn't do anything.
 */
NoopScrollStrategy = /** @class */ (function () {
    function NoopScrollStrategy() {
    }
    /** Does nothing, as this scroll strategy is a no-op. */
    /**
     * Does nothing, as this scroll strategy is a no-op.
     * @return {?}
     */
    NoopScrollStrategy.prototype.enable = /**
     * Does nothing, as this scroll strategy is a no-op.
     * @return {?}
     */
    function () { };
    /** Does nothing, as this scroll strategy is a no-op. */
    /**
     * Does nothing, as this scroll strategy is a no-op.
     * @return {?}
     */
    NoopScrollStrategy.prototype.disable = /**
     * Does nothing, as this scroll strategy is a no-op.
     * @return {?}
     */
    function () { };
    /** Does nothing, as this scroll strategy is a no-op. */
    /**
     * Does nothing, as this scroll strategy is a no-op.
     * @return {?}
     */
    NoopScrollStrategy.prototype.attach = /**
     * Does nothing, as this scroll strategy is a no-op.
     * @return {?}
     */
    function () { };
    return NoopScrollStrategy;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Initial configuration used when creating an overlay.
 */
var  /**
 * Initial configuration used when creating an overlay.
 */
OverlayConfig = /** @class */ (function () {
    function OverlayConfig(config) {
        var _this = this;
        /**
         * Strategy to be used when handling scroll events while the overlay is open.
         */
        this.scrollStrategy = new NoopScrollStrategy();
        /**
         * Custom class to add to the overlay pane.
         */
        this.panelClass = '';
        /**
         * Whether the overlay has a backdrop.
         */
        this.hasBackdrop = false;
        /**
         * Custom class to add to the backdrop
         */
        this.backdropClass = 'cdk-overlay-dark-backdrop';
        if (config) {
            Object.keys(config)
                .filter(function (key) { return typeof config[key] !== 'undefined'; })
                .forEach(function (key) { return _this[key] = config[key]; });
        }
    }
    return OverlayConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * The points of the origin element and the overlay element to connect.
 */
var  /**
 * The points of the origin element and the overlay element to connect.
 */
ConnectionPositionPair = /** @class */ (function () {
    function ConnectionPositionPair(origin, overlay, offsetX, offsetY) {
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        this.originX = origin.originX;
        this.originY = origin.originY;
        this.overlayX = overlay.overlayX;
        this.overlayY = overlay.overlayY;
    }
    return ConnectionPositionPair;
}());
/**
 * Set of properties regarding the position of the origin and overlay relative to the viewport
 * with respect to the containing Scrollable elements.
 *
 * The overlay and origin are clipped if any part of their bounding client rectangle exceeds the
 * bounds of any one of the strategy's Scrollable's bounding client rectangle.
 *
 * The overlay and origin are outside view if there is no overlap between their bounding client
 * rectangle and any one of the strategy's Scrollable's bounding client rectangle.
 *
 *       -----------                    -----------
 *       | outside |                    | clipped |
 *       |  view   |              --------------------------
 *       |         |              |     |         |        |
 *       ----------               |     -----------        |
 *  --------------------------    |                        |
 *  |                        |    |      Scrollable        |
 *  |                        |    |                        |
 *  |                        |     --------------------------
 *  |      Scrollable        |
 *  |                        |
 *  --------------------------
 *
 *  \@docs-private
 */
var  /**
 * Set of properties regarding the position of the origin and overlay relative to the viewport
 * with respect to the containing Scrollable elements.
 *
 * The overlay and origin are clipped if any part of their bounding client rectangle exceeds the
 * bounds of any one of the strategy's Scrollable's bounding client rectangle.
 *
 * The overlay and origin are outside view if there is no overlap between their bounding client
 * rectangle and any one of the strategy's Scrollable's bounding client rectangle.
 *
 *       -----------                    -----------
 *       | outside |                    | clipped |
 *       |  view   |              --------------------------
 *       |         |              |     |         |        |
 *       ----------               |     -----------        |
 *  --------------------------    |                        |
 *  |                        |    |      Scrollable        |
 *  |                        |    |                        |
 *  |                        |     --------------------------
 *  |      Scrollable        |
 *  |                        |
 *  --------------------------
 *
 *  \@docs-private
 */
ScrollingVisibility = /** @class */ (function () {
    function ScrollingVisibility() {
    }
    return ScrollingVisibility;
}());
/**
 * The change event emitted by the strategy when a fallback position is used.
 */
var ConnectedOverlayPositionChange = /** @class */ (function () {
    function ConnectedOverlayPositionChange(connectionPair, /** @docs-private */
    scrollableViewProperties) {
        this.connectionPair = connectionPair;
        this.scrollableViewProperties = scrollableViewProperties;
    }
    /** @nocollapse */
    ConnectedOverlayPositionChange.ctorParameters = function () { return [
        { type: ConnectionPositionPair, },
        { type: ScrollingVisibility, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] },] },
    ]; };
    return ConnectedOverlayPositionChange;
}());
/**
 * Validates whether a vertical position property matches the expected values.
 * \@docs-private
 * @param {?} property Name of the property being validated.
 * @param {?} value Value of the property being validated.
 * @return {?}
 */
function validateVerticalPosition(property, value) {
    if (value !== 'top' && value !== 'bottom' && value !== 'center') {
        throw Error("ConnectedPosition: Invalid " + property + " \"" + value + "\". " +
            "Expected \"top\", \"bottom\" or \"center\".");
    }
}
/**
 * Validates whether a horizontal position property matches the expected values.
 * \@docs-private
 * @param {?} property Name of the property being validated.
 * @param {?} value Value of the property being validated.
 * @return {?}
 */
function validateHorizontalPosition(property, value) {
    if (value !== 'start' && value !== 'end' && value !== 'center') {
        throw Error("ConnectedPosition: Invalid " + property + " \"" + value + "\". " +
            "Expected \"start\", \"end\" or \"center\".");
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Strategy that will prevent the user from scrolling while the overlay is visible.
 */
var  /**
 * Strategy that will prevent the user from scrolling while the overlay is visible.
 */
BlockScrollStrategy = /** @class */ (function () {
    function BlockScrollStrategy(_viewportRuler, document) {
        this._viewportRuler = _viewportRuler;
        this._previousHTMLStyles = { top: '', left: '' };
        this._isEnabled = false;
        this._document = document;
    }
    /** Attaches this scroll strategy to an overlay. */
    /**
     * Attaches this scroll strategy to an overlay.
     * @return {?}
     */
    BlockScrollStrategy.prototype.attach = /**
     * Attaches this scroll strategy to an overlay.
     * @return {?}
     */
    function () { };
    /** Blocks page-level scroll while the attached overlay is open. */
    /**
     * Blocks page-level scroll while the attached overlay is open.
     * @return {?}
     */
    BlockScrollStrategy.prototype.enable = /**
     * Blocks page-level scroll while the attached overlay is open.
     * @return {?}
     */
    function () {
        if (this._canBeEnabled()) {
            var /** @type {?} */ root = this._document.documentElement;
            this._previousScrollPosition = this._viewportRuler.getViewportScrollPosition();
            // Cache the previous inline styles in case the user had set them.
            this._previousHTMLStyles.left = root.style.left || '';
            this._previousHTMLStyles.top = root.style.top || '';
            // Note: we're using the `html` node, instead of the `body`, because the `body` may
            // have the user agent margin, whereas the `html` is guaranteed not to have one.
            root.style.left = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceCssPixelValue"])(-this._previousScrollPosition.left);
            root.style.top = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceCssPixelValue"])(-this._previousScrollPosition.top);
            root.classList.add('cdk-global-scrollblock');
            this._isEnabled = true;
        }
    };
    /** Unblocks page-level scroll while the attached overlay is open. */
    /**
     * Unblocks page-level scroll while the attached overlay is open.
     * @return {?}
     */
    BlockScrollStrategy.prototype.disable = /**
     * Unblocks page-level scroll while the attached overlay is open.
     * @return {?}
     */
    function () {
        if (this._isEnabled) {
            var /** @type {?} */ html = this._document.documentElement;
            var /** @type {?} */ body = this._document.body;
            var /** @type {?} */ previousHtmlScrollBehavior = html.style['scrollBehavior'] || '';
            var /** @type {?} */ previousBodyScrollBehavior = body.style['scrollBehavior'] || '';
            this._isEnabled = false;
            html.style.left = this._previousHTMLStyles.left;
            html.style.top = this._previousHTMLStyles.top;
            html.classList.remove('cdk-global-scrollblock');
            // Disable user-defined smooth scrolling temporarily while we restore the scroll position.
            // See https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior
            html.style['scrollBehavior'] = body.style['scrollBehavior'] = 'auto';
            window.scroll(this._previousScrollPosition.left, this._previousScrollPosition.top);
            html.style['scrollBehavior'] = previousHtmlScrollBehavior;
            body.style['scrollBehavior'] = previousBodyScrollBehavior;
        }
    };
    /**
     * @return {?}
     */
    BlockScrollStrategy.prototype._canBeEnabled = /**
     * @return {?}
     */
    function () {
        // Since the scroll strategies can't be singletons, we have to use a global CSS class
        // (`cdk-global-scrollblock`) to make sure that we don't try to disable global
        // scrolling multiple times.
        var /** @type {?} */ html = this._document.documentElement;
        if (html.classList.contains('cdk-global-scrollblock') || this._isEnabled) {
            return false;
        }
        var /** @type {?} */ body = this._document.body;
        var /** @type {?} */ viewport = this._viewportRuler.getViewportSize();
        return body.scrollHeight > viewport.height || body.scrollWidth > viewport.width;
    };
    return BlockScrollStrategy;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Returns an error to be thrown when attempting to attach an already-attached scroll strategy.
 * @return {?}
 */
function getMatScrollStrategyAlreadyAttachedError() {
    return Error("Scroll strategy has already been attached.");
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Strategy that will close the overlay as soon as the user starts scrolling.
 */
var  /**
 * Strategy that will close the overlay as soon as the user starts scrolling.
 */
CloseScrollStrategy = /** @class */ (function () {
    function CloseScrollStrategy(_scrollDispatcher, _ngZone, _viewportRuler, _config) {
        var _this = this;
        this._scrollDispatcher = _scrollDispatcher;
        this._ngZone = _ngZone;
        this._viewportRuler = _viewportRuler;
        this._config = _config;
        this._scrollSubscription = null;
        /**
         * Detaches the overlay ref and disables the scroll strategy.
         */
        this._detach = function () {
            _this.disable();
            if (_this._overlayRef.hasAttached()) {
                _this._ngZone.run(function () { return _this._overlayRef.detach(); });
            }
        };
    }
    /** Attaches this scroll strategy to an overlay. */
    /**
     * Attaches this scroll strategy to an overlay.
     * @param {?} overlayRef
     * @return {?}
     */
    CloseScrollStrategy.prototype.attach = /**
     * Attaches this scroll strategy to an overlay.
     * @param {?} overlayRef
     * @return {?}
     */
    function (overlayRef) {
        if (this._overlayRef) {
            throw getMatScrollStrategyAlreadyAttachedError();
        }
        this._overlayRef = overlayRef;
    };
    /** Enables the closing of the attached overlay on scroll. */
    /**
     * Enables the closing of the attached overlay on scroll.
     * @return {?}
     */
    CloseScrollStrategy.prototype.enable = /**
     * Enables the closing of the attached overlay on scroll.
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._scrollSubscription) {
            return;
        }
        var /** @type {?} */ stream = this._scrollDispatcher.scrolled(0);
        if (this._config && this._config.threshold && this._config.threshold > 1) {
            this._initialScrollPosition = this._viewportRuler.getViewportScrollPosition().top;
            this._scrollSubscription = stream.subscribe(function () {
                var /** @type {?} */ scrollPosition = _this._viewportRuler.getViewportScrollPosition().top;
                if (Math.abs(scrollPosition - _this._initialScrollPosition) > /** @type {?} */ ((/** @type {?} */ ((_this._config)).threshold))) {
                    _this._detach();
                }
                else {
                    _this._overlayRef.updatePosition();
                }
            });
        }
        else {
            this._scrollSubscription = stream.subscribe(this._detach);
        }
    };
    /** Disables the closing the attached overlay on scroll. */
    /**
     * Disables the closing the attached overlay on scroll.
     * @return {?}
     */
    CloseScrollStrategy.prototype.disable = /**
     * Disables the closing the attached overlay on scroll.
     * @return {?}
     */
    function () {
        if (this._scrollSubscription) {
            this._scrollSubscription.unsubscribe();
            this._scrollSubscription = null;
        }
    };
    return CloseScrollStrategy;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

// TODO(jelbourn): move this to live with the rest of the scrolling code
// TODO(jelbourn): someday replace this with IntersectionObservers
/**
 * Gets whether an element is scrolled outside of view by any of its parent scrolling containers.
 * \@docs-private
 * @param {?} element Dimensions of the element (from getBoundingClientRect)
 * @param {?} scrollContainers Dimensions of element's scrolling containers (from getBoundingClientRect)
 * @return {?} Whether the element is scrolled out of view
 */
function isElementScrolledOutsideView(element, scrollContainers) {
    return scrollContainers.some(function (containerBounds) {
        var /** @type {?} */ outsideAbove = element.bottom < containerBounds.top;
        var /** @type {?} */ outsideBelow = element.top > containerBounds.bottom;
        var /** @type {?} */ outsideLeft = element.right < containerBounds.left;
        var /** @type {?} */ outsideRight = element.left > containerBounds.right;
        return outsideAbove || outsideBelow || outsideLeft || outsideRight;
    });
}
/**
 * Gets whether an element is clipped by any of its scrolling containers.
 * \@docs-private
 * @param {?} element Dimensions of the element (from getBoundingClientRect)
 * @param {?} scrollContainers Dimensions of element's scrolling containers (from getBoundingClientRect)
 * @return {?} Whether the element is clipped
 */
function isElementClippedByScrolling(element, scrollContainers) {
    return scrollContainers.some(function (scrollContainerRect) {
        var /** @type {?} */ clippedAbove = element.top < scrollContainerRect.top;
        var /** @type {?} */ clippedBelow = element.bottom > scrollContainerRect.bottom;
        var /** @type {?} */ clippedLeft = element.left < scrollContainerRect.left;
        var /** @type {?} */ clippedRight = element.right > scrollContainerRect.right;
        return clippedAbove || clippedBelow || clippedLeft || clippedRight;
    });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Strategy that will update the element position as the user is scrolling.
 */
var  /**
 * Strategy that will update the element position as the user is scrolling.
 */
RepositionScrollStrategy = /** @class */ (function () {
    function RepositionScrollStrategy(_scrollDispatcher, _viewportRuler, _ngZone, _config) {
        this._scrollDispatcher = _scrollDispatcher;
        this._viewportRuler = _viewportRuler;
        this._ngZone = _ngZone;
        this._config = _config;
        this._scrollSubscription = null;
    }
    /** Attaches this scroll strategy to an overlay. */
    /**
     * Attaches this scroll strategy to an overlay.
     * @param {?} overlayRef
     * @return {?}
     */
    RepositionScrollStrategy.prototype.attach = /**
     * Attaches this scroll strategy to an overlay.
     * @param {?} overlayRef
     * @return {?}
     */
    function (overlayRef) {
        if (this._overlayRef) {
            throw getMatScrollStrategyAlreadyAttachedError();
        }
        this._overlayRef = overlayRef;
    };
    /** Enables repositioning of the attached overlay on scroll. */
    /**
     * Enables repositioning of the attached overlay on scroll.
     * @return {?}
     */
    RepositionScrollStrategy.prototype.enable = /**
     * Enables repositioning of the attached overlay on scroll.
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this._scrollSubscription) {
            var /** @type {?} */ throttle = this._config ? this._config.scrollThrottle : 0;
            this._scrollSubscription = this._scrollDispatcher.scrolled(throttle).subscribe(function () {
                _this._overlayRef.updatePosition();
                // TODO(crisbeto): make `close` on by default once all components can handle it.
                if (_this._config && _this._config.autoClose) {
                    var /** @type {?} */ overlayRect = _this._overlayRef.overlayElement.getBoundingClientRect();
                    var _a = _this._viewportRuler.getViewportSize(), width = _a.width, height = _a.height;
                    // TODO(crisbeto): include all ancestor scroll containers here once
                    // we have a way of exposing the trigger element to the scroll strategy.
                    var /** @type {?} */ parentRects = [{ width: width, height: height, bottom: height, right: width, top: 0, left: 0 }];
                    if (isElementScrolledOutsideView(overlayRect, parentRects)) {
                        _this.disable();
                        _this._ngZone.run(function () { return _this._overlayRef.detach(); });
                    }
                }
            });
        }
    };
    /** Disables repositioning of the attached overlay on scroll. */
    /**
     * Disables repositioning of the attached overlay on scroll.
     * @return {?}
     */
    RepositionScrollStrategy.prototype.disable = /**
     * Disables repositioning of the attached overlay on scroll.
     * @return {?}
     */
    function () {
        if (this._scrollSubscription) {
            this._scrollSubscription.unsubscribe();
            this._scrollSubscription = null;
        }
    };
    return RepositionScrollStrategy;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Options for how an overlay will handle scrolling.
 *
 * Users can provide a custom value for `ScrollStrategyOptions` to replace the default
 * behaviors. This class primarily acts as a factory for ScrollStrategy instances.
 */
var ScrollStrategyOptions = /** @class */ (function () {
    function ScrollStrategyOptions(_scrollDispatcher, _viewportRuler, _ngZone, document) {
        var _this = this;
        this._scrollDispatcher = _scrollDispatcher;
        this._viewportRuler = _viewportRuler;
        this._ngZone = _ngZone;
        /**
         * Do nothing on scroll.
         */
        this.noop = function () { return new NoopScrollStrategy(); };
        /**
         * Close the overlay as soon as the user scrolls.
         * @param config Configuration to be used inside the scroll strategy.
         */
        this.close = function (config) {
            return new CloseScrollStrategy(_this._scrollDispatcher, _this._ngZone, _this._viewportRuler, config);
        };
        /**
         * Block scrolling.
         */
        this.block = function () { return new BlockScrollStrategy(_this._viewportRuler, _this._document); };
        /**
         * Update the overlay's position on scroll.
         * @param config Configuration to be used inside the scroll strategy.
         * Allows debouncing the reposition calls.
         */
        this.reposition = function (config) {
            return new RepositionScrollStrategy(_this._scrollDispatcher, _this._viewportRuler, _this._ngZone, config);
        };
        this._document = document;
    }
    ScrollStrategyOptions.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    ScrollStrategyOptions.ctorParameters = function () { return [
        { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ScrollDispatcher"], },
        { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ViewportRuler"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"],] },] },
    ]; };
    /** @nocollapse */ ScrollStrategyOptions.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function ScrollStrategyOptions_Factory() { return new ScrollStrategyOptions(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ScrollDispatcher"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ViewportRuler"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"])); }, token: ScrollStrategyOptions, providedIn: "root" });
    return ScrollStrategyOptions;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Service for dispatching keyboard events that land on the body to appropriate overlay ref,
 * if any. It maintains a list of attached overlays to determine best suited overlay based
 * on event target and order of overlay opens.
 */
var OverlayKeyboardDispatcher = /** @class */ (function () {
    function OverlayKeyboardDispatcher(document) {
        var _this = this;
        /**
         * Currently attached overlays in the order they were attached.
         */
        this._attachedOverlays = [];
        /**
         * Keyboard event listener that will be attached to the body.
         */
        this._keydownListener = function (event) {
            if (_this._attachedOverlays.length) {
                // Dispatch the keydown event to the top overlay. We want to target the most recent overlay,
                // rather than trying to match where the event came from, because some components might open
                // an overlay, but keep focus on a trigger element (e.g. for select and autocomplete).
                // Dispatch the keydown event to the top overlay. We want to target the most recent overlay,
                // rather than trying to match where the event came from, because some components might open
                // an overlay, but keep focus on a trigger element (e.g. for select and autocomplete).
                _this._attachedOverlays[_this._attachedOverlays.length - 1]._keydownEvents.next(event);
            }
        };
        this._document = document;
    }
    /**
     * @return {?}
     */
    OverlayKeyboardDispatcher.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._detach();
    };
    /** Add a new overlay to the list of attached overlay refs. */
    /**
     * Add a new overlay to the list of attached overlay refs.
     * @param {?} overlayRef
     * @return {?}
     */
    OverlayKeyboardDispatcher.prototype.add = /**
     * Add a new overlay to the list of attached overlay refs.
     * @param {?} overlayRef
     * @return {?}
     */
    function (overlayRef) {
        // Lazily start dispatcher once first overlay is added
        if (!this._isAttached) {
            this._document.body.addEventListener('keydown', this._keydownListener, true);
            this._isAttached = true;
        }
        this._attachedOverlays.push(overlayRef);
    };
    /** Remove an overlay from the list of attached overlay refs. */
    /**
     * Remove an overlay from the list of attached overlay refs.
     * @param {?} overlayRef
     * @return {?}
     */
    OverlayKeyboardDispatcher.prototype.remove = /**
     * Remove an overlay from the list of attached overlay refs.
     * @param {?} overlayRef
     * @return {?}
     */
    function (overlayRef) {
        var /** @type {?} */ index = this._attachedOverlays.indexOf(overlayRef);
        if (index > -1) {
            this._attachedOverlays.splice(index, 1);
        }
        // Remove the global listener once there are no more overlays.
        if (this._attachedOverlays.length === 0) {
            this._detach();
        }
    };
    /**
     * Detaches the global keyboard event listener.
     * @return {?}
     */
    OverlayKeyboardDispatcher.prototype._detach = /**
     * Detaches the global keyboard event listener.
     * @return {?}
     */
    function () {
        if (this._isAttached) {
            this._document.body.removeEventListener('keydown', this._keydownListener, true);
            this._isAttached = false;
        }
    };
    OverlayKeyboardDispatcher.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    OverlayKeyboardDispatcher.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"],] },] },
    ]; };
    /** @nocollapse */ OverlayKeyboardDispatcher.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function OverlayKeyboardDispatcher_Factory() { return new OverlayKeyboardDispatcher(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"])); }, token: OverlayKeyboardDispatcher, providedIn: "root" });
    return OverlayKeyboardDispatcher;
}());
/**
 * \@docs-private \@deprecated \@deletion-target 7.0.0
 * @param {?} dispatcher
 * @param {?} _document
 * @return {?}
 */
function OVERLAY_KEYBOARD_DISPATCHER_PROVIDER_FACTORY(dispatcher, _document) {
    return dispatcher || new OverlayKeyboardDispatcher(_document);
}
/**
 * \@docs-private \@deprecated \@deletion-target 7.0.0
 */
var /** @type {?} */ OVERLAY_KEYBOARD_DISPATCHER_PROVIDER = {
    // If there is already an OverlayKeyboardDispatcher available, use that.
    // Otherwise, provide a new one.
    provide: OverlayKeyboardDispatcher,
    deps: [
        [new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"](), OverlayKeyboardDispatcher],
        /** @type {?} */ (
        // Coerce to `InjectionToken` so that the `deps` match the "shape"
        // of the type expected by Angular
        _angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"])
    ],
    useFactory: OVERLAY_KEYBOARD_DISPATCHER_PROVIDER_FACTORY
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Container inside which all overlays will render.
 */
var OverlayContainer = /** @class */ (function () {
    function OverlayContainer(_document) {
        this._document = _document;
    }
    /**
     * @return {?}
     */
    OverlayContainer.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this._containerElement && this._containerElement.parentNode) {
            this._containerElement.parentNode.removeChild(this._containerElement);
        }
    };
    /**
     * This method returns the overlay container element. It will lazily
     * create the element the first time  it is called to facilitate using
     * the container in non-browser environments.
     * @returns the container element
     */
    /**
     * This method returns the overlay container element. It will lazily
     * create the element the first time  it is called to facilitate using
     * the container in non-browser environments.
     * @return {?} the container element
     */
    OverlayContainer.prototype.getContainerElement = /**
     * This method returns the overlay container element. It will lazily
     * create the element the first time  it is called to facilitate using
     * the container in non-browser environments.
     * @return {?} the container element
     */
    function () {
        if (!this._containerElement) {
            this._createContainer();
        }
        return this._containerElement;
    };
    /**
     * Create the overlay container element, which is simply a div
     * with the 'cdk-overlay-container' class on the document body.
     */
    /**
     * Create the overlay container element, which is simply a div
     * with the 'cdk-overlay-container' class on the document body.
     * @return {?}
     */
    OverlayContainer.prototype._createContainer = /**
     * Create the overlay container element, which is simply a div
     * with the 'cdk-overlay-container' class on the document body.
     * @return {?}
     */
    function () {
        var /** @type {?} */ container = this._document.createElement('div');
        container.classList.add('cdk-overlay-container');
        this._document.body.appendChild(container);
        this._containerElement = container;
    };
    OverlayContainer.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    OverlayContainer.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"],] },] },
    ]; };
    /** @nocollapse */ OverlayContainer.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function OverlayContainer_Factory() { return new OverlayContainer(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"])); }, token: OverlayContainer, providedIn: "root" });
    return OverlayContainer;
}());
/**
 * \@docs-private \@deprecated \@deletion-target 7.0.0
 * @param {?} parentContainer
 * @param {?} _document
 * @return {?}
 */
function OVERLAY_CONTAINER_PROVIDER_FACTORY(parentContainer, _document) {
    return parentContainer || new OverlayContainer(_document);
}
/**
 * \@docs-private \@deprecated \@deletion-target 7.0.0
 */
var /** @type {?} */ OVERLAY_CONTAINER_PROVIDER = {
    // If there is already an OverlayContainer available, use that. Otherwise, provide a new one.
    provide: OverlayContainer,
    deps: [
        [new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"](), OverlayContainer],
        /** @type {?} */ (_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"] // We need to use the InjectionToken somewhere to keep TS happy
        ) // We need to use the InjectionToken somewhere to keep TS happy
    ],
    useFactory: OVERLAY_CONTAINER_PROVIDER_FACTORY
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Reference to an overlay that has been created with the Overlay service.
 * Used to manipulate or dispose of said overlay.
 */
var  /**
 * Reference to an overlay that has been created with the Overlay service.
 * Used to manipulate or dispose of said overlay.
 */
OverlayRef = /** @class */ (function () {
    function OverlayRef(_portalOutlet, _host, _pane, _config, _ngZone, _keyboardDispatcher, _document) {
        this._portalOutlet = _portalOutlet;
        this._host = _host;
        this._pane = _pane;
        this._config = _config;
        this._ngZone = _ngZone;
        this._keyboardDispatcher = _keyboardDispatcher;
        this._document = _document;
        this._backdropElement = null;
        this._backdropClick = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this._attachments = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this._detachments = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Stream of keydown events dispatched to this overlay.
         */
        this._keydownEvents = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        if (_config.scrollStrategy) {
            _config.scrollStrategy.attach(this);
        }
    }
    Object.defineProperty(OverlayRef.prototype, "overlayElement", {
        /** The overlay's HTML element */
        get: /**
         * The overlay's HTML element
         * @return {?}
         */
        function () {
            return this._pane;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OverlayRef.prototype, "backdropElement", {
        /** The overlay's backdrop HTML element. */
        get: /**
         * The overlay's backdrop HTML element.
         * @return {?}
         */
        function () {
            return this._backdropElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OverlayRef.prototype, "hostElement", {
        /**
         * Wrapper around the panel element. Can be used for advanced
         * positioning where a wrapper with specific styling is
         * required around the overlay pane.
         */
        get: /**
         * Wrapper around the panel element. Can be used for advanced
         * positioning where a wrapper with specific styling is
         * required around the overlay pane.
         * @return {?}
         */
        function () {
            return this._host;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Attaches content, given via a Portal, to the overlay.
     * If the overlay is configured to have a backdrop, it will be created.
     *
     * @param portal Portal instance to which to attach the overlay.
     * @returns The portal attachment result.
     */
    /**
     * Attaches content, given via a Portal, to the overlay.
     * If the overlay is configured to have a backdrop, it will be created.
     *
     * @param {?} portal Portal instance to which to attach the overlay.
     * @return {?} The portal attachment result.
     */
    OverlayRef.prototype.attach = /**
     * Attaches content, given via a Portal, to the overlay.
     * If the overlay is configured to have a backdrop, it will be created.
     *
     * @param {?} portal Portal instance to which to attach the overlay.
     * @return {?} The portal attachment result.
     */
    function (portal) {
        var _this = this;
        var /** @type {?} */ attachResult = this._portalOutlet.attach(portal);
        if (this._config.positionStrategy) {
            this._config.positionStrategy.attach(this);
        }
        // Update the pane element with the given configuration.
        this._updateStackingOrder();
        this._updateElementSize();
        this._updateElementDirection();
        if (this._config.scrollStrategy) {
            this._config.scrollStrategy.enable();
        }
        // Update the position once the zone is stable so that the overlay will be fully rendered
        // before attempting to position it, as the position may depend on the size of the rendered
        // content.
        this._ngZone.onStable
            .asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1))
            .subscribe(function () {
            // The overlay could've been detached before the zone has stabilized.
            if (_this.hasAttached()) {
                _this.updatePosition();
            }
        });
        // Enable pointer events for the overlay pane element.
        this._togglePointerEvents(true);
        if (this._config.hasBackdrop) {
            this._attachBackdrop();
        }
        if (this._config.panelClass) {
            this._toggleClasses(this._pane, this._config.panelClass, true);
        }
        // Only emit the `attachments` event once all other setup is done.
        this._attachments.next();
        // Track this overlay by the keyboard dispatcher
        this._keyboardDispatcher.add(this);
        return attachResult;
    };
    /**
     * Detaches an overlay from a portal.
     * @returns The portal detachment result.
     */
    /**
     * Detaches an overlay from a portal.
     * @return {?} The portal detachment result.
     */
    OverlayRef.prototype.detach = /**
     * Detaches an overlay from a portal.
     * @return {?} The portal detachment result.
     */
    function () {
        if (!this.hasAttached()) {
            return;
        }
        this.detachBackdrop();
        // When the overlay is detached, the pane element should disable pointer events.
        // This is necessary because otherwise the pane element will cover the page and disable
        // pointer events therefore. Depends on the position strategy and the applied pane boundaries.
        this._togglePointerEvents(false);
        if (this._config.positionStrategy && this._config.positionStrategy.detach) {
            this._config.positionStrategy.detach();
        }
        if (this._config.scrollStrategy) {
            this._config.scrollStrategy.disable();
        }
        var /** @type {?} */ detachmentResult = this._portalOutlet.detach();
        // Only emit after everything is detached.
        this._detachments.next();
        // Remove this overlay from keyboard dispatcher tracking
        this._keyboardDispatcher.remove(this);
        return detachmentResult;
    };
    /** Cleans up the overlay from the DOM. */
    /**
     * Cleans up the overlay from the DOM.
     * @return {?}
     */
    OverlayRef.prototype.dispose = /**
     * Cleans up the overlay from the DOM.
     * @return {?}
     */
    function () {
        var /** @type {?} */ isAttached = this.hasAttached();
        if (this._config.positionStrategy) {
            this._config.positionStrategy.dispose();
        }
        if (this._config.scrollStrategy) {
            this._config.scrollStrategy.disable();
        }
        this.detachBackdrop();
        this._keyboardDispatcher.remove(this);
        this._portalOutlet.dispose();
        this._attachments.complete();
        this._backdropClick.complete();
        this._keydownEvents.complete();
        if (this._host && this._host.parentNode) {
            this._host.parentNode.removeChild(this._host);
            this._host = /** @type {?} */ ((null));
        }
        this._pane = /** @type {?} */ ((null));
        if (isAttached) {
            this._detachments.next();
        }
        this._detachments.complete();
    };
    /** Whether the overlay has attached content. */
    /**
     * Whether the overlay has attached content.
     * @return {?}
     */
    OverlayRef.prototype.hasAttached = /**
     * Whether the overlay has attached content.
     * @return {?}
     */
    function () {
        return this._portalOutlet.hasAttached();
    };
    /** Gets an observable that emits when the backdrop has been clicked. */
    /**
     * Gets an observable that emits when the backdrop has been clicked.
     * @return {?}
     */
    OverlayRef.prototype.backdropClick = /**
     * Gets an observable that emits when the backdrop has been clicked.
     * @return {?}
     */
    function () {
        return this._backdropClick.asObservable();
    };
    /** Gets an observable that emits when the overlay has been attached. */
    /**
     * Gets an observable that emits when the overlay has been attached.
     * @return {?}
     */
    OverlayRef.prototype.attachments = /**
     * Gets an observable that emits when the overlay has been attached.
     * @return {?}
     */
    function () {
        return this._attachments.asObservable();
    };
    /** Gets an observable that emits when the overlay has been detached. */
    /**
     * Gets an observable that emits when the overlay has been detached.
     * @return {?}
     */
    OverlayRef.prototype.detachments = /**
     * Gets an observable that emits when the overlay has been detached.
     * @return {?}
     */
    function () {
        return this._detachments.asObservable();
    };
    /** Gets an observable of keydown events targeted to this overlay. */
    /**
     * Gets an observable of keydown events targeted to this overlay.
     * @return {?}
     */
    OverlayRef.prototype.keydownEvents = /**
     * Gets an observable of keydown events targeted to this overlay.
     * @return {?}
     */
    function () {
        return this._keydownEvents.asObservable();
    };
    /** Gets the the current overlay configuration, which is immutable. */
    /**
     * Gets the the current overlay configuration, which is immutable.
     * @return {?}
     */
    OverlayRef.prototype.getConfig = /**
     * Gets the the current overlay configuration, which is immutable.
     * @return {?}
     */
    function () {
        return this._config;
    };
    /** Updates the position of the overlay based on the position strategy. */
    /**
     * Updates the position of the overlay based on the position strategy.
     * @return {?}
     */
    OverlayRef.prototype.updatePosition = /**
     * Updates the position of the overlay based on the position strategy.
     * @return {?}
     */
    function () {
        if (this._config.positionStrategy) {
            this._config.positionStrategy.apply();
        }
    };
    /** Update the size properties of the overlay. */
    /**
     * Update the size properties of the overlay.
     * @param {?} sizeConfig
     * @return {?}
     */
    OverlayRef.prototype.updateSize = /**
     * Update the size properties of the overlay.
     * @param {?} sizeConfig
     * @return {?}
     */
    function (sizeConfig) {
        this._config = Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__assign"])({}, this._config, sizeConfig);
        this._updateElementSize();
    };
    /** Sets the LTR/RTL direction for the overlay. */
    /**
     * Sets the LTR/RTL direction for the overlay.
     * @param {?} dir
     * @return {?}
     */
    OverlayRef.prototype.setDirection = /**
     * Sets the LTR/RTL direction for the overlay.
     * @param {?} dir
     * @return {?}
     */
    function (dir) {
        this._config = Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__assign"])({}, this._config, { direction: dir });
        this._updateElementDirection();
    };
    /**
     * Updates the text direction of the overlay panel.
     * @return {?}
     */
    OverlayRef.prototype._updateElementDirection = /**
     * Updates the text direction of the overlay panel.
     * @return {?}
     */
    function () {
        this._pane.setAttribute('dir', /** @type {?} */ ((this._config.direction)));
    };
    /**
     * Updates the size of the overlay element based on the overlay config.
     * @return {?}
     */
    OverlayRef.prototype._updateElementSize = /**
     * Updates the size of the overlay element based on the overlay config.
     * @return {?}
     */
    function () {
        if (this._config.width || this._config.width === 0) {
            this._pane.style.width = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceCssPixelValue"])(this._config.width);
        }
        if (this._config.height || this._config.height === 0) {
            this._pane.style.height = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceCssPixelValue"])(this._config.height);
        }
        if (this._config.minWidth || this._config.minWidth === 0) {
            this._pane.style.minWidth = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceCssPixelValue"])(this._config.minWidth);
        }
        if (this._config.minHeight || this._config.minHeight === 0) {
            this._pane.style.minHeight = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceCssPixelValue"])(this._config.minHeight);
        }
        if (this._config.maxWidth || this._config.maxWidth === 0) {
            this._pane.style.maxWidth = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceCssPixelValue"])(this._config.maxWidth);
        }
        if (this._config.maxHeight || this._config.maxHeight === 0) {
            this._pane.style.maxHeight = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceCssPixelValue"])(this._config.maxHeight);
        }
    };
    /**
     * Toggles the pointer events for the overlay pane element.
     * @param {?} enablePointer
     * @return {?}
     */
    OverlayRef.prototype._togglePointerEvents = /**
     * Toggles the pointer events for the overlay pane element.
     * @param {?} enablePointer
     * @return {?}
     */
    function (enablePointer) {
        this._pane.style.pointerEvents = enablePointer ? 'auto' : 'none';
    };
    /**
     * Attaches a backdrop for this overlay.
     * @return {?}
     */
    OverlayRef.prototype._attachBackdrop = /**
     * Attaches a backdrop for this overlay.
     * @return {?}
     */
    function () {
        var _this = this;
        var /** @type {?} */ showingClass = 'cdk-overlay-backdrop-showing';
        this._backdropElement = this._document.createElement('div');
        this._backdropElement.classList.add('cdk-overlay-backdrop');
        if (this._config.backdropClass) {
            this._toggleClasses(this._backdropElement, this._config.backdropClass, true);
        } /** @type {?} */
        ((
        // Insert the backdrop before the pane in the DOM order,
        // in order to handle stacked overlays properly.
        this._host.parentElement)).insertBefore(this._backdropElement, this._host);
        // Forward backdrop clicks such that the consumer of the overlay can perform whatever
        // action desired when such a click occurs (usually closing the overlay).
        this._backdropElement.addEventListener('click', function (event) { return _this._backdropClick.next(event); });
        // Add class to fade-in the backdrop after one frame.
        if (typeof requestAnimationFrame !== 'undefined') {
            this._ngZone.runOutsideAngular(function () {
                requestAnimationFrame(function () {
                    if (_this._backdropElement) {
                        _this._backdropElement.classList.add(showingClass);
                    }
                });
            });
        }
        else {
            this._backdropElement.classList.add(showingClass);
        }
    };
    /**
     * Updates the stacking order of the element, moving it to the top if necessary.
     * This is required in cases where one overlay was detached, while another one,
     * that should be behind it, was destroyed. The next time both of them are opened,
     * the stacking will be wrong, because the detached element's pane will still be
     * in its original DOM position.
     * @return {?}
     */
    OverlayRef.prototype._updateStackingOrder = /**
     * Updates the stacking order of the element, moving it to the top if necessary.
     * This is required in cases where one overlay was detached, while another one,
     * that should be behind it, was destroyed. The next time both of them are opened,
     * the stacking will be wrong, because the detached element's pane will still be
     * in its original DOM position.
     * @return {?}
     */
    function () {
        if (this._host.nextSibling) {
            /** @type {?} */ ((this._host.parentNode)).appendChild(this._host);
        }
    };
    /** Detaches the backdrop (if any) associated with the overlay. */
    /**
     * Detaches the backdrop (if any) associated with the overlay.
     * @return {?}
     */
    OverlayRef.prototype.detachBackdrop = /**
     * Detaches the backdrop (if any) associated with the overlay.
     * @return {?}
     */
    function () {
        var _this = this;
        var /** @type {?} */ backdropToDetach = this._backdropElement;
        if (backdropToDetach) {
            var /** @type {?} */ finishDetach_1 = function () {
                // It may not be attached to anything in certain cases (e.g. unit tests).
                if (backdropToDetach && backdropToDetach.parentNode) {
                    backdropToDetach.parentNode.removeChild(backdropToDetach);
                }
                // It is possible that a new portal has been attached to this overlay since we started
                // removing the backdrop. If that is the case, only clear the backdrop reference if it
                // is still the same instance that we started to remove.
                if (_this._backdropElement == backdropToDetach) {
                    _this._backdropElement = null;
                }
            };
            backdropToDetach.classList.remove('cdk-overlay-backdrop-showing');
            if (this._config.backdropClass) {
                this._toggleClasses(backdropToDetach, this._config.backdropClass, false);
            }
            backdropToDetach.addEventListener('transitionend', finishDetach_1);
            // If the backdrop doesn't have a transition, the `transitionend` event won't fire.
            // In this case we make it unclickable and we try to remove it after a delay.
            backdropToDetach.style.pointerEvents = 'none';
            // Run this outside the Angular zone because there's nothing that Angular cares about.
            // If it were to run inside the Angular zone, every test that used Overlay would have to be
            // either async or fakeAsync.
            this._ngZone.runOutsideAngular(function () { return setTimeout(finishDetach_1, 500); });
        }
    };
    /**
     * Toggles a single CSS class or an array of classes on an element.
     * @param {?} element
     * @param {?} cssClasses
     * @param {?} isAdd
     * @return {?}
     */
    OverlayRef.prototype._toggleClasses = /**
     * Toggles a single CSS class or an array of classes on an element.
     * @param {?} element
     * @param {?} cssClasses
     * @param {?} isAdd
     * @return {?}
     */
    function (element, cssClasses, isAdd) {
        var /** @type {?} */ classList = element.classList;
        Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceArray"])(cssClasses).forEach(function (cssClass) {
            // We can't do a spread here, because IE doesn't support setting multiple classes.
            isAdd ? classList.add(cssClass) : classList.remove(cssClass);
        });
    };
    return OverlayRef;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * A strategy for positioning overlays. Using this strategy, an overlay is given an
 * implicit position relative some origin element. The relative position is defined in terms of
 * a point on the origin element that is connected to a point on the overlay element. For example,
 * a basic dropdown is connecting the bottom-left corner of the origin to the top-left corner
 * of the overlay.
 */
var  /**
 * A strategy for positioning overlays. Using this strategy, an overlay is given an
 * implicit position relative some origin element. The relative position is defined in terms of
 * a point on the origin element that is connected to a point on the overlay element. For example,
 * a basic dropdown is connecting the bottom-left corner of the origin to the top-left corner
 * of the overlay.
 */
FlexibleConnectedPositionStrategy = /** @class */ (function () {
    function FlexibleConnectedPositionStrategy(connectedTo, _viewportRuler, _document, _platform) {
        this._viewportRuler = _viewportRuler;
        this._document = _document;
        this._platform = _platform;
        /**
         * Whether we're performing the very first positioning of the overlay.
         */
        this._isInitialRender = true;
        /**
         * Last size used for the bounding box. Used to avoid resizing the overlay after open.
         */
        this._lastBoundingBoxSize = { width: 0, height: 0 };
        /**
         * Whether the overlay was pushed in a previous positioning.
         */
        this._isPushed = false;
        /**
         * Whether the overlay can be pushed on-screen on the initial open.
         */
        this._canPush = true;
        /**
         * Whether the overlay can grow via flexible width/height after the initial open.
         */
        this._growAfterOpen = false;
        /**
         * Whether the overlay's width and height can be constrained to fit within the viewport.
         */
        this._hasFlexibleDimensions = true;
        /**
         * Whether the overlay position is locked.
         */
        this._positionLocked = false;
        /**
         * Amount of space that must be maintained between the overlay and the edge of the viewport.
         */
        this._viewportMargin = 0;
        /**
         * The Scrollable containers used to check scrollable view properties on position change.
         */
        this.scrollables = [];
        /**
         * Ordered list of preferred positions, from most to least desirable.
         */
        this._preferredPositions = [];
        /**
         * Subject that emits whenever the position changes.
         */
        this._positionChanges = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Subscription to viewport size changes.
         */
        this._resizeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"].EMPTY;
        /**
         * Default offset for the overlay along the x axis.
         */
        this._offsetX = 0;
        /**
         * Default offset for the overlay along the y axis.
         */
        this._offsetY = 0;
        /**
         * Observable sequence of position changes.
         */
        this.positionChanges = this._positionChanges.asObservable();
        this.setOrigin(connectedTo);
    }
    Object.defineProperty(FlexibleConnectedPositionStrategy.prototype, "positions", {
        /** Ordered list of preferred positions, from most to least desirable. */
        get: /**
         * Ordered list of preferred positions, from most to least desirable.
         * @return {?}
         */
        function () {
            return this._preferredPositions;
        },
        enumerable: true,
        configurable: true
    });
    /** Attaches this position strategy to an overlay. */
    /**
     * Attaches this position strategy to an overlay.
     * @param {?} overlayRef
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype.attach = /**
     * Attaches this position strategy to an overlay.
     * @param {?} overlayRef
     * @return {?}
     */
    function (overlayRef) {
        var _this = this;
        if (this._overlayRef && overlayRef !== this._overlayRef) {
            throw Error('This position strategy is already attached to an overlay');
        }
        this._validatePositions();
        overlayRef.hostElement.classList.add('cdk-overlay-connected-position-bounding-box');
        this._overlayRef = overlayRef;
        this._boundingBox = overlayRef.hostElement;
        this._pane = overlayRef.overlayElement;
        this._resizeSubscription.unsubscribe();
        this._resizeSubscription = this._viewportRuler.change().subscribe(function () { return _this.apply(); });
    };
    /**
     * Updates the position of the overlay element, using whichever preferred position relative
     * to the origin best fits on-screen.
     *
     * The selection of a position goes as follows:
     *  - If any positions fit completely within the viewport as-is,
     *      choose the first position that does so.
     *  - If flexible dimensions are enabled and at least one satifies the given minimum width/height,
     *      choose the position with the greatest available size modified by the positions' weight.
     *  - If pushing is enabled, take the position that went off-screen the least and push it
     *      on-screen.
     *  - If none of the previous criteria were met, use the position that goes off-screen the least.
     * @docs-private
     */
    /**
     * Updates the position of the overlay element, using whichever preferred position relative
     * to the origin best fits on-screen.
     *
     * The selection of a position goes as follows:
     *  - If any positions fit completely within the viewport as-is,
     *      choose the first position that does so.
     *  - If flexible dimensions are enabled and at least one satifies the given minimum width/height,
     *      choose the position with the greatest available size modified by the positions' weight.
     *  - If pushing is enabled, take the position that went off-screen the least and push it
     *      on-screen.
     *  - If none of the previous criteria were met, use the position that goes off-screen the least.
     * \@docs-private
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype.apply = /**
     * Updates the position of the overlay element, using whichever preferred position relative
     * to the origin best fits on-screen.
     *
     * The selection of a position goes as follows:
     *  - If any positions fit completely within the viewport as-is,
     *      choose the first position that does so.
     *  - If flexible dimensions are enabled and at least one satifies the given minimum width/height,
     *      choose the position with the greatest available size modified by the positions' weight.
     *  - If pushing is enabled, take the position that went off-screen the least and push it
     *      on-screen.
     *  - If none of the previous criteria were met, use the position that goes off-screen the least.
     * \@docs-private
     * @return {?}
     */
    function () {
        // We shouldn't do anything if the strategy was disposed or we're on the server.
        if (this._isDisposed || (this._platform && !this._platform.isBrowser)) {
            return;
        }
        // If the position has been applied already (e.g. when the overlay was opened) and the
        // consumer opted into locking in the position, re-use the old position, in order to
        // prevent the overlay from jumping around.
        if (!this._isInitialRender && this._positionLocked && this._lastPosition) {
            this.reapplyLastPosition();
            return;
        }
        this._resetOverlayElementStyles();
        this._resetBoundingBoxStyles();
        // We need the bounding rects for the origin and the overlay to determine how to position
        // the overlay relative to the origin.
        // We use the viewport rect to determine whether a position would go off-screen.
        this._viewportRect = this._getNarrowedViewportRect();
        this._originRect = this._origin.getBoundingClientRect();
        this._overlayRect = this._pane.getBoundingClientRect();
        var /** @type {?} */ originRect = this._originRect;
        var /** @type {?} */ overlayRect = this._overlayRect;
        var /** @type {?} */ viewportRect = this._viewportRect;
        // Positions where the overlay will fit with flexible dimensions.
        var /** @type {?} */ flexibleFits = [];
        // Fallback if none of the preferred positions fit within the viewport.
        var /** @type {?} */ fallback;
        // Go through each of the preferred positions looking for a good fit.
        // If a good fit is found, it will be applied immediately.
        for (var _i = 0, _a = this._preferredPositions; _i < _a.length; _i++) {
            var pos = _a[_i];
            // Get the exact (x, y) coordinate for the point-of-origin on the origin element.
            var /** @type {?} */ originPoint = this._getOriginPoint(originRect, pos);
            // From that point-of-origin, get the exact (x, y) coordinate for the top-left corner of the
            // overlay in this position. We use the top-left corner for calculations and later translate
            // this into an appropriate (top, left, bottom, right) style.
            var /** @type {?} */ overlayPoint = this._getOverlayPoint(originPoint, overlayRect, pos);
            // Calculate how well the overlay would fit into the viewport with this point.
            var /** @type {?} */ overlayFit = this._getOverlayFit(overlayPoint, overlayRect, viewportRect, pos);
            // If the overlay, without any further work, fits into the viewport, use this position.
            if (overlayFit.isCompletelyWithinViewport) {
                this._isPushed = false;
                this._applyPosition(pos, originPoint);
                return;
            }
            // If the overlay has flexible dimensions, we can use this position
            // so long as there's enough space for the minimum dimensions.
            if (this._canFitWithFlexibleDimensions(overlayFit, overlayPoint, viewportRect)) {
                // Save positions where the overlay will fit with flexible dimensions. We will use these
                // if none of the positions fit *without* flexible dimensions.
                flexibleFits.push({
                    position: pos,
                    origin: originPoint,
                    overlayRect: overlayRect,
                    boundingBoxRect: this._calculateBoundingBoxRect(originPoint, pos)
                });
                continue;
            }
            // If the current preferred position does not fit on the screen, remember the position
            // if it has more visible area on-screen than we've seen and move onto the next preferred
            // position.
            if (!fallback || fallback.overlayFit.visibleArea < overlayFit.visibleArea) {
                fallback = { overlayFit: overlayFit, overlayPoint: overlayPoint, originPoint: originPoint, position: pos, overlayRect: overlayRect };
            }
        }
        // If there are any positions where the overlay would fit with flexible dimensions, choose the
        // one that has the greatest area available modified by the position's weight
        if (flexibleFits.length) {
            var /** @type {?} */ bestFit = null;
            var /** @type {?} */ bestScore = -1;
            for (var _b = 0, flexibleFits_1 = flexibleFits; _b < flexibleFits_1.length; _b++) {
                var fit_1 = flexibleFits_1[_b];
                var /** @type {?} */ score = fit_1.boundingBoxRect.width * fit_1.boundingBoxRect.height * (fit_1.position.weight || 1);
                if (score > bestScore) {
                    bestScore = score;
                    bestFit = fit_1;
                }
            }
            this._isPushed = false;
            this._applyPosition(/** @type {?} */ ((bestFit)).position, /** @type {?} */ ((bestFit)).origin);
            return;
        }
        // When none of the preferred positions fit within the viewport, take the position
        // that went off-screen the least and attempt to push it on-screen.
        if (this._canPush) {
            // TODO(jelbourn): after pushing, the opening "direction" of the overlay might not make sense.
            this._isPushed = true;
            this._applyPosition(/** @type {?} */ ((fallback)).position, /** @type {?} */ ((fallback)).originPoint);
            return;
        }
        // All options for getting the overlay within the viewport have been exhausted, so go with the
        // position that went off-screen the least.
        this._applyPosition(/** @type {?} */ ((fallback)).position, /** @type {?} */ ((fallback)).originPoint);
    };
    /**
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype.detach = /**
     * @return {?}
     */
    function () {
        this._resizeSubscription.unsubscribe();
    };
    /** Cleanup after the element gets destroyed. */
    /**
     * Cleanup after the element gets destroyed.
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype.dispose = /**
     * Cleanup after the element gets destroyed.
     * @return {?}
     */
    function () {
        if (!this._isDisposed) {
            this.detach();
            this._boundingBox = null;
            this._positionChanges.complete();
            this._isDisposed = true;
        }
    };
    /**
     * This re-aligns the overlay element with the trigger in its last calculated position,
     * even if a position higher in the "preferred positions" list would now fit. This
     * allows one to re-align the panel without changing the orientation of the panel.
     */
    /**
     * This re-aligns the overlay element with the trigger in its last calculated position,
     * even if a position higher in the "preferred positions" list would now fit. This
     * allows one to re-align the panel without changing the orientation of the panel.
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype.reapplyLastPosition = /**
     * This re-aligns the overlay element with the trigger in its last calculated position,
     * even if a position higher in the "preferred positions" list would now fit. This
     * allows one to re-align the panel without changing the orientation of the panel.
     * @return {?}
     */
    function () {
        if (!this._isDisposed && (!this._platform || this._platform.isBrowser)) {
            this._originRect = this._origin.getBoundingClientRect();
            this._overlayRect = this._pane.getBoundingClientRect();
            this._viewportRect = this._getNarrowedViewportRect();
            var /** @type {?} */ lastPosition = this._lastPosition || this._preferredPositions[0];
            var /** @type {?} */ originPoint = this._getOriginPoint(this._originRect, lastPosition);
            this._applyPosition(lastPosition, originPoint);
        }
    };
    /**
     * Sets the list of Scrollable containers that host the origin element so that
     * on reposition we can evaluate if it or the overlay has been clipped or outside view. Every
     * Scrollable must be an ancestor element of the strategy's origin element.
     */
    /**
     * Sets the list of Scrollable containers that host the origin element so that
     * on reposition we can evaluate if it or the overlay has been clipped or outside view. Every
     * Scrollable must be an ancestor element of the strategy's origin element.
     * @param {?} scrollables
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype.withScrollableContainers = /**
     * Sets the list of Scrollable containers that host the origin element so that
     * on reposition we can evaluate if it or the overlay has been clipped or outside view. Every
     * Scrollable must be an ancestor element of the strategy's origin element.
     * @param {?} scrollables
     * @return {?}
     */
    function (scrollables) {
        this.scrollables = scrollables;
    };
    /**
     * Adds new preferred positions.
     * @param positions List of positions options for this overlay.
     */
    /**
     * Adds new preferred positions.
     * @param {?} positions List of positions options for this overlay.
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype.withPositions = /**
     * Adds new preferred positions.
     * @param {?} positions List of positions options for this overlay.
     * @return {?}
     */
    function (positions) {
        this._preferredPositions = positions;
        // If the last calculated position object isn't part of the positions anymore, clear
        // it in order to avoid it being picked up if the consumer tries to re-apply.
        if (positions.indexOf(/** @type {?} */ ((this._lastPosition))) === -1) {
            this._lastPosition = null;
        }
        this._validatePositions();
        return this;
    };
    /**
     * Sets a minimum distance the overlay may be positioned to the edge of the viewport.
     * @param margin Required margin between the overlay and the viewport edge in pixels.
     */
    /**
     * Sets a minimum distance the overlay may be positioned to the edge of the viewport.
     * @param {?} margin Required margin between the overlay and the viewport edge in pixels.
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype.withViewportMargin = /**
     * Sets a minimum distance the overlay may be positioned to the edge of the viewport.
     * @param {?} margin Required margin between the overlay and the viewport edge in pixels.
     * @return {?}
     */
    function (margin) {
        this._viewportMargin = margin;
        return this;
    };
    /** Sets whether the overlay's width and height can be constrained to fit within the viewport. */
    /**
     * Sets whether the overlay's width and height can be constrained to fit within the viewport.
     * @param {?=} flexibleDimensions
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype.withFlexibleDimensions = /**
     * Sets whether the overlay's width and height can be constrained to fit within the viewport.
     * @param {?=} flexibleDimensions
     * @return {?}
     */
    function (flexibleDimensions) {
        if (flexibleDimensions === void 0) { flexibleDimensions = true; }
        this._hasFlexibleDimensions = flexibleDimensions;
        return this;
    };
    /** Sets whether the overlay can grow after the initial open via flexible width/height. */
    /**
     * Sets whether the overlay can grow after the initial open via flexible width/height.
     * @param {?=} growAfterOpen
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype.withGrowAfterOpen = /**
     * Sets whether the overlay can grow after the initial open via flexible width/height.
     * @param {?=} growAfterOpen
     * @return {?}
     */
    function (growAfterOpen) {
        if (growAfterOpen === void 0) { growAfterOpen = true; }
        this._growAfterOpen = growAfterOpen;
        return this;
    };
    /** Sets whether the overlay can be pushed on-screen if none of the provided positions fit. */
    /**
     * Sets whether the overlay can be pushed on-screen if none of the provided positions fit.
     * @param {?=} canPush
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype.withPush = /**
     * Sets whether the overlay can be pushed on-screen if none of the provided positions fit.
     * @param {?=} canPush
     * @return {?}
     */
    function (canPush) {
        if (canPush === void 0) { canPush = true; }
        this._canPush = canPush;
        return this;
    };
    /**
     * Sets whether the overlay's position should be locked in after it is positioned
     * initially. When an overlay is locked in, it won't attempt to reposition itself
     * when the position is re-applied (e.g. when the user scrolls away).
     * @param isLocked Whether the overlay should locked in.
     */
    /**
     * Sets whether the overlay's position should be locked in after it is positioned
     * initially. When an overlay is locked in, it won't attempt to reposition itself
     * when the position is re-applied (e.g. when the user scrolls away).
     * @param {?=} isLocked Whether the overlay should locked in.
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype.withLockedPosition = /**
     * Sets whether the overlay's position should be locked in after it is positioned
     * initially. When an overlay is locked in, it won't attempt to reposition itself
     * when the position is re-applied (e.g. when the user scrolls away).
     * @param {?=} isLocked Whether the overlay should locked in.
     * @return {?}
     */
    function (isLocked) {
        if (isLocked === void 0) { isLocked = true; }
        this._positionLocked = isLocked;
        return this;
    };
    /**
     * Sets the origin element, relative to which to position the overlay.
     * @param origin Reference to the new origin element.
     */
    /**
     * Sets the origin element, relative to which to position the overlay.
     * @param {?} origin Reference to the new origin element.
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype.setOrigin = /**
     * Sets the origin element, relative to which to position the overlay.
     * @param {?} origin Reference to the new origin element.
     * @return {?}
     */
    function (origin) {
        this._origin = origin instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] ? origin.nativeElement : origin;
        return this;
    };
    /**
     * Sets the default offset for the overlay's connection point on the x-axis.
     * @param offset New offset in the X axis.
     */
    /**
     * Sets the default offset for the overlay's connection point on the x-axis.
     * @param {?} offset New offset in the X axis.
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype.withDefaultOffsetX = /**
     * Sets the default offset for the overlay's connection point on the x-axis.
     * @param {?} offset New offset in the X axis.
     * @return {?}
     */
    function (offset) {
        this._offsetX = offset;
        return this;
    };
    /**
     * Sets the default offset for the overlay's connection point on the y-axis.
     * @param offset New offset in the Y axis.
     */
    /**
     * Sets the default offset for the overlay's connection point on the y-axis.
     * @param {?} offset New offset in the Y axis.
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype.withDefaultOffsetY = /**
     * Sets the default offset for the overlay's connection point on the y-axis.
     * @param {?} offset New offset in the Y axis.
     * @return {?}
     */
    function (offset) {
        this._offsetY = offset;
        return this;
    };
    /**
     * Configures that the position strategy should set a `transform-origin` on some elements
     * inside the overlay, depending on the current position that is being applied. This is
     * useful for the cases where the origin of an animation can change depending on the
     * alignment of the overlay.
     * @param selector CSS selector that will be used to find the target
     *    elements onto which to set the transform origin.
     */
    /**
     * Configures that the position strategy should set a `transform-origin` on some elements
     * inside the overlay, depending on the current position that is being applied. This is
     * useful for the cases where the origin of an animation can change depending on the
     * alignment of the overlay.
     * @param {?} selector CSS selector that will be used to find the target
     *    elements onto which to set the transform origin.
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype.withTransformOriginOn = /**
     * Configures that the position strategy should set a `transform-origin` on some elements
     * inside the overlay, depending on the current position that is being applied. This is
     * useful for the cases where the origin of an animation can change depending on the
     * alignment of the overlay.
     * @param {?} selector CSS selector that will be used to find the target
     *    elements onto which to set the transform origin.
     * @return {?}
     */
    function (selector) {
        this._transformOriginSelector = selector;
        return this;
    };
    /**
     * Gets the (x, y) coordinate of a connection point on the origin based on a relative position.
     * @param {?} originRect
     * @param {?} pos
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype._getOriginPoint = /**
     * Gets the (x, y) coordinate of a connection point on the origin based on a relative position.
     * @param {?} originRect
     * @param {?} pos
     * @return {?}
     */
    function (originRect, pos) {
        var /** @type {?} */ x;
        if (pos.originX == 'center') {
            // Note: when centering we should always use the `left`
            // offset, otherwise the position will be wrong in RTL.
            x = originRect.left + (originRect.width / 2);
        }
        else {
            var /** @type {?} */ startX = this._isRtl() ? originRect.right : originRect.left;
            var /** @type {?} */ endX = this._isRtl() ? originRect.left : originRect.right;
            x = pos.originX == 'start' ? startX : endX;
        }
        var /** @type {?} */ y;
        if (pos.originY == 'center') {
            y = originRect.top + (originRect.height / 2);
        }
        else {
            y = pos.originY == 'top' ? originRect.top : originRect.bottom;
        }
        return { x: x, y: y };
    };
    /**
     * Gets the (x, y) coordinate of the top-left corner of the overlay given a given position and
     * origin point to which the overlay should be connected.
     * @param {?} originPoint
     * @param {?} overlayRect
     * @param {?} pos
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype._getOverlayPoint = /**
     * Gets the (x, y) coordinate of the top-left corner of the overlay given a given position and
     * origin point to which the overlay should be connected.
     * @param {?} originPoint
     * @param {?} overlayRect
     * @param {?} pos
     * @return {?}
     */
    function (originPoint, overlayRect, pos) {
        // Calculate the (overlayStartX, overlayStartY), the start of the
        // potential overlay position relative to the origin point.
        var /** @type {?} */ overlayStartX;
        if (pos.overlayX == 'center') {
            overlayStartX = -overlayRect.width / 2;
        }
        else if (pos.overlayX === 'start') {
            overlayStartX = this._isRtl() ? -overlayRect.width : 0;
        }
        else {
            overlayStartX = this._isRtl() ? 0 : -overlayRect.width;
        }
        var /** @type {?} */ overlayStartY;
        if (pos.overlayY == 'center') {
            overlayStartY = -overlayRect.height / 2;
        }
        else {
            overlayStartY = pos.overlayY == 'top' ? 0 : -overlayRect.height;
        }
        // The (x, y) coordinates of the overlay.
        return {
            x: originPoint.x + overlayStartX,
            y: originPoint.y + overlayStartY,
        };
    };
    /**
     * Gets how well an overlay at the given point will fit within the viewport.
     * @param {?} point
     * @param {?} overlay
     * @param {?} viewport
     * @param {?} position
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype._getOverlayFit = /**
     * Gets how well an overlay at the given point will fit within the viewport.
     * @param {?} point
     * @param {?} overlay
     * @param {?} viewport
     * @param {?} position
     * @return {?}
     */
    function (point, overlay, viewport, position) {
        var x = point.x, y = point.y;
        var /** @type {?} */ offsetX = this._getOffset(position, 'x');
        var /** @type {?} */ offsetY = this._getOffset(position, 'y');
        // Account for the offsets since they could push the overlay out of the viewport.
        if (offsetX) {
            x += offsetX;
        }
        if (offsetY) {
            y += offsetY;
        }
        // How much the overlay would overflow at this position, on each side.
        var /** @type {?} */ leftOverflow = 0 - x;
        var /** @type {?} */ rightOverflow = (x + overlay.width) - viewport.width;
        var /** @type {?} */ topOverflow = 0 - y;
        var /** @type {?} */ bottomOverflow = (y + overlay.height) - viewport.height;
        // Visible parts of the element on each axis.
        var /** @type {?} */ visibleWidth = this._subtractOverflows(overlay.width, leftOverflow, rightOverflow);
        var /** @type {?} */ visibleHeight = this._subtractOverflows(overlay.height, topOverflow, bottomOverflow);
        var /** @type {?} */ visibleArea = visibleWidth * visibleHeight;
        return {
            visibleArea: visibleArea,
            isCompletelyWithinViewport: (overlay.width * overlay.height) === visibleArea,
            fitsInViewportVertically: visibleHeight === overlay.height,
            fitsInViewportHorizontally: visibleWidth == overlay.width,
        };
    };
    /**
     * Whether the overlay can fit within the viewport when it may resize either its width or height.
     * @param {?} fit How well the overlay fits in the viewport at some position.
     * @param {?} point The (x, y) coordinates of the overlat at some position.
     * @param {?} viewport The geometry of the viewport.
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype._canFitWithFlexibleDimensions = /**
     * Whether the overlay can fit within the viewport when it may resize either its width or height.
     * @param {?} fit How well the overlay fits in the viewport at some position.
     * @param {?} point The (x, y) coordinates of the overlat at some position.
     * @param {?} viewport The geometry of the viewport.
     * @return {?}
     */
    function (fit, point, viewport) {
        if (this._hasFlexibleDimensions) {
            var /** @type {?} */ availableHeight = viewport.bottom - point.y;
            var /** @type {?} */ availableWidth = viewport.right - point.x;
            var /** @type {?} */ minHeight = this._overlayRef.getConfig().minHeight;
            var /** @type {?} */ minWidth = this._overlayRef.getConfig().minWidth;
            var /** @type {?} */ verticalFit = fit.fitsInViewportVertically ||
                (minHeight != null && minHeight <= availableHeight);
            var /** @type {?} */ horizontalFit = fit.fitsInViewportHorizontally ||
                (minWidth != null && minWidth <= availableWidth);
            return verticalFit && horizontalFit;
        }
    };
    /**
     * Gets the point at which the overlay can be "pushed" on-screen. If the overlay is larger than
     * the viewport, the top-left corner will be pushed on-screen (with overflow occuring on the
     * right and bottom).
     *
     * @param {?} start The starting point from which the overlay is pushed.
     * @param {?} overlay The overlay dimensions.
     * @return {?} The point at which to position the overlay after pushing. This is effectively a new
     *     originPoint.
     */
    FlexibleConnectedPositionStrategy.prototype._pushOverlayOnScreen = /**
     * Gets the point at which the overlay can be "pushed" on-screen. If the overlay is larger than
     * the viewport, the top-left corner will be pushed on-screen (with overflow occuring on the
     * right and bottom).
     *
     * @param {?} start The starting point from which the overlay is pushed.
     * @param {?} overlay The overlay dimensions.
     * @return {?} The point at which to position the overlay after pushing. This is effectively a new
     *     originPoint.
     */
    function (start, overlay) {
        var /** @type {?} */ viewport = this._viewportRect;
        // Determine how much the overlay goes outside the viewport on each side, which we'll use to
        // decide which direction to push it.
        var /** @type {?} */ overflowRight = Math.max(start.x + overlay.width - viewport.right, 0);
        var /** @type {?} */ overflowBottom = Math.max(start.y + overlay.height - viewport.bottom, 0);
        var /** @type {?} */ overflowTop = Math.max(viewport.top - start.y, 0);
        var /** @type {?} */ overflowLeft = Math.max(viewport.left - start.x, 0);
        // Amount by which to push the overlay in each direction such that it remains on-screen.
        var /** @type {?} */ pushX, /** @type {?} */ pushY = 0;
        // If the overlay fits completely within the bounds of the viewport, push it from whichever
        // direction is goes off-screen. Otherwise, push the top-left corner such that its in the
        // viewport and allow for the trailing end of the overlay to go out of bounds.
        if (overlay.width <= viewport.width) {
            pushX = overflowLeft || -overflowRight;
        }
        else {
            pushX = viewport.left - start.x;
        }
        if (overlay.height <= viewport.height) {
            pushY = overflowTop || -overflowBottom;
        }
        else {
            pushY = viewport.top - start.y;
        }
        return {
            x: start.x + pushX,
            y: start.y + pushY,
        };
    };
    /**
     * Applies a computed position to the overlay and emits a position change.
     * @param {?} position The position preference
     * @param {?} originPoint The point on the origin element where the overlay is connected.
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype._applyPosition = /**
     * Applies a computed position to the overlay and emits a position change.
     * @param {?} position The position preference
     * @param {?} originPoint The point on the origin element where the overlay is connected.
     * @return {?}
     */
    function (position, originPoint) {
        this._setTransformOrigin(position);
        this._setOverlayElementStyles(originPoint, position);
        this._setBoundingBoxStyles(originPoint, position);
        // Save the last connected position in case the position needs to be re-calculated.
        this._lastPosition = position;
        // Notify that the position has been changed along with its change properties.
        var /** @type {?} */ scrollableViewProperties = this._getScrollVisibility();
        var /** @type {?} */ changeEvent = new ConnectedOverlayPositionChange(position, scrollableViewProperties);
        this._positionChanges.next(changeEvent);
        this._isInitialRender = false;
    };
    /**
     * Sets the transform origin based on the configured selector and the passed-in position.
     * @param {?} position
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype._setTransformOrigin = /**
     * Sets the transform origin based on the configured selector and the passed-in position.
     * @param {?} position
     * @return {?}
     */
    function (position) {
        if (!this._transformOriginSelector) {
            return;
        }
        var /** @type {?} */ elements = /** @type {?} */ ((this._boundingBox)).querySelectorAll(this._transformOriginSelector);
        var /** @type {?} */ xOrigin;
        var /** @type {?} */ yOrigin = position.overlayY;
        if (position.overlayX === 'center') {
            xOrigin = 'center';
        }
        else if (this._isRtl()) {
            xOrigin = position.overlayX === 'start' ? 'right' : 'left';
        }
        else {
            xOrigin = position.overlayX === 'start' ? 'left' : 'right';
        }
        for (var /** @type {?} */ i = 0; i < elements.length; i++) {
            elements[i].style.transformOrigin = xOrigin + " " + yOrigin;
        }
    };
    /**
     * Gets the position and size of the overlay's sizing container.
     *
     * This method does no measuring and applies no styles so that we can cheaply compute the
     * bounds for all positions and choose the best fit based on these results.
     * @param {?} origin
     * @param {?} position
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype._calculateBoundingBoxRect = /**
     * Gets the position and size of the overlay's sizing container.
     *
     * This method does no measuring and applies no styles so that we can cheaply compute the
     * bounds for all positions and choose the best fit based on these results.
     * @param {?} origin
     * @param {?} position
     * @return {?}
     */
    function (origin, position) {
        var /** @type {?} */ viewport = this._viewportRect;
        var /** @type {?} */ isRtl = this._isRtl();
        var /** @type {?} */ height, /** @type {?} */ top, /** @type {?} */ bottom;
        if (position.overlayY === 'top') {
            // Overlay is opening "downward" and thus is bound by the bottom viewport edge.
            top = origin.y;
            height = viewport.bottom - origin.y;
        }
        else if (position.overlayY === 'bottom') {
            // Overlay is opening "upward" and thus is bound by the top viewport edge. We need to add
            // the viewport margin back in, because the viewport rect is narrowed down to remove the
            // margin, whereas the `origin` position is calculated based on its `ClientRect`.
            bottom = viewport.height - origin.y + this._viewportMargin * 2;
            height = viewport.height - bottom + this._viewportMargin;
        }
        else {
            // If neither top nor bottom, it means that the overlay
            // is vertically centered on the origin point.
            var /** @type {?} */ smallestDistanceToViewportEdge = Math.min(viewport.bottom - origin.y, origin.y - viewport.left);
            var /** @type {?} */ previousHeight = this._lastBoundingBoxSize.height;
            height = smallestDistanceToViewportEdge * 2;
            top = origin.y - smallestDistanceToViewportEdge;
            if (height > previousHeight && !this._isInitialRender && !this._growAfterOpen) {
                top = origin.y - (previousHeight / 2);
            }
        }
        // The overlay is opening 'right-ward' (the content flows to the right).
        var /** @type {?} */ isBoundedByRightViewportEdge = (position.overlayX === 'start' && !isRtl) ||
            (position.overlayX === 'end' && isRtl);
        // The overlay is opening 'left-ward' (the content flows to the left).
        var /** @type {?} */ isBoundedByLeftViewportEdge = (position.overlayX === 'end' && !isRtl) ||
            (position.overlayX === 'start' && isRtl);
        var /** @type {?} */ width, /** @type {?} */ left, /** @type {?} */ right;
        if (isBoundedByLeftViewportEdge) {
            right = viewport.right - origin.x + this._viewportMargin;
            width = origin.x - viewport.left;
        }
        else if (isBoundedByRightViewportEdge) {
            left = origin.x;
            width = viewport.right - origin.x;
        }
        else {
            // If neither start nor end, it means that the overlay
            // is horizontally centered on the origin point.
            var /** @type {?} */ smallestDistanceToViewportEdge = Math.min(viewport.right - origin.x, origin.x - viewport.top);
            var /** @type {?} */ previousWidth = this._lastBoundingBoxSize.width;
            width = smallestDistanceToViewportEdge * 2;
            left = origin.x - smallestDistanceToViewportEdge;
            if (width > previousWidth && !this._isInitialRender && !this._growAfterOpen) {
                left = origin.x - (previousWidth / 2);
            }
        }
        return { top: top, left: left, bottom: bottom, right: right, width: width, height: height };
    };
    /**
     * Sets the position and size of the overlay's sizing wrapper. The wrapper is positioned on the
     * origin's connection point and stetches to the bounds of the viewport.
     *
     * @param {?} origin The point on the origin element where the overlay is connected.
     * @param {?} position The position preference
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype._setBoundingBoxStyles = /**
     * Sets the position and size of the overlay's sizing wrapper. The wrapper is positioned on the
     * origin's connection point and stetches to the bounds of the viewport.
     *
     * @param {?} origin The point on the origin element where the overlay is connected.
     * @param {?} position The position preference
     * @return {?}
     */
    function (origin, position) {
        var /** @type {?} */ boundingBoxRect = this._calculateBoundingBoxRect(origin, position);
        // It's weird if the overlay *grows* while scrolling, so we take the last size into account
        // when applying a new size.
        if (!this._isInitialRender && !this._growAfterOpen) {
            boundingBoxRect.height = Math.min(boundingBoxRect.height, this._lastBoundingBoxSize.height);
            boundingBoxRect.width = Math.min(boundingBoxRect.width, this._lastBoundingBoxSize.width);
        }
        var /** @type {?} */ styles = /** @type {?} */ ({});
        if (this._hasExactPosition()) {
            styles.top = styles.left = '0';
            styles.bottom = styles.right = '';
            styles.width = styles.height = '100%';
        }
        else {
            var /** @type {?} */ maxHeight = this._overlayRef.getConfig().maxHeight;
            var /** @type {?} */ maxWidth = this._overlayRef.getConfig().maxWidth;
            styles.height = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceCssPixelValue"])(boundingBoxRect.height);
            styles.top = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceCssPixelValue"])(boundingBoxRect.top);
            styles.bottom = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceCssPixelValue"])(boundingBoxRect.bottom);
            styles.width = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceCssPixelValue"])(boundingBoxRect.width);
            styles.left = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceCssPixelValue"])(boundingBoxRect.left);
            styles.right = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceCssPixelValue"])(boundingBoxRect.right);
            // Push the pane content towards the proper direction.
            if (position.overlayX === 'center') {
                styles.alignItems = 'center';
            }
            else if (this._isRtl()) {
                styles.alignItems = position.overlayX === 'end' ? 'flex-start' : 'flex-end';
            }
            else {
                styles.alignItems = position.overlayX === 'end' ? 'flex-end' : 'flex-start';
            }
            if (position.overlayY === 'center') {
                styles.justifyContent = 'center';
            }
            else {
                styles.justifyContent = position.overlayY === 'bottom' ? 'flex-end' : 'flex-start';
            }
            if (maxHeight) {
                styles.maxHeight = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceCssPixelValue"])(maxHeight);
            }
            if (maxWidth) {
                styles.maxWidth = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceCssPixelValue"])(maxWidth);
            }
        }
        this._lastBoundingBoxSize = boundingBoxRect;
        extendStyles(/** @type {?} */ ((this._boundingBox)).style, styles);
    };
    /**
     * Resets the styles for the bounding box so that a new positioning can be computed.
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype._resetBoundingBoxStyles = /**
     * Resets the styles for the bounding box so that a new positioning can be computed.
     * @return {?}
     */
    function () {
        extendStyles(/** @type {?} */ ((this._boundingBox)).style, /** @type {?} */ ({
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            height: '',
            width: '',
            alignItems: '',
            justifyContent: '',
        }));
    };
    /**
     * Resets the styles for the overlay pane so that a new positioning can be computed.
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype._resetOverlayElementStyles = /**
     * Resets the styles for the overlay pane so that a new positioning can be computed.
     * @return {?}
     */
    function () {
        extendStyles(this._pane.style, /** @type {?} */ ({
            top: '',
            left: '',
            bottom: '',
            right: '',
            position: '',
        }));
    };
    /**
     * Sets positioning styles to the overlay element.
     * @param {?} originPoint
     * @param {?} position
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype._setOverlayElementStyles = /**
     * Sets positioning styles to the overlay element.
     * @param {?} originPoint
     * @param {?} position
     * @return {?}
     */
    function (originPoint, position) {
        var /** @type {?} */ styles = /** @type {?} */ ({});
        if (this._hasExactPosition()) {
            extendStyles(styles, this._getExactOverlayY(position, originPoint));
            extendStyles(styles, this._getExactOverlayX(position, originPoint));
        }
        else {
            styles.position = 'static';
        }
        // Use a transform to apply the offsets. We do this because the `center` positions rely on
        // being in the normal flex flow and setting a `top` / `left` at all will completely throw
        // off the position. We also can't use margins, because they won't have an effect in some
        // cases where the element doesn't have anything to "push off of". Finally, this works
        // better both with flexible and non-flexible positioning.
        var /** @type {?} */ transformString = '';
        var /** @type {?} */ offsetX = this._getOffset(position, 'x');
        var /** @type {?} */ offsetY = this._getOffset(position, 'y');
        if (offsetX) {
            transformString += "translateX(" + offsetX + "px) ";
        }
        if (offsetY) {
            transformString += "translateY(" + offsetY + "px)";
        }
        styles.transform = transformString.trim();
        // If a maxWidth or maxHeight is specified on the overlay, we remove them. We do this because
        // we need these values to both be set to "100%" for the automatic flexible sizing to work.
        // The maxHeight and maxWidth are set on the boundingBox in order to enforce the constraint.
        if (this._hasFlexibleDimensions && this._overlayRef.getConfig().maxHeight) {
            styles.maxHeight = '';
        }
        if (this._hasFlexibleDimensions && this._overlayRef.getConfig().maxWidth) {
            styles.maxWidth = '';
        }
        extendStyles(this._pane.style, styles);
    };
    /**
     * Gets the exact top/bottom for the overlay when not using flexible sizing or when pushing.
     * @param {?} position
     * @param {?} originPoint
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype._getExactOverlayY = /**
     * Gets the exact top/bottom for the overlay when not using flexible sizing or when pushing.
     * @param {?} position
     * @param {?} originPoint
     * @return {?}
     */
    function (position, originPoint) {
        // Reset any existing styles. This is necessary in case the
        // preferred position has changed since the last `apply`.
        var /** @type {?} */ styles = /** @type {?} */ ({ top: null, bottom: null });
        var /** @type {?} */ overlayPoint = this._getOverlayPoint(originPoint, this._overlayRect, position);
        if (this._isPushed) {
            overlayPoint = this._pushOverlayOnScreen(overlayPoint, this._overlayRect);
        }
        // We want to set either `top` or `bottom` based on whether the overlay wants to appear
        // above or below the origin and the direction in which the element will expand.
        if (position.overlayY === 'bottom') {
            // When using `bottom`, we adjust the y position such that it is the distance
            // from the bottom of the viewport rather than the top.
            var /** @type {?} */ documentHeight = this._document.documentElement.clientHeight;
            styles.bottom = documentHeight - (overlayPoint.y + this._overlayRect.height) + "px";
        }
        else {
            styles.top = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceCssPixelValue"])(overlayPoint.y);
        }
        return styles;
    };
    /**
     * Gets the exact left/right for the overlay when not using flexible sizing or when pushing.
     * @param {?} position
     * @param {?} originPoint
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype._getExactOverlayX = /**
     * Gets the exact left/right for the overlay when not using flexible sizing or when pushing.
     * @param {?} position
     * @param {?} originPoint
     * @return {?}
     */
    function (position, originPoint) {
        // Reset any existing styles. This is necessary in case the preferred position has
        // changed since the last `apply`.
        var /** @type {?} */ styles = /** @type {?} */ ({ left: null, right: null });
        var /** @type {?} */ overlayPoint = this._getOverlayPoint(originPoint, this._overlayRect, position);
        if (this._isPushed) {
            overlayPoint = this._pushOverlayOnScreen(overlayPoint, this._overlayRect);
        }
        // We want to set either `left` or `right` based on whether the overlay wants to appear "before"
        // or "after" the origin, which determines the direction in which the element will expand.
        // For the horizontal axis, the meaning of "before" and "after" change based on whether the
        // page is in RTL or LTR.
        var /** @type {?} */ horizontalStyleProperty;
        if (this._isRtl()) {
            horizontalStyleProperty = position.overlayX === 'end' ? 'left' : 'right';
        }
        else {
            horizontalStyleProperty = position.overlayX === 'end' ? 'right' : 'left';
        }
        // When we're setting `right`, we adjust the x position such that it is the distance
        // from the right edge of the viewport rather than the left edge.
        if (horizontalStyleProperty === 'right') {
            var /** @type {?} */ documentWidth = this._document.documentElement.clientWidth;
            styles.right = documentWidth - (overlayPoint.x + this._overlayRect.width) + "px";
        }
        else {
            styles.left = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceCssPixelValue"])(overlayPoint.x);
        }
        return styles;
    };
    /**
     * Gets the view properties of the trigger and overlay, including whether they are clipped
     * or completely outside the view of any of the strategy's scrollables.
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype._getScrollVisibility = /**
     * Gets the view properties of the trigger and overlay, including whether they are clipped
     * or completely outside the view of any of the strategy's scrollables.
     * @return {?}
     */
    function () {
        // Note: needs fresh rects since the position could've changed.
        var /** @type {?} */ originBounds = this._origin.getBoundingClientRect();
        var /** @type {?} */ overlayBounds = this._pane.getBoundingClientRect();
        // TODO(jelbourn): instead of needing all of the client rects for these scrolling containers
        // every time, we should be able to use the scrollTop of the containers if the size of those
        // containers hasn't changed.
        var /** @type {?} */ scrollContainerBounds = this.scrollables.map(function (scrollable) {
            return scrollable.getElementRef().nativeElement.getBoundingClientRect();
        });
        return {
            isOriginClipped: isElementClippedByScrolling(originBounds, scrollContainerBounds),
            isOriginOutsideView: isElementScrolledOutsideView(originBounds, scrollContainerBounds),
            isOverlayClipped: isElementClippedByScrolling(overlayBounds, scrollContainerBounds),
            isOverlayOutsideView: isElementScrolledOutsideView(overlayBounds, scrollContainerBounds),
        };
    };
    /**
     * Subtracts the amount that an element is overflowing on an axis from it's length.
     * @param {?} length
     * @param {...?} overflows
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype._subtractOverflows = /**
     * Subtracts the amount that an element is overflowing on an axis from it's length.
     * @param {?} length
     * @param {...?} overflows
     * @return {?}
     */
    function (length) {
        var overflows = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            overflows[_i - 1] = arguments[_i];
        }
        return overflows.reduce(function (currentValue, currentOverflow) {
            return currentValue - Math.max(currentOverflow, 0);
        }, length);
    };
    /**
     * Narrows the given viewport rect by the current _viewportMargin.
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype._getNarrowedViewportRect = /**
     * Narrows the given viewport rect by the current _viewportMargin.
     * @return {?}
     */
    function () {
        // We recalculate the viewport rect here ourselves, rather than using the ViewportRuler,
        // because we want to use the `clientWidth` and `clientHeight` as the base. The difference
        // being that the client properties don't include the scrollbar, as opposed to `innerWidth`
        // and `innerHeight` that do. This is necessary, because the overlay container uses
        // 100% `width` and `height` which don't include the scrollbar either.
        var /** @type {?} */ width = this._document.documentElement.clientWidth;
        var /** @type {?} */ height = this._document.documentElement.clientHeight;
        var /** @type {?} */ scrollPosition = this._viewportRuler.getViewportScrollPosition();
        return {
            top: scrollPosition.top + this._viewportMargin,
            left: scrollPosition.left + this._viewportMargin,
            right: scrollPosition.left + width - this._viewportMargin,
            bottom: scrollPosition.top + height - this._viewportMargin,
            width: width - (2 * this._viewportMargin),
            height: height - (2 * this._viewportMargin),
        };
    };
    /**
     * Whether the we're dealing with an RTL context
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype._isRtl = /**
     * Whether the we're dealing with an RTL context
     * @return {?}
     */
    function () {
        return this._overlayRef.getConfig().direction === 'rtl';
    };
    /**
     * Determines whether the overlay uses exact or flexible positioning.
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype._hasExactPosition = /**
     * Determines whether the overlay uses exact or flexible positioning.
     * @return {?}
     */
    function () {
        return !this._hasFlexibleDimensions || this._isPushed;
    };
    /**
     * Retrieves the offset of a position along the x or y axis.
     * @param {?} position
     * @param {?} axis
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype._getOffset = /**
     * Retrieves the offset of a position along the x or y axis.
     * @param {?} position
     * @param {?} axis
     * @return {?}
     */
    function (position, axis) {
        if (axis === 'x') {
            // We don't do something like `position['offset' + axis]` in
            // order to avoid breking minifiers that rename properties.
            return position.offsetX == null ? this._offsetX : position.offsetX;
        }
        return position.offsetY == null ? this._offsetY : position.offsetY;
    };
    /**
     * Validates that the current position match the expected values.
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype._validatePositions = /**
     * Validates that the current position match the expected values.
     * @return {?}
     */
    function () {
        if (!this._preferredPositions.length) {
            throw Error('FlexibleConnectedPositionStrategy: At least one position is required.');
        }
        // TODO(crisbeto): remove these once Angular's template type
        // checking is advanced enough to catch these cases.
        this._preferredPositions.forEach(function (pair) {
            validateHorizontalPosition('originX', pair.originX);
            validateVerticalPosition('originY', pair.originY);
            validateHorizontalPosition('overlayX', pair.overlayX);
            validateVerticalPosition('overlayY', pair.overlayY);
        });
    };
    return FlexibleConnectedPositionStrategy;
}());
/**
 * Shallow-extends a stylesheet object with another stylesheet object.
 * @param {?} dest
 * @param {?} source
 * @return {?}
 */
function extendStyles(dest, source) {
    for (var /** @type {?} */ key in source) {
        if (source.hasOwnProperty(key)) {
            dest[key] = source[key];
        }
    }
    return dest;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * A strategy for positioning overlays. Using this strategy, an overlay is given an
 * implicit position relative to some origin element. The relative position is defined in terms of
 * a point on the origin element that is connected to a point on the overlay element. For example,
 * a basic dropdown is connecting the bottom-left corner of the origin to the top-left corner
 * of the overlay.
 * @deprecated Use `FlexibleConnectedPositionStrategy` instead.
 * \@deletion-target 7.0.0
 */
var  /**
 * A strategy for positioning overlays. Using this strategy, an overlay is given an
 * implicit position relative to some origin element. The relative position is defined in terms of
 * a point on the origin element that is connected to a point on the overlay element. For example,
 * a basic dropdown is connecting the bottom-left corner of the origin to the top-left corner
 * of the overlay.
 * @deprecated Use `FlexibleConnectedPositionStrategy` instead.
 * \@deletion-target 7.0.0
 */
ConnectedPositionStrategy = /** @class */ (function () {
    function ConnectedPositionStrategy(originPos, overlayPos, connectedTo, viewportRuler, document, 
    // @deletion-target 7.0.0 `platform` parameter to be made required.
    // @deletion-target 7.0.0 `platform` parameter to be made required.
    platform) {
        /**
         * Ordered list of preferred positions, from most to least desirable.
         */
        this._preferredPositions = [];
        // Since the `ConnectedPositionStrategy` is deprecated and we don't want to maintain
        // the extra logic, we create an instance of the positioning strategy that has some
        // defaults that make it behave as the old position strategy and to which we'll
        // proxy all of the API calls.
        this._positionStrategy =
            new FlexibleConnectedPositionStrategy(connectedTo, viewportRuler, document, platform)
                .withFlexibleDimensions(false)
                .withPush(false)
                .withViewportMargin(0);
        this.withFallbackPosition(originPos, overlayPos);
    }
    Object.defineProperty(ConnectedPositionStrategy.prototype, "_isRtl", {
        /** Whether the we're dealing with an RTL context */
        get: /**
         * Whether the we're dealing with an RTL context
         * @return {?}
         */
        function () {
            return this._overlayRef.getConfig().direction === 'rtl';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConnectedPositionStrategy.prototype, "onPositionChange", {
        /** Emits an event when the connection point changes. */
        get: /**
         * Emits an event when the connection point changes.
         * @return {?}
         */
        function () {
            return this._positionStrategy.positionChanges;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConnectedPositionStrategy.prototype, "positions", {
        /** Ordered list of preferred positions, from most to least desirable. */
        get: /**
         * Ordered list of preferred positions, from most to least desirable.
         * @return {?}
         */
        function () {
            return this._preferredPositions;
        },
        enumerable: true,
        configurable: true
    });
    /** Attach this position strategy to an overlay. */
    /**
     * Attach this position strategy to an overlay.
     * @param {?} overlayRef
     * @return {?}
     */
    ConnectedPositionStrategy.prototype.attach = /**
     * Attach this position strategy to an overlay.
     * @param {?} overlayRef
     * @return {?}
     */
    function (overlayRef) {
        this._overlayRef = overlayRef;
        this._positionStrategy.attach(overlayRef);
        if (this._direction) {
            overlayRef.setDirection(this._direction);
            this._direction = null;
        }
    };
    /** Disposes all resources used by the position strategy. */
    /**
     * Disposes all resources used by the position strategy.
     * @return {?}
     */
    ConnectedPositionStrategy.prototype.dispose = /**
     * Disposes all resources used by the position strategy.
     * @return {?}
     */
    function () {
        this._positionStrategy.dispose();
    };
    /** @docs-private */
    /**
     * \@docs-private
     * @return {?}
     */
    ConnectedPositionStrategy.prototype.detach = /**
     * \@docs-private
     * @return {?}
     */
    function () {
        this._positionStrategy.detach();
    };
    /**
     * Updates the position of the overlay element, using whichever preferred position relative
     * to the origin fits on-screen.
     * @docs-private
     */
    /**
     * Updates the position of the overlay element, using whichever preferred position relative
     * to the origin fits on-screen.
     * \@docs-private
     * @return {?}
     */
    ConnectedPositionStrategy.prototype.apply = /**
     * Updates the position of the overlay element, using whichever preferred position relative
     * to the origin fits on-screen.
     * \@docs-private
     * @return {?}
     */
    function () {
        this._positionStrategy.apply();
    };
    /**
     * Re-positions the overlay element with the trigger in its last calculated position,
     * even if a position higher in the "preferred positions" list would now fit. This
     * allows one to re-align the panel without changing the orientation of the panel.
     */
    /**
     * Re-positions the overlay element with the trigger in its last calculated position,
     * even if a position higher in the "preferred positions" list would now fit. This
     * allows one to re-align the panel without changing the orientation of the panel.
     * @return {?}
     */
    ConnectedPositionStrategy.prototype.recalculateLastPosition = /**
     * Re-positions the overlay element with the trigger in its last calculated position,
     * even if a position higher in the "preferred positions" list would now fit. This
     * allows one to re-align the panel without changing the orientation of the panel.
     * @return {?}
     */
    function () {
        this._positionStrategy.reapplyLastPosition();
    };
    /**
     * Sets the list of Scrollable containers that host the origin element so that
     * on reposition we can evaluate if it or the overlay has been clipped or outside view. Every
     * Scrollable must be an ancestor element of the strategy's origin element.
     */
    /**
     * Sets the list of Scrollable containers that host the origin element so that
     * on reposition we can evaluate if it or the overlay has been clipped or outside view. Every
     * Scrollable must be an ancestor element of the strategy's origin element.
     * @param {?} scrollables
     * @return {?}
     */
    ConnectedPositionStrategy.prototype.withScrollableContainers = /**
     * Sets the list of Scrollable containers that host the origin element so that
     * on reposition we can evaluate if it or the overlay has been clipped or outside view. Every
     * Scrollable must be an ancestor element of the strategy's origin element.
     * @param {?} scrollables
     * @return {?}
     */
    function (scrollables) {
        this._positionStrategy.withScrollableContainers(scrollables);
    };
    /**
     * Adds a new preferred fallback position.
     * @param originPos
     * @param overlayPos
     */
    /**
     * Adds a new preferred fallback position.
     * @param {?} originPos
     * @param {?} overlayPos
     * @param {?=} offsetX
     * @param {?=} offsetY
     * @return {?}
     */
    ConnectedPositionStrategy.prototype.withFallbackPosition = /**
     * Adds a new preferred fallback position.
     * @param {?} originPos
     * @param {?} overlayPos
     * @param {?=} offsetX
     * @param {?=} offsetY
     * @return {?}
     */
    function (originPos, overlayPos, offsetX, offsetY) {
        var /** @type {?} */ position = new ConnectionPositionPair(originPos, overlayPos, offsetX, offsetY);
        this._preferredPositions.push(position);
        this._positionStrategy.withPositions(this._preferredPositions);
        return this;
    };
    /**
     * Sets the layout direction so the overlay's position can be adjusted to match.
     * @param dir New layout direction.
     */
    /**
     * Sets the layout direction so the overlay's position can be adjusted to match.
     * @param {?} dir New layout direction.
     * @return {?}
     */
    ConnectedPositionStrategy.prototype.withDirection = /**
     * Sets the layout direction so the overlay's position can be adjusted to match.
     * @param {?} dir New layout direction.
     * @return {?}
     */
    function (dir) {
        // Since the direction might be declared before the strategy is attached,
        // we save the value in a temporary property and we'll transfer it to the
        // overlay ref on attachment.
        if (this._overlayRef) {
            this._overlayRef.setDirection(dir);
        }
        else {
            this._direction = dir;
        }
        return this;
    };
    /**
     * Sets an offset for the overlay's connection point on the x-axis
     * @param offset New offset in the X axis.
     */
    /**
     * Sets an offset for the overlay's connection point on the x-axis
     * @param {?} offset New offset in the X axis.
     * @return {?}
     */
    ConnectedPositionStrategy.prototype.withOffsetX = /**
     * Sets an offset for the overlay's connection point on the x-axis
     * @param {?} offset New offset in the X axis.
     * @return {?}
     */
    function (offset) {
        this._positionStrategy.withDefaultOffsetX(offset);
        return this;
    };
    /**
     * Sets an offset for the overlay's connection point on the y-axis
     * @param  offset New offset in the Y axis.
     */
    /**
     * Sets an offset for the overlay's connection point on the y-axis
     * @param {?} offset New offset in the Y axis.
     * @return {?}
     */
    ConnectedPositionStrategy.prototype.withOffsetY = /**
     * Sets an offset for the overlay's connection point on the y-axis
     * @param {?} offset New offset in the Y axis.
     * @return {?}
     */
    function (offset) {
        this._positionStrategy.withDefaultOffsetY(offset);
        return this;
    };
    /**
     * Sets whether the overlay's position should be locked in after it is positioned
     * initially. When an overlay is locked in, it won't attempt to reposition itself
     * when the position is re-applied (e.g. when the user scrolls away).
     * @param isLocked Whether the overlay should locked in.
     */
    /**
     * Sets whether the overlay's position should be locked in after it is positioned
     * initially. When an overlay is locked in, it won't attempt to reposition itself
     * when the position is re-applied (e.g. when the user scrolls away).
     * @param {?} isLocked Whether the overlay should locked in.
     * @return {?}
     */
    ConnectedPositionStrategy.prototype.withLockedPosition = /**
     * Sets whether the overlay's position should be locked in after it is positioned
     * initially. When an overlay is locked in, it won't attempt to reposition itself
     * when the position is re-applied (e.g. when the user scrolls away).
     * @param {?} isLocked Whether the overlay should locked in.
     * @return {?}
     */
    function (isLocked) {
        this._positionStrategy.withLockedPosition(isLocked);
        return this;
    };
    /**
     * Overwrites the current set of positions with an array of new ones.
     * @param positions Position pairs to be set on the strategy.
     */
    /**
     * Overwrites the current set of positions with an array of new ones.
     * @param {?} positions Position pairs to be set on the strategy.
     * @return {?}
     */
    ConnectedPositionStrategy.prototype.withPositions = /**
     * Overwrites the current set of positions with an array of new ones.
     * @param {?} positions Position pairs to be set on the strategy.
     * @return {?}
     */
    function (positions) {
        this._preferredPositions = positions.slice();
        this._positionStrategy.withPositions(this._preferredPositions);
        return this;
    };
    /**
     * Sets the origin element, relative to which to position the overlay.
     * @param origin Reference to the new origin element.
     */
    /**
     * Sets the origin element, relative to which to position the overlay.
     * @param {?} origin Reference to the new origin element.
     * @return {?}
     */
    ConnectedPositionStrategy.prototype.setOrigin = /**
     * Sets the origin element, relative to which to position the overlay.
     * @param {?} origin Reference to the new origin element.
     * @return {?}
     */
    function (origin) {
        this._positionStrategy.setOrigin(origin);
        return this;
    };
    return ConnectedPositionStrategy;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * A strategy for positioning overlays. Using this strategy, an overlay is given an
 * explicit position relative to the browser's viewport. We use flexbox, instead of
 * transforms, in order to avoid issues with subpixel rendering which can cause the
 * element to become blurry.
 */
var  /**
 * A strategy for positioning overlays. Using this strategy, an overlay is given an
 * explicit position relative to the browser's viewport. We use flexbox, instead of
 * transforms, in order to avoid issues with subpixel rendering which can cause the
 * element to become blurry.
 */
GlobalPositionStrategy = /** @class */ (function () {
    function GlobalPositionStrategy() {
        this._cssPosition = 'static';
        this._topOffset = '';
        this._bottomOffset = '';
        this._leftOffset = '';
        this._rightOffset = '';
        this._alignItems = '';
        this._justifyContent = '';
        this._width = '';
        this._height = '';
    }
    /**
     * @param {?} overlayRef
     * @return {?}
     */
    GlobalPositionStrategy.prototype.attach = /**
     * @param {?} overlayRef
     * @return {?}
     */
    function (overlayRef) {
        var /** @type {?} */ config = overlayRef.getConfig();
        this._overlayRef = overlayRef;
        if (this._width && !config.width) {
            overlayRef.updateSize({ width: this._width });
        }
        if (this._height && !config.height) {
            overlayRef.updateSize({ height: this._height });
        }
        overlayRef.hostElement.classList.add('cdk-global-overlay-wrapper');
    };
    /**
     * Sets the top position of the overlay. Clears any previously set vertical position.
     * @param value New top offset.
     */
    /**
     * Sets the top position of the overlay. Clears any previously set vertical position.
     * @param {?=} value New top offset.
     * @return {?}
     */
    GlobalPositionStrategy.prototype.top = /**
     * Sets the top position of the overlay. Clears any previously set vertical position.
     * @param {?=} value New top offset.
     * @return {?}
     */
    function (value) {
        if (value === void 0) { value = ''; }
        this._bottomOffset = '';
        this._topOffset = value;
        this._alignItems = 'flex-start';
        return this;
    };
    /**
     * Sets the left position of the overlay. Clears any previously set horizontal position.
     * @param value New left offset.
     */
    /**
     * Sets the left position of the overlay. Clears any previously set horizontal position.
     * @param {?=} value New left offset.
     * @return {?}
     */
    GlobalPositionStrategy.prototype.left = /**
     * Sets the left position of the overlay. Clears any previously set horizontal position.
     * @param {?=} value New left offset.
     * @return {?}
     */
    function (value) {
        if (value === void 0) { value = ''; }
        this._rightOffset = '';
        this._leftOffset = value;
        this._justifyContent = 'flex-start';
        return this;
    };
    /**
     * Sets the bottom position of the overlay. Clears any previously set vertical position.
     * @param value New bottom offset.
     */
    /**
     * Sets the bottom position of the overlay. Clears any previously set vertical position.
     * @param {?=} value New bottom offset.
     * @return {?}
     */
    GlobalPositionStrategy.prototype.bottom = /**
     * Sets the bottom position of the overlay. Clears any previously set vertical position.
     * @param {?=} value New bottom offset.
     * @return {?}
     */
    function (value) {
        if (value === void 0) { value = ''; }
        this._topOffset = '';
        this._bottomOffset = value;
        this._alignItems = 'flex-end';
        return this;
    };
    /**
     * Sets the right position of the overlay. Clears any previously set horizontal position.
     * @param value New right offset.
     */
    /**
     * Sets the right position of the overlay. Clears any previously set horizontal position.
     * @param {?=} value New right offset.
     * @return {?}
     */
    GlobalPositionStrategy.prototype.right = /**
     * Sets the right position of the overlay. Clears any previously set horizontal position.
     * @param {?=} value New right offset.
     * @return {?}
     */
    function (value) {
        if (value === void 0) { value = ''; }
        this._leftOffset = '';
        this._rightOffset = value;
        this._justifyContent = 'flex-end';
        return this;
    };
    /**
     * Sets the overlay width and clears any previously set width.
     * @param value New width for the overlay
     * @deprecated Pass the `width` through the `OverlayConfig`.
     * @deletion-target 7.0.0
     */
    /**
     * Sets the overlay width and clears any previously set width.
     * @deprecated Pass the `width` through the `OverlayConfig`.
     * \@deletion-target 7.0.0
     * @param {?=} value New width for the overlay
     * @return {?}
     */
    GlobalPositionStrategy.prototype.width = /**
     * Sets the overlay width and clears any previously set width.
     * @deprecated Pass the `width` through the `OverlayConfig`.
     * \@deletion-target 7.0.0
     * @param {?=} value New width for the overlay
     * @return {?}
     */
    function (value) {
        if (value === void 0) { value = ''; }
        if (this._overlayRef) {
            this._overlayRef.updateSize({ width: value });
        }
        else {
            this._width = value;
        }
        return this;
    };
    /**
     * Sets the overlay height and clears any previously set height.
     * @param value New height for the overlay
     * @deprecated Pass the `height` through the `OverlayConfig`.
     * @deletion-target 7.0.0
     */
    /**
     * Sets the overlay height and clears any previously set height.
     * @deprecated Pass the `height` through the `OverlayConfig`.
     * \@deletion-target 7.0.0
     * @param {?=} value New height for the overlay
     * @return {?}
     */
    GlobalPositionStrategy.prototype.height = /**
     * Sets the overlay height and clears any previously set height.
     * @deprecated Pass the `height` through the `OverlayConfig`.
     * \@deletion-target 7.0.0
     * @param {?=} value New height for the overlay
     * @return {?}
     */
    function (value) {
        if (value === void 0) { value = ''; }
        if (this._overlayRef) {
            this._overlayRef.updateSize({ height: value });
        }
        else {
            this._height = value;
        }
        return this;
    };
    /**
     * Centers the overlay horizontally with an optional offset.
     * Clears any previously set horizontal position.
     *
     * @param offset Overlay offset from the horizontal center.
     */
    /**
     * Centers the overlay horizontally with an optional offset.
     * Clears any previously set horizontal position.
     *
     * @param {?=} offset Overlay offset from the horizontal center.
     * @return {?}
     */
    GlobalPositionStrategy.prototype.centerHorizontally = /**
     * Centers the overlay horizontally with an optional offset.
     * Clears any previously set horizontal position.
     *
     * @param {?=} offset Overlay offset from the horizontal center.
     * @return {?}
     */
    function (offset) {
        if (offset === void 0) { offset = ''; }
        this.left(offset);
        this._justifyContent = 'center';
        return this;
    };
    /**
     * Centers the overlay vertically with an optional offset.
     * Clears any previously set vertical position.
     *
     * @param offset Overlay offset from the vertical center.
     */
    /**
     * Centers the overlay vertically with an optional offset.
     * Clears any previously set vertical position.
     *
     * @param {?=} offset Overlay offset from the vertical center.
     * @return {?}
     */
    GlobalPositionStrategy.prototype.centerVertically = /**
     * Centers the overlay vertically with an optional offset.
     * Clears any previously set vertical position.
     *
     * @param {?=} offset Overlay offset from the vertical center.
     * @return {?}
     */
    function (offset) {
        if (offset === void 0) { offset = ''; }
        this.top(offset);
        this._alignItems = 'center';
        return this;
    };
    /**
     * Apply the position to the element.
     * @docs-private
     */
    /**
     * Apply the position to the element.
     * \@docs-private
     * @return {?}
     */
    GlobalPositionStrategy.prototype.apply = /**
     * Apply the position to the element.
     * \@docs-private
     * @return {?}
     */
    function () {
        // Since the overlay ref applies the strategy asynchronously, it could
        // have been disposed before it ends up being applied. If that is the
        // case, we shouldn't do anything.
        if (!this._overlayRef.hasAttached()) {
            return;
        }
        var /** @type {?} */ styles = this._overlayRef.overlayElement.style;
        var /** @type {?} */ parentStyles = this._overlayRef.hostElement.style;
        var /** @type {?} */ config = this._overlayRef.getConfig();
        styles.position = this._cssPosition;
        styles.marginLeft = config.width === '100%' ? '0' : this._leftOffset;
        styles.marginTop = config.height === '100%' ? '0' : this._topOffset;
        styles.marginBottom = this._bottomOffset;
        styles.marginRight = this._rightOffset;
        parentStyles.justifyContent = config.width === '100%' ? 'flex-start' : this._justifyContent;
        parentStyles.alignItems = config.height === '100%' ? 'flex-start' : this._alignItems;
    };
    /**
     * Noop implemented as a part of the PositionStrategy interface.
     * @docs-private
     */
    /**
     * Noop implemented as a part of the PositionStrategy interface.
     * \@docs-private
     * @return {?}
     */
    GlobalPositionStrategy.prototype.dispose = /**
     * Noop implemented as a part of the PositionStrategy interface.
     * \@docs-private
     * @return {?}
     */
    function () { };
    return GlobalPositionStrategy;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Builder for overlay position strategy.
 */
var OverlayPositionBuilder = /** @class */ (function () {
    function OverlayPositionBuilder(_viewportRuler, _document, 
    // @deletion-target 7.0.0 `_platform` parameter to be made required.
    _platform) {
        this._viewportRuler = _viewportRuler;
        this._document = _document;
        this._platform = _platform;
    }
    /**
     * Creates a global position strategy.
     */
    /**
     * Creates a global position strategy.
     * @return {?}
     */
    OverlayPositionBuilder.prototype.global = /**
     * Creates a global position strategy.
     * @return {?}
     */
    function () {
        return new GlobalPositionStrategy();
    };
    /**
     * Creates a relative position strategy.
     * @param elementRef
     * @param originPos
     * @param overlayPos
     * @deprecated Use `flexibleConnectedTo` instead.
     * @deletion-target 7.0.0
     */
    /**
     * Creates a relative position strategy.
     * @deprecated Use `flexibleConnectedTo` instead.
     * \@deletion-target 7.0.0
     * @param {?} elementRef
     * @param {?} originPos
     * @param {?} overlayPos
     * @return {?}
     */
    OverlayPositionBuilder.prototype.connectedTo = /**
     * Creates a relative position strategy.
     * @deprecated Use `flexibleConnectedTo` instead.
     * \@deletion-target 7.0.0
     * @param {?} elementRef
     * @param {?} originPos
     * @param {?} overlayPos
     * @return {?}
     */
    function (elementRef, originPos, overlayPos) {
        return new ConnectedPositionStrategy(originPos, overlayPos, elementRef, this._viewportRuler, this._document);
    };
    /**
     * Creates a flexible position strategy.
     * @param elementRef
     */
    /**
     * Creates a flexible position strategy.
     * @param {?} elementRef
     * @return {?}
     */
    OverlayPositionBuilder.prototype.flexibleConnectedTo = /**
     * Creates a flexible position strategy.
     * @param {?} elementRef
     * @return {?}
     */
    function (elementRef) {
        return new FlexibleConnectedPositionStrategy(elementRef, this._viewportRuler, this._document, this._platform);
    };
    OverlayPositionBuilder.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    OverlayPositionBuilder.ctorParameters = function () { return [
        { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ViewportRuler"], },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"],] },] },
        { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] },] },
    ]; };
    /** @nocollapse */ OverlayPositionBuilder.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function OverlayPositionBuilder_Factory() { return new OverlayPositionBuilder(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ViewportRuler"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"], 8)); }, token: OverlayPositionBuilder, providedIn: "root" });
    return OverlayPositionBuilder;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Next overlay unique ID.
 */
var /** @type {?} */ nextUniqueId = 0;
/**
 * Service to create Overlays. Overlays are dynamically added pieces of floating UI, meant to be
 * used as a low-level building block for other components. Dialogs, tooltips, menus,
 * selects, etc. can all be built using overlays. The service should primarily be used by authors
 * of re-usable components rather than developers building end-user applications.
 *
 * An overlay *is* a PortalOutlet, so any kind of Portal can be loaded into one.
 */
var Overlay = /** @class */ (function () {
    function Overlay(scrollStrategies, _overlayContainer, _componentFactoryResolver, _positionBuilder, _keyboardDispatcher, _injector, _ngZone, _document, _directionality) {
        this.scrollStrategies = scrollStrategies;
        this._overlayContainer = _overlayContainer;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._positionBuilder = _positionBuilder;
        this._keyboardDispatcher = _keyboardDispatcher;
        this._injector = _injector;
        this._ngZone = _ngZone;
        this._document = _document;
        this._directionality = _directionality;
    }
    /**
     * Creates an overlay.
     * @param config Configuration applied to the overlay.
     * @returns Reference to the created overlay.
     */
    /**
     * Creates an overlay.
     * @param {?=} config Configuration applied to the overlay.
     * @return {?} Reference to the created overlay.
     */
    Overlay.prototype.create = /**
     * Creates an overlay.
     * @param {?=} config Configuration applied to the overlay.
     * @return {?} Reference to the created overlay.
     */
    function (config) {
        var /** @type {?} */ host = this._createHostElement();
        var /** @type {?} */ pane = this._createPaneElement(host);
        var /** @type {?} */ portalOutlet = this._createPortalOutlet(pane);
        var /** @type {?} */ overlayConfig = new OverlayConfig(config);
        overlayConfig.direction = overlayConfig.direction || this._directionality.value;
        return new OverlayRef(portalOutlet, host, pane, overlayConfig, this._ngZone, this._keyboardDispatcher, this._document);
    };
    /**
     * Gets a position builder that can be used, via fluent API,
     * to construct and configure a position strategy.
     * @returns An overlay position builder.
     */
    /**
     * Gets a position builder that can be used, via fluent API,
     * to construct and configure a position strategy.
     * @return {?} An overlay position builder.
     */
    Overlay.prototype.position = /**
     * Gets a position builder that can be used, via fluent API,
     * to construct and configure a position strategy.
     * @return {?} An overlay position builder.
     */
    function () {
        return this._positionBuilder;
    };
    /**
     * Creates the DOM element for an overlay and appends it to the overlay container.
     * @param {?} host
     * @return {?} Newly-created pane element
     */
    Overlay.prototype._createPaneElement = /**
     * Creates the DOM element for an overlay and appends it to the overlay container.
     * @param {?} host
     * @return {?} Newly-created pane element
     */
    function (host) {
        var /** @type {?} */ pane = this._document.createElement('div');
        pane.id = "cdk-overlay-" + nextUniqueId++;
        pane.classList.add('cdk-overlay-pane');
        host.appendChild(pane);
        return pane;
    };
    /**
     * Creates the host element that wraps around an overlay
     * and can be used for advanced positioning.
     * @return {?} Newly-create host element.
     */
    Overlay.prototype._createHostElement = /**
     * Creates the host element that wraps around an overlay
     * and can be used for advanced positioning.
     * @return {?} Newly-create host element.
     */
    function () {
        var /** @type {?} */ host = this._document.createElement('div');
        this._overlayContainer.getContainerElement().appendChild(host);
        return host;
    };
    /**
     * Create a DomPortalOutlet into which the overlay content can be loaded.
     * @param {?} pane The DOM element to turn into a portal outlet.
     * @return {?} A portal outlet for the given DOM element.
     */
    Overlay.prototype._createPortalOutlet = /**
     * Create a DomPortalOutlet into which the overlay content can be loaded.
     * @param {?} pane The DOM element to turn into a portal outlet.
     * @return {?} A portal outlet for the given DOM element.
     */
    function (pane) {
        // We have to resolve the ApplicationRef later in order to allow people
        // to use overlay-based providers during app initialization.
        if (!this._appRef) {
            this._appRef = this._injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]);
        }
        return new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_9__["DomPortalOutlet"](pane, this._componentFactoryResolver, this._appRef, this._injector);
    };
    Overlay.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    Overlay.ctorParameters = function () { return [
        { type: ScrollStrategyOptions, },
        { type: OverlayContainer, },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], },
        { type: OverlayPositionBuilder, },
        { type: OverlayKeyboardDispatcher, },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"],] },] },
        { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"], },
    ]; };
    return Overlay;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Default set of positions for the overlay. Follows the behavior of a dropdown.
 */
var /** @type {?} */ defaultPositionList = [
    {
        originX: 'start',
        originY: 'bottom',
        overlayX: 'start',
        overlayY: 'top'
    },
    {
        originX: 'start',
        originY: 'top',
        overlayX: 'start',
        overlayY: 'bottom'
    },
    {
        originX: 'end',
        originY: 'top',
        overlayX: 'end',
        overlayY: 'bottom'
    },
    {
        originX: 'end',
        originY: 'bottom',
        overlayX: 'end',
        overlayY: 'top'
    }
];
/**
 * Injection token that determines the scroll handling while the connected overlay is open.
 */
var /** @type {?} */ CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('cdk-connected-overlay-scroll-strategy');
/**
 * Directive applied to an element to make it usable as an origin for an Overlay using a
 * ConnectedPositionStrategy.
 */
var CdkOverlayOrigin = /** @class */ (function () {
    function CdkOverlayOrigin(elementRef) {
        this.elementRef = elementRef;
    }
    CdkOverlayOrigin.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[cdk-overlay-origin], [overlay-origin], [cdkOverlayOrigin]',
                    exportAs: 'cdkOverlayOrigin',
                },] },
    ];
    /** @nocollapse */
    CdkOverlayOrigin.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
    ]; };
    return CdkOverlayOrigin;
}());
/**
 * Directive to facilitate declarative creation of an
 * Overlay using a FlexibleConnectedPositionStrategy.
 */
var CdkConnectedOverlay = /** @class */ (function () {
    // TODO(jelbourn): inputs for size, scroll behavior, animation, etc.
    function CdkConnectedOverlay(_overlay, templateRef, viewContainerRef, _scrollStrategy, _dir) {
        this._overlay = _overlay;
        this._scrollStrategy = _scrollStrategy;
        this._dir = _dir;
        this._hasBackdrop = false;
        this._lockPosition = false;
        this._growAfterOpen = false;
        this._flexibleDimensions = false;
        this._push = false;
        this._backdropSubscription = rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"].EMPTY;
        /**
         * Margin between the overlay and the viewport edges.
         */
        this.viewportMargin = 0;
        /**
         * Strategy to be used when handling scroll events while the overlay is open.
         */
        this.scrollStrategy = this._scrollStrategy();
        /**
         * Whether the overlay is open.
         */
        this.open = false;
        /**
         * Event emitted when the backdrop is clicked.
         */
        this.backdropClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Event emitted when the position has changed.
         */
        this.positionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Event emitted when the overlay has been attached.
         */
        this.attach = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Event emitted when the overlay has been detached.
         */
        this.detach = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._templatePortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_9__["TemplatePortal"](templateRef, viewContainerRef);
    }
    Object.defineProperty(CdkConnectedOverlay.prototype, "offsetX", {
        get: /**
         * The offset in pixels for the overlay connection point on the x-axis
         * @return {?}
         */
        function () { return this._offsetX; },
        set: /**
         * @param {?} offsetX
         * @return {?}
         */
        function (offsetX) {
            this._offsetX = offsetX;
            if (this._position) {
                this._setPositions(this._position);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkConnectedOverlay.prototype, "offsetY", {
        get: /**
         * The offset in pixels for the overlay connection point on the y-axis
         * @return {?}
         */
        function () { return this._offsetY; },
        set: /**
         * @param {?} offsetY
         * @return {?}
         */
        function (offsetY) {
            this._offsetY = offsetY;
            if (this._position) {
                this._setPositions(this._position);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkConnectedOverlay.prototype, "hasBackdrop", {
        get: /**
         * Whether or not the overlay should attach a backdrop.
         * @return {?}
         */
        function () { return this._hasBackdrop; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._hasBackdrop = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkConnectedOverlay.prototype, "lockPosition", {
        get: /**
         * Whether or not the overlay should be locked when scrolling.
         * @return {?}
         */
        function () { return this._lockPosition; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._lockPosition = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkConnectedOverlay.prototype, "flexibleDiemsions", {
        get: /**
         * Whether the overlay's width and height can be constrained to fit within the viewport.
         * @return {?}
         */
        function () { return this._flexibleDimensions; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._flexibleDimensions = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkConnectedOverlay.prototype, "growAfterOpen", {
        get: /**
         * Whether the overlay can grow after the initial open when flexible positioning is turned on.
         * @return {?}
         */
        function () { return this._growAfterOpen; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._growAfterOpen = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkConnectedOverlay.prototype, "push", {
        get: /**
         * Whether the overlay can be pushed on-screen if none of the provided positions fit.
         * @return {?}
         */
        function () { return this._push; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._push = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkConnectedOverlay.prototype, "overlayRef", {
        /** The associated overlay reference. */
        get: /**
         * The associated overlay reference.
         * @return {?}
         */
        function () {
            return this._overlayRef;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkConnectedOverlay.prototype, "dir", {
        /** The element's layout direction. */
        get: /**
         * The element's layout direction.
         * @return {?}
         */
        function () {
            return this._dir ? this._dir.value : 'ltr';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CdkConnectedOverlay.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._destroyOverlay();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    CdkConnectedOverlay.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (this._position) {
            if (changes['positions'] || changes['_deprecatedPositions']) {
                this._position.withPositions(this.positions);
            }
            if (changes['lockPosition']) {
                this._position.withLockedPosition(this.lockPosition);
            }
            if (changes['origin'] || changes['_deprecatedOrigin']) {
                this._position.setOrigin(this.origin.elementRef);
                if (this.open) {
                    this._position.apply();
                }
            }
        }
        if (changes['open'] || changes['_deprecatedOpen']) {
            this.open ? this._attachOverlay() : this._detachOverlay();
        }
    };
    /**
     * Creates an overlay
     * @return {?}
     */
    CdkConnectedOverlay.prototype._createOverlay = /**
     * Creates an overlay
     * @return {?}
     */
    function () {
        if (!this.positions || !this.positions.length) {
            this.positions = defaultPositionList;
        }
        this._overlayRef = this._overlay.create(this._buildConfig());
    };
    /**
     * Builds the overlay config based on the directive's inputs
     * @return {?}
     */
    CdkConnectedOverlay.prototype._buildConfig = /**
     * Builds the overlay config based on the directive's inputs
     * @return {?}
     */
    function () {
        var /** @type {?} */ positionStrategy = this._position = this._createPositionStrategy();
        var /** @type {?} */ overlayConfig = new OverlayConfig({
            positionStrategy: positionStrategy,
            scrollStrategy: this.scrollStrategy,
            hasBackdrop: this.hasBackdrop
        });
        if (this.width || this.width === 0) {
            overlayConfig.width = this.width;
        }
        if (this.height || this.height === 0) {
            overlayConfig.height = this.height;
        }
        if (this.minWidth || this.minWidth === 0) {
            overlayConfig.minWidth = this.minWidth;
        }
        if (this.minHeight || this.minHeight === 0) {
            overlayConfig.minHeight = this.minHeight;
        }
        if (this.backdropClass) {
            overlayConfig.backdropClass = this.backdropClass;
        }
        return overlayConfig;
    };
    /**
     * Returns the position strategy of the overlay to be set on the overlay config
     * @return {?}
     */
    CdkConnectedOverlay.prototype._createPositionStrategy = /**
     * Returns the position strategy of the overlay to be set on the overlay config
     * @return {?}
     */
    function () {
        var _this = this;
        var /** @type {?} */ strategy = this._overlay.position()
            .flexibleConnectedTo(this.origin.elementRef)
            .withFlexibleDimensions(this.flexibleDiemsions)
            .withPush(this.push)
            .withGrowAfterOpen(this.growAfterOpen)
            .withViewportMargin(this.viewportMargin)
            .withLockedPosition(this.lockPosition);
        this._setPositions(strategy);
        strategy.positionChanges.subscribe(function (p) { return _this.positionChange.emit(p); });
        return strategy;
    };
    /**
     * Sets the primary and fallback positions of a positions strategy,
     * based on the current directive inputs.
     * @param {?} positionStrategy
     * @return {?}
     */
    CdkConnectedOverlay.prototype._setPositions = /**
     * Sets the primary and fallback positions of a positions strategy,
     * based on the current directive inputs.
     * @param {?} positionStrategy
     * @return {?}
     */
    function (positionStrategy) {
        var _this = this;
        var /** @type {?} */ positions = this.positions.map(function (pos) {
            return ({
                originX: pos.originX,
                originY: pos.originY,
                overlayX: pos.overlayX,
                overlayY: pos.overlayY,
                offsetX: pos.offsetX || _this.offsetX,
                offsetY: pos.offsetY || _this.offsetY
            });
        });
        positionStrategy.withPositions(positions);
    };
    /**
     * Attaches the overlay and subscribes to backdrop clicks if backdrop exists
     * @return {?}
     */
    CdkConnectedOverlay.prototype._attachOverlay = /**
     * Attaches the overlay and subscribes to backdrop clicks if backdrop exists
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this._overlayRef) {
            this._createOverlay(); /** @type {?} */
            ((this._overlayRef)).keydownEvents().subscribe(function (event) {
                if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["ESCAPE"]) {
                    _this._detachOverlay();
                }
            });
        }
        else {
            // Update the overlay size, in case the directive's inputs have changed
            this._overlayRef.updateSize({
                width: this.width,
                minWidth: this.minWidth,
                height: this.height,
                minHeight: this.minHeight,
            });
        }
        this._overlayRef.setDirection(this.dir);
        if (!this._overlayRef.hasAttached()) {
            this._overlayRef.attach(this._templatePortal);
            this.attach.emit();
        }
        if (this.hasBackdrop) {
            this._backdropSubscription = this._overlayRef.backdropClick().subscribe(function (event) {
                _this.backdropClick.emit(event);
            });
        }
    };
    /**
     * Detaches the overlay and unsubscribes to backdrop clicks if backdrop exists
     * @return {?}
     */
    CdkConnectedOverlay.prototype._detachOverlay = /**
     * Detaches the overlay and unsubscribes to backdrop clicks if backdrop exists
     * @return {?}
     */
    function () {
        if (this._overlayRef) {
            this._overlayRef.detach();
            this.detach.emit();
        }
        this._backdropSubscription.unsubscribe();
    };
    /**
     * Destroys the overlay created by this directive.
     * @return {?}
     */
    CdkConnectedOverlay.prototype._destroyOverlay = /**
     * Destroys the overlay created by this directive.
     * @return {?}
     */
    function () {
        if (this._overlayRef) {
            this._overlayRef.dispose();
        }
        this._backdropSubscription.unsubscribe();
    };
    CdkConnectedOverlay.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[cdk-connected-overlay], [connected-overlay], [cdkConnectedOverlay]',
                    exportAs: 'cdkConnectedOverlay'
                },] },
    ];
    /** @nocollapse */
    CdkConnectedOverlay.ctorParameters = function () { return [
        { type: Overlay, },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY,] },] },
        { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] },] },
    ]; };
    CdkConnectedOverlay.propDecorators = {
        "origin": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkConnectedOverlayOrigin',] },],
        "positions": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkConnectedOverlayPositions',] },],
        "offsetX": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkConnectedOverlayOffsetX',] },],
        "offsetY": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkConnectedOverlayOffsetY',] },],
        "width": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkConnectedOverlayWidth',] },],
        "height": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkConnectedOverlayHeight',] },],
        "minWidth": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkConnectedOverlayMinWidth',] },],
        "minHeight": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkConnectedOverlayMinHeight',] },],
        "backdropClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkConnectedOverlayBackdropClass',] },],
        "viewportMargin": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkConnectedOverlayViewportMargin',] },],
        "scrollStrategy": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkConnectedOverlayScrollStrategy',] },],
        "open": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkConnectedOverlayOpen',] },],
        "hasBackdrop": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkConnectedOverlayHasBackdrop',] },],
        "lockPosition": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkConnectedOverlayLockPosition',] },],
        "flexibleDiemsions": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkConnectedOverlayFlexibleDimensions',] },],
        "growAfterOpen": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkConnectedOverlayGrowAfterOpen',] },],
        "push": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkConnectedOverlayPush',] },],
        "backdropClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "positionChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "attach": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "detach": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return CdkConnectedOverlay;
}());
/**
 * \@docs-private
 * @param {?} overlay
 * @return {?}
 */
function CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay) {
    return function () { return overlay.scrollStrategies.reposition(); };
}
/**
 * \@docs-private
 */
var /** @type {?} */ CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER = {
    provide: CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY,
    deps: [Overlay],
    useFactory: CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER_FACTORY,
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var OverlayModule = /** @class */ (function () {
    function OverlayModule() {
    }
    OverlayModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["BidiModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_9__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ScrollDispatchModule"]],
                    exports: [CdkConnectedOverlay, CdkOverlayOrigin, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ScrollDispatchModule"]],
                    declarations: [CdkConnectedOverlay, CdkOverlayOrigin],
                    providers: [
                        Overlay,
                        CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER,
                    ],
                },] },
    ];
    return OverlayModule;
}());
/**
 * @deprecated Use `OverlayModule` instead.
 * \@deletion-target 7.0.0
 */
var /** @type {?} */ OVERLAY_PROVIDERS = [
    Overlay,
    OverlayPositionBuilder,
    OVERLAY_KEYBOARD_DISPATCHER_PROVIDER,
    _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["VIEWPORT_RULER_PROVIDER"],
    OVERLAY_CONTAINER_PROVIDER,
    CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Alternative to OverlayContainer that supports correct displaying of overlay elements in
 * Fullscreen mode
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/requestFullScreen
 *
 * Should be provided in the root component.
 */
var FullscreenOverlayContainer = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__extends"])(FullscreenOverlayContainer, _super);
    function FullscreenOverlayContainer(_document) {
        return _super.call(this, _document) || this;
    }
    /**
     * @return {?}
     */
    FullscreenOverlayContainer.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngOnDestroy.call(this);
        if (this._fullScreenEventName && this._fullScreenListener) {
            this._document.removeEventListener(this._fullScreenEventName, this._fullScreenListener);
        }
    };
    /**
     * @return {?}
     */
    FullscreenOverlayContainer.prototype._createContainer = /**
     * @return {?}
     */
    function () {
        var _this = this;
        _super.prototype._createContainer.call(this);
        this._adjustParentForFullscreenChange();
        this._addFullscreenChangeListener(function () { return _this._adjustParentForFullscreenChange(); });
    };
    /**
     * @return {?}
     */
    FullscreenOverlayContainer.prototype._adjustParentForFullscreenChange = /**
     * @return {?}
     */
    function () {
        if (!this._containerElement) {
            return;
        }
        var /** @type {?} */ fullscreenElement = this.getFullscreenElement();
        var /** @type {?} */ parent = fullscreenElement || this._document.body;
        parent.appendChild(this._containerElement);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    FullscreenOverlayContainer.prototype._addFullscreenChangeListener = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        var /** @type {?} */ eventName = this._getEventName();
        if (eventName) {
            if (this._fullScreenListener) {
                this._document.removeEventListener(eventName, this._fullScreenListener);
            }
            this._document.addEventListener(eventName, fn);
            this._fullScreenListener = fn;
        }
    };
    /**
     * @return {?}
     */
    FullscreenOverlayContainer.prototype._getEventName = /**
     * @return {?}
     */
    function () {
        if (!this._fullScreenEventName) {
            if (this._document.fullscreenEnabled) {
                this._fullScreenEventName = 'fullscreenchange';
            }
            else if (this._document.webkitFullscreenEnabled) {
                this._fullScreenEventName = 'webkitfullscreenchange';
            }
            else if ((/** @type {?} */ (this._document)).mozFullScreenEnabled) {
                this._fullScreenEventName = 'mozfullscreenchange';
            }
            else if ((/** @type {?} */ (this._document)).msFullscreenEnabled) {
                this._fullScreenEventName = 'MSFullscreenChange';
            }
        }
        return this._fullScreenEventName;
    };
    /**
     * When the page is put into fullscreen mode, a specific element is specified.
     * Only that element and its children are visible when in fullscreen mode.
     */
    /**
     * When the page is put into fullscreen mode, a specific element is specified.
     * Only that element and its children are visible when in fullscreen mode.
     * @return {?}
     */
    FullscreenOverlayContainer.prototype.getFullscreenElement = /**
     * When the page is put into fullscreen mode, a specific element is specified.
     * Only that element and its children are visible when in fullscreen mode.
     * @return {?}
     */
    function () {
        return this._document.fullscreenElement ||
            this._document.webkitFullscreenElement ||
            (/** @type {?} */ (this._document)).mozFullScreenElement ||
            (/** @type {?} */ (this._document)).msFullscreenElement ||
            null;
    };
    FullscreenOverlayContainer.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    FullscreenOverlayContainer.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"],] },] },
    ]; };
    return FullscreenOverlayContainer;
}(OverlayContainer));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */


//# sourceMappingURL=overlay.es5.js.map


/***/ }),

/***/ "./node_modules/@angular/cdk/esm5/platform.es5.js":
/*!********************************************************!*\
  !*** ./node_modules/@angular/cdk/esm5/platform.es5.js ***!
  \********************************************************/
/*! exports provided: Platform, supportsPassiveEventListeners, getSupportedInputTypes, PlatformModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Platform", function() { return Platform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsPassiveEventListeners", function() { return supportsPassiveEventListeners; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSupportedInputTypes", function() { return getSupportedInputTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlatformModule", function() { return PlatformModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// Whether the current platform supports the V8 Break Iterator. The V8 check
// is necessary to detect all Blink based browsers.
var /** @type {?} */ hasV8BreakIterator = (typeof Intl !== 'undefined' && (/** @type {?} */ (Intl)).v8BreakIterator);
/**
 * Service to detect the current platform by comparing the userAgent strings and
 * checking browser-specific global properties.
 */
var Platform = /** @class */ (function () {
    /**
     * @deletion-target v7.0.0 remove optional decorator
     */
    function Platform(_platformId) {
        this._platformId = _platformId;
        /**
         * Whether the Angular application is being rendered in the browser.
         * We want to use the Angular platform check because if the Document is shimmed
         * without the navigator, the following checks will fail. This is preferred because
         * sometimes the Document may be shimmed without the user's knowledge or intention
         */
        this.isBrowser = this._platformId ?
            Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this._platformId) : typeof document === 'object' && !!document;
        /**
         * Whether the current browser is Microsoft Edge.
         */
        this.EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent);
        /**
         * Whether the current rendering engine is Microsoft Trident.
         */
        this.TRIDENT = this.isBrowser && /(msie|trident)/i.test(navigator.userAgent);
        /**
         * Whether the current rendering engine is Blink.
         */
        this.BLINK = this.isBrowser && (!!((/** @type {?} */ (window)).chrome || hasV8BreakIterator) &&
            typeof CSS !== 'undefined' && !this.EDGE && !this.TRIDENT);
        /**
         * Whether the current rendering engine is WebKit.
         */
        this.WEBKIT = this.isBrowser &&
            /AppleWebKit/i.test(navigator.userAgent) && !this.BLINK && !this.EDGE && !this.TRIDENT;
        /**
         * Whether the current platform is Apple iOS.
         */
        this.IOS = this.isBrowser && /iPad|iPhone|iPod/.test(navigator.userAgent) &&
            !(/** @type {?} */ (window)).MSStream;
        /**
         * Whether the current browser is Firefox.
         */
        this.FIREFOX = this.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent);
        /**
         * Whether the current platform is Android.
         */
        this.ANDROID = this.isBrowser && /android/i.test(navigator.userAgent) && !this.TRIDENT;
        /**
         * Whether the current browser is Safari.
         */
        this.SAFARI = this.isBrowser && /safari/i.test(navigator.userAgent) && this.WEBKIT;
    }
    Platform.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    Platform.ctorParameters = function () { return [
        { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] },] },
    ]; };
    /** @nocollapse */ Platform.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function Platform_Factory() { return new Platform(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], 8)); }, token: Platform, providedIn: "root" });
    return Platform;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * Cached result of whether the user's browser supports passive event listeners.
 */
var /** @type {?} */ supportsPassiveEvents;
/**
 * Checks whether the user's browser supports passive event listeners.
 * See: https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
 * @return {?}
 */
function supportsPassiveEventListeners() {
    if (supportsPassiveEvents == null && typeof window !== 'undefined') {
        try {
            window.addEventListener('test', /** @type {?} */ ((null)), Object.defineProperty({}, 'passive', {
                get: function () { return supportsPassiveEvents = true; }
            }));
        }
        finally {
            supportsPassiveEvents = supportsPassiveEvents || false;
        }
    }
    return supportsPassiveEvents;
}
/**
 * Cached result Set of input types support by the current browser.
 */
var /** @type {?} */ supportedInputTypes;
/**
 * Types of `<input>` that *might* be supported.
 */
var /** @type {?} */ candidateInputTypes = [
    'color',
    'button',
    'checkbox',
    'date',
    'datetime-local',
    'email',
    'file',
    'hidden',
    'image',
    'month',
    'number',
    'password',
    'radio',
    'range',
    'reset',
    'search',
    'submit',
    'tel',
    'text',
    'time',
    'url',
    'week',
];
/**
 * @return {?} The input types supported by this browser.
 */
function getSupportedInputTypes() {
    // Result is cached.
    if (supportedInputTypes) {
        return supportedInputTypes;
    }
    // We can't check if an input type is not supported until we're on the browser, so say that
    // everything is supported when not on the browser. We don't use `Platform` here since it's
    // just a helper function and can't inject it.
    if (typeof document !== 'object' || !document) {
        supportedInputTypes = new Set(candidateInputTypes);
        return supportedInputTypes;
    }
    var /** @type {?} */ featureTestInput = document.createElement('input');
    supportedInputTypes = new Set(candidateInputTypes.filter(function (value) {
        featureTestInput.setAttribute('type', value);
        return featureTestInput.type === value;
    }));
    return supportedInputTypes;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var PlatformModule = /** @class */ (function () {
    function PlatformModule() {
    }
    PlatformModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"] },
    ];
    return PlatformModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */


//# sourceMappingURL=platform.es5.js.map


/***/ }),

/***/ "./node_modules/@angular/cdk/esm5/portal.es5.js":
/*!******************************************************!*\
  !*** ./node_modules/@angular/cdk/esm5/portal.es5.js ***!
  \******************************************************/
/*! exports provided: DomPortalHost, PortalHostDirective, TemplatePortalDirective, BasePortalHost, Portal, ComponentPortal, TemplatePortal, BasePortalOutlet, DomPortalOutlet, CdkPortal, CdkPortalOutlet, PortalModule, PortalInjector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomPortalHost", function() { return DomPortalOutlet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortalHostDirective", function() { return CdkPortalOutlet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplatePortalDirective", function() { return CdkPortal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasePortalHost", function() { return BasePortalOutlet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Portal", function() { return Portal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentPortal", function() { return ComponentPortal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplatePortal", function() { return TemplatePortal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasePortalOutlet", function() { return BasePortalOutlet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomPortalOutlet", function() { return DomPortalOutlet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkPortal", function() { return CdkPortal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkPortalOutlet", function() { return CdkPortalOutlet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortalModule", function() { return PortalModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortalInjector", function() { return PortalInjector; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * Throws an exception when attempting to attach a null portal to a host.
 * \@docs-private
 * @return {?}
 */
function throwNullPortalError() {
    throw Error('Must provide a portal to attach');
}
/**
 * Throws an exception when attempting to attach a portal to a host that is already attached.
 * \@docs-private
 * @return {?}
 */
function throwPortalAlreadyAttachedError() {
    throw Error('Host already has a portal attached');
}
/**
 * Throws an exception when attempting to attach a portal to an already-disposed host.
 * \@docs-private
 * @return {?}
 */
function throwPortalOutletAlreadyDisposedError() {
    throw Error('This PortalOutlet has already been disposed');
}
/**
 * Throws an exception when attempting to attach an unknown portal type.
 * \@docs-private
 * @return {?}
 */
function throwUnknownPortalTypeError() {
    throw Error('Attempting to attach an unknown Portal type. BasePortalOutlet accepts either ' +
        'a ComponentPortal or a TemplatePortal.');
}
/**
 * Throws an exception when attempting to attach a portal to a null host.
 * \@docs-private
 * @return {?}
 */
function throwNullPortalOutletError() {
    throw Error('Attempting to attach a portal to a null PortalOutlet');
}
/**
 * Throws an exception when attempting to detach a portal that is not attached.
 * \@docs-private
 * @return {?}
 */
function throwNoPortalAttachedError() {
    throw Error('Attempting to detach a portal that is not attached to a host');
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * A `Portal` is something that you want to render somewhere else.
 * It can be attach to / detached from a `PortalOutlet`.
 * @abstract
 * @template T
 */
var  /**
 * A `Portal` is something that you want to render somewhere else.
 * It can be attach to / detached from a `PortalOutlet`.
 * @abstract
 * @template T
 */
Portal = /** @class */ (function () {
    function Portal() {
    }
    /** Attach this portal to a host. */
    /**
     * Attach this portal to a host.
     * @param {?} host
     * @return {?}
     */
    Portal.prototype.attach = /**
     * Attach this portal to a host.
     * @param {?} host
     * @return {?}
     */
    function (host) {
        if (host == null) {
            throwNullPortalOutletError();
        }
        if (host.hasAttached()) {
            throwPortalAlreadyAttachedError();
        }
        this._attachedHost = host;
        return /** @type {?} */ (host.attach(this));
    };
    /** Detach this portal from its host */
    /**
     * Detach this portal from its host
     * @return {?}
     */
    Portal.prototype.detach = /**
     * Detach this portal from its host
     * @return {?}
     */
    function () {
        var /** @type {?} */ host = this._attachedHost;
        if (host == null) {
            throwNoPortalAttachedError();
        }
        else {
            this._attachedHost = null;
            host.detach();
        }
    };
    Object.defineProperty(Portal.prototype, "isAttached", {
        /** Whether this portal is attached to a host. */
        get: /**
         * Whether this portal is attached to a host.
         * @return {?}
         */
        function () {
            return this._attachedHost != null;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Sets the PortalOutlet reference without performing `attach()`. This is used directly by
     * the PortalOutlet when it is performing an `attach()` or `detach()`.
     */
    /**
     * Sets the PortalOutlet reference without performing `attach()`. This is used directly by
     * the PortalOutlet when it is performing an `attach()` or `detach()`.
     * @param {?} host
     * @return {?}
     */
    Portal.prototype.setAttachedHost = /**
     * Sets the PortalOutlet reference without performing `attach()`. This is used directly by
     * the PortalOutlet when it is performing an `attach()` or `detach()`.
     * @param {?} host
     * @return {?}
     */
    function (host) {
        this._attachedHost = host;
    };
    return Portal;
}());
/**
 * A `ComponentPortal` is a portal that instantiates some Component upon attachment.
 * @template T
 */
var  /**
 * A `ComponentPortal` is a portal that instantiates some Component upon attachment.
 * @template T
 */
ComponentPortal = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ComponentPortal, _super);
    function ComponentPortal(component, viewContainerRef, injector) {
        var _this = _super.call(this) || this;
        _this.component = component;
        _this.viewContainerRef = viewContainerRef;
        _this.injector = injector;
        return _this;
    }
    return ComponentPortal;
}(Portal));
/**
 * A `TemplatePortal` is a portal that represents some embedded template (TemplateRef).
 * @template C
 */
var  /**
 * A `TemplatePortal` is a portal that represents some embedded template (TemplateRef).
 * @template C
 */
TemplatePortal = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(TemplatePortal, _super);
    function TemplatePortal(template, viewContainerRef, context) {
        var _this = _super.call(this) || this;
        _this.templateRef = template;
        _this.viewContainerRef = viewContainerRef;
        _this.context = context;
        return _this;
    }
    Object.defineProperty(TemplatePortal.prototype, "origin", {
        get: /**
         * @return {?}
         */
        function () {
            return this.templateRef.elementRef;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Attach the the portal to the provided `PortalOutlet`.
     * When a context is provided it will override the `context` property of the `TemplatePortal`
     * instance.
     */
    /**
     * Attach the the portal to the provided `PortalOutlet`.
     * When a context is provided it will override the `context` property of the `TemplatePortal`
     * instance.
     * @param {?} host
     * @param {?=} context
     * @return {?}
     */
    TemplatePortal.prototype.attach = /**
     * Attach the the portal to the provided `PortalOutlet`.
     * When a context is provided it will override the `context` property of the `TemplatePortal`
     * instance.
     * @param {?} host
     * @param {?=} context
     * @return {?}
     */
    function (host, context) {
        if (context === void 0) { context = this.context; }
        this.context = context;
        return _super.prototype.attach.call(this, host);
    };
    /**
     * @return {?}
     */
    TemplatePortal.prototype.detach = /**
     * @return {?}
     */
    function () {
        this.context = undefined;
        return _super.prototype.detach.call(this);
    };
    return TemplatePortal;
}(Portal));
/**
 * Partial implementation of PortalOutlet that handles attaching
 * ComponentPortal and TemplatePortal.
 * @abstract
 */
var  /**
 * Partial implementation of PortalOutlet that handles attaching
 * ComponentPortal and TemplatePortal.
 * @abstract
 */
BasePortalOutlet = /** @class */ (function () {
    function BasePortalOutlet() {
        /**
         * Whether this host has already been permanently disposed.
         */
        this._isDisposed = false;
    }
    /** Whether this host has an attached portal. */
    /**
     * Whether this host has an attached portal.
     * @return {?}
     */
    BasePortalOutlet.prototype.hasAttached = /**
     * Whether this host has an attached portal.
     * @return {?}
     */
    function () {
        return !!this._attachedPortal;
    };
    /** Attaches a portal. */
    /**
     * Attaches a portal.
     * @param {?} portal
     * @return {?}
     */
    BasePortalOutlet.prototype.attach = /**
     * Attaches a portal.
     * @param {?} portal
     * @return {?}
     */
    function (portal) {
        if (!portal) {
            throwNullPortalError();
        }
        if (this.hasAttached()) {
            throwPortalAlreadyAttachedError();
        }
        if (this._isDisposed) {
            throwPortalOutletAlreadyDisposedError();
        }
        if (portal instanceof ComponentPortal) {
            this._attachedPortal = portal;
            return this.attachComponentPortal(portal);
        }
        else if (portal instanceof TemplatePortal) {
            this._attachedPortal = portal;
            return this.attachTemplatePortal(portal);
        }
        throwUnknownPortalTypeError();
    };
    /** Detaches a previously attached portal. */
    /**
     * Detaches a previously attached portal.
     * @return {?}
     */
    BasePortalOutlet.prototype.detach = /**
     * Detaches a previously attached portal.
     * @return {?}
     */
    function () {
        if (this._attachedPortal) {
            this._attachedPortal.setAttachedHost(null);
            this._attachedPortal = null;
        }
        this._invokeDisposeFn();
    };
    /** Permanently dispose of this portal host. */
    /**
     * Permanently dispose of this portal host.
     * @return {?}
     */
    BasePortalOutlet.prototype.dispose = /**
     * Permanently dispose of this portal host.
     * @return {?}
     */
    function () {
        if (this.hasAttached()) {
            this.detach();
        }
        this._invokeDisposeFn();
        this._isDisposed = true;
    };
    /** @docs-private */
    /**
     * \@docs-private
     * @param {?} fn
     * @return {?}
     */
    BasePortalOutlet.prototype.setDisposeFn = /**
     * \@docs-private
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._disposeFn = fn;
    };
    /**
     * @return {?}
     */
    BasePortalOutlet.prototype._invokeDisposeFn = /**
     * @return {?}
     */
    function () {
        if (this._disposeFn) {
            this._disposeFn();
            this._disposeFn = null;
        }
    };
    return BasePortalOutlet;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * A PortalOutlet for attaching portals to an arbitrary DOM element outside of the Angular
 * application context.
 */
var  /**
 * A PortalOutlet for attaching portals to an arbitrary DOM element outside of the Angular
 * application context.
 */
DomPortalOutlet = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DomPortalOutlet, _super);
    function DomPortalOutlet(outletElement, _componentFactoryResolver, _appRef, _defaultInjector) {
        var _this = _super.call(this) || this;
        _this.outletElement = outletElement;
        _this._componentFactoryResolver = _componentFactoryResolver;
        _this._appRef = _appRef;
        _this._defaultInjector = _defaultInjector;
        return _this;
    }
    /**
     * Attach the given ComponentPortal to DOM element using the ComponentFactoryResolver.
     * @param portal Portal to be attached
     * @returns Reference to the created component.
     */
    /**
     * Attach the given ComponentPortal to DOM element using the ComponentFactoryResolver.
     * @template T
     * @param {?} portal Portal to be attached
     * @return {?} Reference to the created component.
     */
    DomPortalOutlet.prototype.attachComponentPortal = /**
     * Attach the given ComponentPortal to DOM element using the ComponentFactoryResolver.
     * @template T
     * @param {?} portal Portal to be attached
     * @return {?} Reference to the created component.
     */
    function (portal) {
        var _this = this;
        var /** @type {?} */ componentFactory = this._componentFactoryResolver.resolveComponentFactory(portal.component);
        var /** @type {?} */ componentRef;
        // If the portal specifies a ViewContainerRef, we will use that as the attachment point
        // for the component (in terms of Angular's component tree, not rendering).
        // When the ViewContainerRef is missing, we use the factory to create the component directly
        // and then manually attach the view to the application.
        if (portal.viewContainerRef) {
            componentRef = portal.viewContainerRef.createComponent(componentFactory, portal.viewContainerRef.length, portal.injector || portal.viewContainerRef.parentInjector);
            this.setDisposeFn(function () { return componentRef.destroy(); });
        }
        else {
            componentRef = componentFactory.create(portal.injector || this._defaultInjector);
            this._appRef.attachView(componentRef.hostView);
            this.setDisposeFn(function () {
                _this._appRef.detachView(componentRef.hostView);
                componentRef.destroy();
            });
        }
        // At this point the component has been instantiated, so we move it to the location in the DOM
        // where we want it to be rendered.
        this.outletElement.appendChild(this._getComponentRootNode(componentRef));
        return componentRef;
    };
    /**
     * Attaches a template portal to the DOM as an embedded view.
     * @param portal Portal to be attached.
     * @returns Reference to the created embedded view.
     */
    /**
     * Attaches a template portal to the DOM as an embedded view.
     * @template C
     * @param {?} portal Portal to be attached.
     * @return {?} Reference to the created embedded view.
     */
    DomPortalOutlet.prototype.attachTemplatePortal = /**
     * Attaches a template portal to the DOM as an embedded view.
     * @template C
     * @param {?} portal Portal to be attached.
     * @return {?} Reference to the created embedded view.
     */
    function (portal) {
        var _this = this;
        var /** @type {?} */ viewContainer = portal.viewContainerRef;
        var /** @type {?} */ viewRef = viewContainer.createEmbeddedView(portal.templateRef, portal.context);
        viewRef.detectChanges();
        // The method `createEmbeddedView` will add the view as a child of the viewContainer.
        // But for the DomPortalOutlet the view can be added everywhere in the DOM
        // (e.g Overlay Container) To move the view to the specified host element. We just
        // re-append the existing root nodes.
        viewRef.rootNodes.forEach(function (rootNode) { return _this.outletElement.appendChild(rootNode); });
        this.setDisposeFn((function () {
            var /** @type {?} */ index = viewContainer.indexOf(viewRef);
            if (index !== -1) {
                viewContainer.remove(index);
            }
        }));
        // TODO(jelbourn): Return locals from view.
        return viewRef;
    };
    /**
     * Clears out a portal from the DOM.
     */
    /**
     * Clears out a portal from the DOM.
     * @return {?}
     */
    DomPortalOutlet.prototype.dispose = /**
     * Clears out a portal from the DOM.
     * @return {?}
     */
    function () {
        _super.prototype.dispose.call(this);
        if (this.outletElement.parentNode != null) {
            this.outletElement.parentNode.removeChild(this.outletElement);
        }
    };
    /**
     * Gets the root HTMLElement for an instantiated component.
     * @param {?} componentRef
     * @return {?}
     */
    DomPortalOutlet.prototype._getComponentRootNode = /**
     * Gets the root HTMLElement for an instantiated component.
     * @param {?} componentRef
     * @return {?}
     */
    function (componentRef) {
        return /** @type {?} */ ((/** @type {?} */ (componentRef.hostView)).rootNodes[0]);
    };
    return DomPortalOutlet;
}(BasePortalOutlet));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Directive version of a `TemplatePortal`. Because the directive *is* a TemplatePortal,
 * the directive instance itself can be attached to a host, enabling declarative use of portals.
 */
var CdkPortal = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CdkPortal, _super);
    function CdkPortal(templateRef, viewContainerRef) {
        return _super.call(this, templateRef, viewContainerRef) || this;
    }
    CdkPortal.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: '[cdk-portal], [cdkPortal], [portal]',
                    exportAs: 'cdkPortal',
                },] },
    ];
    /** @nocollapse */
    CdkPortal.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], },
    ]; };
    return CdkPortal;
}(TemplatePortal));
/**
 * Directive version of a PortalOutlet. Because the directive *is* a PortalOutlet, portals can be
 * directly attached to it, enabling declarative use.
 *
 * Usage:
 * `<ng-template [cdkPortalOutlet]="greeting"></ng-template>`
 */
var CdkPortalOutlet = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CdkPortalOutlet, _super);
    function CdkPortalOutlet(_componentFactoryResolver, _viewContainerRef) {
        var _this = _super.call(this) || this;
        _this._componentFactoryResolver = _componentFactoryResolver;
        _this._viewContainerRef = _viewContainerRef;
        /**
         * Whether the portal component is initialized.
         */
        _this._isInitialized = false;
        _this.attached = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        return _this;
    }
    Object.defineProperty(CdkPortalOutlet.prototype, "portal", {
        /** Portal associated with the Portal outlet. */
        get: /**
         * Portal associated with the Portal outlet.
         * @return {?}
         */
        function () {
            return this._attachedPortal;
        },
        set: /**
         * @param {?} portal
         * @return {?}
         */
        function (portal) {
            // Ignore the cases where the `portal` is set to a falsy value before the lifecycle hooks have
            // run. This handles the cases where the user might do something like `<div cdkPortalOutlet>`
            // and attach a portal programmatically in the parent component. When Angular does the first CD
            // round, it will fire the setter with empty string, causing the user's content to be cleared.
            if (this.hasAttached() && !portal && !this._isInitialized) {
                return;
            }
            if (this.hasAttached()) {
                _super.prototype.detach.call(this);
            }
            if (portal) {
                _super.prototype.attach.call(this, portal);
            }
            this._attachedPortal = portal;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkPortalOutlet.prototype, "attachedRef", {
        /** Component or view reference that is attached to the portal. */
        get: /**
         * Component or view reference that is attached to the portal.
         * @return {?}
         */
        function () {
            return this._attachedRef;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CdkPortalOutlet.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._isInitialized = true;
    };
    /**
     * @return {?}
     */
    CdkPortalOutlet.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        _super.prototype.dispose.call(this);
        this._attachedPortal = null;
        this._attachedRef = null;
    };
    /**
     * Attach the given ComponentPortal to this PortalOutlet using the ComponentFactoryResolver.
     *
     * @param portal Portal to be attached to the portal outlet.
     * @returns Reference to the created component.
     */
    /**
     * Attach the given ComponentPortal to this PortalOutlet using the ComponentFactoryResolver.
     *
     * @template T
     * @param {?} portal Portal to be attached to the portal outlet.
     * @return {?} Reference to the created component.
     */
    CdkPortalOutlet.prototype.attachComponentPortal = /**
     * Attach the given ComponentPortal to this PortalOutlet using the ComponentFactoryResolver.
     *
     * @template T
     * @param {?} portal Portal to be attached to the portal outlet.
     * @return {?} Reference to the created component.
     */
    function (portal) {
        portal.setAttachedHost(this);
        // If the portal specifies an origin, use that as the logical location of the component
        // in the application tree. Otherwise use the location of this PortalOutlet.
        var /** @type {?} */ viewContainerRef = portal.viewContainerRef != null ?
            portal.viewContainerRef :
            this._viewContainerRef;
        var /** @type {?} */ componentFactory = this._componentFactoryResolver.resolveComponentFactory(portal.component);
        var /** @type {?} */ ref = viewContainerRef.createComponent(componentFactory, viewContainerRef.length, portal.injector || viewContainerRef.parentInjector);
        _super.prototype.setDisposeFn.call(this, function () { return ref.destroy(); });
        this._attachedPortal = portal;
        this._attachedRef = ref;
        this.attached.emit(ref);
        return ref;
    };
    /**
     * Attach the given TemplatePortal to this PortlHost as an embedded View.
     * @param portal Portal to be attached.
     * @returns Reference to the created embedded view.
     */
    /**
     * Attach the given TemplatePortal to this PortlHost as an embedded View.
     * @template C
     * @param {?} portal Portal to be attached.
     * @return {?} Reference to the created embedded view.
     */
    CdkPortalOutlet.prototype.attachTemplatePortal = /**
     * Attach the given TemplatePortal to this PortlHost as an embedded View.
     * @template C
     * @param {?} portal Portal to be attached.
     * @return {?} Reference to the created embedded view.
     */
    function (portal) {
        var _this = this;
        portal.setAttachedHost(this);
        var /** @type {?} */ viewRef = this._viewContainerRef.createEmbeddedView(portal.templateRef, portal.context);
        _super.prototype.setDisposeFn.call(this, function () { return _this._viewContainerRef.clear(); });
        this._attachedPortal = portal;
        this._attachedRef = viewRef;
        this.attached.emit(viewRef);
        return viewRef;
    };
    CdkPortalOutlet.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: '[cdkPortalOutlet], [cdkPortalHost], [portalHost]',
                    exportAs: 'cdkPortalOutlet, cdkPortalHost',
                    inputs: ['portal: cdkPortalOutlet']
                },] },
    ];
    /** @nocollapse */
    CdkPortalOutlet.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], },
    ]; };
    CdkPortalOutlet.propDecorators = {
        "attached": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    };
    return CdkPortalOutlet;
}(BasePortalOutlet));
var PortalModule = /** @class */ (function () {
    function PortalModule() {
    }
    PortalModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    exports: [CdkPortal, CdkPortalOutlet],
                    declarations: [CdkPortal, CdkPortalOutlet],
                },] },
    ];
    return PortalModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * Custom injector to be used when providing custom
 * injection tokens to components inside a portal.
 * \@docs-private
 */
var  /**
 * Custom injector to be used when providing custom
 * injection tokens to components inside a portal.
 * \@docs-private
 */
PortalInjector = /** @class */ (function () {
    function PortalInjector(_parentInjector, _customTokens) {
        this._parentInjector = _parentInjector;
        this._customTokens = _customTokens;
    }
    /**
     * @param {?} token
     * @param {?=} notFoundValue
     * @return {?}
     */
    PortalInjector.prototype.get = /**
     * @param {?} token
     * @param {?=} notFoundValue
     * @return {?}
     */
    function (token, notFoundValue) {
        var /** @type {?} */ value = this._customTokens.get(token);
        if (typeof value !== 'undefined') {
            return value;
        }
        return this._parentInjector.get(token, notFoundValue);
    };
    return PortalInjector;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */


//# sourceMappingURL=portal.es5.js.map


/***/ }),

/***/ "./node_modules/@angular/cdk/esm5/scrolling.es5.js":
/*!*********************************************************!*\
  !*** ./node_modules/@angular/cdk/esm5/scrolling.es5.js ***!
  \*********************************************************/
/*! exports provided: DEFAULT_SCROLL_TIME, ScrollDispatcher, SCROLL_DISPATCHER_PROVIDER_FACTORY, SCROLL_DISPATCHER_PROVIDER, CdkScrollable, DEFAULT_RESIZE_TIME, ViewportRuler, VIEWPORT_RULER_PROVIDER_FACTORY, VIEWPORT_RULER_PROVIDER, ScrollDispatchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_SCROLL_TIME", function() { return DEFAULT_SCROLL_TIME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollDispatcher", function() { return ScrollDispatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCROLL_DISPATCHER_PROVIDER_FACTORY", function() { return SCROLL_DISPATCHER_PROVIDER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCROLL_DISPATCHER_PROVIDER", function() { return SCROLL_DISPATCHER_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkScrollable", function() { return CdkScrollable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_RESIZE_TIME", function() { return DEFAULT_RESIZE_TIME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewportRuler", function() { return ViewportRuler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VIEWPORT_RULER_PROVIDER_FACTORY", function() { return VIEWPORT_RULER_PROVIDER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VIEWPORT_RULER_PROVIDER", function() { return VIEWPORT_RULER_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollDispatchModule", function() { return ScrollDispatchModule; });
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Time in ms to throttle the scrolling events by default.
 */
var /** @type {?} */ DEFAULT_SCROLL_TIME = 20;
/**
 * Service contained all registered Scrollable references and emits an event when any one of the
 * Scrollable references emit a scrolled event.
 */
var ScrollDispatcher = /** @class */ (function () {
    function ScrollDispatcher(_ngZone, _platform) {
        this._ngZone = _ngZone;
        this._platform = _platform;
        /**
         * Subject for notifying that a registered scrollable reference element has been scrolled.
         */
        this._scrolled = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Keeps track of the global `scroll` and `resize` subscriptions.
         */
        this._globalSubscription = null;
        /**
         * Keeps track of the amount of subscriptions to `scrolled`. Used for cleaning up afterwards.
         */
        this._scrolledCount = 0;
        /**
         * Map of all the scrollable references that are registered with the service and their
         * scroll event subscriptions.
         */
        this.scrollContainers = new Map();
    }
    /**
     * Registers a scrollable instance with the service and listens for its scrolled events. When the
     * scrollable is scrolled, the service emits the event to its scrolled observable.
     * @param scrollable Scrollable instance to be registered.
     */
    /**
     * Registers a scrollable instance with the service and listens for its scrolled events. When the
     * scrollable is scrolled, the service emits the event to its scrolled observable.
     * @param {?} scrollable Scrollable instance to be registered.
     * @return {?}
     */
    ScrollDispatcher.prototype.register = /**
     * Registers a scrollable instance with the service and listens for its scrolled events. When the
     * scrollable is scrolled, the service emits the event to its scrolled observable.
     * @param {?} scrollable Scrollable instance to be registered.
     * @return {?}
     */
    function (scrollable) {
        var _this = this;
        var /** @type {?} */ scrollSubscription = scrollable.elementScrolled()
            .subscribe(function () { return _this._scrolled.next(scrollable); });
        this.scrollContainers.set(scrollable, scrollSubscription);
    };
    /**
     * Deregisters a Scrollable reference and unsubscribes from its scroll event observable.
     * @param scrollable Scrollable instance to be deregistered.
     */
    /**
     * Deregisters a Scrollable reference and unsubscribes from its scroll event observable.
     * @param {?} scrollable Scrollable instance to be deregistered.
     * @return {?}
     */
    ScrollDispatcher.prototype.deregister = /**
     * Deregisters a Scrollable reference and unsubscribes from its scroll event observable.
     * @param {?} scrollable Scrollable instance to be deregistered.
     * @return {?}
     */
    function (scrollable) {
        var /** @type {?} */ scrollableReference = this.scrollContainers.get(scrollable);
        if (scrollableReference) {
            scrollableReference.unsubscribe();
            this.scrollContainers.delete(scrollable);
        }
    };
    /**
     * Returns an observable that emits an event whenever any of the registered Scrollable
     * references (or window, document, or body) fire a scrolled event. Can provide a time in ms
     * to override the default "throttle" time.
     *
     * **Note:** in order to avoid hitting change detection for every scroll event,
     * all of the events emitted from this stream will be run outside the Angular zone.
     * If you need to update any data bindings as a result of a scroll event, you have
     * to run the callback using `NgZone.run`.
     */
    /**
     * Returns an observable that emits an event whenever any of the registered Scrollable
     * references (or window, document, or body) fire a scrolled event. Can provide a time in ms
     * to override the default "throttle" time.
     *
     * **Note:** in order to avoid hitting change detection for every scroll event,
     * all of the events emitted from this stream will be run outside the Angular zone.
     * If you need to update any data bindings as a result of a scroll event, you have
     * to run the callback using `NgZone.run`.
     * @param {?=} auditTimeInMs
     * @return {?}
     */
    ScrollDispatcher.prototype.scrolled = /**
     * Returns an observable that emits an event whenever any of the registered Scrollable
     * references (or window, document, or body) fire a scrolled event. Can provide a time in ms
     * to override the default "throttle" time.
     *
     * **Note:** in order to avoid hitting change detection for every scroll event,
     * all of the events emitted from this stream will be run outside the Angular zone.
     * If you need to update any data bindings as a result of a scroll event, you have
     * to run the callback using `NgZone.run`.
     * @param {?=} auditTimeInMs
     * @return {?}
     */
    function (auditTimeInMs) {
        var _this = this;
        if (auditTimeInMs === void 0) { auditTimeInMs = DEFAULT_SCROLL_TIME; }
        return this._platform.isBrowser ? rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            if (!_this._globalSubscription) {
                _this._addGlobalListener();
            }
            // In the case of a 0ms delay, use an observable without auditTime
            // since it does add a perceptible delay in processing overhead.
            var /** @type {?} */ subscription = auditTimeInMs > 0 ?
                _this._scrolled.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["auditTime"])(auditTimeInMs)).subscribe(observer) :
                _this._scrolled.subscribe(observer);
            _this._scrolledCount++;
            return function () {
                subscription.unsubscribe();
                _this._scrolledCount--;
                if (!_this._scrolledCount) {
                    _this._removeGlobalListener();
                }
            };
        }) : Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])();
    };
    /**
     * @return {?}
     */
    ScrollDispatcher.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._removeGlobalListener();
        this.scrollContainers.forEach(function (_, container) { return _this.deregister(container); });
        this._scrolled.complete();
    };
    /**
     * Returns an observable that emits whenever any of the
     * scrollable ancestors of an element are scrolled.
     * @param elementRef Element whose ancestors to listen for.
     * @param auditTimeInMs Time to throttle the scroll events.
     */
    /**
     * Returns an observable that emits whenever any of the
     * scrollable ancestors of an element are scrolled.
     * @param {?} elementRef Element whose ancestors to listen for.
     * @param {?=} auditTimeInMs Time to throttle the scroll events.
     * @return {?}
     */
    ScrollDispatcher.prototype.ancestorScrolled = /**
     * Returns an observable that emits whenever any of the
     * scrollable ancestors of an element are scrolled.
     * @param {?} elementRef Element whose ancestors to listen for.
     * @param {?=} auditTimeInMs Time to throttle the scroll events.
     * @return {?}
     */
    function (elementRef, auditTimeInMs) {
        var /** @type {?} */ ancestors = this.getAncestorScrollContainers(elementRef);
        return this.scrolled(auditTimeInMs).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (target) {
            return !target || ancestors.indexOf(target) > -1;
        }));
    };
    /** Returns all registered Scrollables that contain the provided element. */
    /**
     * Returns all registered Scrollables that contain the provided element.
     * @param {?} elementRef
     * @return {?}
     */
    ScrollDispatcher.prototype.getAncestorScrollContainers = /**
     * Returns all registered Scrollables that contain the provided element.
     * @param {?} elementRef
     * @return {?}
     */
    function (elementRef) {
        var _this = this;
        var /** @type {?} */ scrollingContainers = [];
        this.scrollContainers.forEach(function (_subscription, scrollable) {
            if (_this._scrollableContainsElement(scrollable, elementRef)) {
                scrollingContainers.push(scrollable);
            }
        });
        return scrollingContainers;
    };
    /**
     * Returns true if the element is contained within the provided Scrollable.
     * @param {?} scrollable
     * @param {?} elementRef
     * @return {?}
     */
    ScrollDispatcher.prototype._scrollableContainsElement = /**
     * Returns true if the element is contained within the provided Scrollable.
     * @param {?} scrollable
     * @param {?} elementRef
     * @return {?}
     */
    function (scrollable, elementRef) {
        var /** @type {?} */ element = elementRef.nativeElement;
        var /** @type {?} */ scrollableElement = scrollable.getElementRef().nativeElement;
        // Traverse through the element parents until we reach null, checking if any of the elements
        // are the scrollable's element.
        do {
            if (element == scrollableElement) {
                return true;
            }
        } while (element = element.parentElement);
        return false;
    };
    /**
     * Sets up the global scroll listeners.
     * @return {?}
     */
    ScrollDispatcher.prototype._addGlobalListener = /**
     * Sets up the global scroll listeners.
     * @return {?}
     */
    function () {
        var _this = this;
        this._globalSubscription = this._ngZone.runOutsideAngular(function () {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window.document, 'scroll').subscribe(function () { return _this._scrolled.next(); });
        });
    };
    /**
     * Cleans up the global scroll listener.
     * @return {?}
     */
    ScrollDispatcher.prototype._removeGlobalListener = /**
     * Cleans up the global scroll listener.
     * @return {?}
     */
    function () {
        if (this._globalSubscription) {
            this._globalSubscription.unsubscribe();
            this._globalSubscription = null;
        }
    };
    ScrollDispatcher.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    ScrollDispatcher.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], },
        { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"], },
    ]; };
    /** @nocollapse */ ScrollDispatcher.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["defineInjectable"])({ factory: function ScrollDispatcher_Factory() { return new ScrollDispatcher(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"])); }, token: ScrollDispatcher, providedIn: "root" });
    return ScrollDispatcher;
}());
/**
 * \@docs-private \@deprecated \@deletion-target 7.0.0
 * @param {?} parentDispatcher
 * @param {?} ngZone
 * @param {?} platform
 * @return {?}
 */
function SCROLL_DISPATCHER_PROVIDER_FACTORY(parentDispatcher, ngZone, platform) {
    return parentDispatcher || new ScrollDispatcher(ngZone, platform);
}
/**
 * \@docs-private \@deprecated \@deletion-target 7.0.0
 */
var /** @type {?} */ SCROLL_DISPATCHER_PROVIDER = {
    // If there is already a ScrollDispatcher available, use that. Otherwise, provide a new one.
    provide: ScrollDispatcher,
    deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"](), ScrollDispatcher], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"]],
    useFactory: SCROLL_DISPATCHER_PROVIDER_FACTORY
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Sends an event when the directive's element is scrolled. Registers itself with the
 * ScrollDispatcher service to include itself as part of its collection of scrolling events that it
 * can be listened to through the service.
 */
var CdkScrollable = /** @class */ (function () {
    function CdkScrollable(_elementRef, _scroll, _ngZone) {
        var _this = this;
        this._elementRef = _elementRef;
        this._scroll = _scroll;
        this._ngZone = _ngZone;
        this._elementScrolled = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._scrollListener = function (event) { return _this._elementScrolled.next(event); };
    }
    /**
     * @return {?}
     */
    CdkScrollable.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._ngZone.runOutsideAngular(function () {
            _this.getElementRef().nativeElement.addEventListener('scroll', _this._scrollListener);
        });
        this._scroll.register(this);
    };
    /**
     * @return {?}
     */
    CdkScrollable.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._scroll.deregister(this);
        if (this._scrollListener) {
            this.getElementRef().nativeElement.removeEventListener('scroll', this._scrollListener);
        }
    };
    /**
     * Returns observable that emits when a scroll event is fired on the host element.
     */
    /**
     * Returns observable that emits when a scroll event is fired on the host element.
     * @return {?}
     */
    CdkScrollable.prototype.elementScrolled = /**
     * Returns observable that emits when a scroll event is fired on the host element.
     * @return {?}
     */
    function () {
        return this._elementScrolled.asObservable();
    };
    /**
     * @return {?}
     */
    CdkScrollable.prototype.getElementRef = /**
     * @return {?}
     */
    function () {
        return this._elementRef;
    };
    CdkScrollable.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: '[cdk-scrollable], [cdkScrollable]'
                },] },
    ];
    /** @nocollapse */
    CdkScrollable.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], },
        { type: ScrollDispatcher, },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], },
    ]; };
    return CdkScrollable;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Time in ms to throttle the resize events by default.
 */
var /** @type {?} */ DEFAULT_RESIZE_TIME = 20;
/**
 * Simple utility for getting the bounds of the browser viewport.
 * \@docs-private
 */
var ViewportRuler = /** @class */ (function () {
    function ViewportRuler(_platform, ngZone) {
        var _this = this;
        this._platform = _platform;
        this._change = _platform.isBrowser ? ngZone.runOutsideAngular(function () {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window, 'resize'), Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window, 'orientationchange'));
        }) : Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])();
        this._invalidateCache = this.change().subscribe(function () { return _this._updateViewportSize(); });
    }
    /**
     * @return {?}
     */
    ViewportRuler.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._invalidateCache.unsubscribe();
    };
    /** Returns the viewport's width and height. */
    /**
     * Returns the viewport's width and height.
     * @return {?}
     */
    ViewportRuler.prototype.getViewportSize = /**
     * Returns the viewport's width and height.
     * @return {?}
     */
    function () {
        if (!this._viewportSize) {
            this._updateViewportSize();
        }
        var /** @type {?} */ output = { width: this._viewportSize.width, height: this._viewportSize.height };
        // If we're not on a browser, don't cache the size since it'll be mocked out anyway.
        if (!this._platform.isBrowser) {
            this._viewportSize = /** @type {?} */ ((null));
        }
        return output;
    };
    /** Gets a ClientRect for the viewport's bounds. */
    /**
     * Gets a ClientRect for the viewport's bounds.
     * @return {?}
     */
    ViewportRuler.prototype.getViewportRect = /**
     * Gets a ClientRect for the viewport's bounds.
     * @return {?}
     */
    function () {
        // Use the document element's bounding rect rather than the window scroll properties
        // (e.g. pageYOffset, scrollY) due to in issue in Chrome and IE where window scroll
        // properties and client coordinates (boundingClientRect, clientX/Y, etc.) are in different
        // conceptual viewports. Under most circumstances these viewports are equivalent, but they
        // can disagree when the page is pinch-zoomed (on devices that support touch).
        // See https://bugs.chromium.org/p/chromium/issues/detail?id=489206#c4
        // We use the documentElement instead of the body because, by default (without a css reset)
        // browsers typically give the document body an 8px margin, which is not included in
        // getBoundingClientRect().
        var /** @type {?} */ scrollPosition = this.getViewportScrollPosition();
        var _a = this.getViewportSize(), width = _a.width, height = _a.height;
        return {
            top: scrollPosition.top,
            left: scrollPosition.left,
            bottom: scrollPosition.top + height,
            right: scrollPosition.left + width,
            height: height,
            width: width,
        };
    };
    /** Gets the (top, left) scroll position of the viewport. */
    /**
     * Gets the (top, left) scroll position of the viewport.
     * @return {?}
     */
    ViewportRuler.prototype.getViewportScrollPosition = /**
     * Gets the (top, left) scroll position of the viewport.
     * @return {?}
     */
    function () {
        // While we can get a reference to the fake document
        // during SSR, it doesn't have getBoundingClientRect.
        if (!this._platform.isBrowser) {
            return { top: 0, left: 0 };
        }
        // The top-left-corner of the viewport is determined by the scroll position of the document
        // body, normally just (scrollLeft, scrollTop). However, Chrome and Firefox disagree about
        // whether `document.body` or `document.documentElement` is the scrolled element, so reading
        // `scrollTop` and `scrollLeft` is inconsistent. However, using the bounding rect of
        // `document.documentElement` works consistently, where the `top` and `left` values will
        // equal negative the scroll position.
        var /** @type {?} */ documentRect = document.documentElement.getBoundingClientRect();
        var /** @type {?} */ top = -documentRect.top || document.body.scrollTop || window.scrollY ||
            document.documentElement.scrollTop || 0;
        var /** @type {?} */ left = -documentRect.left || document.body.scrollLeft || window.scrollX ||
            document.documentElement.scrollLeft || 0;
        return { top: top, left: left };
    };
    /**
     * Returns a stream that emits whenever the size of the viewport changes.
     * @param throttleTime Time in milliseconds to throttle the stream.
     */
    /**
     * Returns a stream that emits whenever the size of the viewport changes.
     * @param {?=} throttleTime Time in milliseconds to throttle the stream.
     * @return {?}
     */
    ViewportRuler.prototype.change = /**
     * Returns a stream that emits whenever the size of the viewport changes.
     * @param {?=} throttleTime Time in milliseconds to throttle the stream.
     * @return {?}
     */
    function (throttleTime) {
        if (throttleTime === void 0) { throttleTime = DEFAULT_RESIZE_TIME; }
        return throttleTime > 0 ? this._change.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["auditTime"])(throttleTime)) : this._change;
    };
    /**
     * Updates the cached viewport size.
     * @return {?}
     */
    ViewportRuler.prototype._updateViewportSize = /**
     * Updates the cached viewport size.
     * @return {?}
     */
    function () {
        this._viewportSize = this._platform.isBrowser ?
            { width: window.innerWidth, height: window.innerHeight } :
            { width: 0, height: 0 };
    };
    ViewportRuler.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    ViewportRuler.ctorParameters = function () { return [
        { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], },
    ]; };
    /** @nocollapse */ ViewportRuler.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["defineInjectable"])({ factory: function ViewportRuler_Factory() { return new ViewportRuler(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); }, token: ViewportRuler, providedIn: "root" });
    return ViewportRuler;
}());
/**
 * \@docs-private \@deprecated \@deletion-target 7.0.0
 * @param {?} parentRuler
 * @param {?} platform
 * @param {?} ngZone
 * @return {?}
 */
function VIEWPORT_RULER_PROVIDER_FACTORY(parentRuler, platform, ngZone) {
    return parentRuler || new ViewportRuler(platform, ngZone);
}
/**
 * \@docs-private \@deprecated \@deletion-target 7.0.0
 */
var /** @type {?} */ VIEWPORT_RULER_PROVIDER = {
    // If there is already a ViewportRuler available, use that. Otherwise, provide a new one.
    provide: ViewportRuler,
    deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"](), ViewportRuler], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]],
    useFactory: VIEWPORT_RULER_PROVIDER_FACTORY
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ScrollDispatchModule = /** @class */ (function () {
    function ScrollDispatchModule() {
    }
    ScrollDispatchModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    imports: [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["PlatformModule"]],
                    exports: [CdkScrollable],
                    declarations: [CdkScrollable],
                },] },
    ];
    return ScrollDispatchModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */


//# sourceMappingURL=scrolling.es5.js.map


/***/ }),

/***/ "./node_modules/@ngx-gallery/core/esm5/ngx-gallery-core.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ngx-gallery/core/esm5/ngx-gallery-core.js ***!
  \*****************************************************************/
/*! exports provided: Gallery, GalleryRef, GalleryAction, ImageItem, VideoItem, IframeItem, YoutubeItem, ImageItemComponent, VideoItemComponent, IframeItemComponent, ThumbnailItemComponent, galleryFactory, GalleryModule, ɵe, ɵj, ɵh, ɵf, ɵi, ɵg, ɵd, ɵo, ɵp, ɵq, ɵm, ɵk, ɵn, ɵl, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gallery", function() { return Gallery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryRef", function() { return GalleryRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryAction", function() { return GalleryAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageItem", function() { return ImageItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoItem", function() { return VideoItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IframeItem", function() { return IframeItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YoutubeItem", function() { return YoutubeItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageItemComponent", function() { return ImageItemComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoItemComponent", function() { return VideoItemComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IframeItemComponent", function() { return IframeItemComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThumbnailItemComponent", function() { return ThumbnailItemComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "galleryFactory", function() { return galleryFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryModule", function() { return GalleryModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return GalleryCoreComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵj", function() { return GalleryCounterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵh", function() { return GalleryDotsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return GalleryNavComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵi", function() { return GallerySliderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return GalleryThumbComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return GalleryComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵo", function() { return GalleryItemDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵp", function() { return LazyDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵq", function() { return TapClickDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵm", function() { return IframeItemComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵk", function() { return ImageItemComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵn", function() { return ThumbnailItemComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵl", function() { return VideoItemComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return GALLERY_CONFIG; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/BehaviorSubject */ "./node_modules/rxjs-compat/_esm5/BehaviorSubject.js");
/* harmony import */ var rxjs_operators_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators/filter */ "./node_modules/rxjs-compat/_esm5/operators/filter.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var rxjs_operators_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators/map */ "./node_modules/rxjs-compat/_esm5/operators/map.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs_operators_tap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators/tap */ "./node_modules/rxjs-compat/_esm5/operators/tap.js");
/* harmony import */ var rxjs_observable_fromEvent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/observable/fromEvent */ "./node_modules/rxjs-compat/_esm5/observable/fromEvent.js");
/* harmony import */ var rxjs_operators_debounceTime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators/debounceTime */ "./node_modules/rxjs-compat/_esm5/operators/debounceTime.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
/* harmony import */ var rxjs_operators_switchMap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators/switchMap */ "./node_modules/rxjs-compat/_esm5/operators/switchMap.js");
/* harmony import */ var rxjs_observable_zip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/observable/zip */ "./node_modules/rxjs-compat/_esm5/observable/zip.js");














var GalleryAction = {
    INITIALIZED: 'initialized',
    ITEMS_CHANGED: 'itemsChanged',
    INDEX_CHANGED: 'indexChanged',
    OPENED: 'opened',
    CLOSED: 'closed',
};
var defaultState = {
    action: GalleryAction.INITIALIZED,
    currIndex: 0,
    hasNext: false,
    hasPrev: false,
    items: []
};
var defaultConfig = {
    gestures: true,
    panSensitivity: 25,
    counter: true,
    nav: true,
    dots: false,
    thumb: true,
    thumbWidth: 120,
    thumbHeight: 90,
    thumbPosition: 'bottom',
    disableThumb: false,
    slidingDirection: 'horizontal',
    zoomOut: 0,
    loadingIcon: "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg stroke=\"#fff\" viewBox=\"0 0 44 44\" xmlns=\"http://www.w3.org/2000/svg\">\n<g fill=\"none\" fill-rule=\"evenodd\" stroke-width=\"2\">\n<circle cx=\"22\" cy=\"22\" r=\"1\">\n<animate attributeName=\"r\" begin=\"0s\" calcMode=\"spline\" dur=\"1.8s\" keySplines=\"0.165, 0.84, 0.44, 1\" keyTimes=\"0; 1\" repeatCount=\"indefinite\" values=\"1; 20\"/>\n<animate attributeName=\"stroke-opacity\" begin=\"0s\" calcMode=\"spline\" dur=\"1.8s\" keySplines=\"0.3, 0.61, 0.355, 1\" keyTimes=\"0; 1\" repeatCount=\"indefinite\" values=\"1; 0\"/>\n</circle>\n<circle cx=\"22\" cy=\"22\" r=\"1\">\n<animate attributeName=\"r\" begin=\"-0.9s\" calcMode=\"spline\" dur=\"1.8s\" keySplines=\"0.165, 0.84, 0.44, 1\" keyTimes=\"0; 1\" repeatCount=\"indefinite\" values=\"1; 20\"/>\n<animate attributeName=\"stroke-opacity\" begin=\"-0.9s\" calcMode=\"spline\" dur=\"1.8s\" keySplines=\"0.3, 0.61, 0.355, 1\" keyTimes=\"0; 1\" repeatCount=\"indefinite\" values=\"1; 0\"/>\n</circle>\n</g>\n</svg>"
};
var GalleryRef = /** @class */ (function () {
    function GalleryRef(config, state) {
        if (config === void 0) { config = defaultConfig; }
        if (state === void 0) { state = defaultState; }
        this.config = config;
        this.state = state;
        this.state$ = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](state);
        this.config$ = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](defaultConfig);
        this.setConfig(config);
    }
    GalleryRef.prototype.setConfig = function (config) {
        this.config = Object.assign({}, defaultConfig, this.config, config);
        this.config$.next(this.config);
    };
    GalleryRef.prototype.setState = function (state) {
        this.state = Object.assign({}, this.state, state);
        this.state$.next(this.state);
    };
    GalleryRef.prototype.add = function (item, active) {
        var items = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(this.state.items, [item]);
        this.setState({
            action: GalleryAction.ITEMS_CHANGED,
            items: items,
            hasNext: items.length > 1,
            currIndex: active ? items.length - 1 : this.state.currIndex
        });
    };
    GalleryRef.prototype.remove = function (i) {
        var items = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(this.state.items.slice(0, i), this.state.items.slice(i + 1, this.state.items.length));
        this.setState({
            action: GalleryAction.ITEMS_CHANGED,
            items: items,
            hasNext: items.length > 1,
            hasPrev: i > 0
        });
    };
    GalleryRef.prototype.load = function (items) {
        if (items) {
            this.setState({
                action: GalleryAction.ITEMS_CHANGED,
                items: items,
                hasNext: items.length > 1,
                hasPrev: false
            });
        }
    };
    GalleryRef.prototype.set = function (i) {
        if (i !== this.state.currIndex) {
            this.setState({
                action: GalleryAction.INDEX_CHANGED,
                currIndex: i,
                hasNext: i < this.state.items.length - 1,
                hasPrev: i > 0
            });
        }
    };
    GalleryRef.prototype.next = function () {
        if (this.state.hasNext) {
            this.set(this.state.currIndex + 1);
        }
        else if (this.config.loop) {
            this.set(0);
        }
    };
    GalleryRef.prototype.prev = function () {
        if (this.state.hasPrev) {
            this.set(this.state.currIndex - 1);
        }
        else if (this.config.loop) {
            this.set(this.state.items.length - 1);
        }
    };
    GalleryRef.prototype.reset = function () {
        this.setState(defaultState);
    };
    GalleryRef.prototype.destroy = function () {
        this.state$.complete();
        this.config$.complete();
    };
    GalleryRef.prototype.initialized = function () {
        return this.state$.pipe(Object(rxjs_operators_filter__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (state) { return state.action === GalleryAction.INITIALIZED; }));
    };
    GalleryRef.prototype.itemsChanged = function () {
        return this.state$.pipe(Object(rxjs_operators_filter__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (state) { return state.action === GalleryAction.ITEMS_CHANGED; }));
    };
    GalleryRef.prototype.indexChanged = function () {
        return this.state$.pipe(Object(rxjs_operators_filter__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (state) { return state.action === GalleryAction.INDEX_CHANGED; }));
    };
    return GalleryRef;
}());
var GALLERY_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('galleryConfig');
var Gallery = /** @class */ (function () {
    function Gallery(config) {
        this._instances = {};
        this.config = Object.assign({}, defaultConfig, config);
    }
    Gallery.prototype.ref = function (id, config) {
        if (id === void 0) { id = 'root'; }
        if (this._instances[id] instanceof GalleryRef) {
            return this._instances[id];
        }
        else {
            config = Object.assign({}, this.config, config);
            return this._instances[id] = new GalleryRef(config);
        }
    };
    Gallery.prototype.destroy = function (id) {
        if (id === void 0) { id = 'root'; }
        if (this._instances[id] instanceof GalleryRef) {
            this._instances[id].destroy();
            this._instances[id] = null;
        }
    };
    Gallery.prototype.destroyAll = function () {
        var _this = this;
        Object.keys(this._instances)
            .map(function (key) {
            _this._instances[key].destory();
            _this._instances[key] = null;
        });
    };
    Gallery.prototype.resetAll = function () {
        var _this = this;
        Object.keys(this._instances)
            .map(function (id) {
            if (id === void 0) { id = 'root'; }
            return _this._instances[id].gallery;
        })
            .map(function (gallery) { return gallery.reset(); });
    };
    return Gallery;
}());
Gallery.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"] },
];
Gallery.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [GALLERY_CONFIG,] },] },
]; };
var ImageItemComponent = /** @class */ (function () {
    function ImageItemComponent(gallery, sanitizer) {
        this.gallery = gallery;
        this.sanitizer = sanitizer;
    }
    return ImageItemComponent;
}());
ImageItemComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"], args: [{
                selector: 'image-item',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
                preserveWhitespaces: false,
                template: "\n    <div [lazyImage]=\"data?.src\" (loading)=\"loading = $event\"></div>\n    <i class=\"g-loading\" *ngIf=\"loading\" [innerHTML]=\"sanitizer.bypassSecurityTrustHtml(gallery.config.loadingIcon)\"></i>\n  ",
                styles: ["\n    :host {\n      position: relative;\n      display: block;\n      width: 100%;\n      height: 100%;\n    }\n    div {\n      background-position: center center;\n      background-size: cover;\n      width: 100%;\n      height: 100%;\n    }\n  "],
            },] },
];
ImageItemComponent.ctorParameters = function () { return [
    { type: Gallery, },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"], },
]; };
ImageItemComponent.propDecorators = {
    "data": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] },],
};
var VideoItemComponent = /** @class */ (function () {
    function VideoItemComponent(sanitizer) {
        this.sanitizer = sanitizer;
    }
    return VideoItemComponent;
}());
VideoItemComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"], args: [{
                selector: 'video-item',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
                preserveWhitespaces: false,
                template: "\n    <video controls\n           [src]=\"sanitizer.bypassSecurityTrustResourceUrl(data?.src)\"\n           [poster]=\"sanitizer.bypassSecurityTrustResourceUrl(data?.poster)\"></video>\n  ",
                styles: ["\n    video {\n      position: absolute;\n      width: 100%;\n      height: 100%;\n    }\n  "]
            },] },
];
VideoItemComponent.ctorParameters = function () { return [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"], },
]; };
VideoItemComponent.propDecorators = {
    "data": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] },],
};
var IframeItemComponent = /** @class */ (function () {
    function IframeItemComponent(sanitizer) {
        this.sanitizer = sanitizer;
    }
    return IframeItemComponent;
}());
IframeItemComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"], args: [{
                selector: 'iframe-item',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
                preserveWhitespaces: false,
                template: "\n    <iframe frameborder=\"0\"\n            allowfullscreen\n            [src]=\"sanitizer.bypassSecurityTrustResourceUrl(data?.src)\"></iframe>\n  ",
                styles: ["\n    iframe {\n      position: absolute;\n      width: 100%;\n      height: 100%;\n    }\n  "]
            },] },
];
IframeItemComponent.ctorParameters = function () { return [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"], },
]; };
IframeItemComponent.propDecorators = {
    "data": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] },],
};
var ThumbnailItemComponent = /** @class */ (function () {
    function ThumbnailItemComponent() {
    }
    return ThumbnailItemComponent;
}());
ThumbnailItemComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"], args: [{
                selector: 'thumbnail-item',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
                preserveWhitespaces: false,
                template: "\n    <div [lazyImage]=\"data.thumb\"></div>\n  ",
                styles: ["\n    :host {\n      width: 100%;\n      height: 100%;\n    }\n    div {\n      width: 100%;\n      height: 100%;\n      background-size: cover;\n      background-position: center center;\n    }\n  "]
            },] },
];
ThumbnailItemComponent.ctorParameters = function () { return []; };
ThumbnailItemComponent.propDecorators = {
    "data": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] },],
};
var ImageItem = /** @class */ (function () {
    function ImageItem(src, thumb) {
        this.component = ImageItemComponent;
        this.thumbComponent = ThumbnailItemComponent;
        this.data = { src: src, thumb: thumb };
    }
    return ImageItem;
}());
var VideoItem = /** @class */ (function () {
    function VideoItem(src, thumb, poster) {
        this.component = VideoItemComponent;
        this.thumbComponent = ThumbnailItemComponent;
        this.data = { src: src, thumb: thumb, poster: poster };
    }
    return VideoItem;
}());
var IframeItem = /** @class */ (function () {
    function IframeItem(src, thumb) {
        this.component = IframeItemComponent;
        this.thumbComponent = ThumbnailItemComponent;
        this.data = { src: src, thumb: thumb };
    }
    return IframeItem;
}());
var YoutubeItem = /** @class */ (function () {
    function YoutubeItem(src, thumb) {
        this.component = IframeItemComponent;
        this.thumbComponent = ThumbnailItemComponent;
        this.data = {
            src: "//youtube.com/embed/" + src + "?wmode=transparent",
            thumb: thumb ? thumb : "//img.youtube.com/vi/" + src + "/default.jpg"
        };
    }
    return YoutubeItem;
}());
var GalleryComponent = /** @class */ (function () {
    function GalleryComponent(_gallery) {
        this._gallery = _gallery;
        this.gestures = this._gallery.config.gestures;
        this.panSensitivity = this._gallery.config.panSensitivity;
        this.zoomOut = this._gallery.config.zoomOut;
        this.dots = this._gallery.config.dots;
        this.thumb = this._gallery.config.thumb;
        this.nav = this._gallery.config.nav;
        this.counter = this._gallery.config.counter;
        this.thumbWidth = this._gallery.config.thumbWidth;
        this.thumbHeight = this._gallery.config.thumbHeight;
        this.disableThumb = this._gallery.config.disableThumb;
        this.thumbPosition = this._gallery.config.thumbPosition;
        this.slidingDirection = this._gallery.config.slidingDirection;
        this.destroyRef = true;
        this.indexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.itemsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    }
    GalleryComponent.prototype.getConfig = function () {
        return {
            gestures: this.gestures,
            panSensitivity: this.panSensitivity,
            zoomOut: this.zoomOut,
            counter: this.counter,
            nav: this.nav,
            dots: this.dots,
            thumb: this.thumb,
            thumbWidth: this.thumbWidth,
            thumbHeight: this.thumbHeight,
            thumbPosition: this.thumbPosition,
            disableThumb: this.disableThumb,
            slidingDirection: this.slidingDirection
        };
    };
    GalleryComponent.prototype.onIndexChange = function (i) {
        switch (i) {
            case 'next':
                this.galleryRef.next();
                break;
            case 'prev':
                this.galleryRef.prev();
                break;
            default:
                this.galleryRef.set(i);
        }
    };
    GalleryComponent.prototype.ngOnChanges = function () {
        if (this.galleryRef instanceof GalleryRef) {
            this.galleryRef.setConfig(this.getConfig());
            if (this.items !== this.galleryRef.state.items) {
                this.load(this.items);
            }
        }
    };
    GalleryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.galleryRef = this._gallery.ref(this.id);
        this.galleryRef.setConfig(this.getConfig());
        this.load(this.items);
        if (this.indexChange.observers.length) {
            this._indexChange$ = this.galleryRef.indexChanged().subscribe(function (e) { return _this.indexChange.next(e); });
        }
        if (this.itemsChange.observers.length) {
            this._itemChange$ = this.galleryRef.itemsChanged().subscribe(function (e) { return _this.itemsChange.next(e); });
        }
    };
    GalleryComponent.prototype.ngOnDestroy = function () {
        if (this._indexChange$) {
            this._indexChange$.unsubscribe();
        }
        if (this._itemChange$) {
            this._itemChange$.unsubscribe();
        }
        if (this.destroyRef) {
            this.galleryRef.reset();
        }
    };
    GalleryComponent.prototype.load = function (items) {
        this.galleryRef.load(items);
    };
    GalleryComponent.prototype.add = function (item, active) {
        this.galleryRef.add(item, active);
    };
    GalleryComponent.prototype.remove = function (i) {
        this.galleryRef.remove(i);
    };
    GalleryComponent.prototype.next = function () {
        this.galleryRef.next();
    };
    GalleryComponent.prototype.prev = function () {
        this.galleryRef.prev();
    };
    GalleryComponent.prototype.set = function (i) {
        this.galleryRef.set(i);
    };
    GalleryComponent.prototype.reset = function () {
        this.galleryRef.reset();
    };
    return GalleryComponent;
}());
GalleryComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"], args: [{
                selector: 'gallery',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
                preserveWhitespaces: false,
                template: "\n    <gallery-core [state]=\"galleryRef.state$ | async\"\n                  [config]=\"galleryRef.config$ | async\"\n                  (indexChange)=\"onIndexChange($event)\"></gallery-core>\n    <ng-content></ng-content>\n  "
            },] },
];
GalleryComponent.ctorParameters = function () { return [
    { type: Gallery, },
]; };
GalleryComponent.propDecorators = {
    "id": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] },],
    "items": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] },],
    "gestures": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] },],
    "panSensitivity": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] },],
    "zoomOut": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] },],
    "dots": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] },],
    "thumb": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] },],
    "nav": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] },],
    "counter": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] },],
    "thumbWidth": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] },],
    "thumbHeight": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] },],
    "disableThumb": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] },],
    "thumbPosition": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] },],
    "slidingDirection": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] },],
    "destroyRef": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] },],
    "indexChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] },],
    "itemsChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] },],
};
var GalleryCoreComponent = /** @class */ (function () {
    function GalleryCoreComponent() {
        this.indexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    }
    Object.defineProperty(GalleryCoreComponent.prototype, "thumbPosition", {
        get: function () {
            return this.config.thumbPosition;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GalleryCoreComponent.prototype, "slidingDirection", {
        get: function () {
            return this.config.slidingDirection;
        },
        enumerable: true,
        configurable: true
    });
    return GalleryCoreComponent;
}());
GalleryCoreComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"], args: [{
                selector: 'gallery-core',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
                preserveWhitespaces: false,
                template: "\n    <gallery-thumb *ngIf=\"config.thumb\"\n                  [state]=\"state\"\n                  [config]=\"config\"\n                  (indexChange)=\"indexChange.emit($event)\">\n    </gallery-thumb>\n    <div class=\"g-box\">\n      <gallery-slider [state]=\"state\"\n                      [config]=\"config\"\n                      (indexChange)=\"indexChange.emit($event)\">\n        <gallery-nav *ngIf=\"config.nav && state.items.length > 1\"\n                    [state]=\"state\"\n                    [config]=\"config\"\n                    (indexChange)=\"indexChange.emit($event)\">\n        </gallery-nav>\n      </gallery-slider>\n      <gallery-dots *ngIf=\"config.dots\"\n                    [state]=\"state\"\n                    (indexChange)=\"indexChange.emit($event)\">\n      </gallery-dots>\n      <gallery-counter *ngIf=\"config.counter\"\n                      [state]=\"state\">\n      </gallery-counter>\n    </div>\n  "
            },] },
];
GalleryCoreComponent.ctorParameters = function () { return []; };
GalleryCoreComponent.propDecorators = {
    "state": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] },],
    "config": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] },],
    "indexChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] },],
    "thumbPosition": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"], args: ['attr.thumbPosition',] },],
    "slidingDirection": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"], args: ['attr.slidingDirection',] },],
};
var GalleryNavComponent = /** @class */ (function () {
    function GalleryNavComponent() {
        this.indexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    }
    return GalleryNavComponent;
}());
GalleryNavComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"], args: [{
                selector: 'gallery-nav',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
                preserveWhitespaces: false,
                template: "\n    <i *ngIf=\"config.loop || state.hasPrev\" class=\"g-nav-prev\" (tapClick)=\"indexChange.emit('prev')\"></i>\n    <i *ngIf=\"config.loop || state.hasNext\" class=\"g-nav-next\" (tapClick)=\"indexChange.emit('next')\"></i>\n  "
            },] },
];
GalleryNavComponent.ctorParameters = function () { return []; };
GalleryNavComponent.propDecorators = {
    "state": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] },],
    "config": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] },],
    "indexChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] },],
};
var GalleryThumbComponent = /** @class */ (function () {
    function GalleryThumbComponent(_el) {
        var _this = this;
        this._el = _el;
        this.stateStream$ = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({ value: 0, active: false });
        this.indexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.thumbState$ = this.stateStream$.pipe(Object(rxjs_operators_map__WEBPACK_IMPORTED_MODULE_5__["map"])(function (state) { return ({
            style: _this.thumbsStyle(state.value),
            active: state.active
        }); }));
    }
    GalleryThumbComponent.prototype.ngOnChanges = function () {
        this.stateStream$.next({ value: 0, active: false });
    };
    GalleryThumbComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.config.gestures && !this.config.disableThumb && typeof Hammer !== 'undefined') {
            this.mc = new Hammer(this._el.nativeElement);
            this.mc.get('pan').set({ direction: Hammer.DIRECTION_ALL });
            this.mc.on('pan', function (e) {
                switch (_this.config.thumbPosition) {
                    case 'right':
                    case 'left':
                        _this.stateStream$.next({ value: e.deltaY, active: true });
                        if (e.isFinal) {
                            _this.stateStream$.next({ value: 0, active: false });
                            _this.verticalPan(e);
                        }
                        break;
                    case 'top':
                    case 'bottom':
                        _this.stateStream$.next({ value: e.deltaX, active: true });
                        if (e.isFinal) {
                            _this.stateStream$.next({ value: 0, active: false });
                            _this.horizontalPan(e);
                        }
                }
            });
        }
    };
    GalleryThumbComponent.prototype.ngOnDestroy = function () {
        if (this.mc) {
            this.mc.destroy();
        }
    };
    GalleryThumbComponent.prototype.thumbsStyle = function (delta) {
        var value;
        switch (this.config.thumbPosition) {
            case 'top':
            case 'bottom':
                this.height = this.config.thumbHeight + 'px';
                value = -(this.state.currIndex * this.config.thumbWidth) - (this.config.thumbWidth / 2 - delta);
                return {
                    transform: "translate3d(" + value + "px, 0, 0)",
                    width: this.state.items.length * this.config.thumbWidth + 'px',
                    height: '100%'
                };
            case 'left':
            case 'right':
                this.width = this.config.thumbWidth + 'px';
                value = -(this.state.currIndex * this.config.thumbHeight) - (this.config.thumbHeight / 2 - delta);
                return {
                    transform: "translate3d(0, " + value + "px, 0)",
                    width: '100%',
                    height: this.state.items.length * this.config.thumbHeight + 'px',
                };
        }
    };
    GalleryThumbComponent.prototype.verticalPan = function (e) {
        if (e.velocityY > 0.3) {
            this.indexChange.emit('prev');
        }
        else if (e.velocityY < -0.3) {
            this.indexChange.emit('next');
        }
        else {
            if (e.deltaY / 2 <= -this.config.thumbHeight * this.state.items.length / this.config.panSensitivity) {
                this.indexChange.emit('next');
            }
            else if (e.deltaY / 2 >= this.config.thumbHeight * this.state.items.length / this.config.panSensitivity) {
                this.indexChange.emit('prev');
            }
            else {
                this.indexChange.emit(this.state.currIndex);
            }
        }
    };
    GalleryThumbComponent.prototype.horizontalPan = function (e) {
        if (e.velocityX > 0.3) {
            this.indexChange.emit('prev');
        }
        else if (e.velocityX < -0.3) {
            this.indexChange.emit('next');
        }
        else {
            if (e.deltaX / 2 <= -this.config.thumbWidth * this.state.items.length / this.config.panSensitivity) {
                this.indexChange.emit('next');
            }
            else if (e.deltaX / 2 >= this.config.thumbWidth * this.state.items.length / this.config.panSensitivity) {
                this.indexChange.emit('prev');
            }
            else {
                this.indexChange.emit(this.state.currIndex);
            }
        }
    };
    return GalleryThumbComponent;
}());
GalleryThumbComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"], args: [{
                selector: 'gallery-thumb',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
                preserveWhitespaces: false,
                template: "\n    <div *ngIf=\"thumbState$ | async; let thumbState\"\n         class=\"g-thumb-container\">\n      <div class=\"g-thumbs\"\n           [class.-no-transition]=\"thumbState.active\"\n           [ngStyle]=\"thumbState.style\">\n        <div *ngFor=\"let item of state.items;let i = index\"\n             class=\"g-thumb\"\n             [class.-current]=\"i === state.currIndex\"\n             (tapClick)=\"indexChange.emit(i)\"\n             [tapClickDisabled]=\"config.disableThumb\">\n          <ng-container [item]=\"item\" type=\"thumb\"></ng-container>\n        </div>\n      </div>\n    </div>\n  "
            },] },
];
GalleryThumbComponent.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], },
]; };
GalleryThumbComponent.propDecorators = {
    "state": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] },],
    "config": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] },],
    "indexChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] },],
    "height": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"], args: ['style.height',] },],
    "width": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"], args: ['style.width',] },],
};
var GalleryDotsComponent = /** @class */ (function () {
    function GalleryDotsComponent() {
        this.indexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    }
    return GalleryDotsComponent;
}());
GalleryDotsComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"], args: [{
                selector: 'gallery-dots',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
                preserveWhitespaces: false,
                template: "\n    <div class=\"g-dot\"\n         *ngFor=\"let item of state.items; let i = index\"\n         (tapClick)=\"indexChange.emit(i)\">\n      <div class=\"g-dot-inner\"\n           [class.-current]=\"i === state.currIndex\"></div>\n    </div>\n  "
            },] },
];
GalleryDotsComponent.ctorParameters = function () { return []; };
GalleryDotsComponent.propDecorators = {
    "state": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] },],
    "indexChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] },],
};
var GallerySliderComponent = /** @class */ (function () {
    function GallerySliderComponent(_el, platform) {
        var _this = this;
        this._el = _el;
        this.platform = platform;
        this.stateStream$ = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({ value: 0, active: false });
        this.indexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.sliderState$ = this.stateStream$.pipe(Object(rxjs_operators_map__WEBPACK_IMPORTED_MODULE_5__["map"])(function (state) { return ({
            style: _this.sliderStyle(state.value),
            active: state.active
        }); }));
    }
    GallerySliderComponent.prototype.viewDepth = function () {
        return { transform: "perspective(50px) translate3d(0, 0, " + -this.config.zoomOut + "px)" };
    };
    GallerySliderComponent.prototype.sliderStyle = function (delta) {
        switch (this.config.slidingDirection) {
            case 'horizontal':
                return {
                    transform: "translate3d(" + (-(this.state.currIndex * this._el.nativeElement.offsetWidth) + delta) + "px, 0, 0)",
                    width: this._el.nativeElement.offsetWidth * this.state.items.length + 'px',
                    height: '100%'
                };
            case 'vertical':
                return {
                    transform: "translate3d(0, " + (-(this.state.currIndex * this._el.nativeElement.offsetHeight) + delta) + "px, 0)",
                    width: '100%',
                    height: this._el.nativeElement.offsetHeight * this.state.items.length + 'px',
                };
        }
    };
    GallerySliderComponent.prototype.ngOnChanges = function () {
        this.stateStream$.next({ value: 0, active: false });
    };
    GallerySliderComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.config.gestures && typeof Hammer !== 'undefined') {
            this.mc = new Hammer(this._el.nativeElement);
            this.mc.get('pan').set({ direction: Hammer.DIRECTION_ALL });
            this.mc.on('pan', function (e) {
                switch (_this.config.slidingDirection) {
                    case 'horizontal':
                        _this.stateStream$.next({ value: e.deltaX, active: true });
                        if (e.isFinal) {
                            _this.stateStream$.next({ value: 0, active: false });
                            _this.horizontalPan(e);
                        }
                        break;
                    case 'vertical':
                        _this.stateStream$.next({ value: e.deltaY, active: true });
                        if (e.isFinal) {
                            _this.stateStream$.next({ value: 0, active: false });
                            _this.verticalPan(e);
                        }
                }
            });
        }
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["isPlatformBrowser"])(this.platform)) {
            this.resizeSub$ = Object(rxjs_observable_fromEvent__WEBPACK_IMPORTED_MODULE_8__["fromEvent"])(window, 'resize').pipe(Object(rxjs_operators_debounceTime__WEBPACK_IMPORTED_MODULE_9__["debounceTime"])(200), Object(rxjs_operators_tap__WEBPACK_IMPORTED_MODULE_7__["tap"])(function () { return _this.stateStream$.next(_this.stateStream$.getValue()); })).subscribe();
        }
        setTimeout(function () {
            _this.stateStream$.next({ value: 0, active: false });
        }, 300);
    };
    GallerySliderComponent.prototype.ngOnDestroy = function () {
        if (this.mc) {
            this.mc.destroy();
        }
        if (this.resizeSub$) {
            this.resizeSub$.unsubscribe();
        }
    };
    GallerySliderComponent.prototype.verticalPan = function (e) {
        if (e.velocityY > 0.3) {
            this.indexChange.emit('prev');
        }
        else if (e.velocityY < -0.3) {
            this.indexChange.emit('next');
        }
        else {
            if (e.deltaY / 2 <= -this._el.nativeElement.offsetHeight * this.state.items.length / this.config.panSensitivity) {
                this.indexChange.emit('next');
            }
            else if (e.deltaY / 2 >= this._el.nativeElement.offsetHeight * this.state.items.length / this.config.panSensitivity) {
                this.indexChange.emit('prev');
            }
            else {
                this.indexChange.emit(this.state.currIndex);
            }
        }
    };
    GallerySliderComponent.prototype.horizontalPan = function (e) {
        if (e.velocityX > 0.3) {
            this.indexChange.emit('prev');
        }
        else if (e.velocityX < -0.3) {
            this.indexChange.emit('next');
        }
        else {
            if (e.deltaX / 2 <= -this._el.nativeElement.offsetWidth * this.state.items.length / this.config.panSensitivity) {
                this.indexChange.emit('next');
            }
            else if (e.deltaX / 2 >= this._el.nativeElement.offsetWidth * this.state.items.length / this.config.panSensitivity) {
                this.indexChange.emit('prev');
            }
            else {
                this.indexChange.emit(this.state.currIndex);
            }
        }
    };
    return GallerySliderComponent;
}());
GallerySliderComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"], args: [{
                selector: 'gallery-slider',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
                preserveWhitespaces: false,
                template: "\n    <div *ngIf=\"sliderState$ | async; let sliderState\"\n         class=\"slides-container\"\n         [ngStyle]=\"viewDepth()\">\n      <div class=\"slides\"\n           [class.-no-transition]=\"sliderState.active\"\n           [ngStyle]=\"sliderState.style\">\n        <div *ngFor=\"let item of state.items\" class=\"slide\">\n          <ng-container [item]=\"item\"></ng-container>\n        </div>\n      </div>\n    </div>\n    <ng-content></ng-content>\n  "
            },] },
];
GallerySliderComponent.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], },
    { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["PLATFORM_ID"],] },] },
]; };
GallerySliderComponent.propDecorators = {
    "state": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] },],
    "config": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] },],
    "width": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] },],
    "height": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] },],
    "indexChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] },],
};
var GalleryCounterComponent = /** @class */ (function () {
    function GalleryCounterComponent() {
    }
    return GalleryCounterComponent;
}());
GalleryCounterComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"], args: [{
                selector: 'gallery-counter',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
                preserveWhitespaces: false,
                template: "<div class=\"g-counter\">{{(state.currIndex + 1) + '/' + state.items.length}}</div>"
            },] },
];
GalleryCounterComponent.ctorParameters = function () { return []; };
GalleryCounterComponent.propDecorators = {
    "state": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] },],
};
var LazyDirective = /** @class */ (function () {
    function LazyDirective(el, renderer) {
        var _this = this;
        this.el = el;
        this.renderer = renderer;
        this.worker$ = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
        this.loading = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        var img = this.renderer.createElement('img');
        this.worker$.pipe(Object(rxjs_operators_switchMap__WEBPACK_IMPORTED_MODULE_11__["switchMap"])(function (imageSrc) {
            _this.loading.emit(true);
            img.src = imageSrc;
            var imageSuccess = Object(rxjs_observable_fromEvent__WEBPACK_IMPORTED_MODULE_8__["fromEvent"])(img, 'load').pipe(Object(rxjs_operators_tap__WEBPACK_IMPORTED_MODULE_7__["tap"])(function () {
                _this.renderer.setStyle(_this.el.nativeElement, 'backgroundImage', "url(" + imageSrc + ")");
                _this.loading.emit(false);
            }));
            var imageError = Object(rxjs_observable_fromEvent__WEBPACK_IMPORTED_MODULE_8__["fromEvent"])(img, 'error').pipe(Object(rxjs_operators_tap__WEBPACK_IMPORTED_MODULE_7__["tap"])(function () { return _this.loading.emit(false); }));
            return Object(rxjs_observable_zip__WEBPACK_IMPORTED_MODULE_12__["zip"])(imageSuccess, imageError);
        })).subscribe();
    }
    Object.defineProperty(LazyDirective.prototype, "lazyImage", {
        set: function (imagePath) {
            this.getImage(imagePath);
        },
        enumerable: true,
        configurable: true
    });
    LazyDirective.prototype.getImage = function (imagePath) {
        this.worker$.next(imagePath);
    };
    LazyDirective.prototype.ngOnDestroy = function () {
        this.worker$.unsubscribe();
    };
    return LazyDirective;
}());
LazyDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"], args: [{
                selector: '[lazyImage]'
            },] },
];
LazyDirective.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"], },
]; };
LazyDirective.propDecorators = {
    "lazyImage": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['lazyImage',] },],
    "loading": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] },],
};
var TapClickDirective = /** @class */ (function () {
    function TapClickDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.tapClick = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    }
    TapClickDirective.prototype.ngOnInit = function () {
        this.setTapEvent();
    };
    TapClickDirective.prototype.setTapEvent = function () {
        var _this = this;
        if (typeof Hammer !== 'undefined') {
            this.mc = new Hammer(this.el.nativeElement);
            this.mc.on('tap', function () {
                if (!_this.tapClickDisabled) {
                    _this.tapClick.emit(null);
                }
            });
        }
        else {
            this.clickListener = this.renderer.listen(this.el.nativeElement, 'click', function (e) {
                e.stopPropagation();
                if (!_this.tapClickDisabled) {
                    _this.tapClick.emit(null);
                }
            });
        }
    };
    TapClickDirective.prototype.ngOnDestroy = function () {
        if (this.mc) {
            this.mc.destroy();
        }
        else {
            this.clickListener();
        }
    };
    return TapClickDirective;
}());
TapClickDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"], args: [{
                selector: '[tapClick]'
            },] },
];
TapClickDirective.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"], },
]; };
TapClickDirective.propDecorators = {
    "tapClickDisabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] },],
    "tapClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] },],
};
var GalleryItemDirective = /** @class */ (function () {
    function GalleryItemDirective(componentFactoryResolver, viewContainerRef) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.viewContainerRef = viewContainerRef;
        this.type = 'slide';
    }
    GalleryItemDirective.prototype.ngOnInit = function () {
        var componentFactory = this.componentFactoryResolver
            .resolveComponentFactory(this.item[this.type === 'slide' ? 'component' : 'thumbComponent']);
        this.viewContainerRef.clear();
        var componentRef = this.viewContainerRef.createComponent(componentFactory);
        var galleryItem = componentRef.instance;
        galleryItem.data = this.item.data;
    };
    return GalleryItemDirective;
}());
GalleryItemDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"], args: [{
                selector: '[item]'
            },] },
];
GalleryItemDirective.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ComponentFactoryResolver"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"], },
]; };
GalleryItemDirective.propDecorators = {
    "item": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] },],
    "type": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] },],
};
function galleryFactory(galleryConfig) {
    return new Gallery(galleryConfig);
}
var GalleryModule = /** @class */ (function () {
    function GalleryModule() {
    }
    GalleryModule.forRoot = function (config) {
        return {
            ngModule: GalleryModule,
            providers: [
                {
                    provide: GALLERY_CONFIG,
                    useValue: config
                },
                {
                    provide: Gallery,
                    useFactory: galleryFactory,
                    deps: [GALLERY_CONFIG]
                }
            ]
        };
    };
    return GalleryModule;
}());
GalleryModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"], args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"]
                ],
                declarations: [
                    GalleryComponent,
                    GalleryCoreComponent,
                    GalleryNavComponent,
                    GalleryThumbComponent,
                    GalleryDotsComponent,
                    GallerySliderComponent,
                    GalleryCounterComponent,
                    ImageItemComponent,
                    VideoItemComponent,
                    IframeItemComponent,
                    ThumbnailItemComponent,
                    GalleryItemDirective,
                    LazyDirective,
                    TapClickDirective
                ],
                exports: [
                    GalleryComponent,
                    LazyDirective,
                    TapClickDirective
                ],
                entryComponents: [
                    IframeItemComponent,
                    ImageItemComponent,
                    VideoItemComponent,
                    ThumbnailItemComponent
                ]
            },] },
];
GalleryModule.ctorParameters = function () { return []; };


//# sourceMappingURL=ngx-gallery-core.js.map


/***/ }),

/***/ "./node_modules/@ngx-gallery/gallerize/esm5/ngx-gallery-gallerize.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@ngx-gallery/gallerize/esm5/ngx-gallery-gallerize.js ***!
  \***************************************************************************/
/*! exports provided: GallerizeDirective, GallerizeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GallerizeDirective", function() { return GallerizeDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GallerizeModule", function() { return GallerizeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-gallery/core */ "./node_modules/@ngx-gallery/core/esm5/ngx-gallery-core.js");
/* harmony import */ var _ngx_gallery_lightbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-gallery/lightbox */ "./node_modules/@ngx-gallery/lightbox/esm5/ngx-gallery-lightbox.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
/* harmony import */ var rxjs_observable_from__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/observable/from */ "./node_modules/rxjs-compat/_esm5/observable/from.js");
/* harmony import */ var rxjs_observable_empty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/observable/empty */ "./node_modules/rxjs-compat/_esm5/observable/empty.js");
/* harmony import */ var rxjs_operators_map__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators/map */ "./node_modules/rxjs-compat/_esm5/operators/map.js");
/* harmony import */ var rxjs_operators_tap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators/tap */ "./node_modules/rxjs-compat/_esm5/operators/tap.js");
/* harmony import */ var rxjs_operators_switchMap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators/switchMap */ "./node_modules/rxjs-compat/_esm5/operators/switchMap.js");
/* harmony import */ var rxjs_operators_debounceTime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators/debounceTime */ "./node_modules/rxjs-compat/_esm5/operators/debounceTime.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");













var GallerizeDirective = /** @class */ (function () {
    function GallerizeDirective(_el, _renderer, _lightbox, _gallery, platform) {
        this._el = _el;
        this._renderer = _renderer;
        this._lightbox = _lightbox;
        this._gallery = _gallery;
        this.platform = platform;
        this.gallerizer$ = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.gallerize = 'root';
    }
    GallerizeDirective.prototype.ngOnInit = function () {
        var _this = this;
        var galleryRef = this._gallery.ref(this.gallerize);
        var classes = (this.forClass) ? this.forClass.split(' ').map(function (className) { return '.' + className; }) : '';
        this.gallerizer$.pipe(Object(rxjs_operators_debounceTime__WEBPACK_IMPORTED_MODULE_10__["debounceTime"])(300), Object(rxjs_operators_switchMap__WEBPACK_IMPORTED_MODULE_9__["switchMap"])(function () {
            var imageElements = _this._el.nativeElement.querySelectorAll('img' + classes);
            if (imageElements && imageElements.length) {
                var images_1 = [];
                return Object(rxjs_observable_from__WEBPACK_IMPORTED_MODULE_5__["from"])(imageElements).pipe(Object(rxjs_operators_map__WEBPACK_IMPORTED_MODULE_7__["map"])(function (img, i) {
                    _this._renderer.setStyle(img, 'cursor', 'pointer');
                    _this._renderer.setProperty(img, 'onclick', function () { return _this._lightbox.open(i, _this.gallerize); });
                    return img;
                }), Object(rxjs_operators_tap__WEBPACK_IMPORTED_MODULE_8__["tap"])(function (img) { return images_1.push(new _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_2__["ImageItem"](img.src, img.src)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["finalize"])(function () { return galleryRef.load(images_1); }));
            }
            else {
                return Object(rxjs_observable_empty__WEBPACK_IMPORTED_MODULE_6__["empty"])();
            }
        })).subscribe();
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platform)) {
            this.observer = new MutationObserver(function () { return _this.gallerizer$.next(); });
            this.observer.observe(this._el.nativeElement, { childList: true, subtree: true });
        }
    };
    GallerizeDirective.prototype.ngOnDestroy = function () {
        this.gallerizer$.complete();
        if (this.observer) {
            this.observer.disconnect();
        }
    };
    return GallerizeDirective;
}());
GallerizeDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[gallerize]'
            },] },
];
GallerizeDirective.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
    { type: _ngx_gallery_lightbox__WEBPACK_IMPORTED_MODULE_3__["Lightbox"], },
    { type: _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_2__["Gallery"], },
    { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] },] },
]; };
GallerizeDirective.propDecorators = {
    "gallerize": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "forClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
};
var GallerizeModule = /** @class */ (function () {
    function GallerizeModule() {
    }
    return GallerizeModule;
}());
GallerizeModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_2__["GalleryModule"],
                    _ngx_gallery_lightbox__WEBPACK_IMPORTED_MODULE_3__["LightboxModule"]
                ],
                declarations: [GallerizeDirective],
                exports: [GallerizeDirective]
            },] },
];
GallerizeModule.ctorParameters = function () { return []; };


//# sourceMappingURL=ngx-gallery-gallerize.js.map


/***/ }),

/***/ "./node_modules/@ngx-gallery/lightbox/esm5/ngx-gallery-lightbox.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@ngx-gallery/lightbox/esm5/ngx-gallery-lightbox.js ***!
  \*************************************************************************/
/*! exports provided: LightboxComponent, Lightbox, lightboxFactory, LightboxModule, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LightboxComponent", function() { return LightboxComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lightbox", function() { return Lightbox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lightboxFactory", function() { return lightboxFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LightboxModule", function() { return LightboxModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return LIGHTBOX_CONFIG; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-gallery/core */ "./node_modules/@ngx-gallery/core/esm5/ngx-gallery-core.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");








var LightboxComponent = /** @class */ (function () {
    function LightboxComponent() {
    }
    LightboxComponent.prototype.onMouseLeave = function (e) {
        if (e.toState === 'void') {
            this.overlayRef.dispose();
        }
    };
    return LightboxComponent;
}());
LightboxComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'lightbox',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                preserveWhitespaces: false,
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('slideDialog', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(0%) scale(1)', opacity: 1 })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(25%) scale(0.9)', opacity: 0 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms cubic-bezier(0.25, 0.8, 0.25, 1)')
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms cubic-bezier(0.25, 0.8, 0.25, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(25%)', opacity: 0 }))
                        ]),
                    ])
                ],
                template: "\n    <gallery [id]=\"id\" [destroyRef]=\"false\">\n      <button class=\"g-btn-close\" (click)=\"overlayRef.detach()\"></button>\n    </gallery>\n  "
            },] },
];
LightboxComponent.ctorParameters = function () { return []; };
LightboxComponent.propDecorators = {
    "slideAnimation": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['@slideDialog',] },],
    "onMouseLeave": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['@slideDialog.done', ['$event'],] },],
};
var LIGHTBOX_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('lightboxConfig');
var defaultConfig = {
    backdropClass: 'g-backdrop',
    panelClass: 'g-overlay',
    hasBackdrop: true,
    keyboardShortcuts: true
};
var Lightbox = /** @class */ (function () {
    function Lightbox(config, _gallery, _overlay) {
        this._gallery = _gallery;
        this._overlay = _overlay;
        this._config = Object.assign({}, defaultConfig, config);
    }
    Lightbox.prototype.setConfig = function (config) {
        this._config = Object.assign({}, this._config, config);
    };
    Lightbox.prototype.open = function (i, id, config) {
        var _this = this;
        if (i === void 0) { i = 0; }
        if (id === void 0) { id = 'lightbox'; }
        var _config = config ? Object.assign({}, this._config, config) : this._config;
        var overlayConfig = {
            backdropClass: _config.backdropClass,
            panelClass: _config.panelClass,
            hasBackdrop: _config.hasBackdrop,
            positionStrategy: this._overlay.position().global().centerHorizontally().centerVertically(),
            scrollStrategy: this._overlay.scrollStrategies.block()
        };
        var galleryRef = this._gallery.ref(id);
        galleryRef.set(i);
        this._overlayRef = this._overlay.create(overlayConfig);
        var galleryPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["ComponentPortal"](LightboxComponent);
        var lightboxRef = this._overlayRef.attach(galleryPortal);
        lightboxRef.instance.id = id;
        lightboxRef.instance.overlayRef = this._overlayRef;
        if (_config.hasBackdrop) {
            this._overlayRef.backdropClick().subscribe(function () { return _this.close(); });
        }
        if (_config.keyboardShortcuts) {
            this._overlayRef.keydownEvents().subscribe(function (event) {
                switch (event.keyCode) {
                    case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["LEFT_ARROW"]:
                        galleryRef.prev(id);
                        break;
                    case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["RIGHT_ARROW"]:
                        galleryRef.next(id);
                        break;
                    case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["ESCAPE"]:
                        _this.close();
                }
            });
        }
    };
    Lightbox.prototype.close = function () {
        if (this._overlayRef.hasAttached()) {
            this._overlayRef.detach();
        }
    };
    return Lightbox;
}());
Lightbox.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
];
Lightbox.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [LIGHTBOX_CONFIG,] },] },
    { type: _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_2__["Gallery"], },
    { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["Overlay"], },
]; };
function lightboxFactory(config, gallery, overlay) {
    return new Lightbox(config, gallery, overlay);
}
var LightboxModule = /** @class */ (function () {
    function LightboxModule() {
    }
    LightboxModule.forRoot = function (config) {
        return {
            ngModule: LightboxModule,
            providers: [
                {
                    provide: LIGHTBOX_CONFIG,
                    useValue: config
                },
                {
                    provide: Lightbox,
                    useFactory: lightboxFactory,
                    deps: [LIGHTBOX_CONFIG, _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_2__["Gallery"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["Overlay"]]
                }
            ]
        };
    };
    return LightboxModule;
}());
LightboxModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
                    _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["OverlayModule"],
                    _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_2__["GalleryModule"]
                ],
                declarations: [
                    LightboxComponent
                ],
                entryComponents: [
                    LightboxComponent
                ]
            },] },
];
LightboxModule.ctorParameters = function () { return []; };


//# sourceMappingURL=ngx-gallery-lightbox.js.map


/***/ }),

/***/ "./node_modules/rxjs-compat/_esm5/observable/empty.js":
/*!************************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/observable/empty.js ***!
  \************************************************************/
/*! exports provided: empty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "empty", function() { return rxjs__WEBPACK_IMPORTED_MODULE_0__["empty"]; });


//# sourceMappingURL=empty.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm5/observable/from.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/observable/from.js ***!
  \***********************************************************/
/*! exports provided: from */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "from", function() { return rxjs__WEBPACK_IMPORTED_MODULE_0__["from"]; });


//# sourceMappingURL=from.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm5/observable/fromEvent.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/observable/fromEvent.js ***!
  \****************************************************************/
/*! exports provided: fromEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fromEvent", function() { return rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEvent"]; });


//# sourceMappingURL=fromEvent.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm5/observable/zip.js":
/*!**********************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/observable/zip.js ***!
  \**********************************************************/
/*! exports provided: zip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zip", function() { return rxjs__WEBPACK_IMPORTED_MODULE_0__["zip"]; });


//# sourceMappingURL=zip.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm5/operators/debounceTime.js":
/*!******************************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/operators/debounceTime.js ***!
  \******************************************************************/
/*! exports provided: debounceTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "debounceTime", function() { return rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["debounceTime"]; });


//# sourceMappingURL=debounceTime.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm5/operators/filter.js":
/*!************************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/operators/filter.js ***!
  \************************************************************/
/*! exports provided: filter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["filter"]; });


//# sourceMappingURL=filter.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm5/operators/map.js":
/*!*********************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/operators/map.js ***!
  \*********************************************************/
/*! exports provided: map */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "map", function() { return rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"]; });


//# sourceMappingURL=map.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm5/operators/switchMap.js":
/*!***************************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/operators/switchMap.js ***!
  \***************************************************************/
/*! exports provided: switchMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "switchMap", function() { return rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"]; });


//# sourceMappingURL=switchMap.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm5/operators/tap.js":
/*!*********************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/operators/tap.js ***!
  \*********************************************************/
/*! exports provided: tap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tap", function() { return rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"]; });


//# sourceMappingURL=tap.js.map

/***/ })

}]);
//# sourceMappingURL=attractions-attractions-module~companies-companies-module~restaurants-restaurants-module~shelters-sh~a989ca3c.js.map