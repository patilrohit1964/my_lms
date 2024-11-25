const express = require("express");
const router = express.Router();

const isAuthenticated = require("../middlewares/isAuthenticated");
const upload = require("../utils/multer");
const {
  createCourse,
  getAllCreatorCourses,
} = require("../controller/course.controller");

router.route("/").post(isAuthenticated, createCourse);
router.route("/").get(isAuthenticated, getAllCreatorCourses);
module.exports = router;
