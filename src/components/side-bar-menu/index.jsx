import "./side-bar-menu.styles.css";
import { GoHome } from "react-icons/go";
import { TemperatureCard } from "../temperature-card";

function SideBarMenu() {
  return (
    <>
      <header className="header">
        <div className="header-title">
          <img src="src\assets\logo.png" alt="" />
          <span>Weather Forecast</span>
        </div>
        <nav className="navigation-bar">
          <ul>
            <li>
              <a>
                <GoHome className="icon" />
                Home
              </a>
            </li>
          </ul>
        </nav>
        <TemperatureCard />
      </header>
    </>
  );
}

export { SideBarMenu };
