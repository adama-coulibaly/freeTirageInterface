import { Component, OnInit } from '@angular/core';
import { TirageService } from '../tirage.service';
import { FormGroup,Validators,NgForm, FormBuilder } from '@angular/forms';
import { Tirages } from '../tirage';
import { PostulantService } from '../postulant.service';
import { Importer } from '../importer';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tirage',
  templateUrl: './tirage.component.html',
  styleUrls: ['./tirage.component.css']
  
  
})
export class TirageComponent implements OnInit {

  listeTirages : any;
  active = true;
  
  // mymodal:any


  mesListe!:[];


  

  // Les attributs pour le formulaire d'importation
  formulairesImp!:FormGroup;
  // Les attributs pour le formulaire de tirage


  select_liste!:any;



  nbre_postulant_tirer!:number;

  unePersonnes!:any

nombre:any;
  file!:any;
  importer!:Importer
  message!: any;

  tirage_cree!: any;

  postulants!: any;

  tirage: Tirages = new Tirages();

  tirageRecuperer!:any;
 

  

  constructor(private serviceTirage: TirageService,
                private postulantService: PostulantService,
                private formB:FormBuilder,
                private route:ActivatedRoute,
                private  http:HttpClient,
                private modalService: NgbModal
                ) { }


//--------------------------------------------------Popup pour les personnes tirées---------------------------------------------------------------------------------------------       

closeResult!: string;
  
open(content:any) {
  this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
}

private getDismissReason(reason: any): string {
  if (reason === ModalDismissReasons.ESC) {
    return 'by pressing ESC';
  } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    return 'by clicking on a backdrop';
  } else {
    return  `with: ${reason}`;
    
}
}











// La methode initialiser



// actualise(lb:string):void
// {
//   setTimeout(()=>{
//     this.serviceTirage.recupererTiragesParLibeller(lb);
//   }, 1000)
// }

  ngOnInit(): void {

    mesListe: ["f"];


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
            this.formulairesImp.reset();

            this.message = data
            console.log("je suis le retour "+data);
              this.ressetForm();
          }
         
        ) 
      

  }


// ------------------------------------------------------------------Faire un tirage ici

ressetForm(){
  this.nbre_postulant_tirer = 0;
  this.select_liste = '';
  this.tirage.libelle_tirage = '';
  this.file = '';
  this.importer.libelle = '';
}

faireTirage(){

this.serviceTirage.faireTirages(this.tirage,this.select_liste,this.nbre_postulant_tirer).subscribe(   
  
data=>{  
// --------------Recuperer les postulants
this.tirageRecuperer = this.serviceTirage.recupererTiragesParLibeller(this.tirage.libelle_tirage).subscribe(
  data=>{
    this.unePersonnes = data;
   
  }
 )
 this.ressetForm();

  // // console.log("1_ Apres Mes tirages faites = "+this.actualise(this.tirage.libelle_tirage));
  
  // console.log("2 _ Apres Mes tirages faites = "+this.tirageRecuperer.nom_postulant);
  
  // console.log("1 _ Apres Mes tirages faites = "+this.unePersonnes[0].nombreTirage);
   }
    )

}
   









}
function fileChange(e: any, any: any) {
  throw new Error('Function not implemented.');
}

