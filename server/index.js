const express = require('express')
const bodyParser = require('body-parser')
const cors=require("cors")
const PORT = 8080;

const app = express()
app.use(bodyParser.json())
app.use(cors())


const customers =[]
const vendors=[]

app.listen(PORT, () => {
    console.log(`App is listening at PORT number ${PORT}`)
})


app.get("/",async(req,res)=>
{
    res.send({message:"Message from backend"})
})
app.get("/allcustomers",(req,res)=>
{
    res.send(customers)
})
app.post("/addcustomer",(req,res)=>
{
    customers.push(req.body)
    res.send({status:"success",data:req.body})
})
app.post("/addvendor",(req,res)=>
{
    vendors.push(req.body)
    res.send({status:"Success",data:req.body})
})