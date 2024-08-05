import "./OfflineContents.css";
import CoursesCards from "../../../../common/components/coursesCards/CoursesCard";
import ScreenHeader from "../../../../common/components/screenHeader/ScreenHeader";
import ScreenTab from "../../../../common/components/screentab/ScreenTab";

export default function OfflineContents() {
  return (
    <div className="offline-contents">
      <ScreenHeader title={"Offline Contents"} btnText={"Add Course"} />
      <ScreenTab
        tabs={["All", "English", "Biology", "Kiswahili", "Chemistry"]}
      />
      <div className="offline-cards row">
        <CoursesCards />
        <CoursesCards />
        <CoursesCards />
      </div>
    </div>
  );
}
