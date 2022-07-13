const canvasSketch = require("canvas-sketch");

const settings = {
    dimensions: [1080, 1080],
};

const sketch = () => {
    return ({
        context,
        width,
        height
    }) => {
        context.save();
        context.fillStyle = "white";
        context.fillRect(0, 0, width, height);
        context.lineWidth = (width / 2) * 0.01;
        coisinha(context);

        context.restore();
        balao(context);
    };
};

canvasSketch(sketch, settings);

function balao(context) {
    context.beginPath();
    context.moveTo(75, 25);
    context.quadraticCurveTo(25, 25, 25, 62.5);
    context.quadraticCurveTo(25, 100, 50, 100);
    context.quadraticCurveTo(50, 120, 30, 125);
    context.quadraticCurveTo(60, 120, 65, 100);
    context.quadraticCurveTo(125, 100, 125, 62.5);
    context.quadraticCurveTo(125, 25, 75, 25);
    context.stroke();
}

function coisinha(context) {
    context.beginPath();
    context.arc(75, 75, 50, 0, Math.PI * 2, true); // Círculo exterior
    context.moveTo(110, 75);
    context.arc(75, 75, 35, 0, Math.PI, false); // Boca (sentido horário)
    context.moveTo(65, 65);
    context.arc(60, 65, 5, 0, Math.PI * 2, true); // Olho esquerdo
    context.moveTo(95, 65);
    context.arc(90, 65, 5, 0, Math.PI * 2, true); // Olho direito
    context.stroke();
}