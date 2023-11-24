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
    <div id="title-container" flex>
      <div id="logo-container" flex>
        <img src="assets/logo.svg" alt="" id="logo" />
      </div>
      <div>
        <h1 id="name">Hi, I'm Théophane Girard</h1>
      </div>
    </div>
    <div id="skill-tag-list">
      @for (skill of skills; track skill) {
        <cv-skill-chip
          [skill]="skill"
        />
      }
    </div>
    <br />
    <i>Working on angular projects as developer since 2018</i>
    <cv-socials />
  `,
    styleUrls: ['./home-description.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule, TagComponent, FlexDirective, SocialsComponent, SkillChipComponent]
})
export class HomeDescriptionComponent {
  skills = SKILLS;
}
