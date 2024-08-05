import { useState } from "react";
import ScreenHeader from "../../../../common/components/screenHeader/ScreenHeader";
import "./Grades.css";
import GradesAccordion from "./GradesAccordion";

export default function Grades() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const accordionItems = [
    {
      title: "English",
    },
    {
      title: "Mathematics",
    },
    {
      title: "Kiswahili",
    },
    {
      title: "Biology",
    },
    {
      title: "Chemistry",
    },
  ];
  return (
    <div className={"grades"}>
      <ScreenHeader title={"Grades"} />
      <div className="accordion" id="accordionExample">
        {accordionItems.map((item, index) => (
          <GradesAccordion
            key={index}
            index={index}
            activeIndex={activeIndex}
            handleToggle={handleToggle}
            title={item.title}
          />
        ))}
      </div>
    </div>
  );
}
