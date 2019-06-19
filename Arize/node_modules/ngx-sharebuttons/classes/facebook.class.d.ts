import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/empty';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import { IShareButton, ShareButtonProp } from '../models/share-buttons.models';
export declare class FacebookButton implements IShareButton {
    prop: ShareButtonProp;
    private http;
    constructor(prop: ShareButtonProp, http: HttpClient);
    link(url: string): string;
    count(url: string): Observable<number | {}>;
}
