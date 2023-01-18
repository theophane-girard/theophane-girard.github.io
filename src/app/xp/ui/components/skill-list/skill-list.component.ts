import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Skill } from '../../../data/timeline.model';
import { EmPipe } from '@shared/ui/pipe/em.pipe';
import { LogoComponent } from '@shared/ui/components/logo/logo.component';
import { SKILL_LOGOS_PATH } from '@shared/data/shared.constants';
import { FlexDirective } from '@shared/ui/directives/flex.directive';

@Component({
  selector: 'cv-skill-list',
  standalone: true,
  imports: [CommonModule, EmPipe, LogoComponent, FlexDirective],
  template: `
    <div id="skill-list" flex>
      <ng-container *ngFor="let skill of skills">
        <cv-logo
          *ngIf="skill.logo"
          [dirPath]="skillLogosPath"
          [logo]="skill.logo"
          [defaultWidth]="4"
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
