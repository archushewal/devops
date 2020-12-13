const mysql=require('mysql')

function openConnection(){
    const connection=mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'manager',
        database:'mystore',
        port:3306
    })

    return connection
}

module.exports={
    connection:openConnection
}