import { Component, computed, inject } from '@angular/core';
import { LanguageService } from '../../language.service';

@Component({
  selector: 'app-experience-page',
  templateUrl: './experience.page.html',
  styleUrl: './experience.page.css',
})
export class ExperiencePage {
  private readonly languageService = inject(LanguageService);
  private readonly content = this.languageService.content;
  protected readonly items = computed(() => this.content().experienceItems);
  protected readonly copy = computed(() => this.content().copy.experiencePage);
}
