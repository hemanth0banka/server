const http = require("http");
const fs = require("fs")
const server = http.createServer((req,res)=>{
    console.log("Server is Running")
    if(req.url=="/")
    {
        res.setHeader("Content-Type","text/html")
        res.end(`<form action="/msg" method="post">
                    <label>Name : </label>
                    <input type="text" name="name">
                    <button type="submit">Add</button>
                </form>`)
    }
    else if(req.url=="/msg")
    {
        res.setHeader("Content-Type","text/html")
        let arr = []
        req.on('data',(i)=>{
            arr.push(i)
        })
        req.on('end',()=>{
            let values = Buffer.concat(arr)
            let result = values.toString().split("=")[1]
            console.log(result)
            fs.writeFile("data.txt",result,()=>{
                res.statusCode = 302;
                res.setHeader('Location','/')
                res.end()
            })
        })
    }
    else if(req.url=="/read")
    {
        fs.readFile("data.txt",(i,e)=>{
        console.log(e.toString());
        res.end(`<h1>${e.toString()}</h1>`)})
    }
})
const port = 6004
server.listen(port,()=>{console.log(`listening at port ${port}`)})