import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { PresentationComponent } from './presentation.component';
import { NzprofileComponent } from './nzprofile/nzprofile.component';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        RouterModule,
        NgbModule
    ],
    declarations: [ PresentationComponent, NzprofileComponent ],
    exports:[ PresentationComponent ],
    providers: []
})
export class PresentationModule { }
