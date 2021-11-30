export class paths {

  constructor() {
    console.log("class 'path' has been created")
  }





  createPath(ctx, boardParameters, fruit, wall, path) {

    console.log("createPath() has been invoked")


    // NOTE: spacePerFruit is not in fruitParameters becease it relies on variables that are in fruitParamaters
    let timesItterated = 0
    fruit.fruitParameters.spacePerFruit = boardParameters.innerBoardHieght / fruit.fruitParameters.fruitFromTopToBottom;
    fruit.fruitParameters.spacePerFruitX = boardParameters.innerBoardWidth / fruit.fruitParameters.fruitFromLeftToRight;
    let midPointOfSpaceY = fruit.fruitParameters.spacePerFruit / 2 - fruit.fruitParameters.height / 2
    let midPointOfSpaceX = fruit.fruitParameters.spacePerFruitX / 2 - fruit.fruitParameters.width / 2
    let collumNumber = 0

    console.log("Reached just before the for loop invoked")
    console.log(fruit.fruitParameters.fruitFromTopToBottom)
    console.log(fruit.fruitParameters.fruitFromLeftToRight)


    for (let i = 0; i > fruit.fruitParameters.fruitFromTopToBottom * fruit.fruitParameters.fruitFromLeftToRight; i++) {

      console.log("the paths for loop has been invoked")

      let y = timesItterated * fruit.fruitParameters.spacePerFruit + boardParameters.boardOffset + boardParameters.widthOfBoardBorder + midPointOfSpaceY
      let x = collumNumber * fruit.fruitParameters.spacePerFruitX + boardParameters.boardOffset + boardParameters.widthOfBoardBorder + midPointOfSpaceX

      let previousStyle = ctx.fillStyle;


      drawFruit()
      {

        console.log("drawFruit() has been invoked")

        ctx.fillStyle = 'rgb(255, 0, 0)'
        roundedRect(ctx, x, y, fruitParameters.height, fruitParameters.width, 3.5, FillOrStroke.Fill)

        ctx.fillStyle = previousStyle;

        console.log(y)
        timesItterated++;

        if (y >= boardParameters.bottomOfBoard) {
          timesItterated = 0;
          y = 0,
            collumNumber++
          fruit.y = 0
          fruit.x++
        };


      }
      fruit.isWall(ctx, path, wall)
    }
  }
}
