import { Component, OnInit } from '@angular/core';
import {PostService} from "./post.service";
import {Post} from "./post";

@Component({
    selector: 'add-post',
    templateUrl:'add-post.component.html'
})
export class AddPostComponent implements OnInit {

    constructor(private postService:PostService ){}
    ngOnInit(): void {
        // this.getPosts();
        // console.log(this.posts);
    }

}