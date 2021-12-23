const http = require("http")
const path = require("path")
const fs = require("fs")


const server = http.createServer((req,res)=>{
   if(req.method === "GET"){
       res.writeHead(200, {"Content-Type":"text/html"})
       if(req.url === '/'){
           fs.readFile(path.join(__dirname, "views", "index.html"),
            // utf-8,
            (err,content)=>{
              if(err) throw err
              res.end(content)
           }
           )
    }else if(req.url === "./contact"){
        fs.readFile(path.join(__dirname, "views", "contact.html"),
        // utf-8,
        (err,content)=>{
          if(err) throw err
          res.end(content)
       }
       )
       }else if(req.url === "/contact"){
        fs.readFile(path.join(__dirname, "views", "contact.html"),
        // utf-8,
        (err,content)=>{
          if(err) throw err
          res.end(content)
       }
       )
       }else if(req.url === '/api/cars'){
           res.writeHead(200,{"Content-Type":"text/json"})
        const cars = [
            {
                name:"Mers",
                color:"red"
            },
            {
                name:"BW",
                color:"green"
            }
        ]
           res.end(JSON.stringify(cars))
       }
   }else if(req.method === "POST"){
       const body = []
       res.writeHead(200,{"Content-type":"text/html; charset=utf-8"})
       req.on("data", data=>{
           body.push(Buffer.from(data))
        })
        req.on("end",()=>{
            const message = body.toString().split("=")[1]
            console.log(message);
            res.end(`<span>Your message: <b>${message}</b></span>`)
    })
   }
})

server.listen(5000,()=>{
    console.log("Server started working...");
})