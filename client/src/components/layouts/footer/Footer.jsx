import { useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import "./Footer.css";
import NavSocial from "../header/NavSocial.jsx";

function Footer({ displayY = 0.5 }) {
  const [hidden, setHidden] = useState(true);
  const [words, setWords] = useState(`Let's Talk`);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest < window.innerHeight * displayY) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const copyEmail = () => {
    const email = "ih2168@nyu.edu";
    navigator.clipboard.writeText(email);
    setWords("COPIED!");
    setTimeout(() => {
      setWords("Let's Talk");
    }, 1500);
  };

  return (
    <div className="footer">
      {!hidden && (
        <div className="footer__container">
          <img src="/ui/robot.png" alt="robot face" className="footer__emoji" />
          <h1 className="footer__words">{words}</h1>
          <div className="footer__btns">
            <button className="footer__btn" onClick={copyEmail}>
              ih2168@nyu.edu
            </button>
            <a href="/resume.pdf" download="Ijon_Hsieh">
              <button className="footer__btn">Download Resume</button>
            </a>
          </div>
          <NavSocial />
          <p className="footer__copyright">
            Copyright © I-Jon Hsieh | All right reserved
          </p>
        </div>
      )}
    </div>
  );
}

export default Footer;
