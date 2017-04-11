import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './assets/common.css'
import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from './app.routing';
import basket from './components/basket/index';
import exchange from './components/exchange/index';

angular.module('app', [uirouter, basket, exchange])
    .config(routing);