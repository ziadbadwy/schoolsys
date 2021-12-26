import { TeacherApiService } from './../../sharedService/teacher-api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Teacher } from 'src/app/models/teachers';

@Component({
  selector: 'app-add-t',
  templateUrl: './add-t.component.html',
  styleUrls: ['./add-t.component.css']
})
export class AddTComponent {
  obj = new Teacher;
  constructor(private serv: TeacherApiService, private route: Router) {
  }
  save() {
    this.serv.post(this.obj).subscribe((data) => {
      this.route.navigateByUrl('list-t');
    })
  }



}
