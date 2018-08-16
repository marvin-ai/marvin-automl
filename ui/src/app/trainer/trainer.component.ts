import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { timer } from 'rxjs';
import { concatMap, map } from 'rxjs/operators';
import {Observable} from "rxjs/internal/Observable";
import {interval} from "rxjs/internal/observable/interval";
import {startWith, switchMap} from "rxjs/operators";
import { Router } from '@angular/router';


@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.css']
})
export class TrainerComponent implements OnInit {

  trainerStatus$: Observable<any>;
  params: any;
  data: any;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.data = window.localStorage.getItem('acquisitor');
    this.params = JSON.parse(this.data)["params"];
  }

  next(post){
    this.router.navigate(['predictor']);
  }

  startPipeline(post) {
    var acquisitorProtocol, status, tprepProtocol, trainerProtocol;

    this.http.post('http://localhost:3000/api/acquisitor', this.data).subscribe(resp => {
      acquisitorProtocol = resp['result'];
      console.log(acquisitorProtocol);
      
      // this.http.post('http://localhost:3000/api/acquisitor/status', JSON.stringify({'protocol': acquisitorProtocol})).subscribe(resp => {
      //   status = JSON.parse(resp['result'])['status']['name'];
      //   console.log(status);

        this.http.post('http://localhost:3000/api/tpreparator', JSON.stringify({})).subscribe(resp => {
          tprepProtocol = resp['result'];
          console.log(tprepProtocol);
          window.localStorage.setItem('tprepProtocol', tprepProtocol);

          this.http.post('http://localhost:3000/api/trainer', this.data).subscribe(resp => {
            trainerProtocol = resp['result'];
            console.log(trainerProtocol);
            window.localStorage.setItem('trainerProtocol', trainerProtocol);

            const trainerReq$ = this.http.post('http://localhost:3000/api/trainer/status', JSON.stringify({'protocol': trainerProtocol}))

            interval(5000).pipe(
              startWith(0),
              switchMap(_ => trainerReq$)
            ).subscribe(resp => {
              this.trainerStatus$ = JSON.parse(resp['result'])['status']['name'];
              console.log(this.trainerStatus$);
            });

          });
        });
      // });
    });
  }

}
