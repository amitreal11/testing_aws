const express = require('express')


const app = express()

app.get('/', (req, res) => {
    res.send({status: "true", message: "connected to server"})
})

app.listen(4040, ()=>{
    console.log(">>>>>server running on port 4040");
})
