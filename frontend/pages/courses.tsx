import React, { useEffect, useState } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import Textbookheader from "../components/textbookheader";
import Coursethumbnail from "../components/coursethumbnail";
import PagesStyle from "../styles/pages.module.css";
import axios from "axios";
import { faGear, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import textbookheaderStyle from "../styles/textbook.module.css";
import jwt_decode from "jwt-decode";

type Course = {
  _id: string;
  courseName: string;
  courseBy: string;
  summary: string;
  detail: string;
  imageURL: string;
  students: string[];
};

export default function Textbook() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [isMyCourses, setMyCourses] = useState(false);

  const handleMyCourses = () => {
    setMyCourses(!isMyCourses);
  };
  const fetchCourses = async () => {
    const res = await axios.get("http://localhost:4000/courses");
    const data = res.data;
    console.log(data);
    setCourses(data);
  };
  const fetchMyCoursesId = async () => {
    const token = localStorage.getItem("token");

    try {
      if (token) {
        const decode: any = jwt_decode(token);
        const nameSearch = decode.username;

        const userData = await axios.post(
          "http://localhost:4000/users/searchId",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: {
              username: nameSearch,
            },
          }
        );

        const coursesId: string[] = userData.data.coursesId;
        const newCourses = [];
        for (let i = 0; i < courses.length; i++) {
          for (let j = 0; i < coursesId.length; j++) {
            if (courses[i]._id === coursesId[j]) {
              newCourses.push(courses[i]);
            }
          }
        }
        setCourses(newCourses);
      } else {
        alert("Please Login First!");
        return;
      }
    } catch (error) {
      alert("Cant Find Courses!");
    }
  };

  // useEffect(() => {
  //   if (!isMyCourses) {
  //     fetchCourses();
  //   } else {
  //     fetchMyCoursesId();
  //   }
  //   console.log(isMyCourses);
  //   console.log(courses);
  // }, [isMyCourses, courses]);

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <>
      <Header></Header>
      <div className={PagesStyle.pages}>
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
        <div className={PagesStyle.contents}>
          {courses.map((course) => {
            return <Coursethumbnail key={course._id} course={course} />;
          })}
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}
