import { Component, OnInit, Input } from '@angular/core';
import { NzContactComponent } from '../nz-contact.component';

@Component({
  selector: 'app-nz-email',
  templateUrl: './nz-email.component.html',
  styleUrls: ['./nz-email.component.scss']
})
export class NzEmailComponent extends NzContactComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
