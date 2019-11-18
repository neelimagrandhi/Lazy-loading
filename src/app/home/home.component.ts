import { Router } from '@angular/router';
import { Component } from "@angular/core";
import { apiService } from '../services/api.service';



@Component({
    selector: "app-home",
    templateUrl: "home.component.html",
    styleUrls: ["home.component.scss"]
})
export class homeComponent{
    public users:any;
    public value:any;
   public name:string=null;
    id: any;
    user:any;
    name1="sai"
    constructor(private service:apiService, private router:Router){
        
        this.getUsers();
    }
    getUsers(){
        this.service.fetchUsers().subscribe(
            res=>{
                this.service.userdata=res;
                this.users=res;
            }
        )    
    }
     gotoEdit(data){
         this.router.navigate(["useredit",data])
     }
    //display only related values wihtout refresh
   /*search(event){
        var searchkey=event.target.value;
        if(searchkey){
            this.users=this.users.filter((user ) =>{
                var name=user.name.toLowerCase()
                return name.indexOf(searchkey)!==-1
            })
        }
}*/
   search(event){
    var searchkey=event.target.value;
    if(searchkey){
        this.users=this.service.userdata.filter((user,index) =>{
            var name=user.name.toLowerCase()
            return name.indexOf(searchkey)!==-1
            })
        }
        else {
            return this.users
        }
    }
    //modified(){
      //  this.name=event.target.value
    //}
   }


