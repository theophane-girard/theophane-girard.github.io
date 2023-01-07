import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Skill } from '../../../data/timeline.model';
import { SKILL_LOGOS_PATH } from '../../../../shared/data/shared.constants';
import { EmPipe } from '../../../../shared/pipe/em.pipe';

@Component({
  selector: 'cv-skill',
  standalone: true,
  imports: [CommonModule, EmPipe],
  template: `
    <img
      class="skill-logo"
      *ngIf="skill.logo"
      src="{{ techLogoRoot + skill.logo.url }}"
      alt="{{ skill.name }}"
      [style.width]="width | em"
    />
  `,
  styleUrls: ['./skill.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillComponent {
  techLogoRoot = SKILL_LOGOS_PATH;
  @Input() skill: Skill;
  @Input() width: number;
}
