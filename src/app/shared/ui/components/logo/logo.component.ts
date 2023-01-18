import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { EmPipe } from '../../pipe/em.pipe';
import { Logo } from '@shared/data/shared.model';

@Component({
  selector: 'cv-logo',
  standalone: true,
  imports: [CommonModule, EmPipe, NgOptimizedImage],
  template: `
    <a [attr.href]="url" [attr.target]="urlTarget">
      <img
        class="logo"
        [attr.src]="dirPath + logo.url"
        alt="{{ name }}"
        [ngStyle]="{
          width: logo.width | em : defaultWidth,
          height: logo.height | em : defaultHeight
        }"
      />
    </a>
  `,
  styleUrls: ['./logo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoComponent {
  @Input() logo: Logo;
  @Input() name: string;
  @Input() dirPath: string;
  @Input() url: string;
  @Input() urlTarget: string = '_blank';
  @Input() defaultWidth: number;
  @Input() defaultHeight: number;
}
