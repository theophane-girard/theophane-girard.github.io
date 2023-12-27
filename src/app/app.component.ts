import {Component} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {WaveSeparatorComponent} from './wave-separator/wave-separator.component';
import {XpComponent} from './xp/xp.component';
import {HOME_WAVES, SECOND_WAVES} from './wave-separator/data/waves.mock';
import {HobbiesComponent} from './hobbies/hobbies.component';
import {HOME_BACKGROUND_COLOR, SECOND_BACKGROUND_COLOR,} from '@shared/data/shared.constants';
import {WaveBackground} from './wave-separator/data/wave.types';
import {PlaceholderComponent} from "@shared/ui/components/placeholder/placeholder.component";
import { CloudsDeviderComponent } from '@shared/ui/components/clouds-devider/clouds-devider.component';
import { StackableDirective } from '@shared/ui/directives/stackable.directive';

@Component({
  selector: 'cv-root',
  imports: [
    HomeComponent,
    WaveSeparatorComponent,
    XpComponent,
    HobbiesComponent,
    PlaceholderComponent,
    CloudsDeviderComponent,
    StackableDirective,
  ],
  template: `
    <cv-home [backgroundColor]="homeBackgroundColor" stackable />
    @defer() {
    <cv-xp [backgroundColor]="secondBackgroundColor" stackable />
    <!-- <cv-hobbies [backgroundColor]="homeBackgroundColor"  /> -->
    } @placeholder() {
    <cv-placeholder [backgroundColor]="secondBackgroundColor" />
    } @loading() {
    <cv-placeholder [backgroundColor]="secondBackgroundColor" />
    }
  `,
  standalone: true,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  firstColors: WaveBackground[] = HOME_WAVES;
  secondColors = SECOND_WAVES;
  homeBackgroundColor: string = HOME_BACKGROUND_COLOR;
  secondBackgroundColor: string = SECOND_BACKGROUND_COLOR;
}
