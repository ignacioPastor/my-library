(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('my-library', ['exports', '@angular/core'], factory) :
    (factory((global['my-library'] = {}),global.ng.core));
}(this, (function (exports,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MyLibraryService = /** @class */ (function () {
        function MyLibraryService() {
        }
        MyLibraryService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        MyLibraryService.ctorParameters = function () { return []; };
        /** @nocollapse */ MyLibraryService.ngInjectableDef = i0.defineInjectable({ factory: function MyLibraryService_Factory() { return new MyLibraryService(); }, token: MyLibraryService, providedIn: "root" });
        return MyLibraryService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MyLibraryComponent = /** @class */ (function () {
        function MyLibraryComponent() {
        }
        /**
         * @return {?}
         */
        MyLibraryComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        MyLibraryComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ml-my-library',
                        template: "\n    <p>This is my library main component</p>\n  "
                    }] }
        ];
        /** @nocollapse */
        MyLibraryComponent.ctorParameters = function () { return []; };
        return MyLibraryComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ChildComponentComponent = /** @class */ (function () {
        function ChildComponentComponent() {
        }
        /**
         * @return {?}
         */
        ChildComponentComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        ChildComponentComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ml-child-component',
                        template: "<p>This is the library child component</p>\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        ChildComponentComponent.ctorParameters = function () { return []; };
        return ChildComponentComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MyLibraryModule = /** @class */ (function () {
        function MyLibraryModule() {
        }
        MyLibraryModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [MyLibraryComponent, ChildComponentComponent],
                        imports: [],
                        exports: [MyLibraryComponent, ChildComponentComponent]
                    },] }
        ];
        return MyLibraryModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.MyLibraryService = MyLibraryService;
    exports.MyLibraryComponent = MyLibraryComponent;
    exports.MyLibraryModule = MyLibraryModule;
    exports.ChildComponentComponent = ChildComponentComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=my-library.umd.js.map