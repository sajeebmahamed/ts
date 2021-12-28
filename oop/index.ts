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
// class Animal {
//   hunger: number | undefined;
//   health: number | undefined;
//   protected coordX: number | undefined;
//   protected coordY: number | undefined;

//   setCoordX(x: number) {
//     this.coordX = x;
//   }
//   setCoordY(y: number) {
//     this.coordY = y;
//   }

//   eat() {
//     console.log("eat");
//   }
//   sleep() {
//     console.log("sleep");
//   }
//   move() {
//     console.log("move");
//   }
//   makeNoise() {
//     console.log("make noise");
//   }
// }

// class Dog extends Animal {
//   eat(): void {
//     console.log("dog eat");
//   }
//   returnToOwner() {
//     console.log(this.coordX, this.coordY);
//   }
//   move(): void {
//     super.move();
//   }
// }
// class Canine extends Dog {
//   sleep(): void {
//     console.log("Canine sleep");
//   }
// }
// const dog = new Dog();
// const canine = new Canine();
// canine.sleep();
// dog.setCoordX(10);
// dog.setCoordY(11);
// dog.returnToOwner();

/**
 * Polymorphism
 */

// class Hero {
//   hunger!: number;
//   health!: number;

//   attack() {
//     console.log("I am attacking");
//   }
//   move() {
//     console.log("I am moving");
//   }
//   eat() {
//     console.log("I am eating");
//   }
// }

// // archer ISA hero
// class Archer extends Hero {
//   arrows: number = 1;

//   attack() {
//     super.attack();
//     console.log("Firing an arrow");
//     this.arrows -= 1;
//   }
// }
// class Mage extends Hero {
//   mage: number = 1;
//   attack(): void {
//     super.attack();
//     console.log("Mage");
//     this.mage -= 1;
//   }
// }
// class Tribe {
//   private heros: Hero[] = [];

//   setHeros(heros: Hero[]) {
//     this.heros = heros;
//   }
//   attack(): void {
//     for (let hero of this.heros) {
//       hero.attack();
//     }
//   }
// }

// const archer: Hero = new Archer();
// const mage: Hero = new Mage();

// const heros: Hero[] = [archer, mage];
// const tribe = new Tribe();
// tribe.setHeros(heros);

// tribe.attack();

/**
 * Abstract Class
 */

// abstract class Hero {
//   hunger!: number;
//   health!: number;

//   abstract attack(): void;
//   move() {
//     console.log("I am moving");
//   }
//   eat() {
//     console.log("I am eating");
//   }
// }

// // archer ISA hero
// class Archer extends Hero {
//   arrows: number = 1;

//   attack() {
//     console.log("Firing an arrow");
//     this.arrows -= 1;
//   }
// }
// class Mage extends Hero {
//   mage: number = 1;
//   attack(): void {
//     console.log("Mage");
//     this.mage -= 1;
//   }
// }
// abstract class Bob extends Hero {
//   //
// }
// class Anime extends Hero {
//   attack(): void {
//     throw new Error("Method not implemented.");
//   }
// }

// const archer = new Archer();
// archer.attack();

/**
 * Multiple inheritance, interface
 */

// abstract class Character {
//   hunger!: number;
//   health!: number;

//   abstract eat(): void;
// }

// interface Hero extends Character {
//   heroId: number;
// }
// interface Enemy extends Character {
//   enemyId: number;
// }

// // Spy IS-A Hero Spy IS-A Enemy
// class Spy implements Hero, Enemy {
//   hunger!: number;
//   health!: number;
//   heroId!: number;
//   enemyId!: number;

//   eat(): void {
//     this.hunger -= 1;
//   }
// }

/**
 * constructor, static, parameter, read-only properties
 */

class Character {
  static count: number = 1;
  private hunger: number;
  private health: number;
  constructor(hunger: number, health: number) {
    Character.count += 1;
    this.hunger = hunger;
    this.health = health;
  }
  setHanger(hunger: number): void {
    this.hunger = hunger;
  }
  setHealth(health: number): void {
    this.health = health;
  }
  getHunger(): number {
    return this.hunger;
  }
  getHealth(): number {
    return this.health;
  }
}
class Hero extends Character {
  private heroId: number;

  constructor(heroId: number, hunger: number, health: number) {
    super(hunger, health);
    this.heroId = heroId;
  }

  setHeroId(heroId: number): void {
    this.heroId = heroId;
  }
  getHeroId(): number {
    return this.heroId;
  }
}

const sajeeb = new Character(50, 60);
const hero = new Hero(1, 50, 60);
const hero1 = new Hero(1, 50, 60);
const hero2 = new Hero(1, 50, 60);
const hero3 = new Hero(1, 50, 60);
console.log(sajeeb.getHunger(), sajeeb.getHealth());
console.log(hero.getHeroId());
