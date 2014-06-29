'use strict';

/**
 * @ngdoc function
 * @name angularmadApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularmadApp
 */
angular.module('angularmadApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
