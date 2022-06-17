import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button'
import {MatBadgeModule} from '@angular/material/badge';
import {MatIconModule} from '@angular/material/icon';
import {MatStepperModule} from '@angular/material/stepper';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatInputModule} from '@angular/material/input';
import { NgxMaskModule } from 'ngx-mask'
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';



const angularModules = [
  MatBadgeModule,
  MatSidenavModule,
  MatButtonModule,
  MatIconModule,
  MatStepperModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatCardModule,
  MatSnackBarModule,
  FormsModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    angularModules
  ],
  exports: [
    angularModules,
    FlexLayoutModule,
    NgxMaskModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
