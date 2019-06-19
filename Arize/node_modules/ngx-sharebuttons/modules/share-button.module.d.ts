import { InjectionToken } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShareButtonsService } from '../services/share-buttons.service';
import { ShareButtonsMeta, ShareButtonsOptions } from '../models/share-buttons.models';
export declare function ShareButtonsFactory(httpClient: HttpClient, options: ShareButtonsOptions, buttonsMeta: ShareButtonsMeta): ShareButtonsService;
export declare class ShareButtonModule {
    static forRoot(options?: ShareButtonsOptions, buttonsMeta?: ShareButtonsMeta): {
        ngModule: typeof ShareButtonModule;
        providers: ({
            provide: InjectionToken<ShareButtonsOptions>;
            useValue: ShareButtonsOptions;
        } | {
            provide: InjectionToken<ShareButtonsMeta>;
            useValue: ShareButtonsMeta;
        } | {
            provide: typeof ShareButtonsService;
            useFactory: (httpClient: HttpClient, options: ShareButtonsOptions, buttonsMeta: ShareButtonsMeta) => ShareButtonsService;
            deps: (InjectionToken<ShareButtonsOptions> | typeof HttpClient)[];
        })[];
    };
}
