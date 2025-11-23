// //get  special method that make a property readable read a property easily.
// // set → special method that make a property writable ,update a property safely.

// // validate and modify a value when reading/writing a property.


//          EXAMPLE:-01

// class User {
//     constructor(name) {
//         this.name = name;
//     }
//     get name() {
//         return this._name;
//     }
//     set name(value) {
//         if (value.length < 4) {
//             console.log('Name is too short.');
//         }
//         this._name = value;
//     }

// }
// let user = new User("som");
// console.log(user.name);     //som

// // user.name = "neha";     //overwrite som to neha.
// // console.log(user.name);     //neha


//          EXAMPLE:-02

// class Car {
//     constructor(name) {
//         this.name = name;
//     }
//     get name() {
//         return this._name.toUpperCase();

//     }
//     set name(newname) {
//         this._name = newname;
//     }
// }

// let car1 = new Car("Fortuner");
// console.log(car1.name);


//          EXAMPLE:-03

// class User {
//     constructor(email, password) {
//         this.email = email;
//         this.password = password;
//     }

//     set email(newemail) {
//         this._email = newemail;
//     }

//     set password(newpassword) {
//         this._password = newpassword;
//     }

//     get email() {
//         return this._email.toUpperCase();
//     }

//     get password() {
//         return this._password;
//     }

// }

// const user = new User("abc@gmail.com", 123456);
// console.log(user.email);
// console.log(user.password);



//          EXAMPLE:-04

// class Rectangle {
//     constructor(width, height) {
//         this.width = width;
//         this.height = height;
//     }
//     set width(newwidth) {
//         if (newwidth > 0) {

//             this._width = newwidth;
//         }
//         else {
//             console.error('width must be positive number!');

//         }
//     }
//     get width() {
//         return `${(this._width).toFixed(1)}cm`;
//     }
//     set height(newheight) {
//         if (newheight > 0) {

//             this._height = newheight;
//         }
//         else {
//             console.error('height must be positive number!');

//         }
//     }
//     get height() {
//         return `${(this._height).toFixed(1)}cm`;
//     }
//     get area() {
//         return `${(this._width * this._height).toFixed(1)}cm^2`
//     }
// }

// const rect = new Rectangle(2, 4);
// console.log(rect.width);
// console.log(rect.height)
// console.log(rect.area)



//          EXAMPLE:-05

// class User {
//     constructor(firstname, lastname, age) {
//         this.firstname = firstname;
//         this.lastname = lastname;
//         this.age = age;
//     }
//     set firstname(newfirstname) {
//         if (typeof newfirstname === "string" && newfirstname.length > 0) {

//             this._firstname = newfirstname;
//         }
//         else {
//             console.error("firstname must be a non-empty string!")
//         }
//     }
//     get firstname() {
//         return this._firstname;
//     }
//     set lastname(newlastname) {
//         if (typeof newlastname === "string" && newlastname.length > 0) {

//             this._lastname = newlastname;
//         }
//         else {
//             console.error("lastname must be a non-empty string!")
//         }
//     }
//     get lastname() {
//         return this._lastname;
//     }
//     set age(newage) {
//         if (typeof newage === "number" && newage > 0) {

//             this._age = newage;
//         }
//         else {
//             console.error("age must be a non-empty integer")
//         }
//     }
//     get age() {
//         return this._age;
//     }
//     get fullname() {
//         return `${this._firstname + " " + this._lastname} 19 years old girl.`
//     }
// }

// const user = new User("Neha", "Kumari", 19);
// console.log(user.firstname, user.lastname, user.age);
// console.log(user.fullname);