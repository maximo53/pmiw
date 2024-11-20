class Boton {


    constructor() {
      
      this.pantallas_ = 0

    }

 EstoyDentroDelBoton(x1, x2, y1, y2) {
    this.BotonTrue = (mouseX> x1) && (mouseX < x2) && (mouseY > y1) && (mouseY <y2);
  
    return this.BotonTrue;
  }
  

   dibujar(texto, tamText, x_, y_, PantallaSig) {
    push();
  
    push();
    fill(0);
    rect( x_, y_, 200, 50);
    pop();
  
    fill(255);
    textSize(tamText);
    text(texto, x_-70, y_+10);
    pop();
  
  
    if (this.EstoyDentroDelBoton(x_-100, x_+100, y_-20, y_+30) && mouseIsPressed === true ) {
      this.pantallas_ = PantallaSig;
      mouseIsPressed= false;
      //sonido_boton.play();
    }
  }
}
  