import { useState } from "react";
import Header from "../components/header";
import Landingmeme from "../components/landingmeme";
import PagesStyle from "../styles/pages.module.css";

export default function Home() {
  return (
    <>
      <Header></Header>
      <div className={PagesStyle.pages}>
        <Landingmeme></Landingmeme>
      </div>
    </>
  );
}
