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

class Sensei extends Ninja {
    constructor(name, health = 100, speed = 3, strength = 3, wisdom = 10) {
        super(name, health, speed, strength)
        this.wisdom = wisdom;
    }

    getStats() {
        const { speed, strength, wisdom } = this
        return { speed, strength, wisdom };
    }

    speakWisdom() {
        return "What one programmer can do in one month, two programmers can do in two months."
    }
}

let newNinja = new Ninja("DJ");
newNinja.sayName();
console.log(newNinja.getStats())
console.log(newNinja.drinkSake())

let newSensei = new Sensei("Shredder", undefined, 5)
newSensei.sayName();
console.log(newSensei.getStats())
console.log(newSensei.drinkSake())
console.log(newSensei.speakWisdom());