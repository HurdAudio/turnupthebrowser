(function() {
  'use strict';

  var backItemProgress = 0;


  angular.module('app')
    .component('background', {
      controller: BackgroundController,
      templateUrl: '/js/background/background.template.html'
    });

    BackgroundController.$inject = ['$http', '$state', '$stateParams'];

    function BackgroundController($http, $state, $stateParams){
      const vm = this;

      vm.$onInit = onInit;


      function onInit() {
        console.log("Background is lit");

        let backItem1 = document.getElementById('backItem1');
        let backItem2 = document.getElementById('backItem2');
        let backItem3 = document.getElementById('backItem3');
        let backItem4 = document.getElementById('backItem4');
        let backItem5 = document.getElementById('backItem5');
        let backItem6 = document.getElementById('backItem6');
        backItemProgress = 0;

        document.addEventListener('keyup', (event)=>{
          switch(event.keyCode) {
            case(32):
              ++backItemProgress;
              switch(backItemProgress) {
                case(1):
                  backItem1.setAttribute("style", "opacity: 1; transition: opacity 0.5s linear;");
                  break;
                case(2):
                  backItem2.setAttribute("style", "opacity: 1; transition: opacity 0.5s linear;");
                  break;
                case(3):
                  backItem3.setAttribute("style", "opacity: 1; transition: opacity 0.5s linear;");
                  break;
                case(4):
                  backItem4.setAttribute("style", "opacity: 1; transition: opacity 0.5s linear;");
                  break;
                case(5):
                  backItem5.setAttribute("style", "opacity: 1; transition: opacity 0.5s linear;");
                  break;
                case(6):
                  backItem6.setAttribute("style", "opacity: 1; transition: opacity 0.5s linear;");
                  break;
                case(7):
                  $state.go('overview');
                default:
                  console.log('too much progress');
              }
              break;
            default:
              console.log('unsupported keystroke');
          }
        });
      }


    }

}());
