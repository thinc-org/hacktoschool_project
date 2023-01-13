import React from "react";
import landingStyle from "../styles/landing.module.css";
import { BsFillLightningFill } from "react-icons/bs";
import { RxDividerVertical } from "react-icons/rx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import meme from "../public/meme.jpeg";
import Image from "next/image";

export default function Landingmeme() {
  return (
    <div className={landingStyle.container}>
      <section className={landingStyle.contentcon}>
        <div className={landingStyle.contentl}>
          <div className={landingStyle.textcon}>
            <p className={landingStyle.t1}>E-COURSE PLATFORM</p>
            <p className={landingStyle.t2}>
              Learning and<br></br> teaching online,<br></br> made easy.
            </p>
            <p className={landingStyle.t3}>
              Gain subject certification or earn money<br></br> while teaching
              online with GlobalTalk.
            </p>
          </div>
          <div className={landingStyle.button}>
            <a href="/signup" className={landingStyle.signInbutton}>
              Sign In <FontAwesomeIcon icon={faArrowRight} />
            </a>
            <a href="#" className={landingStyle.learnMorebutton}>
              Learn More <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </div>
          <div className={landingStyle.user}>
            <div className={landingStyle.box}>
              <p className={landingStyle.number}>
                <BsFillLightningFill className={landingStyle.icon} />
                700+
                <RxDividerVertical className={landingStyle.line} />
              </p>
              <p className={landingStyle.text}>Hours of content</p>
            </div>
            <div className={landingStyle.box}>
              <p className={landingStyle.number}>
                <BsFillLightningFill className={landingStyle.icon} />
                575k+
              </p>
              <p className={landingStyle.text}>Active Users</p>
            </div>
          </div>
        </div>
        <div className={landingStyle.contentr}>
          <Image src={meme} alt={"a meme"} />
        </div>
      </section>
    </div>
  );
}
