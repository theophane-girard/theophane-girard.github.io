import {ChangeDetectionStrategy, Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TagComponent} from "@shared/ui/components/tag/tag.component";

@Component({
  selector: 'cv-hobbies-description',
  standalone: true,
  imports: [CommonModule, TagComponent],
  template: `
    <h1>My Hobbies</h1>
    <h3>Scouting - Volunteer youth group leader ({{ scoutingDuration }} years)</h3>
    <cv-tag
      backgroundColor="white"
      label="Grow"
      textColor="black"
    />
    <cv-tag
      backgroundColor="white"
      label="Educator"
      textColor="black"
    />
    <cv-tag
      backgroundColor="white"
      label="ProjectManagement"
      textColor="black"
    />

    <p>
      As an <strong>activity leader</strong>, I've supported young people aged 11 to 14 in developing independence, teamwork skills, and living harmoniously in nature.
    </p>
    <p>
      More recently, I guide two groups of student scouts aged 18 to 21 in preparing international solidarity projects.
    </p>
  `,
  styleUrls: ['./hobbies-description.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HobbiesDescriptionComponent {
  protected scoutingDuration = new Date().getFullYear() - 2015;
}
