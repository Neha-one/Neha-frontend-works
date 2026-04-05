use('ecommerce')

//-----SORTING---------
//ascending order(small to big)
db.products.find().sort({ price: 1 })

// //descending order(big to small)
db.contacts.find().sort({ name: -1 })

//----multiple sorting
db.products.find().sort({ price: 1, stock: 1 })

//-----LIMITING---------
db.products.find().limit(0)  //no limits

db.products.find().limit(2) //only two data show


//-----SORTING + LIMITING---------

db.products.find().sort({ price: -1 }).limit(2)

//-----SKIPING---------

db.products.find().skip(2)

//------SORT + LIMIT + SKIP----------
db.products.find().sort({ price: -1 }).limit(3).skip(2)