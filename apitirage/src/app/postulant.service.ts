import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostulantService {

  constructor(private http: HttpClient) { }
  urlApi = "http://localhost:8080/postulant/read";
 AjouterPostulants = "http://localhost:8080/postulant/add";

getPostulants():Observable<object>
{
  return this.http.get(this.urlApi);
}
ajouterPostulant(data:any):Observable<any>{
  return this.http.post(`${this.AjouterPostulants}`,data);
}


importerPostulants(data:any):Observable<any>{
  return this.http.post(`${this.AjouterPostulants}`,data);
  
}


}
