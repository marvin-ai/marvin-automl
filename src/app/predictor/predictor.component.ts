import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-predictor',
  templateUrl: './predictor.component.html',
  styleUrls: ['./predictor.component.css']
})
export class PredictorComponent implements OnInit {

  predicted: string;

  constructor(private user:UserService, private http: HttpClient) { }

  ngOnInit() {}

  submitPredictor(post) {
    var message = post.target.elements[0].value;

    this.http
    	.post('http://localhost:3000/api/predictor', JSON.stringify(message))
    	.subscribe((data: string) => {
    	this.predicted = JSON.parse(data);
    	console.log("bbbbbbbb");
    	console.log(data);
    });
    console.log("aaaaaaaaaaaaaaa");
    console.log(this.predicted);
  }

}
