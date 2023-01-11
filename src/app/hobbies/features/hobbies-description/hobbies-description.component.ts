import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cv-hobbies-description',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>My Hobbies</h1>
    <h3>Scouting - Activity leader ({{ scoutingDuration }} years)</h3>
    <p>
      As an <strong>activity leader scout</strong>, I guided young people from
      11 to 14 years old to gain autonomy, to form teams and to live together in
      nature.
    </p>
    <p>
      More recently, I am helping 2 scout student teams from 18 to 21 years old
      to prepare international humanitarian projects.
    </p>
    <i><strong>“A scout is not a sitting-down animal.” Baden Powell</strong></i>
  `,
  styleUrls: ['./hobbies-description.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HobbiesDescriptionComponent {
  protected scoutingDuration = new Date().getFullYear() - 2015;
}
