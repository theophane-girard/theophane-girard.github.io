import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FireComponent } from '../../ui/fire/fire.component';

@Component({
  selector: 'cv-scouting-picture',
  standalone: true,
  imports: [CommonModule, FireComponent],
  template: `
    <div id="scout-picture" class="position-relative">
      <cv-fire></cv-fire>
    </div>
  `,
  styleUrls: ['./scouting-picture.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScoutingPictureComponent {}
