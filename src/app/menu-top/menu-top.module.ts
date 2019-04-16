import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuTopComponent } from './menu-top.component';
import { MenuTopItemComponent } from './menu-top-item/menu-top-item.component';

@NgModule({
  declarations: [
    MenuTopComponent,
    MenuTopItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MenuTopComponent
  ]
})
export class MenuTopModule { }
