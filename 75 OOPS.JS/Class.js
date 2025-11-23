// class Animal {
//     constructor(name) {
//         this.name = name
//         console.log('Object is created...');
//     }
//     eats() {
//         console.log('i am eating..');
//     }
//     jumps() {
//         console.log('i am jumping...');
//     }
// }
// //function. Without new, the class won’t behave like an object creator.
// let a = new Animal("neha");   //Object is created...

// a.eats();   //i am eating..
// a.jumps();  //i am jumping...

// console.log(a);
// //output:-
// // Animal { }
// //    [[Prototype]]:Object
// //          constructor:class Animal
// //           eats:ƒ eats()
// //           jumps: ƒ jumps()
// //           [[Prototype]]:Object




//  CLEAR CODE:-
class Student {
    constructor(name) {
        this.name = name
        console.log('Object is created ..');

    }
    study() {
        console.log('i am studying..');
    }
    work() {
        console.log('i am working...');
    }
}

class new_student extends Student {
    constructor(name) {
        super(name)
        console.log('Object is created and she is a brilliant student..');
    }
    study() {
        super.study()
        //overwrite.
        console.log('i am studying and teaching..');
    }
}
//creating an object using class.
// let std1 = new Student("Neha");
// console.log(std1);

let std2 = new new_student("Mani");
console.log(std2);
