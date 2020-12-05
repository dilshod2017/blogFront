import { Component, OnInit } from '@angular/core';
import { DEFAULT_DIALOG_OPTIONS } from 'consts/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  host:{
    "class":"dialog",
    "[class.dialog--visible]":'isOpen'
  }
})
export class DialogComponent implements OnInit {
  isOpen:boolean = false;
  private readonly _bodyClassName = "dialog-is-open"
  dialogOptions: DialogOptions;
  constructor() { }

  ngOnInit(): void {
  }
  startNewDialog = (options:DialogOptions):void =>{
    if(this.dialogOptions) throw new Error('can\'t show two dialog simultaneously');
    this.dialogOptions = { ...options, okButton:
                                          { ...DEFAULT_DIALOG_OPTIONS.okButton, ...options.okButton},
                                        cancelButton: {...DEFAULT_DIALOG_OPTIONS.cancelButton, ...options.cancelButton}}
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
  }
  private _cancelClicked = () =>{
    this.dialogOptions?.cancelButton.callback();
  }
}
