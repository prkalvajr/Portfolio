import { Component, computed, inject } from '@angular/core';
import { LanguageService } from '../../language.service';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog.page.html',
  styleUrl: './blog.page.css',
})
export class BlogPage {
  private readonly languageService = inject(LanguageService);
  private readonly content = this.languageService.content;
  protected readonly posts = computed(() => this.content().blogPosts);
  protected readonly copy = computed(() => this.content().copy.blogPage);
}
