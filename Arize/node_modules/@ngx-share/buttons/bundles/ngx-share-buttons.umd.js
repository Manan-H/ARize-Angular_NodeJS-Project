(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@ngx-share/button'), require('@ngx-share/core'), require('rxjs'), require('rxjs/operators'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@ngx-share/buttons', ['exports', '@angular/common', '@ngx-share/button', '@ngx-share/core', 'rxjs', 'rxjs/operators', '@angular/core'], factory) :
    (factory((global['ngx-share'] = global['ngx-share'] || {}, global['ngx-share'].buttons = {}),global.ng.common,global.button,global.core,global.rxjs,global.rxjs.operators,global.ng.core));
}(this, (function (exports,common,button,core,rxjs,operators,core$1) { 'use strict';

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
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ShareButtons = /** @class */ (function () {
        function ShareButtons(_share) {
            this._share = _share;
            this._state$ = new rxjs.BehaviorSubject({
                includedButtons: [],
                excludedButtons: [],
                userButtons: [],
                selectedButtons: [],
                expanded: true,
                shownCount: Object.keys(core.SHARE_BUTTONS).length
            });
            this._configSub$ = rxjs.Subscription.EMPTY;
            this.theme = this._share.config.theme;
            /**
             * Show buttons icons
             */
            this.showIcon = true;
            /**
             * Show buttons text
             */
            this.showText = false;
            /**
             * Show sharing count
             */
            this.showCount = false;
            /**
             * Buttons size
             */
            this.size = 0;
            /**
             * Share count event
             */
            this.count = new core$1.EventEmitter();
            /**
             * Share dialog opened event
             */
            this.opened = new core$1.EventEmitter();
            /**
             * Share dialog closed event
             */
            this.closed = new core$1.EventEmitter();
        }
        Object.defineProperty(ShareButtons.prototype, "includedButtons", {
            set: /**
             * @param {?} includedButtons
             * @return {?}
             */ function (includedButtons) {
                this.updateState({ includedButtons: includedButtons });
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ShareButtons.prototype, "excludedButtons", {
            set: /**
             * @param {?} excludedButtons
             * @return {?}
             */ function (excludedButtons) {
                this.updateState({ excludedButtons: excludedButtons });
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ShareButtons.prototype, "shownButtons", {
            set: /**
             * @param {?} shownCount
             * @return {?}
             */ function (shownCount) {
                this.updateState({ shownCount: shownCount });
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        ShareButtons.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.state$ = this._state$.pipe(operators.map(function (state) {
                    // Use component include buttons, otherwise fallback to global include buttons
                    /** @type {?} */
                    var includedButtons = state.includedButtons.length ? state.includedButtons : state.userButtons;
                    /** @type {?} */
                    var userButtons = includedButtons.filter(function (btn) { return state.excludedButtons.indexOf(btn) < 0; });
                    /** @type {?} */
                    var selectedButtons = userButtons.slice(0, state.expanded ? userButtons.length : state.shownCount);
                    return {
                        userButtons: userButtons,
                        selectedButtons: selectedButtons,
                        expanded: state.expanded,
                        shownCount: state.shownCount,
                        moreIcon: state.moreIcon,
                        lessIcon: state.lessIcon
                    };
                }));
                // Subscribe to share buttons config changes, This updates the component whenever a new button is added
                this._configSub$ = this._share.config$.subscribe(function (config) {
                    // Use global include buttons, otherwise fallback to all buttons
                    /** @type {?} */
                    var includedButtons = config.include.length ? config.include : Object.keys(core.SHARE_BUTTONS);
                    /** @type {?} */
                    var userButtons = includedButtons.filter(function (btn) { return config.exclude.indexOf(btn) < 0; });
                    _this.updateState({
                        userButtons: userButtons,
                        expanded: false,
                        moreIcon: config.moreButtonIcon,
                        lessIcon: config.lessButtonIcon
                    });
                });
            };
        /**
         * @return {?}
         */
        ShareButtons.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this._configSub$.unsubscribe();
                this._state$.complete();
            };
        /**
         * @param {?} state
         * @return {?}
         */
        ShareButtons.prototype.updateState = /**
         * @param {?} state
         * @return {?}
         */
            function (state) {
                this._state$.next(__assign({}, this._state$.value, state));
            };
        ShareButtons.decorators = [
            { type: core$1.Component, args: [{
                        selector: 'share-buttons',
                        template: "<div *ngIf=\"state$ | async; let state\" class=\"sb-group sb-{{theme}}\">\r\n\r\n  <share-button *ngFor=\"let button of state.selectedButtons\"\r\n                [button]=\"button\"\r\n                [theme]=\"theme\"\r\n                [url]=\"url\"\r\n                [title]=\"title\"\r\n                [description]=\"description\"\r\n                [image]=\"image\"\r\n                [tags]=\"tags\"\r\n                [autoSetMeta]=\"autoSetMeta\"\r\n                [showCount]=\"showCount\"\r\n                [showIcon]=\"showIcon\"\r\n                [showText]=\"showText\"\r\n                [size]=\"size\"\r\n                (opened)=\"opened.emit($event)\"\r\n                (closed)=\"closed.emit($event)\"\r\n                (count)=\"count.emit($event)\"></share-button>\r\n\r\n  <div class=\"sb-button sb-{{theme}}\">\r\n\r\n    <expand-button *ngIf=\"state.shownCount < state.userButtons.length\"\r\n                   [expanded]=\"state.expanded\"\r\n                   [moreIcon]=\"state.moreIcon\"\r\n                   [lessIcon]=\"state.lessIcon\"\r\n                   [size]=\"(1 + size/20) * 14\"\r\n                   (toggle)=\"updateState({expanded: $event})\">\r\n    </expand-button>\r\n\r\n  </div>\r\n</div>\r\n",
                        changeDetection: core$1.ChangeDetectionStrategy.OnPush,
                        styles: [":host{display:inherit}"]
                    }] }
        ];
        /** @nocollapse */
        ShareButtons.ctorParameters = function () {
            return [
                { type: core.ShareService }
            ];
        };
        ShareButtons.propDecorators = {
            theme: [{ type: core$1.Input }],
            includedButtons: [{ type: core$1.Input, args: ['include',] }],
            excludedButtons: [{ type: core$1.Input, args: ['exclude',] }],
            shownButtons: [{ type: core$1.Input, args: ['show',] }],
            url: [{ type: core$1.Input }],
            title: [{ type: core$1.Input }],
            description: [{ type: core$1.Input }],
            image: [{ type: core$1.Input }],
            tags: [{ type: core$1.Input }],
            autoSetMeta: [{ type: core$1.Input }],
            showIcon: [{ type: core$1.Input }],
            showText: [{ type: core$1.Input }],
            showCount: [{ type: core$1.Input }],
            size: [{ type: core$1.Input }],
            count: [{ type: core$1.Output }],
            opened: [{ type: core$1.Output }],
            closed: [{ type: core$1.Output }]
        };
        return ShareButtons;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ExpandButton = /** @class */ (function () {
        function ExpandButton(el) {
            this.toggle = new core$1.EventEmitter();
            el.nativeElement.style.setProperty('--button-color', '#FF6651');
        }
        ExpandButton.decorators = [
            { type: core$1.Component, args: [{
                        selector: 'expand-button',
                        changeDetection: core$1.ChangeDetectionStrategy.OnPush,
                        template: "\n    <button class=\"sb-wrapper sb-expand sb-show-icon\"\n            [style.fontSize.px]=\"size\"\n            (click)=\"toggle.emit(!expanded)\">\n\n      <div class=\"sb-inner\">\n        <div class=\"sb-content\">\n          <div class=\"sb-icon\">\n            <fa-icon [icon]=\"expanded ? lessIcon : moreIcon\"></fa-icon>\n          </div>\n        </div>\n      </div>\n    </button>\n  "
                    }] }
        ];
        /** @nocollapse */
        ExpandButton.ctorParameters = function () {
            return [
                { type: core$1.ElementRef }
            ];
        };
        ExpandButton.propDecorators = {
            moreIcon: [{ type: core$1.Input }],
            lessIcon: [{ type: core$1.Input }],
            expanded: [{ type: core$1.Input }],
            size: [{ type: core$1.Input }],
            toggle: [{ type: core$1.Output }]
        };
        return ExpandButton;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ShareButtonsModule = /** @class */ (function () {
        function ShareButtonsModule() {
        }
        /**
         * @param {?=} config
         * @return {?}
         */
        ShareButtonsModule.withConfig = /**
         * @param {?=} config
         * @return {?}
         */
            function (config) {
                return {
                    ngModule: ShareButtonsModule,
                    providers: [{ provide: core.SHARE_BUTTONS_CONFIG, useValue: config }]
                };
            };
        ShareButtonsModule.decorators = [
            { type: core$1.NgModule, args: [{
                        declarations: [
                            ShareButtons,
                            ExpandButton
                        ],
                        imports: [
                            button.ShareButtonModule,
                            common.CommonModule
                        ],
                        exports: [
                            button.ShareButtonModule,
                            ShareButtons
                        ]
                    },] }
        ];
        return ShareButtonsModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.ShareButtonsModule = ShareButtonsModule;
    exports.ShareButtons = ShareButtons;
    exports.ɵa = ExpandButton;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ngx-share-buttons.umd.js.map