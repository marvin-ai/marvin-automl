import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-acquisitor',
  templateUrl: './acquisitor.component.html',
  styleUrls: ['./acquisitor.component.css']
})


export class AcquisitorComponent implements OnInit {

  constructor(private router: Router) { }
  
  ngOnInit() {}

  submitAcquisitor(post) {
    // post.preventDefault();
    //console.log(post);
    var url = post.target.elements[0].value;
    var target = post.target.elements[1].value;
    var problem_type = post.target.elements[2].value;
    var sep = post.target.elements[3].value;
    var encoding = post.target.elements[4].value;
    var generations = parseInt(post.target.elements[5].value);

    var data = {
      "params": {
        "url": url,
        "encoding": encoding,
        "separator": sep,
        "generations": generations,
        "target": target,
        "problem_type": problem_type,
        "population_size": 50,
        "config": "TPOT sparse",
      }
    }
    window.localStorage.setItem('acquisitor', JSON.stringify(data));
    this.router.navigate(['trainer']);
    // this.http.post('http://localhost:3000/api/acquisitor', JSON.stringify(data)).subscribe(data => {console.log(data)})
  }
}