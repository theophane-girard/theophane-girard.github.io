import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbsoluteDirective } from '@shared/ui/directives/absolute.directive';
import { RelativeDirective } from '@shared/ui/directives/relative.directive';

@Component({
  selector: 'cv-flames',
  standalone: true,
  imports: [CommonModule, AbsoluteDirective, RelativeDirective],
  template: `
      <div class="flames" absolute>
        @for (fire of fires; track fire) {
          <div class="fire" absolute></div>
        }
      </div>
  `,
  styles: `
  @use '../../../../../assets/global';
  $container-width: global.$fire-width;
$big-fire-width: 4em;
$animation-time: 1.5s;
.flames {
  transform: rotate(225deg);
  width: $container-width * 0.5;
  height: $container-width * 0.5;
  left: global.centerElementFromParent($container-width, $container-width * 0.5);
  top: global.centerElementFromParent($container-width, $container-width * 0.5);
}

.fire {
  border-radius: 1em;

  &:nth-child(2n + 1) {
    animation: oddFlameAnimation $animation-time ease-in infinite;
  }

  &:nth-child(2n) {
    animation: evenFlameAnimation $animation-time ease-in infinite;
  }

  &:nth-child(1) {
    animation-delay: 0s;
  }

  &:nth-child(2) {
    animation-delay: $animation-time*0.25;
  }

  &:nth-child(3) {
    animation-delay: $animation-time*0.25 * 2;
  }

  &:nth-child(4) {
    animation-delay: $animation-time*0.25 * 3;
  }
}

@keyframes oddFlameAnimation {
  0%,
  100% {
    width: 0;
    height: 0;
    background-color: yellow;
    z-index: 9;
  }
  25% {
    width: $big-fire-width;
    height: $big-fire-width;
    top: 0.1em;
    left: 0.1em;
  }
  40% {
    background: orange;
    z-index: 9;
  }
  100% {
    width: 0;
    height: 0;
    background: rgb(248, 103, 6);
    top: 10em;
    left: 12em;
    z-index: 1;
  }
}

@keyframes evenFlameAnimation {
  0%,
  100% {
    width: 0;
    height: 0;
    background-color: yellow;
    z-index: 9;
  }
  25% {
    width: $big-fire-width;
    height: $big-fire-width;
    top: 0.1em;
    left: 0.1em;
  }
  40% {
    background: orange;
    z-index: 9;
  }
  100% {
    width: 0;
    height: 0;
    background: rgb(248, 103, 6);
    top: 10em;
    left: 9em;
    z-index: 1;
  }
}

  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlamesComponent {
  fires = new Array(4);
}
