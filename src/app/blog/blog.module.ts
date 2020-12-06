import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogRootComponent } from './blog-root/blog-root.component';
import { BlogHomeComponent } from './blog-home/blog-home.component';
import { blogRouting } from './routing';



@NgModule({
  declarations: [BlogRootComponent, BlogHomeComponent],
  imports: [
    blogRouting,
    CommonModule
  ]
})
export class BlogModule { }
