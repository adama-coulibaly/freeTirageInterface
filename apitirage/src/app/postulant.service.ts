import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostulantService {

  constructor(private http: HttpClient) { }

getTirage():Observable<object>
{

  return this.http.get("http://localhost:8080/postulant/read");

}

}
