import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cv-laptop',
  standalone: true,
  template: `
    <div id="laptop">
      <div class="position-absolute" id="angular-sticker">
        <img
          class="position-absolute"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/640px-Angular_full_color_logo.svg.png"
          alt=""
        />
      </div>
      <div class="position-absolute" id="js-sticker">
        <img
          class="position-absolute"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png"
          alt=""
        />
      </div>
      <div id="laptop-top-edge"></div>
      <div id="laptop-screen"></div>
      <div id="html-logo">
        <em id="chevron-left"></em>
        <em id="slash"></em>
        <em id="chevron-right"></em>
      </div>

      <div id="laptop-kb"></div>
    </div>
  `,
  styleUrls: ['./laptop.component.scss'],
})
export class LaptopComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
