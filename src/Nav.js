import React, { useEffect, useState } from "react";
import "./Nav.css";
function Nav() {
  const [show, handleShow] = useState(false);
  const transitionNavBar = () => {
    if (window.screenY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);
  return (
    <div className={`nav ${show && "nav_black"}`}>
      <div className="nav_contents">
        <img
          id="nav_logo"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.tmf-group.com%2F-%2Fmedia%2Fimages%2Flogos%2Fcase-study-logos%2Fnetflix.png&f=1&nofb=1"
          alt="logo"
        />
        <img
          id="nav_avatar"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmir-s3-cdn-cf.behance.net%2Fproject_modules%2Fdisp%2F366be133850498.56ba69ac36858.png&f=1&nofb=1"
          alt="avatar"
        />
      </div>
    </div>
  );
}

export default Nav;
