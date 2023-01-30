import { FONT_MANIFEST } from "next/dist/shared/lib/constants";
import { useEffect, useState } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import Landing from "../components/landing";
import Landinglogged from "../components/landinglogged";
import PagesStyle from "../styles/pages.module.css";

export default function Home() {
  const [isLogin, setLogin] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }, [isLogin]);
  return (
    <>
      <Header></Header>
      <div className={PagesStyle.pages}>
        {!isLogin && <Landing></Landing>}
        {isLogin && (
          <>
            <Landinglogged></Landinglogged>
            <Footer></Footer>
          </>
        )}
      </div>
    </>
  );
}
