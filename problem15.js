/*Project Euler: Problem 15: Lattice paths
Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.

a diagram of 6 2 by 2 grids showing all the routes to the bottom right corner

How many such routes are there through a given gridSize?*/

function latticePaths(gridSize) {
  let moveDown=gridSize;
  let moveRight=gridSize;
  const totalMoves=gridSize*2;
  return Math.floor(Factorial(totalMoves)/(Factorial(moveDown)*Factorial(moveRight)));
}

function Factorial(number){
  let num=1;
  while(number!=1){
    num=num*number;
    number--;
  }
  return num;
}

latticePaths(4);
latticePaths(9);
latticePaths(20);