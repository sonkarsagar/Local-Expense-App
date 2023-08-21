const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  sur: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  premiumUser: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('User', userSchema);

// const Sequelize=require('sequelize')
// const sequelize=require('../util/database')
// const user = sequelize.define('user',{
//     id: {
//         autoIncrement: true,
//         primaryKey: true,
//         allowNull: false,
//         type: Sequelize.INTEGER
//     },
//     name: {
//         allowNull: false,
//         type: Sequelize.STRING
//     },
//     sur: {
//         allowNull: false,
//         type: Sequelize.STRING
//     },
//     email: {
//         allowNull: false,
//         type: Sequelize.STRING,
//         unique: true
//     },
//     password: {
//         allowNull: false,
//         type: Sequelize.STRING
//     },
//     premiumUser: {
//         type: Sequelize.BOOLEAN,
//         defaultValue: false
//     }
// })

// module.exports=user