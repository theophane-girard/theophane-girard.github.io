import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Skill } from '../../../data/timeline.model';
import { SkillComponent } from '../skill/skill.component';
import { EmPipe } from '../../../../shared/pipe/em.pipe';

@Component({
  selector: 'cv-skill-list',
  standalone: true,
  imports: [CommonModule, SkillComponent, EmPipe],
  template: `
    <div class="skill display-flex">
      <cv-skill
        *ngFor="let skill of skills"
        [skill]="skill"
        [width]="logoWidth"
      ></cv-skill>
    </div>
  `,
  styleUrls: ['./skill-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillListComponent {
  @Input() skills: Skill[];
  logoWidth: number = 4;
}
