import SearchBar from "../../components/search-bar/search-bar";
import { Hero } from "../hero/hero";
import "./home.style.css";

function Home() {
  return (
    <section className="section-home">
      <SearchBar />
      <Hero />
      <section className="forecast-cards-section">
        <div className="forecast-card">Buscar informações da API</div>
        <div className="forecast-card">Buscar informações da API</div>
        <div className="forecast-card">Buscar informações da API</div>
        <div className="forecast-card">Buscar informações da API</div>
      </section>
    </section>
  );
}

export { Home };
