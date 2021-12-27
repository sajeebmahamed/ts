"use strict";
class Player {
    constructor() {
        this.health;
        this.speed;
    }
    greet() {
        console.log(this.health, this.speed);
    }
}
const mario = new Player();
mario.health = 10;
mario.speed = 11;
console.log(mario);
