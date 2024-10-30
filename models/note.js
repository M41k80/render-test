import mongoose from 'mongoose'

const noteSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
    minlength: 5
  },
  important: Boolean,
})

noteSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const Note = mongoose.model('Note', noteSchema)
export default Note





// const mongoose = require('mongoose')

// mongoose.set('strictQuery', false)

// const config = require('../utils/config')

// logger.info(`Server running on port ${config.PORT}`)

// // const url = process.env.MONGODB_URI
// // console.log('connecting to', url)

// mongoose.connect(url)

//   .then(() => {
//     console.log('connected to MongoDB')
//   })
//   .catch(error => {
//     console.log('error connecting to MongoDB:', error.message)
//   })

// const noteSchema = new mongoose.Schema({
//   content: {
//     type: String,
//     minlength: 5,
//     required: true
//   },
//   important: Boolean
// })

// noteSchema.set('toJSON', {
//   transform: (document, returnedObject) => {
//     returnedObject.id = returnedObject._id.toString()
//     delete returnedObject._id
//     delete returnedObject.__v
//   }
// })


// const Note = mongoose.model('Note', noteSchema)
// module.exports = Note