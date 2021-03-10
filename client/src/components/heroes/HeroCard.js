import React from "react";
import { Link } from "react-router-dom";

export default function HeroCard({ hero }) {
  const { id, alter_ego, first_appearance, characters, superhero } = hero;

  return (
    <div className="bg-gray-800 rounded-xl m-4 animate__animated animate__fadeIn " style={{ width: "25rem" }}>
      <div className="relative">
        <div className="flex w-full">
          <img
            className="w-2/5 rounded-l-xl"
            src={`./assets/heroes/${id}.jpg`}
            alt={superhero}
          />
          <div className="py-4 px-5 space-y-4">
            <h3 className="text-white text-xl font-bold">{superhero} </h3>

            {alter_ego === characters && (
              <h3 className="text-white">{alter_ego} </h3>
            )}

            {alter_ego !== characters && (
              <h3 className="text-white">{characters} </h3>
            )}
            <h3 className="text-white ">{first_appearance} </h3>
          </div>
        </div>
        <Link
          className="absolute right-3 bottom-4 bg-indigo-500 hover:bg-indigo-600 rounded-xl px-4 py-1 font-bold text-white"
          type="button"
          to={`/hero/${id}`}      
        >
          Ver mas
        </Link>
      </div>
    </div>
  );
}
