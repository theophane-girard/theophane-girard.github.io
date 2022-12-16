import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from '../shared/ui/section.component';

@Component({
  selector: 'cv-xp',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section [style.background]="backgroundColor">
      <div>
        <h1>My Experiences</h1>
        <h3>Angular developer</h3>
        <i>Working on angular projects since 2018</i>
      </div>
    </section>
  `,
  styleUrls: ['./xp.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class XpComponent extends SectionComponent {}
