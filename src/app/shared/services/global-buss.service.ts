import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GlobalBussService {
  dialogInitializerSubj:BehaviorSubject<DialogOptions>;
  constructor() {
    this.dialogInitializerSubj = new BehaviorSubject<DialogOptions>(null);
  }
}
