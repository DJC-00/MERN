class Ninja {
    constructor(name, health = 100, speed = 3, strength = 3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName() {
        console.log(this.name)
    }

    getStats() {
        const { speed, strength } = this
        return { speed, strength };
    }

    drinkSake() {
        this.health += 10;
        if (this.health >= 100) {
            this.health = 100;
        }
        return this.health;
    }

}

let Bro = new Ninja("DJ");
Bro.sayName();
console.log(Bro.getStats())
console.log(Bro.drinkSake())