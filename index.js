import { fruits } from "./fruits.js";

import { paths } from "./paths.js"

import { walls } from "./walls.js"

let fruit = new fruits()
let wall = new walls()

let boardParameters = {
  boardWidth: 600,
  boardHeight: 400,
  boardOffset: 12,
  widthOfBoardBorder: 10,
  numberOfPathColumns: 10,
  numberofPathRows: 10,
  innerBoardWidth: 0,
  innerBoardHieght: 0,
  innerBoardArea: 0,
  bottomOfBoard: 384,
}
boardParameters.innerBoardWidth = boardParameters.boardWidth - boardParameters.widthOfBoardBorder * 2
boardParameters.innerBoardHieght = boardParameters.boardHeight - 20
boardParameters.innerBoardArea = boardParameters.innerBoardHieght * boardParameters.innerBoardWidth






let FillOrStroke =
{
  Fill: "Fill",
  Stroke: "Stroke"
}

function roundedRect(ctx, x, y, width, height, radius, fillOrStroke) {
  ctx.beginPath();
  ctx.moveTo(x, y + radius);
  ctx.lineTo(x, y + height - radius);
  ctx.arcTo(x, y + height, x + radius, y + height, radius);
  ctx.lineTo(x + width - radius, y + height);
  ctx.arcTo(x + width, y + height, x + width, y + height - radius, radius);
  ctx.lineTo(x + width, y + radius);
  ctx.arcTo(x + width, y, x + width - radius, y, radius);
  ctx.lineTo(x + radius, y);
  ctx.arcTo(x, y, x, y + radius, radius);


  if (fillOrStroke == FillOrStroke.Fill) {
    ctx.fill()
  }
  else {
    ctx.stroke();
  }
}






// Brackets, of, division, multiplication, additon, subtraction







let createBoardBorder = (ctx) => {
  
  
  
  roundedRect(ctx, boardParameters.boardOffset, boardParameters.boardOffset, boardParameters.boardWidth, boardParameters.boardHeight, 15);  // outer margin
  let innerBorderX = boardParameters.boardOffset + boardParameters.widthOfBoardBorder;
  let innerBorderY = boardParameters.boardOffset + boardParameters.widthOfBoardBorder
  let innerBorderWidth = boardParameters.boardWidth - boardParameters.widthOfBoardBorder * 2
  let innerBorderHieght = boardParameters.boardHeight - boardParameters.widthOfBoardBorder * 2
  
  roundedRect(ctx, innerBorderX, innerBorderY, innerBorderWidth, innerBorderHieght, 15); // inner margin
}


let createWalls = (ctx) => {

// walls.js will do this







// // box for the ghosts to spawn in
// roundedRect(ctx, 235, 205, 115, 15, 4, FillOrStroke.Stroke)
// roundedRect(ctx, 335, 135, 15, 70, 4, FillOrStroke.Stroke)
// roundedRect(ctx, 235, 135, 15, 70, 4, FillOrStroke.Stroke)


// // walls
// roundedRect(ctx, 22, 205, 170, 15, 4, FillOrStroke.Stroke);
// roundedRect(ctx, 405, 125, 15, 100, 4, FillOrStroke.Stroke);
// roundedRect(ctx, 205, 52, 170, 15, 4, FillOrStroke.Stroke);
// roundedRect(ctx, 58, 75, 15, 100, 4, FillOrStroke.Stroke);
}

window.onload = () => { // start of window.onload
  
  let canvas = document.getElementById("canvas");
  const ctx = canvas.getContext('2d');
  
  function draw() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');

      createBoardBorder(ctx);
      let path = new paths();
      path.createPath(ctx, boardParameters, fruit);
      createWalls(ctx);


     

      //   roundedRect(ctx, boardParameters.boardOffset - 7, boardParameters.boardOffset, boardParameters.boardWidth -5, boardParameters.boardHeight,20, 9);
      //   roundedRect(ctx, 53, 53, 49, 33, 10);
      //   roundedRect(ctx, 53, 119, 49, 16, 6);
      //   roundedRect(ctx, 135, 53, 49, 33, 10);
      //   roundedRect(ctx, 135, 119, 25, 49, 10);

      //   ctx.beginPath();
      //   ctx.arc(37, 37, 13, Math.PI / 7, -Math.PI / 7, false);
      //   ctx.lineTo(31, 37);
      //   ctx.fill();

      //   for (var i = 0; i < 8; i++) {
      //     ctx.fillRect(51 + i * 16, 35, 4, 4);
      //   }

      //   for (i = 0; i < 6; i++) {
      //     ctx.fillRect(115, 51 + i * 16, 4, 4);
      //   }

      //   for (i = 0; i < 8; i++) {
      //     ctx.fillRect(51 + i * 16, 99, 4, 4);
      //   }

      //   ctx.beginPath();
      //   ctx.moveTo(83, 116);
      //   ctx.lineTo(83, 102);
      //   ctx.bezierCurveTo(83, 94, 89, 88, 97, 88);
      //   ctx.bezierCurveTo(105, 88, 111, 94, 111, 102);
      //   ctx.lineTo(111, 116);
      //   ctx.lineTo(106.333, 111.333);
      //   ctx.lineTo(101.666, 116);
      //   ctx.lineTo(97, 111.333);
      //   ctx.lineTo(92.333, 116);
      //   ctx.lineTo(87.666, 111.333);
      //   ctx.lineTo(83, 116);
      //   ctx.fill();

      //   ctx.fillStyle = 'white';
      //   ctx.beginPath();
      //   ctx.moveTo(91, 96);
      //   ctx.bezierCurveTo(88, 96, 87, 99, 87, 101);
      //   ctx.bezierCurveTo(87, 103, 88, 106, 91, 106);
      //   ctx.bezierCurveTo(94, 106, 95, 103, 95, 101);
      //   ctx.bezierCurveTo(95, 99, 94, 96, 91, 96);
      //   ctx.moveTo(103, 96);
      //   ctx.bezierCurveTo(100, 96, 99, 99, 99, 101);
      //   ctx.bezierCurveTo(99, 103, 100, 106, 103, 106);
      //   ctx.bezierCurveTo(106, 106, 107, 103, 107, 101);
      //   ctx.bezierCurveTo(107, 99, 106, 96, 103, 96);
      //   ctx.fill();

      //   ctx.fillStyle = 'black';
      //   ctx.beginPath();
      //   ctx.arc(101, 102, 2, 0, Math.PI * 2, true);
      //   ctx.fill();

      //   ctx.beginPath();
      //   ctx.arc(89, 102, 2, 0, Math.PI * 2, true);
      //   ctx.fill();
    }
  }

  // A utility function to draw a rectangle with rounded corners.



  draw()
} // END OF Window.ONLOAD