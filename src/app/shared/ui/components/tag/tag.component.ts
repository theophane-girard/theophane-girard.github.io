import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cv-tag',
  standalone: true,
  imports: [CommonModule],
  template: `
    <a [attr.href]="link">
      <span
        class="tag tag-lg"
        [ngStyle]="{ color: textColor, background: backgroundColor }"
        >#{{ label }}</span
      >
    </a>
  `,
  styleUrls: ['./tag.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TagComponent {
  @Input() label: string;
  @Input() link: string;
  @Input() backgroundColor: string;
  @Input() textColor: string;
}
