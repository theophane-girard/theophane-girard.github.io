import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineSection } from '../../data/timeline.model';

@Component({
  selector: 'cv-xp-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      <a href="{{ timelineSection.pro.organization.url }}" target="_blank">
        <img
          class="organization-logo"
          src="{{
            organizationLogoRoot + timelineSection.pro.organization.logo
          }}"
          alt="{{ timelineSection.pro.organization.name }}"
        />
      </a>
    </div>
    <div>
      <p>
        {{ timelineSection.duration }}
      </p>
    </div>
    <div>
      <h2 class="">{{ timelineSection.pro.title }}</h2>
      <h3>{{ timelineSection.pro.organization.name }}</h3>
    </div>
    <p class="description">
      {{ timelineSection.pro.description }}
    </p>
    <div>
      <div>
        <img
          *ngFor="let skill of timelineSection.pro.skills"
          class="skill-logo"
          src="{{ techLogoRoot + skill.logo }}"
          alt="{{ skill.name }}"
        />
      </div>
    </div>
  `,
  styleUrls: ['./xp-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class XpSectionComponent {
  @Input() timelineSection: TimelineSection;
  organizationLogoRoot = 'assets/organization-logo/';
  techLogoRoot = 'assets/tech-logo/';
}
