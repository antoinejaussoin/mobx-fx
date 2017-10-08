export default {
  fetchRates: () => {
    return fetch('https://api.fixer.io/latest?base=USD').then(response => {
      if (response.status >= 400) {
        throw new Error('Bad response');
      }
      return response.json();
    }).then(data => {
      return data.rates;
    });
  }
}
