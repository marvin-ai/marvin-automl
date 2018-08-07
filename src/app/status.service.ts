import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  constructor(private http: HttpClient) { }

  getResult() {
  	return this
  			.http
  			.get('http://10.167.68.119:8000/trainer/status?protocol=trainer_242f0342-7f1d-44fb-b5e3-c571046294c4');
  }

}
