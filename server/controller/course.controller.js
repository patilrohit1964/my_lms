const Course = require("../models/course.model");
const Lecture = require("../models/Lecture.model");
const {
  deleteMediaFromCloudinary,
  uploadMedia,
} = require("../utils/cloudinary");

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

exports.editCourse = async (req, res) => {
  try {
    const courseId = req.params.courseId;
    const {
      courseTitle,
      subTitle,
      description,
      category,
      courseLevel,
      coursePrice,
    } = req.body;
    const thumbnail = req.file;
    let course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }
    let courseThumbnail;
    if (thumbnail) {
      if (course.courseThumbnail) {
        const publicId = course.courseThumbnail.split("/").pop().split(".")[0];
        await deleteMediaFromCloudinary(publicId); //delete old image
      }
      // upload a thumbnail on Cloudinary
      courseThumbnail = await uploadMedia(thumbnail.path);
    }

    const updateData = {
      courseTitle,
      subTitle,
      description,
      category,
      courseLevel,
      coursePrice,
      courseThumbnail: courseThumbnail?.secure_url,
    };
    course = await Course.findByIdAndUpdate(courseId, updateData, {
      new: true, //here we use new because we can see new updated data
    });
    return res
      .status(200)
      .json({ success: true, course, message: "course updated successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Server Error faied to create course",
      success: false,
    });
  }
};

exports.getCourseById = async (req, res) => {
  try {
    const { courseId } = req.params;
    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }
    return res.status(200).json({ success: true, course });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Server Error get course by id",
      success: false,
    });
  }
};

exports.getCourseAndDelete = async (req, res) => {
  try {
    const { courseId } = req.params;
    const course = await Course.findByIdAndDelete(courseId);
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }
    return res
      .status(200)
      .json({ success: true, course, message: "Course deleted successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Server Error id not found",
      success: false,
    });
  }
};

// lecture logic
exports.createLecture = async (req, res) => {
  try {
    const { lectureTitle } = req.body;
    const { courseId } = req.params;

    if (!lectureTitle || !courseId) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const lecture = await Lecture.create({
      lectureTitle,
    });
    const course = await Course.findById(courseId);
    if (course) {
      course.lectures.push(lecture._id);
      await course.save();
    }
    return res.status(201).json({
      success: true,
      message: "Lecture created successfully",
      lecture,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Server Error creating lecture",
      success: false,
    });
  }
};

exports.getCourseLecture = async (req, res) => {
  try {
    const { courseId } = req.params;
    const course = await Course.findById(courseId).populate("lectures").exec();

    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }
    return res.status(200).json({ success: true, lectures: course.lectures });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Server Error getting course lectures",
      success: false,
    });
  }
};
