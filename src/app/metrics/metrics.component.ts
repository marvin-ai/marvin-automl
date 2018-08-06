import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
	selector: 'app-metrics',
	templateUrl: './metrics.component.html',
	styleUrls: ['./metrics.component.css']
})
export class MetricsComponent implements OnInit {

	metrics = JSON.parse("{\"explained_variance_score\": 0.8487320189164209,\"mean_absolute_error\": 2.0921645750755293, \
		\"mean_squared_log_error\": 0.02109136167898137,\"r2_score\": 0.8482061785618901}");
	
	constructor(private user:UserService) { }

	ngOnInit() {
	}

}
