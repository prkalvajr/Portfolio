import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../language.service';

@Component({
  selector: 'app-home-page',
  imports: [RouterLink],
  templateUrl: './home.page.html',
  styleUrl: './home.page.css',
})
export class HomePage {
  private readonly languageService = inject(LanguageService);
  private readonly content = this.languageService.content;
  protected readonly profile = computed(() => this.content().profile);
  protected readonly copy = computed(() => this.content().copy.home);
  protected readonly metrics = computed(() => this.content().metrics);
  protected readonly featuredProjects = computed(() => this.content().projects);
  protected readonly latestPosts = computed(() => this.content().blogPosts.slice(0, 2));
  protected readonly recentExperience = computed(() =>
    this.content().experienceItems.slice(0, 3)
  );
}
