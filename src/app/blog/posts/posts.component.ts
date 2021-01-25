import { Component, OnInit } from '@angular/core';
import { MainBusService } from 'app/shared/mainBusLine/main-bus.service';
import { Observable } from 'rxjs';
import { filter, switchMap, tap } from 'rxjs/operators';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  constructor(private postService: PostsService, private mainControl: MainBusService) { }
  posts$: Observable<PostDisplay[]> = this.mainControl.posts$;
  ngOnInit(): void {
    this.posts$ = this.mainControl.getPostsSubject.pipe(
      switchMap(()=>this.mainControl.posts$)
    )
    this.posts$.pipe(tap(console.log)).subscribe();
  }


}
