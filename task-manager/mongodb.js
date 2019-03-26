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

    db.collection('tasks').updateMany({completed: false},
        { 
            $set: { 
            completed: true 
            } 
        }).then((result) => {
            console.log(result)
        }).catch((error) => {
            console.log(error)
         })

//    db.collection('users').updateOne({
//         _id: new ObjectID("5c96cfe34d20619be4ca129c")
//     },{
//         // $set: {
//         //     name: 'Mike'
//         // }
//         $inc: {
//             age: 1
//         }
//     }).then((result) => {
//        console.log(result)
//     }).catch((error) => {
//        console.log(error)
//     })
})