import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit {

  sec = 0;
  sec2 = 0;
  min = 0;
  min2 = 0;
  hours = 0;
  hours2 = 0;
  gameFinished = false;
  totalTime: number[] = [];
  interval;
  scoreTotal = 10000;

  constructor() { }

  ngOnInit(): void {
    this.interval = setInterval(() => {
      this.sec2++;
      if (this.sec2 === 10) {
        this.sec++;
        this.sec2 = 0;
      }
      if (this.sec === 6){
        this.min2++;
        this.sec = 0;
      }
      if (this.min2 === 10) {
        this.min++;
        this.min2 = 0;
      }
      if (this.min === 6) {
        this.hours2++;
        this.min = 0;
      }
      if (this.hours2 === 10){
        this.hours++;
        this.hours2 = 0;
      }
  }, 1000);
  }

  stop() {
      clearInterval(this.interval);
      this.totalTime.push(this.hours, this.hours2, this.min, this.min2, this.sec, this.sec2);
      console.log(this.totalTime);
  }
}

