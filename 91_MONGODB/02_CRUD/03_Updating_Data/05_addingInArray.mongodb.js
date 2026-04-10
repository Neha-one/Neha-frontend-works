use('ecommerce')

db.products.updateOne(
    { name: "Wireless Mouse" },
    { $push: { tags:"new"} }
)

