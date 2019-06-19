import { CommonModule } from '@angular/common';
import { ShareButtonModule } from '@ngx-share/button';
import { __assign } from 'tslib';
import { ShareService, SHARE_BUTTONS, SHARE_BUTTONS_CONFIG } from '@ngx-share/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ElementRef, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ShareButtons = /** @class */ (function () {
    function ShareButtons(_share) {
        this._share = _share;
        this._state$ = new BehaviorSubject({
            includedButtons: [],
            excludedButtons: [],
            userButtons: [],
            selectedButtons: [],
            expanded: true,
            shownCount: Object.keys(SHARE_BUTTONS).length
        });
        this._configSub$ = Subscription.EMPTY;
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
        this.count = new EventEmitter();
        /**
         * Share dialog opened event
         */
        this.opened = new EventEmitter();
        /**
         * Share dialog closed event
         */
        this.closed = new EventEmitter();
    }
    Object.defineProperty(ShareButtons.prototype, "includedButtons", {
        set: /**
         * @param {?} includedButtons
         * @return {?}
         */
        function (includedButtons) {
            this.updateState({ includedButtons: includedButtons });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShareButtons.prototype, "excludedButtons", {
        set: /**
         * @param {?} excludedButtons
         * @return {?}
         */
        function (excludedButtons) {
            this.updateState({ excludedButtons: excludedButtons });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShareButtons.prototype, "shownButtons", {
        set: /**
         * @param {?} shownCount
         * @return {?}
         */
        function (shownCount) {
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
        this.state$ = this._state$.pipe(map(function (state) {
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
            var includedButtons = config.include.length ? config.include : Object.keys(SHARE_BUTTONS);
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
        { type: Component, args: [{
                    selector: 'share-buttons',
                    template: "<div *ngIf=\"state$ | async; let state\" class=\"sb-group sb-{{theme}}\">\r\n\r\n  <share-button *ngFor=\"let button of state.selectedButtons\"\r\n                [button]=\"button\"\r\n                [theme]=\"theme\"\r\n                [url]=\"url\"\r\n                [title]=\"title\"\r\n                [description]=\"description\"\r\n                [image]=\"image\"\r\n                [tags]=\"tags\"\r\n                [autoSetMeta]=\"autoSetMeta\"\r\n                [showCount]=\"showCount\"\r\n                [showIcon]=\"showIcon\"\r\n                [showText]=\"showText\"\r\n                [size]=\"size\"\r\n                (opened)=\"opened.emit($event)\"\r\n                (closed)=\"closed.emit($event)\"\r\n                (count)=\"count.emit($event)\"></share-button>\r\n\r\n  <div class=\"sb-button sb-{{theme}}\">\r\n\r\n    <expand-button *ngIf=\"state.shownCount < state.userButtons.length\"\r\n                   [expanded]=\"state.expanded\"\r\n                   [moreIcon]=\"state.moreIcon\"\r\n                   [lessIcon]=\"state.lessIcon\"\r\n                   [size]=\"(1 + size/20) * 14\"\r\n                   (toggle)=\"updateState({expanded: $event})\">\r\n    </expand-button>\r\n\r\n  </div>\r\n</div>\r\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [":host{display:inherit}"]
                }] }
    ];
    /** @nocollapse */
    ShareButtons.ctorParameters = function () { return [
        { type: ShareService }
    ]; };
    ShareButtons.propDecorators = {
        theme: [{ type: Input }],
        includedButtons: [{ type: Input, args: ['include',] }],
        excludedButtons: [{ type: Input, args: ['exclude',] }],
        shownButtons: [{ type: Input, args: ['show',] }],
        url: [{ type: Input }],
        title: [{ type: Input }],
        description: [{ type: Input }],
        image: [{ type: Input }],
        tags: [{ type: Input }],
        autoSetMeta: [{ type: Input }],
        showIcon: [{ type: Input }],
        showText: [{ type: Input }],
        showCount: [{ type: Input }],
        size: [{ type: Input }],
        count: [{ type: Output }],
        opened: [{ type: Output }],
        closed: [{ type: Output }]
    };
    return ShareButtons;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ExpandButton = /** @class */ (function () {
    function ExpandButton(el) {
        this.toggle = new EventEmitter();
        el.nativeElement.style.setProperty('--button-color', '#FF6651');
    }
    ExpandButton.decorators = [
        { type: Component, args: [{
                    selector: 'expand-button',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: "\n    <button class=\"sb-wrapper sb-expand sb-show-icon\"\n            [style.fontSize.px]=\"size\"\n            (click)=\"toggle.emit(!expanded)\">\n\n      <div class=\"sb-inner\">\n        <div class=\"sb-content\">\n          <div class=\"sb-icon\">\n            <fa-icon [icon]=\"expanded ? lessIcon : moreIcon\"></fa-icon>\n          </div>\n        </div>\n      </div>\n    </button>\n  "
                }] }
    ];
    /** @nocollapse */
    ExpandButton.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    ExpandButton.propDecorators = {
        moreIcon: [{ type: Input }],
        lessIcon: [{ type: Input }],
        expanded: [{ type: Input }],
        size: [{ type: Input }],
        toggle: [{ type: Output }]
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
            providers: [{ provide: SHARE_BUTTONS_CONFIG, useValue: config }]
        };
    };
    ShareButtonsModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        ShareButtons,
                        ExpandButton
                    ],
                    imports: [
                        ShareButtonModule,
                        CommonModule
                    ],
                    exports: [
                        ShareButtonModule,
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

export { ShareButtonsModule, ShareButtons, ExpandButton as ɵa };

//# sourceMappingURL=ngx-share-buttons.js.map