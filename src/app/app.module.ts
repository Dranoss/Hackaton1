import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Commun/navbar/navbar.component';
import { FooterComponent } from './Commun/footer/footer.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { MapsComponent } from './Pages/jeu/maps/maps.component';
import { HttpClientModule} from '@angular/common/http';
import { ScoreComponent } from './Pages/jeu/score/score.component';
import { JeuComponent } from './Pages/jeu/jeu.component';

@NgModule({
  declarations: [
    AppComponent,
    MapsComponent,
    HomePageComponent,
    NavbarComponent,
    FooterComponent,
    ScoreComponent,
    JeuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
