import { Component, OnInit } from '@angular/core';
import { PointsService } from 'src/app/Service/points.service';
import { ChronoService } from 'src/app/Service/chrono.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-last-page',
  templateUrl: './last-page.component.html',
  styleUrls: ['./last-page.component.scss']
})
export class LastPageComponent implements OnInit {

  scoreTotal: number;
  chronoTime: number[];

  constructor(public pointsService: PointsService, public chronoService: ChronoService, public route: Router) { }

  ngOnInit(): void {
    this.scoreTotal = this.pointsService.getScore();
    this.chronoTime = this.chronoService.getChrono();
  }

  gameRestart(){
    this.route.navigateByUrl('');
  }
}
