import React from "react";
import textbookStyle from "../styles/textbook.module.css";

export default function Coursethumbnail() {
  return (
    <div className={textbookStyle.coursecontainer}>
      <img
        src="https://i.ytimg.com/vi/cqQAzpZBpAw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBQXjjI9WVA_s2O0tm0tqOkfUjC-w"
        alt="Song yang bad sad yang boi"
        className={textbookStyle.thumbnailphoto}
      ></img>
      <div className={textbookStyle.coursecontent}>
        <p className={textbookStyle.coursename}>Bad Boy</p>
        <p className={textbookStyle.courseinstructor}>Paper Planes</p>
        <p className={textbookStyle.coursesummary}>
          This song is about a sad bad boy cuz she is not interested in bad boy.
        </p>
        <div className={textbookStyle.horline}></div>
        <p className={textbookStyle.coursedetail}>
          Secretly press Like in Story You look so good, Luxury girl I want to
          know what kind of person she likes. Can you win her heart?
        </p>
        <button className={textbookStyle.addbtn}>Add this course</button>
        <button className={textbookStyle.removebtn}>Remove this course</button>
      </div>
    </div>
  );
}
