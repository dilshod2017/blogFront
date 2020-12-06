import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppSettingsService } from './services/app-settings.service';
import { CollpsibleSectionComponent } from './collpsible-section/collpsible-section.component';



@NgModule({

  declarations: [CollpsibleSectionComponent],
  imports: [
    HttpClientModule,
    CommonModule
  ],
  providers:[
    AppSettingsService
  ],
  exports:[
    CollpsibleSectionComponent
  ]
})
export class SharedModule { }
