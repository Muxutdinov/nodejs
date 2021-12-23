const event = require("events")

class Car extends event{
    log(message){
        this.emit("messege", `${message}, id:${Date.now()}`)
    }
}

const mars = new Car()

mars.on("massage", (data)=>{
    console.log(data);
})

mars.log("Hello world");