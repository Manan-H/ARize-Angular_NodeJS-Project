import { IShareButton, ShareButtonArgs, ShareButtonProp } from '../models/share-buttons.models';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/empty';
import 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
export declare class EmailButton implements IShareButton {
    prop: ShareButtonProp;
    constructor(prop: ShareButtonProp);
    link(url: string, args?: ShareButtonArgs): string;
    count(): Observable<{}>;
}
