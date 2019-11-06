import { TaxPipe } from './tax.pipe';

describe('TaxPipe', () => {
  it('create an instance', () => {
    const pipe = new TaxPipe();
    expect(pipe).toBeTruthy();
  });
  it('calculate tax', () => {
    const pipe = new TaxPipe();
    const tax = pipe.transform(1000, 0.10, 0.10);
    expect(tax).toEqual(200);
  });
  it('no tax', () => {
    const pipe = new TaxPipe();
    const tax = pipe.transform(1000, 0.0, 0.10);
    expect(tax).toEqual(100);
  });
  it('no duty', () => {
    const pipe = new TaxPipe();
    const tax = pipe.transform(1000, 0.10, 0.0);
    expect(tax).toEqual(100);
  });
  it('no tax or duty', () => {
    const pipe = new TaxPipe();
    const tax = pipe.transform(1000, 0.0, 0.0);
    expect(tax).toEqual(0);
  });
});
