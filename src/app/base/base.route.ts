import { CommonModule } from '@angular/common';
import { Injectable, NgModule } from '@angular/core';
import { PreloadingStrategy, Route, RouterModule, Routes } from "@angular/router";
import { LoginComponent } from 'app/admin/login/login.component';
import { Observable, of } from 'rxjs';
import { RootComponent } from './root/root.component';



const routes: Routes = [
  { path: 'login', component:LoginComponent},
  {
    path: "",
    component: RootComponent,
    // canActivate:[AuthGuard]
    // canActivateChild: [AuthGuard]

    children:[
      { path: "", redirectTo:'home', pathMatch:'full'},
      {
        path:'home',
        pathMatch:'full',
        loadChildren: ()=> import("../home/home.module").then(m=>m.HomeModule),
        data:{preload:true},
        // canActivate:[AuthGuard]
      },
      // {
      //   path:"admin",
      //   loadChildren: ()=> import("../admin/admin.module").then(m=>m.AdminModule),
      //   data:{preload:true},
      //   // canActivate:[AuthGuard]
      // },
      // {
      //   path:"blog",
      //   loadChildren: ()=> import("../blog/blog.module").then(m=>m.BlogModule),
      //   data:{preload:true},
      //   // canActivate:[AuthGuard]
      // }
    ]
  }
]
@Injectable()
export class CustomPreloadStrategy implements PreloadingStrategy {
  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    return route.data && route.data.preload
      ? fn()
      : of(null)
  }
}

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {useHash:true, preloadingStrategy:CustomPreloadStrategy, paramsInheritanceStrategy: "always"}
  ), CommonModule],
  exports: [RouterModule],
  providers:[CustomPreloadStrategy]
})
export class BaseRoutingModule {}