angular.module('fringeApp')
.controller('mainCtrl', function($scope, mainSrv){

$scope.fringe = mainSrv.logo();








});
