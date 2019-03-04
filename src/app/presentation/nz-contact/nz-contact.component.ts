import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nz-contact',
  templateUrl: './nz-contact.component.html',
  styleUrls: ['./nz-contact.component.scss']
})
export class NzContactComponent implements OnInit {
  isShown = false;
  @Input() center = false;
  @Input() left = false;

  constructor() { }

  ngOnInit() {
  }

  toggleVisibility( ) {
    this.isShown = !this.isShown;
  }

}
