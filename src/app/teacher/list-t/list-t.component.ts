import { Component } from '@angular/core';
import { TeacherApiService } from 'src/app/sharedService/teacher-api.service';

@Component({
  selector: 'app-list-t',
  templateUrl: './list-t.component.html',
  styleUrls: ['./list-t.component.css']
})
export class ListTComponent {
  allData: [];
  constructor(private serv: TeacherApiService) {
    this.serv.get().subscribe((data: any) => {
      this.allData = data;
    })
  }
  remove(id) {
    this.serv.delete(id).subscribe((data) => {
       window.location.reload();
    })
  }
}