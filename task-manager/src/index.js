const express = require('express')
require('./db/mongoose.js')
const User = require('./models/user')
const Task = require('./models/task')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())  //automatically parse json to object

app.post('/users', (req, resp) => {
   
    const user = new User(req.body)
    user.save().then(() => {
       //console.log(req.body)
       resp.status(200).send(user)
    }).catch((error) => {
       resp.status(400).send(error)
    })
})

app.listen(port,() => {
    console.log(`Server is up on port ${port}`)
})

