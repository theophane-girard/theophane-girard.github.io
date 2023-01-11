import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Skill } from '../../../data/timeline.model';
import { EmPipe } from '@shared/ui/pipe/em.pipe';
import { LogoComponent } from '@shared/ui/components/logo/logo.component';
import { SKILL_LOGOS_PATH } from '@shared/data/shared.constants';

@Component({
  selector: 'cv-skill-list',
  standalone: true,
  imports: [CommonModule, EmPipe, LogoComponent],
  template: `
    <div id="skill-list" class="display-flex">
      <ng-container *ngFor="let skill of skills">
        <cv-logo
          *ngIf="skill.logo"
          [dirPath]="skillLogosPath"
          [logo]="skill.logo"
        ></cv-logo>
      </ng-container>
    </div>
  `,
  styleUrls: ['./skill-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillListComponent {
  @Input() skills: Skill[];
  skillLogosPath = SKILL_LOGOS_PATH;
  logoWidth: number = 4;
}
