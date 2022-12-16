import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cv-progress-line',
  standalone: true,
  imports: [CommonModule],
  template: ` <p>progress-line works!</p> `,
  styleUrls: ['./progress-line.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressLineComponent {
  @Input() index: number;
}
