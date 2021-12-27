// // class, object, instance variable
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

// Encapsulation, Private Variables, setter, getter
class Player {
  private health: number | undefined;
  private speed: number | undefined;

  setHealth(health: number) {
    if (health < 0 || NaN) {
      console.log("Negative value is not acceptable");
      return;
    }
    this.health = health;
  }
  getHeath() {
    return this.health;
  }
}
const mario = new Player();
mario.setHealth(3);
console.log(mario.getHeath());
