angular.module("App", ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/');

       $stateProvider
           .state('home', {
               templateUrl: '../views/home.html',
               controller: 'homeCtrl',
               url: '/'
           })
           .state('200', {
               templateUrl: '../views/200.html',
               controller: '200Ctrl',
               url: '/200'
           })
           .state('300', {
               templateUrl: '../views/300.html',
               controller: '300Ctrl',
               url: '/300'
           })
 });
