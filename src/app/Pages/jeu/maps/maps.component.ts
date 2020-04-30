import { Component, OnInit } from '@angular/core';
import { MapInfoWindow, MapMarker, GoogleMap } from '@angular/google-maps';
import { DistanceService } from 'src/app/Service/distance.service';
import { StreetViewService } from 'src/app/Service/street-view.service';
import { PointsService } from 'src/app/Service/points.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {
 streetViewList: [];
  markers = [];
  name: string;
  lat: number;
  lng: number;
  distance;
  streetViewSelected;
  counter: number;
  canClick = true;
  points = 0;
  SendTime = false;
  constructor(private calculDistance: DistanceService, private streetView: StreetViewService, private score: PointsService,
              private router: Router) {
    this.counter = 0;
  }
  click(event: google.maps.MouseEvent) {
    if (this.canClick === true && this.streetViewList.length > 0){
    this.lat = event.latLng.lat();
    this.lng = event.latLng.lng();
    this.addMarker();
    const rLat1 = this.calculDistance.degreeToRadiant(this.lat);
    const rLon1 = this.calculDistance.degreeToRadiant(this.lng);
    const rLat2 = this.calculDistance.degreeToRadiant(this.streetViewSelected.lat);
    const rLon2 = this.calculDistance.degreeToRadiant(this.streetViewSelected.lng);
    this.distance = Math.floor(this.calculDistance.calculDistance(rLon1, rLat1, rLon2, rLat2));
    this.name = this.streetViewSelected.name;
    this.addMarkerAnswer();
    this.canClick = false;
    this.setScore();
    } else if ( this.canClick === true && this.streetViewList.length === 0){
      this.lat = event.latLng.lat();
      this.lng = event.latLng.lng();
      this.addMarker();
      const rLat1 = this.calculDistance.degreeToRadiant(this.lat);
      const rLon1 = this.calculDistance.degreeToRadiant(this.lng);
      const rLat2 = this.calculDistance.degreeToRadiant(this.streetViewSelected.lat);
      const rLon2 = this.calculDistance.degreeToRadiant(this.streetViewSelected.lng);
      this.distance = Math.floor(this.calculDistance.calculDistance(rLon1, rLat1, rLon2, rLat2));
      this.name = this.streetViewSelected.name;
      this.addMarkerAnswer();
      this.canClick = false;
      this.setScore();
      this.SendTime = true;
  }
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
   addMarkerAnswer() {
     this.markers.push(new google.maps.Marker({
      position: {
        lat: this.streetViewSelected.lat,
        lng: this.streetViewSelected.lng
      },
      icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',

     }));
    }

getRandomnStreetView(){
      if (this.streetViewList.length === 0) {}
      const randIndex = Math.floor(Math.random() * Math.floor((this.streetViewList.length)));
      const chosenStreetView = this.streetViewList.splice(randIndex, 1);
      return chosenStreetView[0];
  }
confirm(){

    this.streetViewSelected = this.getRandomnStreetView();
    this.markers = [];
    this.canClick = true;
  }
 setScore(){
   if (this.distance <= 500){
    this.points += 10;
   }else if (this.distance <= 2500){
this.points += 5;
   }else if (this.distance <= 5000){
   this.points += 2;
   }
 }

 endQuizz(){
   this.score.setScore(this.points);
   this.router.navigateByUrl('/last');
 }
ngOnInit(): void {
this.streetView.getStreetViews().subscribe((element) => {
  this.streetViewList = element;
  this.streetViewSelected = this.getRandomnStreetView();
});
  }

}
