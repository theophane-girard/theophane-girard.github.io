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
      <ng-template #defaultLogoTemplate></ng-template>
      <ng-template #defaultLogoSubtitleTemplate></ng-template>
      <ng-template #defaultTitleTemplate>
        <div *ngIf="title">
          <h2>{{ title }}</h2>
        </div>
      </ng-template>
      <ng-template #defaultSubtitleTemplate>
        <div *ngIf="subtitle">
          <h3>{{ subtitle }}</h3>
        </div>
      </ng-template>
      <ng-template #defaultFooterTemplate>
        <p *ngIf="footer" [innerHTML]="footer"></p>
      </ng-template>

      <ng-container
        [ngTemplateOutlet]="logoTemplate || defaultLogoTemplate"
      ></ng-container>

      <ng-container
        [ngTemplateOutlet]="logoSubtitleTemplate || defaultLogoSubtitleTemplate"
      ></ng-container>

      <ng-container
        [ngTemplateOutlet]="titleTemplate || defaultTitleTemplate"
      ></ng-container>
      <ng-container
        [ngTemplateOutlet]="subtitleTemplate || defaultSubtitleTemplate"
      ></ng-container>
      <ng-content></ng-content>
      <ng-container
        [ngTemplateOutlet]="footerTemplate || defaultFooterTemplate"
      ></ng-container>
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
  @ContentChild('logoTemplate') logoTemplate: TemplateRef<any>;
  @ContentChild('logoSubtitleTemplate') logoSubtitleTemplate: TemplateRef<any>;
  @ContentChild('titleTemplate') titleTemplate: TemplateRef<any>;
  @ContentChild('subtitleTemplate') subtitleTemplate: TemplateRef<any>;
  @ContentChild('contentTemplate') contentTemplate: TemplateRef<any>;
  @ContentChild('footerTemplate') footerTemplate: TemplateRef<any>;
}
