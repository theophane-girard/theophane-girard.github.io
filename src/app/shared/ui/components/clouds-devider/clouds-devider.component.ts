import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AbsoluteDirective } from '@shared/ui/directives/absolute.directive';
import { FlipDirective } from '@shared/ui/directives/flip.directive';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [AbsoluteDirective, FlipDirective],
  selector: 'clouds-devider',
  template: `
    @for(cloud of clouds; track cloud; let index = $index) { @if (index % 2) {
    <div class="cloud even" flip absolute [style.right]="cloud.right"></div>
    } @else {
    <div class="cloud odd" absolute [style.right]="cloud.right"></div>
    } }
  `,
  styles: `
    $base-cloud-width: 20em;
    $base-cloud-height: $base-cloud-width * 0.4;
    $left-part-width: $base-cloud-width * 0.6;
    $right-part-width: $base-cloud-width * 0.3;

    .cloud {
      background-color: #fff;
      background-image: -webkit-linear-gradient(hsla(0,0%,0%,0), hsla(0,0%,0%,.1));
      border-radius: calc($base-cloud-width / 5);
      height: $base-cloud-height;
      width: $base-cloud-width;

    }

    .even {
      animation: evenCloudAnimation 4s linear infinite alternate, evenEnterAnimation 0.3s ease-in-out;
    }
    .odd {
      animation: oddCloudAnimation 4s linear infinite alternate, evenEnterAnimation 0.3s ease-in-out;
    }

    .cloud:after, .cloud:before {
        background-color: #fff;
        content: '';
        border-radius: 100%;
    }
    .cloud:before {
      position: absolute;
        background-image: -webkit-linear-gradient(hsla(0, 0%, 0%, 0) 50%, hsla(0, 0%, 0%, 0.07));
        left: calc($left-part-width / 10);
        top: - calc($left-part-width / 2);
        width: $left-part-width;
        height: $left-part-width;
    }
    .cloud:after {
      position: absolute;
        background-image: -webkit-linear-gradient(hsla(0,0%,0%,0) 50%, hsla(0,0%,0%,.04));
        right: 1em;
        top: - calc($right-part-width / 2);
        width: $right-part-width;
        height: $right-part-width;
    }
    @keyframes evenCloudAnimation {
      0% {
        transform: translateX(0);
      }
      100% {
      transform: translateX(1em);
      }
    }
    @keyframes oddCloudAnimation {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-1em);
      }
    }

    @keyframes evenEnterAnimation {
0% {
opacity: 0.6;
      transform: translateY(1.5em);
      transition: 0.5s ease-in-out;
        }

      100%{opacity: 1;
      transform: translateY(0em);
      transition: 0.5s ease-in-out;
    }
  }
      @keyframes oddEnterAnimation {
        0% {
opacity: 0.6;
      transform: translateY(1em);
      transition: 0.5s ease-in-out;
        }
      100%{opacity: 1;
      transform: translateY(0);
      transition: 0.5s ease-in-out;
    }
    }
    `,
})
export class CloudsDeviderComponent {
  protected readonly clouds = new Array(7).fill(null).map((_, index) => ({
    right: `-${index * 16}em`,
  }));
}
