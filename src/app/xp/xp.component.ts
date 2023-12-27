import {ChangeDetectionStrategy, Component, inject, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SectionComponent} from '@shared/ui/components/section.component';
import {TIMELINE} from './data/timeline.mock';
import {TimelineSection} from './data/timeline.model';
import {XpSectionComponent} from './ui/components/xp-section/xp-section.component';
import {ProgressLineComponent} from './ui/components/progress-line/progress-line.component';
import {XP_TOP_EDGE_COLORS} from '@shared/data/shared.constants';
import {Meta} from '@angular/platform-browser';
import {FlexDirective} from '@shared/ui/directives/flex.directive';
import { CloudsDeviderComponent } from '@shared/ui/components/clouds-devider/clouds-devider.component';
import { AbsoluteDirective } from '@shared/ui/directives/absolute.directive';

@Component({
  selector: 'cv-xp',
  standalone: true,
  imports: [
    CommonModule,
    XpSectionComponent,
    ProgressLineComponent,
    FlexDirective,
    AbsoluteDirective,
    CloudsDeviderComponent,
  ],
  template: `
    <div>
      <clouds-devider absolute/>
      <section [style.background]="backgroundColor">
        <div class="section-container">
          <h1>My Experiences</h1>
          @for ( timelineSection of timelineSections; track timelineSection; let
          first = $first; let last = $last; let index = $index) {
          <div id="timeline-container" flex>
            <cv-xp-section
              flex
              [ngClass]="{ 'justify-content-end': index % 2 }"
              [isFirst]="first"
              [timelineSection]="timelineSection"
              [topEdgeColor]="topEdgeColors[index]"
            />
            @if (!last) {
            <cv-progress-line
              class="progress-line-section"
              [ngClass]="{ 'odd-flip': index % 2 === 0 }"
              [backgroundColor]="backgroundColor"
              flex
            />
            }
          </div>
          }
        </div>
      </section>
    </div>
  `,
  styleUrls: ['./xp.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class XpComponent extends SectionComponent implements OnInit {
  readonly timelineSections: TimelineSection[] = TIMELINE;
  readonly topEdgeColors: string[] = XP_TOP_EDGE_COLORS;
  readonly meta = inject(Meta);

  ngOnInit() {
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
