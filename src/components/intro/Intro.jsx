import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
export default function Intro() {
  const typeText = useRef();
  //
  useEffect(() => {
    init(typeText.current, {
      showCursor: true,
      backDelay: 2500,
      strings: ["Developer", "Content Creator"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/man.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Eyoel Tewodros</h1>
          <h3>
            Freelance <span ref={typeText}> </span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
