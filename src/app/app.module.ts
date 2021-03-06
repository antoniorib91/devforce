import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { MenuTopModule } from './menu-top/menu-top.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    MenuTopModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
