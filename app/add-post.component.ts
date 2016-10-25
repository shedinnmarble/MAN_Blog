import {Component, OnInit, Input} from '@angular/core';
import {PostService} from "./post.service";
import {Post} from "./post";

@Component({
    moduleId: module.id,
    selector: 'add-post',
    template:`<form >
    <div class="form-group">
        <label for="postName">Post Name</label>
        <input type="text" class="form-control" id="postName" placeholder="Post Name" name="name" #postName  />
    </div>
    <div class="form-group">
        <label for="postAuthor">Author</label>
        <input type="text" class="form-control" id="postAuthor" placeholder="author" name="author" #postAuthor />
    </div>
    <div class="form-group">
        <label for="postContent">Post Name</label>

        <textarea class="form-control" id="postContent" placeholder="Post Content" name="content" #postContent></textarea>
    </div>
    <button type="button" class="btn btn-default" (click)="addPost(postName.value,postAuthor.value,postContent.value);$window.location.href = '/home';">Submit</button>
</form>`
})
export class AddPostComponent  {
    @Input()
    module:Post;
    constructor(private postService:PostService ){}

    addPost(name: string,author:string,content:string):void{
        console.log(name+"post");
        this.postService.add(name,author,content);
    }


}