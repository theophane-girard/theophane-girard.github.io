import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from '@shared/ui/components/section.component';
import { TIMELINE } from './data/timeline.mock';
import { TimelineSection } from './data/timeline.model';
import { XpSectionComponent } from './ui/components/xp-section/xp-section.component';
import { ProgressLineComponent } from './ui/components/progress-line/progress-line.component';
import { XP_TOP_EDGE_COLORS } from '@shared/data/shared.constants';
import { Meta } from '@angular/platform-browser';
import { FlexDirective } from '@shared/ui/directives/flex.directive';

@Component({
  selector: 'cv-xp',
  standalone: true,
  imports: [
    CommonModule,
    XpSectionComponent,
    ProgressLineComponent,
    FlexDirective,
  ],
  template: `
    <section [style.background]="backgroundColor">
      <div class="section-container">
        <h1>My Experiences</h1>
        <div
          id="timeline-container"
          flex
          *ngFor="
            let timelineSection of timelineSections;
            let first = first;
            let last = last;
            let index = index
          "
        >
          <div
            flex
            id="xp-section"
            [ngClass]="{ 'justify-content-end': index % 2 }"
          >
            <cv-xp-section
              [isFirst]="first"
              [timelineSection]="timelineSection"
              [topEdgeColor]="topEdgeColors[index]"
            />
          </div>
          <div
            class="progress-line-section"
            [ngClass]="{ 'odd-flip': index % 2 === 0 }"
          >
            <cv-progress-line
              [backgroundColor]="backgroundColor"
              *ngIf="!last"
              flex
            />
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./xp.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class XpComponent extends SectionComponent {
  readonly timelineSections: TimelineSection[] = TIMELINE;
  readonly topEdgeColors: string[] = XP_TOP_EDGE_COLORS;

  constructor(private meta: Meta) {
    super();
    this.initDescriptionMetaTag();
  }

  private initDescriptionMetaTag() {
    const currentOrganization = this.timelineSections[0].pro.organization.name;
    const currentJob = this.timelineSections[0].pro.title;

    this.meta.addTag({
      name: 'description',
      content: `Currently working at ${currentOrganization} as ${currentJob}`,
    });
  }
}
