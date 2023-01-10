import React, {useEffect, useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faArrowRight, faBars, faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
    const [isNavVisible, setNavVisible] = useState(false);
    const [isSmallScreen, setSmallScreen] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 700px)");
        mediaQuery.addListener(handleMediaQueryChange);
        // handleMediaQueryChange(mediaQuery);

        return () => {
            mediaQuery.removeListener(handleMediaQueryChange);
        }
    }, [])

    const handleMediaQueryChange = (mediaQuery: MediaQueryListEvent) => {
        if (mediaQuery.matches) {
            setSmallScreen(true);
        }
        else {
            setSmallScreen(false);
        }
    }

    const toggleNav = () => {
        setNavVisible(!isNavVisible);
    }

    return (
        <header className="header">
            {(isNavVisible || !isSmallScreen) && (
                <>
                    <div className="header-left">
                        <p className="logo">GlobalTalk</p>
                        <p className="verline">|</p>
                        <nav className="nav">
                            <a href="/" className="topics">Home</a>
                            <a href="/" className="topics">Textbook</a>
                            <a href="/" className="topics">Statistics</a>
                            <div className="dropdown">
                                <button className="dropbtn">Games <FontAwesomeIcon icon={faChevronDown}/>
                                </button>
                                <div className="dropdown-content">
                                    <a href="/">Sprint <FontAwesomeIcon icon={faArrowRight}/></a>
                                    <a href="/">Audio-call <FontAwesomeIcon icon={faArrowRight} /></a>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div className="header-right">
                        <button className="loginbtn">Login <FontAwesomeIcon icon={faArrowRight}/></button>
                        <button className="signupbtn">Sign Up</button>
                    </div>

                </>
            )}
            <button onClick={toggleNav} className="burger"><FontAwesomeIcon icon={faBars} /></button>
        </header>
    )
}
// <i className="fa fa-bars"></i>