import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogRootComponent } from './blog-root/blog-root.component';
import { BlogHomeComponent } from './blog-home/blog-home.component';
import { blogRouting } from './routing';
import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts/posts.component';
import { PostsService } from './services/posts.service';



@NgModule({
  declarations: [
    BlogRootComponent,
    BlogHomeComponent,
    PostComponent,
    PostsComponent
  ],
  imports: [
    blogRouting,
    CommonModule
  ],
  providers:[
    PostsService
  ],
  bootstrap:[BlogRootComponent]
})
export class BlogModule { }
