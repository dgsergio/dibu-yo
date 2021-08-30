const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const agrandar = document.getElementById('agrandar');
const achicar = document.getElementById('achicar');
const gotero = document.getElementById('gotero');
const brush = document.getElementById('brush');
const borrar = document.getElementById('borrar');
const nuevo = document.getElementById('nuevo');
let incremento = 3;
let mouse = { x: undefined, y: undefined};
let stop = true;
let pincel = 20;
let color = '#000000';

canvas.width = window.innerWidth * 0.8;
canvas.height = window.innerHeight * 0.8;

canvas.addEventListener('mousedown', ()=>{stop = false});
canvas.addEventListener('mouseup', ()=>{stop = true});
canvas.addEventListener('mousemove', e => {
    if (!stop) {
    mouse.x = e.offsetX;
    mouse.y = e.offsetY;
    pintar()
    }
});
agrandar.addEventListener('click', ()=>{
    pincel += incremento;
});

achicar.addEventListener('click', ()=>{
    pincel -= incremento; 
    if (pincel <= 1) pincel = 1;
});
gotero.addEventListener('change', e => {
    color = e.target.value;
})
borrar.addEventListener('click', () => {
    color = '#ffffff';
})
nuevo.addEventListener('click', e => {
    ctx.clearRect(0,0,innerWidth,innerHeight);
})

function pintar() {
    ctx.beginPath();
    ctx.arc(mouse.x, mouse.y, pincel , 0, Math.PI*2 , false);
    ctx.fill();
    ctx.fillStyle = color;
}

function eliminar() {
    ctx.beginPath();
    ctx.arc(mouse.x, mouse.y, pincel , 0, Math.PI*2 , false);
    ctx.fill();
    ctx.fillStyle = '#ffffff';
}

