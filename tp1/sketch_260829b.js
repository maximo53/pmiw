//maximo martinez comision 5
let imgfondo;

let fsoldado = [];
let fduendes = [];
let ftorre = [];

const CANT_SOLDADO = 6;
const CANT_DUENDE = 6;
const CANT_TORRE = 4;

let xsoldado = -100;
let ySoldado = 420;
let velSoldado = 3;

let xTorre = 600;
let yTorre = 300;

let xDuende = 610;
let yduende = -100;
let yduendeFinal = 280;
let velDuende = 12;

let duendecayendo = 0; 

function preload() {
  imgfondo = loadImage('data/fondo1.png');

  for (let i = 0; i < CANT_SOLDADO; i++) {
    fsoldado.push(loadImage('data/soldado' + i + '.png'));
  }

  for (let i = 0; i < CANT_DUENDE; i++) {
    fduendes.push(loadImage('data/duende' + i + '.png'));
  }

  for (let i = 0; i < CANT_TORRE; i++) {
    ftorre.push(loadImage('data/torre' + i + '.png'));
  }
}

function setup() {
  createCanvas(800, 600);
}


function draw() {
  image(imgfondo, 0, 0, width, height);

  animacion(ftorre, xTorre, yTorre, 10);

  xsoldado += velSoldado;
  animacion(fsoldado, xsoldado, ySoldado, 6);


  if (ubicacion(xsoldado, 400) && duendecayendo === 0) {
    duendecayendo = 1; 
  }

  if (duendecayendo === 1) {
    yduende += velDuende;
    if (ubicacion(yduende, yduendeFinal)) {
      yduende = yduendeFinal;
      duendecayendo = 2;
    }
  }

  if (ubicacion(xsoldado, width) && duendecayendo === 2) {
    duendecayendo = 3; 
  }

  if (duendecayendo === 1) {
    framefijo(fduendes, 0, xDuende, yduende);

  } else if (duendecayendo === 2) {
    animacion(fduendes, xDuende, yduende, 6);

  } else if (duendecayendo === 3) {
    framefijo(fduendes, 0, xDuende, yduende);
  }
}

function animacion(frames, x, y, velocidadAnim) {
  let indice = floor(frameCount / velocidadAnim) % frames.length;
  image(frames[indice], x, y);
}

function framefijo(frames, numFrame, x, y) {
  image(frames[numFrame], x, y);
}

function ubicacion(posicionactual, objetivo) {
  return posicionactual >= objetivo;
}

function reiniciar() {
  xsoldado = -100;
  yduende = -100;
  duendecayendo = 0;
}

function keyPressed() {
  if (key === ' ' || keyCode === 32) {
    reiniciar();
  }
}
