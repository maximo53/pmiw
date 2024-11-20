class Pantallas{

constructor(){

    this.balde;
    this.botones;
    
    this.fondo;
    this.tutorial;
    this.titulo;
    this.ganaste_;
    this.perdiste_;
    

    
    this.pantallas = 0;


    this.titulo = loadImage("images/titulo.jpeg");
    this.tutorial = loadImage("images/tutorial.jpeg");

    this.ganaste_ = loadImage("images/ganaste.jpeg");
    this.perdiste_ = loadImage("images/perdiste.jpeg");

    this.fondo = loadImage("images/fondo.jpeg");

    

    rectMode(CENTER);

    this.balde = new Balde();
    this.botones = new Boton();

}


dibujar(){
  var ply = sonido.isPlaying();

    if(this.botones.pantallas_ === 0){
        image(this.titulo,0,0,width,height);
        this.botones.dibujar("   Continuar", 20, 520, 450,1)
    }

    if(this.botones.pantallas_ === 1){
        image(this.tutorial,0,0,width,height);
        this.botones.dibujar("   Continuar", 20, 520, 450,2)
    }

    if(this.botones.pantallas_ === 2){
        image(this.fondo,0,0,width,height)

        if(ply === false){
            sonido.play();
        }
       
        this.balde.dibujar();
    
        if (this.balde.perdiste == true) {
          this.botones.pantallas_ = 3;
        
          }
          if (this.balde.ganaste == true) {
            this.botones.pantallas_ = 4;
           
          }
    }

    if(this.botones.pantallas_ === 3){
        this.balde.reiniciar();
        if(this.ply === true){
            sonido.stop();
        }
       
        this.perdiste();
    }

    if(this.botones.pantallas_=== 4){
        this.balde.reiniciar();
        if(ply === true){
            sonido.stop();
        }
       
        this.ganaste();
    }



}


   perdiste() {
    image(this.perdiste_,0,0,width,height);

    if (keyIsPressed && key === 'r') {
      this.botones.pantallas_=0;
        
    
      } else if (keyIsPressed && key === 'v') {
        this.botones.pantallas_ = 2
    
      } 
  }

     ganaste() {
    image(this.ganaste_,0,0,width,height);

    if (keyIsPressed && key === 'r') {
      this.botones.pantallas_=0;
    
      } else if (keyIsPressed && key === 'v') {
        this.botones.pantallas_ = 2
    
      }
  }


   dibujarObstaculos() {
    for (var i = 0; i < this.cantidadDeObstaculos; i++) {
      this.obstaculo.dibujar();
    }
  }

 

}