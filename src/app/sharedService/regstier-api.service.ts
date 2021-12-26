import { HttpClient } from '@angular/common/http';
import { ApiFunctionService } from 'src/app/sharedService/api-function.service';
import { Injectable } from '@angular/core';
import { regData } from '../models/reg-data';

@Injectable({
  providedIn: 'root'
})
export class RegstierApiService extends ApiFunctionService<regData> {

  constructor(public http: HttpClient) {
    super("http://localhost:3000/reg", http);
  }
}
