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
    @for (star of stars; track star; let index = $index) {
      @for (classPrefix of starClassPrefixes; track classPrefix) {
        <div
          [ngClass]="classPrefix | starClass : index"
          [attr.id]="classPrefix | starId : index"
          absolute
        ></div>
      }
    }
  `,
  styleUrls: ['./sky.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkyComponent {
  protected stars = new Array(25);
  protected starClassPrefixes = ['little', 'medium', 'big'];
}
