use('ecommerce')

//delete that 1st occur data which have name Wireless Mouse .
db.products.deleteOne({
    name: "Wireless Mouse"
})

//delete those all data which have catogery electronics .
db.products.deleteMany({
    category: "Electronics"
})