console.log('Pac-Man eats ghosts for lunch.');

var ghosts = ['Inky', 'Blinky', 'Pinky', 'Clyde'];

console.log('There are ' + ghosts.length + ' ghosts.');
console.log(ghosts[0]);
console.log(ghosts[1]);
console.log(ghosts[2]);
console.log(ghosts[3]);

// pacman-objects-1
var inky = {};
inky.colour = 'Cyan';
inky.personality = 'Shadow';
console.log(inky);

// pacman-objects-2
var ghosts = {inky: 'Cyan', blinky: 'Red', pinky: 'Pink', clyde: 'Orange' };
console.log(ghosts);

console.log(ghosts.inky); // => 'Cyan'
console.log(ghosts.blinky); // => 'Red'

console.log(ghosts['inky']); // => 'Cyan'
console.log(ghosts['blinky']); // => 'Red'

var ghostName = 'clyde';
console.log(ghosts[ghostName]); // => 'Orange'

// pacman-for-loop
var ghosts = ['Inky', 'Blinky', 'Pinky', 'Clyde'];

for (var index = 0; index < ghosts.length; index++) {
  console.log('Pac-man eats ' + ghosts[index]);
}

// pacman-if-else
var powerPelletEaten = false;
var ghosts = 4;

while (true) {
  console.log('Ghosts remaining: ' + ghosts);

  if (powerPelletEaten == false) {
    console.log('Pac-Man eats the power pellet.');
    powerPelletEaten = true;
  } else if (ghosts > 0) {
    console.log('Pac-Man eats a ghost.');
    ghosts--;
  } else {
    break;
  }
}

console.log('Pac-Man returns home after a long day in the maze.')

// pacman-switch
var ghost = 'Blinky';
var colour;

switch (ghost) {
  case 'Inky':
    colour = 'Cyan';
    break;
  case 'Blinky':
    colour = 'Red';
    break;
  case 'Pinky':
    colour = 'Pink';
    break;
  case 'Clyde':
    colour = 'Orange';
    break;
}

// Named function
function eatDot() {
  console.log("Munch!");
}

//pacman-return
function addScore(currentScore, eaten) {
  switch (eaten) {
    case 'dot':
      scoreToAdd = 10;
      break;
    case 'powerPellet':
      scoreToAdd = 50;
      break;
    case 'firstGhost':
      scoreToAdd = 200;
      break;
    case 'secondGhost':
      scoreToAdd = 400;
      break;
  }
  return currentScore + scoreToAdd;
}
