import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbsoluteDirective } from '@shared/ui/directives/absolute.directive';

@Component({
  selector: 'cv-plant',
  standalone: true,
  imports: [CommonModule, AbsoluteDirective],
  template: `
    <div id="cactus" absolute>
      <div>
        @for (thorn of thorns; track thorn) {
          <div class="thorn thorn-left" absolute></div>
        }
      </div>
      <div>
        @for (thorn of thorns; track thorn) {
          <div class="thorn thorn-right" absolute></div>
        }
      </div>
    </div>
    <div id="jar-top" absolute></div>
    <div id="jar-right" absolute></div>
    <div id="jar-center" absolute></div>
    <div id="jar-left" absolute></div>
  `,
  styleUrls: ['./plant.component.scss'],
})
export class PlantComponent {
  thorns = new Array(3);
}
