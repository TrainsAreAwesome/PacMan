import { fruits } from "./fruits.js"
export class paths {

    constructor()
    {

    }



    

    createPath(ctx, boardParameters, fruit)
    {

        // NOTE: spacePerFruit is not in fruitParameters becease it relies on variables that are in fruitParamaters
        let timesItterated = 0
        fruit.fruitParameters.spacePerFruit = boardParameters.innerBoardHieght / fruit.fruitParameters.fruitFromTopToBottom;
        fruit.fruitParameters.spacePerFruitX = boardParameters.innerBoardWidth / fruit.fruitParameters.fruitFromLeftToRight;
        let midPointOfSpaceY = fruit.fruitParameters.spacePerFruit / 2 - fruit.fruitParameters.height / 2
        let midPointOfSpaceX = fruit.fruitParameters.spacePerFruitX / 2 - fruit.fruitParameters.width /2 
        let collumNumber = 0
      
        for (let i = 0; i < fruit.fruitParameters.fruitFromTopToBottom * fruit.fruitParameters.fruitFromLeftToRight; ++i) {
      
      
          let y = timesItterated * fruit.fruitParameters.spacePerFruit + boardParameters.boardOffset + boardParameters.widthOfBoardBorder + midPointOfSpaceY
          let x = collumNumber * fruit.fruitParameters.spacePerFruitX + boardParameters.boardOffset + boardParameters.widthOfBoardBorder + midPointOfSpaceX
      
          let previousStyle = ctx.fillStyle;

          fruit.isWall(ctx)
        
          drawFruit()
          {
            ctx.fillStyle = 'rgb(255, 0, 0)'
          roundedRect(ctx, x, y, fruitParameters.height, fruitParameters.width, 3.5, FillOrStroke.Fill)
        
          ctx.fillStyle = previousStyle;
      
          console.log(y)
          timesItterated++;
      
          if (y >= boardParameters.bottomOfBoard) {
            timesItterated = 0;
            y = 0,
            collumNumber ++
            fruit.y = 0
            fruit.x ++
          };
      
      
        }
      }
    }
    }