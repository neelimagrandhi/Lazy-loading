import { NgModule } from "@angular/core";
import { Usereditcomponent } from './useredit.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations:[Usereditcomponent],
    imports:[CommonModule,RouterModule],
    exports:[]
})
export class Usereditmodule{

}