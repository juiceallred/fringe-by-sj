angular.module('fringeApp')
.service('mainSrv', function($http, $q) {

  this.logo = function () {
    var image = '../img/logo_2.jpg'
    return image
  }

  this.getEvents = function() {
    return $http({
      method: 'GET',
      url: '/api/events/'
    }).then(function(response) {
      return response.data;

    })
  }

  this.getEventsById = function(id) {
    return $http({
      method: 'GET',
      url: '/api/events/' + id
    }).then(function(response) {
      return response.data;
    })
  }



});
