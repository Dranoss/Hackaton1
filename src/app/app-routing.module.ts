import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { MapsComponent } from './Pages/jeu/maps/maps.component';
import { ScoreComponent } from './Pages/jeu/score/score.component';


const routes: Routes = [
  {path: 'map', component: MapsComponent},
  {path: '', component: HomePageComponent},
  {path: 'score', component: ScoreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
