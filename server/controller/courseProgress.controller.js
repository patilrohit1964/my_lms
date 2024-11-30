const Course = require("../models/course.model");
const CourseProgress = require("../models/courseProgress");

exports.getCourseProgress = async (req, res) => {
  try {
    const { courseId } = req.params;
    const userId = req.id;
    // step 1 fetch the user course progress
    let courseProgress = await CourseProgress.findOne({
      courseId,
      userId,
    }).populate("courseId");
    const courseDetails = await Course.findById({ courseId });
    if (!courseDetails) {
      return res.status(404).json({ message: "Course not found" });
    }
    // step 2 if no progress found return course details with an empty progress
    if (!courseProgress) {
      return res.status(404).json({
        data: { courseDetails, progress: [], completed: false },
      });
    }
    // step 3 return the users course progress along with course details
    return res.status(200).json({
      data: {
        courseDetails,
        progress: courseProgress.lectureProgress,
        completed: courseProgress.completed,
      },
    });
  } catch (error) {}
};

exports.updateLectureProgress = async (req, res) => {
  try {
    const { courseId, lectureId } = req.params;
    const userId = req.id;
    const { progress } = req.body;
    // step 1 fetch or create course progress
    let courseProgress = await CourseProgress.findOne({ courseId, userId });
    if (!courseProgress) {
      courseProgress = await new courseProgress({ courseId, userId });
    }
    // step 2 update the lecture progress
    courseProgress.lectureProgress[lectureId] = progress;
    // step 3 check if all lectures are completed
    courseProgress.completed = courseProgress.lectureProgress.every(
      (p) => p === 100
    );
    // step 4 save the course progress
    await courseProgress.save();
    return res
      .status(200)
      .json({ message: "Lecture progress updated successfully" });
  } catch (error) {}
};
