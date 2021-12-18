var fundo,arco,flecha;
var img_fundo,img_arco,img_flecha; 
var img_vermelho,img_azul,img_rosa,img_verde;
var vermelho,azul,verde,rosa;
var grupo_flecha,grupo_vermelhoB,grupo_azulB,grupo_verdeB,grupo_rosaB;
var placar=0;
function preload(){
 
  img_fundo = loadImage("background0.png");
  img_arco = loadImage("bow0.png");
  img_vermelho = loadImage("red_balloon0.png");
  img_azul = loadImage("blue_balloon0.png");
  img_verde = loadImage("green_balloon0.png");
  img_rosa = loadImage("pink_balloon0.png");
  img_flecha = loadImage("arrow0.png");
}



function setup() {
  createCanvas(displayWidth-50, displayHeight-50);
  
  //criando fundo
    //fundo = createSprite(200,200,displayWidth,displayHeight); 
    //fundo.addImage("movimento",img_fundo);
    //fundo.scale = 2.0;
  
  // criando arco
     arco = createSprite(1250,200,10,10);
     arco.addImage("arco do dragão",img_arco);
     arco.scale = 1;
     
     
  //pontuação do jogo
     placar = 0;
  //grupos
  grupo_flecha = new Group();
  grupo_vermelhoB = new Group();
  grupo_azulB = new Group();
  grupo_verdeB = new Group();
  grupo_rosaB = new Group();
}

function draw() {
 background(img_fundo);
  
 camera.position.x = mouseX;
  //movendo arco 
    arco.y = mouseY;

   // criando flecha
     if (keyDown("space")) {
       criando_flecha();
} 
  if(grupo_flecha.isTouching(grupo_vermelhoB)){
    grupo_vermelhoB.destroyEach();
    grupo_flecha.destroyEach();
    placar = placar+1;
}
  if(grupo_flecha.isTouching(grupo_azulB)){
    grupo_azulB.destroyEach();
    grupo_flecha.destroyEach();
    placar = placar+3;
}
  if(grupo_flecha.isTouching(grupo_verdeB)){
    grupo_verdeB.destroyEach();
    grupo_flecha.destroyEach();
    placar = placar+2;
  }
  if(grupo_flecha.isTouching(grupo_rosaB)){
    grupo_rosaB.destroyEach();
    grupo_flecha.destroyEach();
    placar = placar+5;
  }
  
  //criando balãoes
  balão_azul();
  balão_vemerlho();
  balão_verde();
  balão_rosa();
  drawSprites();
  //pontuação
  fill("green")
  textSize(30);
  text("Pontuação: "+placar,450,30);
}


//fazendo flechas sairem do arco
 function criando_flecha() {
   if(frameCount%5===0){
     var flecha= createSprite(100, 100, 60, 10);
  flecha.addImage("flecha do falcão",img_flecha);
  flecha.x = 360;
  flecha.y= arco.y;
  flecha.x = arco.x;  
  flecha.velocityX = -4;
  flecha.lifetime = displayWidth/flecha.velocityX;
  flecha.scale = 0.3;
  grupo_flecha.add(flecha);   
   }
   
}

function balão_vemerlho(){
  if(frameCount%100===0){
    vermelho = createSprite(270,Math.round(random(20, 370)), 10, 10);
  vermelho.addImage("estouro",img_vermelho);
  vermelho.velocityX = 3;
  vermelho.lifetime = displayWidth/vermelho.velocityX;
  vermelho.scale = 0.1;
  grupo_vermelhoB.add(vermelho);
  }
  
}
function balão_azul(){
   if(frameCount%150===0){
     azul = createSprite(270,Math.round(random(40, 400)), 10, 10);
  azul.addImage("estouro",img_azul);
  azul.velocityX = 3;
  azul.lifetime = displayWidth/azul.velocityX;
  azul.scale = 0.1;
  grupo_azulB.add(azul) ;  
   }
  
}
function balão_verde(){ 
  if(frameCount%200===0){
     verde = createSprite(270,Math.round(random(20, 300)), 10, 10);
  verde.addImage("estouro",img_verde);
  verde.velocityX = 3;
  verde.lifetime = displayWidth/verde.velocityX;
  verde.scale = 0.1;
  grupo_verdeB.add(verde) ;
  }
}
function balão_rosa(){
  if(frameCount%220===0){
     rosa = createSprite(270,Math.round(random(10, 290)), 10, 10);
  rosa.addImage("estouro",img_rosa);
  rosa.velocityX = 3;
  rosa.lifetime = displayWidth/rosa.velocityX;
  rosa.scale = 1;
  grupo_rosaB.add(rosa);  
}
} 

 
  
