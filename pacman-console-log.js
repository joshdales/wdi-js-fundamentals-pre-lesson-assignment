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
