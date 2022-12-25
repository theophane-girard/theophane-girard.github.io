import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cv-home-description',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Théophane Girard</h1>
    <h3>Angular developer</h3>
    <i>Working on angular projects since 2018</i>
  `,
  styleUrls: ['./home-description.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeDescriptionComponent {

}
