import { Component, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { GlobalBussService } from 'app/shared/services/global-buss.service';
import { DEFAULT_DIALOG_OPTIONS } from 'consts/dialog';
import { pipe, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  host:{
    "class":"dialog",
    "[class.dialog--visible]":'isOpen'
  }
})
export class DialogComponent implements OnInit, OnDestroy {
  isOpen:boolean = false;
  private readonly _bodyClassName = "dialog-is-open"
  dialogOptions: DialogOptions;
  private _signal:EventEmitter<void>;
  subscription:Subscription[]
  constructor(private globalBussService: GlobalBussService) { }

  ngOnInit(): void {
    this._signal = new EventEmitter();
    this.subscription = [
      this._signal.subscribe(this._hideDialogWindow.bind),
      this.globalBussService.dialogInitializerSubj
      .pipe(
        filter(d=>!!d)
      )
      .subscribe(this.startNewDialog.bind)
    ]
  }
  ngOnDestroy(){
    this.subscription.forEach(s=>s?.unsubscribe());
  }
  startNewDialog = (options:DialogOptions):void =>{
    if(this.dialogOptions) throw new Error('can\'t show two dialog simultaneously');
    this.dialogOptions = { ...options, okButton:
                                          { ...DEFAULT_DIALOG_OPTIONS.okButton, ...options.okButton},
                                       cancelButton:
                                          {...DEFAULT_DIALOG_OPTIONS.cancelButton, ...options.cancelButton}}
    this._showDialogWindow();
  }
  private _showDialogWindow = () :void =>{
    document.body.classList.remove(this._bodyClassName);
    this.isOpen = true;
  }
  private _hideDialogWindow = () :void =>{
    document.body.classList.add(this._bodyClassName);
    this.isOpen = false;
    this.dialogOptions = null;
  }
  onOkClick = () :void =>{
    this._okClicked();
  }
  onCancelClick = () :void =>{
    this._cancelClicked();
  }
  onOverlayClick =() :void =>{
    this._cancelClicked();
  }
  private _okClicked = () =>{
    this.dialogOptions?.okButton.callback();
    this._signal.emit();
  }
  private _cancelClicked = () =>{
    this._signal.emit();
    this.dialogOptions?.cancelButton.callback();
  }
}
