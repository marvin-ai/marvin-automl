import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  constructor(private http: HttpClient) { }

  getResult(url) {
  	return this.http.get(url);
  }

  public postData(url: string, data: any): any {
  	return this.http.post(url, data);
  }
}
