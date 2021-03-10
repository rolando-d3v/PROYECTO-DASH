import React from 'react'
import { heroes } from './dataHero'

export default function getHeroId(id) {

    return heroes.find(hero=> hero.id === id)
}
