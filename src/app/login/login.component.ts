import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private user: UserService, private apiService: ApiService) { }

  ngOnInit() {

  }

  onSubmit(post) {

    post.preventDefault();
    //console.log(post);
    var username = post.target.elements[0].value;
    var password = post.target.elements[1].value;
    console.log(username);


    this.apiService.loginUser(username, password).subscribe((response) => {
      //alert('Authenticated!');
      this.user.setUserLoggedIn();
      this.router.navigate(['home']);
    },
      (err: HttpErrorResponse) => {
        alert(err.error.message);
        console.log(err.error);
        console.log(err.name);
        console.log(err.message);
        console.log(err.status);
      });

    /*
  if (username == 'admin' && password == 'admin') {

    alert('Authenticated!');
    this.user.setUserLoggedIn();
    this.router.navigate(['home']);

  }
  */

    return false;
  }

}
