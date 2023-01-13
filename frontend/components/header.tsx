import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faBars,
  faChevronDown,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import headerStyle from "../styles/header.module.css";
import Link from "next/link";
import jwt_decode from "jwt-decode";

export default function Header() {
  //set login state here ;.;
  const [isLogin, setLogin] = useState(false);

  const [isNavVisible, setNavVisible] = useState(false);
  const [isSmallScreen, setSmallScreen] = useState(false);

  const [nickname, setNickname] = useState(" ");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }, [isLogin]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decode: any = jwt_decode(token);
      setNickname(decode.nickname);
    }
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    if (mediaQuery.matches) {
      setSmallScreen(true);
    } else {
      setSmallScreen(false);
    }
    mediaQuery.addListener(handleMediaQueryChange);
    // handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decode: any = jwt_decode(token);
      if (decode.exp < Date.now() / 1000) {
        localStorage.removeItem("token");
      }
    }
  }, []);

  const handleSignOut = async () => {
    localStorage.removeItem("token");
  };

  const handleMediaQueryChange = (mediaQuery: MediaQueryListEvent) => {
    if (mediaQuery.matches) {
      setSmallScreen(true);
    } else {
      setSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisible(!isNavVisible);
  };

  return (
    <header className={headerStyle.header}>
      {(isNavVisible || !isSmallScreen) && (
        <div className={headerStyle.seventyvw}>
          <div className={headerStyle.headerleft}>
            <p className={headerStyle.logo}>GlobalTalk</p>
            <p className={headerStyle.verline}>|</p>
            <nav className={headerStyle.nav}>
              <a href="/" className={headerStyle.topics}>
                Home
              </a>
              <a href="/textbook" className={headerStyle.topics}>
                Textbook
              </a>
              <a href="/" className={headerStyle.topics}>
                Statistics
              </a>
              <div className={headerStyle.dropdown}>
                <button className={headerStyle.dropbtn}>
                  Games <FontAwesomeIcon icon={faChevronDown} />
                </button>
                <div className={headerStyle.dropdowncontent}>
                  <a href="/">
                    Sprint <FontAwesomeIcon icon={faArrowRight} />
                  </a>
                  <a href="/">
                    Audio-call <FontAwesomeIcon icon={faArrowRight} />
                  </a>
                </div>
              </div>
            </nav>
          </div>
          <div className={headerStyle.headerright}>
            {!isLogin && (
              <>
                <a className={headerStyle.loginbtn} href="/login">
                  Login&nbsp; <FontAwesomeIcon icon={faArrowRight} />
                </a>
                <a className={headerStyle.signupbtn} href="/signup">
                  Sign Up
                </a>
              </>
            )}
            {isLogin && (
              <div className={headerStyle.user}>
                <div className={headerStyle.userpic}>
                  <p>{nickname.slice(0, 1)}</p>
                </div>
                <button className={headerStyle.username}>
                  {"  " + nickname} <FontAwesomeIcon icon={faChevronDown} />
                </button>
                <div className={headerStyle.usercontent}>
                  <a href="/" onClick={handleSignOut}>
                    Log Out <FontAwesomeIcon icon={faArrowRight} />
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      <div className={headerStyle.mobileheader}>
        <button onClick={toggleNav} className={headerStyle.burger}>
          {!isNavVisible && <FontAwesomeIcon icon={faBars} />}
          {isNavVisible && <FontAwesomeIcon icon={faXmark} />}
        </button>
        <p className={headerStyle.mobilelogo}>GlobalTalk</p>
        <div className={headerStyle.mobilelogin}>
          {!isLogin && (
            <a className={headerStyle.loginbtn} href="/login">
              Login&nbsp; <FontAwesomeIcon icon={faArrowRight} />
            </a>
          )}
          {isLogin && (
            <div className={headerStyle.user}>
              <div className={headerStyle.userpic}>
                <p>A</p>
              </div>
              <button className={headerStyle.username}>
                Alex <FontAwesomeIcon icon={faChevronDown} />
              </button>
              <div className={headerStyle.usercontent}>
                <a href="/">
                  Log Out <FontAwesomeIcon icon={faArrowRight} />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
