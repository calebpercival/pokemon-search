import React, { useEffect, useState } from "react";

export default function PokemonInfo({ searchInput }) {
  const [pokemonInfo, setPokemonInfo] = useState({});
  const [baseStats, setBaseStats] = useState([]);

  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${searchInput.toLowerCase()}`)
      .then((response) => response.json())
      .then((data) => {
        setNotFound(false);
        console.log(data);
        if (data == {}) {
          setNotFound(true);
        } else {
          setPokemonInfo({
            name: data.name,
            height: data.height,
            weight: data.weight,
            species: data.species.name,
            baseStats: data.stats,
            games: data.game_indices.length,
            sprites: data.sprites,
          });
          setBaseStats(data.stats);
          console.log(baseStats);
        }
      })
      .catch((error) => {
        console.log("failed to fetch");
        setNotFound(true);
      });
  }, [searchInput]);

  if (searchInput === "") {
    return <div></div>;
  } else if (notFound) {
    return <div>{searchInput} is not a pokemon.</div>;
  } else {
    console.log(pokemonInfo.sprite);
    return (
      <div class="card">
        <ul class="list-group">
          <li class="list-group-item">Name: {pokemonInfo.name}</li>
          <li class="list-group-item">Height: {pokemonInfo.height}</li>
          <li class="list-group-item">Weight: {pokemonInfo.weight}</li>
          <li class="list-group-item">Species: {pokemonInfo.species}</li>
          {baseStats.map((d) => (
            <li class="list-group-item">{d.stat.name + ": " + d.base_stat}</li>
          ))}

          <li class="list-group-item">Number of Games: {pokemonInfo.games}</li>
          <li class="list-group-item">
            <img
              src={pokemonInfo.sprites[Object.keys(pokemonInfo.sprites)[0]]}
            ></img>
          </li>
        </ul>
      </div>
    );
  }
}
