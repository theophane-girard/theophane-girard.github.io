import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cv-mug',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      *ngFor="let steam of steams; let i = index"
      class="position-absolute steam"
      id="steam-{{ i + 1 }}"
    ></div>
    <div class="position-absolute" id="mug">
      <div class="position-absolute" id="mug-shadow"></div>
    </div>
    <div class="position-absolute" id="mug-handle"></div>
  `,
  styleUrls: ['./mug.component.scss'],
})
export class MugComponent implements OnInit {
  steams = new Array(8);

  constructor() {}

  ngOnInit(): void {}
}
