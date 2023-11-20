import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { FlexDirective } from '@shared/ui/directives/flex.directive';

@Component({
  selector: 'cv-socials',
  standalone: true,
  imports: [CommonModule, FlexDirective, NgOptimizedImage],
  template: `
    <div id="contact-container" flex>
      <a
        href="mailto:girard.theophane@gmail.com"
        class="contact-logo margin-1em justify-content-center align-items-center"
        id="mail-logo-container"
        target="_blank"
        flex
      >
        <img
          id="mail-logo"
          [ngSrc]="'assets/others/gmail.svg'"
          priority
          width="50"
          height="25"
          alt="girard.theophane@gmail.com"
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
