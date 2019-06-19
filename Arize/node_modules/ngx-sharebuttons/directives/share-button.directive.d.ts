import { EventEmitter, ElementRef, Renderer2, ChangeDetectorRef } from '@angular/core';
import { ShareButtonsService } from '../services/share-buttons.service';
import { IShareButton } from '../models/share-buttons.models';
import { UniversalSupportService } from '../services/universal-support.service';
export declare class ShareButtonDirective {
    private share;
    renderer: Renderer2;
    cd: ChangeDetectorRef;
    /** Window ref that supports Universal */
    window: Window;
    /** Element ref */
    el: HTMLElement;
    /** Share button type */
    shareButton: IShareButton;
    /** Validated share URL */
    url: string;
    /** Share meta tags */
    sbTitle: string;
    sbDescription: string;
    sbImage: string;
    sbTags: string;
    /** Set button class, e.g. 'sb-facebook' */
    buttonClass: string;
    /** Set share button e.g facebook, twitter...etc  */
    createButton: string;
    /** Set share URL */
    sbUrl: string;
    /** Google analytics tracking*/
    gaTracking: boolean;
    /** Share count event */
    sbCount: EventEmitter<number>;
    /** Share dialog opened event */
    sbOpened: EventEmitter<string>;
    /** Share dialog closed event */
    sbClosed: EventEmitter<string>;
    constructor(share: ShareButtonsService, renderer: Renderer2, cd: ChangeDetectorRef, el: ElementRef, universal: UniversalSupportService);
    /** Open share dialog */
    onClick(): void;
    getCount(): void;
    validateUrl(url: string): string;
}
