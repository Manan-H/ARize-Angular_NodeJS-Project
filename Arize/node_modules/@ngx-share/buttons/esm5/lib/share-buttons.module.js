/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SHARE_BUTTONS_CONFIG } from '@ngx-share/core';
import { ShareButtonModule } from '@ngx-share/button';
import { ShareButtons } from './share-buttons';
import { ExpandButton } from './expand-button';
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
export { ShareButtonsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmUtYnV0dG9ucy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Abmd4LXNoYXJlL2J1dHRvbnMvIiwic291cmNlcyI6WyJsaWIvc2hhcmUtYnV0dG9ucy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQXNCLG9CQUFvQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0UsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFdEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQztJQUFBO0lBcUJBLENBQUM7Ozs7O0lBTlEsNkJBQVU7Ozs7SUFBakIsVUFBa0IsTUFBMkI7UUFDM0MsT0FBTztZQUNMLFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsU0FBUyxFQUFFLENBQUMsRUFBQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBQyxDQUFDO1NBQy9ELENBQUM7SUFDSixDQUFDOztnQkFwQkYsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixZQUFZO3dCQUNaLFlBQVk7cUJBQ2I7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLGlCQUFpQjt3QkFDakIsWUFBWTtxQkFDYjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsaUJBQWlCO3dCQUNqQixZQUFZO3FCQUNiO2lCQUNGOztJQVFELHlCQUFDO0NBQUEsQUFyQkQsSUFxQkM7U0FQWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuaW1wb3J0IHsgU2hhcmVCdXR0b25zQ29uZmlnLCBTSEFSRV9CVVRUT05TX0NPTkZJRyB9IGZyb20gJ0BuZ3gtc2hhcmUvY29yZSc7XHJcbmltcG9ydCB7IFNoYXJlQnV0dG9uTW9kdWxlIH0gZnJvbSAnQG5neC1zaGFyZS9idXR0b24nO1xyXG5cclxuaW1wb3J0IHsgU2hhcmVCdXR0b25zIH0gZnJvbSAnLi9zaGFyZS1idXR0b25zJztcclxuaW1wb3J0IHsgRXhwYW5kQnV0dG9uIH0gZnJvbSAnLi9leHBhbmQtYnV0dG9uJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBTaGFyZUJ1dHRvbnMsXHJcbiAgICBFeHBhbmRCdXR0b25cclxuICBdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIFNoYXJlQnV0dG9uTW9kdWxlLFxyXG4gICAgQ29tbW9uTW9kdWxlXHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBTaGFyZUJ1dHRvbk1vZHVsZSxcclxuICAgIFNoYXJlQnV0dG9uc1xyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNoYXJlQnV0dG9uc01vZHVsZSB7XHJcbiAgc3RhdGljIHdpdGhDb25maWcoY29uZmlnPzogU2hhcmVCdXR0b25zQ29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogU2hhcmVCdXR0b25zTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFt7cHJvdmlkZTogU0hBUkVfQlVUVE9OU19DT05GSUcsIHVzZVZhbHVlOiBjb25maWd9XVxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl19