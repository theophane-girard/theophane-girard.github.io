import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from '../shared/ui/section.component';
import { TIMELINE } from './data/timeline.mock';
import { TimelineSection } from './data/timeline.model';
import { XpSectionComponent } from './ui/xp-section/xp-section.component';
import { ProgressLineComponent } from './ui/progress-line/progress-line.component';

@Component({
  selector: 'cv-xp',
  standalone: true,
  imports: [CommonModule, XpSectionComponent, ProgressLineComponent],
  template: `
    <section [style.background]="backgroundColor">
      <div>
        <h1>My Experiences</h1>
        <div
          *ngFor="
            let timelineSection of timelineSections;
            let last = last;
            let index = index
          "
        >
          <cv-xp-section [timelineSection]="timelineSection"></cv-xp-section>
          <cv-progress-line [index]="index" *ngIf="!last"></cv-progress-line>
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
