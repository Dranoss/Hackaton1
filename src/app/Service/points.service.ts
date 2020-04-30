import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PointsService {

  public score = 0;

  constructor() { }

  setScore(value: number){
    this.score += value;
  }

  getScore(){
    return this.score;
  }
}
