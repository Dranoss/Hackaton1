import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Commun/navbar/navbar.component';
import { FooterComponent } from './Commun/footer/footer.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { MapsComponent } from './Pages/maps/maps.component';
import { HttpClientModule} from '@angular/common/http';
import { ScoreComponent } from './Jeu/score/score.component';
import { JeuComponent } from './jeu/jeu.component';

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
