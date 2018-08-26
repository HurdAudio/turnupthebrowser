(function() {
  'use strict';



  angular.module('app')
    .component('overview', {
      controller: OverviewController,
      templateUrl: '/js/overview/overview.template.html'
    });

    OverviewController.$inject = ['$http', '$state', '$stateParams'];

    function OverviewController($http, $state, $stateParams){
      const vm = this;

      vm.$onInit = onInit;


      function onInit() {
        console.log("Overview is lit");
      }


    }

}());
