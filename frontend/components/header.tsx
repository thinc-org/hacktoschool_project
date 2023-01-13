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

export default function Header() {
  const [isNavVisible, setNavVisible] = useState(false);
  const [isSmallScreen, setSmallScreen] = useState(false);

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
              <a href="/" className={headerStyle.topics}>
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
            <a className={headerStyle.loginbtn} href="/login">
              Login&nbsp; <FontAwesomeIcon icon={faArrowRight} />
            </a>
            <a className={headerStyle.signupbtn} href="/signup">
              Sign Up
            </a>
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
          <a className={headerStyle.loginbtn} href="/login">
            Login&nbsp; <FontAwesomeIcon icon={faArrowRight} />
          </a>
        </div>
      </div>
    </header>
  );
}
/*<div className="user">
<div className="user-pic"><p>A</p></div>
<button className="user-name">Alex <FontAwesomeIcon icon={faChevronDown}/></button>
<div className="user-content">
    <a href="/">Log Out <FontAwesomeIcon icon={faArrowRight}/></a>
</div>
</div>*/
