import { Component, OnInit } from '@angular/core';
import { TirageService } from '../tirage.service';

@Component({
  selector: 'app-liste-tirage',
  templateUrl: './liste-tirage.component.html',
  styleUrls: ['./liste-tirage.component.css']
})
export class ListeTirageComponent implements OnInit {

  listeTirages : any;
  constructor(private serviceTirage: TirageService) { }

  ngOnInit(): void {
    this.serviceTirage.getListeTirage().subscribe(data=>{
      this.listeTirages=data;
    })
  }

}
