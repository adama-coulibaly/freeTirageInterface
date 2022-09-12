import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TirageService } from '../tirage.service';


export class Details {
  id_liste_postulant :number|undefined;
  date: Date|undefined;
  libelle: string|undefined;
}

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

   //uneListe: any;

   uneListes$!: Observable<any>;

  // uneListe: Array<any> = [];
  constructor(private maListe: TirageService) { }

  ngOnInit(): void {
    /*
    this.maListe.getUneListe().subscribe(data=>{

      console.log(data);
      this.uneListe=data;
      })
      */
     this.uneListes$ =  this.maListe.getUneListe();
    
  }

}
