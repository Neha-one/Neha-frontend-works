use('ecommerce');

// db.sales.find()

//check existing indexes.
db.sales.getIndexes()

//create index.
// quantity field pe index ban gaya
// 1 = ascending order

db.sales.createIndex(
    { quantity: 1 })
db.sales.find({ quantity: 10 })