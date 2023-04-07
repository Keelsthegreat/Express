const mongoose = require('mongoose')


const sneakerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
      },
      brand: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
    //   inStock:{
    //     type: Boolean,
    //     required:true,
    //     default:false
    //   },
})



const Sneaker = mongoose.model('Sneaker', sneakerSchema)

module.exports = Sneaker;