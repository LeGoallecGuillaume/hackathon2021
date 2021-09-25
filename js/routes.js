angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('menu.25921', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/25921.html',
        controller: '25921Ctrl'
      }
    }
  })

  .state('menu.dTails', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/dTails.html',
        controller: 'dTailsCtrl'
      }
    }
  })

  .state('menu.cloud', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/cloud.html',
        controller: 'cloudCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

$urlRouterProvider.otherwise('/side-menu21/page1')


});