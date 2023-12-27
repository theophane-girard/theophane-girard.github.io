import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AbsoluteDirective } from '@shared/ui/directives/absolute.directive';
import { FlipDirective } from '@shared/ui/directives/flip.directive';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [AbsoluteDirective, FlipDirective],
  selector: 'clouds-devider',
  template: `
    @for(cloud of clouds; track cloud; let index = $index) {
      @if (index % 2) {
        <div class="cloud" flip></div>
      } @else {
        <div class="cloud"></div>
      }
    }
  `,
  styles: `
    $base-cloud-width: 10em;
    $base-cloud-height: 4em;
    $left-part-width: $base-cloud-width * 0.6;
    $right-part-width: $base-cloud-width * 0.3;

    .cloud {
      background-color: #fff;
      background-image: -webkit-linear-gradient(hsla(0,0%,0%,0), hsla(0,0%,0%,.1));
      border-radius: 2em;
      box-shadow: inset 0 0 0 1px hsla(0,0%,100%,.5);
      height: $base-cloud-height;
      width: $base-cloud-width;
      -webkit-filter: drop-shadow(0 2px 3px hsla(0,0%,0%,.25));
    }

    .cloud:after, .cloud:before {
        background-color: #fff;
        content: '';
        border-radius: 100%;
        position: absolute;
    }
    .cloud:before {
        // background-image: -webkit-linear-gradient(hsla(0,0%,0%,0) 50%, hsla(0,0%,0%,.075));
        background-image: -webkit-linear-gradient(hsla(0, 0%, 0%, 0) 50%, hsla(0, 0%, 0%, 0.07));
        left: calc($left-part-width / 10);
        top: - calc($left-part-width / 2);
        width: $left-part-width;
        height: $left-part-width;
    }
    .cloud:after {
        background-image: -webkit-linear-gradient(hsla(0,0%,0%,0) 50%, hsla(0,0%,0%,.04));
        right: 1em;
        top: - calc($right-part-width / 2);
        width: $right-part-width;
        height: $right-part-width;
    }

    // .cloud {
    //   background-color: #fff;
    //   background-image: -webkit-linear-gradient(hsla(0,0%,0%,0), hsla(0,0%,0%,.1));
    //   border-radius: 1em;
    //   box-shadow: inset 0 0 0 1px hsla(0,0%,100%,.5);
    //   height: 1em;
    //   width: 3em;
    //   -webkit-filter: drop-shadow(0 2px 3px hsla(0,0%,0%,.25));
    // }

    // .cloud:after, .cloud:before {
    //     background-color: #fff;
    //     content: '';
    //     border-radius: 100%;
    //     position: absolute;
    // }
    // .cloud:after {
    //     background-image: -webkit-linear-gradient(hsla(0,0%,0%,0) 50%, hsla(0,0%,0%,.025));
    //     height: 1em;
    //     right: .4em;
    //     top: -.5em;
    //     width: 1em;
    // }
    // .cloud:before {
    //     background-image: -webkit-linear-gradient(hsla(0,0%,0%,0) 50%, hsla(0,0%,0%,.075));
    //     height: 1.6em;
    //     left: .4em;
    //     top: -.75em;
    //     width: 1.6em;
    // }
    `,
})
export class CloudsDeviderComponent {
  protected readonly clouds = new Array(7);
}
