import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineSection } from '../../../data/timeline.model';
import { CurrentDurationPipe } from '../../pipes/current-duration.pipe';
import { ObserveVisibilityDirective } from '@shared/ui/directives/observe-visibility.directive';
import { ORGANIZATION_LOGOS_PATH } from '@shared/data/shared.constants';
import { SkillListComponent } from '../skill-list/skill-list.component';
import { BehaviorSubject } from 'rxjs';
import { TagComponent } from '@shared/ui/components/tag/tag.component';
import { FlexDirective } from '@shared/ui/directives/flex.directive';
import { CardComponent } from '@shared/ui/components/card/card.component';
import { LogoComponent } from '@shared/ui/components/logo/logo.component';
import { EmPipe } from '@shared/ui/pipe/em.pipe';

@Component({
  selector: 'cv-xp-section',
  standalone: true,
  imports: [
    CommonModule,
    CurrentDurationPipe,
    ObserveVisibilityDirective,
    SkillListComponent,
    TagComponent,
    FlexDirective,
    CardComponent,
    LogoComponent,
    EmPipe,
  ],
  template: `
    <cv-card
      id="container"
      observeVisibility
      (visible)="visible$.next(true)"
      [ngClass]="{ hidden: !isFirst, visible: isFirst || (visible$ | async) }"
      [title]="timelineSection.pro.title"
      [topEdgeColor]="topEdgeColor"
      [maxWidth]="'40vw'"
    >
      <ng-template #logoTemplate>
        <cv-logo
          [logo]="timelineSection.pro.organization.logo"
          [dirPath]="organizationLogoRoot"
          [name]="timelineSection.pro.organization.name"
        />
      </ng-template>
      <ng-template #subtitleTemplate>
        <p id="duration">
          {{ timelineSection.duration | currentDuration : isFirst }}
        </p>
      </ng-template>
      <ng-template #subtitleTemplate>
        <div id="skill-tag-list">
          @for (skill of timelineSection.pro.skills; track skill) {
          <cv-tag
            [backgroundColor]="topEdgeColor"
            [label]="skill.name"
            [textColor]="'white'"
          />
          }
        </div>
      </ng-template>
      <p [innerHTML]="timelineSection.pro.description"></p>
      <ng-template #footerTemplate>
        <cv-skill-list [skills]="timelineSection.pro.skills" />
      </ng-template>
    </cv-card>
  `,
  styleUrls: ['./xp-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class XpSectionComponent {
  @Input() isFirst: boolean;
  @Input() timelineSection: TimelineSection;
  @Input() topEdgeColor: string = 'white';
  organizationLogoRoot = ORGANIZATION_LOGOS_PATH;
  visible$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
}
