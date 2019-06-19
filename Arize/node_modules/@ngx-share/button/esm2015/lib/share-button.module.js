/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule, SHARE_BUTTONS_CONFIG } from '@ngx-share/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ShareButton } from './share-button';
export class ShareButtonModule {
    /**
     * @param {?=} config
     * @return {?}
     */
    static withConfig(config) {
        return {
            ngModule: ShareButtonModule,
            providers: [{ provide: SHARE_BUTTONS_CONFIG, useValue: config }]
        };
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmUtYnV0dG9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3gtc2hhcmUvYnV0dG9uLyIsInNvdXJjZXMiOlsibGliL3NoYXJlLWJ1dHRvbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFzQixvQkFBb0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3hGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBRXJFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQWlCN0MsTUFBTSxPQUFPLGlCQUFpQjs7Ozs7SUFDNUIsTUFBTSxDQUFDLFVBQVUsQ0FBQyxNQUEyQjtRQUMzQyxPQUFPO1lBQ0wsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixTQUFTLEVBQUUsQ0FBQyxFQUFDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFDLENBQUM7U0FDL0QsQ0FBQztJQUNKLENBQUM7OztZQXJCRixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFO29CQUNaLFdBQVc7aUJBQ1o7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLFdBQVc7b0JBQ1gsaUJBQWlCO29CQUNqQixZQUFZO2lCQUNiO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxXQUFXO29CQUNYLGlCQUFpQjtvQkFDakIsV0FBVztpQkFDWjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgU2hhcmVNb2R1bGUsIFNoYXJlQnV0dG9uc0NvbmZpZywgU0hBUkVfQlVUVE9OU19DT05GSUcgfSBmcm9tICdAbmd4LXNoYXJlL2NvcmUnO1xyXG5pbXBvcnQgeyBGb250QXdlc29tZU1vZHVsZSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9hbmd1bGFyLWZvbnRhd2Vzb21lJztcclxuXHJcbmltcG9ydCB7IFNoYXJlQnV0dG9uIH0gZnJvbSAnLi9zaGFyZS1idXR0b24nO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIFNoYXJlQnV0dG9uXHJcbiAgXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBTaGFyZU1vZHVsZSxcclxuICAgIEZvbnRBd2Vzb21lTW9kdWxlLFxyXG4gICAgQ29tbW9uTW9kdWxlXHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBTaGFyZU1vZHVsZSxcclxuICAgIEZvbnRBd2Vzb21lTW9kdWxlLFxyXG4gICAgU2hhcmVCdXR0b25cclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaGFyZUJ1dHRvbk1vZHVsZSB7XHJcbiAgc3RhdGljIHdpdGhDb25maWcoY29uZmlnPzogU2hhcmVCdXR0b25zQ29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogU2hhcmVCdXR0b25Nb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW3twcm92aWRlOiBTSEFSRV9CVVRUT05TX0NPTkZJRywgdXNlVmFsdWU6IGNvbmZpZ31dXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXX0=