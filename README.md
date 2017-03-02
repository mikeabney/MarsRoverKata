Mars Rover kata
===============

This repo contains the code written for the article (JavaScript Tutorial Through Katas: Mars Rover)[http://technologyconversations.com/2014/10/07/javascript-tutorial-through-katas-mars-rover/].

This is my own implementation of this kata using event sourcing.


Requirements
------------

Develop an api that moves a rover around on a grid.

- You are given the initial starting point (x,y) of a rover and the direction (N,S,E,W) it is facing.
- The rover receives a character array of commands.
- Implement commands that move the rover forward/backward (f,b).
- Implement commands that turn the rover left/right (l,r).
- Implement wrapping from one edge of the grid to another. (planets are spheres after all)
- Implement obstacle detection before each move to a new square. If a given sequence of commands encounters an obstacle, the rover moves up to the last possible point and reports the obstacle.


Prerequisites
-------------

Install [NodeJS with NPM](http://nodejs.org/).

Run following commands:

```bash
npm install -g grunt-cli
npm install -g bower
npm install -D gulp-jasmine
npm install
bower install
```

