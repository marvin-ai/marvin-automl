import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-acquisitor',
  templateUrl: './acquisitor.component.html',
  styleUrls: ['./acquisitor.component.css']
})


export class AcquisitorComponent implements OnInit {
    constructor(private user:UserService, private http: HttpClient) { }
    ngOnInit() {
  }

    submitAcquisitor(post) {
        post.preventDefault();
        //console.log(post);
        var url = post.target.elements[0].value;
        var target = post.target.elements[1].value;
        var sep = post.target.elements[2].value;
        var encoding = post.target.elements[3].value;
        var generations = post.target.elements[4].value;

        // Post go here
    }
}