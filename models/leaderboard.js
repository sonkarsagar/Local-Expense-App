const mongoose = require('mongoose');

const leaderboardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  totalIncome: {
    type: String,
    required: true
  },
  totalExpense: {
    type: Number,
    required: true
  }
}, {
  timestamps: true // Adds createdAt and updatedAt fields
});

module.exports = mongoose.model('Leaderboard', leaderboardSchema);

// const Sequelize=require('sequelize')
// const sequelize=require('../util/database')

// const Leaderboard=sequelize.define('Leaderboard',{
//     id:{
//         type: Sequelize.INTEGER,
//         allowNull: false,
//         primaryKey: true,
//         autoIncrement: true
//     },
//     name:{
//         type: Sequelize.STRING,
//         allowNull: false,
//     },
//     totalIncome:{
//         type: Sequelize.STRING,
//         allowNull: false
//     },
//     totalExpense: {
//         type: Sequelize.INTEGER,
//         allowNull: false,
//     }
// })

// module.exports=Leaderboard