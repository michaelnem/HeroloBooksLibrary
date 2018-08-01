import { OnlyEnglishPipe } from './only-english.pipe';

describe('OnlyEnglishPipe', () => {
  it('create an instance', () => {
    const pipe = new OnlyEnglishPipe();
    expect(pipe).toBeTruthy();
  });
});
