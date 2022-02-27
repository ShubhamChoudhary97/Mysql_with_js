const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    database: 'mytestdb',
    user: 'myuser',
    password: 'mypass'
})

function getAllPersons(){
    return new Promise(function(resolve,reject){
            connection.query(
                `SELECT * FROM persons`,
                function(err,results,fields){
                    if(err)
                    {
                        reject(err)
                    }
                    else{
                        resolve(results)
                    }
                    //connection.close()
                }
            )
    })
}

function addNewPerson(name,age,city){
    return new Promise((resolve,reject)=>{
        connection.query(
            `INSERT INTO persons(name,age,city) VALUES(?,?,?)`,
            [name,age,city],
            function(err,results){
                if(err){
                    reject(err)
                }
                else{
                    resolve()
                }
            }
        )
    })
}

exports = module.exports={
    getAllPersons,
    addNewPerson
}