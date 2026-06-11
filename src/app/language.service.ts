import { computed, effect, Injectable, signal } from '@angular/core';
import {
  type Language,
  portfolioContent,
} from './data/portfolio-content';

const supportedLanguages: Language[] = ['en', 'pt-BR'];

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly storageKey = 'portfolio-language';
  readonly language = signal<Language>(this.getInitialLanguage());
  readonly content = computed(() => portfolioContent[this.language()]);
  readonly isPortuguese = computed(() => this.language() === 'pt-BR');

  constructor() {
    effect(() => {
      const language = this.language();

      document.documentElement.lang = language;

      try {
        localStorage.setItem(this.storageKey, language);
      } catch {
        // Ignore storage failures; the selected language still works for the session.
      }
    });
  }

  toggle(): void {
    this.language.update((current) => (current === 'pt-BR' ? 'en' : 'pt-BR'));
  }

  setLanguage(language: Language): void {
    if (supportedLanguages.includes(language)) {
      this.language.set(language);
    }
  }

  private getInitialLanguage(): Language {
    try {
      const saved = localStorage.getItem(this.storageKey);
      if (saved === 'en' || saved === 'pt-BR') {
        return saved;
      }

      return navigator.language.toLowerCase().startsWith('pt') ? 'pt-BR' : 'en';
    } catch {
      return 'en';
    }
  }
}
