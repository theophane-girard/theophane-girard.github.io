import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { WaveSeparatorComponent } from './wave-separator/wave-separator.component';
import { XpComponent } from './xp/xp.component';
import {
  HOME_WAVES,
  SECOND_WAVES,
  WaveBackgrounds,
} from './wave-separator/data/waves.mock';
import { HobbiesComponent } from './hobbies/hobbies.component';
import {
  HOME_BACKGROUND_COLOR,
  SECOND_BACKGROUND_COLOR,
} from './shared/data/shared.constants';

@Component({
  selector: 'cv-root',
  imports: [
    HomeComponent,
    WaveSeparatorComponent,
    XpComponent,
    HobbiesComponent,
  ],
  template: `
    <cv-home [backgroundColor]="homeBackgroundColor"></cv-home>
    <cv-wave-separator
      [backgroundColor]="homeBackgroundColor"
      [colors]="firstColors"
    ></cv-wave-separator>
    <cv-xp [backgroundColor]="secondBackgroundColor"></cv-xp>
    <cv-wave-separator
      [backgroundColor]="secondBackgroundColor"
      [colors]="secondColors"
    ></cv-wave-separator>
    <cv-hobbies [backgroundColor]="homeBackgroundColor"></cv-hobbies>
  `,
  standalone: true,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  firstColors: WaveBackgrounds[] = HOME_WAVES;
  secondColors = SECOND_WAVES;
  homeBackgroundColor: string = HOME_BACKGROUND_COLOR;
  secondBackgroundColor: string = SECOND_BACKGROUND_COLOR;
}
