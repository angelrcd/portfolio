import Typewriter from 'typewriter-effect/dist/core';

const typewriterText = document.querySelector(".typewriter-effect");

var typewriter = new Typewriter(typewriterText, {
  loop: true,
  delay: 50,
});

typewriter
  .pauseFor(100)
  .typeString('HTML')
  .pauseFor(1000)
  .deleteAll('natural')
  .typeString('CSS')
  .pauseFor(1000)
  .deleteAll('natural')
  .typeString('Javascript')
  .pauseFor(1000)
  .deleteAll('natural')
  .typeString('React')
  .pauseFor(1000)
  .deleteAll('natural')
  .typeString('C#')
  .pauseFor(1000)
  .deleteAll('natural')
  .typeString('NodeJS')
  .pauseFor(1000)
  .deleteAll('natural')
  .typeString('Azure')
  .pauseFor(1000)
  .deleteAll('natural')
  .start();