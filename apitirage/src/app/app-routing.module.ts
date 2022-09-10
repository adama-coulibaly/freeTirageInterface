import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { PostulantComponent } from './postulant/postulant.component';
import { TirageComponent } from './tirage/tirage.component';

const routes: Routes = [
  {path: '', component:AccueilComponent},
  {path:'postulant', component: PostulantComponent},
  {path:'tirage', component: TirageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }