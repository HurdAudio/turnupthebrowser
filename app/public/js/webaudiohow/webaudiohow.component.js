(function() {
  'use strict';



  angular.module('app')
    .component('webaudiohow', {
      controller: WebAudioHowController,
      templateUrl: '/js/webaudiohow/webaudiohow.template.html'
    });

    WebAudioHowController.$inject = ['$http', '$state', '$stateParams'];

    function WebAudioHowController($http, $state, $stateParams){
      const vm = this;

      vm.$onInit = onInit;


      function onInit() {
        console.log("Web Audio How is lit");
        document.addEventListener('keyup', (event) => {
          switch(event.keyCode) {
            case(32):
              $state.go('webaudioexamples');
              break;
            case(39):
              $state.go('webaudioexamples');
              break;
            default:
              console.log('unhandled keystroke');
          }
        });
      }


    }

}());
