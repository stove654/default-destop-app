'use strict';

/**
 * @ngdoc overview
 * @name stoveApp
 * @description
 * # stoveApp
 *
 * Main module of the application.
 */
angular
  .module('stoveApp', [
    'ngSanitize',
    'ngTouch',
    'ionic',
    'ui.bootstrap',
    'pascalprecht.translate',
    'LocalStorageModule'
  ]);
