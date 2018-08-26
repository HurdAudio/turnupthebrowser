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
      }


    }

}());
