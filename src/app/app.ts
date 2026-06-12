import { Component, computed, effect, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Title } from '@angular/platform-browser';
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { filter } from 'rxjs';
import { LanguageService } from './language.service';
import { ThemeService } from './theme.service';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly themeService = inject(ThemeService);
  protected readonly languageService = inject(LanguageService);
  private readonly router = inject(Router);
  private readonly title = inject(Title);
  private readonly currentPath = signal(this.normalizePath(this.router.url));
  protected readonly content = this.languageService.content;
  protected readonly profile = computed(() => this.content().profile);
  protected readonly copy = computed(() => this.content().copy);
  protected readonly pageKey = computed(() => {
    const path = this.currentPath();

    if (path.startsWith('/blog')) {
      return 'blog';
    }

    if (path.startsWith('/experience')) {
      return 'experience';
    }

    if (path.startsWith('/projects')) {
      return 'projects';
    }

    if (path.startsWith('/about')) {
      return 'about';
    }

    return 'home';
  });
  protected readonly navItems = computed(() => {
    const navigation = this.copy().navigation;

    return [
      { label: navigation.home, path: '/' },
      { label: navigation.experience, path: '/experience' },
      { label: navigation.projects, path: '/projects' },
      { label: navigation.blog, path: '/blog' },
      { label: navigation.about, path: '/about' },
    ];
  });

  constructor() {
    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        takeUntilDestroyed()
      )
      .subscribe((event) => {
        this.currentPath.set(this.normalizePath(event.urlAfterRedirects));
      });

    effect(() => {
      this.title.setTitle(this.copy().documentTitles[this.pageKey()]);
    });
  }

  private normalizePath(url: string): string {
    return url.split('?')[0].split('#')[0];
  }
}
