import { Component, computed, inject, signal } from '@angular/core';
import { LanguageService } from '../../language.service';

@Component({
  selector: 'app-experience-page',
  templateUrl: './experience.page.html',
  styleUrl: './experience.page.css',
})
export class ExperiencePage {
  private readonly pageSize = 2;
  private readonly languageService = inject(LanguageService);
  private readonly content = this.languageService.content;
  protected readonly items = computed(() => this.content().experienceItems);
  protected readonly visibleCount = signal(this.pageSize);
  protected readonly visibleItems = computed(() =>
    this.items().slice(0, this.visibleCount())
  );
  protected readonly hasMoreItems = computed(
    () => this.visibleCount() < this.items().length
  );
  protected readonly copy = computed(() => this.content().copy.experiencePage);
  protected readonly showTimelineAction = computed(
    () => this.items().length > this.pageSize
  );
  protected readonly timelineActionLabel = computed(() =>
    this.hasMoreItems() ? this.copy().loadMore : this.copy().collapse
  );

  protected toggleTimelineItems(): void {
    if (!this.hasMoreItems()) {
      this.visibleCount.set(this.pageSize);
      return;
    }

    this.visibleCount.update((count) =>
      Math.min(count + this.pageSize, this.items().length)
    );
  }
}
