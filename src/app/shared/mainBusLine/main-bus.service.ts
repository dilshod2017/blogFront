import { Injectable } from '@angular/core';
import { PostsService } from 'app/blog/services/posts.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { exhaustMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MainBusService {
  constructor(private postService: PostsService) { }

  getPostsSubject:BehaviorSubject<void> = new BehaviorSubject<void>(null);
  getPostSubject: BehaviorSubject<number> = new BehaviorSubject<number>(null);
  posts$: Observable<PostDisplay[]> = this.getPostsSubject.pipe(
    exhaustMap(()=> this.postService.getPostList())
  )
  post$: Observable<PostDisplay> = this.getPostSubject.pipe(
    exhaustMap((id:number)=> this.postService.getPost(id))
  )

}
