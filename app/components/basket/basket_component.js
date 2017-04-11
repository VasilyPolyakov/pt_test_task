import template from './basket_template.html';

export let BasketComponent = {
    template: template,
    selector: 'basketComponent',
    controller: class BasketController {
        constructor(ExchangeService) {
            'ngInit';
            this.ExchangeService = ExchangeService;

            this.selectedCart = [
                {price: 20},
                {price: 45},
                {price: 67},
                {price: 1305}
            ];
            this.totalCartPrice = {}
        }

        static getCartSum(selectedCart) {
            return selectedCart.reduce((sum, currentElem) => {
                return sum + currentElem.price;
            }, 0);
        }

        getTotalCartPrice() {
            const sum = this.constructor.getCartSum(this.selectedCart);
            this.ExchangeService.currenciesList.forEach((currency) => {
                if (currency == this.ExchangeService.base) {
                    this.totalCartPrice[currency] = sum;
                } else {
                    this.totalCartPrice[currency] = this.ExchangeService.concertCurrencyFromUsd(sum, currency);
                }
            });
        }
    }
};