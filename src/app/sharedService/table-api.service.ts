import { ApiFunctionService } from 'src/app/sharedService/api-function.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { table } from '../models/table';

@Injectable({
  providedIn: 'root'
})
export class TableApiService extends ApiFunctionService<table> {

  constructor(public http: HttpClient) {
    super("http://localhost:3000/table", http);
  }
}

