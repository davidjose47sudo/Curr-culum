import { Component } from '@angular/core';

import { BienvenidaModule } from '../../module/bienvenida/bienvenida.module';
import { CurriculumModule } from '../../module/curriculum/curriculum.module';

@Component({
  selector: 'app-homeview',
  standalone: true,
  imports: [BienvenidaModule,CurriculumModule],
  templateUrl: './homeview.component.html',
  styleUrl: './homeview.component.css'
})
export class HomeviewComponent {

}
