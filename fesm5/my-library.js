import { Injectable, NgModule, Component, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MyLibraryService = /** @class */ (function () {
    function MyLibraryService() {
    }
    MyLibraryService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    MyLibraryService.ctorParameters = function () { return []; };
    /** @nocollapse */ MyLibraryService.ngInjectableDef = defineInjectable({ factory: function MyLibraryService_Factory() { return new MyLibraryService(); }, token: MyLibraryService, providedIn: "root" });
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
        { type: Component, args: [{
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
        { type: Component, args: [{
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
        { type: NgModule, args: [{
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

export { MyLibraryService, MyLibraryComponent, MyLibraryModule, ChildComponentComponent };

//# sourceMappingURL=my-library.js.map