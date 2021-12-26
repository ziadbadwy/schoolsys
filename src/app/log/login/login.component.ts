import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { regData } from 'src/app/models/reg-data';
import { RegstierApiService } from 'src/app/sharedService/regstier-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  obj1 = new regData;
  msg:string;
  constructor(private serv: RegstierApiService, private route: Router) {
  }
  save() {
       if(this.obj1.email=="Admin"||this.obj1.email=="admin"){
        this.route.navigateByUrl('home');
        this.msg="";

       }
       else if(this.obj1.email=="User"||this.obj1.email=="user"){
        this.route.navigateByUrl('user');
        this.msg="";
       }
       else{
         this.msg="enter admin or user";
       }
       
       if(this.obj1.password=="123"||this.obj1.password=="123"){
        this.msg="";

       }
       else{
         this.msg="enter valid password";
       }
  }

}

