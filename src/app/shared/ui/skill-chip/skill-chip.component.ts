import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tag } from '@shared/data/shared.model';
import { Skill } from 'src/app/xp/data/timeline.model';

@Component({
  selector: 'cv-skill-chip',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      <img [src]="skill.logo?.url" />
      <span>{{ skill.name }}</span>
    </div>
  `,
  styleUrl: './skill-chip.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillChipComponent {
  @Input() skill: Skill
}
