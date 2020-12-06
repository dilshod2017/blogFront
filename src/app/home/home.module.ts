import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BrowserModule } from '@angular/platform-browser';
import { LandingRootComponent } from './landing-root/landing-root.component';
import { RouterModule } from '@angular/router';
import { homeRouting } from './routes';



@NgModule({
  declarations: [LandingPageComponent, LandingRootComponent],
  imports: [
    RouterModule,
    homeRouting,
    CommonModule
  ],
  bootstrap:[LandingRootComponent]
})
export class HomeModule { }
