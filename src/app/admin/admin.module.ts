import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AdminRootComponent } from './admin-root/admin-root.component';
import { routing } from './routing';



@NgModule({
  declarations: [LoginComponent, AdminRootComponent],
  imports: [
    routing,
    CommonModule
  ],

})
export class AdminModule { }
