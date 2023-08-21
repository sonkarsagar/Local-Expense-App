const bcrypt = require("bcrypt");
const User = require("../models/user");

exports.postUser = async (req, res, next) => {
  try {
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(400).json({ error: "User Already Exists" });
    } else {
      bcrypt.hash(req.body.password, 10, async (err, hashedPassword) => {
        const newUser = new User({
          name: req.body.name,
          sur: req.body.sur,
          email: req.body.email,
          password: hashedPassword
        });
        const result = await newUser.save();
        res.status(200).json(result);
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getUser = async (req, res, next) => {
  try {
    const result = await User.findById(req.user.id);
    return res.send(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};


// const user = require("../models/user");
// const bcrypt = require("bcrypt");
// const sequelize = require("../util/database");

// // req.user from auth.authorize via routes
// exports.postUser = async (req, res, next) => {
//   const t = await sequelize.transaction();
//   try {
//     const response = await user.findOne({ where: { email: req.body.email } });
//     if (response) {
//       return res.status(400).json({ error: "User Already Exists" });
//     } else {
//       bcrypt.hash(req.body.password, 10, async (err, hashedPassword) => {
//         const result = await user.create(
//           {
//             name: req.body.name,
//             sur: req.body.sur,
//             email: req.body.email,
//             password: hashedPassword,
//           },
//           { transaction: t }
//         );
//         res.status(200).json(result);
//         await t.commit();
//       });
//     }
//   } catch (error) {
//     await t.rollback();
//     console.log(error);
//   }
// };

// exports.getUser = async (req, res, next) => {
//   try {
//     const result = await user.findAll({ where: { id: req.user.id } });
//     return res.send(result);
//   } catch (error) {
//     console.log(error);
//   }
// };
