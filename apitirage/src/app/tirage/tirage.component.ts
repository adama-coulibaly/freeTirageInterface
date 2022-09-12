import { Component, OnInit } from '@angular/core';
import { TirageService } from '../tirage.service';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-tirage',
  templateUrl: './tirage.component.html',
  styleUrls: ['./tirage.component.css']
})
export class TirageComponent implements OnInit {

  listeTirages : any;
  formulaireTirage!:FormGroup;
  // Les attributs pour le formulaire d'importation
  insertion:any;
  libelleListe:any;
  importsListe:any;
  
  nomreDeTirage:any;



  
  constructor(private serviceTirage: TirageService) { }

// La methode initialiser

  ngOnInit(): void {
    // Recuperer la liste des tirages
    this.serviceTirage.getListeTirage().subscribe(data=>{
      this.listeTirages=data;
    });

    this.insertion= new FormGroup({
     

    });
    
  }

  // Formulaire d'insertion

  onSubmitImport(){
    alert("Bonjours");
  }









}
