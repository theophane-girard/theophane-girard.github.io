import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from '../shared/ui/section.component';
import { TIMELINE } from './data/timeline.mock';
import { TimelineSection } from './data/timeline.model';
import { XpSectionComponent } from './ui/components/xp-section/xp-section.component';
import { ProgressLineComponent } from './ui/components/progress-line/progress-line.component';

@Component({
  selector: 'cv-xp',
  standalone: true,
  imports: [CommonModule, XpSectionComponent, ProgressLineComponent],
  template: `
    <section [style.background]="backgroundColor">
      <div class="section-container">
        <h1>My Experiences</h1>
        <div
          id="timeline-container"
          class="display-flex"
          *ngFor="
            let timelineSection of timelineSections;
            let first = first;
            let last = last;
            let index = index
          "
        >
          <div
            class="display-flex"
            id="xp-section"
            [ngClass]="{ 'justify-content-end': index % 2 }"
          >
            <cv-xp-section
              [isFirst]="first"
              [timelineSection]="timelineSection"
            ></cv-xp-section>
          </div>
          <div
            class="progress-line-section"
            [ngClass]="{ 'odd-flip': index % 2 === 0 }"
          >
            <cv-progress-line
              [index]="index"
              [backgroundColor]="backgroundColor"
              *ngIf="!last"
              class="display-flex"
            ></cv-progress-line>
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
}
