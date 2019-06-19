/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, ElementRef, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
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
export { ExpandButton };
if (false) {
    /** @type {?} */
    ExpandButton.prototype.moreIcon;
    /** @type {?} */
    ExpandButton.prototype.lessIcon;
    /** @type {?} */
    ExpandButton.prototype.expanded;
    /** @type {?} */
    ExpandButton.prototype.size;
    /** @type {?} */
    ExpandButton.prototype.toggle;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwYW5kLWJ1dHRvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3gtc2hhcmUvYnV0dG9ucy8iLCJzb3VyY2VzIjpbImxpYi9leHBhbmQtYnV0dG9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU1RztJQTBCRSxzQkFBWSxFQUFjO1FBRmhCLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBRzdDLEVBQUUsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUNsRSxDQUFDOztnQkE1QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO29CQUN6QixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsUUFBUSxFQUFFLDZZQWFUO2lCQUNGOzs7O2dCQW5Ca0MsVUFBVTs7OzJCQXNCMUMsS0FBSzsyQkFDTCxLQUFLOzJCQUNMLEtBQUs7dUJBQ0wsS0FBSzt5QkFDTCxNQUFNOztJQUtULG1CQUFDO0NBQUEsQUE3QkQsSUE2QkM7U0FYWSxZQUFZOzs7SUFFdkIsZ0NBQXVCOztJQUN2QixnQ0FBdUI7O0lBQ3ZCLGdDQUEwQjs7SUFDMUIsNEJBQXNCOztJQUN0Qiw4QkFBK0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZXhwYW5kLWJ1dHRvbicsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxidXR0b24gY2xhc3M9XCJzYi13cmFwcGVyIHNiLWV4cGFuZCBzYi1zaG93LWljb25cIlxyXG4gICAgICAgICAgICBbc3R5bGUuZm9udFNpemUucHhdPVwic2l6ZVwiXHJcbiAgICAgICAgICAgIChjbGljayk9XCJ0b2dnbGUuZW1pdCghZXhwYW5kZWQpXCI+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzPVwic2ItaW5uZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwic2ItY29udGVudFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNiLWljb25cIj5cclxuICAgICAgICAgICAgPGZhLWljb24gW2ljb25dPVwiZXhwYW5kZWQgPyBsZXNzSWNvbiA6IG1vcmVJY29uXCI+PC9mYS1pY29uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9idXR0b24+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRXhwYW5kQnV0dG9uIHtcclxuXHJcbiAgQElucHV0KCkgbW9yZUljb246IGFueTtcclxuICBASW5wdXQoKSBsZXNzSWNvbjogYW55O1xyXG4gIEBJbnB1dCgpIGV4cGFuZGVkOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgc2l6ZTogbnVtYmVyO1xyXG4gIEBPdXRwdXQoKSB0b2dnbGUgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGVsOiBFbGVtZW50UmVmKSB7XHJcbiAgICBlbC5uYXRpdmVFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWJ1dHRvbi1jb2xvcicsICcjRkY2NjUxJyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==