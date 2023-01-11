import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from '@shared/ui/components/section.component';
import { ScoutingPictureComponent } from './features/scouting-picture/scouting-picture.component';
import { HobbiesDescriptionComponent } from './features/hobbies-description/hobbies-description.component';
import { SkyComponent } from './ui/components/sky/sky.component';
import { ObserveVisibilityDirective } from '@shared/ui/directives/observe-visibility.directive';
import { Subject } from 'rxjs';

@Component({
  selector: 'cv-hobbies',
  standalone: true,
  imports: [
    CommonModule,
    ScoutingPictureComponent,
    HobbiesDescriptionComponent,
    SkyComponent,
    ObserveVisibilityDirective,
  ],
  template: `
    <section
      [style.background]="backgroundColor"
      class="position-relative"
      observeVisibility
      [threshold]="0"
      [debounceTime]="200"
      (visible)="visible$.next(true)"
    >
      <cv-sky></cv-sky>
      <div class="section-container display-flex">
        <cv-hobbies-description
          [ngClass]="{ visible: visible$ | async }"
          class="hidden initial-y"
        ></cv-hobbies-description>
        <cv-scouting-picture
          [ngClass]="{ visible: visible$ | async }"
          class="initial-y"
        ></cv-scouting-picture>
      </div>
    </section>
  `,
  styleUrls: ['./hobbies.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HobbiesComponent extends SectionComponent {
  visible$: Subject<boolean> = new Subject();
}
