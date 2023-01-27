import { Component } from '@angular/core';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent {
  blogs: any[];

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.blogService.getBlogs().subscribe(data => {
      this.blogs = data;
    });
  }
}
