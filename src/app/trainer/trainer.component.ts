import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.css']
})
export class TrainerComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {


  	// this
  	// 	.statusService
  	// 	.getResult("")
  	// 	.subscribe((data: Status) => {
  	// 		this.status = JSON.parse(data.result);
  	// 	});
  }
      // var acquisitorParams = JSON.stringify({'protocol': acquisitorProtocol});

  startPipeline(post) {
    var acquisitorProtocol, status, tprepProtocol, trainerProtocol;

    var data = window.localStorage.getItem('acquisitor');
    this.http.post('http://localhost:3000/api/acquisitor', data).subscribe(resp => {
      acquisitorProtocol = resp['result'];
      console.log(acquisitorProtocol);
      
      this.http.post('http://localhost:3000/api/acquisitor/status', JSON.stringify({'protocol': acquisitorProtocol})).subscribe(resp => {
        status = JSON.parse(resp['result'])['status']['name'];
        console.log(status);

        this.http.post('http://localhost:3000/api/tpreparator', JSON.stringify({})).subscribe(resp => {
          tprepProtocol = resp['result'];
          console.log(tprepProtocol);

          this.http.post('http://localhost:3000/api/trainer', data).subscribe(resp => {
            trainerProtocol = resp['result'];
            console.log(trainerProtocol);
        });
        });
      });
    });
  }

}
