import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { DialogService } from 'app/shared/services/dialog.service';
import { Observable } from 'rxjs';
import { BaseTab } from '../base-tab';

@Injectable({
  providedIn: 'root'
})
export class UnsavedChangesGuardService implements CanDeactivate<BaseTab> {

  constructor(private dialogService:DialogService) { }
  canDeactivate(component: BaseTab, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    //check users, if user is not allowed to be here component is undefined
    if(!component) return true; //diactivate the page
    return component.hasUnsavedChanges()
      ? this.dialogService.createUnsavedLeaveDialogBox()
      : true;
  }
}
