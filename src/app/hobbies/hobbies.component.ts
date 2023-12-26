import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { SectionComponent } from '@shared/ui/components/section.component';
import { ScoutingPictureComponent } from './features/scouting-picture/scouting-picture.component';
import { HobbiesDescriptionComponent } from './features/hobbies-description/hobbies-description.component';
import { SkyComponent } from './ui/components/sky/sky.component';
import { ObserveVisibilityDirective } from '@shared/ui/directives/observe-visibility.directive';
import { Subject } from 'rxjs';
import { RelativeDirective } from '@shared/ui/directives/relative.directive';
import { FlexDirective } from '@shared/ui/directives/flex.directive';

@Component({
  selector: 'cv-hobbies',
  standalone: true,
  imports: [
    CommonModule,
    ScoutingPictureComponent,
    HobbiesDescriptionComponent,
    SkyComponent,
    ObserveVisibilityDirective,
    RelativeDirective,
    FlexDirective,
  ],
  template: `
    <section
      [style.background]="backgroundColor"
      relative
      observeVisibility
      [threshold]="0"
      [debounceTime]="300"
      (visible)="visible$.next(true)"
    >
      <cv-sky />
      <div class="section-container" flex>
        <cv-hobbies-description />
        <cv-scouting-picture />
      </div>
    </section>
  `,
  styleUrls: ['./hobbies.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: Window, useValue: window }],
})
export class HobbiesComponent extends SectionComponent {
  visible$: Subject<boolean> = new Subject();
  window = inject(Window);
  document = inject(DOCUMENT);

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    console.log(
      this.window.scrollY,
      this.document.body.scrollHeight,
      this.document.scrollingElement?.scrollHeight
    );
    // console.log(
    //   this.window.scrollY /
    //     (this.document.body.scrollHeight -
    //       this.document.scrollingElement?)
    // );
  }
}
