import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { PresentationComponent } from './presentation.component';
import { NzprofileComponent } from './nzprofile/nzprofile.component';

import { NzContactComponent } from './nz-contact/nz-contact.component';
import { NzPhoneComponent } from './nz-contact/nz-phone/nz-phone.component';
import { NzEmailComponent } from './nz-contact/nz-email/nz-email.component';
import { NzStickyNavComponent } from './nz-sticky-nav/nz-sticky-nav.component';
import { NzmodalprojectsComponent } from './nzmodalprojects/nzmodalprojects.component';

import {MatChipsModule} from '@angular/material/chips';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import { NzprintresumeComponent } from './nzprintresume/nzprintresume.component';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        RouterModule,
        NgbModule,
        // MatTabsModule,
        // MatIconModule,
        MatButtonModule,
        MatChipsModule,
        MatListModule
    ],
    // tslint:disable-next-line: max-line-length
    declarations: [ PresentationComponent, NzprofileComponent, NzmodalprojectsComponent, NzContactComponent, NzPhoneComponent, NzEmailComponent, NzStickyNavComponent, NzprintresumeComponent ],
    exports: [ PresentationComponent ],
    providers: []
})
export class PresentationModule { }
