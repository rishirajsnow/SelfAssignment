//1.Object Literals-> This is the simplest way to create an object in JavaScript. 
// You can define properties and methods directly within the object.

const person={
    name:"Alice",
    age:30,
    greet:function(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

//2.  new Object() Constructor-> You can also create an object using the Object constructor.
//Creates an empty Object,to which properties can be added localStorage.

const car=new Object();
car.make="Toyota";
car.model="Camry";

//3. Constructor functions-> Used to create multiple objects with same structure and behaviour.

function animal(name, species) {
    this.name = name;
    this.species = species;
    this.introduce = function() {
        console.log(`This is ${this.name}, a ${this.species}.`);
    };
}

const dog = new animal("Buddy", "Dog");
const cat = new animal("Whiskers", "Cat");

//4. ES6 Classes-> Classes are a syntactical sugar over constructor functions, providing a clearer and more structured way to create objects.

class Book{
    constructor(title,author){
        this.title=title;
        this.author=author;
    }
    getInfo(){
        console.log(`${this.title} by ${this.author}`);
    }
}

const novel=new Book("Harry Potter","J.K. Rowling");
novel.getInfo();

//5.   Object.create() Method:
//Create a new object using an existing object as its prototype. This allows for inheritance.

const prototypePerson={
    greet:function(){
        console.log(`Hello, my name is ${this.name}.`);
    }
};

const john=Object.create(prototypePerson);
john.name="John";

//6. Factory function:
// Function that returns a new object , without using new keyword.

function createProduct(name,price){
    return {
        name:name,
        price:price,
        display:function(){
            console.log(`Product: ${this.name}, Price: $${this.price}`);
        }
    }
}

const laptop = createProduct("Laptop", 1200);