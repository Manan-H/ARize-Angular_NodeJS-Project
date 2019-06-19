import { EventEmitter, OnDestroy, ChangeDetectorRef, ElementRef } from '@angular/core';
import { ShareButtonDirective } from '../../directives/share-button.directive';
import { ShareButtonsService } from '../../services/share-buttons.service';
export declare class ShareButtonComponent implements OnDestroy {
    private cd;
    private share;
    /** Share URL */
    url: string;
    /** Share count value */
    shareCount: number;
    /** Button name e.g. fb, twitter, reddit...etc */
    button: string;
    createButton: string;
    /** on set share URL */
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
    /** Button theme */
    setTheme: string;
    /** Set theme as button class */
    buttonClass: string;
    /** Share count event */
    count: EventEmitter<number>;
    /** Share dialog opened event */
    opened: EventEmitter<string>;
    /** Share dialog closed event */
    closed: EventEmitter<string>;
    /** Share directive ref */
    shareDirective: ShareButtonDirective;
    /** <ng-content> wrapper, used to add class e.g. sb-default, sb-text, sb-count */
    template: ElementRef;
    constructor(cd: ChangeDetectorRef, share: ShareButtonsService);
    ngOnDestroy(): void;
}
