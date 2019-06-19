import { HttpClient } from '@angular/common/http';
import { ShareButtonsMeta, ShareButtonsOptions } from '../models/share-buttons.models';
import { FacebookButton, GoogleButton, PinterestButton, TumblrButton, PrintButton, LinkedinButton, RedditButton } from '../classes';
export declare class ShareButtonsService {
    private http;
    /** All buttons */
    allButtons: string[];
    /** Default options */
    options: ShareButtonsOptions;
    /** Button's meta data such as icon,color and text of each button */
    meta: ShareButtonsMeta;
    constructor(http: HttpClient, options: ShareButtonsOptions, meta: ShareButtonsMeta);
    readonly twitterAccount: string;
    readonly dialogSize: string;
    /** Get all wanted buttons */
    readonly buttons: string[];
    readonly theme: string;
    /** Global meta tags */
    readonly title: string;
    readonly description: string;
    readonly image: string;
    readonly tags: string;
    readonly gaTracking: boolean;
    readonly size: number;
    createShareButton(buttonName: string): FacebookButton | GoogleButton | PinterestButton | LinkedinButton | RedditButton | TumblrButton | PrintButton;
    /**
     * Determine the mobile operating system.
     * This function returns one of 'iOS', 'Android', 'Windows Phone', or 'unknown'.
     */
    getMobileOS(): any;
}
