import { StudentApiService } from './../../sharedService/student-api.service';
import { ApiFunctionService } from './../../sharedService/api-function.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-s',
  templateUrl: './list-s.component.html',
  styleUrls: ['./list-s.component.css']
})
export class ListSComponent {
  allData: [];

  constructor(private serv: StudentApiService) {

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
