/* eslint-disable react/jsx-no-undef */
import SearchBar from "../../components/search-bar/search-bar";
import { Hero } from "../hero/hero";
import "./home.style.css";

function Home() {
  return (
    <section className="section-home">
      <SearchBar />
      <Hero />
    </section>
  );
}

export { Home }
