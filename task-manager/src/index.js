const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())  //automatically parse json to object

app.post('/users', (req, resp) => {
   
    const user = new User(req.body)
    user.save().then(() => {
       //console.log(req.body)
     //  resp.status(201).send(req.body)
       resp.status(201).send('working')
    }).catch((error) => {
       resp.status(204).send(error)
    })
})

app.listen(port,() => {
    console.log(`Server is up on port ${port}`)
})