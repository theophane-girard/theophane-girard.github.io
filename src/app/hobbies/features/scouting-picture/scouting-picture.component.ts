import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FireComponent } from '../../ui/components/fire/fire.component';
import { TentComponent } from '../../ui/components/tent/tent.component';
import { GrassComponent } from '../../ui/components/grass/grass.component';
import { PineTreeComponent } from '../../ui/components/pine-tree/pine-tree.component';
import { CliffComponent } from '../../ui/components/cliff/cliff.component';
import { RelativeDirective } from '@shared/ui/directives/relative.directive';
import { AbsoluteDirective } from '@shared/ui/directives/absolute.directive';

@Component({
  selector: 'cv-scouting-picture',
  standalone: true,
  imports: [
    CommonModule,
    FireComponent,
    TentComponent,
    GrassComponent,
    PineTreeComponent,
    CliffComponent,
    RelativeDirective,
    AbsoluteDirective,
  ],
  template: `
    <div id="scout-picture" relative>
      <cv-fire class="z-index-3" absolute></cv-fire>
      <cv-tent class="z-index-2" absolute></cv-tent>
      <cv-grass id="grass-1" class="z-index-3" absolute></cv-grass>
      <cv-grass id="grass-2" class="z-index-3" absolute></cv-grass>
      <cv-grass id="grass-3" class="z-index-3" absolute></cv-grass>
      <cv-pine-tree
        *ngFor="let index of [1, 2, 3]"
        [attr.id]="'pine-tree-' + index"
        [skewDegree]="index % 2 ? 4 : -4"
        class="z-index-2"
        absolute
      ></cv-pine-tree>
      <cv-cliff class="z-index-1" absolute></cv-cliff>
    </div>
  `,
  styleUrls: ['./scouting-picture.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScoutingPictureComponent {}
