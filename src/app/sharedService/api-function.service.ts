import { Teacher } from './../models/teachers';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiFunctionService<T> {


  constructor(@Inject(String) public connfigUrl: string, public http: HttpClient) {
  }
  get(): Observable<T> {
    return this.http.get<T>(this.connfigUrl);
  }
  getbyUsername(name): Observable<T> {
    return this.http.get<T>(this.connfigUrl + `/${name}`);
  }
  post(obj): Observable<T> {
    return this.http.post<T>(this.connfigUrl, obj)
  }
  delete(id): Observable<T> {
    return this.http.delete<T>(this.connfigUrl + `/${id}`);
  }
  put(obj, id): Observable<T> {
    return this.http.put<T>(this.connfigUrl + `/${id}`, obj)
  }
}
