class Balde {

    //obstáculos DC
    constructor() {
      this.obstaculo = new Obstaculo();
      this.contador = 0;
      this.pos_B_X = 300;
      this.pos_B_Y = 440;
      this.cantidadDeObstaculos = 20;
      this.balde = loadImage("images/balde.png" );
      this.bruce = loadImage("images/bruce.png" );
      this.perdiste = false;
      this.ganaste = false;

      this.TiempoLimite = 2500;
  

  
      this.imgs= 0 ;
    }
  
    dibujar() {
  
  
      this.contador = this.obstaculo.contador;

      this.dibujarObstaculos();
      this.juego();
  
     push()
     fill(255);
      text("Gotas:", 500, 450 );
      text(this.contador, 550, 450 );
      text("Tiempo limite:", 500, 470 );
      text(this.TiempoLimite/100, 600, 470 );
      pop();

      this.TiempoLimite--;
   
    }
  
    juego() {
  
  
      push();
      imageMode(CENTER);
      image(this.balde, this.pos_B_X, this.pos_B_Y-60, 80, 80);
      image(this.bruce,this.pos_B_X,this.pos_B_Y , 100 , 100);



        

      pop();
  
    
  
      if (keyIsPressed && key === 'a') {
        this.pos_B_X-=8;
    
      } else if (keyIsPressed && key === 'd') {
        this.pos_B_X+=8;
    
      } 
  
      if ( this.obstaculo.x <= this.pos_B_X+80 && this.obstaculo.x >= this.pos_B_X-80  && this.obstaculo.y <= this.pos_B_Y && this.obstaculo.y >= this.pos_B_Y-100 ) {
        this.obstaculo.contador++;
        this.obstaculo.reiniciar();
      }
  
      if (this.contador >= 10) {
        this.ganaste = true;
      }

      if (this.TiempoLimite <= 0) {
        this.perdiste = true;
      }

      
     if (this.pos_B_X >= 700) {
        this.pos_B_X = 0;
    }
    else if (this.pos_B_X <= -50) {
        this.pos_B_X = 700;
    } 

    }
  
    reiniciar() {
      this.perdiste = false;
      this.ganaste = false;
      this.pos_B_X = 300;
      this.pos_B_Y = 440;
      this.obstaculo.contador = 0;
      this.TiempoLimite = 2500;
      this.ganaste = false;
      this.perdiste = false;
      this.obstaculo. reiniciarOleada();
      this.obstaculo.reiniciar();
    }
  
    dibujarObstaculos() {
      for (var i = 0; i < this.cantidadDeObstaculos; i++) {
        this.obstaculo.dibujar();
      }
    }

 

  }
  