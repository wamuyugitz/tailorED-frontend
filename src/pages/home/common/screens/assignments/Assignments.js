import "./Assignments.css";
import ScreenTab from "../../components/screentab/ScreenTab";
import ScreenHeader from "../../components/screenHeader/ScreenHeader";
import AssignmentCard from "../../components/assignments/AssignmentCard";

export default function Assignments({ handleModalType }) {
  return (
    <div className="assignments">
      <ScreenHeader
        title={"Assignments"}
        btnText={"Add Assignments"}
        handleModalType={() => handleModalType("form", "add-course-content")}
      />
      <ScreenTab
        tabs={["All", "English", "Kiswahili", "Chemistry", "Biology"]}
      />
      <div className="assignment-cards">
        <AssignmentCard
          courseName={"English Lesson 1 (Lorem Ipsum Totem)"}
          assignmentName={"PCB Boards"}
        />
        <AssignmentCard
          courseName={"English Lesson 1 (Lorem Ipsum Totem)"}
          assignmentName={"PCB Boards"}
        />
        <AssignmentCard
          courseName={"English Lesson 1 (Lorem Ipsum Totem)"}
          assignmentName={"PCB Boards"}
        />
        <AssignmentCard
          courseName={"English Lesson 1 (Lorem Ipsum Totem)"}
          assignmentName={"PCB Boards"}
        />
        <AssignmentCard
          courseName={"English Lesson 1 (Lorem Ipsum Totem)"}
          assignmentName={"PCB Boards"}
        />
      </div>
    </div>
  );
}
