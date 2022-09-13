import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

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
}

@Injectable({
  providedIn: 'root'
})
export class TirageService {

  constructor(private http: HttpClient) { }

  urlApi = "http://localhost:8080/listepostulant/read";
  uneListe = "http://localhost:8080/listepostulant/uneListe/2";
  nbreTirage = "http://localhost:8080/tirage/nombreTirage";

getListeTirage():Observable<object>
{
  return this.http.get(this.urlApi);
}

getUneListe(listeID: number) : Observable<Tirage[]>{

  return this.http.get<Tirage[]>("http://localhost:8080/tirage/listeParTirage/"+`${listeID}`);

}

getNombreTirage() : Observable<object>{

  return this.http.get(this.nbreTirage);

}

addliste(libelle:string,file:any):Observable<void>{
  let data=new FormData();
  data.append("file",file)
  return this.http.post<void>(`http://localhost:8080/postulant/upload/${libelle}`,data);
}



}
