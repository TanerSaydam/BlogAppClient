import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { BlogsComponent } from './blogs/blogs.component';
import { BlogAddComponent } from './blog-add/blog-add.component';
import { FormsModule } from '@angular/forms';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogsComponent,
    BlogAddComponent,
    BlogDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
