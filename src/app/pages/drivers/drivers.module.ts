import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DriversRoutingModule } from './drivers-routing.module';
import { DriversComponent } from './drivers.component';
import { MatTableModule } from '@angular/material/table' ;
import { MatFormFieldModule } from '@angular/material/form-field' ;
import { MatInputModule } from '@angular/material/input' ;
import { MatSortModule } from '@angular/material/sort' ;
import { MatDialogModule } from '@angular/material/dialog' ;
import { MatButtonModule } from '@angular/material/button' ;
import { AppModule } from 'app/app.module';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';



@NgModule({
  declarations: [
    DriversComponent
  ],
  imports: [
    CommonModule,
    DriversRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatDialogModule,
    MatButtonModule,
  ]
})
export class DriversModule { }

platformBrowserDynamic().bootstrapModule(AppModule);