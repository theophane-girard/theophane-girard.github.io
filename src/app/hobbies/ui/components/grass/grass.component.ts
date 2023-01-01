import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cv-grass',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div id="container" class="position-relative">
      <div class="neutral-grass-blade position-absolute"></div>
      <div class="light-grass-blade position-absolute"></div>
      <div class="dark-grass-blade position-absolute"></div>
    </div>
  `,
  styleUrls: ['./grass.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GrassComponent {}
