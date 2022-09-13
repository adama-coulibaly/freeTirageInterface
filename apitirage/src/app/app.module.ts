import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes,RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { PostulantComponent } from './postulant/postulant.component';
import { AppRoutingModule } from './app-routing.module';
import { TirageComponent } from './tirage/tirage.component';
q
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import { ListeTirageComponent } from './liste-tirage/liste-tirage.component';
import { DetailsComponent } from './details/details.component';
import { TirageDetailsComponent } from './tirage-details/tirage-details.component';



@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    PostulantComponent,
    TirageComponent,

    ListeTirageComponent,
    DetailsComponent,
    TirageDetailsComponent

  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

