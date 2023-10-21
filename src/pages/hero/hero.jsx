/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import './hero.style.css'
import { useContext } from 'react'
import { CityContext } from "../../contexts/cityContext";

function Hero(){

  const { city } = useContext(CityContext)

  console.log(city)


    return (
        <section className="hero-section">
          {city && city[0] && city[0].name ? city[0].name : "Pesquise por uma cidade"}
        </section>
    )
}

export { Hero}