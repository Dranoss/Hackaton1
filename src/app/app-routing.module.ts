import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapsComponent } from './Pages/jeu/maps/maps.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';

const routes: Routes = [
  {path: 'map', component: MapsComponent},
  {path: '', component: HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
