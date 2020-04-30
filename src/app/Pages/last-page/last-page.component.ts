import { Component, OnInit } from '@angular/core';
import { PointsService } from 'src/app/Service/points.service';
import { ChronoService } from 'src/app/Service/chrono.service';
import { Router } from '@angular/router';
import { ScoreService } from 'src/app/Service/score.service';

@Component({
  selector: 'app-last-page',
  templateUrl: './last-page.component.html',
  styleUrls: ['./last-page.component.scss']
})
export class LastPageComponent implements OnInit {

  scoreTotal: number;
  chronoTime: number[];
  scorelist;

  constructor(public pointsService: PointsService, public chronoService: ChronoService, public route: Router,
              private scoreService: ScoreService) { }

  ngOnInit(): void {
    this.scoreTotal = this.pointsService.getScore();
    this.chronoTime = this.chronoService.getChrono();
    this.scoreService.get().subscribe((e) => this.scorelist = e );
  }

  gameRestart(){
    this.route.navigateByUrl('');
  }
}
