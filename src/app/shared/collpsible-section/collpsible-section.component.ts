import { animate, animation, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { combineLatest, pipe, Subscription } from 'rxjs';
import { filter, mergeAll, takeUntil, takeWhile, tap } from 'rxjs/operators';
import { GlobalBussService } from '../services/global-buss.service';

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
export class CollpsibleSectionComponent implements OnInit, OnDestroy {
  @Input() title:string;
  @Input() id:string;
  @Input() sectionName:string;
  state:string;
  subscriptions:Subscription[];
  constructor(private globalBus:GlobalBussService) { }
  ngOnDestroy(): void {
    this.subscriptions?.forEach(s=>s.unsubscribe());
  }
  globalcollapsibleSectionClose:string;
  collapsibleSectionClose:string;
  ngOnInit(): void {
    this.state = 'opened';
    this.subscriptions = [
      combineLatest([this.globalBus.globalcollapsibleSectionClose,this.globalBus.collapsibleSectionClose]).
        pipe(
         mergeAll(),
         tap(x=>{
           if(!!x && x !== this.globalcollapsibleSectionClose ||
                     x !== this.collapsibleSectionClose){
             this.state = 'closed';
           }
         })
        )
        .subscribe()
      // this.globalBus.collapsibleSectionClose.pipe(
      //   filter(x => !!x && x === this.id)
      // ).subscribe(id=>{
      //     this.state = 'closed';
      // }),
      // this.globalBus.globalcollapsibleSectionClose.pipe(
      //   filter(x=> !!x && x === this.sectionName)
      // ).subscribe(()=>{
      //   this.state = 'closed';
      // })
    ]
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
