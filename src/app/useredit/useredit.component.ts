import { Component } from "@angular/core";
import { apiService } from '../services/api.service';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
    selector: "app-useredit",
    templateUrl: "useredit.component.html",
    styleUrls: ["useredit.component.scss"]
})

export class Usereditcomponent{

   [x: string]: any;
    public currentuser:any;
    public id:any;
    public name:any;
    public data:any={"name":null,"username":null,"email":null}
    constructor(private route:ActivatedRoute,private service:apiService){
        this.route.params.subscribe(
            (res)=>{
                this.id=res.id;
                this.fetchdata()
            }
        )
    }
    fetchdata(){
        return this.service.getuserInfo(this.id).subscribe(
            res=>{
                this.currentuser=res;
                console.log(this.currentuser)
            }
        )
    }
   changedata(key,e){
        if(key=="name"){
            this.data.name=e.target.value
            
        }
        else if(key=="username"){
            this.data.username=e.target.value
            
        }
        else if(key=="email"){
            this.data.email=e.target.value
            
        }
        else if(key=="phoneno"){
            this.data.phoneno=e.target.value
        }
    }
    changedata1($event){
        this.name=$event.target.value
    }

   change(){
        console.log(this.data)
    }
    //modified(){
      //  this.name=event.target.value
    //}
}
