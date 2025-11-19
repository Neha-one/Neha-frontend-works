// ---------------- EXAMPLE 01 ----------------

async function hello() {
    console.log('Hello! Neha');
};
hello();        //Hello! Neha


// ----------------EXAMPLE 02 ----------------

function api() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('weather data');
            resolve(333)
        }, 1000);
    })
}
async function getDataApi() {

    await api();    //1st call
    await api();    //2nd call
}

getDataApi();       //weather data  (2 times)


// ---------------- EXAMPLE 03 ----------------

function getDAta(dataID) {
    return new Promise((resovel, reject) => {
        setTimeout(() => {
            console.log('data', dataID);
            resovel();
        }, 2000);
    });
}

async function getapi() {
    console.log('getting data1...');
    await getDAta(1);
    console.log('getting data2...');
    await getDAta(2);
    console.log('getting data3...');
    await getDAta(3);
    console.log('getting data4...');
    await getDAta(4);
    console.log('getting data5...');
    await getDAta(5);
}
getapi();


// QUESTION: - PRINTOUT NAME OF 5 STUDENT WITH DELAY OF 2 SECOND

// async - await >> promises >> callbacks heLL

// ----------------METHOD 01 : -Using callback HeLL----------------

function getName(name, callback) {
    setTimeout(() => {

        console.log('Name is', name);
        if (callback) {
            callback();
        }

    }, 1000);
}
getName("Neha", () => {
    getName("Mani", () => {
        getName("Sam", () => {
            getName("Aakash", () => {
                getName("Aryan")
            });
        });
    });
});


// ----------------METHOD 02 : -Using Promises----------------

function getName1(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Name is', name);
            resolve("success");
        }, 2000);
    });
};

getName1("Neha").then((res) => {
    return getName1("Mani")
}).then(() => {
    return getName1("Sam")
}).then(() => {
    return getName1("Aakash")
}).then(() => {
    return getName1("Aryan")
});


// ---------------- METHOD 03 :-Using Asycn-Await ----------------

function getName2(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Name is', name);
            resolve("success");

        }, 1000);
    });
};

async function getNameApi() {
    await getName2("Neha");
    await getName2("Mani");
    await getName2("Sam");
    await getName2("Aakash");
    await getName2("Aryan");
};

getNameApi();


// ---------------- METHOD 04 :-Using IIFE----------------

function getName3(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Name is', name);
            resolve("success");

        }, 1000);
    });
};

(async () => {
    await getName3("Neha");
    await getName3("Mani");
    await getName3("Sam");
    await getName3("Aakash");
    await getName3("Aryan");
})();

