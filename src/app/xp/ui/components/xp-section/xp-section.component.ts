import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineSection } from '../../../data/timeline.model';
import { DurationPipe } from '../../pipes/duration.pipe';

@Component({
  selector: 'cv-xp-section',
  standalone: true,
  imports: [CommonModule, DurationPipe],
  template: `
    <div id="container" class="display-flex">
      <div>
        <a href="{{ timelineSection.pro.organization.url }}" target="_blank">
          <img
            class="organization-logo"
            src="{{
              organizationLogoRoot + timelineSection.pro.organization.logo.url
            }}"
            alt="{{ timelineSection.pro.organization.name }}"
            [ngClass]="{
              'white-img':
                timelineSection.pro.organization.logo.isBackgroundColorWhite
            }"
          />
        </a>
      </div>
      <div>
        <p>
          {{ timelineSection.duration | duration : isFirst }}
        </p>
      </div>
      <div>
        <h2 class="">{{ timelineSection.pro.title }}</h2>
        <!--        <h3>{{ timelineSection.pro.organization.name }}</h3>-->
      </div>
      <p class="description">
        {{ timelineSection.pro.description }}
      </p>
      <div>
        <div>
          <img
            *ngFor="let skill of timelineSection.pro.skills"
            class="skill-logo"
            src="{{ techLogoRoot + skill.logo.url }}"
            alt="{{ skill.name }}"
            [style.background]="
              skill.logo.isBackgroundColorWhite ? 'white' : ''
            "
          />
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./xp-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class XpSectionComponent {
  @Input() isFirst: boolean;
  @Input() timelineSection: TimelineSection;
  organizationLogoRoot = 'assets/organization-logo/';
  techLogoRoot = 'assets/tech-logo/';
}
