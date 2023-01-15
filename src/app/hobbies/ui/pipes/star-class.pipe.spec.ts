import { StarClassPipe } from './star-class.pipe';
import { createPipeFactory, SpectatorPipe } from '@ngneat/spectator';
import { Component } from '@angular/core';

@Component({
  template: ` <div>{{ stringify('test' | starClass : index) }}</div>`,
})
class CustomHostComponent {
  index: number = 1;

  stringify(val: any) {
    return JSON.stringify(val);
  }
}

describe('StarClassPipe', () => {
  let spectator: SpectatorPipe<StarClassPipe>;
  const createPipe = createPipeFactory({
    pipe: StarClassPipe,
    host: CustomHostComponent,
  });

  it('should return an object readable by ngClass', () => {
    spectator = createPipe();
    const pipeResult = JSON.parse(spectator.element.textContent || '');
    expect(pipeResult['test-star-1']).toBeTrue();
    expect(pipeResult['test-star-2']).toBeFalse();
    expect(pipeResult['test-stars']).toBeTrue();
    expect(pipeResult['star']).toBeTrue();
  });
  it('should return an object readable by ngClass', () => {
    spectator = createPipe({
      hostProps: {
        index: 2,
      },
    });
    const pipeResult = JSON.parse(spectator.element.textContent || '');
    expect(pipeResult['test-star-2']).toBeTrue();
    expect(pipeResult['test-star-1']).toBeFalse();
    expect(pipeResult['test-stars']).toBeTrue();
    expect(pipeResult['star']).toBeTrue();
  });
});
