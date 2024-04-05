import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BienvenidaComponent } from '../../layout/bienvenida/bienvenida.component';
import { CurriculumModule } from '../curriculum/curriculum.module';



@NgModule({
  declarations: [BienvenidaComponent],
  imports: [
    CommonModule,CurriculumModule
  ],
})
export class BienvenidaModule { }
