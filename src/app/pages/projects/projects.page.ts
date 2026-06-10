import { Component } from '@angular/core';
import { projectIdeas, projects } from '../../data/portfolio-content';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects.page.html',
  styleUrl: './projects.page.css',
})
export class ProjectsPage {
  protected readonly projects = projects;
  protected readonly ideas = projectIdeas;
}

