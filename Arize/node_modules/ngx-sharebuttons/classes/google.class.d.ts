/** GPLUS DOCS: https://developers.google.com/+/web/share/#sharelink */
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/empty';
import { IShareButton, ShareButtonProp } from '../models/share-buttons.models';
export declare class GoogleButton implements IShareButton {
    prop: ShareButtonProp;
    private http;
    constructor(prop: ShareButtonProp, http: HttpClient);
    link(url: string): string;
    count(url: string): Observable<{}>;
}
