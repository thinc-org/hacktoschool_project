import React from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import Textbookheader from "../components/textbookheader";
import Coursethumbnail from "../components/coursethumbnail";
import PagesStyle from "../styles/pages.module.css";

export default function Textbook() {
  return (
    <>
      <Header></Header>
      <div className={PagesStyle.pages}>
        <Textbookheader></Textbookheader>
        <div className={PagesStyle.contents}>
          <Coursethumbnail></Coursethumbnail>
          <Coursethumbnail></Coursethumbnail>
          <Coursethumbnail></Coursethumbnail>
          <Coursethumbnail></Coursethumbnail>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
