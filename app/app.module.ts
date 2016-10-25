import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {PostService} from "./post.service";
import {PostComponent} from "./post.component";
import {HttpModule} from "@angular/http";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
      HttpModule

  ],
  declarations: [
 
    AppComponent,
  PostComponent
  ],
  providers:[PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
