use('ecommerce')

// executionStats:it will give you all data in a large json format that how it checks the required operation

db.products.createIndex({ price: 1 });

db.products.find({ price: { $gte: 5000 } })
    .explain("executionStats")
// .executionStats.totalDocsExamined



