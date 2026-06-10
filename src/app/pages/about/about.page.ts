import { Component } from '@angular/core';
import { profile } from '../../data/portfolio-content';

@Component({
  selector: 'app-about-page',
  templateUrl: './about.page.html',
  styleUrl: './about.page.css',
})
export class AboutPage {
  protected readonly profile = profile;
}

