import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
    
  private apiUrl = ' https://localhost:7182/api/blogs';

  constructor(private http: HttpClient) { }

  getBlogs(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  saveBlog(blog: any): Observable<any> {
    return this.http.post<any>(this.apiUrl,blog);
  }

  private selectedBlog: Blog;

  getSelectedBlog(): Blog {
    return this.selectedBlog;
  }

  setSelectedBlog(blog: Blog): void {
    this.selectedBlog = blog;
  }
}
