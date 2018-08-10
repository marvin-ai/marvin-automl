import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-predictor',
  templateUrl: './predictor.component.html',
  styleUrls: ['./predictor.component.css']
})
export class PredictorComponent implements OnInit {

  predicted: string;

  constructor(private user:UserService, private http: HttpClient, private router: Router) { }

  ngOnInit() {}

  submitPredictor(post) {
    var message = post.target.elements[0].value;

    this.http
    	.post('http://localhost:3000/api/predictor', JSON.stringify(message))
    	.subscribe(
    		resp => this.predicted = resp["result"],
    		error => console.log(error)
    	);
  }

  home(post) {
    this.router.navigate(['predictor']);
  }

}
