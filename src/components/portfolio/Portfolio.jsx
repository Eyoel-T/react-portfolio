import "./portfolio.scss";
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from "../../data";
import { useState } from "react";
export default function Portfolio() {
  const [display, setDisplay] = useState(featuredPortfolio);

  const handelClick = (e) => {
    e.target.classList.add("active");
    const displayData = e.target.getAttribute("id");
    switch (displayData) {
      case "featuredPortfolio":
        setDisplay(featuredPortfolio);
        break;
      case "webPortfolio":
        setDisplay(webPortfolio);
        break;
      case "mobilePortfolio":
        setDisplay(mobilePortfolio);
        break;
      case "designPortfolio":
        setDisplay(designPortfolio);
        break;
      case "contentPortfolio":
        setDisplay(contentPortfolio);
        break;
      default:
        break;
    }

    for (
      var i = 0;
      i < document.querySelectorAll(".portfolio li").length;
      i++
    ) {
      if (
        e.target.innerText !==
        document.querySelectorAll(".portfolio li")[i].innerText
      ) {
        document
          .querySelectorAll(".portfolio li")
          [i].classList.remove("active");
      }
    }
  };
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        <li
          id="featuredPortfolio"
          onClick={(e) => handelClick(e)}
          className="active"
        >
          Featured
        </li>
        <li id="webPortfolio" onClick={(e) => handelClick(e)}>
          Web App
        </li>
        <li id="mobilePortfolio" onClick={(e) => handelClick(e)}>
          Mobile App
        </li>
        <li id="designPortfolio" onClick={(e) => handelClick(e)}>
          Design
        </li>
        <li id="contentPortfolio" onClick={(e) => handelClick(e)}>
          Branding
        </li>
      </ul>
      <div className="container">
        {display.map((item) => (
          <div className="item">
            <img src={item.img} alt="" />
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
