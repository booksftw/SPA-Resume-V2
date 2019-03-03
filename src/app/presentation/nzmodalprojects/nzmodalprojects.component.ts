import {Component, Input, ViewEncapsulation} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nzmodalprojects',
  templateUrl: './nzmodalprojects.component.html',
  styleUrls: ['./nzmodalprojects.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NzmodalprojectsComponent {

  closeResult: string;

  constructor(
      private modalService: NgbModal,
      ) {}

  open(content, type, modalDimension) {
      if (modalDimension === 'sm' && type === 'modal_mini') {
          this.modalService.open(content, { windowClass: 'modal-mini modal-primary', size: 'sm' }).result.then((result) => {
              this.closeResult = `Closed with: ${result}`;
          }, (reason) => {
              this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
          });
      } else if (modalDimension === 'md' && type === 'Login') {
        this.modalService.open(content, { windowClass: 'modal-login modal-primary' }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
      } else {
          this.modalService.open(content).result.then((result) => {
              this.closeResult = `Closed with: ${result}`;
          }, (reason) => {
              this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
          });
      }
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

  redirect(link) {
    // @ts-ignore
    window.location.href = link;
  }

}
