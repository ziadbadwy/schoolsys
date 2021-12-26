import { Component, OnInit } from '@angular/core';
import { TableApiService } from 'src/app/sharedService/table-api.service';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent {

  allData: [];

  constructor(private serv: TableApiService) {

    this.serv.get().subscribe((data: any) => {
      this.allData = data;
    })

  }
}
