import { Component, OnInit } from '@angular/core';
import { BaseTab } from '../base-tab';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent extends BaseTab implements OnInit {

  constructor() {
    super();
   }
  ngOnInit(): void {
  }

  hasUnsavedChanges = () :boolean =>{
    return true;
  }
}
