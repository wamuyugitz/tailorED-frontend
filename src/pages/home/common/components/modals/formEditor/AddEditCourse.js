import React from "react";

export default function AddEditCourse({ formData, setFormData }) {
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <div className="form-row row">
        <div className="form-group col-lg-6">
          <label>Course Title:</label>
          <br />
          <input
            placeholder="Enter course title"
            type="text"
            name="courseTitle"
            value={formData.courseTitle || ""}
            onChange={handleChange}
          />
        </div>
        <div className="form-group col-lg-6">
          <label>Course Code:</label>
          <br />
          <input
            placeholder="Enter Course Code"
            type="text"
            name="courseCode"
            value={formData.courseCode || ""}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="form-row row">
        <div className="form-group col-lg-6">
          <label>Description:</label>
          <br />
          <input
            placeholder="Enter course Description"
            type="text"
            name="description"
            value={formData.description || ""}
            onChange={handleChange}
          />
        </div>
        <div className="form-group col-lg-6">
          <label>Level:</label>
          <br />
          <input
            placeholder="Enter level"
            type="text"
            name="level"
            value={formData.level || ""}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="form-row row">
        <div className="form-group col-lg-6">
          <label>Instructor Name:</label>
          <br />
          <input
            placeholder="Enter Instructor Name"
            type="text"
            name="instructorName"
            value={formData.instructorName || ""}
            onChange={handleChange}
          />
        </div>
        <div className="form-group col-lg-6">
          <label>Duration:</label>
          <br />
          <input
            placeholder="Enter Duration"
            type="text"
            name="duration"
            value={formData.duration || ""}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="form-row row">
        <div className="form-group col-lg-6">
          <label>Start Date:</label>
          <br />
          <input
            placeholder="Enter Start Date"
            type="date"
            name="startDate"
            value={formData.startDate || ""}
            onChange={handleChange}
          />
        </div>
        <div className="form-group col-lg-6">
          <label>Certificates offered:</label>
          <br />
          <input
            placeholder="Enter certificate offered"
            type="text"
            name="certificatesOffered"
            value={formData.certificatesOffered || ""}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="form-row row">
        <div className="form-group col-lg-6">
          <label>No of Lessons:</label>
          <br />
          <input
            placeholder="Enter No of Lessons"
            type="number"
            name="noOfLessons"
            value={formData.noOfLessons || ""}
            onChange={handleChange}
          />
        </div>
        <div className="form-group col-lg-6">
          <label>Lessons:</label>
          <br />
          <input
            placeholder="Enter Lessons"
            type="text"
            name="lessons"
            value={formData.lessons || ""}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
}
