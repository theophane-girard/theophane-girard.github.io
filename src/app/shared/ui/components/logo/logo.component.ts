import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {EmPipe} from '../../pipe/em.pipe';
import {Logo} from '@shared/data/shared.model';

@Component({
  selector: 'cv-logo',
  standalone: true,
  imports: [CommonModule, EmPipe, NgOptimizedImage],
  template: `
    <a [attr.href]="url" [attr.target]="urlTarget">
      <img
        class="logo"
        [ngSrc]="dirPath + logo.url"
        [width]="100"
        [height]="100"
        [style.width]="logo.style"
        loading="lazy"
        alt="{{ name }}"
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
