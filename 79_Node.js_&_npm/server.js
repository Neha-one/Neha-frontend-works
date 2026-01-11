var slugify = require('slugify')

let a=slugify('Neha Kumari') // some-string
console.log(a);

// if you prefer something other than '-' as separator
let b=slugify('Neha &^Kumari', '_')  // some_string
console.log(b);
