use('ecommerce')

db.products.updateMany(
    { name: "Wireless Mouse" },
    { $inc: { stock: 10 } }
)