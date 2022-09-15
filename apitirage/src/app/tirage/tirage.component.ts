import { Component, OnInit } from '@angular/core';
import { TirageService } from '../tirage.service';
import { FormGroup,Validators,NgForm, FormBuilder } from '@angular/forms';
import { Tirages } from '../tirage';
import { PostulantService } from '../postulant.service';
import { Importer } from '../importer';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tirage',
  templateUrl: './tirage.component.html',
  styleUrls: ['./tirage.component.css']
})
export class TirageComponent implements OnInit {

  listeTirages : any;
  

  // Les attributs pour le formulaire d'importation
  formulairesImp!:FormGroup;
  // Les attributs pour le formulaire de tirage

  adama:any;
  tirages:any;
  select_liste!:any;
  libelle_tirage!:string;
  nbre_postulant_tirer!:bigint;

  unePersonnes!:any

nombre:any;
  file!:any;
  importer!:Importer

  tirage: Tirages = new Tirages();

  
  constructor(private serviceTirage: TirageService,
                private postulantService: PostulantService,private formB:FormBuilder,private route:ActivatedRoute,private  http:HttpClient) { }

// La methode initialiser

  ngOnInit(): void {

    


    // Recuperer la liste des tirages
    this.serviceTirage.getListeTirage().subscribe(data=>{
      this.listeTirages=data;
    }),
    this.formulairesImp=this.formB.group({
      libelle:['',Validators.required],
      idliste:['',Validators.required],
      date:['',Validators.required],
      file:['',Validators.required],
      
    })

  }
  // changer le type de fichier importer en file
  fileChange(e:any){
    this.file=e.target["files"][0];
  }

  // Formulaire d'importation d'un fichier
  enregistreDonner(){
 
        this.importer=this.formulairesImp.value
        this.serviceTirage.addliste(this.importer.libelle,this.file).subscribe(
          data=>{
            this.formulairesImp.reset()
          }
        )
  }


  faireTirage(){
console.log("Ma liste "+this.select_liste);
// this.serviceTirage.faireTirages(this.tirages,this.select_liste,this.nbre_postulant_tirer).subscribe(
this.serviceTirage.faireTirages(this.tirage,this.select_liste,this.nbre_postulant_tirer).subscribe(   
data=>{
        this.adama=data;
        console.log("Mes tirages faites = "+this.adama);
      }
    )
     }
   









}
function fileChange(e: any, any: any) {
  throw new Error('Function not implemented.');
}

