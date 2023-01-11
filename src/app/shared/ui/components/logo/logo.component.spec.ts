import { LogoComponent } from './logo.component';
import { createComponentFactory, Spectator } from '@ngneat/spectator';

describe('LogoComponent', () => {
  let spectator: Spectator<LogoComponent>;
  const createComponent = createComponentFactory(LogoComponent);
  beforeEach(
    async () =>
      (spectator = createComponent({
        props: {
          name: 'test',
          logo: {
            url: '',
          },
        },
      }))
  );

  it('should create the LogoComponent', () => {
    expect(spectator.component).toBeTruthy();
  });
});
