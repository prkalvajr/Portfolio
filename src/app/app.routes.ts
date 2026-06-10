import { Routes } from '@angular/router';
import { AboutPage } from './pages/about/about.page';
import { BlogPage } from './pages/blog/blog.page';
import { ExperiencePage } from './pages/experience/experience.page';
import { HomePage } from './pages/home/home.page';
import { ProjectsPage } from './pages/projects/projects.page';

export const routes: Routes = [
  { path: '', component: HomePage, title: 'Pedro Kalva - Portfolio' },
  { path: 'blog', component: BlogPage, title: 'Blog - Pedro Kalva' },
  { path: 'experience', component: ExperiencePage, title: 'Experience - Pedro Kalva' },
  { path: 'projects', component: ProjectsPage, title: 'Projects - Pedro Kalva' },
  { path: 'about', component: AboutPage, title: 'About - Pedro Kalva' },
  { path: '**', redirectTo: '' },
];
