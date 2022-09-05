const express = require('express')
const app = express()
const port = process.env.PORT || 5000
app.use(express.json())
app.get('/' , (req , res)=>{

   res.send('express js <a href="/hello">click</a>')

})

app.get('/hello' , (req , res)=>{

    res.json('hello')
 
 })


app.listen(port , ()=> console.log('> Server is up and running on port : ' + port))