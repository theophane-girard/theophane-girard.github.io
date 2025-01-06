import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  Input,
  TemplateRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cv-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="card"
      [style.border-top-color]="topEdgeColor"
      [style.background]="backgroundColor"
      [style.color]="color"
      [style.max-width]="maxWidth"
    >
      <ng-template #defaultLogoTemplate />
      <ng-template #defaultLogoSubtitleTemplate />
      <ng-template #defaultTitleTemplate>
        @if (title) {
          <div>
            <h2>{{ title }}</h2>
          </div>
        }
      </ng-template>
      <ng-template #defaultSubtitleTemplate>
        @if (subtitle) {
          <div>
            <h3>{{ subtitle }}</h3>
          </div>
        }
      </ng-template>
      <ng-template #defaultFooterTemplate>
        @if (footer) {
          <p [innerHTML]="footer"></p>
        }
      </ng-template>

      <ng-container
        [ngTemplateOutlet]="logoTemplate || defaultLogoTemplate"
      />

      <ng-container
        [ngTemplateOutlet]="logoSubtitleTemplate || defaultLogoSubtitleTemplate"
      />

      <ng-container
        [ngTemplateOutlet]="titleTemplate || defaultTitleTemplate"
      />
      <ng-container
        [ngTemplateOutlet]="subtitleTemplate || defaultSubtitleTemplate"
      />
      <ng-content></ng-content>
      <ng-container
        [ngTemplateOutlet]="footerTemplate || defaultFooterTemplate"
      />
    </div>
  `,
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @Input() topEdgeColor: string = 'transparent';
  @Input() title: string;
  @Input() subtitle: string;
  @Input() footer: string;
  @Input() backgroundColor: string = 'white';
  @Input() color: string = 'black';
  @Input() maxWidth: string;
  @ContentChild('logoTemplate') logoTemplate: TemplateRef<string>;
  @ContentChild('logoSubtitleTemplate')
  logoSubtitleTemplate: TemplateRef<string>;
  @ContentChild('titleTemplate') titleTemplate: TemplateRef<string>;
  @ContentChild('subtitleTemplate') subtitleTemplate: TemplateRef<string>;
  @ContentChild('contentTemplate') contentTemplate: TemplateRef<string>;
  @ContentChild('footerTemplate') footerTemplate: TemplateRef<string>;
}
