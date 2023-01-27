import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-blog-add',
  templateUrl: './blog-add.component.html',
  styleUrls: ['./blog-add.component.css']
})
export class BlogAddComponent {

  blog: {title: string, content: string} = {title: "", content: ""};
  constructor(
    private blogService: BlogService,
    private router: Router
  ){

  }
  onSubmit() {
    this.blogService.saveBlog(this.blog).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(['/']);
      },
      (error) => console.log(error)
    );
  }
}
