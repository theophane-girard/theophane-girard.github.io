import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbsoluteDirective } from '@shared/ui/directives/absolute.directive';
import { StarClassPipe } from '../../pipes/star-class.pipe';
import { StarIdPipe } from '../../pipes/star-id.pipe';

@Component({
  selector: 'cv-sky',
  standalone: true,
  imports: [CommonModule, AbsoluteDirective, StarClassPipe, StarIdPipe],
  template: `
    <ng-container *ngFor="let star of stars; let index = index">
      <div
        *ngFor="let classPrefix of starClassPrefixes"
        [ngClass]="classPrefix | starClass : index"
        [attr.id]="classPrefix | starId : index"
        absolute
      ></div>
    </ng-container>
  `,
  styleUrls: ['./sky.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkyComponent {
  protected stars = new Array(25);
  protected starClassPrefixes = ['little', 'medium', 'big'];
}
