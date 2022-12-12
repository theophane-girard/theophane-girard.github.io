import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cv-plant',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div id="cactus" class="position-absolute">
      <div>
        <div *ngFor="let thorn of thorns" class="thorn thorn-left"></div>
      </div>
      <div>
        <div *ngFor="let thorn of thorns" class="thorn thorn-right"></div>
      </div>
    </div>
    <div id="jar-top" class="position-absolute"></div>
    <div id="jar-right" class="position-absolute"></div>
    <div id="jar-center" class="position-absolute"></div>
    <div id="jar-left" class="position-absolute"></div>
  `,
  styleUrls: ['./plant.component.scss'],
})
export class PlantComponent {
  thorns = new Array(3);
}
