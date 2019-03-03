import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { PresentationComponent } from './presentation.component';
import { NzprofileComponent } from './nzprofile/nzprofile.component';

// import {MatTabsModule} from '@angular/material';
// import {MatIconModule} from '@angular/material/icon';
// import {MatButtonModule} from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';
import { NzmodalprojectsComponent } from './nzmodalprojects/nzmodalprojects.component';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        RouterModule,
        NgbModule,
        // MatTabsModule,
        // MatIconModule,
        // MatButtonModule
        MatChipsModule
    ],
    declarations: [ PresentationComponent, NzprofileComponent, NzmodalprojectsComponent ],
    exports: [ PresentationComponent ],
    providers: []
})
export class PresentationModule { }
