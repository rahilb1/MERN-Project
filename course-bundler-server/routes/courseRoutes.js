import express from 'express';
import { createCourse, getAllCourses } from '../controllers/courseController.js';

const router = express.Router();

// Get all courses without lectures
router.route('/courses').get(getAllCourses);

// Create a new course- Admin only
router.route("/createcourse").post(createCourse);

// Add lecture, delete course, get course details

// Delete Lecture

    export default router;