function MarsRover(location, direction, grid) {

    self = this;
    this.location = (location === undefined) ? [0, 0] : location;
    this.direction = (direction === undefined) ? 'N' : direction;
    this.grid = (grid === undefined) ? [100, 100] : grid;

    this.commands = function(commands) {
        if (commands === undefined) { // Getter
            return this.commandsArray;
        } else { // Setter
            for (var index = 0; index < commands.length; index++) {
                var command = commands[index];
                if (command === 'f' || command === 'b') {
                    EventBus.dispatch("move", command);
                } else if (command === 'l' || command === 'r') {
                    EventBus.dispatch("turn", command);
                }
            }
            EventBus.dispatch("resetLocation");
            this.commandsArray = commands;
        }
    }
}