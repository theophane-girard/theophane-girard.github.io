import {ChangeDetectionStrategy, Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TagComponent} from '@shared/ui/components/tag/tag.component';
import {FlexDirective} from '@shared/ui/directives/flex.directive';
import {SocialsComponent} from '../../ui/socials/socials.component';
import {SkillChipComponent} from "@shared/ui/skill-chip/skill-chip.component";
import {SKILLS} from '../../data/tags.mock';

@Component({
  selector: 'cv-home-description',
  standalone: true,
  template: `
    <div id="title-container">
      <div id="logo-container">
        <img src="assets/logo.svg" alt="" id="logo" />
      </div>
      <div id="title" flex>
        <h1 id="firstname" class="name">Théophane</h1>&nbsp;<h1 id="lastname" class="name">Girard</h1>
      </div>

      <div id="skill-tag-list" flex>
        @for (skill of skills; track skill) {
          <cv-skill-chip [skill]="skill" />
        }
      </div>
      <div id="subtitle">
        <span>Expert Angular Developer</span>
      </div>
      <cv-socials />
    </div>
  `,
  styleUrls: ['./home-description.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    TagComponent,
    FlexDirective,
    SocialsComponent,
    SkillChipComponent,
  ],
})
export class HomeDescriptionComponent {
  skills = SKILLS;
}
