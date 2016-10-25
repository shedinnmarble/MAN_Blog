
import {Routes, RouterModule} from "@angular/router";

import {NgModule} from "@angular/core";
import {AddPostComponent} from "./add-post.component";
import {AppComponent} from "./app.component";
const routes: Routes =[
    {
        path: 'add',
        component: AddPostComponent
    }
];
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}