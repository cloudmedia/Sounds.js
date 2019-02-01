// Sounds
var sndSilence = document.createElement('audio');
sndSilence.setAttribute('src', '/sounds/silence.mp3');
var sndIntro = document.createElement('audio');
sndIntro.setAttribute('src', '/sounds/intro.wav');
var sndType = document.createElement('audio');
sndType.setAttribute('src', '/sounds/type.wav');
var sndAlert1 = document.createElement('audio');
sndAlert1.setAttribute('src', '/sounds/alert1.wav');
var sndAlert2 = document.createElement('audio');
sndAlert2.setAttribute('src', '/sounds/alert2.wav');
var sndAlert3 = document.createElement('audio');
sndAlert3.setAttribute('src', '/sounds/alert3.wav');
var sndDing = document.createElement('audio');
sndDing.setAttribute('src', '/sounds/ding.wav');
var sndButton = document.createElement('audio');
sndButton.setAttribute('src', '/sounds/button.wav');
var sndMessage = document.createElement('audio');
sndMessage.setAttribute('src', '/sounds/message.wav');
var sndError = document.createElement('audio');
sndError.setAttribute('src', '/sounds/error.wav');
var sndSuccess = document.createElement('audio');
sndSuccess.setAttribute('src', '/sounds/success.wav');
var sndSlide = document.createElement('audio');
sndSlide.setAttribute('src', '/sounds/slide.wav');
var sndAHAHAH = document.createElement('audio');
sndAHAHAH.setAttribute('src', '/sounds/nedry.wav');

function playSound(snd)
{
  $('audio').each(function(){
    this.pause();
    this.currentTime = 0;
  });
  sndSilence.play();
  setTimeout(function(){
    snd.play();
  },100);
}
