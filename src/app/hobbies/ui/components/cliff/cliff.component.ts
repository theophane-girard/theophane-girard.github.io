import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbsoluteDirective } from '@shared/ui/directives/absolute.directive';

@Component({
  selector: 'cv-cliff',
  standalone: true,
  imports: [CommonModule, AbsoluteDirective],
  template: `
    <div id="cliff" absolute>
      <div id="cliff-top" absolute></div>
      <div id="cliff-shade" absolute></div>
    </div>
  `,
  styleUrls: ['./cliff.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CliffComponent {}
