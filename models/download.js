const mongoose = require('mongoose');

const downloadSchema = new mongoose.Schema({
  link: {
    type: String,
    required: true
  }
}, {
  timestamps: true // Adds createdAt and updatedAt fields
});

module.exports = mongoose.model('Download', downloadSchema);

// const Sequelize=require('sequelize')
// const sequelize=require('../util/database')

// const Download=sequelize.define('Download',{
//     id:{
//         type:Sequelize.INTEGER,
//         allowNull: false,
//         autoIncrement: true,
//         primaryKey: true
//     },
//     link: {
//         type: Sequelize.STRING,
//         allowNull: false
//     },
// })
// module.exports=Download