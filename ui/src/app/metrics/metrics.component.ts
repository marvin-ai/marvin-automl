import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { HttpClient } from '@angular/common/http';


@Component({
	selector: 'app-metrics',
	templateUrl: './metrics.component.html',
	styleUrls: ['./metrics.component.css']
})
export class MetricsComponent implements OnInit {

	metrics = {
		"explained_variance_score": 0,
		"mean_absolute_error": 0,
		"mean_squared_log_error": 0,
		"r2_score": 0,
		"accuracy": 0,
		"f1_weighted":0,
		"precision":0,
		"recall":0
	};
	// metrics = null;
	
	constructor(private user:UserService, private http: HttpClient) { }

	ngOnInit() {
		var tprepProtocol = window.localStorage.getItem('tprepProtocol');
		var trainerProtocol = window.localStorage.getItem('trainerProtocol');
		var params = window.localStorage.getItem('acquisitor');
		var payload = {'tprepProtocol':tprepProtocol, 'trainerProtocol':trainerProtocol};

		this.http.post('http://localhost:3000/api/evaluator/reload', JSON.stringify({payload})).subscribe(resp => {
			this.http.post('http://localhost:3000/api/evaluator', params).subscribe(resp => {
				var metricsPayload = JSON.stringify({'protocol': resp['result']});
				this.http.post('http://localhost:3000/api/evaluator/metrics', metricsPayload).subscribe(resp => {
					this.metrics = JSON.parse(resp['result']);
					// console.log(this.metrics);
				});
			});
		});
	}

}
