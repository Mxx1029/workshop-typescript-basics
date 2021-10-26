// you need to do $ tsc after changes
// when you run npm start here, it runs the updating index.ts file


// const pretty = (x) => x.toFixed(x);
// const output = pretty(1.2345);
// console.log(output);

// Declare a variable with a strict type

// Explict type - age IS and WILL BE a number 
let age: number = 42;
// age = "jimmy" // this throws an error immediately

// Implicit / Inferred type; text IS and WILL BE a string
let text = "Hello World";
text = "Hii";
// text = true; // this throws an error immediately

// -------------------------------------------------------
// --- Catching errors -----------------------------------

// Now TS knows it is always a string and TS knows what a string can do
// text.toLocaleLowercase(); // TS knows "text" is a string and can't do this
// text.toLocalLowerCase(); // TS knows "text" is a string and can't do this
text.toLocaleLowerCase();

// TS can help catch other errors too!
// const fiftyFifty = Math.random > 0.5; // TS knows you can't compare a function and a number, you need to call the function 
const coinFlip = Math.random() > 0.5;

// TS can even catch logic errors sometimes
const playerAge = Math.random() * 20;
const canBuyBeer = playerAge > 18 ? "yes" : "no";

if (canBuyBeer === "yes") { // logical error when !== instead of ===
    console.log("Hooray you can buy beer");
} else if (canBuyBeer === "no") { // TS complaints that this condition will always return false, if 1st condition is !==
    console.log("Oh no, no beer for you, young one!") // unreachable code if 1st condition is !== "yes"
}

// ------------------------------------------------------
// --- Object Types -------------------------------------

// TS does types for objects too
// also called "duck typing"
// Inferred type on an object (implicit)
const user = {
    name: "Samantha Fox",
    id: 1
} // if you hover over it, VSCode shows you the shape of the object

// user.age = 72; // not flexible, so it complains as this property does not exist in user

console.log(user.name);

// Explicit types for objects made with an "interface"
// Also: custom type
interface Pet {
    name: string,
    id: number;
}
const rauli: Pet = {
    name: "Rawli",
    id: 1337,
    // age: 46 // complains age does not exists on type Pet
}

// console.log(rauli.location) // gives you an error while writing

// ------------------------------------------------------
// --- Class Types --------------------------------------

// And even classes!
interface User {
    name: string;
    id: number;
}

class UserAccount {
    name: string;
    id: number;

    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
    }
}

const user1: User = new UserAccount("Joel", 71726372); // be careful here, you can put Pet in instead of User and TS would not find any errors, as they are both declared with the same properties
console.log(user1.name);

// ------------------------------------------------------
// --- Functions!! --------------------------------------

function printAndReturnName(user: User): number { // last colon means what type the function will return
    console.log(user.id);
    return user.id;
}

const someId: number = printAndReturnName(user1);