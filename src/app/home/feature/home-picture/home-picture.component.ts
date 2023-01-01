import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClockComponent } from "../../ui/clock/clock.component";
import { MugComponent } from "../../ui/mug/mug.component";
import { LaptopComponent } from "../../ui/laptop/laptop.component";
import { PlantComponent } from "../../ui/plant/plant.component";
import { MeComponent } from "../../ui/me/me.component";

@Component({
  selector: 'cv-home-picture',
  standalone: true,
  imports: [CommonModule,    ClockComponent,
    MugComponent,
    LaptopComponent,
    PlantComponent,
    MeComponent,],
  template: `
    <div id="container">
      <div class="position-relative">
        <div>
          <cv-clock class="position-absolute"></cv-clock>
        </div>
        <cv-laptop></cv-laptop>
        <cv-mug class="position-absolute"></cv-mug>
        <cv-plant class="position-absolute"></cv-plant>
        <div id="desktop"></div>
        <cv-me class="position-absolute"></cv-me>
        <div id="circle-background"></div>
      </div>
    </div>
  `,
  styleUrls: ['./home-picture.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePictureComponent {

}
