import { Component, OnInit } from '@angular/core';
import { chatAdmin } from './../../models/chatAdmin';
import { ChatAdminApiService } from './../../sharedService/chat-admin-api.service';
import { Router } from '@angular/router';
import { ChatApiService } from './../../sharedService/chat-api.service';
import { chat } from 'src/app/models/chat';

@Component({
  selector: 'app-chat-admin',
  templateUrl: './chat-admin.component.html',
  styleUrls: ['./chat-admin.component.css']
})
export class ChatAdminComponent {
  obj = new chat;
  obj2 = new chatAdmin;
  allData: [];
  allData2: [];
  today: Date = new Date();
  hours = this.today.getHours() - 12;
  minutes = this.today.getMinutes();

  constructor(private serv: ChatApiService, private serve: ChatAdminApiService, private route: Router) {
    this.serv.get().subscribe((data: any) => {
      this.allData = data;
    })
    this.serve.get().subscribe((data: any) => {
      this.allData2 = data;

    })
  }
  send() {
    this.serv.post(this.obj).subscribe((data) => {
      this.obj.msg = "";
      window.location.reload();

    })
  }


}
