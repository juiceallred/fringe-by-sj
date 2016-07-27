angular.module('fringeApp',['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('home',{
          url:'/',
          templateUrl: "../views/home.html"
        })
        .state('event',{
          url:'/events/:type',
          templateUrl: "..views/event.html",
          controller: 'eventsCtrl',
          controllerAs: 'vm'
        })
        .state('product',{
          url: '/products/:id',
          templateUrl: "..views/product.html",
          controller: 'productsCtrl',
          controllerAs: 'vm'
        })







      $urlRouterProvider
        .otherwise('/');
    })
