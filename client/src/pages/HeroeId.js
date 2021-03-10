import React from "react";
import { Redirect, useParams } from "react-router-dom";
import getHeroId from "../components/data/getHeroId";

export default function HeroeId(props) {
  //   const id = props.match.params.heroId;
  const idx = useParams();
  const heroes = getHeroId(idx.heroId);

  if (!heroes) {
    return <Redirect to="/" />;
  }

  const {
    id,
    superhero,
    // publisher,
    alter_ego,
    first_appearance,
  } = heroes;


  //para poder retrocer a la otra pagina
  const clickReturn = () => {
    props.history.goBack()
  }

  return (
    <div  data-aos="fade-right" className="flex bg-coolGray-600 mt-24 rounded shadow-2xl " >
      <div className="w-1/3">
        <img
          className="bg-cover"
          src={`/assets/heroes/${id}.jpg`}
          alt={superhero}
        />
      </div>
      <div className="p-8">
        <div className='mb-10 space-y-2' >
          <h3 className="text-5xl font-bold text-white">{superhero} </h3>
          <h3 className="text-3xl font-bold text-white">{alter_ego} </h3>
          {/* <h3 className="text-3xl font-bold text-white">{characters} </h3> */}
          <h3 className="text-xl font-bold text-white">{first_appearance} </h3>
        </div>
        <button
          className="px-8 py-1 text-xl bg-indigo-600 rounded font-bold text-white ring-2 ring-blue-600 hover:bg-indigo-700"
          type="button"
          onClick={clickReturn}
        >
          Regresar
        </button>
      </div>
    </div>
  );
}
