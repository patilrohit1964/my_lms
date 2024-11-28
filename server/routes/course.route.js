const express = require("express");
const router = express.Router();

const isAuthenticated = require("../middlewares/isAuthenticated");
const upload = require("../utils/multer");
const {
  createCourse,
  getAllCreatorCourses,
  editCourse,
  getCourseById,
  getCourseAndDelete,
  createLecture,
  getCourseLecture,
  editLecture,
  removeLecture,
  getLectureById,
} = require("../controller/course.controller");

router.route("/").post(isAuthenticated, createCourse);
router.route("/").get(isAuthenticated, getAllCreatorCourses);
router
  .route("/:courseId")
  .put(isAuthenticated, upload.single("courseThumbnail"), editCourse);
router.route("/:courseId").get(isAuthenticated, getCourseById);
router.route("/:courseId").delete(isAuthenticated, getCourseAndDelete);
router.route("/:courseId/lecture").post(isAuthenticated, createLecture);
router.route("/:courseId/lecture").get(isAuthenticated, getCourseLecture);
router
  .route("/:courseId/lecture/:lectureId")
  .post(isAuthenticated, editLecture);
router.route("/lecture/:lectureId").delete(isAuthenticated, removeLecture);
router.route("/lecture/:lectureId").get(isAuthenticated, getLectureById);
module.exports = router;
