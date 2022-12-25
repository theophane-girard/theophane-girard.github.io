import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from '../shared/ui/section.component';
import { ScoutingPictureComponent } from './features/scouting-picture/scouting-picture.component';
import { HomeDescriptionComponent } from "../home/feature/home-description/home-description.component";
import { HobbiesDescriptionComponent } from "./features/hobbies-description/hobbies-description.component";

@Component({
  selector: 'cv-hobbies',
  standalone: true,
  imports: [CommonModule, ScoutingPictureComponent, HobbiesDescriptionComponent],
  template: `
    <section [style.background]="backgroundColor">
      <div>
        <cv-hobbies-description></cv-hobbies-description>
      </div>
      <div>
        <cv-scouting-picture></cv-scouting-picture>
      </div>
    </section>
  `,
  styleUrls: ['./hobbies.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HobbiesComponent extends SectionComponent {
}
