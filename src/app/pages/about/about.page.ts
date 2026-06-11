import { Component, computed, inject } from '@angular/core';
import { LanguageService } from '../../language.service';

@Component({
  selector: 'app-about-page',
  templateUrl: './about.page.html',
  styleUrl: './about.page.css',
})
export class AboutPage {
  private readonly languageService = inject(LanguageService);
  private readonly content = this.languageService.content;
  protected readonly profile = computed(() => this.content().profile);
  protected readonly copy = computed(() => this.content().copy.aboutPage);
}
