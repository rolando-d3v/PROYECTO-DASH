import React, { useMemo } from "react";
import getHeroPublisher from "../data/getHeroPublisher";
import HeroCard from "./HeroCard";

export default function HeroList({ publisher }) {


  //useMemo para memorizar la peticion de datos
  const heroes =  useMemo(() => getHeroPublisher(publisher), [publisher])
  // const heroes = getHeroPublisher(publisher);

  return (
    <div className='flex flex-wrap justify-center' >
      {heroes.map((hero) => (
        <HeroCard key={hero.id} hero={hero} />
      ))}
    </div>
  );
}
