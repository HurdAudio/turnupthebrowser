(function() {
  'use strict';
  const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  var modulationToggle = false;
  var modulatorAttenuator = audioContext.createGain();



  angular.module('app')
    .component('webaudioexamples', {
      controller: WebAudioExamplesController,
      templateUrl: '/js/webaudioexamples/webaudioexamples.template.html'
    });

    WebAudioExamplesController.$inject = ['$http', '$state', '$stateParams'];

    function WebAudioExamplesController($http, $state, $stateParams){
      const vm = this;

      vm.$onInit = onInit;

      function initializeGainModule() {
        let gain = audioContext.createGain();
        gain.gain.value = 0;
        gain.connect(audioContext.destination);

        return(gain);
      }

      function initializeOscillator(gain) {
        let oscillator = audioContext.createOscillator();
        oscillator.frequency.setValueAtTime(440, audioContext.currentTime);
        oscillator.detune.setValueAtTime(0, audioContext.currentTime);
        oscillator.type = 'sine';
        oscillator.connect(gain);
        oscillator.start();

        return(oscillator);
      }

      function initializeModulator(gain, wave, frequency) {
        let modulator = audioContext.createOscillator();
        modulatorAttenuator.gain.value = gain.gain.value;
        modulator.frequency.setValueAtTime(frequency, audioContext.currentTime);
        modulator.detune.setValueAtTime(0, audioContext.currentTime);
        modulator.type = wave;
        modulator.connect(modulatorAttenuator);
        modulatorAttenuator.connect(gain.gain);
        modulator.start();

        return(modulator);
      }


      function onInit() {
        console.log("Web Audio Examples is lit");

        let gainModule = initializeGainModule();
        let oscillatorModule = initializeOscillator(gainModule);
        let modulator = null;

        let gainDisplay = document.getElementById('gainDisplay');
        let gainVolume = document.getElementById('gainVolume');
        let pitchOscWaveformSelector = document.getElementById('pitchOscWaveformSelector');
        let oscillatorFrequency = document.getElementById('oscillatorFrequency');
        let oscillatorFrequencySlider = document.getElementById('oscillatorFrequencySlider');
        let oscillatorDetune = document.getElementById('oscillatorDetune');
        let oscillatorDetuneSlider = document.getElementById('oscillatorDetuneSlider');
        let modulationToggleButton = document.getElementById('modulationToggleButton');
        let modulatorWaveformSelect = document.getElementById('modulatorWaveformSelect');
        let modulatorFrequency = document.getElementById('modulatorFrequency');
        let modulatorFrequencySlider = document.getElementById('modulatorFrequencySlider');
        let modulatorDetune = document.getElementById('modulatorDetune');
        let modulatorDetuneSlider = document.getElementById('modulatorDetuneSlider');

        gainDisplay.addEventListener('change', () => {
          gainModule.gain.value = ((parseInt(gainDisplay.value)) / 100);
          modulatorAttenuator.gain.value = ((parseInt(gainDisplay.value)) / 100);
        });
        gainVolume.addEventListener('mousemove', () => {
          gainModule.gain.value = ((parseInt(gainDisplay.value)) / 100);
          modulatorAttenuator.gain.value = ((parseInt(gainDisplay.value)) / 100);
        });

        pitchOscWaveformSelector.addEventListener('change', () => {
          oscillatorModule.type = pitchOscWaveformSelector.value;
        });
        oscillatorFrequency.addEventListener('change', () => {
          oscillatorModule.frequency.value = oscillatorFrequency.value;
        });
        oscillatorFrequencySlider.addEventListener('mousemove', () => {
          oscillatorModule.frequency.value = oscillatorFrequency.value;
        });
        oscillatorDetune.addEventListener('change', () => {
          oscillatorModule.detune.value = oscillatorDetune.value;
        });
        oscillatorDetuneSlider.addEventListener('mousemove', () => {
          oscillatorModule.detune.value = oscillatorDetune.value;
        });

        modulationToggleButton.addEventListener('click', () => {
          modulationToggle = !modulationToggle;
          if (modulationToggle) {
            modulationToggleButton.setAttribute("style", "background: #65EDC0;");
            modulator = initializeModulator(gainModule, modulatorWaveformSelect.value, modulatorFrequency.value);
          } else {
            modulationToggleButton.setAttribute("style", "background: grey;");
            modulator.frequency.value = 0;
            modulator.stop();
            modulator = null;
          }
        });
        modulatorWaveformSelect.addEventListener('change', () => {
          if (modulationToggle) {
            modulator.type = modulatorWaveformSelect.value;
          }
        });
        modulatorFrequency.addEventListener('change', () => {
          if (modulationToggle) {
            modulator.frequency.value = modulatorFrequency.value;
          }
        });
        modulatorFrequencySlider.addEventListener('mousemove', () => {
          if (modulationToggle) {
            modulator.frequency.value = modulatorFrequency.value;
          }
        });
        modulatorDetune.addEventListener('change', () => {
          if (modulationToggle) {
            modulator.detune.value = modulatorDetune;
          }
        });
        modulatorDetuneSlider.addEventListener('mousemove', () => {
          if (modulationToggle) {
            modulator.detune.value = modulatorDetune;
          }
        });

      }


    }

}());
