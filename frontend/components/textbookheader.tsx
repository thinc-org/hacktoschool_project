import { faGear, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import textbookheaderStyle from "../styles/textbook.module.css";

export default function Textbookheader() {
  const [isMyCourses, setMyCourses] = useState(false);

  const handleMyCourses = () => {
    setMyCourses(!isMyCourses);
  };

  return (
    <div className={textbookheaderStyle.textbookheader}>
      <div className={textbookheaderStyle.textbooklogo}>
        <FontAwesomeIcon icon={faGraduationCap} />
        &nbsp;Courses
      </div>
      <div className={textbookheaderStyle.textbookheaderright}>
        <div className={textbookheaderStyle.setting}>
          <button className={textbookheaderStyle.settingbtn}>
            <FontAwesomeIcon icon={faGear} />
          </button>
          <div className={textbookheaderStyle.settingcontent}>
            <input
              type="checkbox"
              id="myCourses"
              className="settinginput"
              checked={isMyCourses}
              onChange={handleMyCourses}
            />
            <p>Show my courses</p>
          </div>
        </div>
      </div>
    </div>
  );
}
