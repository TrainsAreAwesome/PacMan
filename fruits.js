import { walls } from "./walls.js";
import { paths } from "./paths.js"
export class fruits {


    constructor() {
        console.log("class 'fruit' has been created")
    }

    
    fruitParameters = {
        fruitsFromLeftToRight: 20,
        fruitsFromTopToBottom: 15,
        height: 10,
        width: 10,
        spacePerFruit: 0
    }


    fruitEaten() {
        //every time pacman moves, this funtion is called to remove the fruit pacman is on (if any)
        console.log("fruitEaten() has been invoked")
    }
    isWall(ctx, path, wall) {

        console.log("isWall() has been invoked")

        let x = 0
        let y = 0
        for (i = 1; wall.walls; ++i) {
            if (wall.walls.i.start.x == x) { }
            else {
                if (wall.walls.i.start.y == y) { }
                else {
                    if (wall.walls.i.end.x == x) { }
                    else {
                        if (wall.walls.i.end.y == y) { }
                        else {

                            if (x > this.fruitParameters.fruitsFromLeftToRight) {
                                x = 0
                            }

                            if (y > this.fruitParameters.fruitsFromTopToBottom) {
                                y = 0
                            }
                            path.drawFruit()
                        }
                    }
                }
            }
        }
    }
}
