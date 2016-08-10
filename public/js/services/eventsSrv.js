angular.module('fringeApp')
  .service('eventsSrv', function($http) {

    this.getEvents = function() {
      return $http({
        method: 'GET',
        url: '/api/events/'
      }).then(function(response) {
        return response.data;

      })
    }

    this.getEventById = function(id) {
      return $http({
        method: 'GET',
        url: '/api/events/' + id
      }).then(function(response) {
        return response.data;
      })
    }



  });
