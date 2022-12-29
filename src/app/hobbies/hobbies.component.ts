import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from '../shared/ui/section.component';
import { ScoutingPictureComponent } from './features/scouting-picture/scouting-picture.component';
import { HobbiesDescriptionComponent } from './features/hobbies-description/hobbies-description.component';

@Component({
  selector: 'cv-hobbies',
  standalone: true,
  imports: [
    CommonModule,
    ScoutingPictureComponent,
    HobbiesDescriptionComponent,
  ],
  template: `
    <section [style.background]="backgroundColor" class="position-relative">
      <div id="stars-container" class="position-absolute">
        <ng-container *ngFor="let star of stars; let index = index">
          <div
            [ngClass]="{
              'little-star-1': index % 2,
              'little-star-2': !(index % 2)
            }"
            class="little-stars star"
            [attr.id]="'little-star-' + index"
          ></div>
          <div
            [ngClass]="{
              'medium-star-1': index % 2,
              'medium-star-2': !(index % 2)
            }"
            class="medium-stars star"
            [attr.id]="'medium-star-' + index"
          ></div>
          <div
            [ngClass]="{ 'big-star-1': index % 2, 'big-star-2': !(index % 2) }"
            class="big-stars star"
            [attr.id]="'big-star-' + index"
          ></div>
        </ng-container>
      </div>
      <div class="section-container display-flex">
        <div class="">
          <cv-hobbies-description></cv-hobbies-description>
        </div>
        <div class="">
          <cv-scouting-picture></cv-scouting-picture>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./hobbies.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HobbiesComponent extends SectionComponent {
  protected stars = new Array(50);
}
