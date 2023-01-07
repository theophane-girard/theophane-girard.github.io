import { EmPipe } from './em.pipe';

describe('EmPipe', () => {
  it('create an instance', () => {
    const pipe = new EmPipe();
    expect(pipe).toBeTruthy();
    expect(pipe.transform(12)).toEqual('12em');
    expect(pipe.transform(0)).toEqual('auto');
    expect(pipe.transform(Number(false))).toEqual('auto');
    expect(pipe.transform(Number(null))).toEqual('auto');
    expect(pipe.transform(Number(undefined))).toEqual('auto');
    expect(pipe.transform(Number(0))).toEqual('auto');
  });
});
