/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, ViewChild, HostBinding, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { ShareService, ShareDirective } from '@ngx-share/core';
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
export { ShareButton };
if (false) {
    /**
     * The sharing link
     * @type {?}
     */
    ShareButton.prototype.url;
    /**
     * Share count value
     * @type {?}
     */
    ShareButton.prototype.shareCount;
    /**
     * Button name
     * @type {?}
     */
    ShareButton.prototype.button;
    /**
     * The title parameter
     * @type {?}
     */
    ShareButton.prototype.title;
    /**
     * The description parameter
     * @type {?}
     */
    ShareButton.prototype.description;
    /**
     * The image parameter for sharing on Pinterest
     * @type {?}
     */
    ShareButton.prototype.image;
    /**
     * The tags parameter for sharing on Twitter and Tumblr
     * @type {?}
     */
    ShareButton.prototype.tags;
    /**
     * Sets meta tags from document head, useful when SEO is available
     * @type {?}
     */
    ShareButton.prototype.autoSetMeta;
    /**
     * Show button icon
     * @type {?}
     */
    ShareButton.prototype.showIcon;
    /**
     * Show button text
     * @type {?}
     */
    ShareButton.prototype.showText;
    /**
     * Show sharing count
     * @type {?}
     */
    ShareButton.prototype.showCount;
    /**
     * Button custom text
     * @type {?}
     */
    ShareButton.prototype.text;
    /**
     * Button custom icon
     * @type {?}
     */
    ShareButton.prototype.icon;
    /**
     * Button size
     * @type {?}
     */
    ShareButton.prototype.size;
    /**
     * Button theme
     * @type {?}
     */
    ShareButton.prototype.theme;
    /**
     * Stream that emits when share count is fetched
     * @type {?}
     */
    ShareButton.prototype.count;
    /**
     * Stream that emits when share dialog is opened
     * @type {?}
     */
    ShareButton.prototype.opened;
    /**
     * Stream that emits when share dialog is closed
     * @type {?}
     */
    ShareButton.prototype.closed;
    /** @type {?} */
    ShareButton.prototype.ref;
    /**
     * @type {?}
     * @private
     */
    ShareButton.prototype._share;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmUtYnV0dG9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5neC1zaGFyZS9idXR0b24vIiwic291cmNlcyI6WyJsaWIvc2hhcmUtYnV0dG9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEgsT0FBTyxFQUFFLFlBQVksRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvRDtJQWdGRSxxQkFBb0IsTUFBb0I7UUFBcEIsV0FBTSxHQUFOLE1BQU0sQ0FBYzs7OztRQXBDL0IsYUFBUSxHQUFHLElBQUksQ0FBQzs7OztRQUdoQixhQUFRLEdBQUcsS0FBSyxDQUFDOzs7O1FBR2pCLGNBQVMsR0FBRyxLQUFLLENBQUM7Ozs7UUFTbEIsU0FBSSxHQUFXLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQzs7OztRQUd2QyxVQUFLLEdBQVcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDOzs7O1FBR3hDLFVBQUssR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDOzs7O1FBR25DLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDOzs7O1FBR3BDLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO0lBVTlDLENBQUM7SUFoRUQsc0JBQXFCLHFDQUFZOzs7OztRQUFqQyxVQUFrQyxNQUFjO1lBQzlDLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3ZCLENBQUM7OztPQUFBO0lBR0Qsc0JBQWtCLCtCQUFNO1FBRHhCLDJCQUEyQjs7Ozs7O1FBQzNCLFVBQXlCLEdBQVc7WUFDbEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7WUFDcEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDakIsQ0FBQzs7O09BQUE7SUFnREQsc0JBQTBCLG9DQUFXO1FBRHJDLGdDQUFnQzs7Ozs7UUFDaEM7WUFDRSxPQUFPLGtCQUFnQixJQUFJLENBQUMsS0FBTyxDQUFDO1FBQ3RDLENBQUM7OztPQUFBOzs7OztJQU9ELDZCQUFPOzs7O0lBQVAsVUFBUSxLQUFhO1FBQ25CLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3pCLENBQUM7O2dCQXRGRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLGlzQ0FBa0M7b0JBRWxDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOztpQkFDaEQ7Ozs7Z0JBUFEsWUFBWTs7OytCQW1CbEIsS0FBSyxTQUFDLFFBQVE7eUJBTWQsS0FBSyxTQUFDLEtBQUs7d0JBTVgsS0FBSzs4QkFHTCxLQUFLO3dCQUdMLEtBQUs7dUJBR0wsS0FBSzs4QkFHTCxLQUFLOzJCQUdMLEtBQUs7MkJBR0wsS0FBSzs0QkFHTCxLQUFLO3VCQUdMLEtBQUs7dUJBR0wsS0FBSzt1QkFHTCxLQUFLO3dCQUdMLEtBQUs7d0JBR0wsTUFBTTt5QkFHTixNQUFNO3lCQUdOLE1BQU07OEJBR04sV0FBVyxTQUFDLE9BQU87c0JBSW5CLFNBQVMsU0FBQyxjQUFjOztJQVUzQixrQkFBQztDQUFBLEFBeEZELElBd0ZDO1NBbEZZLFdBQVc7Ozs7OztJQUd0QiwwQkFBWTs7Ozs7SUFHWixpQ0FBbUI7Ozs7O0lBR25CLDZCQUFlOzs7OztJQWNmLDRCQUF1Qjs7Ozs7SUFHdkIsa0NBQTZCOzs7OztJQUc3Qiw0QkFBdUI7Ozs7O0lBR3ZCLDJCQUFzQjs7Ozs7SUFHdEIsa0NBQThCOzs7OztJQUc5QiwrQkFBeUI7Ozs7O0lBR3pCLCtCQUEwQjs7Ozs7SUFHMUIsZ0NBQTJCOzs7OztJQUczQiwyQkFBc0I7Ozs7O0lBR3RCLDJCQUFzQjs7Ozs7SUFHdEIsMkJBQWdEOzs7OztJQUdoRCw0QkFBa0Q7Ozs7O0lBR2xELDRCQUE2Qzs7Ozs7SUFHN0MsNkJBQThDOzs7OztJQUc5Qyw2QkFBOEM7O0lBTzlDLDBCQUErQzs7Ozs7SUFFbkMsNkJBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBWaWV3Q2hpbGQsIEhvc3RCaW5kaW5nLCBFdmVudEVtaXR0ZXIsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFNoYXJlU2VydmljZSwgU2hhcmVEaXJlY3RpdmUgfSBmcm9tICdAbmd4LXNoYXJlL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzaGFyZS1idXR0b24nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zaGFyZS1idXR0b24uaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vc2hhcmUtYnV0dG9uLnNjc3MnXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2hhcmVCdXR0b24ge1xyXG5cclxuICAvKiogVGhlIHNoYXJpbmcgbGluayAqL1xyXG4gIHVybDogc3RyaW5nO1xyXG5cclxuICAvKiogU2hhcmUgY291bnQgdmFsdWUgKi9cclxuICBzaGFyZUNvdW50OiBudW1iZXI7XHJcblxyXG4gIC8qKiBCdXR0b24gbmFtZSAqL1xyXG4gIGJ1dHRvbjogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoJ2J1dHRvbicpIHNldCBjcmVhdGVCdXR0b24oYnV0dG9uOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuc2hhcmVDb3VudCA9IDA7XHJcbiAgICB0aGlzLmJ1dHRvbiA9IGJ1dHRvbjtcclxuICB9XHJcblxyXG4gIC8qKiBTZXQgdGhlIHNoYXJpbmcgbGluayAqL1xyXG4gIEBJbnB1dCgndXJsJykgc2V0IHNldFVybCh1cmw6IHN0cmluZykge1xyXG4gICAgdGhpcy5zaGFyZUNvdW50ID0gMDtcclxuICAgIHRoaXMudXJsID0gdXJsO1xyXG4gIH1cclxuXHJcbiAgLyoqIFRoZSB0aXRsZSBwYXJhbWV0ZXIgKi9cclxuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xyXG5cclxuICAvKiogVGhlIGRlc2NyaXB0aW9uIHBhcmFtZXRlciAqL1xyXG4gIEBJbnB1dCgpIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcblxyXG4gIC8qKiBUaGUgaW1hZ2UgcGFyYW1ldGVyIGZvciBzaGFyaW5nIG9uIFBpbnRlcmVzdCAqL1xyXG4gIEBJbnB1dCgpIGltYWdlOiBzdHJpbmc7XHJcblxyXG4gIC8qKiBUaGUgdGFncyBwYXJhbWV0ZXIgZm9yIHNoYXJpbmcgb24gVHdpdHRlciBhbmQgVHVtYmxyICovXHJcbiAgQElucHV0KCkgdGFnczogc3RyaW5nO1xyXG5cclxuICAvKiogU2V0cyBtZXRhIHRhZ3MgZnJvbSBkb2N1bWVudCBoZWFkLCB1c2VmdWwgd2hlbiBTRU8gaXMgYXZhaWxhYmxlICovXHJcbiAgQElucHV0KCkgYXV0b1NldE1ldGE6IGJvb2xlYW47XHJcblxyXG4gIC8qKiBTaG93IGJ1dHRvbiBpY29uICovXHJcbiAgQElucHV0KCkgc2hvd0ljb24gPSB0cnVlO1xyXG5cclxuICAvKiogU2hvdyBidXR0b24gdGV4dCAqL1xyXG4gIEBJbnB1dCgpIHNob3dUZXh0ID0gZmFsc2U7XHJcblxyXG4gIC8qKiBTaG93IHNoYXJpbmcgY291bnQgKi9cclxuICBASW5wdXQoKSBzaG93Q291bnQgPSBmYWxzZTtcclxuXHJcbiAgLyoqIEJ1dHRvbiBjdXN0b20gdGV4dCAqL1xyXG4gIEBJbnB1dCgpIHRleHQ6IHN0cmluZztcclxuXHJcbiAgLyoqIEJ1dHRvbiBjdXN0b20gaWNvbiAqL1xyXG4gIEBJbnB1dCgpIGljb246IHN0cmluZztcclxuXHJcbiAgLyoqIEJ1dHRvbiBzaXplICovXHJcbiAgQElucHV0KCkgc2l6ZTogbnVtYmVyID0gdGhpcy5fc2hhcmUuY29uZmlnLnNpemU7XHJcblxyXG4gIC8qKiBCdXR0b24gdGhlbWUgKi9cclxuICBASW5wdXQoKSB0aGVtZTogc3RyaW5nID0gdGhpcy5fc2hhcmUuY29uZmlnLnRoZW1lO1xyXG5cclxuICAvKiogU3RyZWFtIHRoYXQgZW1pdHMgd2hlbiBzaGFyZSBjb3VudCBpcyBmZXRjaGVkICovXHJcbiAgQE91dHB1dCgpIGNvdW50ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XHJcblxyXG4gIC8qKiBTdHJlYW0gdGhhdCBlbWl0cyB3aGVuIHNoYXJlIGRpYWxvZyBpcyBvcGVuZWQgKi9cclxuICBAT3V0cHV0KCkgb3BlbmVkID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcblxyXG4gIC8qKiBTdHJlYW0gdGhhdCBlbWl0cyB3aGVuIHNoYXJlIGRpYWxvZyBpcyBjbG9zZWQgKi9cclxuICBAT3V0cHV0KCkgY2xvc2VkID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcblxyXG4gIC8qKiBTZXQgdGhlbWUgYXMgYnV0dG9uIGNsYXNzICovXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpIGdldCBidXR0b25DbGFzcygpIHtcclxuICAgIHJldHVybiBgc2ItYnV0dG9uIHNiLSR7dGhpcy50aGVtZX1gO1xyXG4gIH1cclxuXHJcbiAgQFZpZXdDaGlsZChTaGFyZURpcmVjdGl2ZSkgcmVmOiBTaGFyZURpcmVjdGl2ZTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfc2hhcmU6IFNoYXJlU2VydmljZSkge1xyXG4gIH1cclxuXHJcbiAgb25Db3VudChjb3VudDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLnNoYXJlQ291bnQgPSBjb3VudDtcclxuICAgIHRoaXMuY291bnQuZW1pdChjb3VudCk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=