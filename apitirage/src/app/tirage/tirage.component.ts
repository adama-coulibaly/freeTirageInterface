import { Component, OnInit } from '@angular/core';
import { TirageService } from '../tirage.service';

@Component({
  selector: 'app-tirage',
  templateUrl: './tirage.component.html',
  styleUrls: ['./tirage.component.css']
})
export class TirageComponent implements OnInit {

  listeTirages : any;
  constructor(private serviceTirage: TirageService) { }

  ngOnInit(): void {
    this.serviceTirage.getListeTirage().subscribe(data=>{
      this.listeTirages=data;
    })
  }

}
