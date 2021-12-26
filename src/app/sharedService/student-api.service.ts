import { HttpClient } from '@angular/common/http';
import { ApiFunctionService } from 'src/app/sharedService/api-function.service';
import { Injectable } from '@angular/core';
import { student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentApiService extends ApiFunctionService<student> {

  constructor(public http: HttpClient) {
    super("http://localhost:3000/student", http);
  }
}
