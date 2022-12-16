import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cv-fire',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div id="fire-container" class="position-absolute">
      <div class="flames">
        <div class="fire"></div>
        <div class="fire"></div>
        <div class="fire"></div>
        <div class="fire"></div>
      </div>
      <div id="wood1" class="wood"></div>
      <div id="wood2" class="wood"></div>
    </div>
  `,
  styleUrls: ['./fire.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FireComponent {}
