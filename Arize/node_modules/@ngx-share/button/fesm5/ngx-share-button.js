import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Component, Input, Output, ViewChild, HostBinding, EventEmitter, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { ShareService, ShareDirective, ShareModule, SHARE_BUTTONS_CONFIG } from '@ngx-share/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ShareButton = /** @class */ (function () {
    function ShareButton(_share) {
        this._share = _share;
        /**
         * Show button icon
         */
        this.showIcon = true;
        /**
         * Show button text
         */
        this.showText = false;
        /**
         * Show sharing count
         */
        this.showCount = false;
        /**
         * Button size
         */
        this.size = this._share.config.size;
        /**
         * Button theme
         */
        this.theme = this._share.config.theme;
        /**
         * Stream that emits when share count is fetched
         */
        this.count = new EventEmitter();
        /**
         * Stream that emits when share dialog is opened
         */
        this.opened = new EventEmitter();
        /**
         * Stream that emits when share dialog is closed
         */
        this.closed = new EventEmitter();
    }
    Object.defineProperty(ShareButton.prototype, "createButton", {
        set: /**
         * @param {?} button
         * @return {?}
         */
        function (button) {
            this.shareCount = 0;
            this.button = button;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShareButton.prototype, "setUrl", {
        /** Set the sharing link */
        set: /**
         * Set the sharing link
         * @param {?} url
         * @return {?}
         */
        function (url) {
            this.shareCount = 0;
            this.url = url;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShareButton.prototype, "buttonClass", {
        /** Set theme as button class */
        get: /**
         * Set theme as button class
         * @return {?}
         */
        function () {
            return "sb-button sb-" + this.theme;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} count
     * @return {?}
     */
    ShareButton.prototype.onCount = /**
     * @param {?} count
     * @return {?}
     */
    function (count) {
        this.shareCount = count;
        this.count.emit(count);
    };
    ShareButton.decorators = [
        { type: Component, args: [{
                    selector: 'share-button',
                    template: "<button class=\"sb-wrapper\"\r\n        [shareButton]=\"button\"\r\n        [url]=\"url\"\r\n        [image]=\"image\"\r\n        [title]=\"title\"\r\n        [description]=\"description\"\r\n        [tags]=\"tags\"\r\n        [autoSetMeta]=\"autoSetMeta\"\r\n        [getCount]=\"showCount\"\r\n        (count)=\"onCount($event)\"\r\n        (opened)=\"opened.emit($event)\"\r\n        (closed)=\"closed.emit($event)\"\r\n        [class.sb-show-icon]=\"showIcon\"\r\n        [class.sb-show-text]=\"showText\"\r\n        [class.sb-show-count]=\"showCount && shareCount\"\r\n        [style.fontSize.px]=\"(1 + size/20) * 14\">\r\n\r\n  <div class=\"sb-inner\">\r\n\r\n    <div class=\"sb-content\">\r\n\r\n      <div *ngIf=\"showIcon && ref.shareButton\" class=\"sb-icon\">\r\n        <fa-icon [icon]=\"icon || ref.shareButton.icon\" [fixedWidth]=\"true\"></fa-icon>\r\n      </div>\r\n\r\n      <div *ngIf=\"showText && ref.shareButton\" class=\"sb-text\">\r\n        {{ text || ref.shareButton.text }}\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div *ngIf=\"showCount && shareCount\" class=\"sb-count\">\r\n      <span>{{ shareCount | shareCount }}</span>\r\n    </div>\r\n\r\n  </div>\r\n</button>\r\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["::ng-deep .sb-button,::ng-deep .sb-group{display:inline-flex;align-items:flex-start}::ng-deep .sb-group{flex-wrap:wrap}::ng-deep .sb-button{margin:.3125em}::ng-deep .sb-wrapper{font-size:inherit;cursor:pointer;position:relative;outline:0;min-width:4.125em;height:2.5em;border:none;border-radius:1px;padding:0;line-height:2.571em;background-color:transparent}::ng-deep .sb-wrapper .sb-count,::ng-deep .sb-wrapper .sb-icon,::ng-deep .sb-wrapper .sb-text{display:flex;align-items:center;justify-content:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}::ng-deep .sb-wrapper .sb-inner{display:flex;flex:1;width:100%;height:100%}::ng-deep .sb-wrapper .sb-content{display:flex;height:100%;width:100%}::ng-deep .sb-wrapper .sb-text{padding:0 .7em;flex:1;height:100%;white-space:nowrap}::ng-deep .sb-wrapper .sb-icon{text-align:center;width:100%;height:100%;font-size:1.2em;min-width:2em}::ng-deep .sb-wrapper .sb-count{font-size:.9em;padding:0 .7em}::ng-deep .sb-wrapper .sb-count,::ng-deep .sb-wrapper .sb-text{font-weight:700}::ng-deep .sb-show-text .sb-icon{width:2em}::ng-deep .sb-show-count{min-width:5.333em}"]
                }] }
    ];
    /** @nocollapse */
    ShareButton.ctorParameters = function () { return [
        { type: ShareService }
    ]; };
    ShareButton.propDecorators = {
        createButton: [{ type: Input, args: ['button',] }],
        setUrl: [{ type: Input, args: ['url',] }],
        title: [{ type: Input }],
        description: [{ type: Input }],
        image: [{ type: Input }],
        tags: [{ type: Input }],
        autoSetMeta: [{ type: Input }],
        showIcon: [{ type: Input }],
        showText: [{ type: Input }],
        showCount: [{ type: Input }],
        text: [{ type: Input }],
        icon: [{ type: Input }],
        size: [{ type: Input }],
        theme: [{ type: Input }],
        count: [{ type: Output }],
        opened: [{ type: Output }],
        closed: [{ type: Output }],
        buttonClass: [{ type: HostBinding, args: ['class',] }],
        ref: [{ type: ViewChild, args: [ShareDirective,] }]
    };
    return ShareButton;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ShareButtonModule = /** @class */ (function () {
    function ShareButtonModule() {
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    ShareButtonModule.withConfig = /**
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        return {
            ngModule: ShareButtonModule,
            providers: [{ provide: SHARE_BUTTONS_CONFIG, useValue: config }]
        };
    };
    ShareButtonModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        ShareButton
                    ],
                    imports: [
                        ShareModule,
                        FontAwesomeModule,
                        CommonModule
                    ],
                    exports: [
                        ShareModule,
                        FontAwesomeModule,
                        ShareButton
                    ]
                },] }
    ];
    return ShareButtonModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { ShareButtonModule, ShareButton };

//# sourceMappingURL=ngx-share-button.js.map