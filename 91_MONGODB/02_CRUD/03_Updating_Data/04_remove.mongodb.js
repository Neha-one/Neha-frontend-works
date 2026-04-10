use('ecommerce')

db.products.updateOne(
    { category: "Electronics" },
    { $unset: { name: "Wireless Mouse" } }
)

// $set = used to add
// $unset = used to remove