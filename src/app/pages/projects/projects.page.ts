import { Component, computed, inject } from '@angular/core';
import { LanguageService } from '../../language.service';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects.page.html',
  styleUrl: './projects.page.css',
})
export class ProjectsPage {
  private readonly languageService = inject(LanguageService);
  private readonly content = this.languageService.content;
  protected readonly projects = computed(() => this.content().projects);
  protected readonly ideas = computed(() => this.content().projectIdeas);
  protected readonly copy = computed(() => this.content().copy.projectsPage);
}
