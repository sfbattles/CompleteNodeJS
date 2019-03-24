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

    // db.collection('users').findOne({
    //     _id: new ObjectID("5c96cfe34d20619be4ca129c")
    // }, (error, result) => {
    //     if (error) {
    //         return console.log("Unable to Fetch data")
    //     } else if (result === null) {
    //         return console.log("Unable to find data for required selection")
    //     }
    //     console.log(result)
    // })

    db.collection('tasks').findOne({
        _id: new ObjectID("5c96d632b3535a9c2ce264d5")
        },(error, result) => {
            if (error) {
                return console.log("Unable to Fetch data")
            } else if (result === null) {
                return console.log("Unable to find data for required selection")
            }
            console.log(result)
        })

    db.collection('tasks').find({ completed:false }).toArray((error,result) => {
        if (error) {
            return console.log("Unable to Fetch data")
        } else if (result === null) {
            return console.log("Unable to find data for required selection")
        }
        console.log(result)
    })

    // db.collection('users').find({ age: 48 }).toArray((error, users) => {
    //     console.log(users)
    // }) 
    // db.collection('users').find({ age: 48 }).count((error, count) => {
    //     console.log(count)
    // }) 
})