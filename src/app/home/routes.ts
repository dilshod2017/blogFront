import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { UnsavedChangesGuardService } from 'app/base/services/unsaved-changes-guard.service';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LandingRootComponent } from './landing-root/landing-root.component';

const routes : Routes = [
  {
    path: '',
    component:LandingRootComponent,
    children: [
      {
        path:'home',
        component:LandingPageComponent,
        canActivate: [ UnsavedChangesGuardService]
      }
    ]

  }
]
export const homeRouting: ModuleWithProviders<RouterModule> = RouterModule.forChild(routes);
