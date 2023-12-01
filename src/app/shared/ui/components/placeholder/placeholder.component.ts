import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'cv-placeholder',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section [style]="{
    'background-color': backgroundColor
    }">
    </section>
  `,
  styles: `
    section {
      height: 100vh
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlaceholderComponent {
  @Input() backgroundColor = "white"
}
