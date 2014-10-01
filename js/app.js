angular.module('EmailApp', ['ngRoute']).config(function ( $routeProvider ) {
  $routeProvider
  .when('/inbox', {
    templateUrl: 'views/inbox.html',
    controller: 'InboxCtrl',
    controllerAs: 'inbox'
  })
  .when('/inbox/email/:id', {
    templateUrl: 'views/email.html',
    controller: 'EmailCtrl',
    cotrollerAs: 'email'
  })
  .otherwise({
    redirectTo: '/inbox'
  });
});