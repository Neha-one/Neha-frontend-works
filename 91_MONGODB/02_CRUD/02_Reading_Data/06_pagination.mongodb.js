use('ecommerce')


//-----PAGINATION---------


//formula :- skip=(pageNumber - 1) * itemsPerPage


//PAGE 01
db.products.find().skip(0).limit(1)

//PAGE 02
db.products.find().skip(1).limit(1)

// // //PAGE 03
db.products.find().skip(2).limit(1)