import { Component, OnInit } from '@angular/core';
import { PostulantService } from '../postulant.service';

@Component({
  selector: 'app-postulant',
  templateUrl: './postulant.component.html',
  styleUrls: ['./postulant.component.css']
})
export class PostulantComponent implements OnInit {

  tirages : any; 
  constructor(private service: PostulantService) { }

  ngOnInit(): void {
    this.service.getTirage().subscribe(data=>{
      this.tirages =data; 
    });
  }

}
