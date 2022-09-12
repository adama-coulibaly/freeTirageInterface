import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes,RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AccueilComponent } from './accueil/accueil.component';
import { PostulantComponent } from './postulant/postulant.component';
import { AppRoutingModule } from './app-routing.module';
import { TirageComponent } from './tirage/tirage.component';
<<<<<<< HEAD
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
=======
import { DetailsComponent } from './details/details.component';
>>>>>>> 68536b399690d9b2efe5cc9ffaa7a48fd86a1393


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AccueilComponent,
    PostulantComponent,
    TirageComponent,
    DetailsComponent
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

