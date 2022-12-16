import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from '../shared/ui/section.component';
import { ScoutingPictureComponent } from './features/scouting-picture/scouting-picture.component';

@Component({
  selector: 'cv-hobbies',
  standalone: true,
  imports: [CommonModule, ScoutingPictureComponent],
  template: `
    <section [style.background]="backgroundColor">
      <div>
        <h1>My Hobbies</h1>
        <h3>Scouting - Activity leader ({{ scoutingDuration }} years)</h3>
        <i>More than a hobby, an actual lifestyle</i>
      </div>
      <cv-scouting-picture></cv-scouting-picture>
    </section>
  `,
  styleUrls: ['./hobbies.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HobbiesComponent extends SectionComponent {
  scoutingDuration = new Date().getFullYear() - 2015;
}
