const path = require("path")
// FS = File System

const fs = require("fs")

// fs.mkdir(path.join(__dirname, "modules"),(err)=>{
    // if(err) throw err;
    // console.log("Folter was created sussesfully!");
    // fs.writeFile(
    //     path.join(__dirname,"modules", "path.js"),
    // "//path module",
    // (err)=>{
    //     if(err) throw (err);
    //     console.log("File was created succesfully!");
    // })
// })
// fs.writeFile(
// path.join(__dirname,"modules","nodejs.txt" ),
// "Nodejs tutorial", (err)=>{
//     if(err) throw err;
//     console.log("Document was created");
//     fs.appendFile(
//         path.join(__dirname, "modules", "nodejs.txt"),
//         "  by Jaxongir Muxutdinov",
//         err =>{
//             if(err) throw err
//             console.log("Document changed");
//             fs.readFile(
//                 path.join(__dirname, "modules", "nodejs.txt"),
//                 "utf-8",
//                 (err,data)=>{
//                     if(err)throw err
//                     // console.log(Buffer.from(data).toString());
//                     console.log(data);
//                 }
//             )
//         }
//         )
// }
// )
fs.rename(
    path.join(__dirname, "modules" , "nodejs.txt"),
    path.join(__dirname, "modules" , "node.txt"),
    (err)=>{
        if(err) throw err;
        console.log("File name  was exchanged");
    }
)

















// fs.readFile(
//     path.join(__dirname, "modules", "nodejs.txt"),
//     "utf-8",
//     (err,data)=>{
//         if(err)throw err
//         // console.log(Buffer.from(data).toString());
//         console.log(data);
//     }
// )