var fs = require('fs');

// Reads and converts the input file
const path = process.argv[2];
var input = fs.readFileSync(path);
const roomArray = input.toString().split("\n");

// Declare variables and constants
const roomSize = {
	x: parseInt(roomArray[0].split(" ")[0]), 
	y: parseInt(roomArray[0].split(" ")[1])
};
var roombaPos = {
	x: parseInt(roomArray[1].split(" ")[0]), 
	y: parseInt(roomArray[1].split(" ")[1])
};
var directions = roomArray[roomArray.length - 1];
let dirtCount = 0;

function dirtCoordinates() {
	const dirtPatches = roomArray
		.slice(2, roomArray.length - 1)
   		.map(dirt => dirt.split(" ")
		.map(coordinate => parseInt(coordinate)));
	return dirtPatches;
}

// Moves the roomba according the directions given in the input file
function maneuver(directions) {
	switch(directions) {
		case 'N':
			if (roombaPos.y <= roomSize.y)
				roombaPos.y++;
			else
			break;
		case 'S':
			if (roombaPos.y >= 0)
				roombaPos.y--;
			else
			break;
		case 'E':
			if (roombaPos.x <= roomSize.x)
				roombaPos.x++;
			else
			break;
		case 'W':
			if (roombaPos.x >= 0)
				roombaPos.x--;
			else
			break;
		default:
			break;
	}
	cleanDirt(dirtCoordinates);
}

// Keeps track of the dirt patches the roomba cleans
function cleanDirt(dirtCoordinates, maneuver) {
	directions.forEach(coordinate => {
		dirtCoordinates.forEach(dirtPatch => {
			if (dirtPatch[0] === coordinate[0] && dirtPatch[1] === coordinate[1]) {
				dirtCoordinates.splice(dirtPatch, 1);
				dirtCount++;
			}
		});
	});

};

console.log(roombaPos);
console.log(dirtCount)
