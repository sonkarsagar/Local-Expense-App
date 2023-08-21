const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  income: {
    type: String,
    required: true
  },
  expense: {
    type: String,
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
}, {
  timestamps: true // Adds createdAt and updatedAt fields
});

module.exports = mongoose.model('Expense', expenseSchema);

// const Sequelize=require('sequelize')
// const sequelize=require('../util/database')

// const expense=sequelize.define('expense',{
//     id:{
//         type: Sequelize.INTEGER,
//         autoIncrement: true, 
//         allowNull: false,
//         primaryKey: true
//     },
//     date: {
//         type: Sequelize.STRING,
//         allowNull: false
//     },
//     description:{
//         type: Sequelize.STRING,
//         allowNull:false
//     },
//     category:{
//         type: Sequelize.STRING,
//         allowNull: false
//     },
//     income:{
//         type:Sequelize.STRING,
//         allowNull: false
//     },
//     expense:{
//         type:Sequelize.STRING,
//         allowNull: false
//     },
// })

// module.exports=expense