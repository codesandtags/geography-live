import { Component, Input, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-map-detail',
  templateUrl: './map-detail.component.html',
  styleUrls: ['./map-detail.component.css']
})
export class MapDetailComponent implements OnInit {

  @Input('country') country;
  staticKey: string;
  urlMap: string;

  constructor() {
  }

  ngOnInit() {
    this.staticKey = environment.GOOGLE_MAPS_CONFIG.GOOGLE_MAPS_STATIC_API_KEY;
    this.urlMap = `https://maps.googleapis.com/maps/api/staticmap?center=${this.country}&size=600x300&key=${this.staticKey}`;
  }

}
