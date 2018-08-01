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
  			.get('http://localhost:8000/trainer/status?protocol=trainer_ce03decb-9f2f-4fc4-a64f-d22344f7b52b');
  }

}
