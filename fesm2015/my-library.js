import { Injectable, Component, NgModule, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MyLibraryService {
    constructor() { }
}
MyLibraryService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
MyLibraryService.ctorParameters = () => [];
/** @nocollapse */ MyLibraryService.ngInjectableDef = defineInjectable({ factory: function MyLibraryService_Factory() { return new MyLibraryService(); }, token: MyLibraryService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MyLibraryComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
MyLibraryComponent.decorators = [
    { type: Component, args: [{
                selector: 'ml-my-library',
                template: `
    <p>This is my library main component</p>
  `
            }] }
];
/** @nocollapse */
MyLibraryComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ChildComponentComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
ChildComponentComponent.decorators = [
    { type: Component, args: [{
                selector: 'ml-child-component',
                template: "<p>This is the library child component</p>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
ChildComponentComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MyLibraryModule {
}
MyLibraryModule.decorators = [
    { type: NgModule, args: [{
                declarations: [MyLibraryComponent, ChildComponentComponent],
                imports: [],
                exports: [MyLibraryComponent, ChildComponentComponent]
            },] }
];

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