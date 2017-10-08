import { ConverterStore } from './store';
import Currency from '../rates/Currency';

const usd = new Currency('USD');
const gbp = new Currency('GBP');

const mockRateStore = {
  rate: 2,
  fromCurrency: usd,
  toCurrency: gbp
};

const store = new ConverterStore(mockRateStore);

describe('Converter Store', () => {
  describe('When testing the default values', () => {
    it('Should have a from amount set to 1000 by default', () => {
      expect(store.fromAmount).toBe(1000);
    });

    it('Should have a to amount set null by default', () => {
      expect(store.toAmount).toBe(null);
    });

    it('Should have a computed from amount set to 1,000 by default', () => {
      expect(store.convertedFromAmount).toBe(1000);
    });

    it('Should have a computed to amount set to 2,000 by default (rate = 2)', () => {
      expect(store.convertedToAmount).toBe('2,000.00');
    });

    it('It should be left to right by default', () => {
      expect(store.isLeftToRight).toBeTruthy();
    });

    it('Should report the rate from the rate store', () => {
      expect(store.rate).toBe(2);
    });

    it('Should have the correct currencies', () => {
      expect(store.fromCurrency).toBe(usd);
      expect(store.toCurrency).toBe(gbp);
    });
  });

  describe('When changing the from amount', () => {
    beforeAll(() => {
      store.updateFromAmount(2000);
    });    

    it('Should have a from amount set to 2000', () => {
      expect(store.fromAmount).toBe(2000);
    });

    it('Should have a to amount set null', () => {
      expect(store.toAmount).toBe(null);
    });

    it('Should have a computed from amount set to 1,000', () => {
      expect(store.convertedFromAmount).toBe(2000);
    });

    it('Should have a computed to amount set to 4,000 (rate = 2)', () => {
      expect(store.convertedToAmount).toBe('4,000.00');
    });

    it('It should be left to right', () => {
      expect(store.isLeftToRight).toBeTruthy();
    });

    it('Should report the rate from the rate store', () => {
      expect(store.rate).toBe(2);
    });

    it('Should have the correct currencies', () => {
      expect(store.fromCurrency).toBe(usd);
      expect(store.toCurrency).toBe(gbp);
    });
  });

  describe('When changing the to amount', () => {
    beforeAll(() => {
      store.updateToAmount(2000);
    });    

    it('Should have a to amount set to 2000', () => {
      expect(store.toAmount).toBe(2000);
    });

    it('Should have a from amount set null', () => {
      expect(store.fromAmount).toBe(null);
    });

    it('Should have a computed from amount set to 1,000 (rate = 1 / 2)', () => {
      expect(store.convertedFromAmount).toBe('1,000.00');
    });

    it('Should have a computed to amount set to 2,000', () => {
      expect(store.convertedToAmount).toBe(2000);
    });

    it('It should be right to left', () => {
      expect(store.isLeftToRight).toBeFalsy();
    });

    it('Should report the rate from the rate store', () => {
      expect(store.rate).toBe(2);
    });

    it('Should have the correct currencies', () => {
      expect(store.fromCurrency).toBe(usd);
      expect(store.toCurrency).toBe(gbp);
    });
  });
});