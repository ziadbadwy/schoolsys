import { HttpClient } from '@angular/common/http';
import { ApiFunctionService } from 'src/app/sharedService/api-function.service';
import { Injectable } from '@angular/core';
import { Teacher } from '../models/teachers';

@Injectable({
  providedIn: 'root'
})
export class TeacherApiService extends ApiFunctionService<Teacher> {

  constructor(public http: HttpClient ) { 
    super("http://localhost:3000/teacher", http);
  }
}
