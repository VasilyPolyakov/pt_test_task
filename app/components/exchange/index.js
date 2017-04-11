import angular from 'angular';
import {ExchangeComponent} from './exchange_component'
import ExchangeService from './exchange_service'

export default angular.module("exchange", []).component(ExchangeComponent.selector, ExchangeComponent).service('ExchangeService', ExchangeService).name;