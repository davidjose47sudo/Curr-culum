import { Routes } from '@angular/router';
import { BienvenidaComponent } from './layout/bienvenida/bienvenida.component';
import { CurriculumComponent } from './layout/curriculum/curriculum.component';
import { NotFoundComponent } from './layout/not-found/not-found.component';

export const routes: Routes = [
  {path: '', component:BienvenidaComponent , pathMatch: 'full'},
  {path: '**', component: NotFoundComponent },
  {path:'curriculum',component:CurriculumComponent},
];
