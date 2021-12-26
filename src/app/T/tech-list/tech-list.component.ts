import { Component, OnInit } from '@angular/core';
import { TeacherApiService } from 'src/app/sharedService/teacher-api.service';


@Component({
  selector: 'app-tech-list',
  templateUrl: './tech-list.component.html',
  styleUrls: ['./tech-list.component.css']
})
export class TechListComponent {

  allData: [];
  constructor(private serv: TeacherApiService) {
    this.serv.get().subscribe((data: any) => {
      this.allData = data;
    })
  }

}
