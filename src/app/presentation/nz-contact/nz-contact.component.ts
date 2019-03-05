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
  @Input() right = false;
  @Input() isFixed = false;

  constructor() { }

  ngOnInit() {
  }

  // ? Do I need this ?
  toggleVisibility( ) {
    this.isShown = !this.isShown;
  }

}
