import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FireComponent } from '../../ui/components/fire/fire.component';
import { TentComponent } from '../../ui/components/tent/tent.component';
import { GrassComponent } from '../../ui/components/grass/grass.component';
import { PineTreeComponent } from '../../ui/components/pine-tree/pine-tree.component';
import { CliffComponent } from '../../ui/components/cliff/cliff.component';
import { RelativeDirective } from '@shared/ui/directives/relative.directive';
import { AbsoluteDirective } from '@shared/ui/directives/absolute.directive';
import { ZIndexDirective } from '@shared/ui/directives/z-index.directive';

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
    ZIndexDirective,
  ],
  template: `
    <div id="scout-picture" relative>
      <cv-cliff absolute/>
      <cv-pine-tree
        *ngFor="let index of [1, 2, 3]"
        [attr.id]="'pine-tree-' + index"
        [skewDegree]="index % 2 ? 4 : -4"
        absolute
        zIndex="2"
      />
      <cv-tent zIndex="2" absolute/>
      <cv-fire zIndex="3" absolute/>
      <cv-grass id="grass-1" absolute/>
      <cv-grass id="grass-2" absolute/>
      <cv-grass id="grass-3" absolute/>
    </div>
  `,
  styleUrls: ['./scouting-picture.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScoutingPictureComponent {}
