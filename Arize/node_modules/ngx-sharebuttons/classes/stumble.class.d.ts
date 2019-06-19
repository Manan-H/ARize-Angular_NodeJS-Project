/** STUMBLE DOCS: http://stackoverflow.com/questions/10591424/how-can-i-create-a-custom-stumbleupon-button */
import { IShareButton, ShareButtonProp } from '../models/share-buttons.models';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/empty';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
export declare class StumbleButton implements IShareButton {
    prop: ShareButtonProp;
    constructor(prop: ShareButtonProp);
    link(url: string): string;
    count(): Observable<{}>;
}
