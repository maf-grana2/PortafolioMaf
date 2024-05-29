let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Aquí, una mercadóloga que se convierte en desarrolladora front-end')
  .pauseFor(200)
  .deleteChars(10)
  .start();
