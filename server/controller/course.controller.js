const Course = require("../models/course.model");

exports.createCourse = async (req, res) => {
  try {
    const { courseTitle, category } = req.body;
    if (!courseTitle || !category) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const course = await Course.create({
      courseTitle,
      category,
      creator: req.id,
    });
    return res.status(201).json({
      message: "Course created successfully",
      success: true,
      course,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Server Error",
      success: false,
    });
  }
};

exports.getAllCreatorCourses = async (req, res) => {
  try {
    const courses = await Course.find({ creator: req.id }).exec();

    if (!courses) {
      return res
        .status(404)
        .json({ message: "No courses found for this creator", courses: [] });
    }

    return res.status(200).json({ success: true, courses });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Server Error",
      success: false,
    });
  }
};
