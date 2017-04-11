import template from './exchange_template.html';
export const ExchangeComponent = {
    template: template,
    selector: 'exchangeComponent',
    controller: class ExchangeController {
        constructor(ExchangeService) {
            'ngInject';
            this.ExchangeService = ExchangeService;
        }

        $onInit() {
            this.ExchangeService.getExchangeRates().then((data) => {
                this.currencyExchangeTableData = data;
            });
        };
    }
};