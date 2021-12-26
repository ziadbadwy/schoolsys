import { Component, OnInit } from '@angular/core';
import { StudentApiService } from './../../sharedService/student-api.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {

  allData: [];

  constructor(private serv: StudentApiService) {

    this.serv.get().subscribe((data: any) => {
      this.allData = data;
    })

  }

}
