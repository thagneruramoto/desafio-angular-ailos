import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button'
import {MatBadgeModule} from '@angular/material/badge';
import {MatIconModule} from '@angular/material/icon';



const angularModules = [
  MatBadgeModule,
  MatSidenavModule,
  MatButtonModule,
  MatIconModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    angularModules
  ],
  exports: [
    angularModules
  ]
})
export class SharedModule { }
