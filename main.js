const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

const drawCar = () => {
    ctx.save();

ctx.fillRect(0, 30, 25, 25);
ctx.fillRect(25, 10, 35, 45);
ctx.fillStyle = 'white';
ctx.fillRect(40, 23, 7, 7);
ctx.fillStyle = 'black';
ctx.fillRect(60, 30, 25, 25);
ctx.fillRect(7, 53, 13, 13);
ctx.fillRect(65, 53, 13, 13);
ctx.restore();
};
drawCar();