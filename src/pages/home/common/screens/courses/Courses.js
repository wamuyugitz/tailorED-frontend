import React, { useEffect, useState } from "react";
import axios from "axios";
import CoursesCards from "../../components/coursesCards/CoursesCard";
import ScreenHeader from "../../components/screenHeader/ScreenHeader";
import ScreenTab from "../../components/screentab/ScreenTab";
import "./Courses.css";

export default function Courses({ handleModalType }) {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/courses");
        setCourses(response.data);
      } catch (err) {
        setError("Error fetching courses");
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="courses">
      <ScreenHeader
        title={"Courses"}
        btnText={"Add Course"}
        handleModalType={() => handleModalType("form", "add-course")}
      />
      <ScreenTab
        tabs={["All", "English", "Biology", "Kiswahili", "Chemistry"]}
      />
      <div className="courses-cards row">
        {courses.length === 0 ? (
          <p>No courses yet</p>
        ) : (
          courses.map((course) => (
            <CoursesCards key={course._id} course={course} />
          ))
        )}
      </div>
    </div>
  );
}
