import React, { useEffect, useState } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import Textbookheader from "../components/textbookheader";
import Coursethumbnail from "../components/coursethumbnail";
import PagesStyle from "../styles/pages.module.css";
import axios from "axios";

export default function Textbook() {
  const [courses, setCourses] = useState<any[]>([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await axios.get("http://localhost:4000/courses");
      const data = res.data;
      console.log(data);
      setCourses(data);
    };
    fetchCourses();
  }, []);

  return (
    <>
      <Header></Header>
      <div className={PagesStyle.pages}>
        <Textbookheader></Textbookheader>
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
