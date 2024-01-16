const express=require('express')
const app= express()
require('./connection/conn')
const cors=require('cors')
const bookRoutes=require('./routes/BookRoutes')
app.use(cors())
app.use(express.json())
app.listen(1000,()=>{
   console.log('server is started in port 1000')
})
app.use('/api/v1',bookRoutes)

// app.get('/',(req,res)=>{
// res.send('this is home page')
// })  

// app.get('/About',(req,res)=>{
//     res.send('this is about page')
//     })

//     app.get('/services',(req,res)=>{
//         res.send('this is services page')
//         })