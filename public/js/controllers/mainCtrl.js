angular.module('fringeApp')
.controller('mainCtrl', function($scope, mainSrv, $location){

$scope.fringe = mainSrv.logo();

$scope.getEvents = function() {
  mainSrv.getEvents().then(function(response) {
    console.log(response);
    $scope.events = response;
  })

}

$scope.getEvents();


$scope.eventDetails = function(id) {

    $location.path('/events/' + id)
  }






});
