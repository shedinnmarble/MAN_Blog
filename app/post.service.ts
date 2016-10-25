/**
 * Created by 985219 on 10/19/2016.
 */

import { Injectable } from '@angular/core'
import { Post } from './post'

import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PostService {
    private productUrl = '/api/getPosts'
    private headers = new Headers({ 'Content-Type': 'application/json' });
    constructor(private http: Http) { }
    getPosts(): Promise<Post[]> {
        return this.http.get(this.productUrl)
            .toPromise()
            .then(response =>JSON.parse(response.text()) as Post[])
            .catch(this.handleError)
    }
    add(){}

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
