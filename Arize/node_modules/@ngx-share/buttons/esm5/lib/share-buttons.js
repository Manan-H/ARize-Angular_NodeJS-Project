/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { ShareService, SHARE_BUTTONS } from '@ngx-share/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
/**
 * @record
 */
function ButtonsState() { }
if (false) {
    /** @type {?|undefined} */
    ButtonsState.prototype.includedButtons;
    /** @type {?|undefined} */
    ButtonsState.prototype.excludedButtons;
    /** @type {?|undefined} */
    ButtonsState.prototype.userButtons;
    /** @type {?|undefined} */
    ButtonsState.prototype.selectedButtons;
    /** @type {?|undefined} */
    ButtonsState.prototype.expanded;
    /** @type {?|undefined} */
    ButtonsState.prototype.shownCount;
    /** @type {?|undefined} */
    ButtonsState.prototype.moreIcon;
    /** @type {?|undefined} */
    ButtonsState.prototype.lessIcon;
}
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
        this._state$.next(tslib_1.__assign({}, this._state$.value, state));
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
export { ShareButtons };
if (false) {
    /** @type {?} */
    ShareButtons.prototype.state$;
    /**
     * @type {?}
     * @private
     */
    ShareButtons.prototype._state$;
    /**
     * @type {?}
     * @private
     */
    ShareButtons.prototype._configSub$;
    /** @type {?} */
    ShareButtons.prototype.theme;
    /**
     * The sharing link
     * @type {?}
     */
    ShareButtons.prototype.url;
    /**
     * The title parameter
     * @type {?}
     */
    ShareButtons.prototype.title;
    /**
     * The description parameter
     * @type {?}
     */
    ShareButtons.prototype.description;
    /**
     * The image parameter for sharing on Pinterest
     * @type {?}
     */
    ShareButtons.prototype.image;
    /**
     * The tags parameter for sharing on Twitter and Tumblr
     * @type {?}
     */
    ShareButtons.prototype.tags;
    /**
     * Sets meta tags from document head, useful when SEO is available
     * @type {?}
     */
    ShareButtons.prototype.autoSetMeta;
    /**
     * Show buttons icons
     * @type {?}
     */
    ShareButtons.prototype.showIcon;
    /**
     * Show buttons text
     * @type {?}
     */
    ShareButtons.prototype.showText;
    /**
     * Show sharing count
     * @type {?}
     */
    ShareButtons.prototype.showCount;
    /**
     * Buttons size
     * @type {?}
     */
    ShareButtons.prototype.size;
    /**
     * Share count event
     * @type {?}
     */
    ShareButtons.prototype.count;
    /**
     * Share dialog opened event
     * @type {?}
     */
    ShareButtons.prototype.opened;
    /**
     * Share dialog closed event
     * @type {?}
     */
    ShareButtons.prototype.closed;
    /**
     * @type {?}
     * @private
     */
    ShareButtons.prototype._share;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmUtYnV0dG9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3gtc2hhcmUvYnV0dG9ucy8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZS1idXR0b25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFxQixZQUFZLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkgsT0FBTyxFQUFFLFlBQVksRUFBc0IsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDbEYsT0FBTyxFQUFjLGVBQWUsRUFBRSxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDakUsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBRXJDLDJCQVNDOzs7SUFSQyx1Q0FBMkI7O0lBQzNCLHVDQUEyQjs7SUFDM0IsbUNBQXVCOztJQUN2Qix1Q0FBMkI7O0lBQzNCLGdDQUFtQjs7SUFDbkIsa0NBQW9COztJQUNwQixnQ0FBZTs7SUFDZixnQ0FBZTs7QUFHakI7SUF5RUUsc0JBQW9CLE1BQW9CO1FBQXBCLFdBQU0sR0FBTixNQUFNLENBQWM7UUFoRWhDLFlBQU8sR0FBRyxJQUFJLGVBQWUsQ0FBZTtZQUNsRCxlQUFlLEVBQUUsRUFBRTtZQUNuQixlQUFlLEVBQUUsRUFBRTtZQUNuQixXQUFXLEVBQUUsRUFBRTtZQUNmLGVBQWUsRUFBRSxFQUFFO1lBQ25CLFFBQVEsRUFBRSxJQUFJO1lBQ2QsVUFBVSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsTUFBTTtTQUM5QyxDQUFDLENBQUM7UUFFSyxnQkFBVyxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUM7UUFFaEMsVUFBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQzs7OztRQWlDakMsYUFBUSxHQUFHLElBQUksQ0FBQzs7OztRQUdoQixhQUFRLEdBQUcsS0FB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Q0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMxQixDQUFDOzs7OztJQUVELGtDQUFXOzs7O0lBQVgsVUFBWSxLQUFtQjtRQUM3QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksc0JBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUssS0FBSyxFQUFFLENBQUM7SUFDdkQsQ0FBQzs7Z0JBbkhGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZUFBZTtvQkFDekIsaXZDQUFtQztvQkFFbkMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2lCQUNoRDs7OztnQkFwQlEsWUFBWTs7O3dCQW1DbEIsS0FBSztrQ0FFTCxLQUFLLFNBQUMsU0FBUztrQ0FJZixLQUFLLFNBQUMsU0FBUzsrQkFJZixLQUFLLFNBQUMsTUFBTTtzQkFLWixLQUFLO3dCQUdMLEtBQUs7OEJBR0wsS0FBSzt3QkFHTCxLQUFLO3VCQUdMLEtBQUs7OEJBR0wsS0FBSzsyQkFHTCxLQUFLOzJCQUdMLEtBQUs7NEJBR0wsS0FBSzt1QkFHTCxLQUFLO3dCQUdMLE1BQU07eUJBR04sTUFBTTt5QkFHTixNQUFNOztJQThDVCxtQkFBQztDQUFBLEFBckhELElBcUhDO1NBL0dZLFlBQVk7OztJQUV2Qiw4QkFBaUM7Ozs7O0lBQ2pDLCtCQU9HOzs7OztJQUVILG1DQUF5Qzs7SUFFekMsNkJBQTBDOzs7OztJQWUxQywyQkFBcUI7Ozs7O0lBR3JCLDZCQUF1Qjs7Ozs7SUFHdkIsbUNBQTZCOzs7OztJQUc3Qiw2QkFBdUI7Ozs7O0lBR3ZCLDRCQUFzQjs7Ozs7SUFHdEIsbUNBQThCOzs7OztJQUc5QixnQ0FBeUI7Ozs7O0lBR3pCLGdDQUEwQjs7Ozs7SUFHMUIsaUNBQTJCOzs7OztJQUczQiw0QkFBa0I7Ozs7O0lBR2xCLDZCQUE2Qzs7Ozs7SUFHN0MsOEJBQThDOzs7OztJQUc5Qyw4QkFBOEM7Ozs7O0lBRWxDLDhCQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgT25Jbml0LCBPbkRlc3Ryb3ksIEV2ZW50RW1pdHRlciwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU2hhcmVTZXJ2aWNlLCBTaGFyZUJ1dHRvbnNDb25maWcsIFNIQVJFX0JVVFRPTlMgfSBmcm9tICdAbmd4LXNoYXJlL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBCZWhhdmlvclN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbnRlcmZhY2UgQnV0dG9uc1N0YXRlIHtcclxuICBpbmNsdWRlZEJ1dHRvbnM/OiBzdHJpbmdbXTtcclxuICBleGNsdWRlZEJ1dHRvbnM/OiBzdHJpbmdbXTtcclxuICB1c2VyQnV0dG9ucz86IHN0cmluZ1tdO1xyXG4gIHNlbGVjdGVkQnV0dG9ucz86IHN0cmluZ1tdO1xyXG4gIGV4cGFuZGVkPzogYm9vbGVhbjtcclxuICBzaG93bkNvdW50PzogbnVtYmVyO1xyXG4gIG1vcmVJY29uPzogYW55O1xyXG4gIGxlc3NJY29uPzogYW55O1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3NoYXJlLWJ1dHRvbnMnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zaGFyZS1idXR0b25zLmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3NoYXJlLWJ1dHRvbnMuc2NzcyddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaGFyZUJ1dHRvbnMgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcblxyXG4gIHN0YXRlJDogT2JzZXJ2YWJsZTxCdXR0b25zU3RhdGU+O1xyXG4gIHByaXZhdGUgX3N0YXRlJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8QnV0dG9uc1N0YXRlPih7XHJcbiAgICBpbmNsdWRlZEJ1dHRvbnM6IFtdLFxyXG4gICAgZXhjbHVkZWRCdXR0b25zOiBbXSxcclxuICAgIHVzZXJCdXR0b25zOiBbXSxcclxuICAgIHNlbGVjdGVkQnV0dG9uczogW10sXHJcbiAgICBleHBhbmRlZDogdHJ1ZSxcclxuICAgIHNob3duQ291bnQ6IE9iamVjdC5rZXlzKFNIQVJFX0JVVFRPTlMpLmxlbmd0aFxyXG4gIH0pO1xyXG5cclxuICBwcml2YXRlIF9jb25maWdTdWIkID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xyXG5cclxuICBASW5wdXQoKSB0aGVtZSA9IHRoaXMuX3NoYXJlLmNvbmZpZy50aGVtZTtcclxuXHJcbiAgQElucHV0KCdpbmNsdWRlJykgc2V0IGluY2x1ZGVkQnV0dG9ucyhpbmNsdWRlZEJ1dHRvbnM6IHN0cmluZ1tdKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtpbmNsdWRlZEJ1dHRvbnN9KTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgnZXhjbHVkZScpIHNldCBleGNsdWRlZEJ1dHRvbnMoZXhjbHVkZWRCdXR0b25zOiBzdHJpbmdbXSkge1xyXG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7ZXhjbHVkZWRCdXR0b25zfSk7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoJ3Nob3cnKSBzZXQgc2hvd25CdXR0b25zKHNob3duQ291bnQ6IG51bWJlcikge1xyXG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7c2hvd25Db3VudH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqIFRoZSBzaGFyaW5nIGxpbmsgKi9cclxuICBASW5wdXQoKSB1cmw6IHN0cmluZztcclxuXHJcbiAgLyoqIFRoZSB0aXRsZSBwYXJhbWV0ZXIgKi9cclxuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xyXG5cclxuICAvKiogVGhlIGRlc2NyaXB0aW9uIHBhcmFtZXRlciAqL1xyXG4gIEBJbnB1dCgpIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcblxyXG4gIC8qKiBUaGUgaW1hZ2UgcGFyYW1ldGVyIGZvciBzaGFyaW5nIG9uIFBpbnRlcmVzdCAqL1xyXG4gIEBJbnB1dCgpIGltYWdlOiBzdHJpbmc7XHJcblxyXG4gIC8qKiBUaGUgdGFncyBwYXJhbWV0ZXIgZm9yIHNoYXJpbmcgb24gVHdpdHRlciBhbmQgVHVtYmxyICovXHJcbiAgQElucHV0KCkgdGFnczogc3RyaW5nO1xyXG5cclxuICAvKiogU2V0cyBtZXRhIHRhZ3MgZnJvbSBkb2N1bWVudCBoZWFkLCB1c2VmdWwgd2hlbiBTRU8gaXMgYXZhaWxhYmxlICovXHJcbiAgQElucHV0KCkgYXV0b1NldE1ldGE6IGJvb2xlYW47XHJcblxyXG4gIC8qKiBTaG93IGJ1dHRvbnMgaWNvbnMgKi9cclxuICBASW5wdXQoKSBzaG93SWNvbiA9IHRydWU7XHJcblxyXG4gIC8qKiBTaG93IGJ1dHRvbnMgdGV4dCAqL1xyXG4gIEBJbnB1dCgpIHNob3dUZXh0ID0gZmFsc2U7XHJcblxyXG4gIC8qKiBTaG93IHNoYXJpbmcgY291bnQgKi9cclxuICBASW5wdXQoKSBzaG93Q291bnQgPSBmYWxzZTtcclxuXHJcbiAgLyoqIEJ1dHRvbnMgc2l6ZSAqL1xyXG4gIEBJbnB1dCgpIHNpemUgPSAwO1xyXG5cclxuICAvKiogU2hhcmUgY291bnQgZXZlbnQgKi9cclxuICBAT3V0cHV0KCkgY291bnQgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcclxuXHJcbiAgLyoqIFNoYXJlIGRpYWxvZyBvcGVuZWQgZXZlbnQgKi9cclxuICBAT3V0cHV0KCkgb3BlbmVkID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcblxyXG4gIC8qKiBTaGFyZSBkaWFsb2cgY2xvc2VkIGV2ZW50ICovXHJcbiAgQE91dHB1dCgpIGNsb3NlZCA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9zaGFyZTogU2hhcmVTZXJ2aWNlKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuc3RhdGUkID0gdGhpcy5fc3RhdGUkLnBpcGUoXHJcbiAgICAgIG1hcCgoc3RhdGU6IEJ1dHRvbnNTdGF0ZSkgPT4ge1xyXG4gICAgICAgIC8vIFVzZSBjb21wb25lbnQgaW5jbHVkZSBidXR0b25zLCBvdGhlcndpc2UgZmFsbGJhY2sgdG8gZ2xvYmFsIGluY2x1ZGUgYnV0dG9uc1xyXG4gICAgICAgIGNvbnN0IGluY2x1ZGVkQnV0dG9ucyA9IHN0YXRlLmluY2x1ZGVkQnV0dG9ucy5sZW5ndGggPyBzdGF0ZS5pbmNsdWRlZEJ1dHRvbnMgOiBzdGF0ZS51c2VyQnV0dG9ucztcclxuICAgICAgICBjb25zdCB1c2VyQnV0dG9ucyA9IGluY2x1ZGVkQnV0dG9ucy5maWx0ZXIoKGJ0bikgPT4gc3RhdGUuZXhjbHVkZWRCdXR0b25zLmluZGV4T2YoYnRuKSA8IDApO1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkQnV0dG9ucyA9IHVzZXJCdXR0b25zLnNsaWNlKDAsIHN0YXRlLmV4cGFuZGVkID8gdXNlckJ1dHRvbnMubGVuZ3RoIDogc3RhdGUuc2hvd25Db3VudCk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHVzZXJCdXR0b25zLFxyXG4gICAgICAgICAgc2VsZWN0ZWRCdXR0b25zLFxyXG4gICAgICAgICAgZXhwYW5kZWQ6IHN0YXRlLmV4cGFuZGVkLFxyXG4gICAgICAgICAgc2hvd25Db3VudDogc3RhdGUuc2hvd25Db3VudCxcclxuICAgICAgICAgIG1vcmVJY29uOiBzdGF0ZS5tb3JlSWNvbixcclxuICAgICAgICAgIGxlc3NJY29uOiBzdGF0ZS5sZXNzSWNvblxyXG4gICAgICAgIH07XHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG5cclxuICAgIC8vIFN1YnNjcmliZSB0byBzaGFyZSBidXR0b25zIGNvbmZpZyBjaGFuZ2VzLCBUaGlzIHVwZGF0ZXMgdGhlIGNvbXBvbmVudCB3aGVuZXZlciBhIG5ldyBidXR0b24gaXMgYWRkZWRcclxuICAgIHRoaXMuX2NvbmZpZ1N1YiQgPSB0aGlzLl9zaGFyZS5jb25maWckLnN1YnNjcmliZSgoY29uZmlnOiBTaGFyZUJ1dHRvbnNDb25maWcpID0+IHtcclxuICAgICAgLy8gVXNlIGdsb2JhbCBpbmNsdWRlIGJ1dHRvbnMsIG90aGVyd2lzZSBmYWxsYmFjayB0byBhbGwgYnV0dG9uc1xyXG4gICAgICBjb25zdCBpbmNsdWRlZEJ1dHRvbnMgPSBjb25maWcuaW5jbHVkZS5sZW5ndGggPyBjb25maWcuaW5jbHVkZSA6IE9iamVjdC5rZXlzKFNIQVJFX0JVVFRPTlMpO1xyXG4gICAgICBjb25zdCB1c2VyQnV0dG9ucyA9IGluY2x1ZGVkQnV0dG9ucy5maWx0ZXIoKGJ0bikgPT4gY29uZmlnLmV4Y2x1ZGUuaW5kZXhPZihidG4pIDwgMCk7XHJcbiAgICAgIHRoaXMudXBkYXRlU3RhdGUoe1xyXG4gICAgICAgIHVzZXJCdXR0b25zLFxyXG4gICAgICAgIGV4cGFuZGVkOiBmYWxzZSxcclxuICAgICAgICBtb3JlSWNvbjogY29uZmlnLm1vcmVCdXR0b25JY29uLFxyXG4gICAgICAgIGxlc3NJY29uOiBjb25maWcubGVzc0J1dHRvbkljb25cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5fY29uZmlnU3ViJC51bnN1YnNjcmliZSgpO1xyXG4gICAgdGhpcy5fc3RhdGUkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVTdGF0ZShzdGF0ZTogQnV0dG9uc1N0YXRlKSB7XHJcbiAgICB0aGlzLl9zdGF0ZSQubmV4dCh7Li4udGhpcy5fc3RhdGUkLnZhbHVlLCAuLi5zdGF0ZX0pO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBFeHBsYW5hdGlvbiBvZiB0aGUgYWJvdmUgY29kZTpcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiBJbmNsdWRlIGJ1dHRvbnM6IGluY2x1ZGVzIG9ubHkgd2FudGVkIGJ1dHRvbnMgYW5kIGV4Y2x1ZGVzIHRoZSByZXN0XHJcbiBFeGNsdWRlIGJ1dHRvbnM6IGV4Y2x1ZGVzIG9ubHkgdGhlIHVud2FudGVkIGJ1dHRvbnNcclxuIFVzZXIgYnV0dG9ucyA9IEluY2x1ZGUgYnV0dG9ucyAtIGV4Y2x1ZGUgYnV0dG9uc1xyXG4gU2VsZWN0ZWQgQnV0dG9ucyA9IFVzZXIgYnV0dG9ucyBbc2hvd24gbnVtYmVyXVxyXG4gKi9cclxuIl19