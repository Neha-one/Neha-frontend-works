const URL = "https://fakestoreapi.com/carts";



// let getfacts = async () => {
//     console.log('getting data....');

//     let promise = await fetch(URL);
//     console.log(promise);
// }
// getfacts();

//OR---------
async function getfact() {
    console.log('getting data....');

    let promise =await  fetch(URL);
    console.log(promise);
    // console.log(promise.status);     //200
}
getfact();