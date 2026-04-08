use('ecommerce')

// db.products.find({ name: "Wireless Mouse" })

// db.contacts.find({ name: "Bob" })

let readdata = db.products.find({ price: 399 })

console.log(readdata.count());

console.log(readdata.toArray());  //it will give all datas in arrays formate.

