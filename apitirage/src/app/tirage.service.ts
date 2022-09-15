import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tirages } from './tirage';

// export interface LitePostulant{
//   idliste: number;
//   libelle: string;
//   date: string;
// }
export interface Tirage{
  id_tirage: number;
  date_tirage: string;
  libelle_tirage: string;
  nbre_postulant_tirer:string;
  nbre_tirag:number;
}


@Injectable({
  providedIn: 'root'
})
export class TirageService {

  constructor(private http: HttpClient) { }

  urlApi = "http://localhost:8080/listepostulant/read";
  uneListe = "http://localhost:8080/listepostulant/uneListe/2";
  nbreTirage = "http://localhost:8080/tirage/nombreTirage";
  listeT= "http://localhost:8080/listepostulant/listeTirer"
  // faireT = "http://localhost:8080/tirage/faireTirage/"+`${libelleTirage}`+"/"+`${nombre}`;

  // La liste des tirages
getListeTirage():Observable<object>
{
  return this.http.get(this.urlApi);
}
// Prendre les tirages faites sur une liste
getUneListe(listeID: number) : Observable<Tirage[]>{

  return this.http.get<Tirage[]>("http://localhost:8080/tirage/listeParTirage/"+`${listeID}`);

}
// Affiche les personnes tirées pour un tirage données
// 
personnesTirer(tirages_id_tirage:number): Observable<Tirage[]>{
  return this.http.get<Tirage[]>("http://localhost:8080/tirage/personnes/"+`${tirages_id_tirage}`)
}


getNombreTirage() : Observable<object>{

  return this.http.get(this.nbreTirage);

}
// Faire l'importer du fichier
addliste(libelle:string,file:any):Observable<void>{
  let data = new FormData();
  data.append("file",file)
  return this.http.post<void>(`http://localhost:8080/postulant/upload/${libelle}`,data);
}

// le nombre total des listes tirées
getListeTirer():Observable<object>{
  return this.http.get(this.listeT);

}


faireTirages(tirage1:Tirages,libelleTirage:string,nbrePt:BigInt):Observable<object>{
  // this.tirages.libelle_tirage=libelle_tirage;
  return this.http.post(`http://localhost:8080/tirage/faireTirage/${libelleTirage}/${nbrePt}`,tirage1);
}



}
