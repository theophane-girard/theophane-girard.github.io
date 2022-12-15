import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { WaveSeparatorComponent } from './wave-separator/wave-separator.component';

@Component({
  selector: 'cv-root',
  imports: [HomeComponent, WaveSeparatorComponent],
  template: `
    <cv-home></cv-home>
    <cv-wave-separator></cv-wave-separator>
    <section id="skills"></section>
  `,
  standalone: true,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
