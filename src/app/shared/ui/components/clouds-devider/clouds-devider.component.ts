import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AbsoluteDirective } from '@shared/ui/directives/absolute.directive';
import { FlipDirective } from '@shared/ui/directives/flip.directive';
import { FlamesComponent } from "@shared/ui/components/flames/flames.component";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  selector: 'clouds-devider',
  template: `
    @for(cloud of clouds; track cloud; let index = $index) { @if (index % 2) {
    <div class="cloud even" flip absolute [style.right]="cloud.right"></div>
    } @else {
    <div class="cloud odd" absolute [style.right]="cloud.right"></div>
    } }
    <div>
      <cv-flames />
      <div></div>
    </div>
  `,
  styles: `
    $base-cloud-width: 20em;
    $base-cloud-height: $base-cloud-width * 0.4;
    $left-part-width: $base-cloud-width * 0.6;
    $right-part-width: $base-cloud-width * 0.3;
    $delay-animation-delay: .3s;
    $cloud-animation: 4s linear infinite alternate;
    $flame-animation: .5s ease-in infinite;

    cv-flames {
      position: absolute;
      left: 70vw;
      transform: rotate(-155deg);

      &:before {
        content: "🚀";
        font-size: 4em;
        position: absolute;
        transform: rotate(137deg);
        top: 1.2em;
      }

      &:after {
        content: "";
        position: absolute;
        transform: rotate(137deg);
        top: 1.2em;
        background: white;
        // width
      }

      ::ng-deep {
        .flames {
          font-size: 6px;
        }
      }
      // &:after {
      //   content: '';
      //   width: 2em;
      //   height: 2em;
      //   background: red;
      //   position: absolute;
      // }
    }

    .cloud {
      background-color: #fff;
      background-image: -webkit-linear-gradient(hsla(0,0%,0%,0), hsla(0,0%,0%,.1));
      border-radius: calc($base-cloud-width / 5);
      height: $base-cloud-height;
      width: $base-cloud-width;
      opacity: 0;
      //       ::after, ::before {
      //   background-color: #fff;
      //   content: '';
      //   border-radius: 100%;
      // }
      // ::before {
      //   position: absolute;
      //     background-image: -webkit-linear-gradient(hsla(0, 0%, 0%, 0) 50%, hsla(0, 0%, 0%, 0.07));
      //     left: calc($left-part-width / 10);
      //     top: - calc($left-part-width / 2);
      //     width: $left-part-width;
      //     height: $left-part-width;
      // }
      // ::after {
      //   position: absolute;
      //     background-image: -webkit-linear-gradient(hsla(0,0%,0%,0) 50%, hsla(0,0%,0%,.04));
      //     right: 1em;
      //     top: - calc($right-part-width / 2);
      //     width: $right-part-width;
      //     height: $right-part-width;
      // }
    }

    .even {
      animation: evenCloudAnimation $cloud-animation $delay-animation-delay, cloudEnterAnimation 0.3s ease-in-out $delay-animation-delay;
    }
    .odd {
      animation: oddCloudAnimation $cloud-animation $delay-animation-delay, cloudEnterAnimation 0.3s ease-in-out $delay-animation-delay;
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
        opacity: 1;
        transform: translateX(0);
      }
      100% {
        opacity: 1;
        transform: translateX(.8em);
      }
    }
    @keyframes oddCloudAnimation {
      0% {
        opacity: 1;
        transform: translateX(0);
      }
      100% {
        opacity: 1;
        transform: translateX(-.8em);
      }
    }

    @keyframes cloudEnterAnimation {
      0% {
        opacity: 1;
        transform: translateY(15em);
        transition: 0.5s ease-in-out;
      }

      100%{
        opacity: 1;
        transform: translateY(0em);
        transition: 0.5s ease-in-out;
      }
    }

    @keyframes rocketFlame1Animation {
      0% {
        transform: scale(.2) translateY(1em);
      }

      25%{
        transform: scale(1) translateY(1em);
      }
      100%{
        transform: scale(.1) translateY(1em) translateX(1em);
      }
    }
    `,
  imports: [AbsoluteDirective, FlipDirective, FlamesComponent],
})
export class CloudsDeviderComponent {
  protected readonly clouds = new Array(7).fill(null).map((_, index) => ({
    right: `-${index * 16}em`,
  }));
}
