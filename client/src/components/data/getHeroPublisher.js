import React from "react";
import { heroes } from "./dataHero";

export default function getHeroPublisher(publisher) {
  const publisherValido = ["DC Comics", "Marvel Comics"];

  if (!publisherValido.includes(publisher)) {
    throw new Error("publisher no es correcto");
  }
  return heroes.filter((hero) => hero.publisher === publisher);
}
