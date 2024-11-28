const jwt = require("jsonwebtoken");

exports.generateToken = async (res, user, message) => {
  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRETE_KEY, {
    expiresIn: "1d",
  });

  return res
    .status(200)
    .cookie("token", token, {
      httpOnly: true,
      sameSite: "strict",
      maxAge: 24 * 60 * 60 * 1000,
    })
    .json({
      success: true,
      message,
      user,
    });
};