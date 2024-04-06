import { Routes } from '@angular/router';
import { CurriculumComponent } from './layout/curriculum/curriculum.component';
import { NotFoundComponent } from './layout/not-found/not-found.component';
import { HomeviewComponent } from './layout/homeview/homeview.component';

export const routes: Routes = [
  {path: '', component:HomeviewComponent , pathMatch: 'full'},
  {path: '**', component: NotFoundComponent },
];
