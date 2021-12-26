import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { regData } from 'src/app/models/reg-data';
import { RegstierApiService } from 'src/app/sharedService/regstier-api.service';

@Component({
  selector: 'app-regestier',
  templateUrl: './regestier.component.html',
  styleUrls: ['./regestier.component.css']
})
export class RegestierComponent {

  obj = new regData;
  constructor(private serv: RegstierApiService, private route: Router) {
  }
  save() {
    this.serv.post(this.obj).subscribe((data) => {
      this.route.navigateByUrl('Login');
    })
  }



}
