const express=require('express')
const bodyParser=require('body-parser')

const routeEmployee=require('./routes/Employee')
const routeDepartment=require('./routes/Department')

const app=express()


app.use(bodyParser.json())
app.use(routeEmployee)
app.use(routeDepartment)
app.listen(4400,'0.0.0.0',()=>{
    console.log('Server started')
})