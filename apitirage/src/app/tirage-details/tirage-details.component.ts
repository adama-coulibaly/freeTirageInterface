import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TirageService } from '../tirage.service';
import { TirageComponent } from '../tirage/tirage.component';

@Component({
  selector: 'app-tirage-details',
  templateUrl: './tirage-details.component.html',
  styleUrls: ['./tirage-details.component.css']
})
export class TirageDetailsComponent implements OnInit {
  unePersonnes:any=[]

  unTirage:any=[];
  libelleTirage!:any;
  dateLibelle!:any;
  page:any

  constructor(private serviceTirage:TirageService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    // Permet faire le routage avec notre tirage pour recuperer les postulants tirers
    const id_tirage = +this.route.snapshot.params["tirages_id_tirage"];
    this.serviceTirage.personnesTirer(id_tirage).subscribe(data=>{
      this.unePersonnes = data;
      console.log("Je suis une personne :"+this.unePersonnes);

//Recuperer un tirage 

      this.serviceTirage.recupererTirages(id_tirage).subscribe(data=>{
        this.unTirage = data;
        this.libelleTirage = this.unTirage.libelle_tirage
        this.dateLibelle  = this.unTirage.date_tirage;

        console.log("je suis le tirage "+this.unTirage.date_tirage)
      })

    })
  }

}
