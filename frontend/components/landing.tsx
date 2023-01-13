import React from "react";
import landingStyle from "../styles/landing.module.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsFillLightningFill } from "react-icons/bs";
import { RxDividerVertical } from "react-icons/rx";

export default function Landing() {
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
              Sign In
              <AiOutlineArrowRight />
            </a>
            <a href="#" className={landingStyle.learnMorebutton}>
              Learn More
              <AiOutlineArrowRight />
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
          <img src="https://i.pinimg.com/550x/fb/de/08/fbde08398de3fff3d2f3bbb0418543d8.jpg" />
        </div>
      </section>
    </div>
  );
}
