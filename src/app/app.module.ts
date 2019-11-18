import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { homeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router"
import { HttpClientModule } from '@angular/common/http';
import { Usereditcomponent } from './useredit/useredit.component';
import { Usereditmodule } from './useredit/useredit.module';
import{ FormsModule } from "@angular/forms";

const Route:any=[{
  path:"",
  redirectTo:"home",
  pathMatch:"full",
},
{
  path:"home",
  component:homeComponent
},
{
  path:"useredit/:id",
  component:Usereditcomponent,
  loadChildren:"./useredit/useredit.module#Usereditmodule"
}]

@NgModule({
  declarations: [
    AppComponent,
    homeComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    Usereditmodule,
    FormsModule,
    RouterModule.forRoot(Route,{
      useHash:true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
