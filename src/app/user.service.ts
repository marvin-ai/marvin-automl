import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private isUserLoggedIn;
  private username;

  constructor() { 
    this.isUserLoggedIn = false;
  }

  setUserLoggedIn(){
    this.isUserLoggedIn = true;
  }

  getUserLoggedIn(){
    return this.isUserLoggedIn;
  }
}
