import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './predictor.component.html',
  styleUrls: ['./predictor.component.css']
})
export class PredictorComponent implements OnInit {

  constructor(private user:UserService) { }

  ngOnInit() {
  }

}
