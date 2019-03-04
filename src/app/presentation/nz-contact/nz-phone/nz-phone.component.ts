import { Component, OnInit } from '@angular/core';
import { NzContactComponent } from './../nz-contact.component';

@Component({
  selector: 'app-nz-phone',
  templateUrl: './nz-phone.component.html',
  styleUrls: ['./nz-phone.component.scss']
})
export class NzPhoneComponent extends NzContactComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
