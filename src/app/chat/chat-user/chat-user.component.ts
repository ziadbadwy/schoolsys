import { chatAdmin } from './../../models/chatAdmin';
import { ChatAdminApiService } from './../../sharedService/chat-admin-api.service';
import { Router } from '@angular/router';
import { ChatApiService } from './../../sharedService/chat-api.service';
import { Component, OnInit } from '@angular/core';
import { chat } from 'src/app/models/chat';



@Component({
  selector: 'app-chat-user',
  templateUrl: './chat-user.component.html',
  styleUrls: ['./chat-user.component.css']
})
export class ChatUserComponent {
  obj = new chat;
  obj2 = new chatAdmin;
  allData: [];
  allData2: [];
  x:boolean;
  today: Date = new Date();
  hours = this.today.getHours()-12;
  minutes = this.today.getMinutes();
  
  constructor(private serv: ChatApiService,private serve: ChatAdminApiService, private route: Router) {
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






