function draw() {
  const canvas = document.getElementById("casa");
  const ctx = canvas.getContext("2d");

  // Largura da linha
  ctx.lineWidth = 5;

  // Paredes
  ctx.strokeRect(75, 140, 150, 110);

  // Porta
  ctx.fillRect(130, 190, 40, 60);

  // Telhado
  ctx.beginPath();
  ctx.moveTo(50, 140);
  ctx.lineTo(150, 60);
  ctx.lineTo(250, 140);
  ctx.closePath();
  ctx.stroke();
}
