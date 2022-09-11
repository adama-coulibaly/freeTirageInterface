import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TirageService {

  constructor(private http: HttpClient) { }
  urlApi = "http://localhost:8080/listepostulant/read";

getListeTirage():Observable<object>
{
  return this.http.get(this.urlApi);
}
}
