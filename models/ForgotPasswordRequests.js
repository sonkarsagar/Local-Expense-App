const mongoose = require('mongoose');

const forgotPasswordRequestsSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true
  },
  isActive: {
    type: String,
    required: true
  }
}, {
  timestamps: true // Adds createdAt and updatedAt fields
});

module.exports = mongoose.model('ForgotPasswordRequests', forgotPasswordRequestsSchema);

// const Sequelize=require('sequelize')
// const sequelize=require('../util/database')
// const ForgotPasswordRequests=sequelize.define('ForgotPasswordRequests',{
//     id:{
//         type: Sequelize.STRING,
//         allowNull: false,
//         primaryKey: true
//     },
//     isActive:{
//         type: Sequelize.STRING,
//         allowNull: false
//     }
// })

// module.exports=ForgotPasswordRequests