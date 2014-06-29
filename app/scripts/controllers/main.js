'use strict';

/**
 * @ngdoc function
 * @name angularmadApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularmadApp
 */
angular.module('angularmadApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
