import { ExchangeRateStore } from './store';

const mockApi = {
  fetchRates: () => {
    return new Promise(resolve => {
      resolve({
        'EUR': 1.1,
        'GBP': 1.2
      })
    })
  }
}

const store = new ExchangeRateStore(mockApi);

describe('Rates Store', () => {
  describe('When the store has default values', () => {
    it('Should have the list of currencies', () => {
      expect(store.currencies[0].iso).toBe('GBP');
      expect(store.currencies[1].iso).toBe('EUR');
      expect(store.currencies[2].iso).toBe('USD');
    });

    it('Should by default have GBP as the from currency', () => {
      expect(store.fromCurrency).toBe(store.currencies[0]);
    });

    it('Should by default have EUR as the to currency', () => {
      expect(store.toCurrency).toBe(store.currencies[1]);
    });

    it('Should by default have a null rate since the data is not loaded yet', () => {
      expect(store.rate).toBeNull();
    });

    it('Should by default not be pending', () => {
      expect(store.pending).toBe(false);
    });
  });

  describe('When the store has its data loaded', () => {
    beforeAll(done => {
      store.fetchRates()
        .then(() => {
          expect(store.pending).toBe(false);
          done();
        });
      expect(store.pending).toBe(true);
    });

    it('Should by default have a rate of 1.1 over 1.2', () => {
      expect(store.rate).toBe(1.1 / 1.2);
    });

    it('Should by default not be pending', () => {
      expect(store.pending).toBe(false);
    });
  });
});