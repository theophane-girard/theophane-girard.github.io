import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbsoluteDirective } from '@shared/ui/directives/absolute.directive';
import { RelativeDirective } from '@shared/ui/directives/relative.directive';

@Component({
  selector: 'cv-fire',
  standalone: true,
  imports: [CommonModule, AbsoluteDirective, RelativeDirective],
  template: `
    <div id="fire-container" relative>
      <div class="flames" absolute>
        <div *ngFor="let fire of fires" class="fire" absolute></div>
      </div>
      <div id="wood1" class="wood" absolute></div>
      <div id="wood2" class="wood" absolute></div>
    </div>
  `,
  styleUrls: ['./fire.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FireComponent {
  fires = new Array(4);
}
