import { IShareButton, ShareButtonArgs, ShareButtonProp } from '../models/share-buttons.models';
import { ShareButtonDirective } from '../directives/share-button.directive';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/empty';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
export declare class CopyButton implements IShareButton {
    prop: ShareButtonProp;
    constructor(prop: ShareButtonProp);
    link(url: string, args?: ShareButtonArgs): any;
    count(): Observable<{}>;
    /** copy URL to clipboard */
    copyURLToClipboard(url: string, directive: ShareButtonDirective): void;
}
