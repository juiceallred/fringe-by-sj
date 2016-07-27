angular.module('fringeApp',['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('home',{
          url:'/',
          templateUrl: "../views/home.html"
        })
        .state('events',{
          url:'/events/:id',
          templateUrl: "../views/events.html",
          controller: 'eventsCtrl',
          controllerAs: 'vm'
        })
        .state('products',{
          url: '/products/:id',
          templateUrl: "../views/product.html",
          controller: 'productsCtrl',
          controllerAs: 'vm'
        })







      $urlRouterProvider
        .otherwise('/');
    })
