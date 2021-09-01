const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const agrandar = document.getElementById('agrandar');
const achicar = document.getElementById('achicar');
const gotero = document.getElementById('gotero');
const brush = document.getElementById('brush');
const borrar = document.getElementById('borrar');
const nuevo = document.getElementById('nuevo');
let incremento = 4;
let stop = true;
let pincel = 20;
let color = '#000000';
let colorAnt = '#000000';
let xi,yi;

canvas.width = window.innerWidth * 0.8;
canvas.height = window.innerHeight * 0.8;

canvas.addEventListener('mousedown', e =>{stop = false; xi = e.offsetX; yi = e.offsetY});
canvas.addEventListener('mouseup', e =>{stop = true; xi = e.offsetX; yi = e.offsetY});
canvas.addEventListener('mousemove', e => {
    if (!stop) {
        const xf = e.offsetX;
        const yf = e.offsetY;
        circulo(xf, yf);
        linea(xi, yi, xf, yf,);
        xi = xf; yi = yf;
    }
});

agrandar.addEventListener('click', ()=> pincel += incremento);

achicar.addEventListener('click', ()=>{
    pincel -= incremento; 
    if (pincel <= 1) pincel = 1;
});
gotero.addEventListener('change', e => color = e.target.value);
borrar.addEventListener('click', () => {
    colorAnt = color;
    color = '#ffffff'
});
brush.addEventListener('click', () => color = colorAnt);
nuevo.addEventListener('click', () => ctx.clearRect(0,0,innerWidth,innerHeight));

function circulo(xf, yf) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(xf, yf, pincel , 0, Math.PI*2 , false);
    ctx.fill();    
}

function linea(xi, yi, xf, yf) {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = pincel*2;
    ctx.moveTo(xi, yi);    
    ctx.lineTo(xf, yf);
    ctx.stroke();  
}