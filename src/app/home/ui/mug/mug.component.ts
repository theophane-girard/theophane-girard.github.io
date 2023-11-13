import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbsoluteDirective } from '@shared/ui/directives/absolute.directive';

@Component({
  selector: 'cv-mug',
  standalone: true,
  imports: [CommonModule, AbsoluteDirective],
  template: `
    @for (steam of steams; track steam; let i = $index) {
      <div class="steam" id="steam-{{ i + 1 }}" absolute></div>
    }
    <div id="mug" absolute>
      <div id="mug-shadow" absolute></div>
    </div>
    <div id="mug-handle" absolute></div>
  `,
  styleUrls: ['./mug.component.scss'],
})
export class MugComponent {
  steams = new Array(8);
}
