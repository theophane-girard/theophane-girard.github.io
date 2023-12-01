import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {Skill} from "../../../xp/data/timeline.model";

@Component({
  selector: 'cv-skill-chip',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  template: `
    <div id="chip">
      <div id="logo-container">
        <img [src]="skill.logo?.url" [style]="skill.logo?.style" [attr.alt]="skill.name"/>
      </div>
      <span>{{ skill.name }}</span>
    </div>
  `,
  styles: `
  #chip {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      border-radius: 9999px;
      // background: #252525;
      background: white;
      color: black;
      width: 8em;
      height: 2.5em;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      border: 0.5px solid #444444;

      #logo-container {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillChipComponent {
  @Input() skill: Skill
}
