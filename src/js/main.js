import angular from 'angular';
import 'angular-ui-router';
import Config from './config';

import UserController from './controllers/user'

angular
   .module('app', ['ui.router'])
   .config(Config)

   .controller('UserController', UserController);
