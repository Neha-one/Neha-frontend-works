
// Select the web_dev_01database to use.
use('web_dev_01Database');

// db.createCollection("sales")

// Insert a few documents into the courses collection.
db.getCollection('sales').insertMany([
  {
    "name": "MongoDB Basics",
    "price": 1500,
    "learner": "neha01"
  },
  {
    "name": "NodeJS Mastery",
    "price": 2500,
    "learner": "neha02"
  },
  {
    "name": "Express Framework",
    "price": 1800,
    "learner": "neha03"
  },
  {
    "name": "JavaScript Advanced",
    "price": 2200,
    "learner": "neha04"
  },
  {
    "name": "Full Stack Development",
    "price": 3000,
    "learner": "neha05"
  }
]
);

// Print a message to the output window.
console.log(`done inserting data`);
