import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
  }

}
