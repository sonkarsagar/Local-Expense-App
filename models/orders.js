const mongoose = require('mongoose');

const ordersSchema = new mongoose.Schema({
  paymentId: String,
  orderId: String,
  status: String
}, {
  timestamps: true // Adds createdAt and updatedAt fields
});

module.exports = mongoose.model('Orders', ordersSchema);

// const Sequelize=require('sequelize')
// const sequelize=require('../util/database')
// const Orders=sequelize.define('Orders',{
//     id: {
//         primaryKey: true,
//         autoIncrement: true,
//         type: Sequelize.INTEGER,
//         allowNull: false
//     },
//     paymentId: {type: Sequelize.STRING},
//     orderId: {type: Sequelize.STRING},
//     status: {type: Sequelize.STRING}
// })

// module.exports=Orders