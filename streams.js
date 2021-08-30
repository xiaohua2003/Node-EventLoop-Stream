const fs=require('fs');
const { ReadStream } = require('tty');
const server=require("http").createServer()

server.on('request', (req, res)=>{
    fs.readFile('test-file.txt', (err, data)=>{
      res.end(data)
    })
   // solution  2 note: this solution has a problem that the write stream is not as faster as readstream. it cause backpressure. 
   //To solve this problem, we use pipe operator method
   const readStream=fs.createReadStream('tesdt-file.txt')
      readStream.on('data', (chunk)=>{
       res.write(chunk)
   })
   readStream.on('end', ()=>{
       res.end()
    })
    readStream.on('error', (err)=>{
       console.log(err)
        res.statusCode=500
       res.end('ddd')  
    })
  // solution 3
  const readStream=fs.createReadStream('test-file.txt')
  readStream.pipe(res)

})
server.listen(1951, ()=>{
    console.log("server is running on 1500")
})