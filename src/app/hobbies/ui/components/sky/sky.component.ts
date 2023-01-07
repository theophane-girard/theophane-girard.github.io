import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cv-sky',
  standalone: true,
  imports: [CommonModule],
  template: `
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
  `,
  styleUrls: ['./sky.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkyComponent {
  protected stars = new Array(25);
}
