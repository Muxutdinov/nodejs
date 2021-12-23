const http = require("http")

const server = http.createServer((req,res)=>{
    //req = serverga sorov 
    //res = serverdan javob
    res.write("<h1>Hello Jaxongir</h1>")
    res.end(`
    <div>
    <h3>Server Tugadi!!!</h3>
    </div>
    `)
})

server.listen(5000,()=>{
    console.log("Server started working.....");
})