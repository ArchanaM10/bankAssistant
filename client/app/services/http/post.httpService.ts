import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class POSTHTTPService {

    constructor(private http:Http) { }

    postData(url: string, payload: any): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(url, payload, options)
            .map((response: Response) => {
                // console.log('in post call response.json() : ', response.json());
                return response.json();
            })
    }

}