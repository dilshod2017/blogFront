import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppSettingsService } from './services/app-settings.service';



@NgModule({

  declarations: [],
  imports: [
    HttpClientModule,
    CommonModule
  ],
  providers:[
    AppSettingsService
  ],
  exports:[
  ]
})
export class SharedModule { }
