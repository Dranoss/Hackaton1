import { Component, OnInit } from '@angular/core';
import { MapInfoWindow, MapMarker, GoogleMap } from '@angular/google-maps';
import { DistanceService } from 'src/app/Service/distance.service';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {

  constructor(private calculDistance: DistanceService) { }

  markers = [];
  lat: number;
  lng: number;
  origin = {lat: this.lat, lng: this.lng};
  lat2 = 35.8707051119801;
  lng2 = -106.00010762499998;
  destination = {lat: this.lat2, lng: this.lng2};
  distance;

  click(event: google.maps.MouseEvent) {
    this.lat = event.latLng.lat();
    this.lng = event.latLng.lng();
    this.addMarker();
    const rLat1 = this.calculDistance.degreeToRadiant(this.lat);
    const rLon1 = this.calculDistance.degreeToRadiant(this.lng);
    const rLat2 = this.calculDistance.degreeToRadiant(this.lat2);
    const rLon2 = this.calculDistance.degreeToRadiant(this.lng2);
    this.distance = this.calculDistance.calculDistance(rLon1, rLat1, rLon2, rLat2);
  }

  addMarker() {
    this.markers = [{
      position: {
        lat: this.lat,
        lng: this.lng
      },
      label: {
        color: 'white',
        text: 'Ici',
      },
      title: '',
      options: {},
    }];
  }

ngOnInit(): void {
  }

}
