import { XpSectionComponent } from './xp-section.component';
import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { TIMELINE } from '../../../data/timeline.mock';

describe('XpSectionComponent', () => {
  let spectator: Spectator<XpSectionComponent>;
  const createComponent = createComponentFactory(XpSectionComponent);
  beforeEach(
    async () =>
      (spectator = createComponent({
        props: {
          timelineSection: TIMELINE[0],
        },
      }))
  );

  it('should create the XpSectionComponent', () => {
    expect(spectator.component).toBeTruthy();
  });

  it('should have hidden section but first at load and should display ', () => {
    expect(spectator.component).toBeTruthy();
    expect(spectator.query('.visible')).toBeFalsy();
    spectator.component.visible$.next(true);
    spectator.detectComponentChanges();
    expect(spectator.query('.visible')).toBeTruthy();
  });
  it('should have hidden section but first at load and should display ', () => {
    expect(spectator.component).toBeTruthy();
    spectator.component.isFirst = true;
    spectator.detectComponentChanges();
    expect(spectator.query('.visible')).toBeTruthy();
    spectator.component.visible$.next(true);
    spectator.detectComponentChanges();
    expect(spectator.query('.visible')).toBeTruthy();
  });
});
