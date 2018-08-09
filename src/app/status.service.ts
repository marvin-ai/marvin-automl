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
  			.get('http://localhost:8000/trainer/status?protocol=trainer_3d9e9507-7ee7-46c8-8064-8a4172c64fae');
  }

}
