/**
 * Created by 985219 on 10/19/2016.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var PostService = (function () {
    function PostService(http) {
        this.http = http;
        this.productUrl = '/api/getUsers';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    PostService.prototype.getPosts = function () {
        return this.http.get(this.productUrl)
            .toPromise()
            .then(function (response) { return JSON.parse(response.text()); })
            .catch(this.handleError);
    };
    // getPosts(): void {
    //      this.http.get(this.productUrl)
    //         .toPromise()
    //         .then(response =>console.log(response.json().data) )
    //         .catch(this.handleError)
    // }
    PostService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    PostService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], PostService);
    return PostService;
}());
exports.PostService = PostService;
//# sourceMappingURL=post.service.js.map