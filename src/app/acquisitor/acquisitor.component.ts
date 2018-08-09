import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StatusService } from '../status.service';
import { Status } from '../action.status';


@Component({
  selector: 'app-acquisitor',
  templateUrl: './acquisitor.component.html',
  styleUrls: ['./acquisitor.component.css']
})


export class AcquisitorComponent implements OnInit {

  status: Status;

  constructor(private user:UserService, private statusService: StatusService, private http: HttpClient) { }
  
  ngOnInit() {}

  submitAcquisitor(post) {
    // post.preventDefault();
    //console.log(post);
    var url = post.target.elements[0].value;
    var target = post.target.elements[1].value;
    var problem_type = post.target.elements[2].value;
    var sep = post.target.elements[3].value;
    var encoding = post.target.elements[4].value;
    var generations = post.target.elements[5].value;

    var data = {
      "params": {
        "url": url,
        "encoding": encoding,
        "separator": sep,
        "generations": generations,
        "target": target,
        "problem_type": problem_type,
        "population_size": 50,
        "config": "TPOT",
      }
    }
    this.http.post('http://localhost:3000/api/acquisitor', JSON.stringify(data)).subscribe(data => {console.log(data)})
  }
}