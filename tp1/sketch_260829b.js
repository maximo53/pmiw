//maximo martinez comision 5

let imgfondo;

let fsoldado = [];
let fduendes = [];
let ftorre = [];

const CANT_SOLDADO = 6;
const CANT_DUENDE = 6;
const CANT_TORRE = 4;

let xSoldado = -100;
let ySoldado = 420;
let velSoldado = 3;

let xTorre = 600;
let yTorre = 300;

let xDuende = 610;
let yduende = -100;
let yduendeFinal = 280;
let velduende = 12;


let duendeCayendo = 0;

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

  let creartorre = floor(frameCount / 10) % CANT_TORRE; 
  image(ftorre[creartorre], xTorre, yTorre);

  xSoldado += velSoldado;
  let crearsoldado = floor(frameCount / 6) % CANT_SOLDADO;
  image(fsoldado[crearsoldado], xSoldado, ySoldado);


  if (xSoldado >= 400 && duendeCayendo === 0) {
    duendeCayendo = 1; 
  }

  if (duendeCayendo === 1) {
    yduende += velduende;
    if (yduende >= yduendeFinal) {
      yduende = yduendeFinal;
      duendeCayendo = 2; 
    }
  }

  if (xSoldado > width && duendeCayendo === 2) {
    duendeCayendo = 3; 
  }

  if (duendeCayendo === 1) {
    image(fduendes[0], xDuende, yduende);

  } else if (duendeCayendo === 2) {
    let crearduende = floor(frameCount / 6) % CANT_DUENDE;
    image(fduendes[crearduende], xDuende, yduende);

  } else if (duendeCayendo === 3) {
    image(fduendes[0], xDuende, yduende);
  }
}
