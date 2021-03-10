import React, { useState } from "react";
import { heroes } from "../components/data/dataHero";
import HeroCard from "../components/heroes/HeroCard";

export default function Search() {
  const [search, setSearch] = useState({
    nombre: "",
  });

  const { nombre } = search;

  const [arrayFilter, setArrayFilter] = useState([]);

  console.log(arrayFilter);

  const filterHero = heroes;

  const obtenerDato = (e) => {
    setSearch({ ...search, [e.target.name]: e.target.value });
  };

  const buscarData = (e) => {
    e.preventDefault();
    const heroFiltros = filterHero.filter((hero) =>
      hero.superhero.toLocaleLowerCase().includes(nombre)
    );
    setArrayFilter(heroFiltros);
  };

  return (
    <div className="w-full flex">
      <div className="w-1/5">
        <form className="p-4" onSubmit={buscarData}>
          <div className="mb-4">
            <input
              className="px-4 py-1 rounded bg-gray-300 leading-tight"
              type="text"
              name="nombre"
              value={nombre}
              autoComplete="off"
              onChange={obtenerDato}
            />
          </div>
          <button
            className="px-4 py-1  text-white font-bold bg-blueGray-900 rounded"
            type="submit"
          >
            Search Hero
          </button>
        </form>
      </div>
      <div className="w-4/5">
        <div className=" flex flex-wrap">
          {arrayFilter.length > 0
            ? arrayFilter.map((hero) => <HeroCard key={hero.id} hero={hero} />)
            : filterHero.map((hero) => <HeroCard key={hero.id} hero={hero} />)}
        </div>
      </div>
    </div>
  );
}
