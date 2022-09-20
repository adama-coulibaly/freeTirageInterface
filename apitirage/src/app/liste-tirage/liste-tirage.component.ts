import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TirageService } from '../tirage.service';

@Component({
  selector: 'app-liste-tirage',
  templateUrl: './liste-tirage.component.html',
  styleUrls: ['./liste-tirage.component.css']
})
export class ListeTirageComponent {

  closeResult!: string;
  
  constructor(private modalService: NgbModal) {}
    
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
}