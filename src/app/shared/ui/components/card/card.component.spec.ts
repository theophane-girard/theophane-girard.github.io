import { CardComponent } from './card.component';
import { createComponentFactory, Spectator } from '@ngneat/spectator';

describe('CardComponent', () => {
  let spectator: Spectator<CardComponent>;
  const createComponent = createComponentFactory(CardComponent);
  beforeEach(
    async () =>
      (spectator = createComponent({
        props: {
          topEdgeColor: 'green',
          backgroundColor: 'red',
          color: 'yellow',
          title: 'test-title',
          subtitle: 'test-subtitle',
          footer: 'test-footer',
          maxWidth: '10vw',
        },
      }))
  );

  it('should create the CardComponent', () => {
    expect(spectator.component).toBeTruthy();
    expect(spectator.query('[style*="border-top-color: green"]')).toBeTruthy();
    expect(spectator.query('[style*="color: yellow"]')).toBeTruthy();
    expect(spectator.query('[style*="background: red"]')).toBeTruthy();
    expect(spectator.query('[style*="max-width: 10vw"]')).toBeTruthy();
    expect(spectator.query('h2')).toHaveText('test-title');
    expect(spectator.query('h3')).toHaveText('test-subtitle');
    expect(spectator.query('p')).toHaveText('test-footer');
  });
});
