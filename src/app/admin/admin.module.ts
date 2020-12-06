import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AdminRootComponent } from './admin-root/admin-root.component';
import { adminRouting } from './routing';



@NgModule({
  declarations: [AdminRootComponent],
  imports: [
    adminRouting,
    CommonModule
  ],

})
export class AdminModule { }
