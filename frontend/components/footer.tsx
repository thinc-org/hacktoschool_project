import React from "react";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="upper">
                <nav className="allfeature">
                    <a href="/" className="footer-topics">Home</a>
                    <a href="/" className="footer-topics">Textbook</a>
                    <a href="/" className="footer-topics">Statistics</a>
                    <a href="/" className="footer-topics">Sprint</a>
                    <a href="/" className="footer-topics">Audio-call</a>
                </nav>
                <nav className="thinc">
                    <img src="https://p-u.popcdn.net/attachments/images/000/012/271/large/logo_cleverse.png?1538033995" className="thinc-logo"/>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWQ8uCVohXkHMIuusdQqacpP-nmjylHplUGr8IwKON4KOv8x4oyrDAjSu2zBqsodF9tBw&usqp=CAU" className="thinc-logo"/>
                </nav>
            </div>
            <div className="horline"/>
            <div className="lower">@2023 Thinc. x Cleverse. Project for hack to school</div>
        </footer>
    )
}