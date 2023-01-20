import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClockComponent } from '../../ui/clock/clock.component';
import { MugComponent } from '../../ui/mug/mug.component';
import { LaptopComponent } from '../../ui/laptop/laptop.component';
import { PlantComponent } from '../../ui/plant/plant.component';
import { MeComponent } from '../../ui/me/me.component';
import { RelativeDirective } from '@shared/ui/directives/relative.directive';
import { AbsoluteDirective } from '@shared/ui/directives/absolute.directive';

@Component({
  selector: 'cv-home-picture',
  standalone: true,
  imports: [
    CommonModule,
    ClockComponent,
    MugComponent,
    LaptopComponent,
    PlantComponent,
    MeComponent,
    RelativeDirective,
    AbsoluteDirective,
  ],
  template: `
    <div id="container">
      <div relative>
        <div>
          <cv-clock absolute/>
        </div>
        <cv-laptop/>
        <cv-mug absolute/>
        <cv-plant absolute/>
        <div id="desktop" absolute></div>
        <cv-me absolute/>
        <div id="circle-background" absolute></div>
      </div>
    </div>
  `,
  styleUrls: ['./home-picture.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePictureComponent {}
