import { Component } from '@angular/core';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent {
  selectedBlog: any;
  comments: any[] = [];
  newCommentText: string;

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.selectedBlog = this.blogService.getSelectedBlog();
    this.comments = this.blogService.getComments();
  }

  addComment() {
    this.blogService.addComment(this.newCommentText);
    this.newCommentText = '';
  }
}
