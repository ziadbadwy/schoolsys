import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiFunctionService } from 'src/app/sharedService/api-function.service';
import { chatAdmin } from '../models/chatAdmin';

@Injectable({
  providedIn: 'root'
})
export class ChatAdminApiService extends ApiFunctionService<chatAdmin> {

  constructor(public http: HttpClient) {
    super("http://localhost:3000/chatAdmin", http);
  }
}
