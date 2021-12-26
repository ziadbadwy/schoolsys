import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Teacher } from 'src/app/models/teachers';
import { TeacherApiService } from 'src/app/sharedService/teacher-api.service';

@Component({
  selector: 'app-update-teacher',
  templateUrl: './update-teacher.component.html',
  styleUrls: ['./update-teacher.component.css']
})
export class UpdateTeacherComponent {
  obj = new Teacher;
  id;
  constructor(private serv: TeacherApiService, private route: Router, private activeroute: ActivatedRoute) {
    this.id = activeroute.snapshot.paramMap.get('id');
  }

  edit() {
    this.serv.put(this.obj, this.id).subscribe(data => {
      this.route.navigateByUrl('list-t');
    })
  }

}
