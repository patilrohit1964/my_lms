const express = require("express");
const router = express.Router();
const {
  register,
  login,
  getUserProfile,
  logout,
  updateProfile,
} = require("../controller/user.controller");
const isAuthenticated = require("../middlewares/isAuthenticated");

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/profile").get(isAuthenticated, getUserProfile);
router.route("/logout").get(logout);
router.route("/profile/update").put(isAuthenticated, updateProfile);
module.exports = router;
