import { Router } from '@angular/router';
import { table } from './../../models/table';
import { TableApiService } from 'src/app/sharedService/table-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-table',
  templateUrl: './add-table.component.html',
  styleUrls: ['./add-table.component.css']
})
export class AddTableComponent {

  obj = new table;
  constructor(private serv: TableApiService, private route: Router) {
  }
  save() {
    this.serv.post(this.obj).subscribe((data) => {
      this.route.navigateByUrl('list-table');
    })
  }

}
