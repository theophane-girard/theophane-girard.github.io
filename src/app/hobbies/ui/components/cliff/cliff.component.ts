import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cv-cliff',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div id="cliff" class="position-absolute">
      <div id="cliff-top" class="position-absolute"></div>
      <div id="cliff-shade" class="position-absolute"></div>
    </div>
  `,
  styleUrls: ['./cliff.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CliffComponent {}
