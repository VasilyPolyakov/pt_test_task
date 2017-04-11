import angular from 'angular';
import {BasketComponent} from './basket_component'

export default angular.module('basket', [])
    .component(BasketComponent.selector, BasketComponent).name;