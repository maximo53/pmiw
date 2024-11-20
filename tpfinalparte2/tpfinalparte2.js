//maximo martinez 
//legajo 121436/9


let pantallas;
let sonido;

function preload() {
    sonido = loadSound("data/musica_fondo.mp3");
}

function setup() {
    createCanvas(640, 480);
    pantallas = new Pantallas();
}


function draw() {
   
    pantallas.dibujar();
}
