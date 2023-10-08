import "./side-bar-menu.styles.css";
import { MdSort } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { FiMap } from "react-icons/fi";
import { LuCalendarDays } from "react-icons/lu";
import { FiSettings } from "react-icons/fi";
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
                <RxDashboard className="icon" />
                Forecast
              </a>
            </li>
            <li>
              <a>
                <MdSort className="icon" />
                Statistics
              </a>
            </li>
            <li>
              <a>
                <FiMap className="icon" />
                Map
              </a>
            </li>
            <li>
              <a>
                <LuCalendarDays className="icon" />
                Calendar
              </a>
            </li>
            <li>
              <a>
                <FiSettings className="icon" />
                Settings
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
