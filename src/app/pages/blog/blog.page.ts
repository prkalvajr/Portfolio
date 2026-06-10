import { Component } from '@angular/core';
import { blogPosts } from '../../data/portfolio-content';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog.page.html',
  styleUrl: './blog.page.css',
})
export class BlogPage {
  protected readonly posts = blogPosts;
}

