angular.module('fringeApp')
  .controller('eventsCtrl', function($scope, eventsSrv, mainSrv, $stateParams) {

    $scope.getOneEvent = function() {
      mainSrv.getEventsById($stateParams.id).then(function(response) {
      console.log(response);
      $scope.event = response

    })
  }

    $scope.getOneEvent();



    

  })
