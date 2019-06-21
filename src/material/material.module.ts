import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule,MatDatepickerModule, MatNativeDateModule, MatCheckboxModule } from '@angular/material'; 

@NgModule({
  imports: [
    CommonModule, MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatCheckboxModule
  ],
  declarations: [],
  exports: [MatButtonModule, MatIconModule,MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatCheckboxModule]
})
export class MaterialModule { }