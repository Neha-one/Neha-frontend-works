use('ecommerce')

//update one :--
//only 1st one data which have electronics category that will be changed.
db.products.updateOne(
    { category: "Electronics" },
    { $set: { price: 399 } }
)

//update many:--
//all data which have electronics category those all will change .
db.products.updateMany(
    { category: "Electronics" },
    { $set: { "ratings": 4.9 } })


//------changing value of array
db.products.updateOne(
    { name: "Wireless Mouse", tags: "Mouse" },
    { $set: { "tags.$": "computer" } }
)

//------we can add non existing value inside the collection using $set operator
db.products.updateOne(
    { name: "Wireless Mouse" },
    { $set: { age: 21 } }
) 