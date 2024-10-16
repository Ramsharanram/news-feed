import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule
  ],
  exports:[
    FormsModule,
    HeaderComponent
  ]
})
export class SharedModule { }
