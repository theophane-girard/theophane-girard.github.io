import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from '@shared/ui/components/section.component';
import { HomePictureComponent } from './feature/home-picture/home-picture.component';
import { HomeDescriptionComponent } from './feature/home-description/home-description.component';

@Component({
  selector: 'cv-home',
  standalone: true,
  imports: [CommonModule, HomeDescriptionComponent, HomePictureComponent],
  template: `
    <section [style.background]="backgroundColor">
      <div class="section-container">
        <div id="content">
          <cv-home-description></cv-home-description>
          <cv-home-picture></cv-home-picture>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent extends SectionComponent {}
