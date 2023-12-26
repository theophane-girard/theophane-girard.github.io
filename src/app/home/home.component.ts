import {ChangeDetectionStrategy, Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SectionComponent} from '@shared/ui/components/section.component';
import {HomePictureComponent} from './feature/home-picture/home-picture.component';
import {HomeDescriptionComponent} from './feature/home-description/home-description.component';

@Component({
  selector: 'cv-home',
  standalone: true,
  imports: [CommonModule, HomeDescriptionComponent, HomePictureComponent],
  template: `
    <section [style.background]="backgroundColor">
      <div class="section-container">
        <div id="content">
          <cv-home-description/>
          <div>
            <img src="assets/pp-socials.jpg" style="width: 20em;
    border-radius: 50%;
    box-shadow: #011a2c 0 3px 8px;border: 1px solid black;    transform: rotateY(180deg);">

          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent extends SectionComponent {}
