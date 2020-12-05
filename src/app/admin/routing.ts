import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { AdminRootComponent } from './admin-root/admin-root.component';
import { LoginComponent } from './login/login.component';

const routes : Routes = [
  {
    path:'',
    component:AdminRootComponent,
    children:[
      {
        path: 'landing', component: AdminRootComponent
      },
      {
        path:'login', component:LoginComponent
      }
    ]
  }
]
export const routing: ModuleWithProviders<RouterModule> = RouterModule.forChild(routes)
