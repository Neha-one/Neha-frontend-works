use('ecommerce')

//structure of find()---
//----db.collection.find( filter , projection )----

db.products.find({}, { name: 1, price: 1, _id: 0 })

db.contacts.find({}, { name: 1, phone: 1, _id: 0 })