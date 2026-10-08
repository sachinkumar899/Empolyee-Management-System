// let obj = {
//     a: 1,
//     b:"sachin"
// }

// console.log(obj)

// let animal = {
//     eats: true
// };

// let rabbit = {
//     jumps: true
// };

// rabbit._proto_ = animal;

class Animal{
    constructor(name){
        this.name = this.name
        console.log("Object is created") 
    }

    eats(){
        console.log("kha rha  hu");
    }
    jumps(){
        console.log("Kood rha hu")
    }
}

let a = new Animal("Banny");
console.log(a)
