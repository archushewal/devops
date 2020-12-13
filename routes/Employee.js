const express=require('express')
const db=require('../db')

const router=express.Router()

router.get('/employee',(request,response)=>{
    const connection=db.connection()
    const statement=`select * from Emp_tb1`
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


router.post('/employee',(request,response)=>{
    const connection=db.connection()
    const body=request.body

    const Name=body.Name
    const Email=body.Email
    const Password=body.Password
    const Mobile=body.Mobile
    const Address=body.Address
    const Salary=body.Salary
    const Designation=body.Designation

    const statement=`insert into Emp_tb1 (Name,Email,Password,Mobile,Address,Salary,Designation) values ('${Name}','${Email}','${Password}','${Mobile}','${Address}',${Salary},'${Designation}')`;
    
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

router.put('/employee/:id',(request,response)=>{
    const connection=db.connection()
    const body=request.body
    
    const id=request.params.id
    const Name=body.Name
    const Email=body.Email
    const Password=body.Password
    const Mobile=body.Mobile
    const Address=body.Address
    const Salary=body.Salary
    const Designation=body.Designation

    const statement=`update Emp_tb1 set Name='${Name}',Salary=${Salary} where Emp_ID=${id}`
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

router.delete('/employee/:id',(request,response)=>{
    const connection=db.connection()
    const id=request.params.id

    const statement=`delete from Emp_tb1 where Emp_ID=${id}`
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