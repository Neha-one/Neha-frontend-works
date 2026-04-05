use('ecommerce')

// db.products.find({ price: { $gt: 1000 } })  //greater than

// db.products.find({ price: { $lt: 1000 } })  // less than

// db.products.find({ price: { $gte: 1000 } })  // greater than equal

// db.products.find({ price: { $lte: 1000 } })  // less than equal

db.products.find({ price: { $gte: 1000, $lte: 500000 } })  //  greater than equal and less than equal

