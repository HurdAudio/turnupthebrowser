(function() {
  'use strict';

  var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
  var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
  var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

  var colors = [ 'eephus' , 'hello' , 'what is eephus', 'play ball', 'black', 'blue', 'brown', 'chocolate', 'coral', 'crimson', 'cyan', 'fuchsia', 'ghostwhite', 'gold', 'goldenrod', 'gray', 'green', 'indigo', 'ivory', 'khaki', 'lavender', 'lime', 'linen', 'magenta', 'maroon', 'moccasin', 'navy', 'olive', 'orange', 'orchid', 'peru', 'pink', 'plum', 'purple', 'red', 'salmon', 'sienna', 'silver', 'snow', 'tan', 'teal', 'thistle', 'tomato', 'turquoise', 'violet', 'white', 'yellow'];

  var grammar = '#JSGF V1.0; grammar colors; public <color> = ' + colors.join(' | ') + ' ;';

  var recognition = new SpeechRecognition();
  var speechRecognitionList = new SpeechGrammarList();
  speechRecognitionList.addFromString(grammar, 1);
  recognition.grammars = speechRecognitionList;
  //recognition.continuous = false;
  recognition.lang = 'en-US';
  recognition.interimResults = false;
  recognition.maxAlternatives = 3;

  angular.module('app')
    .component('landing', {
      controller: TitleController,
      templateUrl: '/js/title/title.template.html'
    });

    TitleController.$inject = ['$http', '$state', '$stateParams'];

    function TitleController($http, $state, $stateParams){
      const vm = this;

      vm.$onInit = onInit;



      function spokenOutput (str) {
        let u = new SpeechSynthesisUtterance();
        let synth = window.speechSynthesis;
        u.text = str;
        u.lang = 'en-US';
        u.rate = 0.81;
        //  u.voice = voices[0];
        u.onend = function(event) {
         setTimeout(function() {
           console.log(str);
         });
       };
        speechSynthesis.speak(u);
      }

      recognition.onresult = function(event) {
        recognition.stop();
        var last = event.results.length - 1;
        var color = event.results[last][0].transcript;
        var spokenString = "";

        switch (color) {
          case ("hello"):
            spokenString += "Welcome to Turn Up the Browser. A Tech Tuesday presentation for Rural Sourcing Albuquerque by Devin Hurd.";
            break;
          case ("find a seat"):
            spokenString += "That is where the chairs are.";
            break;
          case ("why did the chicken cross the road"):
            spokenString += "To get to the other side. ... Good lord, this guy tells some fowl Dad jokes sometimes.";
            break;
          default:
            spokenString += "...";
            // recognition.start();
        }
        spokenOutput(spokenString);


        // spokenOutput('Result received: ' + color + '.');
        // spokenOutput('Confidence: ' + event.results[0][0].confidence);
      };

      recognition.onspeechend = function() {
        recognition.stop();
        onInit();
      };


      function onInit() {
        console.log("Title is lit");



        let t = document.getElementById('Turn');
        let u = document.getElementById('tUrn');
        let r = document.getElementById('tuRn');
        let n = document.getElementById('turN');

        document.body.addEventListener('click', ()=>{
          recognition.start();
        });

        t.addEventListener('mouseover', ()=>{
          t.setAttribute("style", "transform: rotateZ(-5deg); transition: all 0.5s linear;");
        });
        t.addEventListener('mouseout', ()=>{
          t.setAttribute("style", "transform: rotateZ(5deg); transition: all 0.5s linear;");
        });
        u.addEventListener('mouseover', ()=>{
          u.setAttribute("style", "transform: rotateZ(-15deg); transition: all 0.5s linear;");
        });
        u.addEventListener('mouseout', ()=>{
          u.setAttribute("style", "transform: rotateZ(15deg); transition: all 0.5s linear;");
        });
        r.addEventListener('mouseover', ()=>{
          r.setAttribute("style", "transform: rotateZ(-25deg); transition: all 0.5s linear;");
        });
        r.addEventListener('mouseout', ()=>{
          r.setAttribute("style", "transform: rotateZ(25deg); transition: all 0.5s linear;");
        });
        n.addEventListener('mouseover', ()=>{
          n.setAttribute("style", "transform: rotateZ(-35deg); transition: all 0.5s linear;");
        });
        n.addEventListener('mouseout', ()=>{
          n.setAttribute("style", "transform: rotateZ(35deg); transition: all 0.5s linear;");
        });


      }

    }

}());
