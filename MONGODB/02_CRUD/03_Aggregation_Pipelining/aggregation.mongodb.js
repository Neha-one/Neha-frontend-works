use('ecommerce')

// db.sales.insertMany([
//   is it good for 1000 _id but when it will match with same then show error
//     { _id: Math.floor(Math.random() * 1000), item: "Apple", price: 10, quantity: 5, category: "Fruit" },
//     { _id: Math.floor(Math.random() * 1000), item: "Banana", price: 5, quantity: 10, category: "Fruit" },
//     { _id: Math.floor(Math.random() * 1000), item: "Carrot", price: 8, quantity: 6, category: "Vegetable" },
//     { _id: Math.floor(Math.random() * 1000), item: "Tomato", price: 6, quantity: 8, category: "Vegetable" },
//     { _id: Math.floor(Math.random() * 1000), item: "Mango", price: 15, quantity: 3, category: "Fruit" }
// ]);

//  FILTER($match)
db.sales.aggregate([
    {
        $match: {
            price: { $gte: 50 }
        }
    }
])


//      GROUP($group)
db.sales.aggregate([
    {
        $group: {
            _id: "$category",
            totalPrice: { $sum: "$price" }
        }
    }
])


//      OPERATORS
db.sales.aggregate([
    {
        $group: {
            _id: null,
            avgPrice: { $avg: "$price" },
            maxPrice: { $max: "$price" },
            minPrice: { $min: "$price" },

        }
    }
])


//      TRANSFORM DATA($project)
db.sales.aggregate([
    {
        $project: {
            _id: 0, price: 1, category: 1
        }
    }
])

//      SORT($sort)
db.sales.aggregate([
    {
        $sort: {
            price: 1
        }
    }
])

//      LIMIT($limit)
db.sales.aggregate([
    {
        $limit: 2
    }
])


//      SKIP($skip)
db.sales.aggregate([
    {
        $skip: 2
    }
])


//      COUNT($count)
db.sales.aggregate([
    {
        $count: "totalproducts"
    }
])

//      OTHER EXAMPLE:- 
db.sales.aggregate([
    {
        $group: {
            _id: "$category",
            totalSales: { $sum: { $multiply: ["$price", "$quantity"] } }
        }
    }
])


//      SORT + LIMIT + SKIP
db.sales.aggregate([
    {
        $sort: { price: -1 }
    },
    {
        $limit: 3
    },
    { $skip: 1 },
    {
        $project: {
            _id: 0,
            category: 1,
            price: 1
        }
    }
])