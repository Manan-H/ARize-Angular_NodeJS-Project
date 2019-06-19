/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule, SHARE_BUTTONS_CONFIG } from '@ngx-share/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ShareButton } from './share-button';
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
export { ShareButtonModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmUtYnV0dG9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3gtc2hhcmUvYnV0dG9uLyIsInNvdXJjZXMiOlsibGliL3NoYXJlLWJ1dHRvbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFzQixvQkFBb0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3hGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBRXJFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3QztJQUFBO0lBc0JBLENBQUM7Ozs7O0lBTlEsNEJBQVU7Ozs7SUFBakIsVUFBa0IsTUFBMkI7UUFDM0MsT0FBTztZQUNMLFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsU0FBUyxFQUFFLENBQUMsRUFBQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBQyxDQUFDO1NBQy9ELENBQUM7SUFDSixDQUFDOztnQkFyQkYsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixXQUFXO3FCQUNaO29CQUNELE9BQU8sRUFBRTt3QkFDUCxXQUFXO3dCQUNYLGlCQUFpQjt3QkFDakIsWUFBWTtxQkFDYjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsV0FBVzt3QkFDWCxpQkFBaUI7d0JBQ2pCLFdBQVc7cUJBQ1o7aUJBQ0Y7O0lBUUQsd0JBQUM7Q0FBQSxBQXRCRCxJQXNCQztTQVBZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IFNoYXJlTW9kdWxlLCBTaGFyZUJ1dHRvbnNDb25maWcsIFNIQVJFX0JVVFRPTlNfQ09ORklHIH0gZnJvbSAnQG5neC1zaGFyZS9jb3JlJztcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVNb2R1bGUgfSBmcm9tICdAZm9ydGF3ZXNvbWUvYW5ndWxhci1mb250YXdlc29tZSc7XHJcblxyXG5pbXBvcnQgeyBTaGFyZUJ1dHRvbiB9IGZyb20gJy4vc2hhcmUtYnV0dG9uJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBTaGFyZUJ1dHRvblxyXG4gIF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgU2hhcmVNb2R1bGUsXHJcbiAgICBGb250QXdlc29tZU1vZHVsZSxcclxuICAgIENvbW1vbk1vZHVsZVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgU2hhcmVNb2R1bGUsXHJcbiAgICBGb250QXdlc29tZU1vZHVsZSxcclxuICAgIFNoYXJlQnV0dG9uXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2hhcmVCdXR0b25Nb2R1bGUge1xyXG4gIHN0YXRpYyB3aXRoQ29uZmlnKGNvbmZpZz86IFNoYXJlQnV0dG9uc0NvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IFNoYXJlQnV0dG9uTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFt7cHJvdmlkZTogU0hBUkVfQlVUVE9OU19DT05GSUcsIHVzZVZhbHVlOiBjb25maWd9XVxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl19