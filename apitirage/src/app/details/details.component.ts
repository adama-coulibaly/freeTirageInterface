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


   donner:any;
   libelle_liste:any;
   date_liste: any;



   uneListes!: Tirage[];
   tirageSurList:any;

   page:number=1;
  // uneListe: Array<any> = [];
  constructor(private maListe : TirageService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    const listeID = +this.route.snapshot.params["idliste"];
        this.maListe.getUnTirage(listeID).subscribe(data =>{
        this.uneListes = data;
        this.tirageSurList = this.uneListes.length;

          this.maListe.recupererListe(listeID).subscribe(data=>{
          this.donner = data;
          this.libelle_liste = this.donner[0].libelle;
          this.date_liste = this.donner[0].date;
          
          // console.log("L'ensemle de mes listes = "+this.donner[0].libelle);

          // console.log("L'ensemle de mes listes2 = "+this.donner[0].date);
          })

        console.log("NombreListe "+this.tirageSurList);
     });
    
  }

}
