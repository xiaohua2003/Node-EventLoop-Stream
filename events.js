const EventEmitter=require("events");
const http=require('http')
class sales extends EventEmitter {
    constructor (){
        super();
    }

}
const myEmitter=new sales();
myEmitter.on("newsale", ()=>{
    console.log('this is new sale')
})
myEmitter.on("newsale", ()=>{
    console.log("customer name: Emily")
})
myEmitter.on('newsale', (num)=>{
    console.log(`customer number is ${num}`)
})
myEmitter.emit("newsale", 10)

const server=http.createServer()
server.on('request', (req,res)=>{
    console.log("hello world")
    res.end('hello my name is emily')
})
server.on('request', (req,res)=>{
    console.log("good releatrions with yao ")
   
})
server.listen(3200, ()=>{
    console.log("server is running on port 3100")
})