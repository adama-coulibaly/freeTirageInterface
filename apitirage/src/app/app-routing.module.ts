import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { PostulantComponent } from './postulant/postulant.component';
import { TirageComponent } from './tirage/tirage.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {path: '', component:AccueilComponent},
  {path:'postulant', component: PostulantComponent},
  {path:'tirage', component: TirageComponent},
  {path:'details', component: DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }