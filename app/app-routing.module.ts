
import {Routes, RouterModule} from "@angular/router";

import {NgModule} from "@angular/core";
import {AddPostComponent} from "./add-post.component";
import {AppComponent} from "./app.component";
import {PostComponent} from "./post.component";
const routes: Routes =[
    {
        path: 'add',
        component: AddPostComponent
     },{
        path:'home',
        component:PostComponent

    },{
        path:'',
        redirectTo:'/home',
        pathMatch: 'full'
    }
     // ,
    // {
    //     path: '',
    //     redirectTo: 'add',
    //     pathMatch: 'full'
    // },
];
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}