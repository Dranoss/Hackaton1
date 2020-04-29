import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PointsService {

  public score = 50;

  constructor() { }

  setScore(value: number){
    this.score = value;
  }

  getScore(){
    return this.score;
  }
}
