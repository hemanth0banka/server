let http = require("http")
let server = http.createServer((req,res)=>{
    console.log("SERVER CREATED")
    if(req.url == "/")
    {
        res.end("WELCOME HOME")
    }
    else
    {
        if(req.url =="/pizza")
        {
            res.end("WELCOME TO PIZZA HUT")
        }
        else
        {
            res.end("page not found")
        }
    }
});
server.listen(5000,()=>{console.log("listening")})