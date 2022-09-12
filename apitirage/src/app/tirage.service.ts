import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


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

getUneListe() : Observable<object>{

  return this.http.get<object>("http://localhost:8080/listepostulant/uneListe/2");

}
getNombreTirage() : Observable<object>{

  return this.http.get(this.nbreTirage);

}



}
