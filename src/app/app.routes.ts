import { Routes } from '@angular/router';
import { AboutPage } from './pages/about/about.page';
import { BlogPage } from './pages/blog/blog.page';
import { ExperiencePage } from './pages/experience/experience.page';
import { HomePage } from './pages/home/home.page';
import { ProjectsPage } from './pages/projects/projects.page';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'blog', component: BlogPage },
  { path: 'experience', component: ExperiencePage },
  { path: 'projects', component: ProjectsPage },
  { path: 'about', component: AboutPage },
  { path: '**', redirectTo: '' },
];
