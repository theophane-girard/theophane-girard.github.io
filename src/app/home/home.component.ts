import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeComponent } from './ui/me/me.component';
import { PlantComponent } from './ui/plant/plant.component';
import { ClockComponent } from './ui/clock/clock.component';
import { LaptopComponent } from './ui/laptop/laptop.component';
import { MugComponent } from './ui/mug/mug.component';
import { SectionComponent } from '../shared/ui/section.component';

@Component({
  selector: 'cv-home',
  standalone: true,
  imports: [
    CommonModule,
    ClockComponent,
    MugComponent,
    LaptopComponent,
    PlantComponent,
    MeComponent,
  ],
  template: `
    <section style="display: flex" [style.background]="backgroundColor">
      <div>
        <h1>Théophane Girard</h1>
        <h3>Angular developer</h3>
        <i>Working on angular projects since 2018</i>
      </div>
      <div id="container" class="position-absolute">
        <div>
          <cv-clock class="position-absolute"></cv-clock>
        </div>
        <cv-laptop></cv-laptop>
        <cv-mug class="position-absolute"></cv-mug>
        <cv-plant class="position-absolute"></cv-plant>
        <div id="desktop"></div>
        <cv-me class="position-absolute"></cv-me>
        <div id="circle-background"></div>
      </div>
    </section>
  `,
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent extends SectionComponent {}
