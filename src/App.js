import React, { useState, useRef } from "react";
import PokemonInfo from "./PokemonInfo";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const searchRef = useRef(null);

  function search(e) {
    setSearchInput(searchRef.current.value);
  }

  return (
    <>
      <div class="container">
        <div class="input-group my-3">
          <input
            class="form-control"
            ref={searchRef}
            type="text"
            placeholder="Search a Pokemon"
          ></input>
          <div class="input-group-append">
            <button class="btn btn-primary" onClick={search}>
              Search
            </button>
          </div>
        </div>
        <PokemonInfo searchInput={searchInput}></PokemonInfo>
      </div>
    </>
  );
}

export default App;
