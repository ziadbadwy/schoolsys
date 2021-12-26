import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { table } from './../../models/table';
import { TableApiService } from 'src/app/sharedService/table-api.service';

@Component({
  selector: 'app-edit-table',
  templateUrl: './edit-table.component.html',
  styleUrls: ['./edit-table.component.css']
})
export class EditTableComponent {
  obj = new table;
  id;
  constructor(private serv: TableApiService, private route: Router, private activeroute: ActivatedRoute) {
    this.id = activeroute.snapshot.paramMap.get('id');
  }

  edit() {
    this.serv.put(this.obj, this.id).subscribe(data => {
      this.route.navigateByUrl('list-table');
    })
  }

}
