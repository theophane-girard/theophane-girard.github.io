import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cv-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="box" [style.border-top-color]="topEdgeColor">
      <h2>Team Builder</h2>
      <p>
        Scans our talent network to create the optimal team for your project
      </p>
      <img
        src="https://assets.codepen.io/2301174/icon-team-builder.svg"
        alt=""
      />
    </div>
  `,
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @Input() topEdgeColor: string = 'white';
}
