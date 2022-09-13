import { Component, OnInit } from '@angular/core';
import { TirageService } from '../tirage.service';
import { FormGroup,Validators,NgForm } from '@angular/forms';
import { Tirage } from '../tirage';
import { PostulantService } from '../postulant.service';

@Component({
  selector: 'app-tirage',
  templateUrl: './tirage.component.html',
  styleUrls: ['./tirage.component.css']
})
export class TirageComponent implements OnInit {

  listeTirages : any;
  formulaireTirage!:FormGroup;
  // Les attributs pour le formulaire d'importation

  importsListe:any;

  nomreDeTirage:any;
  libelleListe:any;
  fichiers:any;


  public tirage: Tirage = new Tirage();

  
  constructor(private serviceTirage: TirageService,
                private postulantService: PostulantService) { }

// La methode initialiser

  ngOnInit(): void {
    // Recuperer la liste des tirages
    this.serviceTirage.getListeTirage().subscribe(data=>{
      this.listeTirages=data;
    });   
  }

  // Formulaire d'insertion

  enregistreDonner(register:NgForm){

    console.log('Valeurs ', register.form,JSON.stringify(register.value));
     console.log('la valeur '+this.libelleListe);


    //  this.postulantService.importerPostulants(this.formulaireTirage.value).subscribe((res)=>{
    //   console.log(res, 'Donner envoyer avec succes');
    //  })


    this.postulantService.importerPostulants(this.formulaireTirage.value).subscribe(data=>{
      console.log("Les données "+data);
      this.enregistreDonner=data;
    });
  }
   









}
