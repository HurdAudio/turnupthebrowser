(function() {
  'use strict';

  angular.module('app')
    .config(config);

  config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

  function config($stateProvider, $urlRouterProvider, $locationProvider){

    $locationProvider.html5Mode(true);

    $stateProvider
      .state({
        name: 'app',
        abstract: true,
        component: 'app',
      })
      .state({
        name: 'landing',
        url: '/',
        parent: 'app',
        component: 'landing'
      })
      .state({
        name: 'introduction',
        url: '/introduction',
        parent: 'app',
        component: 'introduction'
      })
      .state({
        name: 'background',
        url: '/background',
        parent: 'app',
        component: 'background'
      })
      .state({
        name: 'overview',
        url: '/overview',
        parent: 'app',
        component: 'overview'
      })
      .state({
        name: 'webaudiowhat',
        url: '/webaudiowhat',
        parent: 'app',
        component: 'webaudiowhat'
      })
      .state({
        name: 'webaudiohow',
        url: '/webaudiohow',
        parent: 'app',
        component: 'webaudiohow'
      })
      .state({
        name: 'webaudioexamples',
        url: '/webaudioexamples',
        parent: 'app',
        component: 'webaudioexamples'
      });


  }

}());
