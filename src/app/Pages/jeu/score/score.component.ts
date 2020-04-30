import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { timer } from 'rxjs';
import { ChronoService } from 'src/app/Service/chrono.service';
import { PointsService } from 'src/app/Service/points.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit, OnChanges {
@Input() scoreTotal: number;
@Input() sendTime: boolean;
  sec = 0;
  sec2 = 0;
  min = 0;
  min2 = 0;
  hours = 0;
  hours2 = 0;
  gameFinished = false;
  totalTime: number[] = [];
  interval;

  constructor(public chronoService: ChronoService) {

   }

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
ngOnChanges(){
  if (this.sendTime === true){
    this.stop();
  }
}
  stop() {
      clearInterval(this.interval);
      this.totalTime.push(this.hours, this.hours2, this.min, this.min2, this.sec, this.sec2);
      this.chronoService.setChrono(this.totalTime);
  }
}


