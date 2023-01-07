import { CurrentDurationPipe } from './current-duration.pipe';

describe('DurationPipe', () => {
  it('create an instance', () => {
    const pipe = new CurrentDurationPipe();
    const valueToTest = '1';
    expect(pipe).toBeTruthy();
    expect(pipe.transform(valueToTest, true)).toEqual(
      valueToTest + ' (current)'
    );
    expect(pipe.transform(valueToTest, false)).toEqual(valueToTest);
  });
});
