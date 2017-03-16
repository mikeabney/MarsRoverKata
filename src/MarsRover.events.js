EventBus.addEventListener("roverCommand", function(event, command) {
    if (command === 'f' || command === 'b') {
        EventBus.dispatch("move", event.target, command);
    } else if (command === 'l' || command === 'r') {
        EventBus.dispatch("turn", event.target, command);
    }
});

EventBus.addEventListener("roverCommand", function(event, command) {
    if ('fblr'.indexOf(command) === -1) {
        alert('Invalid Input');
    }
});

EventBus.addEventListener("resetLocation", function(event) {
    var location = [
        (event.target.location[0] + event.target.grid[0]) % event.target.grid[0],
        (event.target.location[1] + event.target.grid[1]) % event.target.grid[1]
    ];

    EventBus.dispatch("roverLocationUpdated", event.target, location);
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
    EventBus.dispatch("roverLocationUpdated", event.target, location);
});

EventBus.addEventListener('turn', function(event, command) {
    var directionNumber = directionAsNumber(event.target.direction, event.target.directions);
    if (command === 'l') { // Left
        directionNumber = (directionNumber + 4 - 1) % 4;
    } else { // Right
        directionNumber = (directionNumber + 1) % 4;
    }

    EventBus.dispatch("roverDirectionUpdated", event.target, event.target.directions[directionNumber]);
});

EventBus.addEventListener("roverLocationUpdated", function(event, location) {
    event.target.location = location;
});

EventBus.addEventListener("roverDirectionUpdated", function(event, direction) {
    event.target.direction = direction;
});

function directionAsNumber(direction, directions) {
    for (var index = 0; index < 4; index++) {
        if (directions[index] === direction) return index;
    }
}
