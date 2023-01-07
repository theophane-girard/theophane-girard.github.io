import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cv-home-description',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="display-flex">
      <div>
        <h1 id="name">Théophane Girard</h1>
      </div>
      <div id="logo-container" class="display-flex">
        <img id="logo" src="assets/logo.png" alt="logo" />
      </div>
    </div>
    <h3>Angular developer</h3>
    <i>Working on angular projects since 2018</i>
    <div class="display-flex">
      <div class="margin-1em justify-content-start">
        <a
          href="mailto:theophane.girard@pm.me"
          class="fa fa-at contact-logo"
          target="_blank"
        ></a>
      </div>
      <div class="margin-1em justify-content-start">
        <a
          href="https://www.linkedin.com/in/theophane-girard/"
          class="fa fa-linkedin contact-logo"
          target="_blank"
        ></a>
      </div>
      <div class="margin-1em justify-content-start">
        <a
          href="https://github.com/theophane-girard"
          class="fa fa-github contact-logo"
          target="_blank"
        ></a>
      </div>
    </div>
  `,
  styleUrls: ['./home-description.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeDescriptionComponent {}
