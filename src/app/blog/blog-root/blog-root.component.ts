import { Component, OnInit } from '@angular/core';
import { MainBusService } from 'app/shared/mainBusLine/main-bus.service';

@Component({
  selector: 'app-blog-root',
  templateUrl: './blog-root.component.html',
  styleUrls: ['./blog-root.component.scss']
})
export class BlogRootComponent implements OnInit {

  constructor(private mainControl: MainBusService) {
    this.mainControl.getPostsSubject.next();
  }

  ngOnInit(): void {
  }

}
