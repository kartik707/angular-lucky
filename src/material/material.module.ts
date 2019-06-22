import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  MatButtonModule, 
  MatIconModule, 
  MatFormFieldModule, 
  MatInputModule,
  MatDatepickerModule, 
  MatNativeDateModule, 
  MatCheckboxModule, 
  MatSidenavModule, 
  MatToolbarModule,
  MatListModule,
  MatTabsModule
  } from '@angular/material'; 

@NgModule({
  imports: [
    CommonModule, 
    MatButtonModule, 
    MatIconModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatDatepickerModule, 
    MatNativeDateModule, 
    MatCheckboxModule, 
    MatSidenavModule, 
    MatToolbarModule,
    MatTabsModule
  ],
  declarations: [],
  exports: [
    MatButtonModule, 
    MatIconModule,
    MatFormFieldModule, 
    MatInputModule, 
    MatDatepickerModule, 
    MatNativeDateModule, 
    MatCheckboxModule, 
    MatSidenavModule, 
    MatToolbarModule,
    MatListModule,
    MatTabsModule
    ]
})
export class MaterialModule { }