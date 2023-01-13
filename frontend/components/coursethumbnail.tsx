import axios from "axios";
import React from "react";
import { text } from "stream/consumers";
import textbookStyle from "../styles/textbook.module.css";
import jwt_decode from "jwt-decode";

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

  const handleAddCourse = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      const decoded: any = jwt_decode(token);
      try {
        const res = await axios.post(
          "http://localhost:4000/users/updateCourse",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: {
              username: decoded.username,
              courseId: course._id,
            },
          }
        );
        console.log(res);
        alert("Course " + course.courseName + " has been added");
      } catch (error) {
        console.log(error);
        alert("update Failed!");
      }
    } else {
      alert("Please Log In First!");
      return;
    }
  };

  return (
    <div className={textbookStyle.coursecontainer}>
      <img
        src={course.imageURL}
        alt="Song yang bad sad yang boi"
        className={textbookStyle.thumbnailphoto}
      ></img>
      <div className={textbookStyle.flex_between}>
        <div className={textbookStyle.coursecontent}>
          <p className={textbookStyle.coursename}>{course.courseName}</p>
          <p className={textbookStyle.courseinstructor}>{course.courseBy}</p>
          <p className={textbookStyle.coursesummary}>{course.summary}</p>
        </div>

        <div className={textbookStyle.coursecontent}>
          <div className={textbookStyle.horline}></div>
          <p className={textbookStyle.coursedetail}>{course.detail}</p>
          <button className={textbookStyle.addbtn} onClick={handleAddCourse}>
            Add this course
          </button>
          <button className={textbookStyle.removebtn}>
            Remove this course
          </button>
        </div>
      </div>
    </div>
  );
}
