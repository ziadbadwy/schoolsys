import { Router } from '@angular/router';
import { student } from './../../models/student';
import { StudentApiService } from './../../sharedService/student-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-s',
  templateUrl: './add-s.component.html',
  styleUrls: ['./add-s.component.css']
})
export class AddSComponent {
  obj = new student;
  constructor(private serv: StudentApiService ,  private route: Router) {

  }
  save() {
    this.serv.post(this.obj).subscribe((data) => {
      this.route.navigateByUrl('list-s');
    })
  }


}
