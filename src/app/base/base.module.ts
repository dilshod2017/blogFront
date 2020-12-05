import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootComponent } from './root/root.component';
import { GroundComponent } from './ground/ground.component';
import { DialogComponent } from './dialog/dialog.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppSettingsService } from 'app/shared/services/app-settings.service';
import { Observable } from 'rxjs';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthenticationInterceptor } from './interceptor/authentication.interceptor.service';
import { SharedModule } from 'app/shared/shared.module';
import { BaseRoutingModule } from './base.route';
import { LoginComponent } from 'app/admin/login/login.component';


export const settingsFactory = (appSettingsService: AppSettingsService) => {
  return (): Observable<void> => appSettingsService.loadSettings();
}
@NgModule({
  declarations: [RootComponent, GroundComponent, DialogComponent, LoginComponent],
  imports: [
    BaseRoutingModule,
    BrowserModule,
    CommonModule,
    SharedModule
  ],
  providers:[
    {
      provide:APP_INITIALIZER,
      useFactory: settingsFactory,
      multi:true,
      deps:[AppSettingsService]
    },
    {
      provide:HTTP_INTERCEPTORS,
      useClass: AuthenticationInterceptor,
      multi:true,
      deps:[AppSettingsService]
    },
  ],
  bootstrap:[GroundComponent,DialogComponent]
})
export class BaseModule { }

