use('ecommerce')

db.products.updateOne(
    { name: "Wireless Mouse" },
    //rename used for fields not for values.
    { $rename: { "name": "fullname" } })
