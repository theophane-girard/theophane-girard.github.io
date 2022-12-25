import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cv-hobbies-description',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>My Hobbies</h1>
    <h3>Scouting - Activity leader ({{ scoutingDuration }} years)</h3>
    <i>“A scout is not a sitting-down animal.” Baden Powell</i>
  `,
  styleUrls: ['./hobbies-description.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HobbiesDescriptionComponent {
  protected scoutingDuration = new Date().getFullYear() - 2015;
}
