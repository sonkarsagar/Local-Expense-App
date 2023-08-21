const jwt = require("jsonwebtoken");
const User = require("../models/user");

const authorize = async (req, res, next) => {
  const token = req.header("Authorization");
  try {
    const decodedToken = jwt.verify(token, "chaabi");
    const userId = decodedToken.userId;

    const userFound = await User.findById(userId);
    if (!userFound) {
      return res.status(404).json({ error: "User not found" });
    }
    req.user = userFound;
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ error: "Unauthorized" });
  }
};

module.exports = { authorize };

// const jwt = require("jsonwebtoken");
// const user = require("../models/user");

// const authorize = (req, res, next) => {
//   const token = req.header("Authorization");
//   const userId=jwt.verify(token, 'chaabi')
//   user.findByPk(userId.userId).then((result) => {
//     req.user=result
//     next()
//   }).catch((err) => {
//     console.log(err);
//   });
// }

// module.exports = { authorize };
