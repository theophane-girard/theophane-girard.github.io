import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from '../shared/ui/section.component';

@Component({
  selector: 'cv-hobbies',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section [style.background]="backgroundColor">
      <div>
        <h1>My Hobbies</h1>
        <h3>Scouting - Activity leader ({{ scoutingDuration }} years)</h3>
        <i>More than a hobby, an actual lifestyle</i>
      </div>
    </section>
  `,
  styleUrls: ['./hobbies.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HobbiesComponent extends SectionComponent {
  scoutingDuration = new Date().getFullYear() - 2015;
}
