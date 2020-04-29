import { Component, OnInit } from '@angular/core';
import { PointsService } from 'src/app/Service/points.service';

@Component({
  selector: 'app-last-page',
  templateUrl: './last-page.component.html',
  styleUrls: ['./last-page.component.scss']
})
export class LastPageComponent implements OnInit {

  scoreTotal: number;

  constructor(public pointsService: PointsService) { }

  ngOnInit(): void {
    this.scoreTotal = this.pointsService.getScore();
  }
}
