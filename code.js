var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["4fb43ba1-487c-4eb0-94b2-e1c202a990de","099c79bb-628e-4f6e-8325-17e37b4a43be","9e212da9-4136-4161-998c-88353d819512","93ca4d4b-74c1-47fd-8c12-3a2e39fdf88d","fe60b0b0-e755-4bc7-be69-af81cd4ca335"],"propsByKey":{"4fb43ba1-487c-4eb0-94b2-e1c202a990de":{"name":"aluno11","sourceUrl":null,"frameSize":{"x":40,"y":40},"frameCount":1,"looping":true,"frameDelay":12,"version":"LtvZ.BMrcchJCla99phamROELoKonjPh","loadedFromSource":true,"saved":true,"sourceSize":{"x":40,"y":40},"rootRelativePath":"assets/4fb43ba1-487c-4eb0-94b2-e1c202a990de.png"},"099c79bb-628e-4f6e-8325-17e37b4a43be":{"name":"pessoadeprimente","sourceUrl":null,"frameSize":{"x":40,"y":40},"frameCount":1,"looping":true,"frameDelay":12,"version":"U2sm2SldProC9PcuVF1nzlOR2OEtaT.e","loadedFromSource":true,"saved":true,"sourceSize":{"x":40,"y":40},"rootRelativePath":"assets/099c79bb-628e-4f6e-8325-17e37b4a43be.png"},"9e212da9-4136-4161-998c-88353d819512":{"name":"pessoairritante","sourceUrl":null,"frameSize":{"x":40,"y":40},"frameCount":1,"looping":true,"frameDelay":12,"version":".8NDUzXoh8ydybn.zRrqQQkNJCLNAk7V","loadedFromSource":true,"saved":true,"sourceSize":{"x":40,"y":40},"rootRelativePath":"assets/9e212da9-4136-4161-998c-88353d819512.png"},"93ca4d4b-74c1-47fd-8c12-3a2e39fdf88d":{"name":"pessoaenxerida","sourceUrl":null,"frameSize":{"x":40,"y":40},"frameCount":1,"looping":true,"frameDelay":12,"version":"hOv.Mrs.hQR022HYGMXYP9Sn3O1KVjlx","loadedFromSource":true,"saved":true,"sourceSize":{"x":40,"y":40},"rootRelativePath":"assets/93ca4d4b-74c1-47fd-8c12-3a2e39fdf88d.png"},"fe60b0b0-e755-4bc7-be69-af81cd4ca335":{"name":"pessoaautoritaria","sourceUrl":null,"frameSize":{"x":40,"y":40},"frameCount":1,"looping":true,"frameDelay":12,"version":"82VpQA9EPjAHlZeqCyv3K81juJOOBZk9","loadedFromSource":true,"saved":true,"sourceSize":{"x":40,"y":40},"rootRelativePath":"assets/fe60b0b0-e755-4bc7-be69-af81cd4ca335.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var life = 3;
var pessoadeprimente, pessoairritante, pessoaenxerida,pessoaautoritaria;
var boundary1, boundary2;
var aluno1;

  boundary1 = createSprite(190,120,420,3);
  boundary2 = createSprite(190,260,420,3);
  
  aluno1 = createSprite(20,190,13,13);
  aluno1.shapeColor = "green";
  aluno1.setAnimation("aluno11") ;
  aluno1.scale = 0.5 ;
  
  
  pessoadeprimente = createSprite(100,130,10,10);
  pessoadeprimente.shapeColor = "red";
  pessoadeprimente.setAnimation("pessoadeprimente") ;
  pessoadeprimente.scale = 0.5 ;
  
  pessoairritante = createSprite(215,130,10,10);
  pessoairritante.shapeColor = "red";
  pessoairritante.setAnimation("pessoairritante") ;
  pessoairritante.scale = 0.5 ;
  
  pessoaenxerida = createSprite(165,250,10,10);
  pessoaenxerida.shapeColor = "red";
  pessoaenxerida.setAnimation("pessoaenxerida") ;
  pessoaenxerida.scale = 0.5 ;
  
  pessoaautoritaria = createSprite(270,250,10,10);
  pessoaautoritaria.shapeColor = "red";
  pessoaautoritaria.setAnimation("pessoaautoritaria") ;
  pessoaautoritaria.scale = 0.5 ;
  
  
  pessoadeprimente.velocityY = 4 ;
  pessoairritante.velocityY = 4 ;
  pessoaenxerida.velocityY = 4 ;
  pessoaautoritaria.velocityY = 4 ;

var gameState = "start" ;

function draw() {
   background("white");
  text("Vidas: " + life,200,100);
  strokeWeight(0);
  fill("grey");
  rect(0,120,52,140);
  fill("SkyBlue") ;
  rect(345,120,52,140);
  
  pessoadeprimente.bounceOff(boundary1) ;
  pessoadeprimente.bounceOff(boundary2) ;
  
  pessoairritante.bounceOff(boundary1) ;
  pessoairritante.bounceOff(boundary2) ;
  
  pessoaenxerida.bounceOff(boundary1) ;
  pessoaenxerida.bounceOff(boundary2) ;
  
  pessoaautoritaria.bounceOff(boundary1) ;
  pessoaautoritaria.bounceOff(boundary2) ;

  if (gameState === "start") {
    if (keyDown("right")) {
  
  aluno1.x = aluno1.x +3 ;
  
  }

  if (keyDown("left")) {
    
    aluno1.x = aluno1.x -3 ;
    
  }
  }

  
  if (aluno1.isTouching(pessoadeprimente)) {
    life-- ;
    aluno1.x = 20 ;
    aluno1.y = 190 ;
  }
  
    if (aluno1.isTouching(pessoairritante)) {
    life-- ;
    aluno1.x = 20 ;
    aluno1.y = 190 ;
  }
  
    if (aluno1.isTouching(pessoaenxerida)) {
    life-- ;
    aluno1.x = 20 ;
    aluno1.y = 190 ;
  }
  
  if (aluno1.isTouching(pessoaautoritaria)) {
    life-- ;
    aluno1.x = 20 ;
    aluno1.y = 190 ;
    
  }
  
  if (life === 0) {
  gameState = "end" ;
  }
  
  
  if (gameState === "end") {
    
  textFont("serif3");textFont("serif3");
  textSize(50);
  fill("black");
  text("game over!", 90, 300) ;
    
  pessoadeprimente.velocityY = 0 ;
  pessoairritante.velocityY = 0 ;
  pessoaenxerida.velocityY = 0 ;
  pessoaautoritaria.velocityY = 0 ;
    
  }
  
  
  
  
  
// crie a função rebater, para fazer o carro rebater nos limites
//Adicione a condição para fazer Sam se mover para a esquerda e para a direita
//Adicione a condição para reduzir a vida de Sam quando ele encostar no carro.
  
 drawSprites();
}







// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
