import { Component, OnInit, Injectable } from '@angular/core';
import { UserService } from '../user.service';
import { HttpClient } from '@angular/common/http';
import { StatusService } from '../status.service';
import { Status } from '../action.status';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.css']
})
export class TrainerComponent implements OnInit {

  status: Status;

  constructor(private statusService: StatusService) { }

  ngOnInit() {
  	this
  		.statusService
  		.getResult()
  		.subscribe((data: Status) => {
  			this.status = JSON.parse(data.result));
  		});
  }

}
