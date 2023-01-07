import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineSection } from '../../../data/timeline.model';
import { CurrentDurationPipe } from '../../pipes/current-duration.pipe';
import { ObserveVisibilityDirective } from '../../../../shared/directives/observe-visibility.directive';
import { ORGANIZATION_LOGOS_PATH } from '../../../../shared/data/shared.constants';
import { SkillComponent } from '../skill/skill.component';
import { SkillListComponent } from '../skill-list/skill-list.component';
import { BehaviorSubject } from 'rxjs';
import { SkillTagComponent } from '../skill-tag/skill-tag.component';

@Component({
  selector: 'cv-xp-section',
  standalone: true,
  imports: [
    CommonModule,
    CurrentDurationPipe,
    ObserveVisibilityDirective,
    SkillComponent,
    SkillListComponent,
    SkillTagComponent,
  ],
  template: `
    <div
      id="container"
      class="display-flex"
      observeVisibility
      (visible)="visible$.next(true)"
      [ngClass]="{ hidden: !isFirst, visible: isFirst || (visible$ | async) }"
      [style.border-top-color]="topEdgeColor"
    >
      <div>
        <a href="{{ timelineSection.pro.organization.url }}" target="_blank">
          <img
            class="organization-logo"
            src="{{
              organizationLogoRoot + timelineSection.pro.organization.logo.url
            }}"
            alt="{{ timelineSection.pro.organization.name }}"
          />
        </a>
      </div>
      <div>
        <p>
          {{ timelineSection.duration | currentDuration : isFirst }}
        </p>
      </div>
      <div>
        <h2 class="">{{ timelineSection.pro.title }}</h2>
      </div>
      <div id="skill-tag-list">
        <cv-skill-tag
          *ngFor="let skill of timelineSection.pro.skills"
          [backgroundColor]="topEdgeColor"
          [label]="skill.name"
          [textColor]="'white'"
        ></cv-skill-tag>
      </div>
      <p class="description">
        {{ timelineSection.pro.description }}
      </p>
      <cv-skill-list [skills]="timelineSection.pro.skills"></cv-skill-list>
    </div>
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
