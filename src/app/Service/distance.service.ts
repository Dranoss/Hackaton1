import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DistanceService {

  constructor() { }

  degreeToRadiant(degree) {
    const pi = Math.PI;
    return degree * (pi / 180);
  }

  calculDistance(longitude1, latitude1, longitude2, latitude2) {
    // tslint:disable-next-line: max-line-length
    const distance = 3963 * Math.acos((Math.sin(latitude1) * Math.sin(latitude2)) + Math.cos(latitude1) * Math.cos(latitude2) * Math.cos(longitude2 - longitude1));
    return distance * 1.609344;
  }
}
