export default class ExchangeService {
    constructor($http, $q) {
        'ngInject';
        this.$http = $http;
        this.$q = $q;

        this.exchangesRates = null;
        this.currenciesList = ["RUB", "EUR", "GBP", "JPY", "USD"];
        this.base = "USD"
    };

    getExchangeRates() {
        const defer = this.$q.defer();
        this.$http.get(`http://api.fixer.io/latest?base=${this.base}&symbols= ${this.currenciesList.join(",")}`).then((response) => {
            this.exchangesRates = response.data;
            defer.resolve(response.data);
        }).catch((response)=> {
            defer.reject(response);
        });
        return defer.promise;
    }

    concertCurrencyFromUsd(value, to) {
        return value * this.constructor.getCurrencyRate(to, this.exchangesRates.rates);
    }

    static getCurrencyRate(currency, rates) {
        for (let item in rates) {
            if (item == currency && rates.hasOwnProperty((item))) {
                return rates[item];
            }
        }
    }
}