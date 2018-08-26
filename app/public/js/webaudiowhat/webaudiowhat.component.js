(function() {
  'use strict';



  angular.module('app')
    .component('webaudiowhat', {
      controller: WebAudioWhatController,
      templateUrl: '/js/webaudiowhat/webaudiowhat.template.html'
    });

    WebAudioWhatController.$inject = ['$http', '$state', '$stateParams'];

    function WebAudioWhatController($http, $state, $stateParams){
      const vm = this;

      vm.$onInit = onInit;


      function onInit() {
        console.log("Web Audio What is lit");

        document.addEventListener('keyup', (event) => {
          switch(event.keyCode) {
            case(32):
              $state.go('webaudiohow');
              break;
            case(39):
              $state.go('webaudiohow');
              break;
            default:
              console.log('unhandled keystroke');
          }
        });
      }


    }

}());
