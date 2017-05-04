angular.module("App", ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/');

       $stateProvider
           .state('home', {
               templateUrl: './views/home.html',
               controller: 'homeCtrl',
               url: '/'
           })
           .state('200', {
               templateUrl: './views/200.html',
               controller: 'ctrl200',
               url: '/200'
           })
           .state('300', {
               templateUrl: './views/300.html',
               controller: 'ctrl300',
               url: '/300'
           })
 });
