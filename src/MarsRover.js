function MarsRover(location, direction, grid) {

    this.location = (location === undefined) ? [0, 0] : location;
    this.direction = (direction === undefined) ? 'N' : direction;
    this.grid = (grid === undefined) ? [100, 100] : grid;
    this.directions = ['N', 'E', 'S', 'W'];

    this.commands = function(commands) {
        if (commands === undefined) { // Getter
            return this.commandsArray;
        } else { // Setter
            for (var index = 0; index < commands.length; index++) {
                var command = commands[index];
                EventBus.dispatch('roverCommand', this, command);
            }
            EventBus.dispatch("resetLocation", this);
            this.commandsArray = commands;
        }
    };
}