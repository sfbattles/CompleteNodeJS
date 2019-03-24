const { MongoClient, ObjectID } = require('mongodb');  //destructuring mongodb object

const connectionURL = 'mongodb://127.0.0.1/:27017'
const databaseName = 'task-manager'


MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) => {
    if (error) {
      return console.log('Unable to connect database',error )  //use return here to stop program from do code below if error happens alternatively you can put else if
    } 
    //'Connection Established' if code gets here.
    const db = client.db(databaseName)

    // db.collection('users').insertOne({
    //     name: 'amanda',
    //     age: 48
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user', error)
    //     }  
    //     //successful at adding to database if you get this far.
    //     console.log(result.ops)
    // })
    // db.collection('users').insertMany([
    //         {
    //             name: 'Jen',
    //             age: 28
    //         },
    //         {
    //             name: 'Gunther',
    //             age: 27
    //         }
    //     ], (error, result) => {
    //         if (error) {
    //             return console.log('Unable to insert users', error)
    //         }  
    //         console.log(result.ops)
    //     })
    //    db.collection('tasks').insertMany([
    //        {
    //            description: 'get milk',
    //            completed: true
    //        },
    //        {
    //         description: 'Pick Up Amanda',
    //         completed: false
    //        },
    //        {
    //         description: 'get oil change',
    //         completed: false
    //        },           
    //    ]), (error, result) => {
    //       if (error) {
    //         return console.log('Unable to add Tasks to collection')              
    //       }
    //       console.log(result.ops)  
    //    }
    })