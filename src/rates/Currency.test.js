import Currency from './Currency';

describe('Currency Model', () => {
  it('Should instanciate correctly with the proper values', () => {
    const usd = new Currency('USD', 'US Dol', '$', 'us');
    expect(usd.iso).toBe('USD');
    expect(usd.name).toBe('US Dol');
    expect(usd.symbol).toBe('$');
    expect(usd.flag).toBe('us');
    expect(usd.rate).toBe(null);
  });

  it('should update the rate when calling the action', () => {
    const usd = new Currency('USD', 'US Dol', '$', 'us');
    usd.updateRate(1);
    expect(usd.rate).toBe(1);
    usd.updateRate(2.555);
    expect(usd.rate).toBe(2.555);
  });
});