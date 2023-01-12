import React from "react";
import footerStyle from "../styles/footer.module.css";

export default function Footer() {
  return (
    <footer className={footerStyle.footer}>
      <div className={footerStyle.thisone}></div>
      <div className={footerStyle.upper}>
        <nav className={footerStyle.allfeature}>
          <a href="/" className={footerStyle.footertopics}>
            Home
          </a>
          <a href="/" className={footerStyle.footertopics}>
            Textbook
          </a>
          <a href="/" className={footerStyle.footertopics}>
            Statistics
          </a>
          <a href="/" className={footerStyle.footertopics}>
            Sprint
          </a>
          <a href="/" className={footerStyle.footertopics}>
            Audio-call
          </a>
        </nav>
        <nav className={footerStyle.thinc}>
          <img
            src="https://p-u.popcdn.net/attachments/images/000/012/271/large/logo_cleverse.png?1538033995"
            className={footerStyle.thinclogo}
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWQ8uCVohXkHMIuusdQqacpP-nmjylHplUGr8IwKON4KOv8x4oyrDAjSu2zBqsodF9tBw&usqp=CAU"
            className={footerStyle.thinclogo}
          />
        </nav>
      </div>
      <div className={footerStyle.horline} />
      <div className={footerStyle.lower}>
        @2023 Thinc. x Cleverse. Project for hack to school
      </div>
    </footer>
  );
}
