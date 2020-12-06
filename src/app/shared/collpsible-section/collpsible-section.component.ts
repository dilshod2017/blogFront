import { animate, animation, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-collpsible-section',
  templateUrl: './collpsible-section.component.html',
  styleUrls: ['./collpsible-section.component.scss'],
  animations:[
    trigger(
      "toggle",
      [
        state(
          'opened',
          style({
            overflow: 'hidden',
            height:'0px',
            padding:'0px',
            border:'0px',
          }),
        ),
        transition('opened <=> closed', animate('250ms ease-in'))
      ]
    )
  ]
})
export class CollpsibleSectionComponent implements OnInit {
  @Input() title:string;
  state:string;
  constructor() { }

  ngOnInit(): void {
    this.state = 'opened';
  }
  toggleCollapse = () : void => {
    this.state = this.isCollapsed
      ? 'opened'
      :'closed'
  }
  get isCollapsed() : boolean {
    return this.state === 'closed';
  }
  open = () =>{
    this.state = 'opened';
  }
  close = () => {
    this.state = 'closed';
  }
}
