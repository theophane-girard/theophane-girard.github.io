import { createComponentFactory, Spectator } from '@ngneat/spectator';

import { ProgressLineComponent } from './progress-line.component';

describe('ProgressLineComponent', () => {
  let spectator: Spectator<ProgressLineComponent>;
  const createComponent = createComponentFactory(ProgressLineComponent);
  beforeEach(async () => (spectator = createComponent()));

  it('should create the ProgressLineComponent', () => {
    expect(spectator.component).toBeTruthy();
  });

  it('should be hidden', () => {
    expect(spectator.query('.animation-running')).toBeFalsy();
  });

  it('should be hidden at first render and should be visible when visible$ emit value', () => {
    expect(spectator.query('.animation-running')).toBeFalsy();
    spectator.component.visible$.next(true);
    spectator.detectComponentChanges();
    expect(spectator.query('.animation-running')).toBeTruthy();
  });
});
