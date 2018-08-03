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
  			.get('http://localhost:8000/trainer/status?protocol=trainer_33335ed4-67e3-4aeb-8127-5dadca551c66');
  }

}
