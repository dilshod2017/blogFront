import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor() { }
  createUnsavedLeaveDialogBox = () =>{
    console.log("add dialog box with yes/no and returnign observalbe of URL to go to the target place");

    return of(true);
  }
}
