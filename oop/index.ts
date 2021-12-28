/**
 * class, object, instance variable
 */
// class Player {
//   health: Number | undefined;
//   speed: Number | undefined;
//   constructor() {
//     this.health;
//     this.speed;
//   }
//   greet() {
//     console.log(this.health, this.speed);
//   }
// }

// const mario = new Player();
// mario.health = 10;
// mario.speed = 11;

/**
 * Encapsulation, Private Variables, setter, getter
 */
// class Player {
//   private health: number | undefined;
//   private speed: number | undefined;

//   setHealth(health: number) {
//     if (health < 0 || NaN) {
//       console.log("Negative value is not acceptable");
//       return;
//     }
//     this.health = health;
//   }
//   getHeath() {
//     return this.health;
//   }
// }
// const mario = new Player();
// mario.setHealth(3);
// console.log(mario.getHeath());

/**
 * inheritance
 */
class Animal {
  hunger: number | undefined;
  health: number | undefined;
  protected coordX: number | undefined;
  protected coordY: number | undefined;

  setCoordX(x: number) {
    this.coordX = x;
  }
  setCoordY(y: number) {
    this.coordY = y;
  }

  eat() {
    console.log("eat");
  }
  sleep() {
    console.log("sleep");
  }
  move() {
    console.log("move");
  }
  makeNoise() {
    console.log("make noise");
  }
}

class Dog extends Animal {
  eat(): void {
    console.log("dog eat");
  }
  returnToOwner() {
    console.log(this.coordX, this.coordY);
  }
  move(): void {
    // super.move();
  }
}
class Canine extends Dog {
  sleep(): void {
    console.log("Canine sleep");
  }
}
const dog = new Dog();
const canine = new Canine();
canine.sleep();
dog.setCoordX(10);
dog.setCoordY(11);
dog.returnToOwner();
