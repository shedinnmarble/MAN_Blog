import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {PostService} from "./post.service";
import {PostComponent} from "./post.component";
import {HttpModule} from "@angular/http";
import {AddPostComponent} from "./add-post.component";
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule

  ],
  declarations: [
 
    AppComponent,
    PostComponent,
    AddPostComponent
  ],
  providers:[PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
