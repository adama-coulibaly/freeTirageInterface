import { Component, OnInit } from '@angular/core';
import { TirageService } from '../tirage.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  listeTirages : any;
  nombreTirages:any;
  nombreListe:any;
  
  constructor(private serviceTirage: TirageService) { }

  ngOnInit(): void {
    this.serviceTirage.getListeTirage().subscribe(data=>{

      // AVOIR LA LISTE TOTALE DES POSTULANTS
     

      this.listeTirages=data;
      this.nombreListe= this.listeTirages.length;
    }),
    this.serviceTirage.getNombreTirage().subscribe(data=>{
      console.log(data);
      this.nombreTirages=data;
    })
  }

}
