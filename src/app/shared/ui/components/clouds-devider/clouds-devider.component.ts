import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AbsoluteDirective } from '@shared/ui/directives/absolute.directive';
import { FlipDirective } from '@shared/ui/directives/flip.directive';
import { FlamesComponent } from "@shared/ui/components/flames/flames.component";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  selector: 'clouds-devider',
  template: `
    @for (cloud of clouds; track cloud; let index = $index) {
      @if (index % 2) {
        <div class="cloud even" flip absolute [style.right]="cloud.right"></div>
      } @else {
        <div class="cloud odd" absolute [style.right]="cloud.right"></div>
      }
    }
    <div id="rocket" absolute>
      <div id="cloud-piece-1" class="cloud-piece"></div>
      <div id="cloud-piece-2" class="cloud-piece"></div>
      <div id="cloud-piece-3" class="cloud-piece"></div>
      <cv-flames />
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
    $rocket-animation-duration: 10s;
    $cloud-piece-animation: $rocket-animation-duration linear infinite 1s;
    $rocket-animation: $rocket-animation-duration ease-in infinite 1s;
    $rocket-rotate-deg: 20deg;

    #rocket {
      left: 65vw;
      animation: rocketAnimation $rocket-animation;
      width: 3em;
      opacity: 0;
      height: 5em;
    }
    .cloud-piece {
      background: white;
      position: absolute;
      left: 1em;
      z-index: 1;
    }

    #cloud-piece-1 {
      width: 1em;
      height: 1em;
      border-radius: 1em;
      animation: cloudPiece1Animation $cloud-piece-animation;
    }
    #cloud-piece-2 {
      width: 1em;
      height: 1em;
      border-radius: 1em;
      animation: cloudPiece2Animation $cloud-piece-animation;
    }
    #cloud-piece-3 {
      width: 1em;
      height: 1em;
      border-radius: 1em;
      animation: cloudPiece3Animation $cloud-piece-animation;
    }

    cv-flames {
      &:before {
        content: "🚀";
        left: -.3em;
        font-size: 4em;
        position: absolute;
        transform: rotate(-45deg);
      }

      ::ng-deep {
        .flames {
          top: 16em;
          left:0;
          font-size: 6px;
          transform: rotate(45deg)
        }
      }
    }

    .cloud {
      background-color: #fff;
      background-image: -webkit-linear-gradient(hsla(0,0%,0%,0), hsla(0,0%,0%,.1));
      border-radius: calc($base-cloud-width / 5);
      height: $base-cloud-height;
      width: $base-cloud-width;
      opacity: 0;
      z-index: 1;

      &:after, &:before {
        background-color: #fff;
        content: '';
        border-radius: 100%;
      }
      &:before {
        position: absolute;
          background-image: -webkit-linear-gradient(hsla(0, 0%, 0%, 0) 50%, hsla(0, 0%, 0%, 0.07));
          left: calc($left-part-width / 10);
          top: - calc($left-part-width / 2);
          width: $left-part-width;
          height: $left-part-width;
      }
      &:after {
        position: absolute;
          background-image: -webkit-linear-gradient(hsla(0,0%,0%,0) 50%, hsla(0,0%,0%,.04));
          right: 1em;
          top: - calc($right-part-width / 2);
          width: $right-part-width;
          height: $right-part-width;
      }
    }

    .even {
      animation: evenCloudAnimation $cloud-animation $delay-animation-delay, cloudEnterAnimation 0.3s ease-in-out $delay-animation-delay;
    }
    .odd {
      animation: oddCloudAnimation $cloud-animation $delay-animation-delay, cloudEnterAnimation 0.3s ease-in-out $delay-animation-delay;
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

    @keyframes cloudPiece1Animation {
      20%, 30%, 100% {
        transform: translateX(2em) translateY(-3em);
      }
      0% {
        opacity: 1;
        transform: translateX(0) translateY(0);
      }
      5% {
        opacity: 1;
        transform: translateX(.5em) translateY(-1.5em);
      }
      10% {
        opacity: 1;
      }
      30% {
        opacity: 0;
      }
      100% {
        opacity: 0;
      }
    }
    @keyframes cloudPiece2Animation {
      20%, 30%, 100% {
        transform: translateX(-2em) translateY(-3em);
      }
      0% {
        opacity: 1;
        transform: translateX(0) translateY(0);
      }
      5% {
        opacity: 1;
        transform: translateX(-.5em) translateY(-1.5em);
      }
      10% {
        opacity: 1;
      }
      30% {
        opacity: 0;
      }
      100% {
        opacity: 0;
      }
    }
    @keyframes cloudPiece3Animation {
      20%, 30%, 100% {
        transform: translateX(1em) translateY(-3em);
      }
      0% {
        opacity: 1;
        transform: translateX(0) translateY(0);
      }
      5% {
        opacity: 1;
        transform: translateX(.5em) translateY(-1.5em);
      }
      10% {
        opacity: 1;
      }
      30% {
        opacity: 0;
      }
      100% {
        opacity: 0;
      }
    }
    @keyframes rocketAnimation {
      0%, 10%, 50% {
        opacity: 1;
      }
      0% {
        transform: rotate($rocket-rotate-deg) translateY(-.5em);
      }
      50% {
        transform: rotate($rocket-rotate-deg) translateX(.5em) translateY(-60em);
      }
      51% {
        opacity: 0;
      }
      100% {
        opacity: 0;
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
