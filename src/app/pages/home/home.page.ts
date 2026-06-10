import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  blogPosts,
  experienceItems,
  metrics,
  profile,
  projects,
} from '../../data/portfolio-content';

@Component({
  selector: 'app-home-page',
  imports: [RouterLink],
  templateUrl: './home.page.html',
  styleUrl: './home.page.css',
})
export class HomePage {
  protected readonly profile = profile;
  protected readonly metrics = metrics;
  protected readonly featuredProjects = projects;
  protected readonly latestPosts = blogPosts.slice(0, 2);
  protected readonly recentExperience = experienceItems.slice(0, 3);
}

