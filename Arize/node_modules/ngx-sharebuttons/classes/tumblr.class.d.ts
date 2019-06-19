/** TUMBLR DOCS: https://www.tumblr.com/docs/en/share_button */
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/empty';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import { IShareButton, ShareButtonArgs, ShareButtonProp } from '../models/share-buttons.models';
export declare class TumblrButton implements IShareButton {
    prop: ShareButtonProp;
    private http;
    constructor(prop: ShareButtonProp, http: HttpClient);
    link(url: string, args?: ShareButtonArgs): string;
    count(url: string): Observable<number | {}>;
}
