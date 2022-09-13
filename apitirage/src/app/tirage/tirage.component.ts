import { Component, OnInit } from '@angular/core';
import { TirageService } from '../tirage.service';
import { FormGroup,Validators,NgForm, FormBuilder } from '@angular/forms';
import { Tirage } from '../tirage';
import { PostulantService } from '../postulant.service';
import { Importer } from '../importer';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tirage',
  templateUrl: './tirage.component.html',
  styleUrls: ['./tirage.component.css']
})
export class TirageComponent implements OnInit {

  listeTirages : any;
  formulaireTirage!:FormGroup;

  // Les attributs pour le formulaire d'importation
  formulairesImp!:FormGroup;
  file!:any;
  importer!:Importer
  
  public tirage: Tirage = new Tirage();
 

  
  constructor(private serviceTirage: TirageService,
                private postulantService: PostulantService,private formB:FormBuilder,private  http:HttpClient) { }

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
  fileChange(e:any){
    this.file=e.target["files"][0];
  }

  // Formulaire d'insertion

  enregistreDonner(){
 
        this.importer=this.formulairesImp.value
        this.serviceTirage.addliste(this.importer.libelle,this.file).subscribe(
          data=>{
            console.log("Les données "+data);
            this.formulairesImp.reset()
          }
        )
  }
   









}
function fileChange(e: any, any: any) {
  throw new Error('Function not implemented.');
}

