import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'cv-section',
  template: ``,
})
export class SectionComponent {
  @Input() backgroundColor: string;
}
