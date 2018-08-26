(function() {
  'use strict';



  angular.module('app')
    .component('introduction', {
      controller: IntroductionController,
      templateUrl: '/js/introduction/introduction.template.html'
    });

    IntroductionController.$inject = ['$http', '$state', '$stateParams'];

    function IntroductionController($http, $state, $stateParams){
      const vm = this;

      vm.$onInit = onInit;


      function onInit() {
        console.log("Introduction is lit");
        let itemProgress = 0;

        let introItem1 = document.getElementById('introItem1');
        let introItem2 = document.getElementById('introItem2');
        let introItem3 = document.getElementById('introItem3');
        let introItem4 = document.getElementById('introItem4');

        document.addEventListener('keyup', (event)=>{
          switch(event.keyCode) {
            case (32):
              ++itemProgress;
              switch(itemProgress) {
                case (1):
                  introItem1.setAttribute("style", "opacity: 1; transition: opacity 0.5s linear;");
                  break;
                case (2):
                  introItem2.setAttribute("style", "opacity: 1; transition: opacity 0.5s linear;");
                  break;
                case (3):
                  introItem3.setAttribute("style", "opacity: 1; transition: opacity 0.5s linear;");
                  break;
                case (4):
                  introItem4.setAttribute("style", "opacity: 1; transition: opacity 0.5s linear;");
                  break;
                default:
                  console.log('too much progress');
              }
              break;
            case (37):
              if (itemProgress > 0) {
                switch(itemProgress) {
                  case (1):
                    introItem1.setAttribute("style", "opacity: 0; transition: opacity 0.5s linear;");
                    break;
                  case (2):
                    introItem2.setAttribute("style", "opacity: 0; transition: opacity 0.5s linear;");
                    break;
                  case (3):
                    introItem3.setAttribute("style", "opacity: 0; transition: opacity 0.5s linear;");
                    break;
                  case (4):
                    introItem4.setAttribute("style", "opacity: 0; transition: opacity 0.5s linear;");
                    break;
                  default:
                    console.log('too much progress');
                }
                --itemProgress;
                break;
              }
              break;
            default:
              console.log('unsupported keystroke');
          }
        });

      }

    }

}());
