import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiFunctionService } from 'src/app/sharedService/api-function.service';
import { chat } from '../models/chat';

@Injectable({
  providedIn: 'root'
})
export class ChatApiService extends ApiFunctionService<chat>  {

  constructor(public http: HttpClient) {
    super("http://localhost:3000/chat", http);
  }
}
