// ---------------- EASY METHOD ----------------
function hello1() {
    console.log('hello Neha');
}
setTimeout(hello1, 2000);

// Direct arrow fn (async behaviour)
console.log('one');

setTimeout(() => {
    console.log('hello');
}, 6000);

setTimeout(() => {
    console.log('neha 2');
}, 2000);

console.log('two');
console.log('three');


// ---------------- EXAMPLE 01 ----------------
function hello2(cb) {
    console.log('hello');
    cb();
}
function goodbye1() {
    console.log('goodbye');
}
hello2(goodbye1);


// ---------------- EXAMPLE 02 ----------------
function sum1(a, b) {
    console.log(a + b);
}

function calculator1(a, b, cb) {
    cb(a, b);
}
calculator1(3, 4, sum1);


// ---------------- EXAMPLE 03 ----------------
function multiply1(a, b) {
    console.log(a * b);
}

function calculate1(a, b, cb) {
    cb(a, b);
}
calculate1(4, 5, multiply1);


// ---------------- EXAMPLE 04 ----------------
function student1(name) {
    console.log(name);
}

function print1(name, cb) {
    cb(name);
}
print1("neha", student1);


// ---------------- EXAMPLE 05 ----------------
function print2(name, cb) {
    cb(name);
}
print2("neha", (name) => console.log(name));


// ---------------- EXAMPLE 06 (CALLBACK HELL) ----------------
function getData1(id, next) {
    setTimeout(() => {
        console.log('data', id);
        if (next) next();
    }, 1000);
}

getData1(1, () => {
    console.log("getting data2...");
    getData1(2, () => {
        console.log("getting data3...");
        getData1(3, () => {
            console.log("getting data4...");
            getData1(4);
        })
    })
});


// ---------------- EXAMPLE 07 ----------------
function getsum1(a, b, next) {
    setTimeout(() => {
        console.log(a + b);
        if (next) next();
    }, 1000);
}

getsum1(1, 3, () => {
    getsum1(4, 5);
});


// ---------------- EXAMPLE 08 ----------------
function userData1(username, cb) {
    setTimeout(() => {
        cb();
        console.log(`username is ${username}`);
    }, 1000);
}

function userAge1(age, cb) {
    setTimeout(() => {
        cb();
        console.log(`age is ${age}`);
    }, 1000);
}

function userEmail1(email) {
    setTimeout(() => {
        console.log(`email is ${email}`);
    }, 1000);
}

userData1("Neha", () => {
    userAge1(19, () => {
        userEmail1("neha@123gmail.com");
    });
});


// ---------------- EXAMPLE 09 ----------------
function cbLoadScript(msg) {
    console.log(msg);
}

function loadScript1(src, cb) {
    setTimeout(() => {
        let sc = document.createElement("script");
        sc.src = src;
        document.body.append(sc);
        sc.onload = () => cb("Script Loaded...");
    }, 2000);
}

loadScript1("Synchronous.js", cbLoadScript);


// ---------------- EXAMPLE 10 ----------------
function cbHeading(msg) {
    console.log(msg);
}

function loadHeading1(className, cb) {
    let h = document.createElement("h1");
    h.className = className;
    h.innerHTML = "WEB DEVELOPMENT";
    document.body.append(h);
    cb("heading loaded");
}

loadHeading1("mani", cbHeading);


// ---------------- EXAMPLE 11 ----------------
function cbImage(msg) {
    console.log(msg);
}

function loadImage1(src, cb) {
    let img = document.createElement("img");
    img.src = src;
    img.alt = "photo loaded";
    document.body.append(img);
    cb("photo loaded...");
}

loadImage1("wallpaper3.jpg", cbImage);


// ---------------- EXAMPLE 12 ----------------
const cbScript2 = (msg) => console.log(msg);

const loadScript2 = (src, cb) => {
    let script = document.createElement("script");
    script.src = src;
    document.body.append(script);
    script.onload = () => cb("CodeWithNeha");
};

loadScript2("Synchronous.js", cbScript2);


// ---------------- EXAMPLE 13 ----------------
const cbScript3 = (msg) => console.log(msg);

const loadScript3 = (src, cb) => {
    let script = document.createElement("script");
    script.src = src;
    document.body.append(script);
    script.onload = () => {
        cb("pizza!");
        alert("JS file loaded → callback executed");
    };
};

loadScript3("Synchronous.js", cbScript3);


// ---------------- EXAMPLE 14 (CALLBACK HELL) ----------------
const loadFun1 = (src, cb) => {
    let sc = document.createElement("script");
    sc.src = src;
    document.body.append(sc);
    sc.onload = () => cb("window");
};

loadFun1("Synchronous.js", (arg) => {
    console.log(arg);
    console.log("nested callbacks removed because error");
});


// ---------------- EXAMPLE 15 ----------------
const fn1 = () => console.log("burger");

const cbFinal = (arg, f) => {
    console.log(arg);
    f();
};

cbFinal("fries", fn1);
