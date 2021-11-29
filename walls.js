export class walls {

    constructor()
    {



    }

    
        walls = [
          { start : {x: 1, y: 2}, end: {x: 1, y:5} },
          { start : {x: 0, y: 7}, end: {x: 5, y:7} },
          { start : {x: 6, y: 1}, end: {x: 11, y:1} },
          { start : {x: 7, y: 4}, end: {x: 7, y:6} },
          { start : {x: 10, y: 4}, end: {x: 10, y:6} },
          { start : {x: 7, y: 11}, end: {x: 10, y:11} },
          { start : {x: 14, y: 4}, end: {x: 14, y:7} },
          { start: {x: 16, y: 10}, emd: {x: 20, y: 10} }
        ]
      
        
        WallDirection = {
          Horizontal: "Horizontal",
          Vertical: "Vertical",
          Diagonal : "Diagonal"
        }
        
        
        
      //   getWallDirection = (wall) => {
      //     if(wall.start.x == wall.end.x)
      //     {
      //       return WallDirection.Horizontal
      //     }
      //     else if(wall.start.y == wall.end.y)
      //     {
      //       return WallDirection.Vertical
      //     }
      //     else
      //     {
      //       // we've got a problem
      //       return WallDirection.Diagonal
      //     }
      //   }
        
        
      //   wallDirection = getWallDirection(wallD)
        
      //   if(wallDirection(wallD) == WallDirection.Diagonal){
        
      //   console.log("We have a horizontonal wall (remove if this console.log() if its intentional)")
        
        
      // }
      
      // wallParameters.walls.forEach((wall)=>{
        //   let startingPositionX = wall.start.x * fruitParameters.spacePerFruit;
        //   let startingPositionY = wall.start.y * fruitParameters.spacePerFruit;
        //   let endPositionX;
        //   let endPositionY;
      }