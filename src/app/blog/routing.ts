import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { BlogHomeComponent } from './blog-home/blog-home.component';
import { BlogRootComponent } from './blog-root/blog-root.component';

const routes: Routes = [
  {
    path: '',
    component: BlogRootComponent,
    children: [
      {
        path: 'home', component: BlogHomeComponent
      },
    ]
  }
]
export const blogRouting: ModuleWithProviders<RouterModule> = RouterModule.forChild(routes)
