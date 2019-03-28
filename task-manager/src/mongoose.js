const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
    useNewUrlParser: true,
    useCreateIndex: true
})

// const User = mongoose.model('User', {
//    name: {
//         type: String,
//         required: true,
//         trim: true,
//    },
//    age: {
//         type: Number,
//         default: 0,
//         validate (value) {
//           if (value < 0) {
//               throw new Error ('Age must be a postive number')
//           }
//         }
//    },
//    email: {
//        type: String,
//        required: true,
//        trim: true,
//        lowercase: true,
//        validate(value) {
//            if (!validator.isEmail(value)) {
//                throw new Error('Email is Invalid');               
//            }
//         }
//     },
//     password: {
//         type: String,
//         trim: true,
//         minlength: 7,
//         required: true,
//         validate(value) {
//             if (value.toLowerCase().includes('password')) {
//                 throw new Error('Can not contain password in your password');
//             }
//         }
//     }
// })
 
// const newUser = new User({
//      name: '   dave    ',
//      email: '   Mike@rich.com     ',
//      password: 'paas'
// })

// newUser.save().then((newUser) => {    //returns a promise
//     console.log(newUser)
// }).catch((error) => {
//     console.error('error', error.message)
// }) 

const Task = mongoose.model('Tasks', {
    description: {
        type:   String,
        trim:   true,
        required: true
    },
    completed: { 
        type:   Boolean,
        default: false
    }
})

const newTask = new Task({
    //description: "  feed the cats   ",
    // completed: false,
})

newTask.save().then((addedTask) => {
  console.log(addedTask)
}).catch((error) => {
    console.log("Error", error.message)
})