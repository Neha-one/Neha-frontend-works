import fs from "fs/promises"
let data = await fs.readFile("mani.txt");
let b=await fs.appendFile("mani.txt","\nthis is amazing promise")
console.log(data.toString());