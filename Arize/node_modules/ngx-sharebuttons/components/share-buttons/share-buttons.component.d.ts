import { EventEmitter, OnDestroy, ChangeDetectorRef, QueryList, OnInit } from '@angular/core';
import { ShareButtonsService } from '../../services/share-buttons.service';
import { ShareButtonComponent } from '../share-button/share-button.component';
export declare class ShareButtonsComponent implements OnInit, OnDestroy {
    private cd;
    share: ShareButtonsService;
    /** Share URL */
    url: string;
    /** Share count value */
    shareCount: number;
    /** Share Buttons array */
    buttons: string[];
    /** Buttons to include */
    includeButtons: string[];
    /** Buttons to exclude */
    excludeButtons: string[];
    include: string[];
    exclude: string[];
    /** Number of shown buttons */
    shownButtons: number;
    /** Number of included buttons */
    totalButtons: any;
    /** Disable more/less buttons */
    showAll: boolean;
    setShownButtons: number;
    /** Set share URL */
    setUrl: string;
    /** Share meta tags */
    title: string;
    description: string;
    image: string;
    tags: string;
    /** Show button icon */
    showIcon: boolean;
    /** Show button name */
    showName: boolean;
    /** Button size */
    size: number;
    /** Get and display share count */
    showCount: boolean;
    setShowCount: boolean;
    /** Buttons theme */
    theme: any;
    setTheme: string;
    /** Set theme as buttons' container class */
    containerClass: string;
    /** Share count event */
    count: EventEmitter<number>;
    /** Share dialog opened event */
    opened: EventEmitter<string>;
    /** Share dialog closed event */
    closed: EventEmitter<string>;
    /** Share components ref */
    shareComponents: QueryList<ShareButtonComponent>;
    constructor(cd: ChangeDetectorRef, share: ShareButtonsService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    more(): void;
    less(): void;
}
