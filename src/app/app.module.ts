import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioPrincipalComponent } from './inicio-principal/inicio-principal.component';
import { GifsSeccionComponent } from './gifs-seccion/gifs-seccion.component';
import { StikerSeccionComponent } from './stiker-seccion/stiker-seccion.component';
import { HomeSeccionComponent } from './home-seccion/home-seccion.component';
import { FooterFinalComponent } from './footer-final/footer-final.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioPrincipalComponent,
    GifsSeccionComponent,
    StikerSeccionComponent,
    HomeSeccionComponent,
    FooterFinalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
