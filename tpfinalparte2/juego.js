class Obstaculo {

    constructor() {
      this.gota =  loadImage("images/gota.png");
      this.nube =  loadImage("images/nube.png");
      this.x = (random(0 , 500 ));
      this.y = -(random(0, height));
      this.anch = 35;
      this.alt = 35;
      this.vel = 0.5;
      this.contador =0;
    }
  
    actualizar() {
      this.y += this.vel;
      if (this.y >= height) {
        this.reiniciar();
      }
    }
  
    dibujar() { //Método
      this.actualizar();
      push();
      stroke(1);
  
      image(this.gota, this.x, this.y, this.anch, this.alt);
      image(this.nube, this.x-150, -150, 300, 300);
      pop();
    }
  
    reiniciar() {
      this.x = (random(width));
      this.y = -(random(0, height));
      this.tam =80;
      this.vel = 0.5;

    }
  
    reiniciarOleada() {
      this.oleadas=0;
    }
  }
  
