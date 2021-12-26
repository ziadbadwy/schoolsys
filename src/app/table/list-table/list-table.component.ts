import { Component, OnInit } from '@angular/core';
import { TableApiService } from 'src/app/sharedService/table-api.service';

@Component({
  selector: 'app-list-table',
  templateUrl: './list-table.component.html',
  styleUrls: ['./list-table.component.css']
})
export class ListTableComponent {

  allData: [];

  constructor(private serv: TableApiService) {

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
