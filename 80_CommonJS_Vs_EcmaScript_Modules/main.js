//ES module importing:

// import { a, c, d } from "./ESmodule.js";
// console.log(a, c, d);


// import OBJ from "./ESmodule.js";
// console.log(OBJ);


//CommonJS module importing:

const s = require("./CommonJS.js");
console.log(s);

// (function(exports, require,module,__filename,__dirname){
//     //Module code actually lives here
// });