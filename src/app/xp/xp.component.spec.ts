import { XpComponent } from './xp.component';
import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { TIMELINE } from './data/timeline.mock';

describe('XpComponent', () => {
  let spectator: Spectator<XpComponent>;
  const createComponent = createComponentFactory(XpComponent);
  beforeEach(
    async () =>
      (spectator = createComponent({
        props: {
          timelineSections: TIMELINE,
        },
      }))
  );

  it('should create the xp component', () => {
    expect(spectator.component).toBeTruthy();
  });

  it('should add description meta tag on Init', () => {
    const stringToCompare =
      'Currently working at Sogeti - Capgemini as Fullstack developer';
    const selector = `meta[content="${stringToCompare}"]`;
    expect(document.querySelector(selector)).toBeTruthy();
  });
});
