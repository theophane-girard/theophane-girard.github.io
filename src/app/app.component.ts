import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'cv-root',
  imports: [HomeComponent],
  template: `
    <cv-home></cv-home>
    <section id="skills"></section>
  `,
  standalone: true,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
