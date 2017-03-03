EventBus.addEventListener("resetLocation", function(event) {
    var location = [
        (event.target.location[0] + event.target.grid[0]) % event.target.grid[0],
        (event.target.location[1] + event.target.grid[1]) % event.target.grid[1]
    ];

    event.target.location = location;
});

EventBus.addEventListener("move", function(event, command) {
    var xIncrease = 0,
        yIncrease = 0;
    if (event.target.direction === 'N') {
        yIncrease = -1;
    } else if (event.target.direction === 'E') { // East
        xIncrease = 1;
    } else if (event.target.direction === 'S') { // South
        yIncrease = 1;
    } else if (event.target.direction === 'W') { // West
        xIncrease = -1;
    }
    if (command === 'b') { // Backward
        xIncrease *= -1;
        yIncrease *= -1;
    }
    var location = event.target.location;
    location[0] += xIncrease;
    location[1] += yIncrease;
});

var directions = ['N', 'E', 'S', 'W'];

EventBus.addEventListener('turn', function(event, command) {
    var directionNumber = directionAsNumber(event.target.direction);
    if (command === 'l') { // Left
        directionNumber = (directionNumber + 4 - 1) % 4;
    } else { // Right
        directionNumber = (directionNumber + 1) % 4;
    }

    event.target.direction = directions[directionNumber];
});

function directionAsNumber(direction) {
    for (var index = 0; index < 4; index++) {
        if (directions[index] === direction) return index;
    }
}