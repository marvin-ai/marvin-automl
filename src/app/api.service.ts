import { Injectable } from '@angular/core';
import { HttpClient }   from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_URL  =  'http://localhost:3000/api';
  //API_URL  =  'https://reqres.in/api';
  
  constructor(private httpClient: HttpClient) { }

  loginUser(user, pass){
    console.log({'name': user,'pass': pass});
    return  this.httpClient.post(`${this.API_URL}/login`, {'name': user,'pass': pass});
    
    //return  this.httpClient.post(`${this.API_URL}/login`, {'email': 'peter@klaven','password': 'cityslicka'});
    //return  this.httpClient.post(`${this.API_URL}/login`, {'email': 'peter@klaven'});
  }
}
