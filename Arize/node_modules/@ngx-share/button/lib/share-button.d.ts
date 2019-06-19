import { EventEmitter } from '@angular/core';
import { ShareService, ShareDirective } from '@ngx-share/core';
export declare class ShareButton {
    private _share;
    /** The sharing link */
    url: string;
    /** Share count value */
    shareCount: number;
    /** Button name */
    button: string;
    createButton: string;
    /** Set the sharing link */
    setUrl: string;
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
    /** Show button icon */
    showIcon: boolean;
    /** Show button text */
    showText: boolean;
    /** Show sharing count */
    showCount: boolean;
    /** Button custom text */
    text: string;
    /** Button custom icon */
    icon: string;
    /** Button size */
    size: number;
    /** Button theme */
    theme: string;
    /** Stream that emits when share count is fetched */
    count: EventEmitter<number>;
    /** Stream that emits when share dialog is opened */
    opened: EventEmitter<string>;
    /** Stream that emits when share dialog is closed */
    closed: EventEmitter<string>;
    /** Set theme as button class */
    readonly buttonClass: string;
    ref: ShareDirective;
    constructor(_share: ShareService);
    onCount(count: number): void;
}
