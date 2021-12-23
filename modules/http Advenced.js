const http = require("http")
const { title } = require("process")

const server = http.createServer((req,res)=>{
   if(req.method === "GET"){
       res.writeHead(200, {"Content-Type":"text/html"})
       res.end(`
       <h1>Send Me Message</h1>
       <form method="post" action="/">
       <input name="title" type="text" />
       <button type="submit">Send Message</button>
       </form>
       `)
   }
   else if(req.method === "POST"){
       const body = []
       res.writeHead(200,{"Content-type":"text/html; charset=utf-8"})
       req.on("data", data=>{
           body.push(Buffer.from(data))
       })
       req.on("end",()=>{
           const message = body.toString().split()[1]
           res.end(`<span>Your message here:${message}</span>`)
        })
   }
})

server.listen(5000,()=>{
    console.log("Server started working...");
})