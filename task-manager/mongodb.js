const { MongoClient, ObjectID } = require('mongodb'); //destructuring mongodb object

const connectionURL = 'mongodb://127.0.0.1/:27017'
const databaseName = 'task-manager'


MongoClient.connect(connectionURL, {
    useNewUrlParser: true
}, (error, client) => {
    if (error) {
        return console.log('Unable to connect database', error) //use return here to stop program from do code below if error happens alternatively you can put else if
    }
    //'Connection Established' if code gets here.
    const db = client.db(databaseName)

    // db.collection('users').deleteMany({ 
    //     age: { $gt: 27 } 
    // })
    // .then((result) => {
    //   console.log(result.deletedCount)
    // }).catch((error) => {
    //   console.log(error)
    // })  
    //  db.collection('tasks').insertOne({
    //      description: 'pet cat',
    //      completed: false
    //  }).then((result) => {
    //    console.log(result)
    //  }).catch((error) => {
    //    console.log(error)  
    //  })

     db.collection('tasks').deleteOne({
         description: 'get milk'
     }).then((result) => {
         console.log(result)
     }).catch((error) => {
         console.error(error)
     }) 
})