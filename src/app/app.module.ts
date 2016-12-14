import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FloatImgComponent } from './float-img/float-img.component';

import { MnFullpageDirective, MnFullpageService } from "ng2-fullpage";
import { FillImagesComponent } from './fill-images/fill-images.component';

@NgModule({
  declarations: [
    AppComponent,
    FloatImgComponent,
    MnFullpageDirective,
    FillImagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [MnFullpageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
