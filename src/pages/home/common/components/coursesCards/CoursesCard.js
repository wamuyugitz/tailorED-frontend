import React from "react";
import "./CoursesCard.css";
import SchoolIcon from "@mui/icons-material/School";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import PersonIcon from "@mui/icons-material/Person";

export default function CoursesCards({ course }) {
  return (
    <div className="courses-card col-lg-3">
      <div className="card-header">
        <div className="icon-div">
          <SchoolIcon />
        </div>
        <p>
          {course.noOfLessons} lessons {course.noOfQuizzes} quizzes
        </p>
      </div>
      <div>
        <h4>{course.courseTitle}</h4>
        <p>{course.description}</p>
      </div>
      <div className="card-footer">
        <div className="card-footer-left">
          <PersonIcon />
          <p>{course.instructorName}</p>
        </div>
        <div className="card-footer-right">
          {/* <DriveFileRenameOutlineIcon />
          <DeleteIcon /> */}
        </div>
      </div>
    </div>
  );
}
