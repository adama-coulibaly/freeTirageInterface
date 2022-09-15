import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { TirageService } from '../tirage.service';
import { ActivatedRoute } from '@angular/router';

export interface LitePostulant{
  idliste: number;
  libelle: string;
  date: string;
}
export interface Tirage{
  id_tirage: number;
  date_tirage: string;
  libelle_tirage: string;
  nbre_postulant_tirer:string;
}


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

   //uneListe: any;

   uneListes!: Tirage[];
   tirageSurList:any;

   page:number=1;
  // uneListe: Array<any> = [];
  constructor(private maListe : TirageService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    const listeID = +this.route.snapshot.params["idliste"];
        this.maListe.getUneListe(listeID).subscribe(data =>{
        this.uneListes = data;
        this.tirageSurList = this.uneListes.length;
        console.log("NombreListe "+this.tirageSurList);
     });
    

  }

}
