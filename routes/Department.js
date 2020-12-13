const express=require('express')
const db=require('../db')

const router=express.Router()

router.get('/department',(request,response)=>{
    const connection=db.connection()
    const statement=`select * from Dept_tb1`
    connection.query(statement,(error,data)=>
    {
        if(error)
        {
            console.log(`error:${error}`)
        }
        connection.end()
        response.send(data)
    })
})

router.post('/department',(request,response)=>{
    const connection=db.connection()
    const body=request.body

    const Name=body.Name
    const Location=body.Location

    const statement=`insert into Dept_tb1 (Name,Location) values ('${Name}','${Location}')`;
    
    connection.query(statement,(error,data)=>
    {
        if(error)
        {
            console.log(`error:${error}`)
        }
        connection.end()
        response.send('Data inserted')
    })
})

router.put('/department/:id',(request,response)=>{
    const connection=db.connection()
    const body=request.body
    
    const id=request.params.id
    const Name=body.Name
    const Location=body.Location

    const statement=`update Dept_tb1 set Name='${Name}',Location='${Location}' where Dept_ID=${id}`
    connection.query(statement,(error,data)=>
    {
        if(error)
        {
            console.log(`error:${error}`)
        }
        connection.end()
        response.send('Data updated')
    })
})

router.delete('/department/:id',(request,response)=>{
    const connection=db.connection()
    const id=request.params.id

    const statement=`delete from Dept_tb1 where Dept_ID=${id}`
    connection.query(statement,(error,data)=>{
        if(error)
        {
            console.log(`Error:${error}`)
        }
        connection.end()
        response.end('Row Deleted')
    })
})
module.exports=router