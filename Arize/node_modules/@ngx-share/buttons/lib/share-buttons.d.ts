import { OnInit, OnDestroy, EventEmitter } from '@angular/core';
import { ShareService } from '@ngx-share/core';
import { Observable } from 'rxjs';
interface ButtonsState {
    includedButtons?: string[];
    excludedButtons?: string[];
    userButtons?: string[];
    selectedButtons?: string[];
    expanded?: boolean;
    shownCount?: number;
    moreIcon?: any;
    lessIcon?: any;
}
export declare class ShareButtons implements OnInit, OnDestroy {
    private _share;
    state$: Observable<ButtonsState>;
    private _state$;
    private _configSub$;
    theme: string;
    includedButtons: string[];
    excludedButtons: string[];
    shownButtons: number;
    /** The sharing link */
    url: string;
    /** The title parameter */
    title: string;
    /** The description parameter */
    description: string;
    /** The image parameter for sharing on Pinterest */
    image: string;
    /** The tags parameter for sharing on Twitter and Tumblr */
    tags: string;
    /** Sets meta tags from document head, useful when SEO is available */
    autoSetMeta: boolean;
    /** Show buttons icons */
    showIcon: boolean;
    /** Show buttons text */
    showText: boolean;
    /** Show sharing count */
    showCount: boolean;
    /** Buttons size */
    size: number;
    /** Share count event */
    count: EventEmitter<number>;
    /** Share dialog opened event */
    opened: EventEmitter<string>;
    /** Share dialog closed event */
    closed: EventEmitter<string>;
    constructor(_share: ShareService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    updateState(state: ButtonsState): void;
}
export {};
/**
 * Explanation of the above code:
 * ------------------------------
 Include buttons: includes only wanted buttons and excludes the rest
 Exclude buttons: excludes only the unwanted buttons
 User buttons = Include buttons - exclude buttons
 Selected Buttons = User buttons [shown number]
 */
