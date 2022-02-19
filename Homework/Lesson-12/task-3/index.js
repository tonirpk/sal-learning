const rabbit = {
    name: "Rabbit",
    color: "Red",
    sleep() {
        console.log("I'm sleeping");
    },
    eat() {
        console.log("I'm eating");
    },
    printInfo() {
        console.log(`My name is ${this.name}, and the color of my fur is ${this.color}`);
    }
}
console.log(rabbit.printInfo());