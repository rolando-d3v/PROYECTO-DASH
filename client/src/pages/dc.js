import React from "react";
import HeroList from "../components/heroes/HeroList";

export default function dc() {
  return (
    <div>
       <h3  >Heroes de DC</h3>
      <HeroList publisher='DC Comics' />
    </div>
  );
}
