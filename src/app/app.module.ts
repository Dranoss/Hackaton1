import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Commun/navbar/navbar.component';
import { FooterComponent } from './Commun/footer/footer.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { MapsComponent } from './Pages/maps/maps.component';

@NgModule({
  declarations: [
    AppComponent,
    MapsComponent,
    HomePageComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
