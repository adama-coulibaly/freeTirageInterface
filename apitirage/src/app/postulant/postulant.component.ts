import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Postulant } from '../postulant';
import { PostulantService } from '../postulant.service';

@Component({
  selector: 'app-postulant',
  templateUrl: './postulant.component.html',
  styleUrls: ['./postulant.component.css']
})
export class PostulantComponent implements OnInit {

  tirages : any; 
  page:number =1;
  
  messageErreurs:any;
  messageSucces:any;

  postulant: Postulant = new Postulant();
  formulairePostulant!: FormGroup;


  constructor(private service: PostulantService,private fb: FormBuilder) { }
  

  ngOnInit(): void {
    // Recuperer depuis la base de donnés
    this.service.getPostulants().subscribe(data=>{
      this.tirages =data; 
    });
  }
  onSubmit(){
    if(!this.formulairePostulant){return ;}

    if(this.formulairePostulant.valid){
      this.service.ajouterPostulant(this.formulairePostulant.value).subscribe((res)=>{
        console.log(res, 'Donner envoyer avec succes');
        this.formulairePostulant?.reset();
        this.messageSucces = res.message;
      })

    }
    else{
      this.messageErreurs = "Tous les fichiers oblicatoires";
    }

  }

}
