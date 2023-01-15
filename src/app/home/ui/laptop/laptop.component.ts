import { Component, OnInit } from '@angular/core';
import { AbsoluteDirective } from '@shared/ui/directives/absolute.directive';

@Component({
  selector: 'cv-laptop',
  standalone: true,
  template: `
    <div id="laptop" absolute>
      <div absolute id="angular-sticker">
        <img
          absolute
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/640px-Angular_full_color_logo.svg.png"
          alt=""
        />
      </div>
      <div absolute id="js-sticker">
        <img
          absolute
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png"
          alt=""
        />
      </div>
      <div id="laptop-top-edge" absolute></div>
      <div id="laptop-screen" absolute></div>
      <div id="html-logo">
        <em id="chevron-left" absolute></em>
        <em id="slash" absolute></em>
        <em id="chevron-right" absolute></em>
      </div>

      <div id="laptop-kb" absolute></div>
    </div>
  `,
  styleUrls: ['./laptop.component.scss'],
  imports: [AbsoluteDirective],
})
export class LaptopComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
