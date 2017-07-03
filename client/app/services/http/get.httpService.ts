import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class GETHTTPService {

    constructor(private http:Http) { }

    getData(url: string): Observable<any> {

        return this.http.get(url)
            .map((response: Response) => {
                let reponse: any;
                // console.log('response : ', response);
                // console.log('response.json() : ', response.json());
                return response.json();
            });
    }

    getDataWithHeaders(url: string): Observable<any> {
        let headers = new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Basic '+btoa('admin'+':'+'EBrhgBrWsxtG')
        });
        let options = new RequestOptions({ headers: headers });

        return this.http.get(url, options)
            .map((response: Response) => {
                let reponse: any;
                // console.log('response : ', response);
                // console.log('response.json() : ', response.json());
                return response.json();
            });
    }

}