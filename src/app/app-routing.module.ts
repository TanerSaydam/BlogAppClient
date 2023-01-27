import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogAddComponent } from './blog-add/blog-add.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogsComponent } from './blogs/blogs.component';

const routes: Routes = [
  {
    path: "",
    component:BlogsComponent
  },
  { 
    path: 'add-blog', 
    component: BlogAddComponent 
  },
  { 
    path: 'blog-detail/:id', 
    component: BlogDetailComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
