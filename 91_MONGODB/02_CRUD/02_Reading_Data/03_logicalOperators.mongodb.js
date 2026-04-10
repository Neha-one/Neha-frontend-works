use('ecommerce')


//---------or----------

// db.products.find({
//     $or: [{ category: "Electronics" },
//     { sock: { $gt: 5000 } }
//     ]
// })


//-------and---------

db.products.find({
    category: "Electronics",
    stock: { $gt: 100 }
})