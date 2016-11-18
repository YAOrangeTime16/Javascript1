//Create an animal
function Animal (name, species) {
    this.name = name;
    this.species = species;
}

function getAnimal () {
    return "this is a cat named " + this.name;
}

Animal.prototype.getAnimal = getAnimal;

var myAnimal = new Animal("Lily", "cheshire");

console.log(Object.getPrototypeOf(myAnimal));

//Prototype of Animal
//function Cat (name, species) {
//    this.name = name;
//    this.species = species;
//}

Cat.prototype = new Animal();

//var myCat = new Cat("mjau", "cat");
//console.log(myCat.getAnimal());

function Cat (name) {
    this.name = name;
    Animal.call(this, name, "cat");
}

var mycat2 = new Cat("nana");
console.log(mycat2.getAnimal());