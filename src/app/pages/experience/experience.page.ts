import { Component } from '@angular/core';
import { experienceItems, profile } from '../../data/portfolio-content';

@Component({
  selector: 'app-experience-page',
  templateUrl: './experience.page.html',
  styleUrl: './experience.page.css',
})
export class ExperiencePage {
  protected readonly profile = profile;
  protected readonly items = experienceItems;
}

