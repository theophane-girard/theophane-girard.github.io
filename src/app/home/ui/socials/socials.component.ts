import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexDirective } from '@shared/ui/directives/flex.directive';

@Component({
  selector: 'cv-socials',
  standalone: true,
  imports: [CommonModule, FlexDirective],
  template: `
    <div id="contact-container" flex>
      <a
        href="mailto:theophane.girard@pm.me"
        class="contact-logo margin-1em justify-content-center align-items-center"
        id="mail-logo-container"
        target="_blank"
        flex
      >
        <img
          id="mail-logo"
          src="assets/others/gmail.svg"
          alt="theophane.girard@pm.me"
        />
      </a>
      <div class="margin-1em">
        <a
          href="https://www.linkedin.com/in/theophane-girard/"
          class="fa fa-linkedin contact-logo"
          target="_blank"
        ></a>
      </div>
      <div class="margin-1em">
        <a
          href="https://github.com/theophane-girard"
          class="fa fa-github contact-logo"
          target="_blank"
        ></a>
      </div>
    </div>
  `,
  styleUrls: ['./socials.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SocialsComponent {}
