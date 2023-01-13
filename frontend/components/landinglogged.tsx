import React from "react";
import landingloggedStyle from "../styles/landinglogged.module.css";
import { BsFillLightningFill } from "react-icons/bs";
import image4 from "../public/image 8.png";
import image2 from "../public/image 1.png";
import image3 from "../public/image 2.png";
import image1 from "../public/aaa.png";
import Image from "next/image";

export default function Landinglogged() {
  return (
    <>
      <div className={landingloggedStyle.bg}>
        <section className={landingloggedStyle.contentcon}>
          <div className={landingloggedStyle.contentl}>
            <div className={landingloggedStyle.textcon}>
              <p className={landingloggedStyle.t1}>E-COURSE PLATFORM</p>
              <p className={landingloggedStyle.t2}>
                Learning and<br></br> teaching online,<br></br> made easy.
              </p>
              <p className={landingloggedStyle.t3}>
                Practice your English and learn new things<br></br> with the
                platform.
              </p>
            </div>
            <div className={landingloggedStyle.user}>
              <div className={landingloggedStyle.box}>
                <p className={landingloggedStyle.number}>
                  <BsFillLightningFill className={landingloggedStyle.icon} />
                  600
                </p>
                <p className={landingloggedStyle.text}>Active Users</p>
              </div>
            </div>
          </div>
          <div className={landingloggedStyle.contentr}>
            <Image src={image1} alt={"a boy"} />
          </div>
        </section>
      </div>

      <div className={landingloggedStyle.bg2}>
        <section className={landingloggedStyle.contentcon}>
          <div className={landingloggedStyle.contentl}>
            <Image src={image2} alt={"a girl and a boy"} />
          </div>
          <div className={landingloggedStyle.contentr}>
            <div className={landingloggedStyle.textcon}>
              <p className={landingloggedStyle.t2}>
                Learn a language<br></br> in a playful way
              </p>
              <p className={landingloggedStyle.t3}>
                Make learning words more fun<br></br> with mini-games
              </p>
            </div>
          </div>
        </section>
      </div>

      <div className={landingloggedStyle.bg}>
        <section className={landingloggedStyle.contentcon}>
          <div className={landingloggedStyle.contentl}>
            <div className={landingloggedStyle.textcon}>
              <p className={landingloggedStyle.t2}>
                Increase your<br></br> vocabulary
              </p>
              <p className={landingloggedStyle.t3}>
                Traditional and new effective<br></br> approaches to word study
              </p>
            </div>
          </div>
          <div className={landingloggedStyle.contentr}>
            <Image src={image3} alt={"a girl"} />
          </div>
        </section>
      </div>

      <section className={landingloggedStyle.contentcon}>
        <div className={landingloggedStyle.contentl}>
          <Image src={image4} alt={"another girl"} />
        </div>
        <div className={landingloggedStyle.contentr}>
          <div className={landingloggedStyle.textcon}>
            <p className={landingloggedStyle.t2}>
              Watch your<br></br> progress every day
            </p>
            <p className={landingloggedStyle.t3}>
              Save statistics on your achievements,<br></br> words learned, and
              mistakes
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
