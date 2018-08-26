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

        document.addEventListener('keyup', (event) => {
          switch(event.keyCode) {
            case (32):
              $state.go('webaudiowhat');
              break;
            case (39):
              $state.go('webaudiowhat');
              break;
            default:
              console.log('unhandled key stroke');
          }
        });
      }


    }

}());
