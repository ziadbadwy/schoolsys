import { StudentApiService } from './../../sharedService/student-api.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { student } from './../../models/student';

@Component({
  selector: 'app-edit-s',
  templateUrl: './edit-s.component.html',
  styleUrls: ['./edit-s.component.css']
})
export class EditSComponent {

  obj = new student;
  id;
  constructor(private serv: StudentApiService, private route: Router, private activeroute: ActivatedRoute) {
    this.id = activeroute.snapshot.paramMap.get('id');
  }

  edit() {
    this.serv.put(this.obj, this.id).subscribe(data => {
      this.route.navigateByUrl('list-s');
    })
  }
}
