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
  constructor(private serviceTirage: TirageService) { }

  ngOnInit(): void {
    this.serviceTirage.getListeTirage().subscribe(data=>{
      this.listeTirages=data;
    }),
    this.serviceTirage.getNombreTirage().subscribe(data=>{
      console.log(data);
      this.nombreTirages=data;
    })
  }

}
