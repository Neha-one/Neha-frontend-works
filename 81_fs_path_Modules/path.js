import path from "path"

let myPath = "c:\\Users\\nehab\\Downloads\\Web development\\BACKEND\\87_fs_path_Modules\\mani.txt";

//extension name of file
console.log(path.extname(myPath));

//directry name of file
console.log(path.dirname(myPath));

//file name of file
console.log(path.basename(myPath));

//join two name of files;
console.log(path.join("c:/", "programs\\math.txt"));
