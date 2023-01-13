import React from "react";
import textbookStyle from "../styles/textbook.module.css";

type CourseData = {
  _id: string;
  courseName: string;
  courseBy: string;
  summary: string;
  detail: string;
  imageURL: string;
};
type CourseProps = {
  course: CourseData;
};

export default function Coursethumbnail(props: CourseProps) {
  const course: CourseData = props.course;
  console.log(course);

  return (
    <div className={textbookStyle.coursecontainer}>
      <img
        src="https://i.ytimg.com/vi/cqQAzpZBpAw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBQXjjI9WVA_s2O0tm0tqOkfUjC-w"
        alt="Song yang bad sad yang boi"
        className={textbookStyle.thumbnailphoto}
      ></img>
      <div className={textbookStyle.coursecontent}>
        <p className={textbookStyle.coursename}>{course.courseName}</p>
        <p className={textbookStyle.courseinstructor}>{course.courseBy}</p>
        <p className={textbookStyle.coursesummary}>{course.summary}</p>
        <div className={textbookStyle.horline}></div>
        <p className={textbookStyle.coursedetail}>{course.detail}</p>
        <button className={textbookStyle.addbtn}>Add this course</button>
        <button className={textbookStyle.removebtn}>Remove this course</button>
      </div>
    </div>
  );
}
