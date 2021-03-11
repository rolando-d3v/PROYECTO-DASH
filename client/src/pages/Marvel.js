import React from "react";
import HeroList from "../components/heroes/HeroList";


export default function Marvel() {
  

  return (
    <div>
      <h3 >Heroes de Marvel</h3>
      <div>
        <HeroList publisher='Marvel Comics'/>
      </div>
    </div>
  );
}
