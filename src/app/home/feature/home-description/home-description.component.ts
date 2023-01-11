import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagComponent } from '@shared/ui/components/tag/tag.component';
import { TAGS } from '../../data/tags.mock';

@Component({
  selector: 'cv-home-description',
  standalone: true,
  imports: [CommonModule, TagComponent],
  template: `
    <div class="display-flex">
      <div>
        <h1 id="name">Théophane Girard</h1>
      </div>
      <div id="logo-container" class="display-flex">
        <img id="logo" src="assets/logo.png" alt="logo" />
      </div>
    </div>
    <br />
    <div id="skill-tag-list">
      <cv-tag
        *ngFor="let tag of tags"
        [backgroundColor]="tag.backgroundColor"
        [label]="tag.label"
        [textColor]="tag.textColor"
      ></cv-tag>
    </div>
    <br />
    <i>Working on angular projects as developer since 2018</i>
    <div class="display-flex">
      <a
        href="mailto:theophane.girard@pm.me"
        class="contact-logo margin-1em display-flex justify-content-center align-items-center"
        id="mail-logo-container"
        target="_blank"
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
  styleUrls: ['./home-description.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeDescriptionComponent {
  tags = TAGS;
}
